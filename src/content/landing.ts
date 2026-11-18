import type { Lang } from "./types";

/**
 * Copy for the landing page (both languages share one layout).
 * Hebrew is the default; English mirrors it.
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
  pains: {
    label: string;
    title: string;
    afterPrefix: string;
    items: { pain: string; after: string }[];
    closeA: string;
    closeB: string;
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
  hero: {
    eyebrow: "הטמעת AI בארגונים",
    titleA: "העבודה השחורה? עלינו.",
    titleB: "אתם מתמקדים במה שחשוב.",
    sub: "חשבוניות, דוחות, פניות, נהלים וכל מה שחוזר על עצמו. אנחנו לומדים איך אתם עובדים, ובונים יחד איתכם פתרונות AI שתפורים בדיוק לצרכים שלכם, על המערכות שכבר יש לכם.",
    cta: "בואו נדבר",
    before: { label: "היום", text: "ידני · מפוזר · איטי" },
    after: { label: "עם אפי", text: "אוטומטי · מחובר · מהיר" },
    flowAlt: "קווים סבוכים ואיטיים נכנסים לצומת אחד, ויוצאים ממנו כקווים ישרים ומהירים",
  },
  pains: {
    label: "איפה העבודה נתקעת",
    title: "מכירים את זה?",
    afterPrefix: "עם אפי",
    items: [
      { pain: "מקלידים את אותו נתון לשלוש מערכות.", after: "מזינים פעם אחת, ואפי מעדכן את כל השאר." },
      { pain: "מחפשים נוהל, תוכנית או חוזה, ולא מוצאים.", after: "שואלים את אפי במילים פשוטות, ומקבלים תשובה עם המקור." },
      { pain: "מכינים את אותו דוח מאפס, כל שבוע.", after: "הדוח מחכה לכם מוכן כל בוקר." },
    ],
    closeA: "ואלה רק דוגמאות.",
    closeB: "אצלכם מתחילים ממה שהכי מעיק, בלי להחליף אף מערכת שכבר עובדת.",
  },
  chat: {
    label: "דוגמה אחת מתוך הרבה",
    titleA: "אפי עושה את השגרה.",
    titleB: "ההחלטות נשארות אצלכם.",
    lead: "ככה יכול להיראות הבוקר של מנהל: הודעה אחת בוואטסאפ, עם מה שכבר טופל ומה מחכה להחלטה שלו. אצלכם מגדירים יחד מה אפי עושה.",
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
      { icon: "shield", title: "מאובטח, ובהרשאות שלכם", text: "אתם קובעים לאיזה מידע ולאילו מערכות אפי ניגש. שום דבר מעבר." },
    ],
  },
  process: {
    label: "איך זה עובד",
    titleA: "כמה זה ידרוש מכם?",
    titleB: "מעט מאוד.",
    lead: "את רוב העבודה אנחנו עושים. מכם צריך בעיקר לספר איך דברים עובדים היום, ומה הכי מעיק.",
    steps: [
      { title: "שיחת היכרות", body: "חצי שעה, בלי הכנות. מספרים לנו מה מעיק." },
      { title: "אנחנו באים ולומדים", body: "יושבים עם הצוותים ורואים איך העבודה באמת נעשית. לא צריך לכתוב מסמכים או אפיונים." },
      { title: "אנחנו בונים ומחברים", body: "בונים את הפתרון על המערכות שכבר יש לכם. שום דבר טכני לא נופל עליכם." },
      { title: "נשארים איתכם", body: "בודקים יחד עם הצוות, משפרים לפי מה שעולה, ומוסיפים עוד כשתרצו." },
    ],
  },
  contact: {
    meta: "שיחה של 30 דקות · בלי עלות · יוצאים עם כיוון ראשון",
    titleA: "בואו נמצא יחד",
    titleB: "את צוואר הבקבוק הראשון.",
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
    team: "אנחנו לא מוכרים תוכנה. אנחנו פותרים בעיות. מאחורי Effi עומדים שלושה שותפים עם שנים של ניסיון בפיתוח תוכנה, מוצר וניהול טכנולוגי.",
  },
  footer: { tagline: "הטמעת AI בארגונים", privacy: "מדיניות פרטיות" },
};

export const landingEn: Landing = {
  lang: "en",
  switchHref: "/",
  switchLabel: "עב",
  headerCta: "Let's talk",
  hero: {
    eyebrow: "AI implementation for organizations",
    titleA: "The grunt work? On us.",
    titleB: "You focus on what matters.",
    sub: "Invoices, reports, inquiries, procedures and everything else that repeats. We learn how you work and build, together with you, AI solutions tailored to exactly what you need, on the systems you already have.",
    cta: "Let's talk",
    before: { label: "Today", text: "Manual · scattered · slow" },
    after: { label: "With Effi", text: "Automated · connected · fast" },
    flowAlt: "Tangled, slow lines enter a single node and leave it as straight, fast lines",
  },
  pains: {
    label: "Where work gets stuck",
    title: "Sound familiar?",
    afterPrefix: "With Effi",
    items: [
      { pain: "Typing the same data into three systems.", after: "Enter it once. Effi updates the rest." },
      { pain: "Searching for a procedure, plan or contract, and not finding it.", after: "Ask Effi in plain words and get an answer with its source." },
      { pain: "Building the same report from scratch every week.", after: "The report is ready for you every morning." },
    ],
    closeA: "These are just examples.",
    closeB: "With you, we start where it hurts most, without replacing a single system that already works.",
  },
  chat: {
    label: "One example of many",
    titleA: "Effi handles the routine.",
    titleB: "The decisions stay with you.",
    lead: "A manager's morning could look like this: one WhatsApp message with what's already handled and what's waiting for their call. With you, we decide together what Effi does.",
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
      { icon: "shield", title: "Secure, on your permissions", text: "You decide which information and systems Effi can access. Nothing beyond that." },
    ],
  },
  process: {
    label: "How it works",
    titleA: "How much will this take from you?",
    titleB: "Very little.",
    lead: "We do most of the work. From you we mainly need to hear how things work today, and what bothers you most.",
    steps: [
      { title: "Intro call", body: "Half an hour, no preparation. Tell us what's bothering you." },
      { title: "We come and learn", body: "We sit with your teams and see how the work is really done. No documents or specs to write." },
      { title: "We build and connect", body: "We build the solution on the systems you already have. Nothing technical lands on you." },
      { title: "We stay with you", body: "We test it with your team, improve it as things come up, and add more when you want." },
    ],
  },
  contact: {
    meta: "30-minute call · free · leave with a first direction",
    titleA: "Let's find",
    titleB: "your first bottleneck.",
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
    team: "We don't sell software. We solve problems. Effi is run by three partners with years of experience in software, product and technology leadership.",
  },
  footer: { tagline: "AI adoption for organizations", privacy: "Privacy policy" },
};
