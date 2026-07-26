#!/usr/bin/env node
/**
 * Build fixups from leak lists + write final dictionaries (D-0161).
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

const KEEP = [
  "SAVEN Core", "SAVEN Robotics Lab", "SAVEN Robotics Interface", "Internal Future Lab",
  "Intelligence for the Physical World", "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA", "WCAG 2.2 Level AA", "Layer-2", "HMI", "IRR", "ROI", "TBD", "security@",
  "Future Lab", "Robotics Interface", "Robotics Lab", "Robotics Layer",
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
  slots.forEach((k, i) => { out = out.split(`\x00${i}\x00`).join(k); });
  return out;
}
function applyRules(text, rules) {
  const { out, slots } = shield(text);
  let result = out;
  for (const [from, to] of rules) result = result.split(from).join(to);
  return unshield(result, slots);
}
function applyMulti(text, rules, passes = 3) {
  let r = text;
  for (let i = 0; i < passes; i++) r = applyRules(r, rules);
  return r;
}

function hasDeLeak(v) {
  return /[äöüßÄÖÜ]| und | oder |Der |Die |Das |werden |wird | ist |Keine |Kein |nicht /.test(v);
}
function hasEsLeak(v) {
  return /[áéíóúñ¿¡]/.test(v);
}

// Load optional fixups JSON (de value → target value)
function loadFixups(name) {
  const p = path.join(offlineDir, name);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : {};
}

const FIXUPS = {
  fr: loadFixups("fixups-de-fr.json"),
  ru: loadFixups("fixups-de-ru.json"),
  uk: loadFixups("fixups-de-uk.json"),
  ja: loadFixups("fixups-es-ja.json"),
  "zh-cn": loadFixups("fixups-es-zh-cn.json"),
  ar: loadFixups("fixups-es-ar.json"),
  he: loadFixups("fixups-es-he.json"),
};

// FR_RU / FR_UK from build-offline-locales
const offlineBuilder = fs.readFileSync(path.join(modDir, "build-offline-locales.mjs"), "utf8");
const frRuMatch = offlineBuilder.match(/const FR_RU = \[([\s\S]*?)\n\];/);
const FR_RU = frRuMatch ? eval(`[${frRuMatch[1]}]`) : [];
const FR_UK = FR_RU.map(([a, b]) => {
  const uk = b
    .replace(/В разработке/g, "У розробці")
    .replace(/Политика конфиденциальности/g, "Політика конфіденційності")
    .replace(/ и /g, " та ")
    .replace(/ или /g, " або ");
  return [a, uk];
});

const EN_OVERRIDES = {
  fr: { "In Development": "En développement", "Privacy Policy": "Politique de confidentialité", "Home": "Accueil", "Sign In/Up": "Se connecter / S'inscrire", "Contact": "Contact", "Status": "Statut", "Posture": "Posture", "SAVEN Core": "SAVEN Core" },
  ja: { "In Development": "開発中", "Privacy Policy": "プライバシーポリシー", "Home": "ホーム", "Sign In/Up": "サインイン / 登録" },
  "zh-cn": { "In Development": "开发中", "Privacy Policy": "隐私政策", "Home": "首页", "Sign In/Up": "登录 / 注册" },
  ar: { "In Development": "قيد التطوير", "Privacy Policy": "سياسة الخصوصية", "Home": "الرئيسية", "Sign In/Up": "تسجيل الدخول / الاشتراك" },
  he: { "In Development": "בפיתוח", "Privacy Policy": "מדיניות פרטיות", "Home": "דף הבית", "Sign In/Up": "התחברות / הרשמה" },
  ru: { "In Development": "В разработке", "Privacy Policy": "Политика конфиденциальности", "Home": "Главная", "Sign In/Up": "Вход / Регистрация", "Contact": "Контакты", "Status": "Статус" },
  uk: { "In Development": "У розробці", "Privacy Policy": "Політика конфіденційності", "Home": "Головна", "Sign In/Up": "Увійти / Зареєструватися", "Contact": "Контакт", "Status": "Статус" },
};

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

function fromDe(key, locale) {
  const src = de[key];
  if (FIXUPS[locale][src]) return FIXUPS[locale][src];
  if (FR_EN_MAP[key]) return FR_EN_MAP[key];
  let v = applyMulti(src, DE_FR, 3);
  if (locale === "ru") v = applyMulti(v, FR_RU, 2);
  if (locale === "uk") v = applyMulti(v, FR_UK, 2);
  return v;
}

function fromEs(key, locale) {
  const src = es[key];
  if (FIXUPS[locale][src]) return FIXUPS[locale][src];
  const rules = { fr: ES_FR, ja: ES_JA, "zh-cn": ES_ZH, ar: ES_AR, he: ES_HE }[locale];
  return applyMulti(src, rules, 3);
}

function translate(key, locale) {
  if (EN_OVERRIDES[locale]?.[key]) return EN_OVERRIDES[locale][key];
  if (KEEP.includes(key)) return key;
  if (["fr", "ru", "uk"].includes(locale)) return fromDe(key, locale);
  return fromEs(key, locale);
}

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
  const out = {};
  for (const key of flKeys) out[key] = translate(key, locale);
  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, out[k]])));
  writeDictionary(flagshipOut, flagshipKeys, out, locale);
  writeDictionary(legalOut, legalKeys, out, locale);
  const id = flKeys.filter((k) => out[k] === k && !KEEP.includes(k)).length;
  const esLk = Object.values(out).filter(hasEsLeak).length;
  const deLk = Object.values(out).filter(hasDeLeak).length;
  console.log(`${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length} identity=${id} es=${esLk} de=${deLk}`);
  console.log(`  In Development: ${out["In Development"]}`);
  console.log(`  Privacy Policy: ${out["Privacy Policy"]}`);
}
console.log("Done.");
