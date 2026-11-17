"use client";

import { track } from "@vercel/analytics";
import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import type { Landing } from "@/content/landing";
import { TrackingFields } from "../tracking-fields";
import { Avatar } from "./avatar";
import { Arrow } from "./parts";

const initialState: ContactState = { status: "idle" };
const FIELDS = ["name", "company", "phone", "email"] as const;
type Field = (typeof FIELDS)[number];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS = /^\+?[\d\s\-().]+$/;
const isPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").length;
  return PHONE_CHARS.test(value) && digits >= 9 && digits <= 15;
};

const INPUT_TYPES: Record<Field, { type: string; autoComplete: string; dir?: "ltr"; inputMode?: "tel" | "email" }> = {
  name: { type: "text", autoComplete: "name" },
  company: { type: "text", autoComplete: "organization" },
  phone: { type: "tel", autoComplete: "tel", dir: "ltr", inputMode: "tel" },
  email: { type: "email", autoComplete: "email", dir: "ltr", inputMode: "email" },
};

function EffiBubble({ children, error = false }: { children: string; error?: boolean }) {
  return (
    <div className="lp-chat-in" style={error ? { color: "#fca5a5" } : undefined}>
      {children}
    </div>
  );
}

/** Rail offset: half the side padding plus half a node, so Effi lands dead centre on each stop. */
const RAIL = 29;

/**
 * Progress across the four questions, with Effi hopping from stop to stop
 * like a little platformer, so the visitor sees how short this is.
 */
function Steps({ labels, pos }: { labels: string[]; pos: number }) {
  const stops = labels.length; // the last stop is the finish
  const frac = pos / stops;
  return (
    <div className="lp-steps" aria-hidden="true">
      <div className="lp-steps-rail">
        <span style={{ width: `${frac * 100}%` }} />
      </div>
      <ol>
        {labels.map((label, i) => (
          <li key={label} data-state={i < pos ? "done" : i === pos ? "now" : "next"}>
            <i />
            <b>{label}</b>
          </li>
        ))}
        <li data-state={pos >= stops ? "done" : "next"} className="lp-steps-goal">
          <i />
        </li>
      </ol>
      <div
        className="lp-steps-effi"
        style={{ insetInlineStart: `calc(${RAIL}px + (100% - ${RAIL * 2}px) * ${frac} - 15px)` }}
      >
        <span key={pos} className={pos >= stops ? "lp-hop lp-hop-win" : "lp-hop"}>
          <Avatar size={30} />
        </span>
        <span key={`s${pos}`} className="lp-hop-shadow" />
      </div>
    </div>
  );
}

/**
 * The contact form as a short chat with Effi: one question at a time.
 * It posts to the same server action as before, so leads are stored, rate
 * limited and emailed exactly as they were.
 */
