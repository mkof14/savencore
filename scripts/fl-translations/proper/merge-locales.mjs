#!/usr/bin/env node
/** Merge chunk modules into scripts/fl-translations/locales/{locale}.json */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(dir, "locales");
const root = path.resolve(dir, "../..");
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const allKeys = [...new Set([...flagshipKeys, ...legalKeys])];

const locales = ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

fs.mkdirSync(outDir, { recursive: true });

for (const locale of locales) {
  const mod = await import(`./data/${locale}.mjs`);
  const data = mod.translations;
  const missing = allKeys.filter((k) => !data[k] || data[k] === k);
  if (missing.length) {
    console.error(`${locale}: missing or identity ${missing.length}`);
    missing.slice(0, 8).forEach((k) => console.error(" ", k.slice(0, 70)));
    process.exit(1);
  }
  fs.writeFileSync(
    path.join(outDir, `${locale}.json`),
    JSON.stringify(data, null, 2) + "\n",
  );
  console.log(`${locale}: ${allKeys.length} keys ok`);
}
