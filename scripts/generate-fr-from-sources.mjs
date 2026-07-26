#!/usr/bin/env node
/**
 * Generate complete FR page dictionaries by merging all sources + comprehensive FR map.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chunk0 } from "./remaining-translations/fr-chunk-0.mjs";
import { DE_FIX } from "./remaining-translations/de-fix.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const keysDir = path.join(root, "tmp/dict-keys");
const frOut = path.join(root, "src/content/pages/dictionaries/fr");
const deOut = path.join(root, "src/content/pages/dictionaries/de");

const FR_PAGES = [
  "agriculture", "ai-decision-support", "artificial-intelligence", "automation",
  "clinical-interfaces", "communication-layer", "data-infrastructure", "drone-systems",
  "emergency", "ethics-responsible-use", "government", "home-application", "hospitals",
  "human-data-model", "human-data", "human-oversight", "industrial", "interoperability",
  "knowledge-engine", "limitations", "privacy", "research-applications", "robotics-layer",
  "robotics", "safety-layer", "security", "transparency", "trust-privacy", "trust-safety",
  "trust-security",
];

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

function writeDict(outDir, page, map) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  const lines = keys.map((k) => {
    const v = map[k];
    if (!v) throw new Error(`Missing ${page}: ${k.slice(0, 90)}`);
    return `  "${esc(k)}": "${esc(v)}",`;
  });
  fs.writeFileSync(
    path.join(outDir, `${page}.ts`),
    `/* Generated from the canonical English source. */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`,
  );
}

function loadLocale(locale) {
  const dir = path.join(root, "src/content/pages/dictionaries", locale);
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    Object.assign(map, parseDict(fs.readFileSync(path.join(dir, f), "utf8")));
  }
  return map;
}

// Build FR map from all sources
const fr = {};
const goodLocales = ["fr", "es", "ru", "de", "uk", "ja"];
for (const loc of goodLocales) {
  const d = loadLocale(loc);
  for (const [k, v] of Object.entries(d)) {
    if (v && v !== k && !String(v).includes("MYMEMORY")) {
      // only use fr locale directly; others skipped for value
      if (loc === "fr") fr[k] = v;
    }
  }
}

Object.assign(
  fr,
  chunk0,
  JSON.parse(fs.readFileSync(path.join(root, "tmp/fr-translate-cache.json"), "utf8")),
  JSON.parse(fs.readFileSync(path.join(root, "tmp/fr-translations-partial.json"), "utf8")),
);

// MT cache FR entries
const mt = JSON.parse(fs.readFileSync(path.join(root, "tmp/mt-cache.json"), "utf8"));
for (const [k, v] of Object.entries(mt)) {
  if (k.startsWith("fr|")) {
    const key = k.slice(3);
    const clean = String(v).replace(/&#10;/g, "\n").trim();
    if (clean && clean !== key) fr[key] = clean;
  }
}

// Load comprehensive overrides if present
const overridePath = path.join(root, "tmp/fr-all-overrides.json");
if (fs.existsSync(overridePath)) {
  Object.assign(fr, JSON.parse(fs.readFileSync(overridePath, "utf8")));
}

// Import inline complete map
const { FR_COMPLETE } = await import("./remaining-translations/fr-complete-map.mjs");
Object.assign(fr, FR_COMPLETE);

const allKeys = new Set();
for (const page of FR_PAGES) {
  for (const k of JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"))) {
    allKeys.add(k);
  }
}

const missing = [...allKeys].filter((k) => {
  if (!fr[k]) return true;
  if (fr[k] === k && k.includes(" ") && !/^\d+ min$/.test(k)) return true;
  return false;
});
if (missing.length) {
  fs.writeFileSync(path.join(root, "tmp/fr-build-missing.json"), JSON.stringify(missing, null, 2) + "\n");
  console.error(`Missing ${missing.length} FR translations`);
  missing.slice(0, 8).forEach((k) => console.error(" ", k.slice(0, 80)));
  process.exit(1);
}

for (const page of FR_PAGES) writeDict(frOut, page, fr);
console.log(`Wrote ${FR_PAGES.length} FR page dictionaries`);

// DE pages
const de = {
  ...JSON.parse(fs.readFileSync(path.join(root, "tmp/de-translations.json"), "utf8")),
  ...DE_FIX,
};
for (const page of ["home-application", "limitations"]) writeDict(deOut, page, de);
console.log("Wrote 2 DE page dictionaries");

// Identity check
function checkIdentity(loc, pages) {
  const id = [];
  for (const page of pages) {
    const text = fs.readFileSync(path.join(root, "src/content/pages/dictionaries", loc, `${page}.ts`), "utf8");
    const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
    const sample = keys.find((k) => k.length > 20) || keys[0];
    const re = new RegExp(
      `${JSON.stringify(sample).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:\\s*("(?:\\\\.|[^"\\\\])*")`,
    );
    const m = text.match(re);
    let isId = true;
    if (m) {
      try {
        isId = JSON.parse(m[1]) === sample;
      } catch {
        /* keep true */
      }
    }
    if (isId) id.push(page);
  }
  return id;
}

const frId = checkIdentity("fr", FR_PAGES);
const deId = checkIdentity("de", ["home-application", "limitations"]);
console.log(`FR identity pages: ${frId.length}${frId.length ? " " + frId.join(",") : ""}`);
console.log(`DE identity pages: ${deId.length}${deId.length ? " " + deId.join(",") : ""}`);
if (frId.length || deId.length) process.exit(1);
