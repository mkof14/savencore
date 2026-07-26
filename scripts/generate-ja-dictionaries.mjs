#!/usr/bin/env node
/**
 * Generate ja page dictionaries from scripts/ja-translation-map.mjs and tmp/dict-keys/*.json
 */
import fs from "node:fs";
import path from "node:path";
import { jaTranslations } from "./ja-translation-map.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const keysDir = path.join(root, "tmp", "dict-keys");
const outDir = path.join(root, "src/content/pages/dictionaries/ja");
const translationsPath = path.join(root, "tmp", "ja-translations.json");

const translations = jaTranslations;
fs.writeFileSync(translationsPath, JSON.stringify(translations, null, 2) + "\n");
const pages = JSON.parse(fs.readFileSync(path.join(keysDir, "_index.json"), "utf8"));

function escapeTsString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writePage(page, keys) {
  const lines = keys.map((key) => {
    const value = translations[key];
    if (value === undefined) {
      throw new Error(`Missing translation for key in ${page}: ${key}`);
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

let missing = 0;
for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  for (const key of keys) {
    if (translations[key] === undefined) missing++;
  }
  writePage(page, keys);
}

console.log(`Generated ${pages.length} pages → ${outDir}`);
console.log(`Translation entries: ${Object.keys(translations).length}`);
console.log(`Missing keys: ${missing}`);
