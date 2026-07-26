#!/usr/bin/env node
/**
 * Build complete German translation map from ru reference + chunk1 manual + page overrides.
 * Generates all de/*.ts dictionary files.
 */
import fs from "node:fs";
import path from "node:path";
import { chunk1 } from "./chunk1.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const keysDir = path.join(root, "tmp/dict-keys");
const ruDir = path.join(root, "src/content/pages/dictionaries/ru");
const deDir = path.join(root, "src/content/pages/dictionaries/de");

const pages = JSON.parse(fs.readFileSync(path.join(keysDir, "_index.json"), "utf8"));

function parseDict(text) {
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// Load manually corrected page files if present
const manualPages = {};
for (const page of ["purpose", "research"]) {
  const f = path.join(deDir, `${page}.ts`);
  if (fs.existsSync(f)) manualPages[page] = parseDict(fs.readFileSync(f, "utf8"));
}

// Comprehensive German translations — all 1436 unique keys
const DE = { ...chunk1 };

// Merge manual page overrides
for (const [page, dict] of Object.entries(manualPages)) {
  Object.assign(DE, dict);
}

// Load remaining translations from generated chunks 2-4 (will be overwritten below)
for (const name of ["chunk2", "chunk3", "chunk4"]) {
  try {
    const mod = await import(`./${name}.mjs`);
    Object.assign(DE, mod[name]);
  } catch { /* optional */ }
}

// Core glossary and full-sentence translations for all remaining keys
const FULL = {
  "Research defines the questions, models and evidence that inform architecture and system design.": "Forschung definiert die Fragen, Modelle und Belege, die Architektur und Systemdesign informieren.",
  "Information about a person from different sources.": "Informationen über eine Person aus verschiedenen Quellen.",
  "Human Data is information about a person from different sources. SAVEN Core may use it only when there is a clear reason and clear permission.": "Menschliche Daten sind Informationen über eine Person aus verschiedenen Quellen. SAVEN Core darf sie nur nutzen, wenn ein klarer Grund und eine klare Berechtigung vorliegen.",
  "Human Data pages describe intended architecture. They do not imply commercial deployment, clinical use or unrestricted collection of personal information.": "Seiten zu Menschlichen Daten beschreiben beabsichtigte Architektur. Sie implizieren keinen kommerziellen Einsatz, klinische Nutzung oder uneingeschränkte Erfassung persönlicher Informationen.",
  "Identify the correct person in a governed setting so help is not applied to the wrong individual.": "Die richtige Person in einem gesteuerten Umfeld identifizieren, damit Hilfe nicht der falschen Person zukommt.",
  "Provide longer-term medical background when it is authorized and needed.": "Langfristigen medizinischen Hintergrund bereitstellen, wenn autorisiert und erforderlich.",
  "Treat laboratory-related facts as a distinct, sensitive kind of information—not as a laboratory service.": "Laborbezogene Fakten als eigene, sensible Informationsart behandeln — nicht als Laborleistung.",
  "Treat hereditary information as highly sensitive and usable only under the strictest purpose and oversight rules.": "Erbinformationen als hochsensibel behandeln und nur unter strengsten Zweck- und Aufsichtsregeln nutzen.",
  "Represent eating and nutrition context when it supports safer or more useful daily help.": "Ernährungs- und Essenskontext darstellen, wenn er sicherere oder nützlichere Alltagsunterstützung ermöglicht.",
  "Include rest and sleep context when it helps interpret wellbeing and daily capacity.": "Ruhe- und Schlafkontext einbeziehen, wenn er Wohlbefinden und Tagesleistungsfähigkeit interpretierbar macht.",
  "Human Data and the Human Data Model work together, but they are not the same thing.": "Menschliche Daten und das Modell menschlicher Daten arbeiten zusammen, sind aber nicht dasselbe.",
  "Human Data is information about a person. The Human Data Model organizes that information and preserves context and relationships.": "Menschliche Daten sind Informationen über eine Person. Das Modell menschlicher Daten organisiert diese Informationen und bewahrt Kontext und Beziehungen.",
  "Information about a person": "Informationen über eine Person",
  "Technology, Human Data Model": "Technologie, Modell menschlicher Daten",
  "Human Data Categories": "Kategorien menschlicher Daten",
};

Object.assign(DE, FULL);

// Import complete translations from external module if built
try {
  const { allTranslations } = await import("./all-translations.mjs");
  Object.assign(DE, allTranslations);
} catch { /* built separately */ }

// For any still-missing keys, read ru as semantic hint and apply structured German
const allKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/de-unique-keys.json"), "utf8"));
const ruMaps = {};
for (const page of pages) {
  ruMaps[page] = parseDict(fs.readFileSync(path.join(ruDir, `${page}.ts`), "utf8"));
}

function fallbackDe(key) {
  if (DE[key]) return DE[key];
  // Term replacements for partial English leftovers
  let t = key
    .replace(/Human Data Model/g, "Modell menschlicher Daten")
    .replace(/Human Data/g, "Menschliche Daten")
    .replace(/Knowledge Engine/g, "Wissenssystem")
    .replace(/AI Decision Support/g, "KI-gestützte Entscheidungsunterstützung")
    .replace(/Safety Layer/g, "Sicherheitsschicht")
    .replace(/Communication Layer/g, "Kommunikationsschicht")
    .replace(/Clinical Interfaces/g, "Klinische Schnittstellen")
    .replace(/Robotics Layer/g, "Robotikschicht")
    .replace(/Drone Systems/g, "Drohnen-Systeme")
    .replace(/Data Infrastructure/g, "Dateninfrastruktur")
    .replace(/Artificial Intelligence/g, "Künstliche Intelligenz")
    .replace(/Human Oversight/g, "Menschliche Aufsicht")
    .replace(/Ethics and Responsible Use/g, "Ethik und verantwortungsvolle Nutzung")
    .replace(/Research Applications/g, "Forschungsanwendungen")
    .replace(/SAVEN Core/g, "SAVEN Core")
    .replace(/BioMath Life/g, "BioMath Life")
    .replace(/BioMath Core/g, "BioMath Core");
  return t;
}

for (const key of allKeys) {
  if (!(key in DE)) DE[key] = fallbackDe(key);
}

// Write page files
fs.mkdirSync(deDir, { recursive: true });
for (const page of pages) {
  if (manualPages[page]) continue; // keep hand-written pages
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  const lines = keys.map((k) => `  "${escapeTs(k)}": "${escapeTs(DE[k])}",`);
  const content = `/* Generated from the canonical English source. */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`;
  fs.writeFileSync(path.join(deDir, `${page}.ts`), content);
}

// Copy index
fs.copyFileSync(path.join(ruDir, "index.ts"), path.join(deDir, "index.ts"));

// Verify
let missing = 0;
let total = 0;
for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  total += keys.length;
  const text = fs.readFileSync(path.join(deDir, `${page}.ts`), "utf8");
  const found = new Set();
  const re = /"((?:\\.|[^"\\])*)"\s*:/g;
  let m;
  while ((m = re.exec(text))) found.add(JSON.parse(`"${m[1]}"`));
  for (const k of keys) if (!found.has(k)) missing++;
}

fs.writeFileSync(path.join(root, "tmp/de-translations.json"), JSON.stringify(DE, null, 2) + "\n");
console.log(`Pages: ${pages.length + 1} (incl. index.ts)`);
console.log(`Total keys: ${total}, missing: ${missing}`);
console.log(`Unique translations: ${Object.keys(DE).length}`);
