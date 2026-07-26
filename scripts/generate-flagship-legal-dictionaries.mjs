#!/usr/bin/env node
/**
 * Generate flagship + legal locale dictionaries from tmp/translations/{locale}.json
 * Keys: tmp/flagship-legal-keys/flagship.json + legal.json
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const keysDir = path.join(root, "tmp", "flagship-legal-keys");
const translationsDir = path.join(root, "tmp", "translations");
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(keysDir, "flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(keysDir, "legal.json"), "utf8"),
);

const locales = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

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
  const content = `/* Generated from the canonical English source (D-0161). */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`;
  fs.writeFileSync(path.join(outDir, `${locale}.ts`), content);
}

for (const locale of locales) {
  const file = path.join(translationsDir, `${locale}.json`);
  if (!fs.existsSync(file)) {
    console.error(`Missing ${file}`);
    process.exit(1);
  }
  const translations = JSON.parse(fs.readFileSync(file, "utf8"));
  writeDictionary(flagshipOut, flagshipKeys, translations, locale);
  writeDictionary(legalOut, legalKeys, translations, locale);
  console.log(`Wrote ${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length}`);
}

console.log("Done.");
