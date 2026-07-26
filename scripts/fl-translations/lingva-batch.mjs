#!/usr/bin/env node
/** Batch-translate FL keys via Lingva proxy (D-0161). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const modDir = path.join(root, "scripts/fl-translations");
const cachePath = path.join(root, "tmp/lingva-cache-fl.json");
const cache = fs.existsSync(cachePath)
  ? JSON.parse(fs.readFileSync(cachePath, "utf8"))
  : {};

const GLOSSARY = [
  [/SAVEN Robotics Interface/g, "SAVEN Robotics Interface"],
  [/SAVEN Robotics Lab/g, "SAVEN Robotics Lab"],
  [/Internal Future Lab/g, "Internal Future Lab"],
  [/SAVEN Core/g, "SAVEN Core"],
  [/BioMath Life/g, "BioMath Life"],
  [/BioMath Core/g, "BioMath Core"],
  [/Intelligence for the Physical World/g, "Intelligence for the Physical World"],
  [/Turning Intelligence Into Human Care/g, "Turning Intelligence Into Human Care"],
  [/WCAG 2\.2 Level AA/g, "WCAG 2.2 Level AA"],
  [/WCAG 2\.2 AA/g, "WCAG 2.2 AA"],
  [/Layer-2/g, "Layer-2"],
  [/HMI/g, "HMI"],
  [/IRR/g, "IRR"],
  [/ROI/g, "ROI"],
  [/TBD/g, "TBD"],
  [/security@/g, "security@"],
  [/Future Lab/g, "Future Lab"],
  [/Robotics Interface/g, "Robotics Interface"],
  [/Robotics Lab/g, "Robotics Lab"],
  [/Robotics Layer/g, "Robotics Layer"],
];

const LINGVA = {
  fr: "fr",
  ja: "ja",
  "zh-cn": "zh",
  ar: "ar",
  he: "iw",
  ru: "ru",
  uk: "uk",
};

function postProcess(text) {
  let out = text;
  for (const [re, rep] of GLOSSARY) out = out.replace(re, rep);
  return out;
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(modDir, name),
    `/** Legal/flagship translations (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

const PRESEED = {
  "Sign In/Up": { ja: "サインイン / 登録", "zh-cn": "登录 / 注册", ar: "تسجيل الدخول / الاشتراك", he: "התחברות / הרשמה", ru: "Вход / Регистрация", uk: "Вхід / Реєстрація", fr: "Se connecter / S'inscrire" },
  "Contact": { ja: "お問い合わせ", "zh-cn": "联系", ar: "اتصل", he: "יצירת קשר", ru: "Контакт", uk: "Контакт", fr: "Contact" },
  "Perspectives": { ja: "視点", "zh-cn": "视角", ar: "وجهات النظر", he: "פרספקטיבות", ru: "Перспективы", uk: "Перспективи", fr: "Perspectives" },
  "Posture": { ja: "姿勢", "zh-cn": "姿态", ar: "الموقف", he: "עמדה", ru: "Позиция", uk: "Позиція", fr: "Posture" },
  "Status": { ja: "ステータス", "zh-cn": "状态", ar: "الحالة", he: "סטטוס", ru: "Статус", uk: "Статус", fr: "Statut" },
  "SAVEN Core": { ja: "SAVEN Core", "zh-cn": "SAVEN Core", ar: "SAVEN Core", he: "SAVEN Core", ru: "SAVEN Core", uk: "SAVEN Core", fr: "SAVEN Core" },
  "SAVEN Robotics Lab": { ja: "SAVEN Robotics Lab", "zh-cn": "SAVEN Robotics Lab", ar: "SAVEN Robotics Lab", he: "SAVEN Robotics Lab", ru: "SAVEN Robotics Lab", uk: "SAVEN Robotics Lab", fr: "SAVEN Robotics Lab" },
  "Internal Future Lab": { ja: "Internal Future Lab", "zh-cn": "Internal Future Lab", ar: "Internal Future Lab", he: "Internal Future Lab", ru: "Internal Future Lab", uk: "Internal Future Lab", fr: "Internal Future Lab" },
  "SAVEN Robotics Interface": { ja: "SAVEN Robotics Interface", "zh-cn": "SAVEN Robotics Interface", ar: "SAVEN Robotics Interface", he: "SAVEN Robotics Interface", ru: "SAVEN Robotics Interface", uk: "SAVEN Robotics Interface", fr: "SAVEN Robotics Interface" },
};

async function translate(text, locale) {
  const cacheKey = `${locale}::${text}`;
  if (cache[cacheKey]) return cache[cacheKey];
  if (PRESEED[text]?.[locale]) {
    const result = postProcess(PRESEED[text][locale]);
    cache[cacheKey] = result;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
    return result;
  }

  const target = LINGVA[locale];
  const url = `https://lingva.ml/api/v1/en/${target}/${encodeURIComponent(text).replace(/%2F/g, "%252F")}`;
  let data;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url);
    data = await res.json();
    if (!data.error) break;
    if (data.error === "Not Found" && text.includes("/")) {
      // Retry with slash escaped differently
      const alt = `https://lingva.ml/api/v1/en/${target}/${encodeURIComponent(text.replace(/\//g, " / "))}`;
      const res2 = await fetch(alt);
      data = await res2.json();
      if (!data.error) {
        data.translation = data.translation.replace(/ \/ /g, "/");
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
  }
  if (data.error) throw new Error(`${locale}: ${data.error} — ${text.slice(0, 60)}`);
  const result = postProcess(data.translation);
  cache[cacheKey] = result;
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");
  return result;
}

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];
const locales = (process.argv[2] || "fr,ja,zh-cn,ar,he,ru,uk").split(",");
const scope = process.argv[3] || "all"; // all | legal | flagship
const keySet =
  scope === "legal" ? legalKeys : scope === "flagship" ? flagshipKeys : flKeys;
const delay = Number(process.env.TRANSLATE_DELAY_MS || 800);

for (const locale of locales) {
  const existing = {};
  for (const part of ["flagship", "legal"]) {
    const f = path.join(modDir, `${locale}-${part}.mjs`);
    if (fs.existsSync(f)) {
      const text = fs.readFileSync(f, "utf8");
      const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
      let m;
      while ((m = re.exec(text))) {
        existing[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
      }
    }
  }
  const out = { ...existing };
  let n = 0;
  for (const key of keySet) {
    const cacheKey = `${locale}::${key}`;
    if (cache[cacheKey]) {
      out[key] = cache[cacheKey];
      continue;
    }
    out[key] = await translate(key, locale);
    n++;
    if (n % 10 === 0) console.log(`${locale}: ${n} new...`);
    await new Promise((r) => setTimeout(r, delay));
  }
  if (scope !== "legal") {
    writeModule(
      `${locale}-flagship.mjs`,
      Object.fromEntries(flagshipKeys.map((k) => [k, out[k] ?? k])),
    );
  }
  if (scope !== "flagship") {
    writeModule(
      `${locale}-legal.mjs`,
      Object.fromEntries(legalKeys.map((k) => [k, out[k] ?? k])),
    );
  }
  const id = keySet.filter((k) => out[k] === k).length;
  console.log(`${locale}: done identity=${id} new=${n}`);
}

console.log("Done.");
