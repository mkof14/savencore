#!/usr/bin/env node
/**
 * Auto-generate value fixups: de→es→target or de→DE_FR for remaining leaks.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as deF } from "../de-flagship.mjs";
import { translations as deL } from "../de-legal.mjs";
import { translations as esF } from "../es-flagship.mjs";
import { translations as esL } from "../es-legal.mjs";

const offlineDir = path.dirname(fileURLToPath(import.meta.url));
const modDir = path.join(offlineDir, "..");
const de = { ...deF, ...deL };
const es = { ...esF, ...esL };
const keys = Object.keys(de);

const refBuilder = fs.readFileSync(path.join(modDir, "build-reference-maps-from-de-es.mjs"), "utf8");
const DE_FR = eval(`[${refBuilder.match(/const DE_FR = \[([\s\S]*?)\n\];/)[1]}]`);
const composeSrc = fs.readFileSync(path.join(modDir, "compose-locales.mjs"), "utf8");
function extractRules(name) {
  return eval(`[${composeSrc.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\n\\];`))[1]}]`);
}
const ES_FR = extractRules("ES_FR");
const ES_JA = extractRules("ES_JA");
const ES_ZH = extractRules("ES_ZH");
const ES_AR = extractRules("ES_AR");
const ES_HE = extractRules("ES_HE");
const ES_RU = extractRules("ES_RU");
const ES_UK = extractRules("ES_UK");

const offlineBuilder = fs.readFileSync(path.join(modDir, "build-offline-locales.mjs"), "utf8");
const FR_RU = eval(`[${offlineBuilder.match(/const FR_RU = \[([\s\S]*?)\n\];/)[1]}]`);
const FR_UK = FR_RU.map(([a, b]) => [
  a,
  b.replace(/ и /g, " та ").replace(/ или /g, " або ").replace(/В разработке/g, "У розробці").replace(/Политика конфиденциальности/g, "Політика конфіденційності"),
]);

function applyMulti(text, rules, n = 4) {
  let r = text;
  for (let i = 0; i < n; i++) {
    let next = r;
    for (const [a, b] of rules) next = next.split(a).join(b);
    r = next;
  }
  return r;
}

function hasDeLeak(v) {
  return /[äöüßÄÖÜ]| und | oder |Der |Die |Das |werden |wird /.test(v);
}
function hasEsLeak(v) {
  return /[áéíóúñ¿¡]/.test(v);
}

const deByKey = de;
const esByKey = es;
const deToKey = {};
for (const k of keys) deToKey[de[k]] = k;

function bestFromEs(esVal, rules) {
  return applyMulti(esVal, rules, 5);
}

function genDeFixups(locale, esRules, extraRules = []) {
  const fixups = {};
  for (const k of keys) {
    const deVal = de[k];
    let v = FIXUPS_OVERRIDE?.[locale]?.[deVal];
    if (!v) {
      v = applyMulti(deVal, DE_FR, 5);
      if (extraRules.length) v = applyMulti(v, extraRules, 3);
      if (hasDeLeak(v) || hasEsLeak(v)) {
        v = bestFromEs(es[k], esRules);
        if (extraRules.length) v = applyMulti(v, extraRules, 3);
      }
    }
    fixups[deVal] = v;
  }
  return fixups;
}

function genEsFixups(esRules) {
  const fixups = {};
  for (const k of keys) {
    const esVal = es[k];
    fixups[esVal] = applyMulti(esVal, esRules, 5);
  }
  return fixups;
}

const FIXUPS_OVERRIDE = {};

const outputs = {
  "fixups-de-fr.json": genDeFixups("fr", ES_FR),
  "fixups-de-ru.json": genDeFixups("ru", ES_RU, FR_RU),
  "fixups-de-uk.json": genDeFixups("uk", ES_UK, FR_UK),
  "fixups-es-ja.json": genEsFixups(ES_JA),
  "fixups-es-zh-cn.json": genEsFixups(ES_ZH),
  "fixups-es-ar.json": genEsFixups(ES_AR),
  "fixups-es-he.json": genEsFixups(ES_HE),
};

for (const [file, data] of Object.entries(outputs)) {
  fs.writeFileSync(path.join(offlineDir, file), JSON.stringify(data, null, 2) + "\n");
  console.log(`${file}: ${Object.keys(data).length} entries`);
}
