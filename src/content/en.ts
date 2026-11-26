import type { Shell } from "./types";

export const en: Shell = {
  lang: "en",
  dir: "ltr",
  locale: "en_US",
  home: "/en",
  privacyHref: "/en/privacy",
  meta: {
    title: "Effi | AI solutions tailored to organizations",
    description:
      "Effi helps organizations adopt AI: we learn how the work really runs, find together where it gets stuck, and build solutions that work on your existing systems.",
  },
  a11y: {
    skip: "Skip to main content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNav: "Main navigation",
  },
  nav: {
    services: "Services",
    industries: "Industries",
    process: "Process",
    why: "Why Effi",
    faq: "FAQ",
    cta: "Talk to us",
    switchLabel: "עברית",
    switchLang: "he",
  },
  footer: {
    tagline: "AI that works inside the organization.",
    copyright: "© 2026 Effi",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    navTitle: "Site",
    legalTitle: "Legal",
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: November 2026",
    intro: "Effi operates the website useeffi.com. This document briefly explains what information the site collects and what is done with it.",
    sections: [
      {
        title: "What we collect",
        body: [
          "Details you provide in the contact form: name, company, phone number and email address.",
          "Aggregate, anonymous usage data, such as pages viewed, device type and country. This data is collected with Vercel Web Analytics, without cookies and without personally identifying visitors.",
        ],
      },
      {
        title: "How we use it",
        body: [
          "To get back to you about your inquiry and manage our business relationship with you.",
          "To understand how the site is used and improve it.",
        ],
      },
      {
        title: "Who we share it with",
        body: [
          "The information is processed by service providers that operate the site and message delivery for us, including Vercel, Neon and Resend.",
          "We do not sell personal information or pass it to third parties for marketing purposes.",
        ],
      },
      {
        title: "Retention and your rights",
        body: [
          "Inquiry details are kept for as long as they are needed to handle the inquiry and manage the business relationship.",
          "Under the Privacy Protection Law, you may ask to review the information held about you, correct it or delete it.",
        ],
      },
      {
        title: "Contact",
        body: ["For any privacy question or request, reach us through the contact form on the site."],
      },
    ],
    back: "Back to the home page",
  },
};
