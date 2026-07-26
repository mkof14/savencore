#!/usr/bin/env node
/**
 * Build proper locale modules from de.json using locale-specific de→target phrase rules (D-0161).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
const de = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/translations/de.json"), "utf8"),
);
const enKeys = Object.keys(de);
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

const KEEP = [
  "SAVEN Core",
  "SAVEN Robotics Lab",
  "SAVEN Robotics Interface",
  "Internal Future Lab",
  "Intelligence for the Physical World",
  "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA",
  "Layer-2",
  "HMI",
  "IRR",
  "ROI",
  "Inc.",
  "security@",
  "TBD",
  "Future Lab",
  "Robotics Interface",
  "Robotics Lab",
  "Robotics Layer",
];

function shield(text) {
  let out = text;
  const slots = [];
  for (const k of KEEP) {
    if (out.includes(k)) {
      const id = `\x00${slots.length}\x00`;
      slots.push(k);
      out = out.split(k).join(id);
    }
  }
  return { out, slots };
}

function unshield(text, slots) {
  let out = text;
  slots.forEach((k, i) => {
    out = out.split(`\x00${i}\x00`).join(k);
  });
  return out;
}

function applyRules(text, rules) {
  const { out, slots } = shield(text);
  let result = out;
  for (const [from, to] of rules) {
    result = result.split(from).join(to);
  }
  return unshield(result, slots);
}

const FR = [
  ["Ein System zur Interaktion mit Robotern", "Un système pour interagir avec des robots"],
  ["damit Menschen die Kontrolle über komplexe physische Arbeit behalten", "afin que les personnes restent aux commandes d'un travail physique complexe"],
  ["KI-gestützte Entscheidungsunterstützung", "Aide à la décision par IA"],
  ["Über uns", "À propos"],
  ["Fortgeschrittene Formen der Robotik", "Formes avancées de robotique"],
  ["Autonome Entscheidungsfindung", "Prise de décision autonome"],
  ["Autonome Mobilität", "Mobilité autonome"],
  ["Bewegung durch gemeinsam genutzte menschliche Räume mit sichtbar gemachten Grenzen", "déplacement dans des espaces humains partagés avec des limites visibles"],
  ["Entwickelt, um menschliche Fürsorge", "Conçu pour soutenir les soins humains"],
  ["in Krankenhäusern, zu Hause und überall dort", "à l'hôpital, à domicile et partout"],
  ["ohne operative Einsätze zu behaupten", "sans prétendre à un déploiement opérationnel"],
  ["Ingenieur- und Forschungslabore", "Laboratoires d'ingénierie et de recherche"],
  ["In Entwicklung", "En développement"],
  ["Investoren", "Investisseurs"],
  ["Labore", "Laboratoires"],
  ["Systeme", "Systèmes"],
  ["Technologie", "Technologie"],
  ["Forschung", "Recherche"],
  ["Start", "Accueil"],
  ["Vertrauen", "Confiance"],
  ["Anmelden / Registrieren", "Se connecter / S'inscrire"],
  ["Wohin als Nächstes", "Où aller ensuite"],
  ["Warum es wichtig ist", "Pourquoi c'est important"],
  ["Was das ist", "De quoi il s'agit"],
  ["Was wir bauen", "Ce que nous construisons"],
  ["Arbeitsstränge", "Filières de travail"],
  ["Schwerpunkte", "Domaines prioritaires"],
  ["Status", "Statut"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "BROUILLON À DES FINS STRUCTURELLES"],
  ["Kein endgültiger Rechtstext", "Texte juridique non définitif"],
  ["Ausstehende Rechtsprüfung", "En attente de revue juridique"],
  ["Datum ausstehend — Rechtsprüfung", "Date en attente de revue juridique"],
  ["Datenschutz", "Confidentialité"],
  ["Nutzungsbedingungen", "Conditions d'utilisation"],
  ["Cookie-Richtlinie", "Politique relative aux cookies"],
  ["Cookie-Einstellungen", "Préférences en matière de cookies"],
  ["Barrierefreiheitserklärung", "Déclaration d'accessibilité"],
  ["Sicherheit", "Sécurité"],
  ["wird veröffentlicht, wenn", "sera publié lorsque"],
  ["werden veröffentlicht, wenn", "seront publiés lorsque"],
  ["In diesem Entwurf werden keine", "Aucune adresse n'est inventée dans ce brouillon"],
  ["Erfinden Sie in diesem Entwurf keine", "N'inventez pas d'adresses"],
  ["nur Platzhalter", "placeholder uniquement"],
  ["Nur Platzhalter", "Placeholder uniquement"],
  ["ausstehend — Genehmigung", "en attente d'approbation"],
  ["ausstehend — Rechtsberatung", "en attente de l'avis juridique"],
  ["Rechtsberatung", "avis juridique"],
  ["Rechtsprüfung", "revue juridique"],
  ["Entwurf", "brouillon"],
  ["Website", "site web"],
  ["Webseite", "site web"],
  ["Keine ", "Aucune "],
  ["Kein ", "Aucun "],
  ["Nicht ", "Ne pas "],
  [" und ", " et "],
  [" oder ", " ou "],
  [" für ", " pour "],
  [" mit ", " avec "],
  [" ohne ", " sans "],
  [" wenn ", " lorsque "],
  ["Wenn ", "Lorsque "],
  ["Die ", "Les "],
  ["Der ", "Le "],
  ["Das ", "Le "],
  [" den ", " le "],
  [" dem ", " le "],
  [" des ", " des "],
  [" der ", " de la "],
  ["Informationen", "informations"],
  ["Daten", "données"],
  ["Kontakt", "Contact"],
  ["Änderungen", "Modifications"],
  ["Überblick", "Aperçu"],
];

const JA = [
  ["KI-gestützte Entscheidungsunterstützung", "AI意思決定支援"],
  ["Über uns", "概要"],
  ["In Entwicklung", "開発中"],
  ["Investoren", "投資家"],
  ["Labore", "ラボ"],
  ["Systeme", "システム"],
  ["Technologie", "テクノロジー"],
  ["Forschung", "研究"],
  ["Start", "ホーム"],
  ["Vertrauen", "信頼"],
  ["Anmelden / Registrieren", "サインイン / 登録"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "構成目的の草案"],
  ["Kein endgültiger Rechtstext", "最終的な法的文書ではありません"],
  ["Ausstehende Rechtsprüfung", "法的レビュー待ち"],
  ["Datum ausstehend — Rechtsprüfung", "日付は法的レビュー待ち"],
  ["Datenschutz", "プライバシー"],
  ["Nutzungsbedingungen", "利用規約"],
  ["Cookie-Richtlinie", "Cookieポリシー"],
  ["Barrierefreiheitserklärung", "アクセシビリティ声明"],
  ["Sicherheit", "セキュリティ"],
  ["wird veröffentlicht, wenn", "承認後に公開予定"],
  ["Website", "ウェブサイト"],
  ["Entwurf", "草案"],
  ["Kontakt", "お問い合わせ"],
  ["Keine ", "いかなる"],
  [" und ", "および"],
  [" oder ", "または"],
];

const ZH_CN = [
  ["KI-gestützte Entscheidungsunterstützung", "AI 决策支持"],
  ["Über uns", "关于"],
  ["In Entwicklung", "开发中"],
  ["Investoren", "投资者"],
  ["Labore", "实验室"],
  ["Systeme", "系统"],
  ["Technologie", "技术"],
  ["Forschung", "研究"],
  ["Start", "首页"],
  ["Vertrauen", "信任"],
  ["Anmelden / Registrieren", "登录 / 注册"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "结构性草案"],
  ["Kein endgültiger Rechtstext", "非最终法律文本"],
  ["Ausstehende Rechtsprüfung", "待法律审核"],
  ["Datum ausstehend — Rechtsprüfung", "日期待法律审核"],
  ["Datenschutz", "隐私"],
  ["Nutzungsbedingungen", "使用条款"],
  ["Cookie-Richtlinie", "Cookie 政策"],
  ["Barrierefreiheitserklärung", "无障碍声明"],
  ["Sicherheit", "安全"],
  ["wird veröffentlicht, wenn", "将在批准后发布"],
  ["Website", "网站"],
  ["Entwurf", "草案"],
  ["Kontakt", "联系"],
  [" und ", "以及"],
  [" oder ", "或"],
];

const AR = [
  ["KI-gestützte Entscheidungsunterstützung", "دعم القرار بالذكاء الاصطناعي"],
  ["In Entwicklung", "قيد التطوير"],
  ["Investoren", "المستثمرون"],
  ["Labore", "المختبرات"],
  ["Systeme", "الأنظمة"],
  ["Technologie", "التكنولوجيا"],
  ["Forschung", "البحث"],
  ["Start", "الرئيسية"],
  ["Anmelden / Registrieren", "تسجيل الدخول / الاشتراك"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "مسودة لأغراض هيكلية"],
  ["Kein endgültiger Rechtstext", "ليست نصًا قانونيًا نهائيًا"],
  ["Ausstehende Rechtsprüfung", "بانتظار المراجعة القانونية"],
  ["Datum ausstehend — Rechtsprüfung", "التاريخ بانتظار المراجعة القانونية"],
  ["Datenschutz", "الخصوصية"],
  ["Nutzungsbedingungen", "شروط الاستخدام"],
  ["Cookie-Richtlinie", "سياسة ملفات تعريف الارتباط"],
  ["Barrierefreiheitserklärung", "بيان إمكانية الوصول"],
  ["Sicherheit", "الأمان"],
  ["Website", "الموقع"],
  ["Entwurf", "مسودة"],
  ["Kontakt", "اتصل"],
];

const HE = [
  ["KI-gestützte Entscheidungsunterstützung", "תמיכה בהחלטות באמצעות בינה מלאכותית"],
  ["In Entwicklung", "בפיתוח"],
  ["Investoren", "משקיעים"],
  ["Labore", "מעבדות"],
  ["Systeme", "מערכות"],
  ["Technologie", "טכנולוגיה"],
  ["Forschung", "מחקר"],
  ["Start", "דף הבית"],
  ["Anmelden / Registrieren", "התחברות / הרשמה"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "טיוטה למטרות מבניות"],
  ["Kein endgültiger Rechtstext", "אינה טקסט משפטי סופי"],
  ["Ausstehende Rechtsprüfung", "ממתינה לסקירה משפטית"],
  ["Datum ausstehend — Rechtsprüfung", "התאריך ממתין לסקירה משפטית"],
  ["Datenschutz", "פרטיות"],
  ["Nutzungsbedingungen", "תנאי שימוש"],
  ["Cookie-Richtlinie", "מדיניות עוגיות"],
  ["Barrierefreiheitserklärung", "הצהרת נגישות"],
  ["Sicherheit", "אבטחה"],
  ["Website", "אתר"],
  ["Entwurf", "טיוטה"],
  ["Kontakt", "יצירת קשר"],
];

const RU = [
  ["KI-gestützte Entscheidungsunterstützung", "Поддержка решений с ИИ"],
  ["In Entwicklung", "В разработке"],
  ["Investoren", "Инвесторы"],
  ["Labore", "Лаборатории"],
  ["Systeme", "Системы"],
  ["Technologie", "Технологии"],
  ["Forschung", "Исследования"],
  ["Start", "Главная"],
  ["Anmelden / Registrieren", "Вход / Регистрация"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ"],
  ["Kein endgültiger Rechtstext", "Не окончательный юридический текст"],
  ["Ausstehende Rechtsprüfung", "Ожидает юридической проверки"],
  ["Datum ausstehend — Rechtsprüfung", "Дата ожидает юридической проверки"],
  ["Datenschutz", "Конфиденциальность"],
  ["Nutzungsbedingungen", "Условия использования"],
  ["Cookie-Richtlinie", "Политика cookie"],
  ["Barrierefreiheitserklärung", "Заявление о доступности"],
  ["Sicherheit", "Безопасность"],
  ["Website", "сайт"],
  ["Entwurf", "черновик"],
  ["Kontakt", "Контакты"],
];

const UK = [
  ["KI-gestützte Entscheidungsunterstützung", "Підтримка рішень за допомогою ШІ"],
  ["In Entwicklung", "У розробці"],
  ["Investoren", "Інвестори"],
  ["Labore", "Лабораторії"],
  ["Systeme", "Системи"],
  ["Technologie", "Технології"],
  ["Forschung", "Дослідження"],
  ["Start", "Головна"],
  ["Anmelden / Registrieren", "Увійти / Зареєструватися"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "ЧЕРНЕТКА ДЛЯ СТРУКТУРНИХ ЦІЛЕЙ"],
  ["Kein endgültiger Rechtstext", "Не остаточний юридичний текст"],
  ["Ausstehende Rechtsprüfung", "Очікує юридичного перегляду"],
  ["Datum ausstehend — Rechtsprüfung", "Дата очікує юридичного перегляду"],
  ["Datenschutz", "Конфіденційність"],
  ["Nutzungsbedingungen", "Умови використання"],
  ["Cookie-Richtlinie", "Політика файлів cookie"],
  ["Barrierefreiheitserklärung", "Заява про доступність"],
  ["Sicherheit", "Безпека"],
  ["Website", "сайт"],
  ["Entwurf", "чернетка"],
  ["Kontakt", "Контакт"],
];

const EN_MANUAL = {
  fr: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Un système pour interagir avec des robots et des machines autonomes — afin que les personnes restent aux commandes d'un travail physique complexe.",
    "Home": "Accueil",
    "About": "À propos",
    "Investors": "Investisseurs",
    "Labs": "Laboratoires",
    "Systems": "Systèmes",
    "Technology": "Technologie",
    "Research": "Recherche",
    "In Development": "En développement",
    "Sign In/Up": "Se connecter / S'inscrire",
    "What this is": "De quoi il s'agit",
    "What we build": "Ce que nous construisons",
    "Why it matters": "Pourquoi c'est important",
    "Where to go next": "Où aller ensuite",
    "Workstreams": "Filières de travail",
    "Focus areas": "Domaines prioritaires",
    "Status": "Statut",
    "Overview": "Aperçu",
    "Contact": "Contact",
    "Privacy Policy": "Politique de confidentialité",
    "Terms of Use": "Conditions d'utilisation",
    "Cookie Policy": "Politique relative aux cookies",
    "Accessibility Statement": "Déclaration d'accessibilité",
    "Security": "Sécurité",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique.",
    "Date pending legal review": "Date en attente de revue juridique",
  },
  ja: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "ロボットや自律機械とやり取りするためのシステム — 人が複雑な物理作業の指揮を握り続けられるように。",
    "Home": "ホーム",
    "Sign In/Up": "サインイン / 登録",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "構成目的の草案 — 最終的な法的文書ではありません。法的レビュー待ちです。",
    "Date pending legal review": "日付は法的レビュー待ち",
  },
  "zh-cn": {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "用于与机器人和自主机器交互的系统 — 让人始终掌控复杂的物理工作。",
    "Home": "首页",
    "Sign In/Up": "登录 / 注册",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "结构性草案 — 非最终法律文本。待法律审核。",
    "Date pending legal review": "日期待法律审核",
  },
  ar: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "نظام للتفاعل مع الروبots والآلات المستقلة — حتى يبقى الناس في قيادة العمل الفيزيائي المعقد.",
    "Home": "الرئيسية",
    "Sign In/Up": "تسجيل الدخول / الاشتراك",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "مسودة لأغراض هيكلية — ليست نصًا قانونيًا نهائيًا. بانتظار المراجعة القانونية.",
    "Date pending legal review": "التاريخ بانتظار المراجعة القانونية",
  },
  he: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "מערכת לאינטראקציה עם רובוטים ומכונות אוטונומיות — כדי שאנשים יישארו בשליטה על עבודה פיזית מורכבת.",
    "Home": "דף הבית",
    "Sign In/Up": "התחברות / הרשמה",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "טיוטה למטרות מבניות — אינה טקסט משפטי סופי. ממתינה לסקירה משפטית.",
    "Date pending legal review": "התאריך ממתין לסקירה משפטית",
  },
  ru: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Система для взаимодействия с роботами и автономными машинами — чтобы люди сохраняли контроль над сложной физической работой.",
    "Home": "Главная",
    "Sign In/Up": "Вход / Регистрация",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ — Не окончательный юридический текст. Ожидает юридической проверки.",
    "Date pending legal review": "Дата ожидает юридической проверки",
  },
  uk: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Система для взаємодії з роботами та автономними машинами — щоб люди залишалися на команді складної фізичної роботи.",
    "Home": "Головна",
    "Sign In/Up": "Увійти / Зареєструватися",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНЕТКА ДЛЯ СТРУКТУРНИХ ЦІЛЕЙ — Не остаточний юридичний текст. Очікує юридичного перегляду.",
    "Date pending legal review": "Дата очікує юридичного перегляду",
  },
};

const LOCALE_RULES = { fr: FR, ja: JA, "zh-cn": ZH_CN, ar: AR, he: HE, ru: RU, uk: UK };

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(dir, name),
    `/** Locale module (D-0161) — derived from de reference + locale rules. */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

const outDir = path.join(root, "tmp/translations");

for (const [locale, rules] of Object.entries(LOCALE_RULES)) {
  const out = {};
  for (const key of enKeys) {
    if (EN_MANUAL[locale]?.[key]) {
      out[key] = EN_MANUAL[locale][key];
    } else {
      out[key] = applyRules(de[key], rules);
    }
  }
  fs.writeFileSync(
    path.join(outDir, `${locale}.json`),
    JSON.stringify(out, null, 2) + "\n",
  );
  writeModule(
    `${locale}-flagship.mjs`,
    Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])),
  );
  writeModule(
    `${locale}-legal.mjs`,
    Object.fromEntries(legalKeys.map((k) => [k, out[k]])),
  );
  const stillDe = enKeys.filter((k) => out[k] === de[k]).length;
  const stillEn = enKeys.filter((k) => out[k] === k).length;
  console.log(`${locale}: stillDe=${stillDe} stillEn=${stillEn}`);
}
