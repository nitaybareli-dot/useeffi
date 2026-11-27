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
    before: { label: string; text: string };
    after: { label: string; text: string };
    flowAlt: string;
    /** Short facts under the intro, each with an icon. */
    badges: { icon: "moon" | "coins" | "heart" | "infinity"; text: string }[];
    /** Question and two buttons right above the drawing. */
    ctaQuestion: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    /** Each item also shows where the work comes from and what it turns into. */
    tabs: { id: string; name: string; items: { title: string; does: string; from: string; to: string }[] }[];
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
    /** Label before each step's outcome, and "of" for "02 of 04". */
    outputLabel: string;
    of: string;
    steps: { title: string; body: string; output: string }[];
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
  calc: {
    label: string;
    titleA: string;
    titleB: string;
    lead: string;
    employees: string;
    hours: string;
    cost: string;
    /** Share of the manual hours Effi takes over, 0–1. */
    share: number;
    shareNote: string;
    monthly: string;
    yearly: string;
    hoursSaved: string;
    perMonth: string;
    currency: string;
    disclaimer: string;
    cta: string;
  };
  team: {
    label: string;
    title: string;
    lead: string;
    members: { name: string; role: string }[];
    storyDraft: string;
    storyHint: string;
  };
  why: {
    label: string;
    titleA: string;
    titleB: string;
    points: { title: string; text: string }[];
    close: string;
    card: { heading: string; name: string; rows: { k: string; v: string }[]; status: string };
  };
  /** Big statement right before the form. */
  closing: { a: string; b: string };
  footer: { tagline: string; privacy: string };
};

