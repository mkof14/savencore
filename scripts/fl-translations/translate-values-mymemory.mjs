#!/usr/bin/env node
/**
 * Translate flagship+legal via unique de/es reference values → target (D-0161).
 * de → ru, uk | es → fr, ja, zh-cn, ar, he
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as deF } from "./de-flagship.mjs";
import { translations as deL } from "./de-legal.mjs";
import { translations as esF } from "./es-flagship.mjs";
import { translations as esL } from "./es-legal.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const modDir = path.dirname(fileURLToPath(import.meta.url));
const cachePath = path.join(root, "tmp/mymemory-value-cache.json");
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};

const GLOSSARY = [
  [/SAVEN Robotics Interface/g, "SAVEN Robotics Interface"],
  [/SAVEN Robotics Lab/g, "SAVEN Robotics Lab"],
  [/Internal Future Lab/g, "Internal Future Lab"],
  [/SAVEN Core/g, "SAVEN Core"],
  [/BioMath Life/g, "BioMath Life"],
  [/BioMath Core/g, "BioMath Core"],
  [/Intelligence for the Physical World/g, "Intelligence for the Physical World"],
  [/Turning Intelligence Into Human Care/g, "Turning Intelligence Into Human Care"],
  [/WCAG 2\.2 Level AA/g, "WCAG 2.2 Level AA"],
  [/WCAG 2\.2 AA/g, "WCAG 2.2 AA"],
  [/Layer-2/g, "Layer-2"],
  [/HMI/g, "HMI"],
  [/IRR/g, "IRR"],
  [/ROI/g, "ROI"],
  [/TBD/g, "TBD"],
  [/security@/g, "security@"],
  [/Future Lab/g, "Future Lab"],
  [/Robotics Interface/g, "Robotics Interface"],
  [/Robotics Lab/g, "Robotics Lab"],
  [/Robotics Layer/g, "Robotics Layer"],
];

const STATUS_BY_KEY = {
  fr: { "In Development": "En développement", "Privacy Policy": "Politique de confidentialité" },
  ja: { "In Development": "開発中", "Privacy Policy": "プライバシーポリシー" },
  "zh-cn": { "In Development": "开发中", "Privacy Policy": "隐私政策" },
  ar: { "In Development": "قيد التطوير", "Privacy Policy": "سياسة الخصوصية" },
  he: { "In Development": "בפיתוח", "Privacy Policy": "מדיניות פרטיות" },
  ru: { "In Development": "В разработке", "Privacy Policy": "Политика конфиденциальности" },
  uk: { "In Development": "У розробці", "Privacy Policy": "Політика конфіденційності" },
};

const LOCALE_LANG = {
  fr: { from: "es", lang: "fr" },
  ja: { from: "es", lang: "ja" },
  "zh-cn": { from: "es", lang: "zh-CN" },
  ar: { from: "es", lang: "ar" },
  he: { from: "es", lang: "he" },
  ru: { from: "de", lang: "ru" },
  uk: { from: "de", lang: "uk" },
};

function postProcess(text) {
  let out = text;
  for (const [re, rep] of GLOSSARY) out = out.replace(re, rep);
  return out;
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeDictionary(outDir, keys, map, locale) {
  fs.mkdirSync(outDir, { recursive: true });
  const lines = keys.map((k) => {
    const v = map[k];
    if (!v || v === k) throw new Error(`${locale} untranslated: ${k.slice(0, 72)}`);
    return `  "${escapeTs(k)}": "${escapeTs(v)}",`;
  });
  fs.writeFileSync(
    path.join(outDir, `${locale}.ts`),
    `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`,
  );
}

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(modDir, name),
    `/** Legal/flagship translations (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

async function translateValue(text, fromLang, toLang, attempt = 0) {
  const cacheKey = `${fromLang}|${toLang}::${text}`;
  if (cache[cacheKey]) return cache[cacheKey];
  const langpair = `${fromLang}|${toLang}`;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.responseStatus === 429 && attempt < 8) {
    const wait = 2000 * (attempt + 1);
    console.warn(`429 — waiting ${wait}ms...`);
    await new Promise((r) => setTimeout(r, wait));
    return translateValue(text, fromLang, toLang, attempt + 1);
  }
  if (data.responseStatus !== 200) {
    throw new Error(`MyMemory ${data.responseStatus} for ${text.slice(0, 60)}`);
  }
  const result = postProcess(data.responseData.translatedText);
  cache[cacheKey] = result;
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
  return result;
}

const de = { ...deF, ...deL };
const es = { ...esF, ...esL };
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];
const locales = (process.argv[2] || "fr,ja,zh-cn,ar,he,ru,uk").split(",");
const delay = Number(process.env.TRANSLATE_DELAY_MS || 1500);
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

for (const locale of locales) {
  const { from, lang } = LOCALE_LANG[locale];
  const source = from === "de" ? de : es;
  const fromLang = from === "de" ? "de" : "es";

  const uniqueValues = [...new Set(flKeys.map((k) => source[k]))];
  const valueMap = {};
  let n = 0;
  for (const val of uniqueValues) {
    const cacheKey = `${fromLang}|${lang}::${val}`;
    if (cache[cacheKey]) {
      valueMap[val] = cache[cacheKey];
      continue;
    }
    valueMap[val] = await translateValue(val, fromLang, lang);
    n++;
    if (n % 15 === 0) console.log(`${locale}: ${n}/${uniqueValues.length} values...`);
    await new Promise((r) => setTimeout(r, delay));
  }

  const out = {};
  for (const key of flKeys) {
    if (STATUS_BY_KEY[locale]?.[key]) out[key] = STATUS_BY_KEY[locale][key];
    else out[key] = valueMap[source[key]] ?? source[key];
  }

  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, out[k]])));
  writeDictionary(flagshipOut, flagshipKeys, out, locale);
  writeDictionary(legalOut, legalKeys, out, locale);

  const id = flKeys.filter((k) => out[k] === k).length;
  const esLeak =
    locale !== "es" ? Object.values(out).filter((v) => /[áéíóúñ¿¡]/.test(v)).length : 0;
  const deLeak =
    !["de", "es"].includes(locale)
      ? Object.values(out).filter((v) => /[äöüßÄÖÜ]/.test(v)).length
      : 0;
  console.log(
    `${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length} identity=${id} newValues=${n} esLeak=${esLeak} deLeak=${deLeak}`,
  );
  console.log(`  In Development: ${out["In Development"]}`);
  console.log(`  Privacy Policy: ${out["Privacy Policy"]}`);
}

console.log("Done.");
