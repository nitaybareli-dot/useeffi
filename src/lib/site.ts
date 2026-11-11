import type { Metadata } from "next";
import type { Shell } from "@/content/types";

export const SITE_URL = "https://useeffi.com";
export const SITE_NAME = "Effi";

type PageKind = "home" | "privacy";

const paths: Record<PageKind, { he: string; en: string }> = {
  home: { he: "/", en: "/en" },
  privacy: { he: "/privacy", en: "/en/privacy" },
};

export function pagePath(kind: PageKind, lang: "he" | "en") {
  return paths[kind][lang];
}

/** Shared metadata for both language trees, with hreflang alternates. */
export function buildMetadata(t: Shell, kind: PageKind = "home"): Metadata {
  const title = kind === "home" ? t.meta.title : `${t.privacy.title} | ${SITE_NAME}`;
  const description = kind === "home" ? t.meta.description : t.privacy.intro;
  const url = pagePath(kind, t.lang);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: SITE_NAME,
    alternates: {
      canonical: url,
      languages: {
        he: paths[kind].he,
        en: paths[kind].en,
        "x-default": paths[kind].he,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: t.locale,
      alternateLocale: t.lang === "he" ? "en_US" : "he_IL",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd(t: Shell) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: `${SITE_URL}${t.home === "/" ? "" : t.home}`,
    description: t.meta.description,
    areaServed: { "@type": "Country", name: "Israel" },
    inLanguage: t.lang,
    knowsAbout: ["Artificial intelligence", "AI agents", "Process automation", "AI strategy"],
  };
}
