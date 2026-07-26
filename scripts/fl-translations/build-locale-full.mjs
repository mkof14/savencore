#!/usr/bin/env node
/**
 * Build scripts/fl-translations/locale-full.json from es modules + per-locale overrides.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as esFlagship } from "./es-flagship.mjs";
import { translations as esLegal } from "./es-legal.mjs";
import { overrides as deOverrides } from "./overrides/de.mjs";
import { overrides as frOverrides } from "./overrides/fr.mjs";
import { overrides as jaOverrides } from "./overrides/ja.mjs";
import { overrides as zhCnOverrides } from "./overrides/zh-cn.mjs";
import { overrides as arOverrides } from "./overrides/ar.mjs";
import { overrides as heOverrides } from "./overrides/he.mjs";
import { overrides as ruOverrides } from "./overrides/ru.mjs";
import { overrides as ukOverrides } from "./overrides/uk.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "locale-full.json");
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const allKeys = [...new Set([...flagshipKeys, ...legalKeys])];

function loadPageDict(locale) {
  const dir = path.join(root, "src/content/pages/dictionaries", locale);
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
    let m;
    while ((m = re.exec(text))) {
      map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
    }
  }
  return map;
}

function buildLocale(locale, overrides) {
  const pageDict = loadPageDict(locale);
  const out = {};
  const missing = [];
  for (const key of allKeys) {
    if (overrides[key]) out[key] = overrides[key];
    else if (pageDict[key] && pageDict[key] !== key) out[key] = pageDict[key];
    else {
      missing.push(key);
      out[key] = key;
    }
  }
  if (missing.length) {
    console.error(`${locale}: ${missing.length} keys still missing from overrides`);
    missing.slice(0, 5).forEach((k) => console.error(" ", k.slice(0, 72)));
    process.exit(1);
  }
  return out;
}

const es = { ...esFlagship, ...esLegal };
const full = {
  es,
  de: buildLocale("de", deOverrides),
  fr: buildLocale("fr", frOverrides),
  ja: buildLocale("ja", jaOverrides),
  "zh-cn": buildLocale("zh-cn", zhCnOverrides),
  ar: buildLocale("ar", arOverrides),
  he: buildLocale("he", heOverrides),
  ru: buildLocale("ru", ruOverrides),
  uk: buildLocale("uk", ukOverrides),
};

fs.writeFileSync(outPath, JSON.stringify(full, null, 2) + "\n");
console.log("Wrote locale-full.json for", Object.keys(full).length, "locales,", allKeys.length, "keys each");
