import type { Landing as LandingCopy } from "@/content/landing";
import type { Shell } from "@/content/types";
import { organizationJsonLd } from "@/lib/site";
import { SkipLink } from "../skip-link";
import { Chat } from "./chat";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Ideas } from "./ideas";
import { Pains } from "./pains";
import { Process } from "./process";
import { Avatar } from "./avatar";
import { CtaButton } from "./parts";
import { Wordmark } from "./wordmark";

/**
 * The landing page, one guided story in both languages:
 * hero → pains → what Effi does → ideas for your business → how it works → contact.
 */
export function Landing({ shell, t }: { shell: Shell; t: LandingCopy }) {
  return (
    <div className="lp" data-theme="light" dir={shell.dir}>
      <SkipLink label={shell.a11y.skip} />
      <LandingHeader shell={shell} t={t} />

      <main id="main">
        <Hero t={t} />
        <Pains t={t} />
        <Chat t={t} />
        <Ideas t={t} />
        <Process t={t} />
        <Contact t={t} privacyHref={shell.privacyHref} />
      </main>

      <LandingFooter shell={shell} t={t} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(shell)).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}

/** Sticky header with the logo, language switch and "let's talk". Shared with the privacy page. */
export function LandingHeader({
  shell,
  t,
  switchHref,
  ctaHref = "#contact",
}: {
  shell: Shell;
  t: LandingCopy;
  switchHref?: string;
  ctaHref?: string;
}) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--lp-header)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--lp-border)" }}>
      <div className="lp-wrap" style={{ paddingBlock: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href={shell.home} aria-label="Effi" style={{ color: "var(--lp-fg)", textDecoration: "none" }}>
          <Wordmark size="24px" loop />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a
            href={switchHref ?? t.switchHref}
            hrefLang={t.lang === "he" ? "en" : "he"}
            lang={t.lang === "he" ? "en" : "he"}
            className={t.lang === "he" ? "lp-mono" : undefined}
            style={{ fontSize: 13, color: "var(--lp-soft)", textDecoration: "none" }}
          >
            {t.switchLabel}
          </a>
          <CtaButton href={ctaHref} location="header" size="md">
            <span className="lp-btn-effi">
              <Avatar size={24} invert />
            </span>
            {t.headerCta}
          </CtaButton>
        </div>
      </div>
    </header>
  );
}

/** Footer with the tagline and privacy link. Shared with the privacy page. */
export function LandingFooter({ shell, t }: { shell: Shell; t: LandingCopy }) {
  return (
    <footer style={{ borderTop: "1px solid var(--lp-border)" }}>
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
  );
}
