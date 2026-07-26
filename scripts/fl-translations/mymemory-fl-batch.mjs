#!/usr/bin/env node
/**
 * Batch-translate FL keys via MyMemory API (fallback when Google is rate-limited).
 * Writes reference-maps/{locale}.json and materializes locale modules.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as esF } from "./es-flagship.mjs";
import { translations as esL } from "./es-legal.mjs";
import { translations as deF } from "./de-flagship.mjs";
import { translations as deL } from "./de-legal.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, "../..");
const cachePath = path.join(root, "tmp/mymemory-fl-cache.json");
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

function postProcess(text) {
  let out = text;
  for (const [re, rep] of GLOSSARY) out = out.replace(re, rep);
  return out;
}

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];
const hand = {
  es: { ...esF, ...esL },
  de: { ...deF, ...deL },
};

const LOCALE_LANG = {
  fr: "fr",
  ja: "ja",
  "zh-cn": "zh-CN",
  ar: "ar",
  he: "he",
  ru: "ru",
  uk: "uk",
};

async function translate(text, locale) {
  const cacheKey = `${locale}::${text}`;
  if (cache[cacheKey]) return cache[cacheKey];
  const langpair = `en|${LOCALE_LANG[locale]}`;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.responseStatus !== 200) {
    throw new Error(`MyMemory ${data.responseStatus}: ${text.slice(0, 50)}`);
  }
  const result = postProcess(data.responseData.translatedText);
  cache[cacheKey] = result;
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
  return result;
}

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(dir, name),
    `/** Legal/flagship translations (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

const locales = (process.argv[2] || "fr,ja,zh-cn,ar,he,ru,uk").split(",");

for (const locale of locales) {
  const out = {};
  let n = 0;
  for (const key of flKeys) {
    if (locale === "es") out[key] = hand.es[key];
    else if (locale === "de") out[key] = hand.de[key];
    else if (cache[`${locale}::${key}`]) out[key] = cache[`${locale}::${key}`];
    else {
      out[key] = await translate(key, locale);
      n++;
      if (n % 10 === 0) console.log(`${locale}: ${n} translated...`);
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  const mapDir = path.join(dir, "reference-maps");
  fs.mkdirSync(mapDir, { recursive: true });
  fs.writeFileSync(path.join(mapDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, out[k]])));
  const id = flKeys.filter((k) => out[k] === k).length;
  console.log(`${locale}: done identity=${id} new=${n}`);
}
