#!/usr/bin/env node
/** Materialize flagship + legal dictionary .ts files from fl-translations modules. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const modDir = path.join(root, "scripts/fl-translations");
const flagshipKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/flagship-keys/all.json"), "utf8"));
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/legal-keys/all.json"), "utf8"),
).filter((k) => k.includes(" ") || k.length > 12);

const locales = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "ru", "uk"];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeDict(outPath, keys, map) {
  const lines = keys.map((k) => {
    const v = map[k] ?? k;
    if (!v) throw new Error(`Missing ${outPath}: ${k.slice(0, 72)}`);
    if (v === k && k.includes(" ") && !/^SAVEN|^BioMath|^Internal Future Lab|^In Development$/.test(k)) {
      throw new Error(`Identity ${outPath}: ${k.slice(0, 72)}`);
    }
    return `  "${esc(k)}": "${esc(v)}",`;
  });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(
    outPath,
    `/* Generated from the canonical English source. */
export const dictionary: Record<string, string> = {
${lines.join("\n")}
};
`,
  );
}

for (const locale of locales) {
  const flagshipMod = await import(`./fl-translations/${locale}-flagship.mjs`);
  const legalMod = await import(`./fl-translations/${locale}-legal.mjs`);
  const flagship = flagshipMod.translations;
  const legal = legalMod.translations;

  const fMissing = flagshipKeys.filter((k) => {
    const v = flagship[k] ?? k;
    return !v || (v === k && k.includes(" ") && !/^SAVEN|^BioMath|^Internal Future Lab|^In Development$/.test(k));
  });
  const lMissing = legalKeys.filter((k) => {
    const v = legal[k] ?? k;
    return !v || (v === k && k.includes(" ") && !/^SAVEN|^BioMath|^Copyright|^WCAG|^DRAFT|^Overview$/.test(k));
  });
  if (fMissing.length) {
    console.error(`flagship/${locale}: missing ${fMissing.length}`);
    fMissing.slice(0, 3).forEach((k) => console.error(" ", k.slice(0, 72)));
    process.exit(1);
  }
  if (lMissing.length) {
    console.error(`legal/${locale}: missing ${lMissing.length}`);
    lMissing.slice(0, 3).forEach((k) => console.error(" ", k.slice(0, 72)));
    process.exit(1);
  }

  writeDict(path.join(root, "src/content/flagship/dictionaries", `${locale}.ts`), flagshipKeys, flagship);
  writeDict(path.join(root, "src/content/legal/dictionaries", `${locale}.ts`), legalKeys, legal);
  console.log(`flagship/${locale}.ts (${flagshipKeys.length}) + legal/${locale}.ts (${legalKeys.length})`);
}

console.log("Done.");
