"use server";

type Field = "name" | "company" | "role" | "email" | "phone" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  /** "validation" = fix the marked fields, "send" = delivery failed. */
  error?: "validation" | "send";
  fields?: Partial<Record<Field, "required" | "email">>;
  values?: Partial<Record<Field, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_FROM = "Effi Website <onboarding@resend.dev>";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

/** Contact form handler: validates the lead and emails it through Resend. */
export async function sendContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const read = (key: string, max = 300) => String(formData.get(key) ?? "").trim().slice(0, max);

  // Honeypot: real visitors never see or fill this field.
  if (read("website")) return { status: "success" };

  const values: Record<Field, string> = {
    name: read("name"),
    company: read("company"),
    role: read("role"),
    email: read("email"),
    phone: read("phone", 40),
    message: read("message", 4000),
  };

  const fields: ContactState["fields"] = {};
  if (!values.name) fields.name = "required";
  if (!values.company) fields.company = "required";
  if (!values.email) fields.email = "required";
  else if (!EMAIL_PATTERN.test(values.email)) fields.email = "email";
  if (Object.keys(fields).length > 0) {
    return { status: "error", error: "validation", fields, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set; lead was not delivered");
    return { status: "error", error: "send", values };
  }

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Company", values.company],
    ["Role", values.role || "-"],
    ["Email", values.email],
    ["Phone", values.phone || "-"],
    ["Language", read("lang", 5) || "-"],
    ["Message", values.message || "-"],
  ];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
        to: to.split(",").map((address) => address.trim()),
        reply_to: values.email,
        subject: `New lead from useeffi.com: ${values.name} (${values.company})`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
        html: `<table cellpadding="6" style="font-family:sans-serif;font-size:15px">${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#56605a;vertical-align:top">${label}</td><td dir="auto" style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}</table>`,
      }),
    });

    if (!response.ok) {
      console.error(`[contact] Resend responded with ${response.status}`);
      return { status: "error", error: "send", values };
    }
  } catch (error) {
    console.error("[contact] request to Resend failed", error instanceof Error ? error.message : error);
    return { status: "error", error: "send", values };
  }

  return { status: "success" };
}
