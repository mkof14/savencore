#!/usr/bin/env node
/**
 * Build tmp/translations/{locale}.json from embedded row data + page dictionary reuse.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const keysDir = path.join(root, "tmp", "flagship-legal-keys");
const outDir = path.join(root, "tmp", "translations");

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(keysDir, "flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(keysDir, "legal.json"), "utf8"),
);
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

function loadEmbedded() {
  const mod = await import("./flagship-legal-translation-rows.mjs");
  return mod.TRANSLATION_ROWS;
}

const rows = (await loadEmbedded()).rows;
const rowMap = new Map(rows.map((r) => [r.en, r]));

fs.mkdirSync(outDir, { recursive: true });

for (const locale of locales) {
  const pageDict = loadPageDict(locale);
  const out = {};
  let missing = 0;
  for (const key of allKeys) {
    const fromPage = pageDict[key];
    if (fromPage && fromPage !== key) {
      out[key] = fromPage;
      continue;
    }
    const row = rowMap.get(key);
    if (row?.[locale]) {
      out[key] = row[locale];
      continue;
    }
    out[key] = key;
    missing++;
  }
  fs.writeFileSync(
    path.join(outDir, `${locale}.json`),
    JSON.stringify(out, null, 2) + "\n",
  );
  console.log(`${locale}: ${allKeys.length - missing}/${allKeys.length} translated, ${missing} fallback`);
}
