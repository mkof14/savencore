#!/usr/bin/env node
/**
 * Translate flagship+legal EN keys and materialize locale modules + tmp/translations JSON.
 * Uses @vitalets/google-translate-api with glossary + cache (D-0161).
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

function postProcess(text) {
  let out = text;
  for (const [re, rep] of GLOSSARY) out = out.replace(re, rep);
  return out;
}

function parseModule(name) {
  const file = path.join(modDir, name);
  if (!fs.existsSync(file)) return {};
  const text = fs.readFileSync(file, "utf8");
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function isCorrupted(value) {
  if (!value || value.includes("MYMEMORY")) return true;
  const markers = [
    "Seront publiés",
    "Las áreas",
    "herramientas",
    "Uso aceptable",
    "lorsque se",
    "Diseñado pour",
    "personneen",
    "Interaktion mit",
    "autonomen Maschinen",
    "できますusar",
    "しないes ",
    "Las preferencias",
    "El apoyo",
  ];
  return markers.some((m) => value.includes(m));
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

async function translateKey(text, locale) {
  const cacheKey = `${locale}::${text}`;
  if (cache[cacheKey]) return cache[cacheKey];
  const to =
    locale === "zh-cn" ? "zh-CN" : locale === "he" ? "iw" : locale;
  const { text: translated } = await gTranslate(text, { from: "en", to });
  const result = postProcess(translated);
  cache[cacheKey] = result;
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
  return result;
}

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const esFl = { ...parseModule("es-flagship.mjs"), ...parseModule("es-legal.mjs") };
const deFl = { ...parseModule("de-flagship.mjs"), ...parseModule("de-legal.mjs") };
const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];

const locales = ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];
const delay = Number(process.env.TRANSLATE_DELAY_MS || 350);

for (const locale of locales) {
  const existingMod = {
    ...parseModule(`${locale}-flagship.mjs`),
    ...parseModule(`${locale}-legal.mjs`),
  };
  const out = {};
  let translated = 0;
  for (const key of flKeys) {
    let value;
    if (locale === "es") value = esFl[key];
    else if (locale === "de") value = deFl[key];
    else {
      const hand = existingMod[key];
      if (hand && hand !== key && !isCorrupted(hand)) value = hand;
      else if (cache[`${locale}::${key}`]) value = cache[`${locale}::${key}`];
      else {
        value = await translateKey(key, locale);
        translated++;
        if (translated % 25 === 0) console.log(`${locale}: translated ${translated}...`);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
    out[key] = value;
  }
  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, out[k]])));
  const id = flKeys.filter((k) => out[k] === k).length;
  console.log(`${locale}: modules written, identity=${id}, newly translated=${translated}`);
}

console.log("Done materializing FL modules.");
