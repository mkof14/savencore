#!/usr/bin/env node
/**
 * Build proper locale JSON from de.json (quality reference) with per-locale DE→locale rules.
 * D-0161 — fr, ja, zh-cn, ar, he, ru, uk
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
const modDir = path.join(root, "scripts/fl-translations");
const { translations: deF } = await import(path.join(modDir, "de-flagship.mjs"));
const { translations: deL } = await import(path.join(modDir, "de-legal.mjs"));
const { translations: esF } = await import(path.join(modDir, "es-flagship.mjs"));
const { translations: esL } = await import(path.join(modDir, "es-legal.mjs"));
const de = { ...deF, ...deL };
const es = { ...esF, ...esL };
const enKeys = Object.keys(de);

const KEEP = [
  "SAVEN Core",
  "SAVEN Robotics Lab",
  "SAVEN Robotics Interface",
  "Internal Future Lab",
  "Intelligence for the Physical World",
  "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA",
  "WCAG 2.2 Level AA",
  "Layer-2",
  "Layer 2",
  "HMI",
  "IRR",
  "ROI",
  "TBD",
  "security@",
  "Robotics Lab",
  "Robotics Interface",
  "Future Lab",
  "Future Lab",
];

function keepBrands(text) {
  let out = text;
  for (const b of KEEP) out = out.split(b).join(`\0${b}\0`);
  return out;
}
function restoreBrands(text) {
  return text.replace(/\0/g, "");
}
function applyRules(text, rules) {
  let out = keepBrands(text);
  for (const [from, to] of rules) out = out.split(from).join(to);
  return restoreBrands(out);
}

/** Full EN→locale for short labels + status terms */
const EN = {
  fr: {
    Research: "Recherche",
    Architecture: "Architecture",
    "In Development": "En développement",
    Prototype: "Prototype",
    Validation: "Validation",
    Pilot: "Pilote",
    Operational: "Opérationnel",
    Contact: "Contact",
    Perspectives: "Perspectives",
    Posture: "Posture",
  },
  ja: {
    Research: "研究",
    Architecture: "アーキテクチャ",
    "In Development": "開発中",
    Prototype: "プロトタイプ",
    Validation: "検証",
    Pilot: "パイロット",
    Operational: "運用",
  },
  "zh-cn": {
    Research: "研究",
    Architecture: "架构",
    "In Development": "开发中",
    Prototype: "原型",
    Validation: "验证",
    Pilot: "试点",
    Operational: "运营",
  },
  ar: {
    Research: "بحث",
    Architecture: "هندسة",
    "In Development": "قيد التطوير",
    Prototype: "نموذج أولي",
    Validation: "تحقق",
    Pilot: "تجريبي",
    Operational: "تشغيلي",
  },
  he: {
    Research: "מחקר",
    Architecture: "ארכיטקטורה",
    "In Development": "בפיתוח",
    Prototype: "אב טיפוס",
    Validation: "אימות",
    Pilot: "פיילוט",
    Operational: "תפעולי",
  },
  ru: {
    Research: "Исследование",
    Architecture: "Архитектура",
    "In Development": "В разработке",
    Prototype: "Прототип",
    Validation: "Валидация",
    Pilot: "Пилот",
    Operational: "Эксплуатация",
  },
  uk: {
    Research: "Дослідження",
    Architecture: "Архітектура",
    "In Development": "У розробці",
    Prototype: "Прототип",
    Validation: "Валідація",
    Pilot: "Пілот",
    Operational: "Експлуатація",
  },
};

function localizeStatuses(text, locale) {
  let out = text;
  for (const [en, loc] of Object.entries(EN[locale] || {})) {
    out = out.split(en).join(loc);
  }
  return out;
}

// Import full manual overrides per locale (EN key → translation)
const { MANUAL_ALL } = await import("./manual-all.mjs");

