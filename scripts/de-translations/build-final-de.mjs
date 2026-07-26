#!/usr/bin/env node
/**
 * Generate complete de page dictionaries with professional German.
 */
import fs from "node:fs";
import path from "node:path";
import { chunk1 } from "./chunk1.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const keysDir = path.join(root, "tmp/dict-keys");
const deDir = path.join(root, "src/content/pages/dictionaries/de");
const ruDir = path.join(root, "src/content/pages/dictionaries/ru");
const pages = JSON.parse(fs.readFileSync(path.join(keysDir, "_index.json"), "utf8"));

function parseDict(text) {
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// Merge all translation sources
const DE = { ...chunk1 };

// Manual pages
for (const p of ["purpose", "research"]) {
  Object.assign(DE, parseDict(fs.readFileSync(path.join(deDir, `${p}.ts`), "utf8")));
}

// Load complete translations module
const { completeTranslations } = await import("./complete-translations.mjs");
Object.assign(DE, completeTranslations);

const allKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/de-unique-keys.json"), "utf8"));
const missing = allKeys.filter((k) => !(k in DE));
if (missing.length) {
  console.error(`Missing ${missing.length} translations`);
  fs.writeFileSync(path.join(root, "tmp/de-final-missing.json"), JSON.stringify(missing, null, 2));
  process.exit(1);
}

fs.mkdirSync(deDir, { recursive: true });
for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  const lines = keys.map((k) => `  "${esc(k)}": "${esc(DE[k])}",`);
  fs.writeFileSync(
    path.join(deDir, `${page}.ts`),
    `/* Generated from the canonical English source. */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`,
  );
}

fs.copyFileSync(path.join(ruDir, "index.ts"), path.join(deDir, "index.ts"));
fs.writeFileSync(path.join(root, "tmp/de-translations.json"), JSON.stringify(DE, null, 2) + "\n");

let miss = 0;
let total = 0;
for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  total += keys.length;
  const found = parseDict(fs.readFileSync(path.join(deDir, `${page}.ts`), "utf8"));
  for (const k of keys) if (!(k in found)) miss++;
}

console.log(`Files: ${pages.length + 1} (38 pages + index.ts)`);
console.log(`Total keys: ${total}, missing: ${miss}`);
