"use server";

import { headers } from "next/headers";
import { after } from "next/server";
import { isRateLimited, notifyLead, saveLead, type Lead, type LeadContext } from "@/lib/leads";

type Field = "name" | "company" | "role" | "email" | "phone" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  /** "validation" = fix the marked fields, "send" = the lead was not saved. */
  error?: "validation" | "send";
  fields?: Partial<Record<Field, "required" | "email" | "phone">>;
  values?: Partial<Record<Field, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Digits with optional +, spaces, dashes, dots and parentheses; 9 to 15 digits. */
const PHONE_CHARS = /^\+?[\d\s\-().]+$/;

function isPhone(value: string) {
  const digits = value.replace(/\D/g, "").length;
  return PHONE_CHARS.test(value) && digits >= 9 && digits <= 15;
}

/** Rough visit context for the notification email (Vercel adds the geo headers). */
async function visitContext(): Promise<LeadContext> {
  const h = await headers();
  const decode = (value: string | null) => {
    if (!value) return undefined;
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };
  const ua = h.get("user-agent") ?? "";
  const device = /iPhone|Android.+Mobile|Mobile/i.test(ua) ? "נייד" : /iPad|Tablet/i.test(ua) ? "טאבלט" : ua ? "מחשב" : undefined;
  let country = h.get("x-vercel-ip-country") ?? undefined;
  try {
    if (country) country = new Intl.DisplayNames(["he"], { type: "region" }).of(country) ?? country;
  } catch {
    // Keep the two-letter code.
  }
  return { country, city: decode(h.get("x-vercel-ip-city")), device };
}

async function clientIp() {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

/**
 * Contact form handler: validates the lead, saves it to the database, and
 * (when LEAD_NOTIFY_EMAIL is set) emails it after the response is sent.
 * Success is reported only after the row is written.
 */
export async function sendContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const read = (key: string, max: number) =>
    String(formData.get(key) ?? "")
      .trim()
      .slice(0, max);

  // Honeypot: real visitors never see or fill this field.
  if (read("website", 200)) return { status: "success" };

  const lang = read("lang", 5) === "en" ? "en" : "he";

  const values: Record<Field, string> = {
    name: read("name", 120),
    company: read("company", 160),
    phone: read("phone", 40),
    email: read("email", 200),
    role: read("role", 120),
    message: read("message", 4000),
  };

  const fields: ContactState["fields"] = {};
  if (!values.name) fields.name = "required";
  // The form asks for name and phone; company and email are optional.
  if (values.email && !EMAIL_PATTERN.test(values.email)) fields.email = "email";
  if (!values.phone) fields.phone = "required";
  else if (!isPhone(values.phone)) fields.phone = "phone";
  if (Object.keys(fields).length > 0) {
    return { status: "error", error: "validation", fields, values };
  }

  const lead: Lead = {
    ...values,
    lang,
    utm_source: read("utm_source", 200),
    utm_medium: read("utm_medium", 200),
    utm_campaign: read("utm_campaign", 200),
    referrer: read("referrer", 500),
  };

  let id: string;
  try {
    if (await isRateLimited(await clientIp())) {
      console.warn("[contact] rate limit reached; lead rejected");
      return { status: "error", error: "send", values };
    }
    id = await saveLead(lead);
  } catch (error) {
    console.error("[contact] lead was not saved", error instanceof Error ? error.message : error);
    return { status: "error", error: "send", values };
  }

  const context = await visitContext();
  after(() => notifyLead(lead, id, context));
  return { status: "success" };
}
