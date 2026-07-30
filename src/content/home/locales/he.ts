import type { HomeContent } from "@/content/home/types";
import {
  applicationsNavChildren,
  systemsNavChildren,
  technologyNavChildren,
  trustNavChildren,
} from "@/navigation/site-navigation";

export const homeContentHe: HomeContent = {
  hero: {
    brand: "SAVEN Core",
    sentence: "מערכות חכמות שנבנו כדי לתמוך בחיי אדם.",
    explanation:
      "אנחנו מעצבים מערכות שעוזרות לאנשים בבתי חולים, בבית ובחיי היומיום — בזהירות ועם גבולות ברורים.",
    status:
      "ארכיטקטורה, מערכות ועקרונות ממוקדי אדם לסיוע אחראי.",
  },
  architectureChain: [
    { id: "human", label: "אנשים" },
    { id: "human-data", label: "נתוני אדם", href: "/technology/human-data/" },
    {
      id: "human-data-model",
      label: "מודל נתוני אדם",
      href: "/technology/human-data-model/",
    },
    { id: "technology", label: "טכנולוגיה", href: "/technology/" },
    { id: "systems", label: "מערכות", href: "/systems/" },
    { id: "applications", label: "יישומים", href: "/applications/" },
    { id: "trust", label: "אמון", href: "/trust/" },
  ],
  explorerDomains: [
    {
      id: "technology",
      title: "טכנולוגיה",
      purpose: "אבני הבניין המשמשות ליצירת מערכות SAVEN Core.",
      href: "/technology/",
      pageIds: technologyNavChildren.map((item) => item.id),
      relationships: "תומכת במערכות באמצעות נתיבי נתונים ושיטות טכניות.",
    },
    {
      id: "systems",
      title: "מערכות",
      purpose: "רכיבים שפועלים יחד תחת תפקידים וגבולות ברורים.",
      href: "/systems/",
      pageIds: systemsNavChildren.map((item) => item.id),
      relationships: "משתמשות בטכנולוגיה ותומכות ביישומים בתוך גבולות האמון.",
    },
    {
      id: "applications",
      title: "יישומים",
      purpose: "המקומות שבהם SAVEN Core נועד לסייע לאנשים ולסביבות.",
      href: "/applications/",
      pageIds: applicationsNavChildren.map((item) => item.id),
      relationships: "תלויים במערכות ונשארים בתוך גבולות האמון.",
    },
    {
      id: "trust",
      title: "אמון",
      purpose: "מחויבויות, פיקוח, אחריותיות וגבולות.",
      href: "/trust/",
      pageIds: trustNavChildren.map((item) => item.id),
      relationships: "מציב גבולות לטכנולוגיה, למערכות וליישומים.",
    },
  ],
  domainMapSteps: [
    { id: "technology", label: "טכנולוגיה", href: "/technology/", dependency: "בונה" },
    { id: "systems", label: "מערכות", href: "/systems/", dependency: "מתאמות" },
    { id: "applications", label: "יישומים", href: "/applications/", dependency: "משרתים" },
    { id: "trust", label: "אמון", href: "/trust/", dependency: "מגביל" },
  ],
  platformStatus: [
    { id: "technology", label: "טכנולוגיה", stateKey: "complete", complete: true },
    { id: "systems", label: "מערכות", stateKey: "complete", complete: true },
    { id: "applications", label: "יישומים", stateKey: "complete", complete: true },
    { id: "trust", label: "אמון", stateKey: "complete", complete: true },
  ],
  featuredConcepts: [
    {
      id: "human-data",
      knowledgeId: "human-data",
      title: "נתוני אדם",
      role: "קליטת אותות",
      href: "/technology/human-data/",
      note: "מידע על אדם ממקורות שונים.",
    },
    {
      id: "knowledge-engine",
      knowledgeId: "knowledge-engine",
      title: "מנוע הידע (Knowledge Engine)",
      role: "שכבת הקשר",
      href: "/systems/knowledge-engine/",
      note: "מארגן ידע. אינו מקבל החלטות.",
    },
    {
      id: "ai-decision-support",
      knowledgeId: "ai-decision-support",
      title: "תמיכה בהחלטות באמצעות בינה מלאכותית",
      role: "תמיכה בבחינה",
      href: "/systems/ai-decision-support/",
      note: "תומכת באנשים. אינה מחליפה אותם.",
    },
    {
      id: "safety-layer",
      knowledgeId: "safety-layer",
      title: "שכבת בטיחות",
      role: "נתיב בקרה",
      href: "/systems/safety-layer/",
      note: "בדיקות, מגבלות, הסלמה ופיקוח.",
    },
    {
      id: "human-oversight",
      knowledgeId: "human-oversight",
      title: "פיקוח אנושי",
      role: "גבול סמכות",
      href: "/trust/human-oversight/",
      note: "בני אדם נשארים בעלי ההחלטה.",
    },
  ],
  continueExploring: [
    { id: "technology", title: "גלו את הטכנולוגיה", detail: "יסודות ונושאים טכניים", href: "/technology/" },
    { id: "systems", title: "גלו את המערכות", detail: "איך הרכיבים פועלים יחד", href: "/systems/" },
    { id: "applications", title: "גלו את היישומים", detail: "מקומות והקשרי שימוש", href: "/applications/" },
    { id: "trust", title: "גלו את האמון", detail: "מחויבויות, פיקוח וגבולות", href: "/trust/" },
  ],
  domainMapConstraints: [
    "אמון מציב גבולות לטכנולוגיה, למערכות וליישומים",
    "מחקר מנחה את הטכנולוגיה ואת המערכות",
    "יישומים באים לאחר תיאום המערכות",
  ],
};
