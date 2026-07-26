#!/usr/bin/env node
/**
 * Write complete locale maps from de/es reference modules (D-0161).
 * Generates scripts/fl-translations/locales/{locale}.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
const modDir = path.join(root, "scripts/fl-translations");

const { translations: deF } = await import(path.join(modDir, "de-flagship.mjs"));
const { translations: deL } = await import(path.join(modDir, "de-legal.mjs"));
const { translations: esF } = await import(path.join(modDir, "es-flagship.mjs"));
const { translations: esL } = await import(path.join(modDir, "es-legal.mjs"));

const enKeys = [...new Set([...Object.keys(deF), ...Object.keys(deL), ...Object.keys(esF), ...Object.keys(esL)])];

const { LOCALE_MAPS } = await import("./locale-maps/index.mjs");

const outDir = path.join(dir, "locales");
fs.mkdirSync(outDir, { recursive: true });

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const map = LOCALE_MAPS[locale];
  const missing = enKeys.filter((k) => !map[k] || map[k] === k);
  if (missing.length) {
    console.error(`${locale}: missing/identity ${missing.length}`);
    missing.slice(0, 5).forEach((k) => console.error(" ", k.slice(0, 70)));
    process.exit(1);
  }
  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(map, null, 2) + "\n");
  console.log(`${locale}: ${enKeys.length} keys ok`);
}
