#!/usr/bin/env node
/**
 * Build value-level translation maps (es/de → target) and write dictionary TS files.
 * D-0161
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const modDir = path.join(root, "scripts/fl-translations");
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

const { translations: deF } = await import(path.join(modDir, "de-flagship.mjs"));
const { translations: deL } = await import(path.join(modDir, "de-legal.mjs"));
const { translations: esF } = await import(path.join(modDir, "es-flagship.mjs"));
const { translations: esL } = await import(path.join(modDir, "es-legal.mjs"));

const de = { ...deF, ...deL };
const es = { ...esF, ...esL };
const enKeys = [...new Set([...flagshipKeys, ...legalKeys])];

const { VALUE_MAPS } = await import("./value-maps.mjs");

function mapValues(source, valueMap) {
  const out = {};
  for (const key of enKeys) {
    const src = source[key];
    out[key] = valueMap[src] ?? src;
  }
  return out;
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeDictionary(outDir, keys, map, locale) {
  fs.mkdirSync(outDir, { recursive: true });
  const lines = keys.map((k) => {
    const v = map[k];
    if (!v || v === k) throw new Error(`${locale} untranslated: ${k.slice(0, 60)}`);
    return `  "${escapeTs(k)}": "${escapeTs(v)}",`;
  });
  fs.writeFileSync(
    path.join(outDir, `${locale}.ts`),
    `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`,
  );
}

const locales = {
  fr: { source: es, map: VALUE_MAPS.esToFr },
  ja: { source: es, map: VALUE_MAPS.esToJa },
  "zh-cn": { source: es, map: VALUE_MAPS.esToZhCn },
  ar: { source: es, map: VALUE_MAPS.esToAr },
  he: { source: es, map: VALUE_MAPS.esToHe },
  ru: { source: de, map: VALUE_MAPS.deToRu },
  uk: { source: de, map: VALUE_MAPS.deToUk },
};

for (const [locale, cfg] of Object.entries(locales)) {
  const out = mapValues(cfg.source, cfg.map);
  const identity = enKeys.filter((k) => out[k] === k).length;
  const leakEs = Object.values(out).filter((v) => /[áéíóúñ¿¡]/.test(v)).length;
  const leakDe = Object.values(out).filter((v) => /[äöüß]|ung\.|keit\.| werden /.test(v)).length;
  writeDictionary(flagshipOut, flagshipKeys, out, locale);
  writeDictionary(legalOut, legalKeys, out, locale);
  console.log(`${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length} identity=${identity} es=${leakEs} de=${leakDe}`);
}
