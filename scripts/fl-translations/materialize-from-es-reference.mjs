#!/usr/bin/env node
/**
 * Materialize locale modules from reference maps in ./reference-maps/{locale}.json
 * Keys must match es-flagship + es-legal English keys exactly.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as esF } from "./es-flagship.mjs";
import { translations as esL } from "./es-legal.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const mapsDir = path.join(dir, "reference-maps");
const root = path.resolve(dir, "../..");
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const enKeys = [...new Set([...Object.keys(esF), ...Object.keys(esL)])];

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(dir, name),
    `/** Legal/flagship translations (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const mapFile = path.join(mapsDir, `${locale}.json`);
  if (!fs.existsSync(mapFile)) {
    console.error(`Missing ${mapFile}`);
    process.exit(1);
  }
  const map = JSON.parse(fs.readFileSync(mapFile, "utf8"));
  const missing = enKeys.filter((k) => !map[k] || map[k] === k);
  if (missing.length) {
    console.error(`${locale}: missing ${missing.length} keys`);
    missing.slice(0, 5).forEach((k) => console.error(" ", k.slice(0, 80)));
    process.exit(1);
  }
  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, map[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, map[k]])));
  console.log(`${locale}: ok (${enKeys.length} keys)`);
}
