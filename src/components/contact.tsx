"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import { useActionState, useEffect } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import type { Dict } from "@/content/types";
import { Frame, Label, TwoTone, pad } from "./ui";

const initialState: ContactState = { status: "idle" };

/** Underline-only field on the dark background. */
const fieldClass =
  "mt-2 w-full rounded-none border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-base text-paper placeholder:text-white/30 focus:border-paper focus:shadow-[0_1px_0_0_#fff] focus:outline-none aria-[invalid=true]:border-red-400";

export function Contact({ t }: { t: Dict }) {
  const c = t.contact;
  return (
    <section id="contact" className="on-dark bg-ink text-paper">
      <Frame dark>
        <div className={`grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:gap-24 ${pad}`}>
          <div className="reveal">
            <Label dark>{c.eyebrow}</Label>
            <h2 className="mt-6 text-balance text-[clamp(2.3rem,5vw,4.25rem)] font-light leading-[1.05] tracking-[-0.03em]">
              <TwoTone text={c.title} dark />
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-dim">{c.lead}</p>
            <ul className="mt-12 max-w-md border-t border-white/12 text-[15px]">
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
        <h3 className="text-3xl font-light tracking-tight sm:text-4xl">{f.successTitle}</h3>
        <p className="mt-4 text-lg text-dim">{f.successText}</p>
      </div>
    );
  }

  type Name = keyof NonNullable<ContactState["fields"]>;

  const fieldError = (name: Name) => {
    const code = state.fields?.[name];
    if (!code) return null;
    return (
      <span id={`${name}-error`} className="mt-2 block text-sm text-red-400">
        {code === "email" ? f.errorEmail : f.errorRequired}
      </span>
    );
  };

  const invalid = (name: Name) => ({
    "aria-invalid": state.fields?.[name] ? true : undefined,
    "aria-describedby": state.fields?.[name] ? `${name}-error` : undefined,
  });

  const labelClass = "block text-[13px] text-dim";
  const optional = <span className="text-white/35"> ({f.optional})</span>;

  return (
    <form action={formAction} noValidate className="relative grid content-start gap-x-8 gap-y-8 sm:grid-cols-2">
      <input type="hidden" name="lang" value={t.lang} />
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
          <p role="alert" className="mb-6 border-s-2 border-red-400 ps-4 text-[15px] text-red-300">
            {f.errorSend}
          </p>
        ) : null}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-paper/85 disabled:opacity-60"
          >
            {pending ? f.sending : f.submit}
            {pending ? null : <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />}
          </button>
          <p className="text-[13px] text-dim">
            {f.consentPrefix}{" "}
            <a href={t.privacyHref} className="underline underline-offset-4 hover:text-paper">
              {f.consentLink}
            </a>
            .
          </p>
        </div>
      </div>
    </form>
  );
}
