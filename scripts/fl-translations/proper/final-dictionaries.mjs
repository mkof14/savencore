#!/usr/bin/env node
/**
 * Write dictionary TS from de (ru/uk) and es (fr/ja/zh-cn/ar/he) with multi-pass phrase rules.
 * D-0161
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const modDir = path.join(root, "scripts/fl-translations");
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");
const flagshipKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"));
const legalKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"));
const enKeys = [...new Set([...flagshipKeys, ...legalKeys])];

const { translations: deF } = await import(path.join(modDir, "de-flagship.mjs"));
const { translations: deL } = await import(path.join(modDir, "de-legal.mjs"));
const { translations: esF } = await import(path.join(modDir, "es-flagship.mjs"));
const { translations: esL } = await import(path.join(modDir, "es-legal.mjs"));
const de = { ...deF, ...deL };
const es = { ...esF, ...esL };

const { RULES } = await import("./translation-rules.mjs");
const { OVERRIDES } = await import("./key-overrides.mjs");

const KEEP = [
  "SAVEN Core", "SAVEN Robotics Lab", "SAVEN Robotics Interface", "Internal Future Lab",
  "Intelligence for the Physical World", "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA", "WCAG 2.2 Level AA", "Layer-2", "HMI", "IRR", "ROI", "TBD", "security@",
  "Robotics Lab", "Robotics Interface", "Future Lab",
];

function keepBrands(t) {
  let o = t;
  for (const b of KEEP) o = o.split(b).join(`\0${b}\0`);
  return o;
}
function restore(t) {
  return t.replace(/\0/g, "");
}
function applyRules(text, rules, passes = 4) {
  let o = keepBrands(text);
  for (let p = 0; p < passes; p++) {
    for (const [a, b] of rules) o = o.split(a).join(b);
  }
  return restore(o);
}

function translateLocale(source, ruleKey, locale) {
  const rules = RULES[ruleKey];
  const out = {};
  for (const key of enKeys) {
    if (OVERRIDES[locale]?.[key]) out[key] = OVERRIDES[locale][key];
    else out[key] = applyRules(source[key], rules);
  }
  return out;
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function writeDict(outDir, keys, map, locale) {
  fs.mkdirSync(outDir, { recursive: true });
  const lines = keys.map((k) => `  "${escapeTs(k)}": "${escapeTs(map[k])}",`);
  fs.writeFileSync(
    path.join(outDir, `${locale}.ts`),
    `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`,
  );
}

const locales = {
  fr: translateLocale(es, "esFr", "fr"),
  ja: translateLocale(es, "esJa", "ja"),
  "zh-cn": translateLocale(es, "esZhCn", "zh-cn"),
  ar: translateLocale(es, "esAr", "ar"),
  he: translateLocale(es, "esHe", "he"),
  ru: translateLocale(de, "deRu", "ru"),
  uk: translateLocale(de, "deUk", "uk"),
};

for (const [loc, map] of Object.entries(locales)) {
  writeDict(flagshipOut, flagshipKeys, map, loc);
  writeDict(legalOut, legalKeys, map, loc);
  const esLeak = Object.values(map).filter((v) => /[áéíóúñ¿¡]/.test(v)).length;
  const deLeak = Object.values(map).filter((v) => /[äöüßÄÖÜ]|ung\.|keit\.| werden | nicht | und | der | die | das /.test(v)).length;
  console.log(`${loc}: es=${esLeak} de=${deLeak} In Development=${map["In Development"]} Privacy=${map["Privacy Policy"]}`);
}
