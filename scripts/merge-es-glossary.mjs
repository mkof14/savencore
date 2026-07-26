#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const glossary = {};

// From existing es page files
const idx = JSON.parse(fs.readFileSync(path.join(root, "tmp/dict-keys/_index.json"), "utf8"));
for (const p of idx) {
  const fp = path.join(root, "src/content/pages/dictionaries/es", p + ".ts");
  if (!fs.existsSync(fp)) continue;
  const text = fs.readFileSync(fp, "utf8");
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    const k = JSON.parse(`"${m[1]}"`);
    const v = JSON.parse(`"${m[2]}"`);
    if (k !== v) glossary[k] = v;
  }
}

// From translation chunk files
for (let i = 0; i < 20; i++) {
  const fp = path.join(root, "tmp", `es-translations-${i}.json`);
  if (!fs.existsSync(fp)) continue;
  Object.assign(glossary, JSON.parse(fs.readFileSync(fp, "utf8")));
}

fs.writeFileSync(path.join(root, "tmp/es-glossary.json"), JSON.stringify(glossary, null, 2) + "\n");
console.log("Glossary entries:", Object.keys(glossary).length);