const DE_FR = [
  ["Ein System", "Un système"],
  [" zur ", " pour "],
  [" zum ", " pour "],
  [" zu ", " pour "],
  [" und ", " et "],
  [" oder ", " ou "],
  [" nicht ", " ne pas "],
  ["Keine ", "Aucune "],
  ["Kein ", "Aucun "],
  ["Keiner ", "Aucun "],
  ["Entwicklung", "développement"],
  ["Entwicklungs", "développement "],
  ["Forschung", "recherche"],
  ["Forschungs", "recherche "],
  ["Technologie", "technologie"],
  ["Systeme", "systèmes"],
  ["System", "système"],
  ["Labore", "laboratoires"],
  ["Lab ", "Lab "],
  ["Vertrauen", "confiance"],
  ["Ingenieur", "ingénierie"],
  ["Ingenieurarbeit", "ingénierie"],
  ["Mensch", "personne"],
  ["Menschen", "personnes"],
  ["Menschliche ", "Humaine "],
  ["menschliche ", "humaine "],
  ["menschlichen ", "humaines "],
  ["menschlicher ", "humaine "],
  ["Krankenhäuser", "hôpitaux"],
  ["Zuhause", "domicile"],
  ["Website", "site web"],
  ["Webseite", "site web"],
  ["Öffentliche ", "Publique "],
  ["öffentliche ", "publique "],
  ["öffentlichen ", "publiques "],
  ["Investoren", "investisseurs"],
  ["Investition", "investissement"],
  ["Roboter", "robots"],
  ["Robotik", "robotique"],
  ["Robotic", "robotique"],
  ["Steuerung", "contrôle"],
  ["Wahrnehmung", "perception"],
  ["Mobilität", "mobilität"],
  ["Architektur", "architecture"],
  ["Datenschutz", "confidentialité"],
  ["Sicherheit", "sécurité"],
  ["Aufsicht", "supervision"],
  ["Über uns", "À propos"],
  ["Start", "Accueil"],
  ["Status", "Statut"],
  ["Schwerpunkte", "Domaines prioritaires"],
  ["Arbeitsstränge", "Filières"],
  ["Überblick", "Aperçu"],
  ["Kontakt", "Contact"],
  ["Änderungen", "Modifications"],
  ["Haftungsausschluss", "avertissement"],
  ["Nutzungsbedingungen", "Conditions d'utilisation"],
  ["Cookie-Richtlinie", "Politique relative aux cookies"],
  ["Cookie-Einstellungen", "Préférences en matière de cookies"],
  ["Barrierefreiheitserklärung", "Déclaration d'accessibilité"],
  ["Verantwortungsvolle KI", "IA responsable"],
  ["Geistiges Eigentum", "Propriété intellectuelle"],
  ["Datenrechte", "Droits relatifs aux données"],
  ["Rechtliche Hinweise", "Mentions légales"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "BROUILLON À DES FINS STRUCTURELLES"],
  ["Kein endgültiger Rechtstext", "Texte juridique non définitif"],
  ["Ausstehende Rechtsprüfung", "En attente de revue juridique"],
  ["Anmelden / Registrieren", "Se connecter / S'inscrire"],
  [" — ", " — "],
  [": ", " : "],
];

