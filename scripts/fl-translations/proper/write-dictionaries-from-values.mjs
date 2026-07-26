#!/usr/bin/env node
/** Apply value-level maps and write dictionary TS files. D-0161 */
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

const mapsPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "value-translations.json");
if (!fs.existsSync(mapsPath)) {
  console.error("Missing value-translations.json — run generate-value-translations.mjs first");
  process.exit(1);
}
const maps = JSON.parse(fs.readFileSync(mapsPath, "utf8"));

function apply(source, valueMap) {
  const out = {};
  for (const k of enKeys) out[k] = valueMap[source[k]] ?? source[k];
  return out;
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function writeDict(dir, keys, m, loc) {
  fs.mkdirSync(dir, { recursive: true });
  const lines = keys.map((k) => `  "${escapeTs(k)}": "${escapeTs(m[k])}",`);
  fs.writeFileSync(
    path.join(dir, `${loc}.ts`),
    `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`,
  );
}

const locales = {
  fr: apply(es, maps.esToFr),
  ja: apply(es, maps.esToJa),
  "zh-cn": apply(es, maps.esToZhCn),
  ar: apply(es, maps.esToAr),
  he: apply(es, maps.esToHe),
  ru: apply(de, maps.deToRu),
  uk: apply(de, maps.deToUk),
};

for (const [loc, m] of Object.entries(locales)) {
  writeDict(flagshipOut, flagshipKeys, m, loc);
  writeDict(legalOut, legalKeys, m, loc);
  const esLk = Object.values(m).filter((v) => /[áéíóúñ¿¡]/.test(v)).length;
  const deLk = Object.values(m).filter((v) => /[äöüßÄÖÜ]| und | der | die | das | nicht /.test(v)).length;
  console.log(`${loc}: es=${esLk} de=${deLk} In Development=${m["In Development"]} Privacy=${m["Privacy Policy"]}`);
}
