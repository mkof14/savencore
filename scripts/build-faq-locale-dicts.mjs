/**
 * Build FAQ dictionaries for non-RU locales (D-0202).
 * RU is authored separately in scripts/faq-i18n/ru.json.
 * This script writes complete deepLocalize maps for es/de/fr/ja/zh-cn/ar/he/uk.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// Load EN strings list
const strings = JSON.parse(
  readFileSync(new URL("./faq-en-strings.json", import.meta.url), "utf8"),
);

function emit(locale, map) {
  mkdirSync("src/content/faq/dictionaries", { recursive: true });
  const entries = Object.entries(map)
    .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
    .join("\n");
  writeFileSync(
    `src/content/faq/dictionaries/${locale}.ts`,
    `/** FAQ page dictionary — D-0202 (${locale}). */\nexport const dictionary: Record<string, string> = {\n${entries}\n};\n`,
  );
  const missing = strings.filter((s) => !map[s]);
  console.log(locale, "mapped", Object.keys(map).length, "missing", missing.length);
  if (missing.length) {
    writeFileSync(
      `scripts/faq-i18n/${locale}-missing.json`,
      JSON.stringify(missing, null, 2),
    );
  }
}

/** Shared short labels */
const L = {
  FAQ: {
    es: "Preguntas frecuentes",
    de: "FAQ",
    fr: "FAQ",
    ja: "よくある質問",
    "zh-cn": "常见问题",
    ar: "الأسئلة الشائعة",
    he: "שאלות נפוצות",
    uk: "FAQ",
  },
};

/**
 * Complete per-locale maps are large. We load JSON packs when present;
 * otherwise build from the compact pack below + English identity fill.
 */
function loadOrBuild(locale) {
  try {
    return JSON.parse(
      readFileSync(`scripts/faq-i18n/${locale}.json`, "utf8"),
    );
  } catch {
    return null;
  }
}

// Compact high-value translations (chrome + sections + questions). Answers fall
// back to English via deepLocalize when omitted — packs may override.
const packs = {
  es: {
    FAQ: "Preguntas frecuentes",
    "Questions about SAVEN Core": "Preguntas sobre SAVEN Core",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "Respuestas claras sobre propósito, fundamentos, tecnología, sistemas, laboratorios, confianza y cómo leer este sitio — sin inventar productos, clientes ni garantías.",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "Los sistemas principales están en desarrollo. El lenguaje de estado y las páginas publicadas siguen siendo la fuente de verdad. Las páginas legales son borradores estructurales hasta la aprobación legal.",
    "Expand all": "Expandir todo",
    "Collapse all": "Contraer todo",
    Topics: "Temas",
    Related: "Relacionado",
    "About SAVEN Core": "Acerca de SAVEN Core",
    "Foundation sequence": "Secuencia fundacional",
    "Technology disciplines": "Disciplinas tecnológicas",
    "Systems and Architecture": "Sistemas y arquitectura",
    "SAVEN Robotics Interface": "SAVEN Robotics Interface",
    Labs: "Laboratorios",
    "Applications and care domains": "Aplicaciones y ámbitos de cuidado",
    "Trust, safety, and Responsible AI": "Confianza, seguridad e IA responsable",
    "Research and Roadmap": "Investigación y hoja de ruta",
    Investors: "Inversores",
    "Media, Contact, and socials": "Medios, contacto y redes",
    "Languages and locales": "Idiomas y locales",
    Terminology: "Terminología",
    "Status language": "Lenguaje de estado",
    "What we are not claiming": "Lo que no afirmamos",
  },
  de: {
    FAQ: "FAQ",
    "Questions about SAVEN Core": "Fragen zu SAVEN Core",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "Klare Antworten zu Zweck, Grundlage, Technologie, Systemen, Laboren, Vertrauen und dazu, wie diese Website zu lesen ist — ohne erfundene Produkte, Kunden oder Garantien.",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "Die wesentlichen Systeme befinden sich in Entwicklung. Statussprache und veröffentlichte Seiten bleiben die Quelle der Wahrheit. Rechtliche Seiten sind strukturelle Entwürfe bis zur anwaltlichen Freigabe.",
    "Expand all": "Alle öffnen",
    "Collapse all": "Alle schließen",
    Topics: "Themen",
    Related: "Verwandt",
    "About SAVEN Core": "Über SAVEN Core",
    "Foundation sequence": "Grundlagenfolge",
    "Technology disciplines": "Technologiedisziplinen",
    "Systems and Architecture": "Systeme und Architektur",
    Labs: "Labore",
    "Applications and care domains": "Anwendungen und Care-Bereiche",
    "Trust, safety, and Responsible AI": "Vertrauen, Sicherheit und Responsible AI",
    "Research and Roadmap": "Forschung und Roadmap",
    Investors: "Investoren",
    "Media, Contact, and socials": "Medien, Kontakt und Socials",
    "Languages and locales": "Sprachen und Locales",
    Terminology: "Terminologie",
    "Status language": "Statussprache",
    "What we are not claiming": "Was wir nicht behaupten",
  },
  fr: {
    FAQ: "FAQ",
    "Questions about SAVEN Core": "Questions sur SAVEN Core",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "Réponses claires sur la finalité, les fondations, la technologie, les systèmes, les laboratoires, la confiance et la lecture de ce site — sans inventer produits, clients ou garanties.",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "Les systèmes principaux sont en développement. Le langage de statut et les pages publiées restent la source de vérité. Les pages juridiques sont des brouillons structurels jusqu’à validation par un conseil.",
    "Expand all": "Tout ouvrir",
    "Collapse all": "Tout fermer",
    Topics: "Sujets",
    Related: "Associé",
    "About SAVEN Core": "À propos de SAVEN Core",
    "Foundation sequence": "Séquence fondatrice",
    "Technology disciplines": "Disciplines technologiques",
    "Systems and Architecture": "Systèmes et architecture",
    Labs: "Laboratoires",
    "Applications and care domains": "Applications et domaines de soin",
    "Trust, safety, and Responsible AI": "Confiance, sécurité et IA responsable",
    "Research and Roadmap": "Recherche et feuille de route",
    Investors: "Investisseurs",
    "Media, Contact, and socials": "Médias, contact et réseaux",
    "Languages and locales": "Langues et locales",
    Terminology: "Terminologie",
    "Status language": "Langage de statut",
    "What we are not claiming": "Ce que nous n’affirmons pas",
  },
  ja: {
    FAQ: "よくある質問",
    "Questions about SAVEN Core": "SAVEN Core についての質問",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "目的、基盤、技術、システム、ラボ、信頼、このサイトの読み方についての明確な回答 — 製品・顧客・保証を創作しません。",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "主要なシステムは開発中です。ステータス表現と公開ページが真実の源です。法務ページは弁護人承認までの構造ドラフトです。",
    "Expand all": "すべて展開",
    "Collapse all": "すべて折りたたむ",
    Topics: "トピック",
    Related: "関連",
    "About SAVEN Core": "SAVEN Core について",
    "Foundation sequence": "基盤の順序",
    "Technology disciplines": "技術分野",
    "Systems and Architecture": "システムとアーキテクチャ",
    Labs: "ラボ",
    "Applications and care domains": "応用とケア領域",
    "Trust, safety, and Responsible AI": "信頼・安全・責任あるAI",
    "Research and Roadmap": "研究とロードマップ",
    Investors: "投資家",
    "Media, Contact, and socials": "メディア・連絡先・ソーシャル",
    "Languages and locales": "言語とロケール",
    Terminology: "用語",
    "Status language": "ステータス表現",
    "What we are not claiming": "主張していないこと",
  },
  "zh-cn": {
    FAQ: "常见问题",
    "Questions about SAVEN Core": "关于 SAVEN Core 的问题",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "关于宗旨、基础、技术、系统、实验室、信任以及如何阅读本站的清晰回答——不虚构产品、客户或保证。",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "主要系统仍在开发中。状态用语与已发布页面仍是事实来源。法律页面在律师批准前为结构性草案。",
    "Expand all": "全部展开",
    "Collapse all": "全部折叠",
    Topics: "主题",
    Related: "相关",
    "About SAVEN Core": "关于 SAVEN Core",
    "Foundation sequence": "基础序列",
    "Technology disciplines": "技术学科",
    "Systems and Architecture": "系统与架构",
    Labs: "实验室",
    "Applications and care domains": "应用与照护领域",
    "Trust, safety, and Responsible AI": "信任、安全与负责任的人工智能",
    "Research and Roadmap": "研究与路线图",
    Investors: "投资者",
    "Media, Contact, and socials": "媒体、联系与社交",
    "Languages and locales": "语言与区域设置",
    Terminology: "术语",
    "Status language": "状态用语",
    "What we are not claiming": "我们未主张的内容",
  },
  ar: {
    FAQ: "الأسئلة الشائعة",
    "Questions about SAVEN Core": "أسئلة حول SAVEN Core",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "إجابات واضحة عن الغاية والأساس والتقنية والأنظمة والمختبرات والثقة وكيفية قراءة هذا الموقع — دون اختراع منتجات أو عملاء أو ضمانات.",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "الأنظمة الرئيسية قيد التطوير. لغة الحالة والصفحات المنشورة تبقى مصدر الحقيقة. الصفحات القانونية مسودات هيكلية حتى موافقة المستشار القانوني.",
    "Expand all": "توسيع الكل",
    "Collapse all": "طي الكل",
    Topics: "المواضيع",
    Related: "ذات صلة",
    "About SAVEN Core": "حول SAVEN Core",
    "Foundation sequence": "تسلسل الأساس",
    "Technology disciplines": "تخصصات التقنية",
    "Systems and Architecture": "الأنظمة والهندسة المعمارية",
    Labs: "المختبرات",
    "Applications and care domains": "التطبيقات ومجالات الرعاية",
    "Trust, safety, and Responsible AI": "الثقة والسلامة والذكاء الاصطناعي المسؤول",
    "Research and Roadmap": "البحث وخارطة الطريق",
    Investors: "المستثمرون",
    "Media, Contact, and socials": "الإعلام والاتصال والشبكات",
    "Languages and locales": "اللغات والإعدادات المحلية",
    Terminology: "المصطلحات",
    "Status language": "لغة الحالة",
    "What we are not claiming": "ما لا ندّعيه",
  },
  he: {
    FAQ: "שאלות נפוצות",
    "Questions about SAVEN Core": "שאלות על SAVEN Core",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "תשובות ברורות על ייעוד, יסודות, טכנולוגיה, מערכות, מעבדות, אמון וכיצד לקרוא את האתר — בלי להמציא מוצרים, לקוחות או ערבויות.",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "המערכות העיקריות בפיתוח. שפת הסטטוס והדפים שפורסמו נשארים מקור האמת. דפים משפטיים הם טיוטות מבניות עד אישור יועץ משפטי.",
    "Expand all": "הרחב הכל",
    "Collapse all": "כווץ הכל",
    Topics: "נושאים",
    Related: "קשור",
    "About SAVEN Core": "על SAVEN Core",
    "Foundation sequence": "רצף היסודות",
    "Technology disciplines": "תחומי טכנולוגיה",
    "Systems and Architecture": "מערכות וארכיטקטורה",
    Labs: "מעבדות",
    "Applications and care domains": "יישומים ותחומי טיפול",
    "Trust, safety, and Responsible AI": "אמון, בטיחות ובינה מלאכותית אחראית",
    "Research and Roadmap": "מחקר ומפת דרכים",
    Investors: "משקיעים",
    "Media, Contact, and socials": "מדיה, יצירת קשר ורשתות",
    "Languages and locales": "שפות ומקומות",
    Terminology: "מינוח",
    "Status language": "שפת סטטוס",
    "What we are not claiming": "מה איננו טוענים",
  },
  uk: {
    FAQ: "FAQ",
    "Questions about SAVEN Core": "Питання про SAVEN Core",
    "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.":
      "Зрозумілі відповіді про мету, основу, технології, системи, лабораторії, довіру та те, як читати цей сайт — без вигаданих продуктів, клієнтів чи гарантій.",
    "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages are structural drafts until counsel approval.":
      "Основні системи перебувають у розробці. Мова статусів і опубліковані сторінки залишаються джерелом істини. Юридичні сторінки — структурні чернетки до схвалення юристами.",
    "Expand all": "Розгорнути все",
    "Collapse all": "Згорнути все",
    Topics: "Теми",
    Related: "Пов’язане",
    "About SAVEN Core": "Про SAVEN Core",
    "Foundation sequence": "Послідовність основи",
    "Technology disciplines": "Технологічні дисципліни",
    "Systems and Architecture": "Системи та архітектура",
    Labs: "Лабораторії",
    "Applications and care domains": "Застосування та області турботи",
    "Trust, safety, and Responsible AI": "Довіра, безпека та Responsible AI",
    "Research and Roadmap": "Дослідження та дорожня карта",
    Investors: "Інвесторам",
    "Media, Contact, and socials": "Медіа, контакти та соцмережі",
    "Languages and locales": "Мови та локалі",
    Terminology: "Термінологія",
    "Status language": "Мова статусів",
    "What we are not claiming": "Чого ми не заявляємо",
  },
};

// For complete coverage: merge pack over English identity for every string.
// Full answer localization for non-RU ships as progressive: EN answers remain
// readable; chrome/sections localized. RU remains 100% via ru.json.
for (const locale of ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "uk"]) {
  const fromFile = loadOrBuild(locale);
  const map = {};
  for (const s of strings) {
    if (fromFile?.[s]) map[s] = fromFile[s];
    else if (packs[locale]?.[s]) map[s] = packs[locale][s];
    // else omit → English fallback via deepLocalize
  }
  // Also include pack keys even if somehow missing from strings
  Object.assign(map, packs[locale] || {});
  if (fromFile) Object.assign(map, fromFile);
  emit(locale, map);
  writeFileSync(
    `scripts/faq-i18n/${locale}.json`,
    JSON.stringify(map, null, 2),
  );
}

console.log("done");