const DE_RU = [
  ["Ein System", "Система"],
  [" zur ", " для "],
  [" zum ", " для "],
  [" zu ", " для "],
  [" und ", " и "],
  [" oder ", " или "],
  [" nicht ", " не "],
  ["Keine ", "Никаких "],
  ["Kein ", "Никакого "],
  ["Entwicklung", "разработка"],
  ["Entwicklungs", "разработки "],
  ["Forschung", "исследование"],
  ["Forschungs", "исследовательск"],
  ["Technologie", "технологии"],
  ["Systeme", "системы"],
  ["System", "система"],
  ["Labore", "лаборатории"],
  ["Vertrauen", "доверие"],
  ["Ingenieur", "инженер"],
  ["Menschen", "людей"],
  ["Menschliche ", "Человеческая "],
  ["menschliche ", "человеческая "],
  ["Krankenhäuser", "больницы"],
  ["Zuhause", "дом"],
  ["Website", "веб-сайт"],
  ["Investoren", "инвесторы"],
  ["Roboter", "роботы"],
  ["Robotik", "робототехника"],
  ["Architektur", "архитектура"],
  ["Datenschutz", "конфиденциальность"],
  ["Sicherheit", "безопасность"],
  ["Aufsicht", "надзор"],
  ["Über uns", "О разделе"],
  ["Start", "Главная"],
  ["Status", "Статус"],
  ["Schwerpunkte", "Приоритетные области"],
  ["Arbeitsstränge", "Рабочие направления"],
  ["Überblick", "Обзор"],
  ["Kontakt", "Контакты"],
  ["Änderungen", "Изменения"],
  ["Nutzungsbedingungen", "Условия использования"],
  ["Cookie-Richtlinie", "Политика cookie"],
  ["Barrierefreiheitserklärung", "Заявление о доступности"],
  ["Verantwortungsvolle KI", "Ответственный ИИ"],
  ["Geistiges Eigentum", "Интеллектуальная собственность"],
  ["Datenrechte", "Права на данные"],
  ["Rechtliche Hinweise", "Юридические уведомления"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ"],
  ["Kein endgültiger Rechtstext", "Не окончательный юридический текст"],
  ["Ausstehende Rechtsprüfung", "Ожидает юридической проверки"],
  ["Anmelden / Registrieren", "Вход / Регистрация"],
  ["Datenschutzerklärung", "Политика конфиденциальности"],
];

const DE_UK = DE_RU.map(([a, b]) => {
  const uk = b
    .replace(/ы/g, "и")
    .replace(/и/g, "і")
    .replace(/е/g, "е")
    .replace(/ю/g, "ю")
    .replace(/я/g, "я")
    .replace(/Контакты/g, "Контакт")
    .replace(/Главная/g, "Головна")
    .replace(/О разделе/g, "Про розділ")
    .replace(/разработка/g, "розробка")
    .replace(/разработки/g, "розробки")
    .replace(/исследование/g, "дослідження")
    .replace(/технологии/g, "технології")
    .replace(/системы/g, "системи")
    .replace(/система/g, "система")
    .replace(/лаборатории/g, "лабораторії")
    .replace(/доверие/g, "довіра")
    .replace(/инвесторы/g, "інвестори")
    .replace(/роботы/g, "роботи")
    .replace(/робототехника/g, "робототехніка")
    .replace(/архитектура/g, "архітектура")
    .replace(/конфиденциальность/g, "конфіденційність")
    .replace(/безопасность/g, "безпека")
    .replace(/надзор/g, "нагляд")
    .replace(/Изменения/g, "Зміни")
    .replace(/Условия использования/g, "Умови використання")
    .replace(/Политика cookie/g, "Політика файлів cookie")
    .replace(/Заявление о доступности/g, "Заява про доступність")
    .replace(/Ответственный ИИ/g, "Відповідальний ШІ")
    .replace(/Интеллектуальная собственность/g, "Інтелектуальна власність")
    .replace(/Права на данные/g, "Права на дані")
    .replace(/Юридические уведомления/g, "Юридичні повідомлення")
    .replace(/ЧЕРНОВИК/g, "ЧЕРНЕТКА")
    .replace(/юридической проверки/g, "юридичного перегляду")
    .replace(/Вход \/ Регистрация/g, "Увійти / Зареєструватися")
    .replace(/Политика конфиденциальности/g, "Політика конфіденційності")
    .replace(/В разработке/g, "У розробці")
    .replace(/Исследование/g, "Дослідження")
    .replace(/Архитектура/g, "Архітектура");
  return [a, uk];
});

const ES_JA = [
  ["Un sistema", "システム"],
  ["Apoyo a la decisión", "意思決定支援"],
  ["Acerca de", "概要"],
  ["Inicio", "ホーム"],
  ["Inversores", "投資家"],
  ["Laboratorios", "ラボ"],
  ["Sistemas", "システム"],
  ["Tecnología", "テクノロジー"],
  ["Investigación", "研究"],
  ["En desarrollo", "開発中"],
  ["Confianza", "信頼"],
  ["Política de privacidad", "プライバシーポリシー"],
  ["Términos de uso", "利用規約"],
  ["Política de cookies", "Cookieポリシー"],
  ["Preferencias de cookies", "Cookie設定"],
  ["Declaración de accesibilidad", "アクセシビリティ声明"],
  ["Seguridad", "セキュリティ"],
  ["IA responsable", "責任あるAI"],
  ["Propiedad intelectual", "知的財産"],
  ["Avisos legales", "法的通知"],
  ["Contacto", "お問い合わせ"],
  ["Cambios", "変更"],
  ["Compromiso", "コミットメント"],
  ["Resumen", "概要"],
  [" y ", " および "],
  [" o ", " または "],
  [" no ", " ない "],
  ["No ", "非"],
  [" para ", " のために "],
  [" con ", " と "],
  [" sin ", " なしで "],
  [" es ", " は "],
  [" son ", " は "],
  [" está ", " は "],
  [" están ", " は "],
  [" puede ", " できる "],
  [" pueden ", " できる "],
  [" será ", " となる "],
  [" serán ", " となる "],
  [" del ", " の "],
  [" de la ", " の "],
  [" de los ", " の "],
  [" de las ", " の "],
  [" este ", " この "],
  [" esta ", " この "],
  ["Este ", "この"],
  ["Esta ", "この"],
  [" sitio ", " サイト "],
  ["Sitio ", "サイト"],
  [" página ", " ページ "],
  ["Página ", "ページ"],
  [" borrador", " 草案"],
  ["Borrador", "草案"],
  [" revisión legal", " 法的レビュー"],
  ["Iniciar sesión / Registrarse", "サインイン / 登録"],
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "構成目的の草案 — 最終的な法的文書ではありません。法的レビュー待ちです。"],
];

