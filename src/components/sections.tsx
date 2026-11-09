import { Plus } from "lucide-react";
import type { Dict } from "@/content/types";
import { CtaLink } from "./cta-link";
import { Frame, Label, SectionHead, TwoTone, headingClass, pad } from "./ui";

const num = (index: number) => String(index + 1).padStart(2, "0");

/** Hairline grid: 1px gaps over a line-colored background read as cell borders. */
const cells = "grid gap-px border-t border-line bg-line";

export function Gap({ t }: { t: Dict }) {
  const g = t.gap;
  return (
    <section className="border-b border-line">
      <Frame>
        <div className={`reveal py-20 text-center sm:py-32 ${pad}`}>
          <h2 className="mx-auto max-w-4xl text-balance text-[clamp(1.9rem,4vw,3.4rem)] font-light leading-[1.15] tracking-[-0.025em]">
            <TwoTone text={g.title} />
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mute">{g.lead}</p>
        </div>
        <div className={`${cells} md:grid-cols-3`}>
          {g.cards.map((card, index) => (
            <article key={card.title} className="bg-paper p-8 lg:p-10">
              <p dir="ltr" className="text-2xl font-light text-faint rtl:text-right">
                {num(index)}
              </p>
              <h3 className="mt-14 text-xl font-medium tracking-tight lg:mt-20">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-mute">{card.text}</p>
            </article>
          ))}
        </div>
      </Frame>
    </section>
  );
}

export function Services({ t }: { t: Dict }) {
  const s = t.services;
  const columns = [
    { ...s.advise },
    { ...s.build },
    { ...s.adopt, items: [] as string[] },
  ];

  return (
    <section id="services" className="border-b border-line">
      <Frame>
        <SectionHead
          label={s.eyebrow}
          title={s.title}
          lead={s.lead}
          action={
            <CtaLink href="#contact" location="services" variant="outline" arrow>
              {t.hero.ctaPrimary}
            </CtaLink>
          }
        />
        <div className={`${cells} lg:grid-cols-3`}>
          {columns.map((column, index) => (
            <article key={column.title} className="flex flex-col bg-paper p-8 lg:p-10">
              <div className="flex items-baseline justify-between">
                <span dir="ltr" className="text-2xl font-light text-faint">
                  {num(index)}
                </span>
                <span className="text-[13px] text-mute">{column.tag}</span>
              </div>
              <h3 className="mt-14 text-2xl font-normal tracking-tight lg:mt-20">{column.title}</h3>
              <p className="mt-3 leading-relaxed text-mute">{column.text}</p>
              {column.items.length > 0 ? (
                <ul className="mt-8 border-t border-line text-[15px]">
                  {column.items.map((item) => (
                    <li key={item} className="border-b border-line py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Frame>
    </section>
  );
}

export function Process({ t }: { t: Dict }) {
  const p = t.process;
  return (
    <section id="process" className="on-dark bg-ink text-paper">
      <Frame dark>
        <SectionHead label={p.eyebrow} title={p.title} lead={p.lead} dark />
        <ol className="grid gap-px border-t border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col bg-ink p-8 lg:p-10">
              <div className="flex items-baseline justify-between gap-3">
                <span dir="ltr" className="text-2xl font-light text-white/45">
                  {num(index)}
                </span>
                <span className="text-[13px] text-dim">{step.duration}</span>
              </div>
              <h3 className="mt-14 text-2xl font-normal tracking-tight lg:mt-24">{step.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-dim">{step.text}</p>
              <div className="mt-10 border-t border-white/12 pt-5">
                <p className="text-[13px] text-dim">{p.outcomeLabel}</p>
                <p className="mt-1 text-[15px]">{step.outcome}</p>
              </div>
            </li>
          ))}
        </ol>
      </Frame>
    </section>
  );
}

export function Why({ t }: { t: Dict }) {
  const w = t.why;
  return (
    <section id="why" className="border-b border-line">
      <Frame>
        <SectionHead label={w.eyebrow} title={w.title} />
        <div className={`${cells} sm:grid-cols-2 lg:grid-cols-3`}>
          {w.items.map((item) => (
            <div key={item.title} className="bg-paper p-8 lg:p-10">
              <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-mute">{item.text}</p>
            </div>
          ))}
        </div>
      </Frame>
    </section>
  );
}

export function Security({ t }: { t: Dict }) {
  const s = t.security;
  return (
    <section className="border-b border-line bg-fog">
      <Frame>
        <div className={`grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 ${pad}`}>
          <div className="reveal">
            <Label>{s.eyebrow}</Label>
            <h2 className={`mt-6 ${headingClass}`}>
              <TwoTone text={s.title} />
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute">{s.lead}</p>
          </div>
          <dl className="border-t border-ink/15">
            {s.items.map((item) => (
              <div
                key={item.title}
                className="grid gap-1 border-b border-ink/15 py-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8"
              >
                <dt className="font-medium">{item.title}</dt>
                <dd className="leading-relaxed text-mute">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Frame>
    </section>
  );
}

export function Faq({ t }: { t: Dict }) {
  const f = t.faq;
  return (
    <section id="faq" className="border-b border-line">
      <Frame>
        <div className={`grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 ${pad}`}>
          <div className="reveal">
            <Label>{f.eyebrow}</Label>
            <h2 className={`mt-6 ${headingClass}`}>
              <TwoTone text={f.title} />
            </h2>
          </div>
          <div className="border-t border-line">
            {f.items.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    className="h-5 w-5 shrink-0 text-mute transition-transform group-open:rotate-45"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-mute">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
}
