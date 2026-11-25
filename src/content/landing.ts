import type { Lang } from "./types";

/**
 * Copy for the landing page (both languages share one layout).
 * Hebrew is the default; English mirrors it.
 *
 * The story: Effi builds digital team members for a business. Each one has a
 * name, a role and an area of responsibility, and joins the existing team so
 * the business can grow without hiring and people are freed for what matters.
 * The names below are examples; each client picks their own.
 */
export type AgentId = "dana" | "yoav" | "shoshana" | "ron";
export type Tone = "blue" | "green" | "amber" | "coral";

export type Agent = {
  id: AgentId;
  name: string;
  role: string;
  /** One line: what this team member takes off the team's plate. */
  duty: string;
  /** The human team they work in. */
  team: string;
  tone: Tone;
  /** Badge number, decorative. */
  code: string;
};

export type Landing = {
  lang: Lang;
  /** Path of the same page in the other language, and its label. */
  switchHref: string;
  switchLabel: string;
  headerCta: string;
  /** The example digital team, used by the hero badges, the pains and the chat. */
  team: Agent[];
  badge: {
    /** Top line of every badge. */
    head: string;
    dutyLabel: string;
    teamLabel: string;
    hoursLabel: string;
    hours: string;
    status: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    cta: string;
    /** Small line under the badges. */
    note: string;
  };
  pains: {
    label: string;
    title: string;
    items: { pain: string; who: AgentId; after: string }[];
    closeA: string;
    closeB: string;
  };
  chat: {
    label: string;
    titleA: string;
    titleB: string;
    lead: string;
    phoneLabel: string;
    group: string;
    members: string;
    today: string;
    /** "{name} is typing", shown at the end of the chat. */
    typing: string;
    typingWho: AgentId;
    messagePlaceholder: string;
    morning: { from: AgentId; text: string };
    inquiries: { from: AgentId; text: string };
    invoices: { from: AgentId; text: string; item: string; detail: string };
    approve: string;
    details: string;
    reply: string;
    ack: { from: AgentId; text: string };
    /** Ways you stay in control, each with an icon. */
    facts: { icon: "eye" | "approve" | "shield"; title: string; text: string }[];
  };
  roles: {
    label: string;
    titleA: string;
    titleB: string;
    /** Tag on each role card, like a job ad. */
    wanted: string;
    tabs: { id: string; name: string; roles: { title: string; does: string }[] }[];
    close: string;
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
    /** Who is behind Effi, under the form. */
    team: string;
  };
  footer: { tagline: string; privacy: string };
};

