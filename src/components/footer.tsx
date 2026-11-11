import type { Shell } from "@/content/types";
import { Logo } from "./logo";
import { Frame, pad } from "./ui";

export function Footer({
  t,
  base,
  switchHref,
}: {
  t: Shell;
  base: string;
  switchHref: string;
}) {
  const links = [
    { href: `${base}#services`, label: t.nav.services },
    { href: `${base}#industries`, label: t.nav.industries },
    { href: `${base}#process`, label: t.nav.process },
    { href: `${base}#why`, label: t.nav.why },
    { href: `${base}#faq`, label: t.nav.faq },
    { href: `${base}#contact`, label: t.footer.cta ?? t.nav.cta },
  ];
  const linkClass = "text-white transition-colors hover:text-accent-on-dark";

  return (
    <footer className="on-dark border-t border-white/12 bg-ink text-white">
      <Frame dark>
        <div className={`grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr] ${pad}`}>
          <div>
            <a href={t.home} aria-label="Effi" className="inline-block">
              <Logo />
            </a>
            <p className="mt-5 max-w-xs text-dark-muted">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.navTitle}>
            <p className="text-sm text-dark-muted">{t.footer.navTitle}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[15px] md:grid-cols-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm text-dark-muted">{t.footer.legalTitle}</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a href={t.privacyHref} className={linkClass}>
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href={switchHref}
                  lang={t.nav.switchLang}
                  hrefLang={t.nav.switchLang}
                  className={linkClass}
                >
                  {t.nav.switchLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`flex flex-wrap gap-x-2 border-t border-white/12 py-6 text-sm text-dark-muted ${pad}`}>
          <bdi dir="ltr">{t.footer.copyright}</bdi>
          <span>{t.footer.rights}</span>
        </div>

        {/* Oversized decorative wordmark, cropped by the bottom edge of the page.
            Drawn as CSS content so it is not read or checked as page text. */}
        <div
          aria-hidden="true"
          className="overflow-hidden border-t border-white/12 text-[58vw] xl:text-[46rem]"
        >
          <div
            dir="ltr"
            className="h-[0.52em] select-none text-center font-medium leading-[0.86] tracking-[-0.04em] text-[#1b1b1b] after:content-['effi']"
          />
        </div>
      </Frame>
    </footer>
  );
}
