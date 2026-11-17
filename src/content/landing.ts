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
    logLabel: string;
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
    logTitle: string;
    logDemo: string;
    logCount: string;
    log: { time: string; text: string; status: string; waiting?: boolean }[];
    facts: { title: string; text: string }[];
  };
  cost: {
    label: string;
    title: string;
    peopleLabel: string;
    hoursLabel: string;
    note: string;
    yearLabel: string;
    /** "{n}" is replaced with the number of full-time positions. */
    fte: string;
    close: string;
    /** Gentle "why now" line under the result. */
    urgency: string;
  };
  ideas: {
    label: string;
    titleA: string;
    titleB: string;
    whatIf: string;
    tabs: { id: string; name: string; ideas: string[] }[];
    close: string;
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
    sub: "לומדים איך העבודה אצלכם באמת מתנהלת, ובונים יחד איתכם בדיוק את מה שהכי יעזור. כל ארגון מקבל אפי משלו.",
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
      { pain: "בודקים כל חשבונית ידנית מול ההזמנה.", after: "אפי בודק. אתם מאשרים רק את החריגות." },
      { pain: "מחפשים נוהל, תוכנית או חוזה, ולא מוצאים.", after: "שואלים את אפי במילים פשוטות, ומקבלים תשובה עם המקור." },
      { pain: "רק עובד אחד יודע איך פותרים את התקלה.", after: "הידע של הוותיקים זמין לכל עובד." },
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
    logLabel: "מה קרה מאחורי הקלעים",
    name: "אפי",
    online: "מחובר",
    today: "היום",
    typing: "אפי מקליד",
    messagePlaceholder: "הודעה",
    greeting: "בוקר טוב יוסי. הכול בשליטה, הנה מה שקרה מאז אתמול.",
    doneTitle: "מה כבר טופל:",
    done: ["46 חשבוניות ספקים נבדקו, 43 תקינות.", "סיכום של אתמול מחכה לך במייל.", "12 הזמנות מוואטסאפ הוזנו למערכת."],
    approvalTitle: "3 חשבוניות חורגות מחכות לאישור שלך. הראשונה:",
    approvalItem: "חשבונית ספק",
    approvalDetail: "גבוהה ב-8% מהמחיר שסוכם בהזמנה.",
    approve: "לאישור",
    details: "לפרטים",
    reply: "תעביר לרונית מהרכש שתבדוק.",
    ack: "העברתי לרונית. אעדכן אותך כשהיא תסיים.",
    logTitle: "המשימות שהוגדרו יחד באפיון",
    logDemo: "דוגמה",
    logCount: "פעולות מתחילת היום",
    log: [
      { time: "08:02", text: "46 חשבוניות ספקים נקלטו מהמייל ונבדקו מול ההזמנות.", status: "3 חריגות מחכות לאישורכם", waiting: true },
      { time: "08:05", text: "סיכום של אתמול הופק ונשלח למנהלים.", status: "בוצע" },
      { time: "08:11", text: "עובד שאל מה הנוהל להחזרת סחורה. התשובה נשלפה מהנוהל, סעיף 4.", status: "בוצע" },
      { time: "08:14", text: "12 הזמנות שהגיעו בוואטסאפ הוזנו למערכת ההזמנות.", status: "בוצע" },
      { time: "08:20", text: "המלאי של פריט 7 ירד מתחת לסף. הזמנת רכש הוכנה.", status: "מחכה לאישורכם", waiting: true },
      { time: "08:31", text: "דוח ההנהלה היומי מוכן, עם נתונים משלוש מערכות.", status: "בוצע" },
    ],
    facts: [
      { title: "רואים כל מה שאפי עושה", text: "כל פעולה מתועדת: מה, מתי ולמה." },
      { title: "שום דבר רגיש בלי אישור", text: "חריגות, תשלומים ושינויים מחכים לאישור שלכם." },
      { title: "אתם קובעים למה אפי ניגש", text: "לאיזה מידע ולאילו מערכות, ובאילו הרשאות." },
    ],
  },
  cost: {
    label: "תעשו את החשבון",
    title: "כמה זמן זה לוקח לכם?",
    peopleLabel: "כמה עובדים עושים עבודה ידנית שחוזרת על עצמה?",
    hoursLabel: "כמה שעות בשבוע, לכל אחד?",
    note: "החישוב: עובדים × שעות × 48 שבועות. משרה מלאה = 182 שעות בחודש.",
    yearLabel: "שעות עבודה ידנית בשנה",
    fte: "שהן {n} משרות מלאות.",
    close: "חלק גדול מהזמן הזה אפשר להחזיר לצוות, לעבודה שבאמת צריכה אותו.",
    urgency: "וכל חודש שמחכים, הפער ממי שכבר התחיל רק גדל.",
  },
  ideas: {
    label: "רעיונות לארגון שלכם",
    titleA: "איפה זה יעזור",
    titleB: "אצלכם?",
    whatIf: "מה אם",
    tabs: [
      {
        id: "manufacturing",
        name: "תעשייה וייצור",
        ideas: [
          "תקלות היו מתגלות לפני שקו הייצור נעצר?",
          "עובד חדש היה יכול לשאול את מה שהוותיקים יודעים?",
          "הזמנות הרכש היו יוצאות בזמן, בלי מעקב ידני?",
          "דוח האיכות היה מוכן בסוף כל משמרת?",
        ],
      },
      {
        id: "real-estate",
        name: "נדל״ן ובנייה",
        ideas: [
          "חשבונות קבלנים היו נבדקים מול החוזה באופן אוטומטי?",
          "רוכשים ודיירים היו מקבלים תשובה גם אחרי שעות העבודה?",
          "סעיפים חריגים בחוזה היו מסומנים תוך דקה?",
          "הידע מכל הפרויקטים היה נגיש בשאלה אחת?",
        ],
      },
      {
        id: "agriculture",
        name: "חקלאות ומזון",
        ideas: [
          "הודעה קולית מהשטח הייתה הופכת לנתון מסודר?",
          "המלצות ההשקיה היו מגיעות מעצמן כל שבוע?",
          "מסמכי היצוא היו מוכנים בלחיצה אחת?",
          "שיבוץ העובדים העונתיים היה לוקח דקות?",
        ],
      },
      {
        id: "logistics",
        name: "לוגיסטיקה",
        ideas: [
          "הזמנות היו נכנסות ישר למערכת, בלי הקלדה?",
          "מסמכי המכס היו נבדקים באופן אוטומטי?",
          "הלקוח היה יודע איפה המשלוח בלי להתקשר?",
          "חוסר במלאי היה מתגלה לפני שהוא מעכב משלוח?",
        ],
      },
      {
        id: "enterprise",
        name: "מטות וארגונים גדולים",
        ideas: [
          "עובדים היו מקבלים מיד תשובה מתוך הנהלים?",
          "פניות למחשוב ולמשאבי אנוש היו מגיעות ישר לגורם הנכון?",
          "דוח ההנהלה היה מוכן כל בוקר?",
          "השוואת הצעות מחיר הייתה לוקחת דקות?",
        ],
      },
    ],
    close: "יש לכם רעיון משלכם? נשמח לשמוע.",
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
      team: "מאחורי Effi עומדים שלושה שותפים עם שנים של ניסיון בפיתוח תוכנה, מוצר וניהול טכנולוגי.",
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
    sub: "We learn how work really runs at your place, and build with you exactly what will help most. Every organization gets its own Effi.",
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
      { pain: "Checking every invoice against the order by hand.", after: "Effi checks. You approve only the exceptions." },
      { pain: "Searching for a procedure, plan or contract, and not finding it.", after: "Ask Effi in plain words and get an answer with its source." },
      { pain: "Only one person knows how to fix the fault.", after: "What your most experienced people know, available to everyone." },
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
    logLabel: "What happened behind the scenes",
    name: "Effi",
    online: "online",
    today: "Today",
    typing: "Effi is typing",
    messagePlaceholder: "Message",
    greeting: "Good morning, Yossi. Everything is under control. Here's what happened since yesterday.",
    doneTitle: "Already handled:",
    done: ["46 supplier invoices checked, 43 clean.", "Yesterday's summary is in your inbox.", "12 WhatsApp orders entered into the system."],
    approvalTitle: "3 invoices over the agreed price need your approval. The first:",
    approvalItem: "Supplier invoice",
    approvalDetail: "8% above the price agreed in the order.",
    approve: "Approve",
    details: "Details",
    reply: "Send it to Ronit in purchasing to review.",
    ack: "Sent to Ronit. I'll update you when she's done.",
    logTitle: "Tasks defined together in scoping",
    logDemo: "example",
    logCount: "actions today",
    log: [
      { time: "08:02", text: "46 supplier invoices pulled from email and checked against the orders.", status: "3 exceptions await you", waiting: true },
      { time: "08:05", text: "Yesterday's summary generated and sent to the managers.", status: "Done" },
      { time: "08:11", text: "An employee asked about the returns procedure. Answer found in the procedure, section 4.", status: "Done" },
      { time: "08:14", text: "12 orders received on WhatsApp entered into the ERP.", status: "Done" },
      { time: "08:20", text: "Item 7 fell below the reorder level. A purchase order is ready.", status: "Awaiting you", waiting: true },
      { time: "08:31", text: "Daily management report ready, with data from three systems.", status: "Done" },
    ],
    facts: [
      { title: "See everything Effi does", text: "Every action is logged: what, when and why." },
      { title: "Nothing sensitive without approval", text: "Exceptions, payments and changes wait for your sign-off." },
      { title: "You decide what Effi can access", text: "Which information and systems, and with what permissions." },
    ],
  },
  cost: {
    label: "Do the math",
    title: "How much time does it take?",
    peopleLabel: "How many people do repetitive manual work?",
    hoursLabel: "How many hours a week, each?",
    note: "Calculation: people × hours × 48 weeks. Full-time position = 182 hours a month.",
    yearLabel: "Hours of manual work a year",
    fte: "That's {n} full-time positions.",
    close: "Much of that time can go back to your team, for the work that really needs them.",
    urgency: "And every month you wait, the gap to those who already started grows.",
  },
  ideas: {
    label: "Ideas for your organization",
    titleA: "Where would it help",
    titleB: "you?",
    whatIf: "What if",
    tabs: [
      {
        id: "manufacturing",
        name: "Manufacturing",
        ideas: [
          "faults were caught before the line stopped?",
          "a new hire could ask what your most experienced people know?",
          "purchase orders went out on time, with no manual chasing?",
          "the quality report was ready at the end of every shift?",
        ],
      },
      {
        id: "real-estate",
        name: "Real estate & construction",
        ideas: [
          "contractor invoices were checked against the contract automatically?",
          "buyers and tenants got an answer after hours too?",
          "unusual contract clauses were flagged within a minute?",
          "knowledge from every project was one question away?",
        ],
      },
      {
        id: "agriculture",
        name: "Agriculture & food",
        ideas: [
          "a voice note from the field became structured data?",
          "irrigation recommendations arrived on their own every week?",
          "export documents were ready in one click?",
          "scheduling seasonal workers took minutes?",
        ],
      },
      {
        id: "logistics",
        name: "Logistics",
        ideas: [
          "orders went straight into the system, with no retyping?",
          "customs documents were checked automatically?",
          "customers knew where their shipment was without calling?",
          "a stock shortage showed up before it delayed a shipment?",
        ],
      },
      {
        id: "enterprise",
        name: "Large organizations",
        ideas: [
          "employees got an instant answer from your procedures?",
          "IT and HR requests reached the right person directly?",
          "the management report was ready every morning?",
          "comparing quotes took minutes?",
        ],
      },
    ],
    close: "Have an idea of your own? We'd love to hear it.",
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
      team: "Effi is run by three partners with years of experience in software, product and technology leadership.",
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
