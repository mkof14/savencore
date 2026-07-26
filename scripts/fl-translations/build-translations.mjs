#!/usr/bin/env node
/**
 * Build tmp/translations/{locale}.json from flagship + legal locale modules.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const keysDir = path.join(root, "tmp/flagship-legal-keys");
const outDir = path.join(root, "tmp/translations");
const modDir = path.dirname(fileURLToPath(import.meta.url));

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
  const flagshipMod = await import(`./${locale}-flagship.mjs`).catch(() => null);
  const legalMod = await import(`./${locale}-legal.mjs`).catch(() => null);
  const flagship = flagshipMod?.translations ?? {};
  const legal = legalMod?.translations ?? {};
  const pageDict = loadPageDict(locale);
  const out = {};
  const missing = [];

  for (const key of allKeys) {
    if (flagshipKeys.includes(key) && flagship[key]) out[key] = flagship[key];
    else if (legalKeys.includes(key) && legal[key]) out[key] = legal[key];
    else if (pageDict[key] && pageDict[key] !== key) out[key] = pageDict[key];
    else {
      out[key] = key;
      missing.push(key);
    }
  }

  if (missing.length) {
    console.warn(`${locale}: skipped — missing ${missing.length} translations`);
    continue;
  }

  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  console.log(`${locale}: ok (${allKeys.length})`);
}
