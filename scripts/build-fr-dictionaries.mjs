#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const keysDir = path.join(root, "tmp/dict-keys");
const translationsPath = path.join(root, "tmp/fr-translations.json");
const outDir = path.join(root, "src/content/pages/dictionaries/fr");

const translations = JSON.parse(fs.readFileSync(translationsPath, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

function escapeKey(key) {
  return key.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const pages = fs
  .readdirSync(keysDir)
  .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
  .map((f) => f.replace(/\.json$/, ""));

let missingKeys = 0;
let totalKeys = 0;

for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  const lines = ["/* Generated from the canonical English source. */", "export const dictionary: Record<string, string> = {"];

  for (const key of keys) {
    totalKeys++;
    const value = translations[key];
    if (value === undefined) {
      missingKeys++;
      console.error(`Missing translation for key in ${page}: ${JSON.stringify(key)}`);
      continue;
    }
    lines.push(`  "${escapeKey(key)}": "${escapeKey(value)}",`);
  }

  lines.push("};", "");
  fs.writeFileSync(path.join(outDir, `${page}.ts`), lines.join("\n"));
}

fs.copyFileSync(
  path.join(root, "src/content/pages/dictionaries/ru/index.ts"),
  path.join(outDir, "index.ts"),
);

console.log(`Generated ${pages.length} pages + index.ts`);
console.log(`Total keys: ${totalKeys}`);
console.log(`Missing keys: ${missingKeys}`);
