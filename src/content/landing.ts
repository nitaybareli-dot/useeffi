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
  };
  gap: {
    label: string;
    titleA: string;
    titleB: string;
    lead: string;
    chartTitle: string;
    illustration: string;
    ticks: string[];
    adopting: string;
    waiting: string;
    gapWord: string;
    legendAdopting: string;
    legendWaiting: string;
    chartAlt: string;
  };
  ideas: {
    label: string;
    titleA: string;
    titleB: string;
    whatIf: string;
    tabs: { id: string; name: string; ideas: string[] }[];
    close: string;
  };
  together: {
    label: string;
    titleA: string;
    titleB: string;
    lead: string;
    you: string;
    youText: string;
    us: string;
    usText: string;
    solution: string;
    vennAlt: string;
    steps: { when: string; title: string; text: string }[];
    principles: { title: string; text: string }[];
  };
  contact: {
    peek: string;
    meta: string;
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
    online: string;
    send: string;
    /** Shown after the lead is saved. "{name}" is the visitor's first name. */
    done: string;
  };
  footer: { tagline: string; privacy: string };
};

export const landingHe: Landing = {
  lang: "he",
  switchHref: "/en",
  switchLabel: "EN",
  headerCta: "קבעו שיחה",
  hero: {
    eyebrow: "הטמעת AI בארגונים",
    titleA: "מה שלקח ימים,",
    titleB: "לוקח דקות.",
    sub: "נכנסים לעבודה שלכם, מבינים איפה היא נתקעת, ובונים יחד איתכם את אפי: מערכת AI פשוטה שעובדת לצד הצוות שלכם.",
    cta: "קבעו שיחת היכרות",
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
    closeA: "וכל זה",
    closeB: "בלי להחליף אף מערכת שכבר עובדת אצלכם.",
  },
  chat: {
    label: "ככה זה נראה אחרי",
    titleA: "אפי מכין את העבודה.",
    titleB: "אתם מחליטים.",
    lead: "כל בוקר מגיעה הודעה אחת: מה טופל, מה מחכה לכם, ושהכול בשליטה. בוואטסאפ, איפה שאתם כבר נמצאים.",
    phoneLabel: "מה המנהל מקבל",
    logLabel: "מה אפי עושה בינתיים",
    name: "אפי",
    online: "מחובר",
    today: "היום",
    typing: "אפי מקליד",
    messagePlaceholder: "הודעה",
    greeting: "בוקר טוב יוסי. הלילה עבר בשקט, הכול בשליטה.",
    doneTitle: "מה כבר טופל:",
    done: ["46 חשבוניות נבדקו, 43 תקינות.", "דוח משמרת הלילה מחכה לך במייל.", "12 הזמנות מוואטסאפ הוזנו למערכת."],
    approvalTitle: "דבר אחד מחכה לאישור שלך:",
    approvalItem: "חשבון קבלן, פרויקט רמת החייל",
    approvalDetail: "חורג ב-8% מכתב הכמויות, בסעיף הטיח.",
    approve: "לאישור",
    details: "לפרטים",
    reply: "תעביר לרונית שתבדוק.",
    ack: "העברתי לרונית. אעדכן אותך כשהיא תסיים.",
    logTitle: "מה רץ ברקע",
    logDemo: "הדגמה",
    logCount: "פעולות מתחילת היום",
    log: [
      { time: "08:02", text: "46 חשבוניות ספקים נקלטו מהמייל ונבדקו מול ההזמנות.", status: "3 חריגות מחכות לאישורכם", waiting: true },
      { time: "08:05", text: "דוח משמרת הלילה הופק ונשלח למנהל הייצור.", status: "בוצע" },
      { time: "08:11", text: "עובד שאל איך מכיילים את מכונה 4. התשובה נשלפה מספר המכונה, עמוד 112.", status: "בוצע" },
      { time: "08:14", text: "12 הזמנות שהגיעו בוואטסאפ הוזנו למערכת ההזמנות.", status: "בוצע" },
      { time: "08:20", text: "חשבון קבלן חורג ב-8% מכתב הכמויות. סומן למנהל הפרויקט.", status: "מחכה לאישורכם", waiting: true },
      { time: "08:31", text: "דוח ההנהלה היומי מוכן, עם נתונים משלוש מערכות.", status: "בוצע" },
    ],
    facts: [
      { title: "רואים כל מה שאפי עושה", text: "כל פעולה מתועדת: מה, מתי ולמה." },
      { title: "שום דבר רגיש בלי אישור", text: "חריגות, תשלומים ושינויים מחכים לאישור שלכם." },
      { title: "הנתונים נשארים אצלכם", text: "בתוך הארגון, בהרשאות שאתם קובעים." },
    ],
  },
  cost: {
    label: "תעשו את החשבון",
    title: "כמה זה עולה לכם?",
    peopleLabel: "כמה עובדים עושים עבודה ידנית שחוזרת על עצמה?",
    hoursLabel: "כמה שעות בשבוע, לכל אחד?",
    note: "החישוב: עובדים × שעות × 48 שבועות. משרה מלאה = 182 שעות בחודש.",
    yearLabel: "שעות עבודה ידנית בשנה",
    fte: "שהן {n} משרות מלאות.",
    close: "זה הזמן שהצוות שלכם יכול לקבל בחזרה.",
  },
  gap: {
    label: "למה עכשיו",
    titleA: "מי שמתחיל היום,",
    titleB: "מוביל מחר.",
    lead: "ארגונים שעובדים עם AI משתפרים כל חודש. הפער מכל השאר רק גדל.",
    chartTitle: "תפוקה לעובד, לאורך זמן",
    illustration: "המחשה",
    ticks: ["היום", "6 חודשים", "12 חודשים", "18 חודשים", "24 חודשים"],
    adopting: "מטמיעים AI",
    waiting: "מחכים",
    gapWord: "הפער",
    legendAdopting: "ארגון שמטמיע AI",
    legendWaiting: "ארגון שמחכה",
    chartAlt:
      "גרף להמחשה: שני ארגונים מתחילים באותה נקודה. התפוקה בארגון שמטמיע AI עולה בחדות לאורך 24 חודשים, ובארגון שמחכה היא כמעט לא משתנה. הפער ביניהם גדל.",
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
          "כל תקלה הייתה מתגלה לפני שקו הייצור נעצר?",
          "כל עובד חדש היה יודע את מה שהוותיקים יודעים?",
          "הזמנות הרכש היו יוצאות בזמן, בלי מעקב ידני?",
          "דוח האיכות היה מוכן בסוף כל משמרת?",
        ],
      },
      {
        id: "real-estate",
        name: "נדל״ן ובנייה",
        ideas: [
          "כל חשבון קבלן היה נבדק מול החוזה באופן אוטומטי?",
          "רוכשים ודיירים היו מקבלים תשובה בכל שעה?",
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
          "כל הזמנה הייתה נכנסת ישר למערכת?",
          "מסמכי המכס היו נבדקים באופן אוטומטי?",
          "הלקוח היה יודע איפה המשלוח בלי להתקשר?",
          "חוסר במלאי היה מתגלה שבוע מראש?",
        ],
      },
      {
        id: "enterprise",
        name: "מטות וארגונים גדולים",
        ideas: [
          "כל עובד היה מקבל מיד תשובה מתוך הנהלים?",
          "פניות למחשוב ולמשאבי אנוש היו מגיעות ישר לגורם הנכון?",
          "דוח ההנהלה היה מוכן כל בוקר?",
          "השוואת הצעות מחיר הייתה לוקחת דקות?",
        ],
      },
    ],
    close: "יש לכם רעיון משלכם? נשמח לשמוע.",
  },
  together: {
    label: "איך עובדים איתנו",
    titleA: "מתחילים בהקשבה.",
    titleB: "מאפיינים יחד, לעומק.",
    lead: "אפי לא מחליף אף אחד. הוא עוזר לאנשים שלכם, ואנחנו מלווים אותם עד שהעבודה איתו מרגישה טבעית.",
    you: "אתם",
    youText: "מכירים את העסק",
    us: "אנחנו",
    usText: "מכירים את הטכנולוגיה",
    solution: "הפתרון",
    vennAlt: "שני עיגולים מתקרבים וחופפים: אתם מכירים את העסק, אנחנו מכירים את הטכנולוגיה, ובחפיפה נוצר הפתרון",
    steps: [
      { when: "01 · שבועות ⁦1–4⁩", title: "אפיון משותף", text: "יושבים עם ההנהלה ועם הצוותים בשטח, ומגדירים יחד מה בונים." },
      { when: "02 · שבועות ⁦4–10⁩", title: "בנייה", text: "גרסה עובדת כל שבועיים, על המערכות שלכם." },
      { when: "03 · לאורך הדרך", title: "הובלה", text: "מובילים את ההטמעה עד שהיא הופכת לשגרה." },
    ],
    principles: [
      { title: "מהירים", text: "פיילוט עובד תוך ⁦6–10⁩ שבועות." },
      { title: "זמינים", text: "קשר ישיר עם מי שבונה." },
      { title: "מקצועיים", text: "עבודה מדויקת, ברמה של מערכות ליבה." },
      { title: "אחראים", text: "מובילים עד שרואים תוצאה." },
    ],
  },
  contact: {
    peek: "אפי כבר מחכה להכיר.",
    meta: "שיחה של 30 דקות · בלי עלות · יוצאים עם כיוון ראשון",
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
    questions: [
      "היי, אני אפי. נתחיל בהיכרות קצרה: איך קוראים לך?",
      "נעים מאוד, {name}. מאיזו חברה?",
      "לאיזה מספר כדאי לחזור אליך?",
      "ואחרון: אימייל, כדי שנשלח סיכום אחרי השיחה.",
    ],
    online: "מחובר",
    send: "שליחה",
    done: "תודה, {name}. קיבלתי הכול. מישהו מהצוות יחזור אליך בהקדם לתיאום השיחה.",
  },
  footer: { tagline: "הטמעת AI בארגונים", privacy: "מדיניות פרטיות" },
};

