"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import { useActionState, useEffect } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import type { Dict } from "@/content/types";
import { TrackingFields } from "../tracking-fields";
import { Frame, Label, pad } from "../ui";

const initialState: ContactState = { status: "idle" };

/** Underline-only field on the dark background. */
const fieldClass =
  "mt-2 w-full rounded-none border-0 border-b border-white/40 bg-transparent px-0 py-2.5 text-base text-white placeholder:text-dark-muted focus:border-accent-on-dark focus:shadow-[0_1px_0_0_var(--accent-on-dark)] focus:outline-none aria-[invalid=true]:border-[#FCA5A5]";

export function Contact({ t }: { t: Dict }) {
  const c = t.contact;
  return (
    <section id="contact" className="on-dark bg-ink text-white">
      <Frame dark>
        <div className={`grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:gap-24 ${pad}`}>
          <div className="reveal">
            <Label dark>{c.eyebrow}</Label>
            <h2 className="type-h2 mt-6">{c.title}</h2>
            <p className="type-lead mt-7 max-w-md">{c.lead}</p>
            <ul className="type-item mt-12 max-w-md border-t border-white/12">
              {c.points.map((point) => (
                <li key={point} className="border-b border-white/12 py-3.5">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm t={t} />
        </div>
      </Frame>
    </section>
  );
}

function ContactForm({ t }: { t: Dict }) {
  const f = t.contact.form;
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  useEffect(() => {
    if (state.status === "success") track("contact_submitted", { lang: t.lang });
  }, [state.status, t.lang]);

  if (state.status === "success") {
    return (
      <div role="status" className="flex min-h-72 flex-col justify-center">
        <h3 className="type-h2">{f.successTitle}</h3>
        <p className="type-lead mt-4">{f.successText}</p>
      </div>
    );
  }

  type Name = keyof NonNullable<ContactState["fields"]>;

  const fieldError = (name: Name) => {
    const code = state.fields?.[name];
    if (!code) return null;
    return (
      <span id={`${name}-error`} className="mt-2 block text-sm text-[#FCA5A5]">
        {code === "email" ? f.errorEmail : f.errorRequired}
      </span>
    );
  };

  const invalid = (name: Name) => ({
    "aria-invalid": state.fields?.[name] ? true : undefined,
    "aria-describedby": state.fields?.[name] ? `${name}-error` : undefined,
  });

  const labelClass = "block text-[15px] text-dark-muted";
  const optional = <span> ({f.optional})</span>;

  return (
    <form action={formAction} noValidate className="relative grid content-start gap-x-8 gap-y-8 sm:grid-cols-2">
      <input type="hidden" name="lang" value={t.lang} />
      <TrackingFields />
      {/* Honeypot field, hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -start-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={labelClass}>
        {f.name}
        <input
          name="name"
          required
          autoComplete="name"
          defaultValue={state.values?.name}
          className={fieldClass}
          {...invalid("name")}
        />
        {fieldError("name")}
      </label>

      <label className={labelClass}>
        {f.company}
        <input
          name="company"
          required
          autoComplete="organization"
          defaultValue={state.values?.company}
          className={fieldClass}
          {...invalid("company")}
        />
        {fieldError("company")}
      </label>

      <label className={labelClass}>
        {f.email}
        <input
          name="email"
          type="email"
          required
          dir="ltr"
          autoComplete="email"
          defaultValue={state.values?.email}
          className={`${fieldClass} rtl:text-right`}
          {...invalid("email")}
        />
        {fieldError("email")}
      </label>

      <label className={labelClass}>
        {f.phone}
        {optional}
        <input
          name="phone"
          type="tel"
          dir="ltr"
          autoComplete="tel"
          defaultValue={state.values?.phone}
          className={`${fieldClass} rtl:text-right`}
        />
      </label>

      <label className={`${labelClass} sm:col-span-2`}>
        {f.role}
        {optional}
        <input
          name="role"
          autoComplete="organization-title"
          defaultValue={state.values?.role}
          className={fieldClass}
        />
      </label>

      <label className={`${labelClass} sm:col-span-2`}>
        {f.message}
        {optional}
        <textarea
          name="message"
          rows={3}
          placeholder={f.messagePlaceholder}
          defaultValue={state.values?.message}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="sm:col-span-2">
        {state.error === "send" ? (
          <p role="alert" className="mb-6 border-s-2 border-[#FCA5A5] ps-4 text-[15px] text-[#FCA5A5]">
            {f.errorSend}
          </p>
        ) : null}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
          >
            {pending ? f.sending : f.submit}
            {pending ? null : <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />}
          </button>
          <p className="text-sm text-dark-muted">
            {f.consentPrefix}{" "}
            <a href={t.privacyHref} className="text-accent-on-dark underline underline-offset-4 hover:text-white">
              {f.consentLink}
            </a>
            .
          </p>
        </div>
      </div>
    </form>
  );
}
