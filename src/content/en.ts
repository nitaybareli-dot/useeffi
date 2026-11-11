import type { Dict } from "./types";

export const en: Dict = {
  lang: "en",
  dir: "ltr",
  locale: "en_US",
  home: "/en",
  privacyHref: "/en/privacy",
  meta: {
    title: "Effi | AI adoption for large organizations",
    description:
      "Effi puts AI to work in large, established Israeli companies: advisory, delivery and adoption of AI solutions that make the organization more efficient.",
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
  hero: {
    eyebrow: "AI advisory and delivery for large organizations",
    titleA: "AI that works inside the organization.",
    titleB: "Not just in slide decks.",
    sub: "We put AI to work in large, established Israeli companies: we find where it will genuinely save time and money, build the systems, and connect them to the people and platforms you already have.",
    ctaPrimary: "Book an intro call",
    ctaSecondary: "How we work",
  },
  strip: {
    label: "Built for sectors where accuracy, regulation and trust are the baseline",
    items: [
      "Real estate & development",
      "Banking & finance",
      "Insurance",
      "Industry & manufacturing",
      "Retail",
      "Infrastructure & energy",
      "Healthcare",
      "Public sector",
    ],
  },
  gap: {
    eyebrow: "The challenge",
    title: "Every employee already has a chatbot. Few organizations actually work differently.",
    lead: "The gap is not in the technology. It is in what happens between an impressive demo and a system hundreds of employees rely on every day.",
    cards: [
      {
        title: "Pilots that stay pilots",
        text: "A polished proof of concept in the boardroom, and nothing that changes in the branch, on the factory floor or in the project office.",
      },
      {
        title: "Legacy systems, scattered data",
        text: "A twenty-year-old ERP, spreadsheets, scanned documents and inboxes. That is where the organization's real knowledge lives, and where AI has to work.",
      },
      {
        title: "Regulation, security and people",
        text: "Without answers on information security, compliance and employee concerns, no tool reaches real use, however good it is.",
      },
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "We advise like consultants. We build like engineers.",
    lead: "Most organizations get either a strategy deck with nobody to build it, or code from people who do not understand the business. With us it is one team, from the first conversation to the working system.",
    advise: {
      tag: "Advise",
      title: "AI advisory and strategy",
      text: "We learn the business, map the processes, and decide together where AI will pay back fastest.",
      items: [
        "Process mapping and opportunity discovery",
        "Prioritization by business value and complexity",
        "Roadmap and work plan for leadership",
        "AI policy, governance and regulation",
        "Selection of models, tools and vendors",
      ],
    },
    build: {
      tag: "Build",
      title: "Delivery and integration",
      text: "We develop AI solutions tailored to the organization, connect them to existing systems and take them to production.",
      items: [
        "AI agents that run workflows end to end",
        "Knowledge assistants over your documents and procedures",
        "Automation of documents, forms and reports",
        "Integration with ERP, CRM and core systems",
        "Deployment in your cloud or a closed environment",
      ],
    },
    adopt: {
      tag: "Adopt",
      title: "Training and ongoing support",
      text: "A good system is only half the way. We train employees and managers, measure usage and results, and keep improving.",
    },
  },
  industries: {
    eyebrow: "Industries",
    title: "We know your work, not just the models",
    lead: "Examples of processes that can be made more efficient today, by sector.",
    tabs: [
      {
        name: "Real estate",
        intro: "From initiation to handover: less paperwork, more control over the project.",
        cases: [
          {
            title: "Contractor invoice review",
            text: "Automatic matching against purchase orders, contracts and bills of quantities, with discrepancies flagged for the project manager.",
          },
          {
            title: "Buyer and tenant service",
            text: "Immediate answers on handover dates, change requests and warranty issues, at any hour and on any channel.",
          },
          {
            title: "Contract and tender analysis",
            text: "Summaries, comparisons and unusual clauses surfaced across contractor, supplier and purchase agreements.",
          },
          {
            title: "Engineering and operations knowledge",
            text: "Plain-language search across plans, specifications, protocols and procedures from every project.",
          },
        ],
      },
      {
        name: "Banking & finance",
        intro: "Operational efficiency in a regulated environment, with full control over every decision.",
        cases: [
          {
            title: "Compliance and KYC",
            text: "Collecting, reading and verifying documents in KYC and compliance processes, with a complete audit record.",
          },
          {
            title: "Credit processes",
            text: "Preparing the credit file, consolidating the data and drafting, so the underwriter can focus on the decision.",
          },
          {
            title: "Service centers",
            text: "Call summaries, real-time suggested answers for agents and self-service for routine requests.",
          },
          {
            title: "Knowledge and procedures",
            text: "An internal assistant that answers employees from current procedures, circulars and products.",
          },
        ],
      },
      {
        name: "Insurance",
        intro: "From claims to underwriting: faster handling without giving up control.",
        cases: [
          {
            title: "Claims handling",
            text: "Document intake, data extraction and coverage checks, with a reasoned recommendation for the adjuster.",
          },
          {
            title: "Underwriting",
            text: "Relevant information gathered from every source, with the points that need the underwriter's eye highlighted.",
          },
          {
            title: "Agent and customer service",
            text: "Fast answers on policies, coverage and case status.",
          },
          {
            title: "Anomaly detection",
            text: "Unusual claims and patterns flagged for in-depth human review.",
          },
        ],
      },
      {
        name: "Manufacturing",
        intro: "Less downtime, less paperwork, and more knowledge that stays in the plant.",
        cases: [
          {
            title: "Maintenance and operations",
            text: "Analysis of machine data and fault logs to spot problems before they stop the line.",
          },
          {
            title: "Procurement and supply chain",
            text: "Quote comparison, order tracking and alerts on delays and deviations.",
          },
          {
            title: "Quality control",
            text: "Findings consolidated, root causes analyzed and reports produced automatically.",
          },
          {
            title: "Preserving expertise",
            text: "The knowledge of veteran employees becomes an assistant available on every shift.",
          },
        ],
      },
      {
        name: "Retail & service",
        intro: "Better service and leaner operations, from headquarters to the branch.",
        cases: [
          {
            title: "Customer service",
            text: "Self-service for common requests and support for agents on the complex ones.",
          },
          {
            title: "Inventory and demand",
            text: "Demand forecasts and order recommendations based on the data you already collect.",
          },
          {
            title: "Branch operations",
            text: "An assistant for branch managers: procedures, reports and daily tasks in one place.",
          },
          {
            title: "Content and price lists",
            text: "Product descriptions, promotions and price lists updated at scale, with human review.",
          },
        ],
      },
    ],
    note: "Did not find your sector? The principles are the same in any organization rich in processes and documents.",
    noteCta: "Tell us about your challenge",
  },
  process: {
    eyebrow: "How it works",
    title: "From the first conversation to a working system",
    lead: "A staged process, with a tangible deliverable at every step and clear decision points for leadership.",
    outcomeLabel: "Deliverable",
    steps: [
      {
        title: "Assessment",
        duration: "Typically 2 to 4 weeks",
        text: "We sit with leadership and with people on the ground, map processes and data, and choose the opportunities with the highest business value.",
        outcome: "Opportunity map and work plan",
      },
      {
        title: "Focused pilot",
        duration: "Typically 6 to 10 weeks",
        text: "We build a working solution for one process, on your real data, and measure it against targets set in advance.",
        outcome: "Working system and measured results",
      },
      {
        title: "Production rollout",
        duration: "Depends on scope",
        text: "We connect to core systems, complete security and permissions, and train the users.",
        outcome: "A system in daily use",
      },
      {
        title: "Scale and improve",
        duration: "Ongoing",
        text: "We expand to more units and processes, and transfer knowledge to your teams so you can continue without us.",
        outcome: "An organizational AI capability",
      },
    ],
  },
  why: {
    eyebrow: "Why Effi",
    title: "A partner that understands organizations, not just algorithms",
    items: [
      {
        title: "Business first",
        text: "We start from your process, your costs and your customer. The technology comes after.",
      },
      {
        title: "We work with what you have",
        text: "Legacy systems are a starting point, not an excuse. We connect to what exists, without a multi-year replacement project.",
      },
      {
        title: "Security and compliance from the start",
        text: "Every solution is designed up front around the organization's security, privacy and regulatory requirements.",
      },
      {
        title: "We measure results",
        text: "Every project has business metrics defined in advance: handling time, cost, errors and satisfaction.",
      },
      {
        title: "No vendor lock-in",
        text: "We choose the model and tool that fit the task, and keep you free to switch.",
      },
      {
        title: "People stay in the decision",
        text: "The AI prepares, checks and suggests. The important decisions stay with your people.",
      },
    ],
  },
  security: {
    eyebrow: "Security and trust",
    title: "Built for organizations that cannot afford a mistake",
    lead: "In a bank, an insurer or a public company, AI has to meet the same standards as any core system. That is how we design it.",
    items: [
      {
        title: "Your data, under your control",
        text: "Deployment in your corporate cloud or a closed environment, according to your policy.",
      },
      {
        title: "Role-based permissions",
        text: "Every employee sees only what they are allowed to see, through the AI as well.",
      },
      {
        title: "Full audit trail",
        text: "Every action and answer is recorded and available for control and audit.",
      },
      {
        title: "Human oversight",
        text: "Defined approval points in every sensitive process.",
      },
      {
        title: "Regulatory alignment",
        text: "Designed around the Privacy Protection Law and your sector regulator's requirements.",
      },
      {
        title: "Tested before go-live",
        text: "Accuracy, consistency and robustness tests on real scenarios from the organization.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "What people ask us before we start",
    items: [
      {
        q: "How soon will we see results?",
        a: "A focused pilot is designed to produce a working system and measured results within weeks, not years. The exact timeline is set together during the assessment, based on the process and the data.",
      },
      {
        q: "Our systems are old. Is this even relevant?",
        a: "Yes, and that is exactly the kind of organization Effi was founded for. We connect to core systems through their existing interfaces, files and documents, without replacing them.",
      },
      {
        q: "Does our data leave the organization?",
        a: "The solution architecture follows your information security policy. We can work in your corporate cloud or a closed environment, with models that do not train on your data.",
      },
      {
        q: "Do we need an in-house data or AI team?",
        a: "No. We bring the capabilities, work alongside your IT and business people, and transfer knowledge so you can operate and extend the solution yourselves.",
      },
      {
        q: "We tried a pilot and it did not take off. What is different this time?",
        a: "Usually the problem is not the model but the choice of process, the connection to data and adoption on the ground. That is where we start.",
      },
      {
        q: "Which models and technologies do you work with?",
        a: "The leading models on the market, commercial and open source. The choice is made by the task, the security requirements and the cost, not by a commitment to one vendor.",
      },
      {
        q: "How is pricing structured?",
        a: "We start with an assessment of a defined scope and price. From there we continue in projects with clear deliverables and targets, so at every stage you know what you are paying for.",
      },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    title: "A thirty-minute conversation. No slide decks.",
    lead: "Tell us about the organization and one process that frustrates you. We will come back with an initial direction for how AI can help.",
    points: [
      "A conversation with the people who build",
      "No commitment and no cost",
      "We will get back to you shortly",
    ],
    form: {
      name: "Full name",
      company: "Company",
      role: "Role",
      email: "Email",
      phone: "Phone",
      message: "How can we help?",
      messagePlaceholder: "A few words about the organization and the challenge",
      optional: "optional",
      submit: "Send message",
      sending: "Sending...",
      consentPrefix: "By submitting this form you agree to the",
      consentLink: "privacy policy",
      successTitle: "Thank you, we received your message",
      successText: "We will get back to you shortly.",
      errorSend: "Something went wrong while sending. Please try again in a moment.",
      errorRequired: "Required field",
      errorEmail: "The email address is not valid",
    },
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
          "Details you provide in the contact form: name, company, role, email address, phone number and the content of your message.",
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
          "The information is processed by service providers that operate the site and message delivery for us, including Vercel and Resend.",
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