export const landingEn: Landing = {
  lang: "en",
  switchHref: "/",
  switchLabel: "עב",
  headerCta: "Book a call",
  hero: {
    eyebrow: "AI adoption for organizations",
    titleA: "What took days",
    titleB: "now takes minutes.",
    sub: "We step into your operations, find where work gets stuck, and build Effi with you: a simple AI system that works alongside your team.",
    cta: "Book an intro call",
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
      { pain: "Only one person knows how to fix the fault.", after: "Your veterans' know-how, available to everyone." },
      { pain: "Building the same report from scratch every week.", after: "The report is ready for you every morning." },
    ],
    closeA: "All of it",
    closeB: "without replacing a single system that already works for you.",
  },
  chat: {
    label: "What it looks like after",
    titleA: "Effi prepares the work.",
    titleB: "You make the calls.",
    lead: "Every morning, one message: what's done, what needs you, and that everything is under control. On WhatsApp, where you already are.",
    phoneLabel: "What the manager gets",
    logLabel: "What Effi does meanwhile",
    name: "Effi",
    online: "online",
    today: "Today",
    typing: "Effi is typing",
    messagePlaceholder: "Message",
    greeting: "Good morning, Yossi. Quiet night, everything is under control.",
    doneTitle: "Already handled:",
    done: ["46 invoices checked, 43 clean.", "The night-shift report is in your inbox.", "12 WhatsApp orders entered into the system."],
    approvalTitle: "One item needs your approval:",
    approvalItem: "Contractor invoice, Ramat HaHayal project",
    approvalDetail: "8% over the bill of quantities, plastering line.",
    approve: "Approve",
    details: "Details",
    reply: "Send it to Ronit to review.",
    ack: "Sent to Ronit. I'll update you when she's done.",
    logTitle: "Running in the background",
    logDemo: "demo",
    logCount: "actions today",
    log: [
      { time: "08:02", text: "46 supplier invoices pulled from email and checked against the orders.", status: "3 exceptions await you", waiting: true },
      { time: "08:05", text: "Night-shift report generated and sent to the production manager.", status: "Done" },
      { time: "08:11", text: "An employee asked how to calibrate machine 4. Answer found in the machine manual, page 112.", status: "Done" },
      { time: "08:14", text: "12 orders received on WhatsApp entered into the ERP.", status: "Done" },
      { time: "08:20", text: "Contractor invoice 8% over the bill of quantities. Flagged to the project manager.", status: "Awaiting you", waiting: true },
      { time: "08:31", text: "Daily management report ready, with data from three systems.", status: "Done" },
    ],
    facts: [
      { title: "See everything Effi does", text: "Every action is logged: what, when and why." },
      { title: "Nothing sensitive without approval", text: "Exceptions, payments and changes wait for your sign-off." },
      { title: "Your data stays with you", text: "Inside your organization, under the permissions you set." },
    ],
  },
  cost: {
    label: "Do the math",
    title: "What is it costing you?",
    peopleLabel: "How many people do repetitive manual work?",
    hoursLabel: "How many hours a week, each?",
    note: "Calculation: people × hours × 48 weeks. Full-time position = 182 hours a month.",
    yearLabel: "Hours of manual work a year",
    fte: "That's {n} full-time positions.",
    close: "That's the time your team can get back.",
  },
  gap: {
    label: "Why now",
    titleA: "Start today,",
    titleB: "lead tomorrow.",
    lead: "Organizations working with AI get better every month. The gap with everyone else keeps growing.",
    chartTitle: "Output per employee over time",
    illustration: "Illustration",
    ticks: ["Today", "6 months", "12 months", "18 months", "24 months"],
    adopting: "Adopting AI",
    waiting: "Waiting",
    gapWord: "The gap",
    legendAdopting: "Organization adopting AI",
    legendWaiting: "Organization waiting",
    chartAlt:
      "Illustrative chart: two organizations start at the same point. Output at the one adopting AI rises sharply over 24 months; at the one waiting it barely moves. The gap keeps widening.",
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
          "every fault was caught before the line stopped?",
          "every new hire knew what your veterans know?",
          "purchase orders went out on time, with no manual chasing?",
          "the quality report was ready at the end of every shift?",
        ],
      },
      {
        id: "real-estate",
        name: "Real estate & construction",
        ideas: [
          "every contractor invoice was checked against the contract automatically?",
          "buyers and tenants got an answer at any hour?",
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
          "every order went straight into the system?",
          "customs documents were checked automatically?",
          "customers knew where their shipment was without calling?",
          "a stock shortage showed up a week in advance?",
        ],
      },
      {
        id: "enterprise",
        name: "Large organizations",
        ideas: [
          "every employee got an instant answer from your procedures?",
          "IT and HR requests reached the right person directly?",
          "the management report was ready every morning?",
          "comparing quotes took minutes?",
        ],
      },
    ],
    close: "Have an idea of your own? We'd love to hear it.",
  },
  together: {
    label: "How we work",
    titleA: "We start by listening.",
    titleB: "Then we scope it together, in depth.",
    lead: "Effi doesn't replace anyone. It helps your people, and we stay with them until working with it feels natural.",
    you: "You",
    youText: "know the business",
    us: "We",
    usText: "know the technology",
    solution: "The solution",
    vennAlt: "Two circles move together and overlap: you know the business, we know the technology, and the overlap is the solution",
    steps: [
      { when: "01 · Weeks 1–4", title: "Joint scoping", text: "We sit with management and with teams on the ground, and define together what to build." },
      { when: "02 · Weeks 4–10", title: "Build", text: "A working version every two weeks, on your systems." },
      { when: "03 · Throughout", title: "Lead", text: "We lead the rollout until it becomes routine." },
    ],
    principles: [
      { title: "Fast", text: "A working pilot in 6–10 weeks." },
      { title: "Available", text: "Direct line to the people building it." },
      { title: "Professional", text: "Precise work, at core-system standard." },
      { title: "Accountable", text: "We lead until you see results." },
    ],
  },
  contact: {
    peek: "Effi can't wait to meet you.",
    meta: "30-minute call · free · leave with a first direction",
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
    questions: [
      "Hi, I'm Effi. Let's start with a quick intro: what's your name?",
      "Nice to meet you, {name}. Which company are you with?",
      "What's the best number to reach you on?",
      "Last one: your email, so we can send a summary after the call.",
    ],
    online: "online",
    send: "Send",
    done: "Thanks, {name}. Got everything. Someone from the team will be in touch soon to set up the call.",
  },
  footer: { tagline: "AI adoption for organizations", privacy: "Privacy policy" },
};
