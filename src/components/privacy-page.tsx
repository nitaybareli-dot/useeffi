import { landingEn, landingHe } from "@/content/landing";
import type { Shell } from "@/content/types";
import { pagePath } from "@/lib/site";
import { LandingFooter, LandingHeader } from "./landing/landing";
import { SkipLink } from "./skip-link";

/** Privacy policy, in the same look, header and footer as the landing page. */
export function PrivacyPage({ t }: { t: Shell }) {
  const p = t.privacy;
  const copy = t.lang === "he" ? landingHe : landingEn;

  return (
    <div className="lp" dir={t.dir}>
      <SkipLink label={t.a11y.skip} />
      <LandingHeader
        shell={t}
        t={copy}
        switchHref={pagePath("privacy", t.nav.switchLang)}
        ctaHref={`${t.home === "/" ? "" : t.home}/#contact`}
      />
      <main id="main">
        <div className="lp-wrap" style={{ paddingBlock: "clamp(56px, 8vw, 96px)", maxWidth: 820 }}>
          <h1 className="lp-h2" style={{ fontSize: "clamp(34px, 4.4vw, 56px)" }}>
            {p.title}
          </h1>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--lp-mute)" }}>{p.updated}</p>
          <p style={{ marginTop: 32, fontSize: 19, lineHeight: 1.6, color: "var(--lp-soft)" }}>{p.intro}</p>

          {p.sections.map((section) => (
            <section key={section.title} style={{ marginTop: 44, paddingTop: 28, borderTop: "1px solid #1c1c1c" }}>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} style={{ margin: "12px 0 0", fontSize: 16, lineHeight: 1.65, color: "var(--lp-soft)" }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <a href={t.home} style={{ display: "inline-block", marginTop: 48, color: "var(--acc)" }}>
            {p.back}
          </a>
        </div>
      </main>
      <LandingFooter shell={t} t={copy} />
    </div>
  );
}
