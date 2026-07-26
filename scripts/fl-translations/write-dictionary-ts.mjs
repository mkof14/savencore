#!/usr/bin/env node
/**
 * Write src/content/{flagship,legal}/dictionaries/{locale}.ts from locale JSON (D-0161).
 * Skips es and de (already translated).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const keysDir = path.join(root, "tmp/flagship-legal-keys");
const localesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "locales");
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

const flagshipKeys = JSON.parse(fs.readFileSync(path.join(keysDir, "flagship.json"), "utf8"));
const legalKeys = JSON.parse(fs.readFileSync(path.join(keysDir, "legal.json"), "utf8"));

function escapeTsString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeDictionary(outDir, keys, translations, locale) {
  fs.mkdirSync(outDir, { recursive: true });
  const lines = keys.map((key) => {
    const value = translations[key];
    if (value === undefined) {
      throw new Error(`Missing ${locale} translation: ${key.slice(0, 80)}`);
    }
    return `  "${escapeTsString(key)}": "${escapeTsString(value)}",`;
  });
  const content = `/* Generated from the canonical English source. */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`;
  fs.writeFileSync(path.join(outDir, `${locale}.ts`), content);
}

const locales = ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

for (const locale of locales) {
  const file = path.join(localesDir, `${locale}.json`);
  if (!fs.existsSync(file)) {
    console.error(`Missing ${file}`);
    process.exit(1);
  }
  const translations = JSON.parse(fs.readFileSync(file, "utf8"));
  const missing = [...flagshipKeys, ...legalKeys].filter((k) => !translations[k] || translations[k] === k);
  if (missing.length) {
    console.error(`${locale}: ${missing.length} still identity`);
    missing.slice(0, 5).forEach((k) => console.error(" ", k.slice(0, 72)));
    process.exit(1);
  }
  writeDictionary(flagshipOut, flagshipKeys, translations, locale);
  writeDictionary(legalOut, legalKeys, translations, locale);
  console.log(`${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length}`);
}

console.log("Done.");
