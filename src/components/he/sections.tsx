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
    <section className="border-b border-line">
      <Frame>
        <SectionHead label={d.eyebrow} title={d.title} lead={d.lead} className={head} />
        <div className={`${cells} md:grid-cols-3`}>
          {d.cards.map((card, index) => (
            <article key={card.title} className="bg-paper p-8 lg:p-10">
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
          label={s.eyebrow}
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
        <SectionHead label={p.eyebrow} title={p.title} lead={p.lead} dark className="pt-16 md:pt-24" />
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

export function Why({ t }: { t: HeDict }) {
  const w = t.why;
  const effi = w.columns.length - 1;
  // On mobile Effi comes first.
  const mobileOrder = [effi, ...w.columns.map((_, index) => index).filter((index) => index !== effi)];

  return (
    <section id="why" className="border-b border-line">
      <Frame>
        <SectionHead label={w.eyebrow} title={w.title} className="pt-16 pb-12 md:pt-24 md:pb-14" />

        {/* From 1024px: comparison table. */}
        <div className={`hidden lg:block ${pad}`}>
          <table className="w-full table-fixed border-collapse text-start">
            <thead>
              <tr>
                <td className="w-[19%]" />
                {w.columns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={`px-5 pb-4 pt-5 text-start align-bottom text-[17px] ${
                      index === effi
                        ? "rounded-t-xl border-t-[3px] border-accent bg-accent-tint font-semibold text-ink"
                        : "font-medium text-ink"
                    }`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {w.rows.map((row, rowIndex) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="py-5 pe-4 text-start align-top text-[15px] font-medium text-mute">
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={index}
                      className={`px-5 py-5 align-top text-base leading-relaxed ${
                        index === effi
                          ? `bg-accent-tint font-medium text-ink ${rowIndex === w.rows.length - 1 ? "rounded-b-xl" : ""}`
                          : "text-body"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Below 1024px: one card per option, Effi first. */}
        <div className={`grid gap-4 sm:grid-cols-2 lg:hidden ${pad}`}>
          {mobileOrder.map((columnIndex) => {
            const highlighted = columnIndex === effi;
            return (
              <div
                key={w.columns[columnIndex]}
                className={`rounded-xl p-5 ${
                  highlighted ? "border-t-[3px] border-accent bg-accent-tint" : "border border-line"
                }`}
              >
                <h3 className={`text-lg text-ink ${highlighted ? "font-semibold" : "font-medium"}`}>
                  {w.columns[columnIndex]}
                </h3>
                <dl className="mt-3">
                  {w.rows.map((row) => (
                    <div key={row.label} className="border-t border-line/80 py-3 first:border-t-0">
                      <dt className="text-sm text-mute">{row.label}</dt>
                      <dd className={`mt-1 text-base ${highlighted ? "font-medium text-ink" : "text-body"}`}>
                        {row.values[columnIndex]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>

        <div className={`grid gap-x-12 gap-y-10 pb-16 pt-14 sm:grid-cols-2 md:pb-24 md:pt-20 ${pad}`}>
          {w.points.map((point) => (
            <div key={point.title} className="border-t border-line pt-6">
              <h3 className="type-h3">{point.title}</h3>
              <p className="type-card mt-3 max-w-lg">{point.text}</p>
            </div>
          ))}
        </div>
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
    <section className="border-b border-line bg-fog">
      <Frame>
        <SectionHead label={s.eyebrow} title={s.title} lead={s.lead} className="pt-16 pb-12 md:pt-24 md:pb-14" />
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
    <section id="faq" className="border-b border-line">
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
