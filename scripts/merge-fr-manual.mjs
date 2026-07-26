#!/usr/bin/env node
/** Build FR manual overrides from professional EN->FR translations (D-0161). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const identity = JSON.parse(fs.readFileSync(path.join(root, "tmp/fr-embedded-identity.json"), "utf8"));

function parseDict(text) {
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

// Load RU for semantic reference when building FR
const ru = {};
for (const f of fs.readdirSync(path.join(root, "src/content/pages/dictionaries/ru")).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
  Object.assign(ru, parseDict(fs.readFileSync(path.join(root, "src/content/pages/dictionaries/ru", f), "utf8")));
}

// Complete professional FR translations for all identity keys
const { MANUAL_FR } = await import("./remaining-translations/fr-manual-fr.mjs");

const out = {};
for (const key of identity) {
  if (MANUAL_FR[key]) {
    out[key] = MANUAL_FR[key];
  } else {
    console.error("Missing manual FR:", key.slice(0, 80));
    process.exit(1);
  }
}

const embedded = JSON.parse(fs.readFileSync(path.join(root, "scripts/remaining-translations/fr-embedded.json"), "utf8"));
Object.assign(embedded, out);
fs.writeFileSync(
  path.join(root, "scripts/remaining-translations/fr-embedded.json"),
  JSON.stringify(embedded, null, 2) + "\n",
);
console.log(`Merged ${Object.keys(out).length} manual FR overrides`);
