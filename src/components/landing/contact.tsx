"use client";

import { track } from "@vercel/analytics";
import { useActionState, useEffect, useState, type FormEvent } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import type { Landing } from "@/content/landing";
import { TrackingFields } from "../tracking-fields";
import { Avatar } from "./avatar";
import { Arrow } from "./parts";

const initialState: ContactState = { status: "idle" };

const PHONE_CHARS = /^\+?[\d\s\-().]+$/;
const isPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").length;
  return PHONE_CHARS.test(value) && digits >= 9 && digits <= 15;
};

type Errors = Partial<Record<"name" | "phone", string>>;

/**
 * A short form introduced by Effi: name and phone, company optional.
 * It posts to the same server action, so leads are stored, rate limited and
 * emailed as before.
 */
export function Contact({ t, privacyHref }: { t: Landing; privacyHref: string }) {
  const c = t.contact;
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    // Conversion event: fires only after the lead was saved.
    if (state.status === "success") track("contact_submitted", { lang: t.lang });
    if (state.status !== "error") return;
    const fields = state.fields ?? {};
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setErrors({
      name: fields.name ? c.errorRequired : undefined,
      phone: fields.phone === "phone" ? c.errorPhone : fields.phone ? c.errorRequired : undefined,
    });
  }, [state, t.lang, c.errorPhone, c.errorRequired]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const next: Errors = {
      name: name ? undefined : c.errorRequired,
      phone: !phone ? c.errorRequired : isPhone(phone) ? undefined : c.errorPhone,
    };
    setErrors(next);
    if (next.name || next.phone) {
      event.preventDefault();
      return;
    }
    setFirstName(name.split(/\s+/)[0] ?? "");
  };

  const done = state.status === "success";
  const sendFailed = state.status === "error" && state.error === "send";
  const v = state.values;

  return (
    <section id="contact" className="lp-grid" style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap lp-section" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 48px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--lp-soft)" }}>
            <span className="lp-pulse" style={{ width: 8, height: 8, borderRadius: 999, background: "var(--acc)" }} />
            {c.meta}
          </span>
          <h2 className="lp-h2" style={{ fontSize: "clamp(32px, 4vw, 60px)", maxWidth: 900 }}>
            {c.titleA}{" "}
            <span className="lp-dim">{c.titleB}</span>
          </h2>
        </div>

        <div
          id="contact-chat"
          className="lp-rv"
          style={{ maxWidth: 880, border: "1px solid var(--lp-border2)", borderRadius: 16, background: "var(--lp-card)", padding: "clamp(20px, 3vw, 32px)", display: "flex", flexDirection: "column", gap: 24 }}
        >
          {done ? (
            <div className="lp-chat-done" role="status">
              <span className="lp-done-badge">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2.5 7.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.sent}
              </span>
              <span className="lp-hop lp-hop-win">
                <Avatar size={64} />
              </span>
              <p>{c.done.replace("{name}", firstName)}</p>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span className="lp-hop" style={{ flexShrink: 0 }}>
                  <Avatar size={40} />
                </span>
                <div className="lp-chat-in" style={{ fontSize: 17 }}>
                  {c.greeting}
                </div>
              </div>

              <form action={formAction} onSubmit={onSubmit} noValidate className="lp-form">
                <input type="hidden" name="lang" value={t.lang} />
                <TrackingFields />
                {/* Honeypot field, hidden from people and assistive tech. */}
                <div aria-hidden="true" style={{ position: "absolute", insetInlineStart: -9999, top: 0, width: 0, height: 0, overflow: "hidden" }}>
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <label>
                  {c.name}
                  <input
                    id="contact-chat-input"
                    name="name"
                    autoComplete="name"
                    defaultValue={v?.name}
                    aria-invalid={errors.name ? true : undefined}
                    className="lp-chat-input"
                    onChange={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
                  />
                  {errors.name ? <span className="lp-form-err">{errors.name}</span> : null}
                </label>
                <label>
                  {c.phone}
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    dir="ltr"
                    defaultValue={v?.phone}
                    aria-invalid={errors.phone ? true : undefined}
                    className="lp-chat-input"
                    style={{ textAlign: t.lang === "he" ? "right" : "left" }}
                    onChange={() => errors.phone && setErrors((e) => ({ ...e, phone: undefined }))}
                  />
                  {errors.phone ? <span className="lp-form-err">{errors.phone}</span> : null}
                </label>
                <label>
                  <span>
                    {c.company} <small>{c.optional}</small>
                  </span>
                  <input name="company" autoComplete="organization" defaultValue={v?.company} className="lp-chat-input" />
                </label>
                <button type="submit" disabled={pending} aria-busy={pending} className="lp-btn" style={{ minHeight: 48, justifyContent: "center" }}>
                  {c.submit}
                  <Arrow />
                </button>
              </form>
              {sendFailed ? (
                <p role="alert" className="lp-form-err" style={{ margin: 0, fontSize: 15 }}>
                  {c.errorSend}
                </p>
              ) : null}
            </>
          )}
        </div>

        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 880 }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--lp-soft)" }}>{c.team}</p>
          <p style={{ margin: 0, fontSize: 13, color: "var(--lp-mute)" }}>
            {c.note}{" "}
            <a href={privacyHref} style={{ color: "var(--lp-soft)", textDecoration: "underline", textUnderlineOffset: 4 }}>
              {c.privacy}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
