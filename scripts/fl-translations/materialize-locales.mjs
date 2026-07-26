#!/usr/bin/env node
/**
 * Materialize *-flagship.mjs and *-legal.mjs for all non-EN locales from locale-full.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const outDir = path.dirname(fileURLToPath(import.meta.url));
const fullPath = path.join(outDir, "locale-full.json");

if (!fs.existsSync(fullPath)) {
  console.error("Missing locale-full.json — run node scripts/fl-translations/build-locale-full.mjs first");
  process.exit(1);
}

const full = JSON.parse(fs.readFileSync(fullPath, "utf8"));
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(outDir, name),
    `/** Locale module (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const locale of ["de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const data = full[locale];
  if (!data) {
    console.error(`Missing locale ${locale} in locale-full.json`);
    process.exit(1);
  }
  const flagship = Object.fromEntries(flagshipKeys.map((k) => [k, data[k]]));
  const legal = Object.fromEntries(legalKeys.map((k) => [k, data[k]]));
  const missing = [...flagshipKeys, ...legalKeys].filter((k) => !data[k]);
  if (missing.length) {
    console.error(`${locale}: missing ${missing.length} in locale-full.json`);
    process.exit(1);
  }
  writeModule(`${locale}-flagship.mjs`, flagship);
  writeModule(`${locale}-legal.mjs`, legal);
  console.log(`${locale}: materialized`);
}