export function Contact({ t, privacyHref }: { t: Landing; privacyHref: string }) {
  const c = t.contact;
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const [answers, setAnswers] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const step = Math.min(answers.length, FIELDS.length - 1);
  const field = FIELDS[step];
  const firstName = (answers[0] ?? "").trim().split(/\s+/)[0] ?? "";
  const ask = (i: number) => c.questions[i].replace("{name}", firstName);
  const labels: Record<Field, string> = { name: c.name, company: c.company, phone: c.phone, email: c.email };
  const shortLabels: Record<Field, string> = { name: c.steps[0], company: c.steps[1], phone: c.steps[2], email: c.steps[3] };

  useEffect(() => {
    // Conversion event: fires only after the lead was saved.
    if (state.status === "success") track("contact_submitted", { lang: t.lang });
    if (state.status !== "error") return;
    // The server rejected something: step back to the first field it flagged.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSubmitted(false);
    const flagged = FIELDS.findIndex((f) => state.fields?.[f]);
    if (flagged >= 0) {
      const code = state.fields?.[FIELDS[flagged]];
      setAnswers((prev) => prev.slice(0, flagged));
      setDraft(state.values?.[FIELDS[flagged]] ?? "");
      setError(code === "email" ? c.errorEmail : code === "phone" ? c.errorPhone : c.errorRequired);
    } else {
      setError(c.errorSend);
    }
  }, [state, t.lang, c.errorEmail, c.errorPhone, c.errorRequired, c.errorSend]);

  useEffect(() => {
    // Keep the newest message in view inside the chat (not the whole page).
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
    if (answers.length > 0 && !submitted) inputRef.current?.focus();
  }, [answers.length, submitted, error, state.status]);

  const validate = (value: string): string | null => {
    if (!value) return c.errorRequired;
    if (field === "email" && !EMAIL_PATTERN.test(value)) return c.errorEmail;
    if (field === "phone" && !isPhone(value)) return c.errorPhone;
    return null;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const value = draft.trim();
    const problem = validate(value);
    if (problem) {
      event.preventDefault();
      setError(problem);
      return;
    }
    setError(null);
    if (field !== "email") {
      // Not the last question yet: keep the conversation going without posting.
      event.preventDefault();
      setAnswers((prev) => [...prev, value]);
      setDraft("");
      return;
    }
    // Last answer: let the form post to the server action.
    setSubmitted(true);
  };

  const done = state.status === "success";
  const showEmail = submitted || done;

  return (
    <section id="contact" className="lp-grid" style={{ position: "relative", overflow: "hidden", borderTop: "1px solid #1c1c1c" }}>
      <svg
        className="lp-orbit"
        aria-hidden="true"
        viewBox="0 0 600 600"
        width="640"
        height="640"
        style={{ position: "absolute", top: "50%", insetInlineEnd: -140, transform: "translateY(-50%)", pointerEvents: "none" }}
      >
        <circle cx="300" cy="300" r="100" fill="none" stroke="#1f1f1f" />
        <circle cx="300" cy="300" r="180" fill="none" stroke="#1f1f1f" />
        <circle cx="300" cy="300" r="260" fill="none" stroke="#171717" strokeDasharray="2 6" />
        <g className="lp-spin lp-spin-fast">
          <circle cx="300" cy="300" r="100" fill="none" stroke="none" />
          <circle cx="300" cy="200" r="5" fill="#fff" />
        </g>
        <g className="lp-spin">
          <circle cx="300" cy="300" r="180" fill="none" stroke="none" />
          <circle cx="480" cy="300" r="7" style={{ fill: "var(--acc)" }} />
          <circle cx="120" cy="300" r="4" fill="#5a5a5a" />
        </g>
        <g className="lp-spin lp-spin-rev">
          <circle cx="300" cy="300" r="260" fill="none" stroke="none" />
          <circle cx="40" cy="300" r="4" fill="#8c8c8c" />
          <circle cx="300" cy="40" r="4" fill="#5a5a5a" />
          <circle cx="484" cy="484" r="3" fill="#8c8c8c" />
        </g>
        <rect x="278" y="278" width="44" height="44" rx="6" fill="#000" stroke="#fff" strokeWidth="1.5" />
        <rect className="lp-pulse" x="293" y="293" width="14" height="14" rx="2" style={{ fill: "var(--acc)" }} />
      </svg>

      <div className="lp-wrap lp-section" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 56px)" }}>
        <div className="lp-rv" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--lp-soft)" }}>
            <span className="lp-pulse" style={{ width: 8, height: 8, borderRadius: 999, background: "var(--acc)" }} />
            {c.meta}
          </span>
          <h2 className="lp-h2" style={{ fontSize: "clamp(48px, 7vw, 112px)", maxWidth: 1050 }}>
            {c.titleA}
            <span className="lp-dim">{c.titleB}</span>
          </h2>
        </div>

        <form
          action={formAction}
          onSubmit={onSubmit}
          noValidate
          className="lp-rv"
          style={{ position: "relative", maxWidth: 720, border: "1px solid #262626", borderRadius: 16, background: "#070707", overflow: "hidden" }}
        >
          <input type="hidden" name="lang" value={t.lang} />
          <TrackingFields />
          {/* Honeypot field, hidden from people and assistive tech. */}
          <div aria-hidden="true" style={{ position: "absolute", insetInlineStart: -9999, top: 0, width: 0, height: 0, overflow: "hidden" }}>
            <label>
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          {answers.map((value, i) => (
            <input key={FIELDS[i]} type="hidden" name={FIELDS[i]} value={value} />
          ))}

          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", borderBottom: "1px solid var(--lp-line)", background: "#0b0b0b" }}>
            <Avatar size={36} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 15, fontWeight: 600 }}>{t.chat.name}</span>
              <span style={{ fontSize: 12, color: "var(--acc)" }}>{c.online}</span>
            </div>
            <span className="lp-mono" dir="ltr" style={{ fontSize: 12, color: "var(--lp-mute)" }}>
              {done ? FIELDS.length : step + 1}/{FIELDS.length}
            </span>
          </div>

          <Steps labels={FIELDS.map((f) => shortLabels[f])} pos={done ? FIELDS.length : answers.length} />

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
          <div ref={logRef} aria-live="polite" className="lp-chat-log" style={{ display: "flex", flexDirection: "column", gap: 10, padding: 20, minHeight: 260, maxHeight: 420, overflowY: "auto" }}>
            {answers.map((value, i) => (
              <div key={`q${i}`} style={{ display: "contents" }}>
                <EffiBubble>{ask(i)}</EffiBubble>
                <div className="lp-chat-out" dir={FIELDS[i] === "phone" || FIELDS[i] === "email" ? "ltr" : undefined}>
                  {value}
                </div>
              </div>
            ))}
            {!done ? <EffiBubble>{ask(step)}</EffiBubble> : null}
            {showEmail ? (
              <div className="lp-chat-out" dir="ltr">
                {draft.trim() || state.values?.email}
              </div>
            ) : null}
            {error ? <EffiBubble error>{error}</EffiBubble> : null}
            {pending ? (
              <div className="lp-chat-in" style={{ display: "flex", gap: 5, padding: "14px 16px" }} aria-label={t.chat.typing}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="lp-dot" style={{ width: 7, height: 7, borderRadius: 99, background: "var(--lp-soft)" }} />
                ))}
              </div>
            ) : null}
          </div>

          {!done ? (
            <div style={{ display: "flex", gap: 10, padding: 12, borderTop: "1px solid var(--lp-line)" }}>
              <label htmlFor="contact-chat-input" className="sr-only">
                {labels[field]}
              </label>
              <input
                ref={inputRef}
                id="contact-chat-input"
                name={field === "email" ? "email" : undefined}
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value);
                  if (error) setError(null);
                }}
                placeholder={labels[field]}
                disabled={submitted || pending}
                aria-invalid={error ? true : undefined}
                className="lp-chat-input"
                style={INPUT_TYPES[field].dir ? { textAlign: t.lang === "he" ? "right" : "left" } : undefined}
                {...INPUT_TYPES[field]}
              />
              <button type="submit" disabled={submitted || pending} aria-busy={pending} className="lp-btn lp-btn-md" aria-label={c.send}>
                <Arrow />
              </button>
            </div>
          ) : null}
            </>
          )}
        </form>

        <p className="lp-rv" style={{ margin: 0, fontSize: 13, color: "var(--lp-mute)" }}>
          {c.note}{" "}
          <a href={privacyHref} style={{ color: "var(--lp-soft)", textDecoration: "underline", textUnderlineOffset: 4 }}>
            {c.privacy}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
