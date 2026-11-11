import type { Shell } from "@/content/types";
import { pagePath } from "@/lib/site";
import { Footer } from "./footer";
import { Header } from "./header";
import { SkipLink } from "./skip-link";
import { Frame, pad } from "./ui";

export function PrivacyPage({ t }: { t: Shell }) {
  const p = t.privacy;
  const switchHref = pagePath("privacy", t.nav.switchLang);

  return (
    <>
      <SkipLink label={t.a11y.skip} />
      <Header nav={t.nav} a11y={t.a11y} home={t.home} base={t.home} switchHref={switchHref} />
      <main id="main">
        <Frame>
          <div className={`max-w-3xl py-16 sm:py-24 ${pad}`}>
            <h1 className="type-h1">
              {p.title}
            </h1>
            <p className="mt-4 text-sm text-mute">{p.updated}</p>
            <p className="type-lead mt-10">{p.intro}</p>

            {p.sections.map((section) => (
              <section key={section.title} className="mt-12 border-t border-line pt-8">
                <h2 className="type-h3">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="type-card mt-3">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <a
              href={t.home}
              className="mt-14 inline-block text-accent underline underline-offset-4 hover:text-accent-hover"
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
