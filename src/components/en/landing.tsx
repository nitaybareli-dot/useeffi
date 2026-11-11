import type { Dict } from "@/content/types";
import { organizationJsonLd, pagePath } from "@/lib/site";
import { Footer } from "../footer";
import { Header } from "../header";
import { SkipLink } from "../skip-link";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Faq, Gap, Process, Security, Services, Why } from "./sections";
import { UseCases } from "./use-cases";

/** English landing page. Keeps the original copy and layout. */
export function EnLanding({ t }: { t: Dict }) {
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