export const landingHe: Landing = {
  lang: "he",
  switchHref: "/en",
  switchLabel: "EN",
  headerCta: "יצירת קשר",
  hero: {
    eyebrow: "הטמעת AI בארגונים",
    titleA: "תכירו את אפי.",
    titleB: "העובד הדיגיטלי החדש שלכם.",
    sub: "הוא מכיר את העסק שלכם, מתחבר למערכות הקיימות ועובד בשבילכם 24 שעות ביממה. מקסימום תפוקה. מינימום הוצאות.",
    before: { label: "היום", text: "ידני · מפוזר · איטי" },
    after: { label: "עם אפי", text: "אוטומטי · מחובר · מהיר" },
    flowAlt: "קווים סבוכים ואיטיים נכנסים לצומת אחד, ויוצאים ממנו כקווים ישרים ומהירים",
    badges: [
      { icon: "moon", text: "עובד 24/7" },
      { icon: "coins", text: "בלי פנסיה" },
      { icon: "heart", text: "לא חולה אף פעם" },
      { icon: "infinity", text: "תמיד זמין" },
    ],
    ctaQuestion: "רוצים שהעסק שלכם ימשיך לעבוד גם כשאתם לא?",
    ctaPrimary: "בואו נגייס את אפי",
    ctaSecondary: "תראו את אפי בפעולה",
  },
  chat: {
    label: "אפי בפעולה",
    titleA: "אפי עושה את השגרה.",
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
    titleA: "איך אפי עוזר",
    titleB: "לארגונים.",
    tabs: [
      {
        id: "manufacturing",
        name: "תעשייה וייצור",
        items: [
          { title: "רכש ומלאי", does: "מעקב אחרי המלאי, והכנת הזמנות רכש לאישור.", from: "נתוני מלאי", to: "הזמנת רכש" },
          { title: "בקרת איכות", does: "ריכוז בדיקות המשמרת לדוח אחד, עם התראה על פספוסים.", from: "בדיקות המשמרת", to: "דוח והתראות" },
          { title: "ידע והדרכה", does: "תשובות לעובדים מתוך הנהלים, בשפה שלהם.", from: "נהלים", to: "תשובה לעובד" },
        ],
      },
      {
        id: "agriculture",
        name: "חקלאות ומזון",
        items: [
          { title: "חדרי קירור ומלאי", does: "מעקב רציף אחרי טמפרטורות ומלאי, והתראה כשמשהו חורג.", from: "חיישני טמפרטורה", to: "התראה למנהל" },
          { title: "דיווחים ותעודות", does: "ריכוז הדיווחים לרשויות וללקוחות, בלי לרדוף אחרי ניירת.", from: "נתוני משלוחים", to: "דיווח מוכן" },
          { title: "הזמנות ולקוחות", does: "הזמנות נקלטות מהוואטסאפ ומהמייל, והלקוח מקבל עדכון.", from: "וואטסאפ ומייל", to: "מערכת ההזמנות" },
        ],
      },
      {
        id: "real-estate",
        name: "נדל״ן ובנייה",
        items: [
          { title: "חשבונות קבלנים", does: "בדיקת חשבונות מול החוזה, וסימון של מה שלא מתאים.", from: "חשבון וחוזה", to: "סימון חריגות" },
          { title: "פניות רוכשים ודיירים", does: "מענה מסודר לפניות, גם אחרי שעות העבודה.", from: "פניות", to: "מענה ותיעוד" },
          { title: "חוזים ומסמכים", does: "סימון סעיפים חריגים לפני החתימה.", from: "טיוטת חוזה", to: "סעיפים לבדיקה" },
        ],
      },
      {
        id: "logistics",
        name: "לוגיסטיקה",
        items: [
          { title: "קליטת הזמנות", does: "הזמנות מהמייל ומהוואטסאפ נכנסות ישר למערכת.", from: "מייל ווואטסאפ", to: "מערכת ההזמנות" },
          { title: "מסמכי יצוא ומכס", does: "הכנה ובדיקה של המסמכים לפני שהם יוצאים.", from: "נתוני משלוח", to: "מסמכים בדוקים" },
          { title: "עדכוני משלוחים", does: "הלקוח יודע איפה המשלוח, בלי להתקשר.", from: "מערכת המשלוחים", to: "עדכון ללקוח" },
        ],
      },
      {
        id: "offices",
        name: "משרדים ומטות",
        items: [
          { title: "משאבי אנוש", does: "מענה לעובדים מתוך הנהלים, בכל שעה.", from: "נהלים", to: "תשובה לעובד" },
          { title: "דוחות הנהלה", does: "דוח מוכן בבוקר, מנתונים של כמה מערכות.", from: "כמה מערכות", to: "דוח בוקר" },
          { title: "רכש והצעות מחיר", does: "השוואת הצעות מחיר, מוכנה לפני הישיבה.", from: "הצעות מספקים", to: "טבלת השוואה" },
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
    label: "איך זה הולך לעבוד",
    titleA: "למצוא לאפי עבודה בעסק שלכם?",
    titleB: "זאת כבר העבודה שלנו.",
    lead: "אנחנו לא מצפים מכם למפות תהליכים, לאתר כשלים או להבין איפה אפשר לשלב AI. אנחנו מגיעים אליכם, שואלים את השאלות הנכונות, מזהים את ההזדמנויות ובונים את האפי שהעסק שלכם באמת צריך.",
    outputLabel: "מה יוצא מהשלב",
    of: "מתוך",
    steps: [
      { title: "שיחת היכרות", body: "מכירים את הארגון, את הצוותים ואת מה שמעסיק אתכם היום.", output: "הבנה משותפת של מה הכי חשוב לכם." },
      { title: "אפיון משותף", body: "יושבים עם האנשים שעושים את העבודה, ומאתרים יחד איפה היא נתקעת ומה כדאי לפתור קודם.", output: "מפה של התהליכים ונקודות התקיעה, וסדר עדיפויות מוסכם." },
      { title: "פיילוט ממוקד", body: "בונים פתרון לתהליך אחד, על המערכות שכבר יש לכם, וקובעים מראש איך מודדים הצלחה.", output: "פתרון שעובד בתהליך אחד, ותוצאות שאפשר למדוד." },
      { title: "הרחבה וליווי", body: "כשהתוצאות ברורות, מרחיבים לתהליכים נוספים, וממשיכים ללוות ולשפר.", output: "תוכנית הרחבה, וליווי שוטף לאורך הדרך." },
    ],
  },
  contact: {
    meta: "שיחה ראשונה בלי עלות · בלי התחייבות · בזמן שנוח לכם",
    titleA: "אתם מומחים בעסק שלכם.",
    titleB: "אנחנו מומחים בלייעל אותו.",
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
  calc: {
    label: "מחשבון חיסכון",
    titleA: "עובד יותר.",
    titleB: "עולה פחות.",
    lead: "כמה כסף אפי יכול לחסוך לעסק שלכם? הזיזו את הסמנים וגלו.",
    employees: "עובדים במשרד ובאדמיניסטרציה",
    hours: "שעות בשבוע לכל עובד על עבודה ידנית",
    cost: "עלות שעת עבודה ממוצעת",
    share: 0.6,
    shareNote: "בהנחה שאפי לוקח בערך 60% מהעבודה הידנית.",
    monthly: "חיסכון בחודש",
    yearly: "חיסכון בשנה",
    hoursSaved: "שעות שמתפנות",
    perMonth: "בחודש",
    currency: "₪",
    disclaimer: "הערכה בלבד. המספרים האמיתיים יוצאים מהאפיון.",
    cta: "בואו נבדוק את המספרים שלכם",
  },
  team: {
    label: "מי אנחנו",
    title: "מי עומד מאחורי אפי",
    lead: "בסוף, אנשים רוצים לעבוד מול אנשים. אפי הוא הטכנולוגיה. אנחנו האנשים שמכירים אתכם, בונים אותו ונשארים איתכם עד שהוא עובד.",
    members: [
      { name: "נתאי בראלי", role: "שותף מייסד" },
      { name: "אור", role: "שותף מייסד" },
      { name: "יהודה בנד", role: "שותף מייסד" },
    ],
    storyDraft: "כאן יבוא סיפור אישי קצר: איך התחלנו, למשל מהעסק המשפחתי שייעלנו.",
    storyHint: "טיוטה · צריך טקסט ותמונות מכם",
  },
  why: {
    label: "למה עכשיו",
    titleA: "למה דווקא אפי,",
    titleB: "ולמה דווקא עכשיו?",
    points: [
      { title: "אנחנו בעיצומה של מהפכה", text: "עסקים שמתחילים עכשיו בונים יתרון משמעותי על המתחרים שלהם." },
      { title: "מוקדם יותר, יתרון גדול יותר", text: "ככל שמתחילים מוקדם יותר, יש יותר זמן ללמוד, לשפר ולבנות יתרון תחרותי." },
      { title: "עובד שלא מתעייף", text: "בלי תשלומי פנסיה, בלי ימי מחלה, ועם מוטיבציה שלא נגמרת." },
    ],
    close: "בסוף, אתם לא צריכים ״להכניס AI לעסק״. אתם צריכים אפי.",
    card: {
      heading: "כרטיס עובד",
      name: "אפי",
      rows: [
        { k: "תפקיד", v: "עובד דיגיטלי" },
        { k: "מחלקה", v: "בק אופיס" },
        { k: "משמרת", v: "24/7" },
        { k: "ימי מחלה", v: "0" },
      ],
      status: "מחפש עסק לעבוד בו",
    },
  },
  closing: { a: "תנו לאפי לעבוד.", b: "תנו לעסק שלכם לגדול." },
  footer: { tagline: "פתרונות AI מותאמים לארגונים", privacy: "מדיניות פרטיות" },
};

export const landingEn: Landing = {
  lang: "en",
  switchHref: "/",
  switchLabel: "עב",
  headerCta: "Contact",
  hero: {
    eyebrow: "AI implementation for organizations",
    titleA: "Meet Effi.",
    titleB: "Your new digital employee.",
    sub: "Effi knows your business, connects to your existing systems and works for you around the clock. Maximum output. Minimum cost.",
    before: { label: "Today", text: "Manual · scattered · slow" },
    after: { label: "With Effi", text: "Automated · connected · fast" },
    flowAlt: "Tangled, slow lines enter a single node and leave it as straight, fast lines",
    badges: [
      { icon: "moon", text: "Works 24/7" },
      { icon: "coins", text: "No pension" },
      { icon: "heart", text: "Never sick" },
      { icon: "infinity", text: "Always available" },
    ],
    ctaQuestion: "Want your business to keep working even when you don't?",
    ctaPrimary: "Let's hire Effi",
    ctaSecondary: "See Effi in action",
  },
  chat: {
    label: "Effi in action",
    titleA: "Effi handles the routine.",
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
    titleA: "How Effi helps",
    titleB: "organizations.",
    tabs: [
      {
        id: "manufacturing",
        name: "Manufacturing",
        items: [
          { title: "Purchasing & stock", does: "Tracking stock and preparing purchase orders for approval.", from: "Stock data", to: "Purchase order" },
          { title: "Quality control", does: "One report of the shift's checks, with alerts on anything missed.", from: "Shift checks", to: "Report & alerts" },
          { title: "Knowledge & training", does: "Answers for employees from the procedures, in their own language.", from: "Procedures", to: "Answer to employee" },
        ],
      },
      {
        id: "agriculture",
        name: "Agriculture & food",
        items: [
          { title: "Cold rooms & stock", does: "Continuous tracking of temperatures and stock, with an alert when something is off.", from: "Temperature sensors", to: "Alert to manager" },
          { title: "Reports & certificates", does: "Reports for authorities and customers in one place, without chasing paperwork.", from: "Shipment data", to: "Ready report" },
          { title: "Orders & customers", does: "Orders come in from WhatsApp and email, and the customer gets an update.", from: "WhatsApp & email", to: "Order system" },
        ],
      },
      {
        id: "real-estate",
        name: "Real estate & construction",
        items: [
          { title: "Contractor invoices", does: "Checking invoices against the contract and flagging what doesn't match.", from: "Invoice & contract", to: "Flagged exceptions" },
          { title: "Buyer & tenant inquiries", does: "Orderly answers to inquiries, after business hours too.", from: "Inquiries", to: "Answer & record" },
          { title: "Contracts & documents", does: "Flagging unusual clauses before signing.", from: "Draft contract", to: "Clauses to review" },
        ],
      },
      {
        id: "logistics",
        name: "Logistics",
        items: [
          { title: "Order intake", does: "Orders from email and WhatsApp go straight into the system.", from: "Email & WhatsApp", to: "Order system" },
          { title: "Export & customs papers", does: "Preparing and checking documents before they go out.", from: "Shipment data", to: "Checked documents" },
          { title: "Shipment updates", does: "Customers know where their shipment is, without calling.", from: "Shipping system", to: "Customer update" },
        ],
      },
      {
        id: "offices",
        name: "Offices & HQ",
        items: [
          { title: "HR", does: "Answers for employees from the procedures, at any hour.", from: "Procedures", to: "Answer to employee" },
          { title: "Management reports", does: "A report ready in the morning, from several systems.", from: "Several systems", to: "Morning report" },
          { title: "Purchasing & quotes", does: "Quotes compared and ready before the meeting.", from: "Supplier quotes", to: "Comparison table" },
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
    label: "How it will work",
    titleA: "Finding Effi a job in your business?",
    titleB: "That's our job.",
    lead: "We don't expect you to map processes, find failures or figure out where AI fits. We come to you, ask the right questions, spot the opportunities and build the Effi your business really needs.",
    outputLabel: "What comes out of it",
    of: "of",
    steps: [
      { title: "Intro conversation", body: "Getting to know the organization, the teams and what's on your mind today.", output: "A shared understanding of what matters most to you." },
      { title: "Joint discovery", body: "We sit with the people who do the work and find together where it gets stuck and what's worth solving first.", output: "A map of the processes and sticking points, with agreed priorities." },
      { title: "Focused pilot", body: "We build a solution for one process, on the systems you already have, and agree in advance how success is measured.", output: "A working solution in one process, with measurable results." },
      { title: "Expansion & support", body: "Once the results are clear, we expand to more processes, and keep supporting and improving.", output: "An expansion plan, and ongoing support along the way." },
    ],
  },
  contact: {
    meta: "First conversation at no cost · No commitment · At a time that suits you",
    titleA: "You're the experts in your business.",
    titleB: "We're the experts in making it efficient.",
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
  calc: {
    label: "Savings calculator",
    titleA: "Works more.",
    titleB: "Costs less.",
    lead: "How much could Effi save your business? Move the sliders and see.",
    employees: "Office and admin employees",
    hours: "Weekly hours per employee on manual work",
    cost: "Average hourly cost",
    share: 0.6,
    shareNote: "Assuming Effi takes over about 60% of the manual work.",
    monthly: "Saved per month",
    yearly: "Saved per year",
    hoursSaved: "Hours freed up",
    perMonth: "per month",
    currency: "₪",
    disclaimer: "An estimate only. The real numbers come out of discovery.",
    cta: "Let's check your numbers",
  },
  team: {
    label: "About us",
    title: "Who is behind Effi",
    lead: "In the end, people want to work with people. Effi is the technology. We're the people who get to know you, build it and stay with you until it works.",
    members: [
      { name: "Nitay Bareli", role: "Co-founder" },
      { name: "Or", role: "Co-founder" },
      { name: "Yehuda Band", role: "Co-founder" },
    ],
    storyDraft: "A short personal story goes here: how we started, for example with the family business we made efficient.",
    storyHint: "Draft · needs text and photos from you",
  },
  why: {
    label: "Why now",
    titleA: "Why Effi,",
    titleB: "and why now?",
    points: [
      { title: "We're in the middle of a revolution", text: "Businesses that start now build a real edge over their competitors." },
      { title: "Earlier means a bigger edge", text: "The earlier you start, the more time you have to learn, improve and build an advantage." },
      { title: "An employee who never tires", text: "No pension payments, no sick days, and motivation that never runs out." },
    ],
    close: "In the end, you don't need to \"bring AI into the business\". You need Effi.",
    card: {
      heading: "Employee card",
      name: "Effi",
      rows: [
        { k: "Role", v: "Digital employee" },
        { k: "Department", v: "Back office" },
        { k: "Shift", v: "24/7" },
        { k: "Sick days", v: "0" },
      ],
      status: "Looking for a business to work in",
    },
  },
  closing: { a: "Let Effi work.", b: "Let your business grow." },
  footer: { tagline: "AI solutions tailored to organizations", privacy: "Privacy policy" },
};
