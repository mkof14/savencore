#!/usr/bin/env node
/**
 * Seed locales/*.json from es + de JSON, applying per-locale maps in maps/*.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(dir, "locales");
const es = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/translations/es.json"), "utf8"),
);
const de = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/translations/de.json"), "utf8"),
);
const allKeys = Object.keys(es);

const localeMaps = {
  fr: (await import("./maps/fr.mjs")).map,
  ja: (await import("./maps/ja.mjs")).map,
  "zh-cn": (await import("./maps/zh-cn.mjs")).map,
  ar: (await import("./maps/ar.mjs")).map,
  he: (await import("./maps/he.mjs")).map,
  ru: (await import("./maps/ru.mjs")).map,
  uk: (await import("./maps/uk.mjs")).map,
};

fs.mkdirSync(outDir, { recursive: true });

for (const [locale, map] of Object.entries(localeMaps)) {
  const out = {};
  let missing = 0;
  for (const key of allKeys) {
    if (map[key]) out[key] = map[key];
    else if (locale === "fr" && de[key] && de[key] !== key) out[key] = de[key]; // fallback never for fr
    else {
      out[key] = key;
      missing++;
    }
  }
  if (missing) {
    console.error(`${locale}: missing ${missing} map entries`);
    process.exit(1);
  }
  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  console.log(`${locale}: wrote ${allKeys.length} entries`);
}
