#!/usr/bin/env node
/**
 * Regenerate *-legal.mjs from es-legal + locale override maps in ./legal-locale-maps/
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as esLegal } from "./es-legal.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const mapsDir = path.join(dir, "legal-locale-maps");
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(dir, "../../tmp/legal-keys/all.json"), "utf8"),
);

function writeModule(locale, obj) {
  const lines = legalKeys.map((k) => {
    const v = obj[k];
    if (!v || v === k) throw new Error(`${locale} missing: ${k.slice(0, 60)}`);
    return `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`;
  });
  fs.writeFileSync(
    path.join(dir, `${locale}-legal.mjs`),
    `/** Legal draft translations (${locale}, D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const mapFile = path.join(mapsDir, `${locale}.json`);
  if (!fs.existsSync(mapFile)) {
    console.error(`Missing ${mapFile}`);
    process.exit(1);
  }
  const map = JSON.parse(fs.readFileSync(mapFile, "utf8"));
  const out = {};
  for (const key of legalKeys) {
    out[key] = map[key] ?? esLegal[key];
    if (!out[key] || out[key] === key) {
      console.error(`${locale} untranslated: ${key.slice(0, 70)}`);
      process.exit(1);
    }
  }
  writeModule(locale, out);
  console.log(`${locale}-legal.mjs ok (${legalKeys.length})`);
}
