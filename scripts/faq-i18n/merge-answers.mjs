/**
 * Merge authored FAQ answer translations into locale packs and dictionaries (D-0203).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { shorts } from "./authored-shorts.mjs";
import { mids } from "./authored-mids.mjs";
import { longsA } from "./authored-longs-a.mjs";
import { longsB } from "./authored-longs-b.mjs";

const LOCALES = ["es", "de", "fr", "ja", "zh-cn", "ar", "he", "uk"];
const missing = JSON.parse(
  readFileSync(new URL("./_answers-missing.json", import.meta.url), "utf8"),
);

const authored = { ...shorts, ...mids, ...longsA, ...longsB };

function emitDict(locale, map) {
  mkdirSync("src/content/faq/dictionaries", { recursive: true });
  const entries = Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
    .join("\n");
  writeFileSync(
    `src/content/faq/dictionaries/${locale}.ts`,
    `/** FAQ page dictionary — D-0203 (${locale}). */\nexport const dictionary: Record<string, string> = {\n${entries}\n};\n`,
  );
}

for (const locale of LOCALES) {
  const existing = JSON.parse(
    readFileSync(`scripts/faq-i18n/${locale}.json`, "utf8"),
  );
  const answers = {};
  const gaps = [];
  for (const en of missing) {
    const row = authored[en];
    if (!row?.[locale]) {
      gaps.push(en);
      continue;
    }
    answers[en] = row[locale];
  }
  if (gaps.length) {
    console.error(locale, "authored gaps", gaps.length, gaps[0]?.slice(0, 80));
    process.exitCode = 1;
    continue;
  }
  const map = { ...existing, ...answers };
  writeFileSync(
    `scripts/faq-i18n/answers-${locale}.json`,
    JSON.stringify(answers, null, 2) + "\n",
  );
  writeFileSync(
    `scripts/faq-i18n/${locale}.json`,
    JSON.stringify(map, null, 2) + "\n",
  );
  emitDict(locale, map);
  const identity = missing.filter((k) => map[k] === k);
  console.log(
    locale,
    "dict",
    Object.keys(map).length,
    "answers",
    Object.keys(answers).length,
    "identity",
    identity.length,
  );
}

// Also refresh RU dictionary from ru.json if present (already complete)
try {
  const ru = JSON.parse(readFileSync("scripts/faq-i18n/ru.json", "utf8"));
  emitDict("ru", ru);
  // rename header comment
  const src = readFileSync("src/content/faq/dictionaries/ru.ts", "utf8").replace(
    "D-0203",
    "D-0202/D-0203",
  );
  writeFileSync("src/content/faq/dictionaries/ru.ts", src);
  console.log("ru refreshed", Object.keys(ru).length);
} catch {
  console.log("ru pack skipped");
}

console.log("merge done");
