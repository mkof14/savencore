#!/usr/bin/env node
/**
 * Generate EN-key fixups and write dictionary TS files (D-0161).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as deF } from "../de-flagship.mjs";
import { translations as deL } from "../de-legal.mjs";
import { translations as esF } from "../es-flagship.mjs";
import { translations as esL } from "../es-legal.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const modDir = path.join(root, "scripts/fl-translations");
const offlineDir = path.dirname(fileURLToPath(import.meta.url));
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];
const de = { ...deF, ...deL };
const es = { ...esF, ...esL };

const refBuilder = fs.readFileSync(path.join(modDir, "build-reference-maps-from-de-es.mjs"), "utf8");
const DE_FR = eval(`[${refBuilder.match(/const DE_FR = \[([\s\S]*?)\n\];/)[1]}]`);
const composeSrc = fs.readFileSync(path.join(modDir, "compose-locales.mjs"), "utf8");
function extractRules(name) {
  return eval(`[${composeSrc.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\n\\];`))[1]}]`);
}
const ES_FR = extractRules("ES_FR");
const ES_JA = extractRules("ES_JA");
const ES_ZH = extractRules("ES_ZH");
const ES_AR = extractRules("ES_AR");
const ES_HE = extractRules("ES_HE");
const ES_RU = extractRules("ES_RU");
const ES_UK = extractRules("ES_UK");

const offlineBuilder = fs.readFileSync(path.join(modDir, "build-offline-locales.mjs"), "utf8");
const FR_RU = eval(`[${offlineBuilder.match(/const FR_RU = \[([\s\S]*?)\n\];/)[1]}]`);
const FR_UK = FR_RU.map(([a, b]) => [
  a,
  b
    .replace(/В разработке/g, "У розробці")
    .replace(/Политика конфиденциальности/g, "Політика конфіденційності")
    .replace(/ и /g, " та ")
    .replace(/ или /g, " або "),
]);

const finalizeSrc = fs.readFileSync(path.join(modDir, "finalize-locales.mjs"), "utf8");
const FR_EN_MAP = {};
const frEnMatch = finalizeSrc.match(/const FR_EN = \{([\s\S]*?)\n\};/);
if (frEnMatch) {
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*\n?\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(frEnMatch[0]))) {
    FR_EN_MAP[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
}

const KEEP = new Set([
  "SAVEN Core", "SAVEN Robotics Lab", "SAVEN Robotics Interface", "Internal Future Lab",
  "Intelligence for the Physical World", "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA", "Layer-2", "HMI", "IRR", "ROI", "TBD", "security@", "Future Lab",
  "Robotics Interface", "Robotics Lab", "Robotics Layer", "Contact", "Status", "Posture",
]);

function applyMulti(text, rules, n = 4) {
  let r = text;
  for (let i = 0; i < n; i++) {
    for (const [a, b] of rules) r = r.split(a).join(b);
  }
  return r;
}

function hasDeLeak(v) {
  return /[äöüßÄÖÜ]| und | oder |Der |Die |Das |werden |wird /.test(v);
}
function hasEsLeak(v) {
  return /[áéíóúñ¿¡]/.test(v);
}

function score(v, locale) {
  let s = 0;
  if (hasDeLeak(v)) s += locale === "fr" || locale === "ru" || locale === "uk" ? 10 : 2;
  if (hasEsLeak(v)) s += ["ja", "zh-cn", "ar", "he", "ru", "uk", "fr"].includes(locale) ? 10 : 2;
  if (/Seront publiés una|direcciones de co|Contactkanal|Endgültige Conditions/.test(v)) s += 5;
  return s;
}

function pickBest(candidates, locale) {
  return candidates.sort((a, b) => score(a, locale) - score(b, locale))[0];
}

function buildKeyMap(locale) {
  const map = {};
  for (const key of flKeys) {
    if (KEEP.has(key)) {
      map[key] = key;
      continue;
    }
    const candidates = [];
    if (FR_EN_MAP[key]) candidates.push(FR_EN_MAP[key]);

    if (["fr", "ru", "uk"].includes(locale)) {
      let v = applyMulti(de[key], DE_FR, 5);
      if (locale === "ru") v = applyMulti(v, FR_RU, 3);
      if (locale === "uk") v = applyMulti(v, FR_UK, 3);
      candidates.push(v);
    }

    const esRules = { fr: ES_FR, ja: ES_JA, "zh-cn": ES_ZH, ar: ES_AR, he: ES_HE, ru: ES_RU, uk: ES_UK }[locale];
    if (esRules) {
      let v = applyMulti(es[key], esRules, 5);
      if (locale === "ru") v = applyMulti(v, FR_RU, 2);
      if (locale === "uk") v = applyMulti(v, FR_UK, 2);
      candidates.push(v);
    }

    map[key] = pickBest(candidates.filter(Boolean), locale) ?? key;
  }
  return map;
}

const STATUS = {
  fr: { "In Development": "En développement", "Privacy Policy": "Politique de confidentialité" },
  ja: { "In Development": "開発中", "Privacy Policy": "プライバシーポリシー" },
  "zh-cn": { "In Development": "开发中", "Privacy Policy": "隐私政策" },
  ar: { "In Development": "قيد التطوير", "Privacy Policy": "سياسة الخصوصية" },
  he: { "In Development": "בפיתוח", "Privacy Policy": "מדיניות פרטיות" },
  ru: { "In Development": "В разработке", "Privacy Policy": "Политика конфиденциальности" },
  uk: { "In Development": "У розробці", "Privacy Policy": "Політика конфіденційності" },
};

const EN_HEADER = {
  fr: {
    "Home": "Accueil",
    "Sign In/Up": "Se connecter / S'inscrire",
    "Status": "Statut",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique.",
    "Date pending legal review": "Date en attente de revue juridique",
  },
  ja: {
    "Home": "ホーム",
    "Sign In/Up": "サインイン / 登録",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "構成目的の草案 — 最終的な法的文書ではありません。法的レビュー待ちです。",
    "Date pending legal review": "日付は法的レビュー待ち",
  },
  "zh-cn": {
    "Home": "首页",
    "Sign In/Up": "登录 / 注册",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "结构性草案 — 非最终法律文本。待法律审核。",
    "Date pending legal review": "日期待法律审核",
  },
  ar: {
    "Home": "الرئيسية",
    "Sign In/Up": "تسجيل الدخول / الاشتراك",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "مسودة لأغراض هيكلية — ليست نصًا قانونيًا نهائيًا. بانتظار المراجعة القانونية.",
    "Date pending legal review": "التاريخ بانتظار المراجعة القانونية",
  },
  he: {
    "Home": "דף הבית",
    "Sign In/Up": "התחברות / הרשמה",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "טיוטה למטרות מבניות — אינה טקסט משפטי סופי. ממתינה לסקירה משפטית.",
    "Date pending legal review": "התאריך ממתין לסקירה משפטית",
  },
  ru: {
    "Home": "Главная",
    "Sign In/Up": "Вход / Регистрация",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ — Не окончательный юридический текст. Ожидает юридической проверки.",
    "Date pending legal review": "Дата ожидает юридической проверки",
  },
  uk: {
    "Home": "Головна",
    "Sign In/Up": "Увійти / Зареєструватися",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНЕТКА ДЛЯ СТРУКТУРНИХ ЦІЛЕЙ — Не остаточний юридичний текст. Очікує юридичного перегляду.",
    "Date pending legal review": "Дата очікує юридичного перегляду",
  },
};

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function writeDictionary(outDir, keys, map, locale) {
  fs.mkdirSync(outDir, { recursive: true });
  const lines = keys.map((k) => `  "${escapeTs(k)}": "${escapeTs(map[k] ?? k)}",`);
  fs.writeFileSync(
    path.join(outDir, `${locale}.ts`),
    `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`,
  );
}
function writeModule(name, obj) {
  const lines = Object.entries(obj).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`);
  fs.writeFileSync(
    path.join(modDir, name),
    `/** Legal/flagship translations (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const out = buildKeyMap(locale);
  Object.assign(out, EN_HEADER[locale], STATUS[locale]);

  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, out[k]])));
  writeDictionary(flagshipOut, flagshipKeys, out, locale);
  writeDictionary(legalOut, legalKeys, out, locale);

  const id = flKeys.filter((k) => out[k] === k && !KEEP.has(k)).length;
  const esLk = Object.values(out).filter(hasEsLeak).length;
  const deLk = Object.values(out).filter(hasDeLeak).length;
  console.log(`${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length} identity=${id} es=${esLk} de=${deLk}`);
  console.log(`  In Development: ${out["In Development"]}`);
  console.log(`  Privacy Policy: ${out["Privacy Policy"]}`);
}
console.log("Done.");