export const landingHe: Landing = {
  lang: "he",
  switchHref: "/en",
  switchLabel: "EN",
  headerCta: "בואו נדבר",
  team: [
    { id: "dana", name: "דנה", role: "חשבונות ספקים", duty: "בודקת חשבוניות מול ההזמנות, ומעבירה אליכם רק את החריגות.", team: "הנהלת חשבונות", tone: "blue", code: "EF-0114" },
    { id: "yoav", name: "יואב", role: "שירות לקוחות", duty: "עונה לפניות גם בערב, עם הסטטוס מתוך מערכת ההזמנות.", team: "מוקד לקוחות", tone: "green", code: "EF-0127" },
    { id: "shoshana", name: "שושנה", role: "נהלים והדרכה", duty: "עונה לעובדים מתוך הנהלים, בשפה שלהם.", team: "משאבי אנוש", tone: "amber", code: "EF-0132" },
    { id: "ron", name: "רון", role: "דוחות הנהלה", duty: "מכין את דוח הבוקר מכמה מערכות, לפני שמגיעים למשרד.", team: "הנהלה", tone: "coral", code: "EF-0145" },
  ],
  badge: {
    head: "Effi · צוות דיגיטלי",
    dutyLabel: "תחום אחריות",
    teamLabel: "בצוות של",
    hoursLabel: "זמינות",
    hours: "בכל שעה",
    status: "בתפקיד",
  },
  hero: {
    eyebrow: "עובדים דיגיטליים מבוססי AI",
    titleA: "הצוות שלכם גדל.",
    titleB: "בלי לגייס.",
    sub: "אנחנו בונים לכם עובדים דיגיטליים, כל אחד עם תפקיד ותחום אחריות משלו. הם לוקחים את העבודה החוזרת, העסק יכול לגדול, והצוות שלכם מתפנה למה שחשוב.",
    cta: "בואו נדבר",
    note: "השמות כאן לדוגמה. אצלכם כל אחד נבנה במיוחד, על המערכות שכבר יש לכם.",
  },
  pains: {
    label: "איפה העבודה נתקעת",
    title: "מכירים את זה?",
    items: [
      { pain: "מקלידים את אותו נתון לשלוש מערכות.", who: "dana", after: "מזינה פעם אחת, ומעדכנת את כל השאר." },
      { pain: "מחפשים נוהל, תוכנית או חוזה, ולא מוצאים.", who: "shoshana", after: "עונה במילים פשוטות, ומראה מאיפה התשובה." },
      { pain: "מכינים את אותו דוח מאפס, כל שבוע.", who: "ron", after: "הדוח מחכה לכם מוכן כל בוקר." },
    ],
    closeA: "ואלה רק דוגמאות.",
    closeB: "אצלכם מתחילים ממה שהכי מעיק, בלי להחליף אף מערכת שכבר עובדת.",
  },
  chat: {
    label: "בוקר אחד",
    titleA: "הם עושים את השגרה.",
    titleB: "ההחלטות נשארות אצלכם.",
    lead: "ככה נראה בוקר עם צוות דיגיטלי: עדכון בוואטסאפ על מה שכבר טופל, ומה מחכה להחלטה שלכם. אצלכם מגדירים יחד מי עושה מה.",
    phoneLabel: "קבוצת הוואטסאפ של המנהל",
    group: "צוות התפעול",
    members: "דנה, יואב, רון, שושנה, את/ה",
    today: "היום",
    typing: "{name} מקלידה…",
    typingWho: "shoshana",
    messagePlaceholder: "הודעה",
    morning: { from: "ron", text: "בוקר טוב יוסי. דוח הבוקר מחכה לך במייל, והכול בשליטה." },
    inquiries: { from: "yoav", text: "7 פניות של לקוחות מאתמול בערב כבר נענו, עם הסטטוס מתוך מערכת ההזמנות." },
    invoices: {
      from: "dana",
      text: "בדקתי 46 חשבוניות ספקים, 43 תקינות. 3 חורגות מחכות לאישור שלך. הראשונה:",
      item: "חשבונית ספק",
      detail: "גבוהה ב-8% מהמחיר שסוכם בהזמנה.",
    },
    approve: "לאישור",
    details: "לפרטים",
    reply: "תעבירי לרונית מהרכש שתבדוק.",
    ack: { from: "dana", text: "העברתי לרונית. אעדכן אותך כשהיא תסיים." },
    facts: [
      { icon: "eye", title: "רואים כל מה שהם עושים", text: "כל פעולה מתועדת: מה, מתי ולמה. בכל רגע אפשר לבדוק." },
      { icon: "approve", title: "שום דבר רגיש בלי אישור", text: "חריגות, תשלומים ושינויים מחכים לאישור שלכם." },
      { icon: "shield", title: "מאובטח, ובהרשאות שלכם", text: "אתם קובעים לאיזה מידע ולאילו מערכות כל אחד ניגש. שום דבר מעבר." },
    ],
  },
  roles: {
    label: "תפקידים לדוגמה",
    titleA: "את מי הייתם",
    titleB: "מצרפים לצוות?",
    wanted: "דרוש",
    tabs: [
      {
        id: "manufacturing",
        name: "תעשייה וייצור",
        roles: [
          { title: "רכש ומלאי", does: "מעקב אחרי המלאי, והכנת הזמנות רכש לאישור." },
          { title: "בקרת איכות", does: "ריכוז בדיקות המשמרת לדוח אחד, והתראה על פספוסים." },
          { title: "הדרכת עובדים", does: "תשובות לעובדים חדשים מתוך הנהלים, בלי לחפש את הוותיק." },
        ],
      },
      {
        id: "real-estate",
        name: "נדל״ן ובנייה",
        roles: [
          { title: "חשבונות קבלנים", does: "בדיקת חשבונות מול החוזה, וסימון של מה שלא מתאים." },
          { title: "מוקד רוכשים ודיירים", does: "מענה לפניות, גם אחרי שעות העבודה." },
          { title: "חוזים ומסמכים", does: "סימון סעיפים חריגים לפני החתימה." },
        ],
      },
      {
        id: "logistics",
        name: "לוגיסטיקה",
        roles: [
          { title: "קליטת הזמנות", does: "הזמנות מהמייל ומהוואטסאפ נכנסות ישר למערכת." },
          { title: "מסמכי יצוא ומכס", does: "הכנה ובדיקה של המסמכים לפני שהם יוצאים." },
          { title: "עדכוני משלוחים", does: "הלקוח יודע איפה המשלוח, בלי להתקשר." },
        ],
      },
      {
        id: "offices",
        name: "משרדים ומטות",
        roles: [
          { title: "משאבי אנוש", does: "מענה מיידי לעובדים, מתוך הנהלים." },
          { title: "דוחות הנהלה", does: "הדוח מחכה מוכן בבוקר, מכל המערכות." },
          { title: "רכש והצעות מחיר", does: "השוואת הצעות, מוכנה לפני הישיבה." },
        ],
      },
    ],
    close: "לא מצאתם את התפקיד? אצלכם זה יכול להיות משהו אחר לגמרי. ספרו לנו מה מעיק, ונבנה את מי שצריך.",
  },
  process: {
    label: "איך זה עובד",
    titleA: "כמה זה ידרוש מכם?",
    titleB: "מעט מאוד.",
    lead: "כמו עובד חדש, רק בלי כאב הראש. את רוב העבודה אנחנו עושים. מכם צריך בעיקר לספר איך דברים עובדים היום, ומה הכי מעיק.",
    steps: [
      { title: "שיחת היכרות", body: "חצי שעה, בלי הכנות. מספרים לנו מה מעיק." },
      { title: "חפיפה", body: "אנחנו יושבים עם הצוותים ולומדים איך העבודה באמת נעשית. לא צריך לכתוב מסמכים או אפיונים." },
      { title: "תקופת ניסיון", body: "בונים את התפקיד הראשון על המערכות שכבר יש לכם, ומודדים יחד כמה הוא חוסך." },
      { title: "מצטרפים לצוות", body: "ממשיכים ללוות ולשפר, ומוסיפים עוד תפקידים כשתרצו." },
    ],
  },
  contact: {
    meta: "שיחה של 30 דקות · בלי עלות · יוצאים עם כיוון ראשון",
    titleA: "בואו נמצא יחד",
    titleB: "את התפקיד הראשון.",
    greeting: "היי, אני אפי. השאירו שם וטלפון, ונחזור אליכם לתיאום שיחה.",
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
    team: "אנחנו לא מוכרים תוכנה. אנחנו פותרים בעיות. מאחורי Effi עומדים שותפים עם שנים של ניסיון בפיתוח תוכנה, מוצר וניהול טכנולוגי.",
  },
  footer: { tagline: "עובדים דיגיטליים לארגונים", privacy: "מדיניות פרטיות" },
};

