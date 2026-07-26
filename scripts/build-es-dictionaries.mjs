#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const keysDir = path.join(root, "tmp", "dict-keys");
const glossaryPath = path.join(root, "tmp", "es-glossary.json");
const outDir = path.join(root, "src/content/pages/dictionaries/es");

const glossary = JSON.parse(fs.readFileSync(glossaryPath, "utf8"));
const idx = JSON.parse(fs.readFileSync(path.join(keysDir, "_index.json"), "utf8"));

fs.mkdirSync(outDir, { recursive: true });

let missing = 0;
for (const page of idx) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  const lines = ["/* Generated from the canonical English source. */", "export const dictionary: Record<string, string> = {"];
  for (const key of keys) {
    const val = glossary[key];
    if (val === undefined) {
      console.error("MISSING", page, key.slice(0, 80));
      missing++;
      continue;
    }
    lines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(val)},`);
  }
  lines.push("};", "");
  fs.writeFileSync(path.join(outDir, `${page}.ts`), lines.join("\n"));
}

// index.ts
fs.copyFileSync(
  path.join(root, "src/content/pages/dictionaries/ru/index.ts"),
  path.join(outDir, "index.ts"),
);

console.log(`Generated ${idx.length} pages, missing ${missing}`);
