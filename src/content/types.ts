export type Lang = "he" | "en";

export type TitledText = { title: string; text: string };

export type Dict = {
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
    why: string;
    faq: string;
    cta: string;
    /** Label of the link to the other language. */
    switchLabel: string;
    switchLang: Lang;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  strip: { label: string; items: string[] };
  gap: { eyebrow: string; title: string; lead: string; cards: TitledText[] };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    advise: { tag: string; title: string; text: string; items: string[] };
    build: { tag: string; title: string; text: string; items: string[] };
    adopt: { tag: string; title: string; text: string };
  };
  industries: {
    eyebrow: string;
    title: string;
    lead: string;
    tabs: { name: string; intro: string; cases: TitledText[] }[];
    note: string;
    noteCta: string;
  };
  process: {
    eyebrow: string;
    title: string;
    lead: string;
    outcomeLabel: string;
    steps: { title: string; duration: string; text: string; outcome: string }[];
  };
  why: { eyebrow: string; title: string; items: TitledText[] };
  security: { eyebrow: string; title: string; lead: string; items: TitledText[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    form: {
      name: string;
      company: string;
      role: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      optional: string;
      submit: string;
      sending: string;
      consentPrefix: string;
      consentLink: string;
      successTitle: string;
      successText: string;
      errorSend: string;
      errorRequired: string;
      errorEmail: string;
    };
  };
  footer: { tagline: string; rights: string; privacy: string; navTitle: string; legalTitle: string };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    sections: { title: string; body: string[] }[];
    back: string;
  };
};
