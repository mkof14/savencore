#!/usr/bin/env node
/**
 * Generate de page dictionaries from tmp/dict-keys + tmp/de-translations.json
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const keysDir = path.join(root, "tmp", "dict-keys");
const outDir = path.join(root, "src/content/pages/dictionaries/de");
const translationsPath = path.join(root, "tmp", "de-translations.json");

const translations = JSON.parse(fs.readFileSync(translationsPath, "utf8"));
const pages = JSON.parse(fs.readFileSync(path.join(keysDir, "_index.json"), "utf8"));

function escapeTsString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writePage(page, keys) {
  const lines = keys.map((key) => {
    const value = translations[key];
    if (value === undefined) {
      throw new Error(`Missing translation for key in ${page}: ${key.slice(0, 80)}`);
    }
    return `  "${escapeTsString(key)}": "${escapeTsString(value)}",`;
  });
  const content = `/* Generated from the canonical English source. */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`;
  fs.writeFileSync(path.join(outDir, `${page}.ts`), content);
}

fs.mkdirSync(outDir, { recursive: true });

for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  writePage(page, keys);
}

// Copy index.ts from ru
fs.copyFileSync(
  path.join(root, "src/content/pages/dictionaries/ru/index.ts"),
  path.join(outDir, "index.ts"),
);

let missing = 0;
let total = 0;
for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  total += keys.length;
  for (const key of keys) {
    if (!(key in translations)) missing++;
  }
}

console.log(`Generated ${pages.length} pages + index.ts`);
console.log(`Total keys: ${total}, missing translations: ${missing}`);
