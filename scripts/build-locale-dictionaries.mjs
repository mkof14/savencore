#!/usr/bin/env node
/**
 * Build locale dictionary TS files from tmp/dict-keys/*.json + translations map.
 * Usage: node scripts/build-locale-dictionaries.mjs zh-cn tmp/zh-cn-translations.json
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const locale = process.argv[2];
const translationsPath = process.argv[3];

if (!locale || !translationsPath) {
  console.error("Usage: node scripts/build-locale-dictionaries.mjs <locale> <translations.json>");
  process.exit(1);
}

const keysDir = path.join(root, "tmp", "dict-keys");
const outDir = path.join(root, "src/content/pages/dictionaries", locale);
const translations = JSON.parse(fs.readFileSync(path.join(root, translationsPath), "utf8"));

fs.mkdirSync(outDir, { recursive: true });

function escapeTs(key) {
  return key.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function buildTs(entries) {
  const lines = entries.map(([k, v]) => `  "${escapeTs(k)}": "${escapeTs(v)}",`);
  return `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`;
}

const pages = fs
  .readdirSync(keysDir)
  .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
  .map((f) => f.replace(/\.json$/, ""));

let totalKeys = 0;
let missingKeys = 0;
const missingList = [];

for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  const entries = [];
  for (const key of keys) {
    totalKeys++;
    const value = translations[key];
    if (value === undefined) {
      missingKeys++;
      missingList.push({ page, key });
      entries.push([key, key]);
    } else {
      entries.push([key, value]);
    }
  }
  fs.writeFileSync(path.join(outDir, `${page}.ts`), buildTs(entries));
}

// Copy index.ts from ru if missing
const indexSrc = path.join(root, "src/content/pages/dictionaries/ru/index.ts");
const indexDst = path.join(outDir, "index.ts");
if (!fs.existsSync(indexDst)) {
  fs.copyFileSync(indexSrc, indexDst);
}

console.log(`Built ${pages.length} pages → ${outDir}`);
console.log(`Total keys: ${totalKeys}`);
console.log(`Missing translations: ${missingKeys}`);
if (missingList.length > 0 && missingList.length <= 20) {
  for (const { page, key } of missingList) {
    console.log(`  [${page}] ${key.slice(0, 80)}`);
  }
} else if (missingList.length > 20) {
  fs.writeFileSync(
    path.join(root, "tmp", `${locale}-missing.json`),
    JSON.stringify(missingList, null, 2) + "\n",
  );
  console.log(`Missing list written to tmp/${locale}-missing.json`);
}
