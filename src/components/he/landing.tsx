import type { HeDict } from "@/content/types";
import { organizationJsonLd, pagePath } from "@/lib/site";
import { Footer } from "../footer";
import { Header } from "../header";
import { SkipLink } from "../skip-link";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Industries } from "./industries";
import { Decides, Faq, Process, Security, Services } from "./sections";
import { StickyCta } from "./sticky-cta";

/** Hebrew landing page. Section order is fixed by the brief. */
export function HeLanding({ t }: { t: HeDict }) {
  const switchHref = pagePath("home", t.nav.switchLang);

  return (
    <>
      <SkipLink label={t.a11y.skip} />
      <Header nav={t.nav} a11y={t.a11y} home={t.home} base="" switchHref={switchHref} />
      <main id="main">
        <Hero t={t} />
        <Decides t={t} />
        <Services t={t} />
        <Industries t={t} />
        <Process t={t} />
        <Security t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} base="" switchHref={switchHref} />
      <StickyCta label={t.sticky} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(t)).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
