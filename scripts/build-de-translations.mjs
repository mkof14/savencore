#!/usr/bin/env node
/**
 * Build tmp/de-translations.json from chunked translation modules.
 */
import fs from "node:fs";
import path from "node:path";
import { chunk1 } from "./de-translations/chunk1.mjs";
import { chunk2 } from "./de-translations/chunk2.mjs";
import { chunk3 } from "./de-translations/chunk3.mjs";
import { chunk4 } from "./de-translations/chunk4.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const allKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/de-unique-keys.json"), "utf8"),
);

const translations = { ...chunk1, ...chunk2, ...chunk3, ...chunk4 };

const missing = allKeys.filter((k) => !(k in translations));
if (missing.length) {
  console.error(`Missing ${missing.length} translations:`);
  for (const k of missing.slice(0, 20)) console.error(" -", k);
  process.exit(1);
}

const extra = Object.keys(translations).filter((k) => !allKeys.includes(k));
if (extra.length) {
  console.warn(`Extra ${extra.length} translations not in key list`);
}

fs.writeFileSync(
  path.join(root, "tmp/de-translations.json"),
  JSON.stringify(translations, null, 2) + "\n",
);
console.log(`Wrote ${Object.keys(translations).length} translations`);
