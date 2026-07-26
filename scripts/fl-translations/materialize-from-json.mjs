#!/usr/bin/env node
/**
 * Build fr/ja/zh-cn/ar/he/ru/uk modules from locales/*.json (360 keys each).
 * Run: node scripts/fl-translations/build-locale-json-from-es.mjs first.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(dir, "locales");
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
    path.join(dir, name),
    `/** Locale module (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const file = path.join(localesDir, `${locale}.json`);
  if (!fs.existsSync(file)) {
    console.error(`Missing ${file}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const allKeys = [...new Set([...flagshipKeys, ...legalKeys])];
  const missing = allKeys.filter((k) => !data[k] || data[k] === k);
  if (missing.length) {
    console.error(`${locale}: ${missing.length} untranslated`);
    process.exit(1);
  }
  writeModule(
    `${locale}-flagship.mjs`,
    Object.fromEntries(flagshipKeys.map((k) => [k, data[k]])),
  );
  writeModule(
    `${locale}-legal.mjs`,
    Object.fromEntries(legalKeys.map((k) => [k, data[k]])),
  );
  console.log(`${locale}: ok`);
}
