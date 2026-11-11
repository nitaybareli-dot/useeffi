import { Check } from "lucide-react";
import type { HeDict } from "@/content/types";
import { CtaLink } from "../cta-link";
import { Frame, Label, pad } from "../ui";

export function Hero({ t }: { t: HeDict }) {
  const h = t.hero;

  return (
    <section id="hero" className="border-b border-line">
      <Frame>
        <div className={`section-y grid gap-x-12 gap-y-14 lg:grid-cols-[55fr_45fr] lg:items-center ${pad}`}>
          {/* The headline spans both columns so it stays on one line from 1024px up. */}
          <div className="min-w-0 lg:col-span-2">
            <Label>{h.eyebrow}</Label>
            <h1 className="type-h1 mt-6 lg:whitespace-nowrap">{h.title}</h1>
          </div>
          <div className="min-w-0 lg:-mt-6">
            <p className="text-[28px] font-normal leading-snug text-mute">{h.tagline}</p>
            <p className="type-lead mt-6 max-w-xl">{h.sub}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href="#contact" location="hero" arrow>
                {h.ctaPrimary}
              </CtaLink>
              <CtaLink href="#industries" location="hero_secondary" variant="outline">
                {h.ctaSecondary}
              </CtaLink>
            </div>

            <ul className="mt-8 flex flex-col gap-x-6 gap-y-2.5 text-[15px] text-body sm:flex-row sm:flex-wrap">
              {h.facts.map((fact) => (
                <li key={fact} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <InvoiceMock t={t} />
        </div>

        <div className={`border-t border-line py-10 sm:py-12 ${pad}`}>
          <p className="text-center text-base text-mute">{h.strip.label}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2.5 lg:flex-nowrap">
            {h.strip.items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex h-11 items-center whitespace-nowrap rounded-full border border-line bg-paper px-5 text-[15px] text-body transition-colors hover:border-accent hover:text-accent"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Frame>
    </section>
  );
}

/** Static illustration of a contractor invoice check. Not interactive. */
function InvoiceMock({ t }: { t: HeDict }) {
  const m = t.hero.mock;
  const cell = "px-2 py-3 text-start align-middle first:ps-4 last:pe-4 sm:px-3 sm:first:ps-5 sm:last:pe-5";

  return (
    <figure className="mx-auto w-full min-w-0 max-w-[520px] lg:-mt-6 lg:me-0">
      <div
        role="img"
        aria-label={m.label}
        className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_60px_-20px_rgba(11,11,11,0.18)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-4 sm:px-5">
          <p className="text-[15px] font-semibold text-ink">{m.title}</p>
          <span className="rounded-full bg-accent-tint px-3 py-1 text-sm font-medium text-accent">
            {m.badge}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-mute">
                {m.columns.map((column) => (
                  <th key={column} scope="col" className={`${cell} font-medium`}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {m.rows.map((row) => (
                <tr
                  key={row.item}
                  className={`border-b border-line last:border-b-0 ${row.flagged ? "bg-[#FFFBEB]" : ""}`}
                >
                  <td className={`${cell} font-medium text-ink`}>{row.item}</td>
                  <td className={`${cell} whitespace-nowrap text-body`}>{row.planned}</td>
                  <td className={`${cell} whitespace-nowrap ${row.flagged ? "font-semibold text-warn" : "text-body"}`}>
                    {row.billed}
                  </td>
                  <td className={cell}>
                    <span
                      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm font-medium ${
                        row.flagged ? "bg-warn-bg text-warn" : "bg-ok-bg text-ok"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <p className="mt-1 rounded-xl bg-accent-tint px-4 py-3 text-[15px] leading-relaxed text-body">
            {m.finding}
          </p>
          <div className="mt-4 flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-body">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-warn" />
              {m.pending}
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-mute">{m.caption}</figcaption>
    </figure>
  );
}
