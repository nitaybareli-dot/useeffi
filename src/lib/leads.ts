import { createHash } from "node:crypto";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

export type Lead = {
  name: string;
  company: string;
  phone: string;
  email: string;
  role: string;
  message: string;
  lang: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  referrer: string;
};

/** Submissions allowed per IP inside the window below. */
const RATE_LIMIT = 5;
const RATE_WINDOW_MINUTES = 10;

let client: NeonQueryFunction<false, false> | null = null;
let schemaReady: Promise<void> | null = null;

function db() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  client ??= neon(url);
  return client;
}

/** Creates the tables on first use. Mirrors db/schema.sql. */
function ensureSchema() {
  schemaReady ??= (async () => {
    const sql = db();
    await sql`CREATE TABLE IF NOT EXISTS leads (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      name TEXT NOT NULL,
      company TEXT NOT NULL,
      phone TEXT,
      email TEXT NOT NULL,
      role TEXT,
      message TEXT,
      lang TEXT NOT NULL,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      referrer TEXT,
      status TEXT NOT NULL DEFAULT 'new'
    )`;
    await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)`;
    await sql`CREATE TABLE IF NOT EXISTS lead_attempts (
      ip_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
    await sql`CREATE INDEX IF NOT EXISTS lead_attempts_ip_idx ON lead_attempts (ip_hash, created_at)`;
  })().catch((error) => {
    // Let the next request try again.
    schemaReady = null;
    throw error;
  });
  return schemaReady;
}

const hashIp = (ip: string) => createHash("sha256").update(`effi-lead:${ip}`).digest("hex");

/**
 * Records an attempt for this IP and reports whether it is over the limit.
 * The IP is stored only as a hash, and attempts older than a day are removed.
 */
export async function isRateLimited(ip: string) {
  await ensureSchema();
  const sql = db();
  const ipHash = hashIp(ip);
  await sql`DELETE FROM lead_attempts WHERE created_at < now() - interval '1 day'`;
  const rows = await sql`
    SELECT count(*)::int AS count FROM lead_attempts
    WHERE ip_hash = ${ipHash}
      AND created_at > now() - make_interval(mins => ${RATE_WINDOW_MINUTES})`;
  const count = Number(rows[0]?.count ?? 0);
  if (count >= RATE_LIMIT) return true;
  await sql`INSERT INTO lead_attempts (ip_hash) VALUES (${ipHash})`;
  return false;
}

/** Inserts the lead and returns its id. Throws if the row was not written. */
export async function saveLead(lead: Lead) {
  await ensureSchema();
  const sql = db();
  const empty = (value: string) => value || null;
  const rows = await sql`
    INSERT INTO leads
      (name, company, phone, email, role, message, lang, utm_source, utm_medium, utm_campaign, referrer)
    VALUES
      (${lead.name}, ${lead.company}, ${empty(lead.phone)}, ${lead.email}, ${empty(lead.role)},
       ${empty(lead.message)}, ${lead.lang}, ${empty(lead.utm_source)}, ${empty(lead.utm_medium)},
       ${empty(lead.utm_campaign)}, ${empty(lead.referrer)})
    RETURNING id`;
  const id = rows[0]?.id;
  if (id === undefined) throw new Error("Insert returned no id");
  return String(id);
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

/**
 * Emails the lead to LEAD_NOTIFY_EMAIL through Resend. Skips quietly when
 * LEAD_NOTIFY_EMAIL is not set. Never throws: the lead is already saved.
 */
export async function notifyLead(lead: Lead, id: string) {
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!to) return;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[leads] LEAD_NOTIFY_EMAIL is set but RESEND_API_KEY is not; notification skipped");
    return;
  }

  const rows: [string, string][] = [
    ["Lead ID", id],
    ["Name", lead.name],
    ["Company", lead.company],
    ["Phone", lead.phone || "-"],
    ["Email", lead.email],
    ["Role", lead.role || "-"],
    ["Message", lead.message || "-"],
    ["Language", lead.lang],
    ["UTM source", lead.utm_source || "-"],
    ["UTM medium", lead.utm_medium || "-"],
    ["UTM campaign", lead.utm_campaign || "-"],
    ["Referrer", lead.referrer || "-"],
  ];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Effi Website <onboarding@resend.dev>",
        to: to.split(",").map((address) => address.trim()),
        reply_to: lead.email,
        subject: `New lead from useeffi.com: ${lead.name} (${lead.company})`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
        html: `<table cellpadding="6" style="font-family:sans-serif;font-size:15px">${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#5f5f5b;vertical-align:top">${label}</td><td dir="auto" style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}</table>`,
      }),
    });
    if (!response.ok) console.error(`[leads] Resend responded with ${response.status} for lead ${id}`);
  } catch (error) {
    console.error(`[leads] notification for lead ${id} failed`, error instanceof Error ? error.message : error);
  }
}
