import { Check } from "lucide-react";
import type { HeDict } from "@/content/types";
import { CtaLink } from "../cta-link";
import { Frame, Label, pad } from "../ui";

export function Hero({ t }: { t: HeDict }) {
  const h = t.hero;

  return (
    <section id="hero" className="border-b border-line">
      <Frame>
        <div className={`section-y ${pad}`}>
          <Label>{h.eyebrow}</Label>
          <h1 className="type-h1 mt-6 lg:whitespace-nowrap">{h.title}</h1>
          <p className="mt-5 text-[28px] font-normal leading-snug text-mute">{h.tagline}</p>
          <p className="type-lead mt-6 max-w-2xl">{h.sub}</p>

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
