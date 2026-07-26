#!/usr/bin/env node
/** Build tmp/translations/{locale}.json for flagship+legal from locale modules + page dicts. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const modDir = path.join(root, "scripts/fl-translations");
const outDir = path.join(root, "tmp/translations");
const flagshipKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"));
const legalKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"));
const allKeys = [...new Set([...flagshipKeys, ...legalKeys])];

function parseModule(name) {
  const file = path.join(modDir, name);
  if (!fs.existsSync(file)) return {};
  const text = fs.readFileSync(file, "utf8");
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function isCorrupted(value) {
  if (!value || value.includes("MYMEMORY")) return true;
  const markers = [
    "Seront publiés",
    "Las áreas",
    "herramientas",
    "lorsque se",
    "personneen",
    "Interaktion mit",
    "できますusar",
    "しないes ",
  ];
  return markers.some((m) => value.includes(m));
}

function parseLocaleJson(locale) {
  const file = path.join(root, "scripts/fl-translations/locales", `${locale}.json`);
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function parsePageDict(locale) {
  const dir = path.join(root, "src/content/pages/dictionaries", locale);
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
    let m;
    while ((m = re.exec(text))) {
      const k = JSON.parse(`"${m[1]}"`);
      const v = JSON.parse(`"${m[2]}"`);
      if (v !== k && !v.includes("MYMEMORY")) map[k] = v;
    }
  }
  return map;
}

const locales = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];
fs.mkdirSync(outDir, { recursive: true });

for (const locale of locales) {
  const hand = {
    ...parseModule(`${locale}-flagship.mjs`),
    ...parseModule(`${locale}-legal.mjs`),
  };
  const localeJson = parseLocaleJson(locale);
  const pages = parsePageDict(locale);
  const out = {};
  const missing = [];
  for (const key of allKeys) {
    if (hand[key] && hand[key] !== key && !isCorrupted(hand[key])) {
      out[key] = hand[key];
    } else if (localeJson[key] && localeJson[key] !== key && !isCorrupted(localeJson[key])) {
      out[key] = localeJson[key];
    } else if (pages[key] && pages[key] !== key) {
      out[key] = pages[key];
    } else {
      out[key] = key;
      missing.push(key);
    }
  }
  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  const id = Object.entries(out).filter(([k, v]) => v === k).length;
  console.log(`${locale}: wrote ${allKeys.length}, identity ${id}, missing from modules ${missing.length}`);
}
