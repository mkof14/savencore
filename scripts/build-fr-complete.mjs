#!/usr/bin/env node
/**
 * Merge all FR translation sources and materialize page + FL dictionaries.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseDictFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function parseDictDir(locale) {
  const dir = path.join(root, "src/content/pages/dictionaries", locale);
  const map = {};
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    Object.assign(map, parseDictFile(path.join(dir, f)));
  }
  return map;
}

function escapeKey(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writePageDict(outDir, page, keys, translations) {
  const lines = ["/* Generated from the canonical English source. */", "export const dictionary: Record<string, string> = {"];
  for (const key of keys) {
    const value = translations[key];
    if (!value || value === key) throw new Error(`Missing FR for ${page}: ${JSON.stringify(key)}`);
    lines.push(`  "${escapeKey(key)}": "${escapeKey(value)}",`);
  }
  lines.push("};", "");
  fs.writeFileSync(path.join(outDir, `${page}.ts`), lines.join("\n"));
}

function writeFlDict(outDir, keys, translations, locale) {
  const lines = keys.map((key) => {
    const value = translations[key];
    if (!value || value === key) throw new Error(`Missing ${locale} for ${JSON.stringify(key)}`);
    return `  "${escapeKey(key)}": "${escapeKey(value)}",`;
  });
  const content = `/* Generated from the canonical English source (D-0161). */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`;
  fs.writeFileSync(path.join(outDir, `${locale}.ts`), content);
}

async function loadAllFr() {
  const s1 = (await import("./fr-translations/supplement1.mjs")).supplement1;
  const s2 = (await import("./fr-translations/supplement2.mjs")).supplement2;
  const s3 = (await import("./fr-translations/supplement3.mjs")).supplement3;
  const s4 = (await import("./fr-translations/supplement4.mjs")).supplement4;
  const s5 = (await import("./fr-translations/supplement5.mjs")).supplement5;
  const merged = {};
  for (const [k, v] of Object.entries({ ...s1, ...s2, ...s3, ...s4, ...s5, ...parseDictDir("fr") })) {
    if (v && v !== k && !v.includes("MYMEMORY")) merged[k] = v;
  }
  return merged;
}

async function loadFl(locale) {
  const modDir = path.join(root, "scripts/fl-translations");
  const flagship = fs.existsSync(path.join(modDir, `${locale}-flagship.mjs`))
    ? parseDictFile(path.join(modDir, `${locale}-flagship.mjs`))
    : {};
  const legal = fs.existsSync(path.join(modDir, `${locale}-legal.mjs`))
    ? parseDictFile(path.join(modDir, `${locale}-legal.mjs`))
    : {};
  return { ...flagship, ...legal };
}

const fr = await loadAllFr();
const allPageKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/all-unique-keys.json"), "utf8"));
const missingPage = allPageKeys.filter((k) => !fr[k] || fr[k] === k);
if (missingPage.length) {
  console.error(`FR pages missing ${missingPage.length} keys`);
  missingPage.slice(0, 10).forEach((k) => console.error(" -", k));
  process.exit(1);
}

fs.writeFileSync(path.join(root, "tmp/fr-translations.json"), JSON.stringify(fr, null, 2) + "\n");

const keysDir = path.join(root, "tmp/dict-keys");
const frOut = path.join(root, "src/content/pages/dictionaries/fr");
const pages = fs.readdirSync(keysDir).filter((f) => f.endsWith(".json") && f !== "_index.json").map((f) => f.replace(/\.json$/, ""));
for (const page of pages) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  writePageDict(frOut, page, keys, fr);
}
console.log(`FR pages: ${pages.length} files, ${allPageKeys.length} keys`);

const flagshipKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"));
const legalKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"));
const flLocales = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

for (const locale of flLocales) {
  const fl = await loadFl(locale);
  const allFlKeys = [...new Set([...flagshipKeys, ...legalKeys])];
  const missing = allFlKeys.filter((k) => !fl[k] || fl[k] === k);
  if (missing.length) {
    console.error(`${locale} FL missing ${missing.length}`);
    missing.slice(0, 5).forEach((k) => console.error(" -", k));
    process.exit(1);
  }
  writeFlDict(path.join(root, "src/content/flagship/dictionaries"), flagshipKeys, fl, locale);
  writeFlDict(path.join(root, "src/content/legal/dictionaries"), legalKeys, fl, locale);
  console.log(`${locale} FL: ok`);
}

console.log("Done.");