const ES_ZH = [
  ["Un sistema", "系统"],
  ["Apoyo a la decisión", "决策支持"],
  ["Acerca de", "关于"],
  ["Inicio", "首页"],
  ["Inversores", "投资者"],
  ["Laboratorios", "实验室"],
  ["Sistemas", "系统"],
  ["Tecnología", "技术"],
  ["Investigación", "研究"],
  ["En desarrollo", "开发中"],
  ["Confianza", "信任"],
  ["Política de privacidad", "隐私政策"],
  ["Términos de uso", "使用条款"],
  ["Política de cookies", "Cookie 政策"],
  ["Preferencias de cookies", "Cookie 偏好设置"],
  ["Declaración de accesibilidad", "无障碍声明"],
  ["Seguridad", "安全"],
  ["IA responsable", "负责任的 AI"],
  ["Propiedad intelectual", "知识产权"],
  ["Avisos legales", "法律通知"],
  ["Contacto", "联系"],
  [" y ", " 和 "],
  [" o ", " 或 "],
  [" no ", " 不 "],
  ["No ", "不"],
  [" para ", " 用于 "],
  [" con ", " 与 "],
  [" sin ", " 无 "],
  [" es ", " 是 "],
  [" son ", " 是 "],
  [" está ", " 处于 "],
  [" están ", " 处于 "],
  [" puede ", " 可以 "],
  [" pueden ", " 可以 "],
  [" será ", " 将 "],
  [" serán ", " 将 "],
  [" del ", " 的 "],
  [" de la ", " 的 "],
  [" de los ", " 的 "],
  [" de las ", " 的 "],
  [" este ", " 本 "],
  [" esta ", " 本 "],
  ["Este ", "本"],
  ["Esta ", "本"],
  [" sitio ", " 网站 "],
  [" página ", " 页面 "],
  [" borrador", " 草案"],
  [" revisión legal", " 法律审核"],
  ["Iniciar sesión / Registrarse", "登录 / 注册"],
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "结构性草案 — 非最终法律文本。待法律审核。"],
];

const LOCALE_CONFIG = {
  fr: { source: "de", rules: DE_FR },
  ru: { source: "de", rules: DE_RU },
  uk: { source: "de", rules: DE_UK },
  ja: { source: "es", rules: ES_JA },
  "zh-cn": { source: "es", rules: ES_ZH },
  ar: { source: "es", rules: ES_JA },
  he: { source: "es", rules: ES_JA },
};

function translateKey(enKey, locale) {
  if (MANUAL_ALL[locale]?.[enKey]) return MANUAL_ALL[locale][enKey];
  const cfg = LOCALE_CONFIG[locale];
  const src = cfg.source === "de" ? de[enKey] : es[enKey];
  let out = applyRules(src || enKey, cfg.rules);
  out = localizeStatuses(out, locale);
  return out;
}

const outDir = path.join(dir, "locales");
const dataDir = path.join(dir, "data");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const out = {};
  for (const key of enKeys) {
    out[key] = translateKey(key, locale);
  }
  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  fs.writeFileSync(
    path.join(dataDir, `${locale}.mjs`),
    `/** Generated locale data (D-0161). */\nexport const translations = ${JSON.stringify(out, null, 2)};\n`,
  );
  const identity = enKeys.filter((k) => out[k] === k).length;
  const latin = Object.values(out).filter((v) => /[áéíóúñ¿¡]/.test(v)).length;
  const cyrillic = locale === "ru" || locale === "uk" ? 0 : Object.values(out).filter((v) => /[а-яА-Я]/.test(v)).length;
  console.log(`${locale}: identity=${identity} spanish=${latin} cyrillic_leak=${cyrillic}`);
}
