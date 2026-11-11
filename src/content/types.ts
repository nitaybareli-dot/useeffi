export type Lang = "he" | "en";

export type TitledText = { title: string; text: string };

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

/** English landing page content (the original layout). */
export type Dict = Shell & {
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
};

export type Numbered = { title: string; text: string };

/** Hebrew landing page content (the current layout). */
export type HeDict = Shell & {
  hero: {
    title: string;
    tagline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: string[];
    strip: { label: string; items: { name: string; id: string }[] };
  };
  decides: { title: string; lead: string; cards: Numbered[] };
  services: {
    title: string;
    lead: string;
    cta: string;
    items: { tag: string; title: string; key: string; text: string; items: string[] }[];
  };
  industries: {
    title: string;
    lead: string;
    tabs: { id: string; name: string; intro: string; cases: TitledText[] }[];
    note: string;
    cta: string;
  };
  process: {
    title: string;
    lead: string;
    outcomeLabel: string;
    steps: { title: string; duration: string; text: string; outcome: string }[];
  };
  security: {
    title: string;
    lead: string;
    items: (TitledText & {
      icon: "database" | "key-round" | "file-clock" | "user-check" | "scale" | "test-tube";
    })[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    lead: string;
    points: string[];
    form: {
      name: string;
      company: string;
      phone: string;
      email: string;
      role: string;
      message: string;
      optional: string;
      submit: string;
      consentPrefix: string;
      consentLink: string;
      consentSuffix: string;
      success: string;
      errorSend: string;
      errorRequired: string;
      errorEmail: string;
      errorPhone: string;
    };
  };
  sticky: string;
};
