import type { Dict } from "@/content/types";
import { CtaLink } from "./cta-link";
import { Frame, Label, pad } from "./ui";

export function Hero({ t }: { t: Dict }) {
  const h = t.hero;

  return (
    <section className="border-b border-line">
      <Frame>
        <div className={`pb-14 pt-16 sm:pt-24 lg:pb-20 lg:pt-32 ${pad}`}>
          <Label>{h.eyebrow}</Label>
          <h1 className="mt-8 text-[clamp(2.6rem,7.4vw,6.5rem)] font-light leading-[1.02] tracking-[-0.035em]">
            <span className="block text-balance">{h.titleA}</span>
            <span className="block text-balance text-faint">{h.titleB}</span>
          </h1>

          <div className="mt-12 grid gap-10 lg:mt-24 lg:grid-cols-2 lg:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-mute sm:text-xl sm:leading-relaxed">
              {h.sub}
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CtaLink href="#contact" location="hero" arrow>
                {h.ctaPrimary}
              </CtaLink>
              <CtaLink href="#process" location="hero_secondary" variant="outline">
                {h.ctaSecondary}
              </CtaLink>
            </div>
          </div>
        </div>

        <div className={`border-t border-line py-12 sm:py-16 ${pad}`}>
          <p className="text-center text-lg font-light tracking-tight sm:text-xl">{t.strip.label}</p>
          <ul className="mt-9 grid grid-cols-2 gap-0.5 sm:grid-cols-4">
            {t.strip.items.map((item) => (
              <li
                key={item}
                className="grid min-h-20 place-items-center bg-fog px-3 py-5 text-center text-[15px] text-ink/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Frame>
    </section>
  );
}
