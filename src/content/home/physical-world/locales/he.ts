import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** Hebrew Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeHe: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "אינטליגנציה לעולם הפיזי.",
  oneBreath:
    "אנחנו משתמשים ומשפרים בינה מלאכותית עם רובוטיקה לעולם האמיתי — כדי שמכונות יוכלו לחוש, לנוע ולסייע תחת פיקוח אנושי.",
  builds: ["בינה מלאכותית", "רובוטיקה", "מערכות אוטונומיות"],
  buildsLabel: "מה אנחנו בונים",
  tagline: "להפוך אינטליגנציה לטיפול אנושי",
  cue: "מעבדות, ממשק, טכנולוגיה ועוד — בתחתית האתר.",
  living: {
    headline: "טיפול במקום שבו החיים קורים.",
    support:
      "חזון של מערכות חכמות המסייעות לאנשים — בבתי חולים, בבית ובכל מקום שבו נדרש טיפול — תחת פיקוח אנושי.",
    scenes: [
      {
        id: "hospital-care",
        label: "טיפול בבית חולים",
        line: "רופאים, מטופלים ומערכות מסייעות ברגעי טיפול.",
      },
      {
        id: "home-care",
        label: "טיפול בבית",
        line: "תמיכה יומיומית לקשישים במקום שבו החיים קורים.",
      },
      {
        id: "children-family",
        label: "ילדים ומשפחה",
        line: "עזרה עדינה תחת הטיפול של מי שאוהבים אותם.",
      },
      {
        id: "emergency",
        label: "חירום",
        line: "חזון של תמיכה מהירה וברורה יותר כשכל דקה חשובה.",
      },
      {
        id: "surgical",
        label: "תמיכה כירורגית",
        line: "סיוע בחדר הניתוח — כלים לצד ידיים אנושיות מיומנות.",
      },
      {
        id: "rural-remote",
        label: "אזורים מרוחקים",
        line: "טיפול שיכול להגיע רחוק יותר מהמרפאה.",
      },
      {
        id: "mental-health",
        label: "בריאות הנפש",
        line: "תמיכה שקטה שמכבדת כבוד והכוונה אנושית.",
      },
      {
        id: "disaster-relief",
        label: "סיוע באסונות",
        line: "מערכות שיכולות לעזור לאנשים לתאם כשהקרקע זזה.",
      },
    ],
    railLabel: "סצנות טיפול",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
  },
  flagships: {
    columns: {
      workstream: "זרם עבודה",
      status: "סטטוס",
      note: "מיקוד",
    },
    headline: "לאן הכיוון פונה",
    support:
      "מבט קצר על קווי העבודה המובילים שבונים לקראת החזון הזה — כל אחד מוצג במצבו הכן והנוכחי.",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "בפיתוח",
        note: "מערכות רובוטיות מסייעות — ניידות, מניפולטורים ותפיסה.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "בפיתוח",
        note: "תקשורת ובקרה משותפות כדי שאנשים יישארו בעמדת הפיקוד.",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "מחקר",
        note: "חקירה מוקדמת של רעיונות מעבר לארכיטקטורה הנוכחית.",
      },
      {
        label: "משקיעים",
        href: "/investors/",
        status: "ארכיטקטורה",
        note: "עמדה מבנית עבור הון ארוך טווח המותאם לשליחות.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "לוגו SAVEN והעמודים: Support, Action, Verification, Environment ו-Network. סלוגן: One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "חקור את SAVEN",
    exploreHint:
      "רחפו או התמקדו בעמוד כדי לראות את המשמעות — ואז העמיקו באתר.",
    goDeeper: "העמיקו",
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "טיפול אנושי קודם — המטרה לעזור לאנשים במקום שבו החיים מתרחשים.",
        href: "/purpose/",
        cta: "מטרה",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "פיקוד ובקרה כדי שמכונות יפעלו בעולם הפיזי תחת אנשים.",
        href: "/systems/saven-robotics-interface/",
        cta: "ממשק רובוטיקה",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "בטיחות, אמון ופיקוח אנושי לפני כל טענת אוטונומיה.",
        href: "/trust/human-oversight/",
        cta: "פיקוח אנושי",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "הקשרי יישום בעולם הפיזי — בתי חולים, בית ומעבר.",
        href: "/applications/",
        cta: "יישומים",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "ארכיטקטורת מערכות מחוברות שמקשרת מודיעין לגופים רבים.",
        href: "/systems/",
        cta: "מערכות",
      },
    ],
  },
};
