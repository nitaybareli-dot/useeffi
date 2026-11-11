"use client";

import { track } from "@vercel/analytics";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useActionState, useEffect, type ReactNode } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import type { HeDict } from "@/content/types";
import { buttonBase } from "../cta-link";
import { TrackingFields } from "../tracking-fields";
import { Frame, pad } from "../ui";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-2 block h-[52px] w-full rounded-[10px] border border-[#2E2E2C] bg-[#161616] px-4 text-base text-white outline-none transition-colors focus:border-2 focus:border-accent-on-dark focus:px-[15px] focus-visible:outline-none aria-[invalid=true]:border-[#FCA5A5]";

export function Contact({ t }: { t: HeDict }) {
  const c = t.contact;
  return (
    <section id="contact" className="on-dark bg-ink text-white">
      <Frame dark>
        <div className={`section-y grid gap-x-20 gap-y-10 lg:grid-cols-2 ${pad}`}>
          {/* The headline spans both columns so it stays on one line on desktop. */}
          <div className="reveal lg:col-span-2">
            <h2 className="type-h2 lg:whitespace-nowrap">{c.title}</h2>
          </div>
          <div>
            <p className="type-lead max-w-md">{c.lead}</p>
            <ul className="type-item mt-10 max-w-md border-t border-white/12">
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

type Name = keyof NonNullable<ContactState["fields"]>;

function ContactForm({ t }: { t: HeDict }) {
  const f = t.contact.form;
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  useEffect(() => {
    // Conversion event: fires only after the lead row was saved.
    if (state.status === "success") track("contact_submitted", { lang: t.lang });
  }, [state.status, t.lang]);

  if (state.status === "success") {
    return (
      <div role="status" className="flex min-h-72 flex-col justify-center">
        <p className="type-h3 text-white">{f.success}</p>
      </div>
    );
  }

  const messages = { required: f.errorRequired, email: f.errorEmail, phone: f.errorPhone };

  const field = (name: Name, label: string, input: (props: Record<string, unknown>) => ReactNode, optional = false) => {
    const code = state.fields?.[name];
    return (
      <div className={name === "role" || name === "message" ? "sm:col-span-2" : ""}>
        <label htmlFor={`contact-${name}`} className="block text-[15px] text-dark-muted">
          {label}
          {optional ? <span> ({f.optional})</span> : null}
        </label>
        {input({
          id: `contact-${name}`,
          name,
          defaultValue: state.values?.[name],
          "aria-invalid": code ? true : undefined,
          "aria-describedby": code ? `contact-${name}-error` : undefined,
        })}
        {code ? (
          <p id={`contact-${name}-error`} className="mt-2 text-sm text-[#FCA5A5]">
            {messages[code]}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    // The key resets uncontrolled fields to the values the server sent back.
    <form
      key={JSON.stringify(state.values ?? {})}
      action={formAction}
      noValidate
      className="relative grid content-start gap-x-6 gap-y-6 sm:grid-cols-2"
    >
      <input type="hidden" name="lang" value={t.lang} />
      <TrackingFields />
      {/* Honeypot field, hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -start-[9999px] top-0 h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {field("name", f.name, (props) => (
        <input {...props} required autoComplete="name" className={fieldClass} />
      ))}
      {field("company", f.company, (props) => (
        <input {...props} required autoComplete="organization" className={fieldClass} />
      ))}
      {field("phone", f.phone, (props) => (
        <input
          {...props}
          type="tel"
          required
          dir="ltr"
          inputMode="tel"
          autoComplete="tel"
          className={`${fieldClass} text-right`}
        />
      ))}
      {field("email", f.email, (props) => (
        <input
          {...props}
          type="email"
          required
          dir="ltr"
          autoComplete="email"
          className={`${fieldClass} text-right`}
        />
      ))}
      {field(
        "role",
        f.role,
        (props) => <input {...props} autoComplete="organization-title" className={fieldClass} />,
        true,
      )}
      {field(
        "message",
        f.message,
        (props) => <textarea {...props} rows={4} className={`${fieldClass} h-auto resize-none py-3.5`} />,
        true,
      )}

      <div className="sm:col-span-2">
        {state.error === "send" ? (
          <p role="alert" className="mb-6 border-s-2 border-[#FCA5A5] ps-4 text-[15px] text-[#FCA5A5]">
            {f.errorSend}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className={`${buttonBase} h-12 w-full bg-accent px-7 text-white hover:bg-accent-hover disabled:opacity-70 sm:w-auto`}
        >
          {f.submit}
          {pending ? (
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
          )}
        </button>
        <p className="mt-5 text-sm text-dark-muted">
          {f.consentPrefix}{" "}
          <a href={t.privacyHref} className="text-accent-on-dark underline underline-offset-4 hover:text-white">
            {f.consentLink}
          </a>
          {f.consentSuffix}
        </p>
      </div>
    </form>
  );
}
