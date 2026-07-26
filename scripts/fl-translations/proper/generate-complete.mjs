#!/usr/bin/env node
/**
 * Generate complete locale dictionaries from de/es modules with full EN-key maps.
 * D-0161 — writes scripts/fl-translations/locales/*.json and manual-all.mjs
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

const de = { ...deF, ...deL };
const es = { ...esF, ...esL };
const enKeys = Object.keys(de);

const { LOCALE_MAPS } = await import("./locale-maps.mjs");

const outDir = path.join(dir, "locales");
const dataDir = path.join(dir, "data");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

const manualAll = {};

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const map = LOCALE_MAPS[locale];
  const out = {};
  const missing = [];
  for (const key of enKeys) {
    if (map[key]) out[key] = map[key];
    else {
      out[key] = key;
      missing.push(key);
    }
  }
  if (missing.length) {
    console.error(`${locale}: missing ${missing.length} keys`);
    missing.slice(0, 5).forEach((k) => console.error(" ", k.slice(0, 70)));
    process.exit(1);
  }
  manualAll[locale] = out;
  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  fs.writeFileSync(
    path.join(dataDir, `${locale}.mjs`),
    `/** Complete locale dictionary (D-0161). */\nexport const translations = ${JSON.stringify(out, null, 2)};\n`,
  );
  const id = enKeys.filter((k) => out[k] === k).length;
  console.log(`${locale}: ${enKeys.length} keys, identity=${id}`);
}

const manualLines = Object.entries(manualAll).map(([loc, map]) => {
  const entries = Object.entries(map).map(([k, v]) => `    ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n");
  return `  ${JSON.stringify(loc)}: {\n${entries}\n  },`;
});

fs.writeFileSync(
  path.join(dir, "manual-all.mjs"),
  `/** Complete EN-key manual overrides (D-0161). */\nexport const MANUAL_ALL = {\n${manualLines.join("\n")}\n};\n`,
);

console.log("Wrote manual-all.mjs");
