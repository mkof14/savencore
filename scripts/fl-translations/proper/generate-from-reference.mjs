#!/usr/bin/env node
/**
 * Generate locale map modules + dictionary TS from de/es reference (D-0161).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const modDir = path.join(root, "scripts/fl-translations");
const mapsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "locale-maps");
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

const { translations: deF } = await import(path.join(modDir, "de-flagship.mjs"));
const { translations: deL } = await import(path.join(modDir, "de-legal.mjs"));
const { translations: esF } = await import(path.join(modDir, "es-flagship.mjs"));
const { translations: esL } = await import(path.join(modDir, "es-legal.mjs"));

const { LOCALE } = await import("./locale-translations.mjs");

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeDictionary(outDir, keys, map, locale) {
  fs.mkdirSync(outDir, { recursive: true });
  const lines = keys.map((k) => {
    const v = map[k];
    if (!v || v === k) throw new Error(`${locale} missing: ${k.slice(0, 60)}`);
    return `  "${escapeTs(k)}": "${escapeTs(v)}",`;
  });
  fs.writeFileSync(
    path.join(outDir, `${locale}.ts`),
    `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`,
  );
}

function writeMapFile(name, map) {
  const lines = Object.entries(map).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`);
  fs.writeFileSync(path.join(mapsDir, name), `/** D-0161 */\nexport const map = {\n${lines.join("\n")}\n};\n`);
}

fs.mkdirSync(mapsDir, { recursive: true });

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const data = LOCALE[locale];
  const allKeys = [...new Set([...flagshipKeys, ...legalKeys])];
  const missing = allKeys.filter((k) => !data[k] || data[k] === k);
  if (missing.length) {
    console.error(`${locale}: identity/missing ${missing.length}`);
    missing.slice(0, 8).forEach((k) => console.error(" ", k.slice(0, 70)));
    process.exit(1);
  }
  writeMapFile(`${locale}.mjs`, data);
  writeDictionary(flagshipOut, flagshipKeys, data, locale);
  writeDictionary(legalOut, legalKeys, data, locale);
  console.log(`${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length}`);
}

console.log("Done.");
