#!/usr/bin/env node
/**
 * Complete flagship + legal translations EN → target locales (D-0161).
 * Writes locale modules and dictionary TS files under src/content.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translate as gTranslate } from "@vitalets/google-translate-api";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const modDir = path.join(root, "scripts/fl-translations");
const cachePath = path.join(root, "tmp/translate-cache-fl.json");
const cache = fs.existsSync(cachePath)
  ? JSON.parse(fs.readFileSync(cachePath, "utf8"))
  : {};

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

const STATUS_OVERRIDES = {
  fr: { "In Development": "En développement", "Privacy Policy": "Politique de confidentialité" },
  ja: { "In Development": "開発中", "Privacy Policy": "プライバシーポリシー" },
  "zh-cn": { "In Development": "开发中", "Privacy Policy": "隐私政策" },
  ar: { "In Development": "قيد التطوير", "Privacy Policy": "سياسة الخصوصية" },
  he: { "In Development": "בפיתוח", "Privacy Policy": "מדיניות פרטיות" },
  ru: { "In Development": "В разработке", "Privacy Policy": "Политика конфиденциальности" },
  uk: { "In Development": "У розробці", "Privacy Policy": "Політика конфіденційності" },
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

async function translateKey(text, locale, attempt = 0) {
  const cacheKey = `${locale}::${text}`;
  if (cache[cacheKey]) return cache[cacheKey];
  const to = locale === "zh-cn" ? "zh-CN" : locale === "he" ? "iw" : locale;
  try {
    const { text: translated } = await gTranslate(text, { from: "en", to });
    const result = postProcess(translated);
    cache[cacheKey] = result;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
    return result;
  } catch (err) {
    if (attempt < 6) {
      const wait = 3000 * (attempt + 1);
      console.warn(`${locale} retry ${attempt + 1} in ${wait}ms...`);
      await new Promise((r) => setTimeout(r, wait));
      return translateKey(text, locale, attempt + 1);
    }
    throw err;
  }
}

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];
const locales = (process.argv[2] || "fr,ja,zh-cn,ar,he,ru,uk").split(",");
const delay = Number(process.env.TRANSLATE_DELAY_MS || 2500);
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

for (const locale of locales) {
  const out = {};
  let n = 0;
  for (const key of flKeys) {
    if (STATUS_OVERRIDES[locale]?.[key]) {
      out[key] = STATUS_OVERRIDES[locale][key];
      continue;
    }
    const cacheKey = `${locale}::${key}`;
    if (cache[cacheKey]) {
      out[key] = cache[cacheKey];
      continue;
    }
    out[key] = await translateKey(key, locale);
    n++;
    if (n % 20 === 0) console.log(`${locale}: ${n}/${flKeys.length}...`);
    await new Promise((r) => setTimeout(r, delay));
  }

  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, out[k]])));
  writeDictionary(flagshipOut, flagshipKeys, out, locale);
  writeDictionary(legalOut, legalKeys, out, locale);

  const id = flKeys.filter((k) => out[k] === k).length;
  console.log(
    `${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length} identity=${id} new=${n}`,
  );
  console.log(`  In Development: ${out["In Development"]}`);
  console.log(`  Privacy Policy: ${out["Privacy Policy"]}`);
}

console.log("Done.");
