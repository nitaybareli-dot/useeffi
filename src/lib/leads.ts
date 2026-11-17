import { createHash, randomUUID } from "node:crypto";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { put } from "@vercel/blob";

/**
 * Where leads are stored:
 * - Postgres (Neon) when DATABASE_URL or POSTGRES_URL is set.
 * - Otherwise Vercel Blob (private), when BLOB_READ_WRITE_TOKEN is set:
 *   one JSON file per lead under leads/YYYY-MM-DD/.
 */
const hasPostgres = () => Boolean(process.env.DATABASE_URL || process.env.POSTGRES_URL);

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
async function pgRateLimited(ip: string) {
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

async function pgSaveLead(lead: Lead) {
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

/** Per-instance limiter used with Blob storage, which has no shared counter. */
const attempts = new Map<string, number[]>();

function memoryRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MINUTES * 60_000;
  const key = hashIp(ip);
  const recent = (attempts.get(key) ?? []).filter((time) => time > windowStart);
  if (recent.length >= RATE_LIMIT) {
    attempts.set(key, recent);
    return true;
  }
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5000) attempts.clear();
  return false;
}

async function blobSaveLead(lead: Lead) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) throw new Error("No lead storage configured");
  const createdAt = new Date().toISOString();
  const id = randomUUID().slice(0, 8);
  const record = { id, created_at: createdAt, ...lead, status: "new" };
  // Time-first file names sort leads chronologically in the Blob browser.
  const pathname = `leads/${createdAt.slice(0, 10)}/${createdAt.replace(/[:.]/g, "-")}-${id}.json`;
  await put(pathname, JSON.stringify(record, null, 2), {
    access: "private",
    contentType: "application/json; charset=utf-8",
    addRandomSuffix: false,
  });
  return id;
}

/** Reports whether this IP is over the submission limit, and records the attempt. */
export async function isRateLimited(ip: string) {
  return hasPostgres() ? pgRateLimited(ip) : memoryRateLimited(ip);
}

/** Saves the lead and returns its id. Throws if it was not written. */
export async function saveLead(lead: Lead) {
  return hasPostgres() ? pgSaveLead(lead) : blobSaveLead(lead);
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

/** Context about the visit, read from request headers. Emailed, not stored. */
export type LeadContext = {
  country?: string;
  city?: string;
  device?: string;
};

/** Israeli local numbers (05x...) become international for tel: and WhatsApp links. */
function intlDigits(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (phone.trim().startsWith("+")) return digits;
  if (digits.startsWith("972")) return digits;
  if (digits.startsWith("0")) return `972${digits.slice(1)}`;
  return digits;
}

function sourceOf(lead: Lead) {
  const utm = [lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(" / ");
  if (utm) return utm;
  if (!lead.referrer) return "כניסה ישירה";
  try {
    return new URL(lead.referrer).hostname.replace(/^www\./, "");
  } catch {
    return lead.referrer;
  }
}

function button(href: string, label: string, primary = false) {
  const style = primary
    ? "background:#5b8cff;color:#000;border:1px solid #5b8cff"
    : "background:#fff;color:#111;border:1px solid #d6d6d6";
  return `<a href="${escapeHtml(href)}" style="${style};display:inline-block;padding:10px 16px;margin:0 0 8px 8px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none">${label}</a>`;
}

/**
 * Emails the lead to LEAD_NOTIFY_EMAIL through Resend: a short Hebrew card with
 * one-tap call, WhatsApp and reply buttons. Skips quietly when
 * LEAD_NOTIFY_EMAIL is not set. Never throws: the lead is already saved.
 */
export async function notifyLead(lead: Lead, id: string, context: LeadContext = {}) {
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!to) return;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[leads] LEAD_NOTIFY_EMAIL is set but RESEND_API_KEY is not; notification skipped");
    return;
  }

  const when = new Intl.DateTimeFormat("he-IL", {
    timeZone: "Asia/Jerusalem",
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date());
  const place = [context.city, context.country].filter(Boolean).join(", ");
  const phone = intlDigits(lead.phone);

  const rows: [string, string][] = [
    ["טלפון", lead.phone || "-"],
    ["אימייל", lead.email],
    ...(lead.role ? ([["תפקיד", lead.role]] as [string, string][]) : []),
    ...(lead.message ? ([["הודעה", lead.message]] as [string, string][]) : []),
    ["מתי", when],
    ["מאיפה הגיע", sourceOf(lead)],
    ["שפת האתר", lead.lang === "en" ? "אנגלית" : "עברית"],
    ...(place ? ([["מיקום משוער", place]] as [string, string][]) : []),
    ...(context.device ? ([["מכשיר", context.device]] as [string, string][]) : []),
    ["מספר ליד", `#${id}`],
  ];

  const buttons = [
    phone ? button(`https://wa.me/${phone}`, "וואטסאפ", true) : "",
    phone ? button(`tel:+${phone}`, "חיוג") : "",
    button(`mailto:${lead.email}`, "מענה במייל"),
  ].join("");

  const html = `<!doctype html><html dir="rtl" lang="he"><body style="margin:0;padding:24px;background:#f4f4f2;font-family:Arial,Helvetica,sans-serif;color:#111">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" dir="rtl" style="max-width:560px;width:100%;background:#fff;border:1px solid #e4e4e0;border-radius:14px;overflow:hidden;text-align:right">
<tr><td style="background:#000;padding:18px 24px;color:#fff;font-size:14px"><span style="display:inline-block;width:10px;height:10px;background:#5b8cff;border-radius:2px;margin-left:8px"></span>ליד חדש מהאתר · useeffi.com</td></tr>
<tr><td style="padding:24px 24px 8px">
<div style="font-size:24px;font-weight:700;line-height:1.3">${escapeHtml(lead.name)}</div>
<div style="font-size:16px;color:#5f5f5b;margin-top:4px">${escapeHtml(lead.company)}</div>
</td></tr>
<tr><td style="padding:12px 24px 8px">${buttons}</td></tr>
<tr><td style="padding:8px 24px 24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;border-top:1px solid #eee">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#7a7a75;width:120px;vertical-align:top">${label}</td><td dir="auto" style="padding:10px 0;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
  )
  .join("")}
</table>
</td></tr>
</table>
<div style="font-size:12px;color:#9a9a95;margin-top:12px">לחיצה על "השב" במייל הזה תענה ישירות לפונה</div>
</td></tr></table>
</body></html>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Effi Website <onboarding@resend.dev>",
        to: to.split(",").map((address) => address.trim()),
        reply_to: lead.email,
        subject: `ליד חדש: ${lead.name} · ${lead.company}`,
        text: [`ליד חדש מ-useeffi.com`, `${lead.name} · ${lead.company}`, ...rows.map(([label, value]) => `${label}: ${value}`)].join("\n"),
        html,
      }),
    });
    if (!response.ok) {
      // Resend explains what it rejected (bad address, unverified sender...). No secrets in it.
      const detail = (await response.text().catch(() => "")).slice(0, 300);
      console.error(`[leads] Resend responded with ${response.status} for lead ${id}: ${detail}`);
    }
  } catch (error) {
    console.error(`[leads] notification for lead ${id} failed`, error instanceof Error ? error.message : error);
  }
}
