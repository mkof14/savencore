#!/usr/bin/env node
/**
 * Generate flagship + legal locale modules for de/fr/ja/zh-cn/ar/he/ru/uk.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LOCALE_DATA } from "./locale-data.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const outDir = path.dirname(fileURLToPath(import.meta.url));
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(outDir, name),
    `/** Auto-generated locale module (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const locale of ["de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const data = LOCALE_DATA[locale];
  if (!data) throw new Error(`Missing LOCALE_DATA for ${locale}`);

  const flagship = {};
  const legal = {};
  const missing = [];

  for (const key of flagshipKeys) {
    if (data[key]) flagship[key] = data[key];
    else missing.push(`flagship:${key}`);
  }
  for (const key of legalKeys) {
    if (data[key]) legal[key] = data[key];
    else missing.push(`legal:${key}`);
  }

  if (missing.length) {
    console.error(`${locale}: missing ${missing.length}`);
    missing.slice(0, 5).forEach((m) => console.error(" ", m.slice(0, 80)));
    process.exit(1);
  }

  writeModule(`${locale}-flagship.mjs`, flagship);
  writeModule(`${locale}-legal.mjs`, legal);
  console.log(`${locale}: ok`);
}
