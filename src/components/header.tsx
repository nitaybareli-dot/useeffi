"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Shell } from "@/content/types";
import { CtaLink } from "./cta-link";
import { Logo } from "./logo";

export function Header({
  nav,
  a11y,
  home,
  base,
  switchHref,
}: {
  nav: Shell["nav"];
  a11y: Shell["a11y"];
  home: string;
  /** "" on the landing page (pure hash links), the home path elsewhere. */
  base: string;
  switchHref: string;
}) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: `${base}#services`, label: nav.services },
    { href: `${base}#industries`, label: nav.industries },
    { href: `${base}#process`, label: nav.process },
    ...(nav.why ? [{ href: `${base}#why`, label: nav.why }] : []),
    { href: `${base}#faq`, label: nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-10">
        <a href={home} aria-label="Effi" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label={a11y.mainNav} className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-body transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <a
            href={switchHref}
            lang={nav.switchLang}
            hrefLang={nav.switchLang}
            className="px-1 py-2 text-[15px] text-body transition-colors hover:text-accent"
          >
            {nav.switchLabel}
          </a>
          <CtaLink href={`${base}#contact`} location="header" size="sm" arrow className="max-sm:hidden">
            {nav.cta}
          </CtaLink>
          <button
            type="button"
            className="-me-2 grid h-10 w-10 place-items-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? a11y.menuClose : a11y.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label={a11y.mainNav}
          className="border-t border-line bg-paper px-5 pb-8 sm:px-10 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-5 text-2xl font-medium text-ink"
            >
              {link.label}
            </a>
          ))}
          <CtaLink
            href={`${base}#contact`}
            location="mobile_menu"
            arrow
            className="mt-8 w-full"
            onNavigate={() => setOpen(false)}
          >
            {nav.cta}
          </CtaLink>
        </nav>
      ) : null}
    </header>
  );
}
