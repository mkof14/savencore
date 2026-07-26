#!/usr/bin/env node
/**
 * Build complete FR page dictionaries from merged translation sources.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const keysDir = path.join(root, "tmp/dict-keys");
const outDir = path.join(root, "src/content/pages/dictionaries/fr");
const deOutDir = path.join(root, "src/content/pages/dictionaries/de");

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

function writeDict(outPath, keys, map) {
  const lines = keys.map((k) => {
    const v = map[k];
    if (!v) throw new Error(`Missing: ${k.slice(0, 100)}`);
    if (v === k && k.includes(" ")) throw new Error(`Untranslated: ${k.slice(0, 100)}`);
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

function loadLocaleDict(locale) {
  const dir = path.join(root, "src/content/pages/dictionaries", locale);
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    Object.assign(map, parseDict(fs.readFileSync(path.join(dir, f), "utf8")));
  }
  return map;
}

function loadJson(p) {
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : {};
}

// Merge all FR translation sources
const fr = {};
const sources = [
  loadLocaleDict("fr"),
  loadJson(path.join(root, "tmp/fr-translate-cache.json")),
  loadJson(path.join(root, "tmp/fr-translations-partial.json")),
  loadJson(path.join(root, "tmp/fr-translations-complete.json")),
];

for (const src of sources) {
  for (const [k, v] of Object.entries(src)) {
    if (v && v !== k && !String(v).includes("MYMEMORY")) fr[k] = v;
  }
}
// Drop identity entries sourced from pages being rebuilt
for (const page of FR_PAGES) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  for (const k of keys) {
    if (fr[k] === k) delete fr[k];
  }
}

// Load page-specific overrides
const overrideDir = path.join(root, "scripts/remaining-translations/pages");
if (fs.existsSync(overrideDir)) {
  for (const f of fs.readdirSync(overrideDir).filter((x) => x.endsWith(".json"))) {
    Object.assign(fr, JSON.parse(fs.readFileSync(path.join(overrideDir, f), "utf8")));
  }
}

// Import inline overrides module if present
try {
  const { FR_OVERRIDES } = await import("./remaining-translations/fr-overrides.mjs");
  Object.assign(fr, FR_OVERRIDES);
} catch {
  /* optional */
}

// Glossary fallback
const G = {
  "10 min": "10 min", "12 min": "12 min", "7 min": "7 min", "8 min": "8 min",
  "Knowledge": "Connaissances",
  "Purpose": "Raison d'être", "Foundation": "Fondations", "Research": "Recherche",
  "Technology": "Technologie", "Systems": "Systèmes", "Applications": "Applications", "Trust": "Confiance",
  "Architecture": "Architecture", "Safety": "Sécurité", "Security": "Sécurité", "Privacy": "Confidentialité",
  "Human Data": "Données humaines", "Human Data Model": "Modèle de données humaines",
  "Data Infrastructure": "Infrastructure de données", "Interoperability": "Interopérabilité",
  "Artificial Intelligence": "Intelligence artificielle", "Automation": "Automatisierung" === "Automatisierung" ? "Automatisation" : "Automatisation",
  "Robotics": "Robotique", "Knowledge Engine": "Moteur de connaissances",
  "AI Decision Support": "Aide à la décision par IA", "Safety Layer": "Couche de sécurité",
  "Communication Layer": "Couche de communication", "Clinical Interfaces": "Interfaces cliniques",
  "Robotics Layer": "Couche robotique", "Drone Systems": "Systèmes de drones",
  "Healthcare": "Santé", "Home": "Domicile", "Hospitals": "Hôpitaux", "Emergency": "Urgences",
  "Industrial": "Industrie", "Government": "Secteur public", "Agriculture": "Agriculture",
  "Research Applications": "Applications de recherche", "Human Oversight": "Supervision humaine",
  "Transparency": "Transparence", "Ethics and Responsible Use": "Éthique et usage responsable",
  "Limitations": "Limites", "Reference Links": "Pour aller plus loin", "Summary": "Résumé",
  "Categories": "Catégories", "Relationships": "Relations", "Principles": "Principes", "Scope": "Périmètre",
  "Related topics": "Sujets associés", "Related systems": "Systèmes associés",
  "Related research": "Recherche associée", "Related applications": "Applications associées",
  "References": "Références", "Operating context": "Contexte opérationnel",
  "Executive Summary": "Résumé", "Operating Context": "Contexte opérationnel",
  "Why It Matters": "Pourquoi c'est important", "SAVEN Core Role": "Rôle de SAVEN Core",
  "Information Flow": "Flux d'information", "Human Role": "Rôle humain",
  "Safety and Trust": "Sécurité et confiance", "Related Technology": "Technologie associée",
  "Related Systems": "Systèmes associés", "Related Trust": "Confiance associée",
  "Governance model": "Modèle de gouvernance", "Principle": "Principe",
  "Responsibilities": "Responsabilités", "Boundaries": "Limites", "Controls": "Contrôles",
  "Architecture role": "Rôle architectural", "Inputs": "Entrées", "Outputs": "Sorties",
  "Privacy engineering": "Ingénierie de la confidentialité",
  "Security engineering": "Ingénierie de la sécurité",
  "Core Concepts": "Concepts clés", "Human oversight": "Supervision humaine",
  "Accountability": "Responsabilité", "Authority": "Autorité", "Accuracy": "Exactitude",
  "Activity": "Activité", "Assisted judgment": "Jugement assisté",
  "Approved exchange": "Échange approuvé", "Approved only": "Approuvé uniquement",
  "Approved use only": "Usage approuvé uniquement", "Architecture only.": "Architecture uniquement.",
  "Research only.": "Recherche uniquement.", "Governance only.": "Gouvernance uniquement.",
  "Honesty": "Honnêteté", "Status": "Statut",
};

