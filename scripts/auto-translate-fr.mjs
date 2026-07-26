#!/usr/bin/env node
/**
 * Translate all dictionary keys EN→FR, with SAVEN term post-processing.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translate as gTranslate } from "@vitalets/google-translate-api";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const keys = JSON.parse(fs.readFileSync(path.join(root, "tmp/all-unique-keys.json"), "utf8"));
const outPath = path.join(root, "tmp/fr-translations.json");
const cachePath = path.join(root, "tmp/fr-translate-cache.json");

const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};

const GLOSSARY = [
  [/SAVEN Core/g, "SAVEN Core"],
  [/BioMath Life/g, "BioMath Life"],
  [/BioMath Core/g, "BioMath Core"],
  [/SAVEN AI/g, "SAVEN AI"],
  [/SAVEN(?!\s*Core)/g, "SAVEN"],
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
];

function postProcess(text) {
  let out = text;
  for (const [re, rep] of GLOSSARY) out = out.replace(re, rep);
  return out;
}

async function translate(text) {
  const { text: fr } = await gTranslate(text, { from: "en", to: "fr" });
  return postProcess(fr);
}

const missing = keys.filter((k) => !(k in cache));
console.log(`Translating ${missing.length} keys (${Object.keys(cache).length} cached)...`);

for (let i = 0; i < missing.length; i++) {
  const key = missing[i];
  try {
    cache[key] = await translate(key);
    if ((i + 1) % 25 === 0) {
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
      console.log(`  ${i + 1}/${missing.length}`);
    }
    await new Promise((r) => setTimeout(r, 3000));
  } catch (err) {
    console.error(`Failed on key: ${key.slice(0, 60)}...`, err.message);
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
    process.exit(1);
  }
}

fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
fs.writeFileSync(outPath, JSON.stringify(cache, null, 2) + "\n");
console.log(`Wrote ${Object.keys(cache).length} translations → ${outPath}`);
