#!/usr/bin/env node
/**
 * Build tmp/fr-translations.json from cache + supplement modules.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { supplement1 } from "./fr-translations/supplement1.mjs";
import { supplement2 } from "./fr-translations/supplement2.mjs";
import { supplement3 } from "./fr-translations/supplement3.mjs";
import { supplement4 } from "./fr-translations/supplement4.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const allKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/all-unique-keys.json"), "utf8"),
);
const cachePath = path.join(root, "tmp/fr-translate-cache.json");
const cache = fs.existsSync(cachePath)
  ? JSON.parse(fs.readFileSync(cachePath, "utf8"))
  : {};

const translations = { ...cache, ...supplement1, ...supplement2, ...supplement3, ...supplement4 };

const missing = allKeys.filter((k) => !(k in translations));
if (missing.length) {
  console.error(`Missing ${missing.length} translations:`);
  for (const k of missing.slice(0, 20)) console.error(" -", k);
  fs.writeFileSync(
    path.join(root, "tmp/fr-still-missing.json"),
    JSON.stringify(missing, null, 2) + "\n",
  );
  process.exit(1);
}

fs.writeFileSync(
  path.join(root, "tmp/fr-translations.json"),
  JSON.stringify(translations, null, 2) + "\n",
);
console.log(`Wrote ${Object.keys(translations).length} translations`);
