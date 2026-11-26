import type { Lang } from "./types";

/**
 * Copy for the landing page (both languages share one layout).
 * Hebrew is the default; English mirrors it.
 * The site is a company profile people visit after a first conversation with us:
 * calm, factual and professional, not a sales page.
 * "Effi" / "אפי" is the name of the system the customer works with.
 */
export type Landing = {
  lang: Lang;
  /** Path of the same page in the other language, and its label. */
  switchHref: string;
  switchLabel: string;
  headerCta: string;
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    cta: string;
    before: { label: string; text: string };
    after: { label: string; text: string };
    flowAlt: string;
  };
  chat: {
    label: string;
    titleA: string;
    titleB: string;
    lead: string;
    phoneLabel: string;
    name: string;
    online: string;
    today: string;
    typing: string;
    messagePlaceholder: string;
    greeting: string;
    doneTitle: string;
    done: string[];
    approvalTitle: string;
    approvalItem: string;
    approvalDetail: string;
    approve: string;
    details: string;
    reply: string;
    ack: string;
    /** Ways you stay in control, each with an icon. */
    facts: { icon: "eye" | "approve" | "shield"; title: string; text: string }[];
  };
  domains: {
    label: string;
    titleA: string;
    titleB: string;
    tabs: { id: string; name: string; items: { title: string; does: string }[] }[];
    close: string;
  };
  principles: {
    label: string;
    titleA: string;
    titleB: string;
    items: { title: string; text: string }[];
  };
  process: {
    label: string;
    titleA: string;
    titleB: string;
    lead: string;
    steps: { title: string; body: string }[];
  };
  contact: {
    meta: string;
    titleA: string;
    titleB: string;
    /** Effi's one-line hello above the form. */
    greeting: string;
    name: string;
    phone: string;
    company: string;
    /** Appended to the company label: the field is optional. */
    optional: string;
    submit: string;
    note: string;
    privacy: string;
    errorSend: string;
    errorRequired: string;
    errorPhone: string;
    /** Shown after the lead is saved. "{name}" is the visitor's first name. */
    done: string;
    /** Badge on the closed form after a successful send. */
    sent: string;
    /** Who is behind Effi, above the form. */
    aboutLabel: string;
    aboutTitle: string;
    team: string;
  };
  footer: { tagline: string; privacy: string };
};

