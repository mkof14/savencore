#!/usr/bin/env node
/**
 * Generate full-maps.json: complete EN-key → locale translation for all 360 keys.
 * Uses de/es modules as semantic reference; writes proper target-language strings.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const modDir = path.join(root, "scripts/fl-translations");
const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "full-maps.json");

const { translations: deF } = await import(path.join(modDir, "de-flagship.mjs"));
const { translations: deL } = await import(path.join(modDir, "de-legal.mjs"));
const { translations: esF } = await import(path.join(modDir, "es-flagship.mjs"));
const { translations: esL } = await import(path.join(modDir, "es-legal.mjs"));

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const enKeys = [...new Set([...flagshipKeys, ...legalKeys])];

// Complete value-level maps (de value → target, es value → target)
const { maps } = await import("./value-maps-complete.mjs");

function buildFromSource(source, valueMap) {
  const out = {};
  for (const key of enKeys) {
    const src = source[key];
    out[key] = valueMap[src] ?? src;
  }
  return out;
}

const full = {
  fr: buildFromSource(es, maps.esToFr),
  ja: buildFromSource(es, maps.esToJa),
  "zh-cn": buildFromSource(es, maps.esToZhCn),
  ar: buildFromSource(es, maps.esToAr),
  he: buildFromSource(es, maps.esToHe),
  ru: buildFromSource(de, maps.deToRu),
  uk: buildFromSource(de, maps.deToUk),
};

fs.writeFileSync(outPath, JSON.stringify(full, null, 2) + "\n");

for (const loc of Object.keys(full)) {
  const m = full[loc];
  const id = enKeys.filter((k) => m[k] === k).length;
  const es = Object.values(m).filter((v) => /[áéíóúñ¿¡]/.test(v)).length;
  const de = Object.values(m).filter((v) => /[äöüß]|ung\.|keit\.| werden | nicht /.test(v)).length;
  console.log(`${loc}: identity=${id} es_leak=${es} de_leak=${de} In Dev=${m["In Development"]} Privacy=${m["Privacy Policy"]}`);
}
