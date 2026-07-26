#!/usr/bin/env node
/** Generate supplement3-5 from tmp/fr-chunk*-keys.json using translate with cache + retry. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translate as gTranslate } from "@vitalets/google-translate-api";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const cachePath = path.join(root, "tmp/fr-supplement-cache.json");
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};

const FR_GLOSSARY = [
  [/SAVEN Robotics Interface/g, "SAVEN Robotics Interface"],
  [/SAVEN Robotics Lab/g, "SAVEN Robotics Lab"],
  [/Internal Future Lab/g, "Internal Future Lab"],
  [/SAVEN Core/g, "SAVEN Core"],
  [/BioMath Life/g, "BioMath Life"],
  [/BioMath Core/g, "BioMath Core"],
  [/SAVEN AI/g, "SAVEN AI"],
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
  [/Interoperability/g, "Interopérabilité"],
  [/Automation/g, "Automatisation"],
  [/Robotics/g, "Robotique"],
  [/Transparency/g, "Transparence"],
  [/Limitations/g, "Limites"],
  [/Healthcare/g, "Santé"],
  [/Hospitals/g, "Hôpitaux"],
  [/Emergency/g, "Urgences"],
  [/Industrial/g, "Industriel"],
  [/Government/g, "Secteur public"],
  [/Agriculture/g, "Agriculture"],
  [/Home/g, "Domicile"],
  [/Privacy/g, "Confidentialité"],
  [/Security/g, "Sécurité"],
  [/Technology/g, "Technologie"],
  [/Systems/g, "Systèmes"],
  [/Applications/g, "Applications"],
  [/Research/g, "Recherche"],
  [/Trust/g, "Confiance"],
  [/Purpose/g, "Raison d'être"],
  [/Foundation/g, "Fondations"],
  [/Architecture/g, "Architecture"],
];

function postProcess(text) {
  let out = text;
  for (const [re, rep] of FR_GLOSSARY) out = out.replace(re, rep);
  return out;
}

async function translateOne(key, attempt = 0) {
  if (cache[key]) return cache[key];
  try {
    const { text } = await gTranslate(key, { from: "en", to: "fr" });
    const fr = postProcess(text);
    cache[key] = fr;
    return fr;
  } catch (err) {
    if (attempt < 8) {
      const wait = 15000 * (attempt + 1);
      console.error(`Retry ${attempt + 1} in ${wait / 1000}s for: ${key.slice(0, 50)}...`);
      await new Promise((r) => setTimeout(r, wait));
      return translateOne(key, attempt + 1);
    }
    throw err;
  }
}

function writeSupplement(num, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(path.dirname(fileURLToPath(import.meta.url)), `supplement${num}.mjs`),
    `/** French translations — supplement ${num} (D-0161). */\nexport const supplement${num} = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const num of [3, 4, 5]) {
  const keys = JSON.parse(fs.readFileSync(path.join(root, `tmp/fr-chunk${num}-keys.json`), "utf8"));
  const obj = {};
  console.log(`Supplement ${num}: ${keys.length} keys`);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    obj[key] = await translateOne(key);
    if ((i + 1) % 10 === 0) {
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
      console.log(`  ${num}: ${i + 1}/${keys.length}`);
    }
    await new Promise((r) => setTimeout(r, 6000));
  }
  writeSupplement(num, obj);
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
  console.log(`Wrote supplement${num}.mjs`);
}

console.log("All supplements generated.");
