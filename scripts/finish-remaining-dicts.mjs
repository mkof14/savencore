#!/usr/bin/env node
/**
 * Materialize remaining DE/FR page dictionaries + flagship/legal dict .ts files.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { COMMON_FR, PAGE_FR } from "./remaining-translations/fr-complete.mjs";
import { DE_FIX } from "./remaining-translations/de-fix.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const keysDir = path.join(root, "tmp/dict-keys");

const FR_PAGES = [
  "agriculture", "ai-decision-support", "artificial-intelligence", "automation",
  "clinical-interfaces", "communication-layer", "data-infrastructure", "drone-systems",
  "emergency", "ethics-responsible-use", "government", "home-application", "hospitals",
  "human-data-model", "human-data", "human-oversight", "industrial", "interoperability",
  "knowledge-engine", "limitations", "privacy", "research-applications", "robotics-layer",
  "robotics", "safety-layer", "security", "transparency", "trust-privacy", "trust-safety",
  "trust-security",
];
const DE_PAGES = ["home-application", "limitations"];

function parseDict(text) {
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeDictFile(outPath, map, keys) {
  const lines = keys.map((k) => {
    const v = map[k];
    if (!v || v === k) throw new Error(`Missing translation for: ${k.slice(0, 80)}`);
    return `  "${esc(k)}": "${esc(v)}",`;
  });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(
    outPath,
    `/* Generated from the canonical English source. */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`,
  );
}

function loadExisting(locale) {
  const dir = path.join(root, "src/content/pages/dictionaries", locale);
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    Object.assign(map, parseDict(fs.readFileSync(path.join(dir, f), "utf8")));
  }
  return map;
}

function buildFrMap() {
  const existing = loadExisting("fr");
  const map = { ...existing };
  for (const [k, v] of Object.entries(COMMON_FR)) map[k] = v;
  for (const [k, v] of Object.entries(PAGE_FR)) map[k] = v;
  return map;
}

function buildDeMap() {
  const existing = loadExisting("de");
  const deJson = JSON.parse(fs.readFileSync(path.join(root, "tmp/de-translations.json"), "utf8"));
  return { ...deJson, ...existing, ...DE_FIX };
}

function isIdentity(key, val) {
  return !val || val === key;
}

function verifyPages(locale, pages, map) {
  let missing = 0;
  let identity = 0;
  for (const page of pages) {
    const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
    for (const k of keys) {
      if (!(k in map)) missing++;
      else if (isIdentity(k, map[k])) identity++;
    }
  }
  return { missing, identity };
}

// --- Page dictionaries ---
const frMap = buildFrMap();
const deMap = buildDeMap();

for (const page of FR_PAGES) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  writeDictFile(
    path.join(root, "src/content/pages/dictionaries/fr", `${page}.ts`),
    frMap,
    keys,
  );
}

for (const page of DE_PAGES) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  writeDictFile(
    path.join(root, "src/content/pages/dictionaries/de", `${page}.ts`),
    deMap,
    keys,
  );
}

const frCheck = verifyPages("fr", FR_PAGES, frMap);
const deCheck = verifyPages("de", DE_PAGES, deMap);
console.log(`FR pages: ${FR_PAGES.length}, missing=${frCheck.missing}, identity=${frCheck.identity}`);
console.log(`DE pages: ${DE_PAGES.length}, missing=${deCheck.missing}, identity=${deCheck.identity}`);

if (frCheck.missing || frCheck.identity || deCheck.missing || deCheck.identity) {
  process.exit(1);
}

// --- Flagship / legal dictionaries ---
const flagshipKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-keys/all.json"), "utf8"));
const legalKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/legal-keys/all.json"), "utf8")).filter(
  (k) => k.includes(" ") || k.length > 12,
);

const FLAGSHIP_LOCALES = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

for (const locale of FLAGSHIP_LOCALES) {
  const mod = await import(`./fl-translations/${locale}-flagship.mjs`);
  const translations = mod.translations;
  const missing = flagshipKeys.filter((k) => !translations[k] || translations[k] === k);
  if (missing.length) {
    console.error(`flagship ${locale}: missing ${missing.length}`);
    missing.slice(0, 3).forEach((k) => console.error(" ", k.slice(0, 72)));
    process.exit(1);
  }
  writeDictFile(
    path.join(root, "src/content/flagship/dictionaries", `${locale}.ts`),
    translations,
    flagshipKeys,
  );
  console.log(`flagship/${locale}.ts: ${flagshipKeys.length} keys`);
}

for (const locale of FLAGSHIP_LOCALES) {
  const mod = await import(`./fl-translations/${locale}-legal.mjs`);
  const translations = mod.translations;
  const missing = legalKeys.filter((k) => !translations[k] || translations[k] === k);
  if (missing.length) {
    console.error(`legal ${locale}: missing ${missing.length}`);
    missing.slice(0, 3).forEach((k) => console.error(" ", k.slice(0, 72)));
    process.exit(1);
  }
  writeDictFile(
    path.join(root, "src/content/legal/dictionaries", `${locale}.ts`),
    translations,
    legalKeys,
  );
  console.log(`legal/${locale}.ts: ${legalKeys.length} keys`);
}

console.log("Done.");