export const landingEn: Landing = {
  lang: "en",
  switchHref: "/",
  switchLabel: "עב",
  headerCta: "Let's talk",
  team: [
    { id: "dana", name: "Dana", role: "Supplier invoices", duty: "Checks invoices against orders and sends you only the exceptions.", team: "Accounting", tone: "blue", code: "EF-0114" },
    { id: "yoav", name: "Yoav", role: "Customer service", duty: "Answers inquiries in the evening too, with the status from the order system.", team: "Customer desk", tone: "green", code: "EF-0127" },
    { id: "shoshana", name: "Shoshana", role: "Procedures & training", duty: "Answers employees from the procedures, in their own language.", team: "HR", tone: "amber", code: "EF-0132" },
    { id: "ron", name: "Ron", role: "Management reports", duty: "Builds the morning report from several systems before anyone gets in.", team: "Management", tone: "coral", code: "EF-0145" },
  ],
  badge: {
    head: "Effi · digital team",
    dutyLabel: "Responsible for",
    teamLabel: "Works in",
    hoursLabel: "Available",
    hours: "Any hour",
    status: "On duty",
  },
  hero: {
    eyebrow: "AI-powered digital employees",
    titleA: "Your team grows.",
    titleB: "Without hiring.",
    sub: "We build digital employees for you, each with its own role and area of responsibility. They take on the repetitive work, your business can grow, and your people are freed for what matters.",
    cta: "Let's talk",
    note: "These names are examples. Yours are built specifically for you, on the systems you already have.",
  },
  pains: {
    label: "Where work gets stuck",
    title: "Sound familiar?",
    items: [
      { pain: "Typing the same data into three systems.", who: "dana", after: "Enters it once and updates the rest." },
      { pain: "Searching for a procedure, plan or contract, and not finding it.", who: "shoshana", after: "Answers in plain words and shows where the answer came from." },
      { pain: "Building the same report from scratch every week.", who: "ron", after: "The report is ready for you every morning." },
    ],
    closeA: "These are just examples.",
    closeB: "With you, we start where it hurts most, without replacing a single system that already works.",
  },
  chat: {
    label: "One morning",
    titleA: "They handle the routine.",
    titleB: "The decisions stay with you.",
    lead: "A morning with a digital team: a WhatsApp update on what's already handled and what's waiting for your call. With you, we decide together who does what.",
    phoneLabel: "The manager's WhatsApp group",
    group: "Operations team",
    members: "Dana, Yoav, Ron, Shoshana, you",
    today: "Today",
    typing: "{name} is typing…",
    typingWho: "shoshana",
    messagePlaceholder: "Message",
    morning: { from: "ron", text: "Good morning, Yossi. The morning report is in your inbox, and everything is under control." },
    inquiries: { from: "yoav", text: "7 customer inquiries from last night are already answered, with the status from the order system." },
    invoices: {
      from: "dana",
      text: "I checked 46 supplier invoices, 43 are clean. 3 exceptions are waiting for your approval. The first:",
      item: "Supplier invoice",
      detail: "8% above the price agreed in the order.",
    },
    approve: "Approve",
    details: "Details",
    reply: "Pass it to Ronit in purchasing to check.",
    ack: { from: "dana", text: "Passed it to Ronit. I'll update you when she's done." },
    facts: [
      { icon: "eye", title: "See everything they do", text: "Every action is logged: what, when and why. You can check any time." },
      { icon: "approve", title: "Nothing sensitive without approval", text: "Exceptions, payments and changes wait for your sign-off." },
      { icon: "shield", title: "Secure, on your permissions", text: "You decide which information and systems each one can access. Nothing beyond that." },
    ],
  },
  roles: {
    label: "Example roles",
    titleA: "Who would you add",
    titleB: "to your team?",
    wanted: "Wanted",
    tabs: [
      {
        id: "manufacturing",
        name: "Manufacturing",
        roles: [
          { title: "Purchasing & stock", does: "Tracking stock and preparing purchase orders for approval." },
          { title: "Quality control", does: "One report of the shift's checks, with alerts on anything missed." },
          { title: "Employee training", does: "Answers for new employees from the procedures, without hunting down a veteran." },
        ],
      },
      {
        id: "real-estate",
        name: "Real estate & construction",
        roles: [
          { title: "Contractor invoices", does: "Checking invoices against the contract and flagging what doesn't match." },
          { title: "Buyer & tenant desk", does: "Answering inquiries, after business hours too." },
          { title: "Contracts & documents", does: "Flagging unusual clauses before signing." },
        ],
      },
      {
        id: "logistics",
        name: "Logistics",
        roles: [
          { title: "Order intake", does: "Orders from email and WhatsApp go straight into the system." },
          { title: "Export & customs papers", does: "Preparing and checking documents before they go out." },
          { title: "Shipment updates", does: "Customers know where their shipment is, without calling." },
        ],
      },
      {
        id: "offices",
        name: "Offices & HQ",
        roles: [
          { title: "HR", does: "Instant answers for employees, from the procedures." },
          { title: "Management reports", does: "The report is ready in the morning, from every system." },
          { title: "Purchasing & quotes", does: "Quotes compared and ready before the meeting." },
        ],
      },
    ],
    close: "Don't see the role? For you it might be something else entirely. Tell us what's bothering you, and we'll build who you need.",
  },
  process: {
    label: "How it works",
    titleA: "How much will this take from you?",
    titleB: "Very little.",
    lead: "Like a new hire, minus the headache. We do most of the work. From you we mainly need to hear how things work today, and what bothers you most.",
    steps: [
      { title: "Intro call", body: "Half an hour, no preparation. Tell us what's bothering you." },
      { title: "Handover", body: "We sit with your teams and learn how the work is really done. No documents or specs to write." },
      { title: "Trial period", body: "We build the first role on the systems you already have, and measure together how much it saves." },
      { title: "Joining the team", body: "We keep supporting and improving it, and add more roles when you want." },
    ],
  },
  contact: {
    meta: "30-minute call · free · leave with a first direction",
    titleA: "Let's find",
    titleB: "your first role together.",
    greeting: "Hi, I'm Effi. Leave your name and phone and we'll get back to you to set up a call.",
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
    team: "We don't sell software. We solve problems. Effi is run by partners with years of experience in software, product and technology leadership.",
  },
  footer: { tagline: "Digital employees for organizations", privacy: "Privacy policy" },
};
