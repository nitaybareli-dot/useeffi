import type { Dict } from "@/content/types";
import { organizationJsonLd, pagePath } from "@/lib/site";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Faq, Gap, Process, Security, Services, Why } from "./sections";
import { UseCases } from "./use-cases";

export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
    >
      {label}
    </a>
  );
}

export function Landing({ t }: { t: Dict }) {
  const switchHref = pagePath("home", t.nav.switchLang);

  return (
    <>
      <SkipLink label={t.a11y.skip} />
      <Header nav={t.nav} a11y={t.a11y} home={t.home} base="" switchHref={switchHref} />
      <main id="main">
        <Hero t={t} />
        <Gap t={t} />
        <Services t={t} />
        <UseCases t={t} />
        <Process t={t} />
        <Why t={t} />
        <Security t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} base="" switchHref={switchHref} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(t)).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
