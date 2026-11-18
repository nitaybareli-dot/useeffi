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
    facts: { title: string; text: string }[];
  };
  contact: {
    peek: string;
    meta: string;
    /** What happens after the visitor leaves details, shown beside the chat. */
    next: { title: string; steps: { title: string; body: string }[]; team: string };
    titleA: string;
    titleB: string;
    name: string;
    company: string;
    phone: string;
    email: string;
    submit: string;
    note: string;
    privacy: string;
    success: string;
    errorSend: string;
    errorRequired: string;
    errorEmail: string;
    errorPhone: string;
    /** Effi's questions, one per field: name, company, phone, email. "{name}" is the visitor's first name. */
    questions: [string, string, string, string];
    /** Short labels for the progress bar above the chat. */
    steps: [string, string, string, string];
    online: string;
    send: string;
    /** Shown after the lead is saved. "{name}" is the visitor's first name. */
    done: string;
    /** Badge on the closed chat after a successful send. */
    sent: string;
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
    titleA: "מה שלקח ימים,",
    titleB: "לוקח דקות.",
    sub: "אנחנו לומדים איך אתם עובדים, ובונים יחד איתכם פתרונות שמבוססים על AI ותפורים בדיוק לצרכים שלכם. הכול משתלב במערכות שכבר יש לכם, ומוריד מהצוות את המשימות החוזרות.",
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
      { title: "רואים כל מה שאפי עושה", text: "כל פעולה מתועדת: מה, מתי ולמה." },
      { title: "שום דבר רגיש בלי אישור", text: "חריגות, תשלומים ושינויים מחכים לאישור שלכם." },
      { title: "אתם קובעים למה אפי ניגש", text: "לאיזה מידע ולאילו מערכות, ובאילו הרשאות." },
    ],
  },
  contact: {
    peek: "אפי כבר מחכה להכיר.",
    meta: "שיחה של 30 דקות · בלי עלות · יוצאים עם כיוון ראשון",
    next: {
      title: "מה קורה אחר כך",
      steps: [
        { title: "שיחת היכרות", body: "חצי שעה. מספרים לנו איפה העבודה נתקעת." },
        { title: "אפיון משותף", body: "יושבים עם הצוותים בשטח ומגדירים יחד מה בונים." },
        { title: "אפי מתחיל לעבוד", body: "גרסה ראשונה על המערכות שלכם, נבדקת יחד עם הצוות, ומשם משפרים." },
      ],
      team: "אנחנו לא מוכרים תוכנה. אנחנו פותרים בעיות. מאחורי Effi עומדים שלושה שותפים עם שנים של ניסיון בפיתוח תוכנה, מוצר וניהול טכנולוגי.",
    },
    titleA: "בואו נמצא יחד",
    titleB: "את צוואר הבקבוק הראשון.",
    name: "שם מלא",
    company: "חברה",
    phone: "טלפון",
    email: "אימייל",
    submit: "שליחה",
    note: "פרטי הפנייה נשמרים לפי",
    privacy: "מדיניות הפרטיות",
    success: "קיבלנו, תודה. נחזור אליכם בהקדם לתיאום השיחה.",
    errorSend: "משהו השתבש והפנייה לא נשלחה. נסו שוב בעוד רגע.",
    errorRequired: "שדה חובה",
    errorEmail: "כתובת האימייל לא תקינה",
    errorPhone: "מספר הטלפון לא תקין",
    steps: ["שם", "חברה", "טלפון", "מייל"],
    questions: [
      "היי, אני אפי. נתחיל בהיכרות קצרה: איך קוראים לך?",
      "נעים מאוד, {name}. מאיזו חברה?",
      "לאיזה מספר כדאי לחזור אליך?",
      "ואחרון: מה כתובת המייל שלך?",
    ],
    online: "מחובר",
    send: "שליחה",
    done: "תודה, {name}. קיבלתי הכול. מישהו מהצוות יחזור אליך בהקדם לתיאום השיחה.",
    sent: "הפרטים נשלחו",
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
    titleA: "What took days",
    titleB: "now takes minutes.",
    sub: "We learn how you work and build, together with you, AI-powered solutions tailored to exactly what you need. Everything fits into the systems you already have and takes repetitive tasks off your team's plate.",
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
      { title: "See everything Effi does", text: "Every action is logged: what, when and why." },
      { title: "Nothing sensitive without approval", text: "Exceptions, payments and changes wait for your sign-off." },
      { title: "You decide what Effi can access", text: "Which information and systems, and with what permissions." },
    ],
  },
  contact: {
    peek: "Effi can't wait to meet you.",
    meta: "30-minute call · free · leave with a first direction",
    next: {
      title: "What happens next",
      steps: [
        { title: "Intro call", body: "Half an hour. Tell us where the work gets stuck." },
        { title: "Defining it together", body: "We work alongside your teams and decide together what to build." },
        { title: "Effi gets to work", body: "A first version on your systems, tested with your team, then improved." },
      ],
      team: "We don't sell software. We solve problems. Effi is run by three partners with years of experience in software, product and technology leadership.",
    },
    titleA: "Let's find",
    titleB: "your first bottleneck.",
    name: "Full name",
    company: "Company",
    phone: "Phone",
    email: "Email",
    submit: "Send",
    note: "Your details are kept according to our",
    privacy: "privacy policy",
    success: "Got it, thank you. We'll be in touch soon to set up the call.",
    errorSend: "Something went wrong and your message wasn't sent. Please try again in a moment.",
    errorRequired: "Required",
    errorEmail: "Please enter a valid email",
    errorPhone: "Please enter a valid phone number",
    steps: ["Name", "Company", "Phone", "Email"],
    questions: [
      "Hi, I'm Effi. Let's start with a quick intro: what's your name?",
      "Nice to meet you, {name}. Which company are you with?",
      "What's the best number to reach you on?",
      "Last one: what's your email?",
    ],
    online: "online",
    send: "Send",
    done: "Thanks, {name}. Got everything. Someone from the team will be in touch soon to set up the call.",
    sent: "Sent",
  },
  footer: { tagline: "AI adoption for organizations", privacy: "Privacy policy" },
};