export const landingHe: Landing = {
  lang: "he",
  switchHref: "/en",
  switchLabel: "EN",
  headerCta: "יצירת קשר",
  hero: {
    eyebrow: "הטמעת AI בארגונים",
    titleA: "פתרונות AI,",
    titleB: "מותאמים לארגון שלכם.",
    sub: "Effi מלווה ארגונים בהטמעה של AI. אנחנו לומדים לעומק איך העבודה מתנהלת, מאתרים יחד איתכם איפה היא נתקעת, ובונים פתרונות שעובדים על המערכות הקיימות.",
    cta: "יצירת קשר",
    before: { label: "היום", text: "ידני · מפוזר · איטי" },
    after: { label: "עם אפי", text: "אוטומטי · מחובר · מהיר" },
    flowAlt: "קווים סבוכים ואיטיים נכנסים לצומת אחד, ויוצאים ממנו כקווים ישרים ומהירים",
  },
  chat: {
    label: "איך זה נראה בפועל",
    titleA: "הטכנולוגיה עושה את השגרה.",
    titleB: "ההחלטות נשארות אצלכם.",
    lead: "דוגמה לבוקר של מנהל: הודעה אחת בוואטסאפ, עם מה שכבר טופל ומה מחכה להחלטה שלו. בלי מערכת חדשה ללמוד.",
    phoneLabel: "מה המנהל מקבל בבוקר",
    name: "אפי",
    online: "מחובר",
    today: "היום",
    typing: "אפי מקליד",
    messagePlaceholder: "הודעה",
    greeting: "בוקר טוב יוסי. הכול בשליטה, הנה מה שקרה מאז אתמול.",
    doneTitle: "מה כבר טופל:",
    done: ["46 חשבוניות ספקים נבדקו, 43 תקינות.", "7 פניות של לקוחות מאתמול בערב כבר נענו.", "לפי קצב המכירות, 4 פריטים ייגמרו תוך שבוע. הזמנת רכש מוכנה."],
    approvalTitle: "3 חשבוניות חורגות מחכות לאישור שלך. הראשונה:",
    approvalItem: "חשבונית ספק",
    approvalDetail: "גבוהה ב-8% מהמחיר שסוכם בהזמנה.",
    approve: "לאישור",
    details: "לפרטים",
    reply: "תעביר לרונית מהרכש שתבדוק.",
    ack: "העברתי לרונית. אעדכן אותך כשהיא תסיים.",
    facts: [
      { icon: "eye", title: "בקרה מלאה על כל מה שקורה", text: "כל פעולה של אפי מתועדת: מה, מתי ולמה. רואים הכול, בכל רגע." },
      { icon: "approve", title: "שום דבר רגיש בלי אישור", text: "חריגות, תשלומים ושינויים מחכים לאישור שלכם." },
    ],
  },
  domains: {
    label: "תחומים",
    titleA: "איפה אנחנו",
    titleB: "עוזרים לארגונים.",
    tabs: [
      {
        id: "manufacturing",
        name: "תעשייה וייצור",
        items: [
          { title: "רכש ומלאי", does: "מעקב אחרי המלאי, והכנת הזמנות רכש לאישור." },
          { title: "בקרת איכות", does: "ריכוז בדיקות המשמרת לדוח אחד, עם התראה על פספוסים." },
          { title: "ידע והדרכה", does: "תשובות לעובדים מתוך הנהלים, בשפה שלהם." },
        ],
      },
      {
        id: "real-estate",
        name: "נדל״ן ובנייה",
        items: [
          { title: "חשבונות קבלנים", does: "בדיקת חשבונות מול החוזה, וסימון של מה שלא מתאים." },
          { title: "פניות רוכשים ודיירים", does: "מענה מסודר לפניות, גם אחרי שעות העבודה." },
          { title: "חוזים ומסמכים", does: "סימון סעיפים חריגים לפני החתימה." },
        ],
      },
      {
        id: "logistics",
        name: "לוגיסטיקה",
        items: [
          { title: "קליטת הזמנות", does: "הזמנות מהמייל ומהוואטסאפ נכנסות ישר למערכת." },
          { title: "מסמכי יצוא ומכס", does: "הכנה ובדיקה של המסמכים לפני שהם יוצאים." },
          { title: "עדכוני משלוחים", does: "הלקוח יודע איפה המשלוח, בלי להתקשר." },
        ],
      },
      {
        id: "offices",
        name: "משרדים ומטות",
        items: [
          { title: "משאבי אנוש", does: "מענה לעובדים מתוך הנהלים, בכל שעה." },
          { title: "דוחות הנהלה", does: "דוח מוכן בבוקר, מנתונים של כמה מערכות." },
          { title: "רכש והצעות מחיר", does: "השוואת הצעות מחיר, מוכנה לפני הישיבה." },
        ],
      },
    ],
    close: "אלה דוגמאות. בכל ארגון מתחילים ממה שעלה באפיון.",
  },
  principles: {
    label: "העקרונות שלנו",
    titleA: "איך אנחנו",
    titleB: "עובדים.",
    items: [
      { title: "מתחילים מהבעיה, לא מהטכנולוגיה", text: "קודם מבינים מה באמת מעיק, ורק אז מחליטים מה לבנות." },
      { title: "בונים על מה שכבר יש", text: "בלי להחליף מערכות, ובלי ללמד את כולם תוכנה חדשה." },
      { title: "מודדים לפני שמרחיבים", text: "לכל פיילוט יש מדד הצלחה שקובעים יחד מראש." },
      { title: "המידע שלכם נשאר שלכם", text: "גישה רק למה שצריך, בהרשאות שאתם קובעים." },
      { title: "אחריות גם אחרי העלייה לאוויר", text: "נשארים זמינים, מתחזקים ומשפרים לאורך הדרך." },
    ],
  },
  process: {
    label: "הגישה שלנו",
    titleA: "קודם מבינים.",
    titleB: "אחר כך בונים.",
    lead: "כל פרויקט מתחיל באפיון משותף. אנחנו לא מגיעים עם מוצר מוכן, אלא עם שאלות, ובונים רק את מה שבאמת יעזור.",
    steps: [
      { title: "שיחת היכרות", body: "מכירים את הארגון, את הצוותים ואת מה שמעסיק אתכם היום." },
      { title: "אפיון משותף", body: "יושבים עם האנשים שעושים את העבודה, ומאתרים יחד איפה היא נתקעת ומה כדאי לפתור קודם." },
      { title: "פיילוט ממוקד", body: "בונים פתרון לתהליך אחד, על המערכות שכבר יש לכם, וקובעים מראש איך מודדים הצלחה." },
      { title: "הרחבה וליווי", body: "כשהתוצאות ברורות, מרחיבים לתהליכים נוספים, וממשיכים ללוות ולשפר." },
    ],
  },
  contact: {
    meta: "שיחה ראשונה בלי עלות · בלי התחייבות · בזמן שנוח לכם",
    titleA: "נשמח להמשיך",
    titleB: "את השיחה.",
    greeting: "השאירו שם וטלפון, ונחזור אליכם בהקדם.",
    name: "שם",
    phone: "טלפון",
    company: "חברה",
    optional: "(לא חובה)",
    submit: "שליחה",
    note: "פרטי הפנייה נשמרים לפי",
    privacy: "מדיניות הפרטיות",
    errorSend: "משהו השתבש והפנייה לא נשלחה. נסו שוב בעוד רגע.",
    errorRequired: "שדה חובה",
    errorPhone: "מספר הטלפון לא תקין",
    done: "תודה, {name}. קיבלתי. מישהו מהצוות יחזור אליך בהקדם לתיאום השיחה.",
    sent: "הפרטים נשלחו",
    aboutLabel: "מי אנחנו",
    aboutTitle: "מי עומד מאחורי Effi",
    team: "Effi הוקמה על ידי שותפים עם שנים של ניסיון בפיתוח תוכנה, מוצר וניהול טכנולוגי בחברות הייטק. אנחנו לא מוכרים תוכנה. אנחנו פותרים בעיות, ונשארים איתכם עד שהפתרון עובד.",
  },
  footer: { tagline: "פתרונות AI מותאמים לארגונים", privacy: "מדיניות פרטיות" },
};