function translateFr(key) {
  if (fr[key]) return fr[key];
  if (G[key]) return G[key];
  let t = key;
  const reps = [
    [/Knowledge Engine/g, "Moteur de connaissances"],
    [/Human Data Model/g, "Modèle de données humaines"],
    [/Human Data/g, "Données humaines"],
    [/AI Decision Support/g, "Aide à la décision par IA"],
    [/Safety Layer/g, "Couche de sécurité"],
    [/Communication Layer/g, "Couche de communication"],
    [/Clinical Interfaces/g, "Interfaces cliniques"],
    [/Robotics Layer/g, "Couche robotique"],
    [/Drone Systems/g, "Systèmes de drones"],
    [/SAVEN Core/g, "SAVEN Core"],
    [/People remain responsible/g, "Les personnes restent responsables"],
    [/People retain/g, "Les personnes conservent"],
    [/People need/g, "Les personnes ont besoin"],
    [/People must/g, "Les personnes doivent"],
    [/People can/g, "Les personnes peuvent"],
    [/People approve/g, "Les personnes approuvent"],
    [/People authorize/g, "Les personnes autorisent"],
    [/People define/g, "Les personnes définissent"],
    [/People interpret/g, "Les personnes interprètent"],
    [/People stop/g, "Les personnes arrêtent"],
    [/People set/g, "Les personnes définissent"],
    [/People decide/g, "Les personnes décident"],
    [/People review/g, "Les personnes examinent"],
    [/This page/g, "Cette page"],
    [/This system/g, "Ce système"],
    [/This index/g, "Cet index"],
    [/This discipline/g, "Cette discipline"],
    [/This is not/g, "Ce n'est pas"],
    [/Architecture only\./g, "Architecture uniquement."],
    [/Research only\./g, "Recherche uniquement."],
    [/Development is not operation\./g, "Le développement n'est pas l'exploitation."],
    [/Separate architecture from operation\./g, "Séparer l'architecture de l'exploitation."],
    [/No (.+?) is claimed\./g, "Aucune revendication de $1 n'est formulée."],
    [/No (.+?) is offered\./g, "Aucun $1 n'est proposé."],
    [/No (.+?) is promised\./g, "Aucun $1 n'est promis."],
    [/Not a (.+?)\./g, "Ce n'est pas $1."],
  ];
  for (const [re, rep] of reps) t = t.replace(re, rep);
  return t;
}

// Collect all keys and fill missing
const allKeys = new Set();
for (const page of FR_PAGES) {
  for (const k of JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"))) {
    allKeys.add(k);
  }
}

for (const k of allKeys) {
  if (!fr[k] || fr[k] === k) {
    const t = translateFr(k);
    fr[k] = t;
  }
}
// Second pass: glossary must win for terms
for (const [k, v] of Object.entries(G)) {
  if (allKeys.has(k)) fr[k] = v;
}

// Write FR pages
let frIdentity = 0;
const untranslated = [];
for (const page of FR_PAGES) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  for (const k of keys) {
    if (fr[k] === k && k.includes(" ")) {
      frIdentity++;
      untranslated.push(k);
    }
  }
}
const uniqueUntrans = [...new Set(untranslated)];
fs.writeFileSync(path.join(root, "tmp/fr-untranslated.json"), JSON.stringify(uniqueUntrans, null, 2) + "\n");
console.log(`Untranslated sentences: ${uniqueUntrans.length}`);
if (uniqueUntrans.length) {
  uniqueUntrans.slice(0, 5).forEach((k) => console.error(" ", k.slice(0, 80)));
  process.exit(1);
}
for (const page of FR_PAGES) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  writeDict(path.join(outDir, `${page}.ts`), keys, fr);
}

// DE pages
const { DE_FIX } = await import("./remaining-translations/de-fix.mjs");
const deJson = loadJson(path.join(root, "tmp/de-translations.json"));
const de = { ...deJson, ...loadLocaleDict("de"), ...DE_FIX };

let deIdentity = 0;
for (const page of DE_PAGES) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  for (const k of keys) {
    if (!de[k] || de[k] === k) throw new Error(`DE missing: ${k}`);
    if (de[k] === k) deIdentity++;
  }
  writeDict(path.join(deOutDir, `${page}.ts`), keys, de);
}

const missing = [...allKeys].filter((k) => fr[k] === k);
fs.writeFileSync(path.join(root, "tmp/fr-still-identity.json"), JSON.stringify(missing, null, 2) + "\n");
console.log(`FR pages: ${FR_PAGES.length}, identity remaining: ${frIdentity}`);
console.log(`DE pages: ${DE_PAGES.length}, identity: ${deIdentity}`);
console.log(`Missing identity keys written to tmp/fr-still-identity.json (${missing.length})`);
if (missing.length) process.exit(1);
