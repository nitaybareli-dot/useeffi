import type { Dict } from "@/content/types";
import { pagePath } from "@/lib/site";
import { Footer } from "./footer";
import { Header } from "./header";
import { SkipLink } from "./landing";
import { Frame, pad } from "./ui";

export function PrivacyPage({ t }: { t: Dict }) {
  const p = t.privacy;
  const switchHref = pagePath("privacy", t.nav.switchLang);

  return (
    <>
      <SkipLink label={t.a11y.skip} />
      <Header nav={t.nav} a11y={t.a11y} home={t.home} base={t.home} switchHref={switchHref} />
      <main id="main">
        <Frame>
          <div className={`max-w-3xl py-16 sm:py-24 ${pad}`}>
            <h1 className="text-[clamp(2.3rem,5vw,4rem)] font-light leading-[1.05] tracking-[-0.03em]">
              {p.title}
            </h1>
            <p className="mt-4 text-[13px] text-mute">{p.updated}</p>
            <p className="mt-10 text-lg leading-relaxed">{p.intro}</p>

            {p.sections.map((section) => (
              <section key={section.title} className="mt-12 border-t border-line pt-8">
                <h2 className="text-xl font-medium tracking-tight">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-mute">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <a
              href={t.home}
              className="mt-14 inline-block underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              {p.back}
            </a>
          </div>
        </Frame>
      </main>
      <Footer t={t} base={t.home} switchHref={switchHref} />
    </>
  );
}
