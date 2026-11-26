export type Lang = "he" | "en";

/** Fields both languages share: header, footer, privacy page and metadata. */
export type Shell = {
  lang: Lang;
  dir: "rtl" | "ltr";
  locale: string;
  /** Home path for this language: "/" or "/en". */
  home: string;
  privacyHref: string;
  meta: { title: string; description: string };
  a11y: { skip: string; menuOpen: string; menuClose: string; mainNav: string };
  nav: {
    services: string;
    industries: string;
    process: string;
    /** Leave out to hide the "why" link. */
    why?: string;
    faq: string;
    cta: string;
    /** Label of the link to the other language. */
    switchLabel: string;
    switchLang: Lang;
  };
  footer: {
    tagline: string;
    /** Copyright line shown before `rights`. */
    copyright: string;
    rights: string;
    privacy: string;
    navTitle: string;
    legalTitle: string;
    /** Label of the contact link in the footer; falls back to nav.cta. */
    cta?: string;
  };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    sections: { title: string; body: string[] }[];
    back: string;
  };
};
