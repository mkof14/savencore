#!/usr/bin/env node
/**
 * Complete FR page dictionaries + flagship/legal locale JSON (D-0161).
 * Uses @vitalets/google-translate-api with glossary post-processing and cache.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translate as gTranslate } from "@vitalets/google-translate-api";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cachePath = path.join(root, "tmp/translate-cache-all.json");
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
  [/SAVEN AI/g, "SAVEN AI"],
  [/SAVEN(?!\s*Core)/g, "SAVEN"],
  [/Intelligence for the Physical World/g, "Intelligence for the Physical World"],
  [/Turning Intelligence Into Human Care/g, "Turning Intelligence Into Human Care"],
  [/WCAG 2\.2 AA/g, "WCAG 2.2 AA"],
  [/WCAG 2\.2 Level AA/g, "WCAG 2.2 Level AA"],
];

const FR_GLOSSARY = [
  ...GLOSSARY,
  [/Human Data Model/g, "Modèle de données humaines"],
  [/Human Data/g, "Données humaines"],
  [/Knowledge Engine/g, "Moteur de connaissances"],
  [/AI Decision Support/g, "Aide à la décision par IA"],
  [/Safety Layer/g, "Couche de sécurité"],
  [/Communication Layer/g, "Couche de communication"],
  [/Clinical Interfaces/g, "Interfaces cliniques"],
  [/Robotics Layer/g, "Couche robotique"],
  [/Drone Systems/g, "Systèmes de drones"],
  [/Research Applications/g, "Applications de recherche"],
  [/Ethics and Responsible Use/g, "Éthique et usage responsable"],
  [/Human Oversight/g, "Supervision humaine"],
  [/Artificial Intelligence/g, "Intelligence artificielle"],
  [/Data Infrastructure/g, "Infrastructure de données"],
  [/Executive Summary/g, "Résumé"],
  [/Reference Links/g, "Pour aller plus loin"],
  [/In Development/g, "En développement"],
  [/Architecture/g, "Architecture"],
  [/Research/g, "Recherche"],
  [/Purpose/g, "Raison d'être"],
  [/Foundation/g, "Fondations"],
  [/Technology/g, "Technologie"],
  [/Systems/g, "Systèmes"],
  [/Applications/g, "Applications"],
  [/Trust/g, "Confiance"],
  [/Privacy/g, "Confidentialité"],
  [/Security/g, "Sécurité"],
  [/Robotics/g, "Robotique"],
  [/Automation/g, "Automatisation"],
  [/Interoperability/g, "Interopérabilité"],
  [/Transparency/g, "Transparence"],
  [/Limitations/g, "Limites"],
  [/Healthcare/g, "Santé"],
  [/Hospitals/g, "Hôpitaux"],
  [/Emergency/g, "Urgences"],
  [/Industrial/g, "Industriel"],
  [/Government/g, "Secteur public"],
  [/Agriculture/g, "Agriculture"],
  [/Home/g, "Domicile"],
];

function postProcess(text, locale) {
  let out = text;
  const glossary = locale === "fr" ? FR_GLOSSARY : GLOSSARY;
  for (const [re, rep] of glossary) out = out.replace(re, rep);
  return out;
}

function parseDictDir(locale) {
  const dir = path.join(root, "src/content/pages/dictionaries", locale);
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
    let m;
    while ((m = re.exec(text))) {
      const k = JSON.parse(`"${m[1]}"`);
      const v = JSON.parse(`"${m[2]}"`);
      map[k] = v;
    }
  }
  return map;
}

async function translateKey(text, locale) {
  const cacheKey = `${locale}::${text}`;
  if (cache[cacheKey]) return cache[cacheKey];
  const { text: translated } = await gTranslate(text, { from: "en", to: locale === "zh-cn" ? "zh-CN" : locale });
  const result = postProcess(translated, locale);
  cache[cacheKey] = result;
  return result;
}

async function ensureTranslations(pairs, locale) {
  let done = 0;
  for (const [key, existing] of pairs) {
    if (existing && existing !== key && !existing.includes("MYMEMORY")) continue;
    const cacheKey = `${locale}::${key}`;
    if (cache[cacheKey]) continue;
    try {
      await translateKey(key, locale);
      done++;
      if (done % 20 === 0) {
        fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
        console.log(`  ${locale}: translated ${done} new keys...`);
      }
      await new Promise((r) => setTimeout(r, 400));
    } catch (err) {
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
      throw new Error(`Failed ${locale} key: ${key.slice(0, 60)} — ${err.message}`);
    }
  }
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
}

async function loadFrBase() {
  const s1 = (await import("./fr-translations/supplement1.mjs")).supplement1;
  const s2 = (await import("./fr-translations/supplement2.mjs")).supplement2;
  const c1 = (await import("./fr-translations/chunk1.mjs")).chunk1;
  const frPages = parseDictDir("fr");
  const base = {};
  for (const [k, v] of Object.entries({ ...c1, ...s1, ...s2, ...frPages })) {
    if (v && v !== k && !v.includes("MYMEMORY")) base[k] = v;
  }
  return base;
}

function loadModuleTranslations(name) {
  const file = path.join(root, "scripts/fl-translations", name);
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

function loadEsFl() {
  return {
    ...loadModuleTranslations("es-flagship.mjs"),
    ...loadModuleTranslations("es-legal.mjs"),
  };
}

function loadDeFl() {
  return {
    ...loadModuleTranslations("de-flagship.mjs"),
    ...loadModuleTranslations("de-legal.mjs"),
  };
}

async function main() {
  const allPageKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/all-unique-keys.json"), "utf8"));
  const frBase = await loadFrBase();
  const frPairs = allPageKeys.map((k) => [k, frBase[k]]);
  const frMissing = frPairs.filter(([k, v]) => !v || v === k || v.includes("MYMEMORY")).length;
  console.log(`FR pages: ${frMissing} keys to translate`);
  await ensureTranslations(frPairs, "fr");

  const frOut = {};
  for (const k of allPageKeys) {
    const hand = frBase[k];
    frOut[k] =
      hand && hand !== k && !hand.includes("MYMEMORY") ? hand : cache[`fr::${k}`] ?? k;
  }
  const frId = allPageKeys.filter((k) => frOut[k] === k).length;
  console.log(`FR pages output identity: ${frId}`);
  if (frId) process.exit(1);
  fs.writeFileSync(path.join(root, "tmp/fr-translations.json"), JSON.stringify(frOut, null, 2) + "\n");

  const flagshipKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"));
  const legalKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"));
  const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];
  const esFl = loadEsFl();
  const deFl = loadDeFl();
  const locales = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

  for (const locale of locales) {
    const existingPath = path.join(root, "tmp/translations", `${locale}.json`);
    const existing = fs.existsSync(existingPath)
      ? JSON.parse(fs.readFileSync(existingPath, "utf8"))
      : {};
    const moduleFl = locale === "es" ? esFl : locale === "de" ? deFl : {};
    const pairs = flKeys.map((k) => [k, existing[k] || moduleFl[k]]);
    const missing = pairs.filter(([k, v]) => !v || v === k).length;
    if (missing === 0) {
      console.log(`${locale} FL: already complete`);
      continue;
    }
    console.log(`${locale} FL: ${missing} keys to translate`);
    await ensureTranslations(pairs, locale);
  }

  for (const locale of locales) {
    const existingPath = path.join(root, "tmp/translations", `${locale}.json`);
    const existing = fs.existsSync(existingPath)
      ? JSON.parse(fs.readFileSync(existingPath, "utf8"))
      : {};
    const out = {};
    for (const k of flKeys) {
      if (existing[k] && existing[k] !== k) out[k] = existing[k];
      else if (locale === "es" && esFl[k] && esFl[k] !== k) out[k] = esFl[k];
      else if (locale === "de" && deFl[k] && deFl[k] !== k) out[k] = deFl[k];
      else out[k] = cache[`${locale}::${k}`] ?? k;
    }
    fs.writeFileSync(existingPath, JSON.stringify(out, null, 2) + "\n");
    const id = Object.entries(out).filter(([k, v]) => v === k).length;
    if (id) {
      console.error(`${locale}.json still has ${id} identity keys`);
      process.exit(1);
    }
    console.log(`Wrote ${locale}.json — identity: 0`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