export const landingEn: Landing = {
  lang: "en",
  switchHref: "/",
  switchLabel: "עב",
  headerCta: "Contact",
  hero: {
    eyebrow: "AI implementation for organizations",
    titleA: "AI solutions,",
    titleB: "tailored to your organization.",
    sub: "Effi helps organizations adopt AI. We learn in depth how the work runs, find together with you where it gets stuck, and build solutions that work on your existing systems.",
    cta: "Contact",
    before: { label: "Today", text: "Manual · scattered · slow" },
    after: { label: "With Effi", text: "Automated · connected · fast" },
    flowAlt: "Tangled, slow lines enter a single node and leave it as straight, fast lines",
  },
  chat: {
    label: "What it looks like",
    titleA: "Technology handles the routine.",
    titleB: "The decisions stay with you.",
    lead: "A manager's morning, for example: one WhatsApp message with what's already handled and what's waiting for their call. No new system to learn.",
    phoneLabel: "What the manager gets in the morning",
    name: "Effi",
    online: "online",
    today: "Today",
    typing: "Effi is typing",
    messagePlaceholder: "Message",
    greeting: "Good morning, Yossi. Everything is under control. Here's what happened since yesterday.",
    doneTitle: "Already handled:",
    done: ["46 supplier invoices checked, 43 clean.", "7 customer inquiries from last night already answered.", "At the current sales pace, 4 items run out within a week. A purchase order is ready."],
    approvalTitle: "3 invoices over the agreed price need your approval. The first:",
    approvalItem: "Supplier invoice",
    approvalDetail: "8% above the price agreed in the order.",
    approve: "Approve",
    details: "Details",
    reply: "Send it to Ronit in purchasing to review.",
    ack: "Sent to Ronit. I'll update you when she's done.",
    facts: [
      { icon: "eye", title: "Full visibility into everything", text: "Every action Effi takes is logged: what, when and why. You see it all, any time." },
      { icon: "approve", title: "Nothing sensitive without approval", text: "Exceptions, payments and changes wait for your sign-off." },
    ],
  },
  domains: {
    label: "Areas",
    titleA: "Where we help",
    titleB: "organizations.",
    tabs: [
      {
        id: "manufacturing",
        name: "Manufacturing",
        items: [
          { title: "Purchasing & stock", does: "Tracking stock and preparing purchase orders for approval." },
          { title: "Quality control", does: "One report of the shift's checks, with alerts on anything missed." },
          { title: "Knowledge & training", does: "Answers for employees from the procedures, in their own language." },
        ],
      },
      {
        id: "real-estate",
        name: "Real estate & construction",
        items: [
          { title: "Contractor invoices", does: "Checking invoices against the contract and flagging what doesn't match." },
          { title: "Buyer & tenant inquiries", does: "Orderly answers to inquiries, after business hours too." },
          { title: "Contracts & documents", does: "Flagging unusual clauses before signing." },
        ],
      },
      {
        id: "logistics",
        name: "Logistics",
        items: [
          { title: "Order intake", does: "Orders from email and WhatsApp go straight into the system." },
          { title: "Export & customs papers", does: "Preparing and checking documents before they go out." },
          { title: "Shipment updates", does: "Customers know where their shipment is, without calling." },
        ],
      },
      {
        id: "offices",
        name: "Offices & HQ",
        items: [
          { title: "HR", does: "Answers for employees from the procedures, at any hour." },
          { title: "Management reports", does: "A report ready in the morning, from several systems." },
          { title: "Purchasing & quotes", does: "Quotes compared and ready before the meeting." },
        ],
      },
    ],
    close: "These are examples. In every organization we start from what came up in discovery.",
  },
  principles: {
    label: "Our principles",
    titleA: "How we",
    titleB: "work.",
    items: [
      { title: "Start from the problem, not the technology", text: "First we understand what really gets in the way, and only then decide what to build." },
      { title: "Build on what's already there", text: "No replacing systems, and no teaching everyone new software." },
      { title: "Measure before expanding", text: "Every pilot has a success measure we agree on together in advance." },
      { title: "Your data stays yours", text: "Access only to what's needed, on permissions you set." },
      { title: "Responsibility after launch too", text: "We stay available, maintain and keep improving along the way." },
    ],
  },
  process: {
    label: "Our approach",
    titleA: "First we understand.",
    titleB: "Then we build.",
    lead: "Every project starts with joint discovery. We don't arrive with a ready-made product but with questions, and build only what will really help.",
    steps: [
      { title: "Intro conversation", body: "Getting to know the organization, the teams and what's on your mind today." },
      { title: "Joint discovery", body: "We sit with the people who do the work and find together where it gets stuck and what's worth solving first." },
      { title: "Focused pilot", body: "We build a solution for one process, on the systems you already have, and agree in advance how success is measured." },
      { title: "Expansion & support", body: "Once the results are clear, we expand to more processes, and keep supporting and improving." },
    ],
  },
  contact: {
    meta: "First conversation at no cost · no commitment · at a time that suits you",
    titleA: "We'd be glad",
    titleB: "to continue the conversation.",
    greeting: "Leave your name and phone, and we'll get back to you soon.",
    name: "Name",
    phone: "Phone",
    company: "Company",
    optional: "(optional)",
    submit: "Send",
    note: "Your details are kept according to our",
    privacy: "privacy policy",
    errorSend: "Something went wrong and your message wasn't sent. Please try again in a moment.",
    errorRequired: "Required",
    errorPhone: "Please enter a valid phone number",
    done: "Thanks, {name}. Got it. Someone from the team will be in touch soon to set up the call.",
    sent: "Sent",
    aboutLabel: "About us",
    aboutTitle: "Who is behind Effi",
    team: "Effi was founded by partners with years of experience in software, product and technology leadership at tech companies. We don't sell software. We solve problems, and stay with you until the solution works.",
  },
  footer: { tagline: "AI solutions tailored to organizations", privacy: "Privacy policy" },
};
