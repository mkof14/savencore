#!/usr/bin/env node
/**
 * Extract EN dictionary keys from an existing locale folder (default: ru)
 * and write JSON key lists per page for translation pipelines.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const sourceLocale = process.argv[2] || "ru";
const outDir = path.join(root, "tmp", "dict-keys");
const sourceDir = path.join(root, "src/content/pages/dictionaries", sourceLocale);

fs.mkdirSync(outDir, { recursive: true });

const files = fs
  .readdirSync(sourceDir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts");

const all = {};

for (const file of files) {
  const text = fs.readFileSync(path.join(sourceDir, file), "utf8");
  const keys = [];
  const re = /"((?:\\.|[^"\\])*)"\s*:/g;
  let m;
  while ((m = re.exec(text))) {
    keys.push(JSON.parse(`"${m[1]}"`));
  }
  const page = file.replace(/\.ts$/, "");
  all[page] = keys;
  fs.writeFileSync(
    path.join(outDir, `${page}.json`),
    JSON.stringify(keys, null, 2) + "\n",
  );
}

fs.writeFileSync(path.join(outDir, "_index.json"), JSON.stringify(Object.keys(all), null, 2) + "\n");
console.log(`Extracted ${files.length} pages → ${outDir}`);
console.log(
  "Total keys:",
  Object.values(all).reduce((n, k) => n + k.length, 0),
);
