#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const keysDir = path.join(root, "tmp/flagship-legal-keys");
const outDir = path.join(root, "tmp/translations");

const flagshipKeys = JSON.parse(fs.readFileSync(path.join(keysDir, "flagship.json"), "utf8"));
const legalKeys = JSON.parse(fs.readFileSync(path.join(keysDir, "legal.json"), "utf8"));
const allKeys = [...new Set([...flagshipKeys, ...legalKeys])];

const locales = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

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

fs.mkdirSync(outDir, { recursive: true });

for (const locale of locales) {
  const mod = await import(`./${locale}.mjs`);
  const hand = mod.translations;
  const pageDict = loadPageDict(locale);
  const out = {};
  const missing = [];
  for (const key of allKeys) {
    if (hand[key]) out[key] = hand[key];
    else if (pageDict[key] && pageDict[key] !== key) out[key] = pageDict[key];
    else {
      out[key] = key;
      missing.push(key);
    }
  }
  if (missing.length) {
    console.error(`${locale}: missing ${missing.length} translations`);
    for (const k of missing.slice(0, 5)) console.error("  -", k.slice(0, 70));
    process.exit(1);
  }
  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  console.log(`${locale}: ${allKeys.length} translations`);
}
