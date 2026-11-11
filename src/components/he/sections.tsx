import {
  Database,
  FileClock,
  KeyRound,
  Plus,
  Scale,
  TestTube,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import type { HeDict } from "@/content/types";
import { CtaLink } from "../cta-link";
import { Frame, SectionHead, num, pad } from "../ui";

/** Hairline grid: 1px gaps over a line-colored background read as cell borders. */
const cells = "grid gap-px border-t border-line bg-line";

const head = "section-y";

export function Decides({ t }: { t: HeDict }) {
  const d = t.decides;
  return (
    <section className="on-dark bg-ink text-white">
      <Frame dark>
        <SectionHead title={d.title} lead={d.lead} dark className={head} />
        <div className="grid gap-px border-t border-white/12 bg-white/12 md:grid-cols-3">
          {d.cards.map((card, index) => (
            <article key={card.title} className="bg-ink p-8 lg:p-10">
              <p dir="ltr" className="type-num text-start text-2xl font-medium rtl:text-right">
                {num(index)}
              </p>
              <h3 className="type-h3 mt-10 lg:mt-14">{card.title}</h3>
              <p className="type-card mt-3">{card.text}</p>
            </article>
          ))}
        </div>
      </Frame>
    </section>
  );
}

export function Services({ t }: { t: HeDict }) {
  const s = t.services;
  return (
    <section id="services" className="border-b border-line">
      <Frame>
        <SectionHead
          title={s.title}
          lead={s.lead}
          className={head}
          action={
            <CtaLink href="#contact" location="services" arrow>
              {s.cta}
            </CtaLink>
          }
        />
        <div className={`${cells} lg:grid-cols-3`}>
          {s.items.map((service, index) => (
            <article key={service.title} className="flex flex-col bg-paper p-8 lg:p-10">
              <p className="type-eyebrow flex items-center gap-2">
                <span dir="ltr" className="type-num font-medium">
                  {num(index)}
                </span>
                <span aria-hidden="true">·</span>
                {service.tag}
              </p>
              <h3 className="type-h3 mt-10 lg:mt-14">{service.title}</h3>
              <p className="mt-3 text-xl font-medium text-ink">{service.key}</p>
              <p className="type-card mt-3">{service.text}</p>
              <ul className="type-item mt-8 border-t border-line">
                {service.items.map((item) => (
                  <li key={item} className="border-b border-line py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Frame>
    </section>
  );
}

export function Process({ t }: { t: HeDict }) {
  const p = t.process;
  return (
    <section id="process" className="on-dark bg-ink text-white">
      <Frame dark>
        <SectionHead title={p.title} lead={p.lead} dark className="pt-16 md:pt-24" />
        <ol className={`relative mt-12 grid gap-12 pb-16 md:mt-16 md:pb-24 lg:grid-cols-4 lg:gap-8 ${pad}`}>
          {/* Connecting line: one horizontal line on desktop, a vertical segment per step below that. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-10 top-[4px] hidden h-px bg-white/20 lg:block"
          />
          {p.steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col ps-8 lg:ps-0 lg:pt-10">
              {index < p.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute start-[4px] top-4 -bottom-12 w-px bg-white/20 lg:hidden"
                />
              ) : null}
              <span
                aria-hidden="true"
                className="absolute start-0 top-1.5 h-2.5 w-2.5 rounded-full bg-accent-on-dark lg:top-0"
              />
              <div className="flex flex-wrap items-center gap-3">
                <span dir="ltr" className="type-num text-2xl font-medium">
                  {num(index)}
                </span>
                <span className="rounded-full border border-white/25 px-3 py-1 text-sm text-dark-muted">
                  {step.duration}
                </span>
              </div>
              <h3 className="type-h3 mt-6">{step.title}</h3>
              <p className="type-card mt-3 flex-1">{step.text}</p>
              <div className="mt-8 border-t border-white/12 pt-5">
                <p className="text-sm text-dark-muted">{p.outcomeLabel}</p>
                <p className="mt-1 text-base text-white">{step.outcome}</p>
              </div>
            </li>
          ))}
        </ol>
      </Frame>
    </section>
  );
}

const icons: Record<HeDict["security"]["items"][number]["icon"], LucideIcon> = {
  database: Database,
  "key-round": KeyRound,
  "file-clock": FileClock,
  "user-check": UserCheck,
  scale: Scale,
  "test-tube": TestTube,
};

export function Security({ t }: { t: HeDict }) {
  const s = t.security;
  return (
    <section className="border-b border-line">
      <Frame>
        <SectionHead title={s.title} lead={s.lead} className="pt-16 pb-12 md:pt-24 md:pb-14" />
        <div className={`grid gap-4 pb-16 sm:grid-cols-2 md:pb-24 lg:grid-cols-3 ${pad}`}>
          {s.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div key={item.title} className="rounded-xl border border-line bg-paper p-7">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="type-h3 mt-5">{item.title}</h3>
                <p className="type-card mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Frame>
    </section>
  );
}

export function Faq({ t }: { t: HeDict }) {
  const f = t.faq;
  return (
    <section id="faq" className="border-b border-line bg-fog">
      <Frame>
        <div className={`section-y grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 ${pad}`}>
          <div className="reveal">
            <h2 className="type-h2">{f.title}</h2>
          </div>
          <div className="border-t border-line">
            {f.items.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-45"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </summary>
                <p className="type-card max-w-2xl pb-7">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
}
