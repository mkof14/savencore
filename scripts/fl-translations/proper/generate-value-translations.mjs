#!/usr/bin/env node
/** Build value-translations.json from de/es unique values + comprehensive phrase rules. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const modDir = path.join(root, "scripts/fl-translations");
const { translations: deF } = await import(path.join(modDir, "de-flagship.mjs"));
const { translations: deL } = await import(path.join(modDir, "de-legal.mjs"));
const { translations: esF } = await import(path.join(modDir, "es-flagship.mjs"));
const { translations: esL } = await import(path.join(modDir, "es-legal.mjs"));
const de = { ...deF, ...deL };
const es = { ...esF, ...esL };
const deVals = [...new Set(Object.values(de))];
const esVals = [...new Set(Object.values(es))];

const { RULES, FIXUPS } = await import("./translation-rules.mjs");

const KEEP = [
  "SAVEN Core", "SAVEN Robotics Lab", "SAVEN Robotics Interface", "Internal Future Lab",
  "Intelligence for the Physical World", "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA", "WCAG 2.2 Level AA", "Layer-2", "HMI", "IRR", "ROI", "TBD", "security@",
  "Robotics Lab", "Robotics Interface", "Future Lab",
];

function keepBrands(t) {
  let o = t;
  for (const b of KEEP) o = o.split(b).join(`\0${b}\0`);
  return o;
}
function restore(t) {
  return t.replace(/\0/g, "");
}
function applyRules(text, rules, passes = 6) {
  let o = keepBrands(text);
  for (let i = 0; i < passes; i++) {
    for (const [a, b] of rules) o = o.split(a).join(b);
  }
  return restore(o);
}

function buildMap(values, rules, fixups = {}) {
  const out = {};
  for (const v of values) out[v] = fixups[v] ?? applyRules(v, rules);
  return out;
}

const maps = {
  deToRu: buildMap(deVals, RULES.deRu, FIXUPS.deToRu ?? {}),
  deToUk: {},
  esToFr: buildMap(esVals, RULES.esFr, FIXUPS.esToFr ?? {}),
  esToJa: buildMap(esVals, RULES.esJa, FIXUPS.esToJa ?? {}),
  esToZhCn: buildMap(esVals, RULES.esZhCn, FIXUPS.esToZhCn ?? {}),
  esToAr: buildMap(esVals, RULES.esAr, FIXUPS.esToAr ?? {}),
  esToHe: buildMap(esVals, RULES.esHe, FIXUPS.esToHe ?? {}),
};

// uk from ru with uk-specific fixups
for (const v of deVals) {
  maps.deToUk[v] = FIXUPS.deToUk?.[v] ?? applyRules(maps.deToRu[v] ?? v, RULES.ruToUk);
}

const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "value-translations.json");
fs.writeFileSync(outPath, JSON.stringify(maps, null, 2) + "\n");
console.log("Wrote value-translations.json", {
  deToRu: Object.keys(maps.deToRu).length,
  esToFr: Object.keys(maps.esToFr).length,
});
