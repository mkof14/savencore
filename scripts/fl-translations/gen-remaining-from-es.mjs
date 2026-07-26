#!/usr/bin/env node
/**
 * Generate fr/ja/zh-cn/ar/he/ru/uk modules from es + locale override maps in ./locales/
 * Each ./locales/{locale}.json is a full Record<enKey, translatedValue> for 360 keys.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const outDir = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(outDir, "locales");
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
    `/** Locale module (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

if (!fs.existsSync(localesDir)) {
  console.error("Missing scripts/fl-translations/locales/ — add {locale}.json files");
  process.exit(1);
}

for (const file of fs.readdirSync(localesDir).filter((f) => f.endsWith(".json"))) {
  const locale = file.replace(/\.json$/, "");
  const data = JSON.parse(fs.readFileSync(path.join(localesDir, file), "utf8"));
  const allKeys = [...new Set([...flagshipKeys, ...legalKeys])];
  const missing = allKeys.filter((k) => !data[k]);
  if (missing.length) {
    console.error(`${locale}: missing ${missing.length} keys in locales/${file}`);
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
  console.log(`${locale}: generated`);
}
