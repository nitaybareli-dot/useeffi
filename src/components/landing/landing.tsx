import type { Landing as LandingCopy } from "@/content/landing";
import type { Shell } from "@/content/types";
import { organizationJsonLd } from "@/lib/site";
import { SkipLink } from "../skip-link";
import { Chat } from "./chat";
import { Contact } from "./contact";
import { Cost } from "./cost";
import { Hero } from "./hero";
import { Ideas } from "./ideas";
import { Pains } from "./pains";
import { CtaButton } from "./parts";
import { Together } from "./together";
import { Wordmark } from "./wordmark";

/**
 * The landing page, one guided story in both languages:
 * hero → pains → what Effi does → cost → why now → ideas → how we work → contact.
 */
export function Landing({ shell, t }: { shell: Shell; t: LandingCopy }) {
  return (
    <div className="lp" dir={shell.dir}>
      <SkipLink label={shell.a11y.skip} />
      <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(14px)", borderBottom: "1px solid #1c1c1c" }}>
        <div className="lp-wrap" style={{ paddingBlock: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href={shell.home} aria-label="Effi" style={{ color: "#fff", textDecoration: "none" }}>
            <Wordmark size="24px" loop slow />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a
              href={t.switchHref}
              hrefLang={t.lang === "he" ? "en" : "he"}
              lang={t.lang === "he" ? "en" : "he"}
              className={t.lang === "he" ? "lp-mono" : undefined}
              style={{ fontSize: 13, color: "var(--lp-soft)", textDecoration: "none" }}
            >
              {t.switchLabel}
            </a>
            <CtaButton href="#contact" location="header" size="md">
              {t.headerCta}
            </CtaButton>
          </div>
        </div>
      </header>

      <main id="main">
        <Hero t={t} />
        <Pains t={t} />
        <Chat t={t} />
        <Cost t={t} />
        <Ideas t={t} />
        <Together t={t} />
        <Contact t={t} privacyHref={shell.privacyHref} />
      </main>

      <footer style={{ borderTop: "1px solid #1c1c1c" }}>
        <div
          className="lp-wrap"
          style={{ paddingBlock: 32, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20, fontSize: 13, color: "var(--lp-mute)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Wordmark size="18px" />
            <span>{t.footer.tagline}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            <a href={shell.privacyHref} style={{ color: "var(--lp-soft)" }}>
              {t.footer.privacy}
            </a>
            <span className="lp-mono" dir="ltr">
              © 2026 EFFI
            </span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(shell)).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
