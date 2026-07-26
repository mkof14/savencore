#!/usr/bin/env node
/**
 * Build scripts/fl-translations/locales/{locale}.json from hand modules (fr) or es+de references.
 * Then materialize *-flagship.mjs / *-legal.mjs via gen-remaining-from-es.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as esF } from "./es-flagship.mjs";
import { translations as esL } from "./es-legal.mjs";
import { translations as deF } from "./de-flagship.mjs";
import { translations as deL } from "./de-legal.mjs";
import { translations as frF } from "./fr-flagship.mjs";
import { translations as frL } from "./fr-legal.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(dir, "locales");
const root = path.resolve(dir, "../..");
fs.mkdirSync(localesDir, { recursive: true });

const es = { ...esF, ...esL };
const de = { ...deF, ...deL };
const fr = { ...frF, ...frL };
const enKeys = Object.keys(de);

function parsePageDict(locale) {
  const map = {};
  const d = path.join(root, "src/content/pages/dictionaries", locale);
  if (!fs.existsSync(d)) return map;
  for (const f of fs.readdirSync(d).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const text = fs.readFileSync(path.join(d, f), "utf8");
    const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
    let m;
    while ((m = re.exec(text))) {
      const k = JSON.parse(`"${m[1]}"`);
      const v = JSON.parse(`"${m[2]}"`);
      if (v !== k && !v.includes("MYMEMORY")) map[k] = v;
    }
  }
  return map;
}

function isCorrupted(v) {
  return /Seront publiés|Las áreas|herramientas|lorsque se|personneen|Interaktion mit|[äöüß]/.test(v || "");
}

/** Load optional complete override map */
async function loadOverride(locale) {
  const f = path.join(dir, "locale-overrides", `${locale}.json`);
  if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, "utf8"));
  return null;
}

const STATUS_TERMS = {
  ja: { Research: "研究", Architecture: "アーキテクチャ", "In Development": "開発中", Prototype: "プロトタイプ", Validation: "検証", Pilot: "パイロット", Operational: "運用" },
  "zh-cn": { Research: "研究", Architecture: "架构", "In Development": "开发中", Prototype: "原型", Validation: "验证", Pilot: "试点", Operational: "运营" },
  ar: { Research: "بحث", Architecture: "هندسة", "In Development": "قيد التطوير", Prototype: "نموذج أولي", Validation: "تحقق", Pilot: "تجريبي", Operational: "تشغيلي" },
  he: { Research: "מחקר", Architecture: "ארכיטקטורה", "In Development": "בפיתוח", Prototype: "אב טיפוס", Validation: "אימות", Pilot: "פיילוט", Operational: "תפעולי" },
  ru: { Research: "Исследование", Architecture: "Архитектура", "In Development": "В разработке", Prototype: "Прототип", Validation: "Валидация", Pilot: "Пилот", Operational: "Эксплуатация" },
  uk: { Research: "Дослідження", Architecture: "Архітектура", "In Development": "У розробці", Prototype: "Прототип", Validation: "Валідація", Pilot: "Пілот", Operational: "Експлуатація" },
};

const UI = {
  ja: { "About": "概要", "Home": "ホーム", "Investors": "投資家", "Labs": "ラボ", "Systems": "システム", "Technology": "テクノロジー", "Research": "研究", "Contact": "お問い合わせ", "Security": "セキュリティ", "Overview": "概要", "Changes": "変更", "Retention": "保持", "Updates": "更新", "Ownership": "所有", "Commitment": "コミットメント", "Acceptable use": "許容される使用", "Sign In/Up": "サインイン / 登録", "Focus areas": "重点分野", "Workstreams": "ワークストリーム", "Status": "ステータス", "Perspectives": "視点", "Posture": "姿勢", "Privacy Policy": "プライバシーポリシー", "Terms of Use": "利用規約", "Cookie Policy": "Cookieポリシー", "Cookie Preferences": "Cookie設定", "Accessibility Statement": "アクセシビリティ声明", "Responsible AI": "責任あるAI", "Intellectual Property": "知的財産", "Legal Notices": "法的通知", "Data Rights": "データ権利", "Medical Disclaimer": "医療免責事項", "Research Disclaimer": "研究免責事項", "Trademark Notice": "商標通知", "Copyright Notice": "著作権表示", "Regional Privacy Rights": "地域別プライバシー権", "Do Not Sell or Share My Personal Information": "個人情報の販売・共有を拒否", "Human oversight": "人間の監督", "Who we are": "私たちについて", "Your rights and choices": "お客様の権利と選択" },
  "zh-cn": { "About": "关于", "Home": "首页", "Investors": "投资者", "Labs": "实验室", "Systems": "系统", "Technology": "技术", "Research": "研究", "Contact": "联系", "Security": "安全", "Overview": "概述", "Changes": "变更", "Retention": "保留", "Updates": "更新", "Ownership": "所有权", "Commitment": "承诺", "Acceptable use": "可接受的使用", "Sign In/Up": "登录 / 注册", "Focus areas": "重点领域", "Workstreams": "工作流", "Status": "状态", "Perspectives": "视角", "Posture": "姿态", "Privacy Policy": "隐私政策", "Terms of Use": "使用条款", "Cookie Policy": "Cookie 政策", "Cookie Preferences": "Cookie 偏好设置", "Accessibility Statement": "无障碍声明", "Responsible AI": "负责任的 AI", "Intellectual Property": "知识产权", "Legal Notices": "法律通知", "Data Rights": "数据权利", "Medical Disclaimer": "医疗免责声明", "Research Disclaimer": "研究免责声明", "Trademark Notice": "商标通知", "Copyright Notice": "版权声明", "Regional Privacy Rights": "区域隐私权利", "Do Not Sell or Share My Personal Information": "不出售或共享我的个人信息", "Human oversight": "人类监督", "Who we are": "我们是谁", "Your rights and choices": "您的权利与选择" },
  ar: { "About": "حول", "Home": "الرئيسية", "Investors": "المستثمرون", "Labs": "المختبرات", "Systems": "الأنظمة", "Technology": "التكنولوجيا", "Research": "البحث", "Contact": "اتصل", "Security": "الأمان", "Overview": "نظرة عامة", "Changes": "التغييرات", "Retention": "الاحتفاظ", "Updates": "التحديثات", "Ownership": "الملكية", "Commitment": "الالتزام", "Acceptable use": "الاستخدام المقبول", "Sign In/Up": "تسجيل الدخول / الاشتراك", "Focus areas": "مجالات التركيز", "Workstreams": "مسارات العمل", "Status": "الحالة", "Perspectives": "وجهات النظر", "Posture": "الموقف", "Privacy Policy": "سياسة الخصوصية", "Terms of Use": "شروط الاستخدام", "Cookie Policy": "سياسة ملفات تعريف الارتباط", "Cookie Preferences": "ت preferences ملفات تعريف الارتباط", "Accessibility Statement": "بيان إمكانية الوصول", "Responsible AI": "الذكاء الاصطناعي المسؤول", "Intellectual Property": "الملكية الفكرية", "Legal Notices": "الإشعارات القانونية", "Data Rights": "حقوق البيانات", "Medical Disclaimer": "إخلاء مسؤولية طبية", "Research Disclaimer": "إخلاء مسؤولية بحثية", "Trademark Notice": "إشعار العلامات التجارية", "Copyright Notice": "إشعار حقوق النشر", "Regional Privacy Rights": "حقوق الخصوصية الإقليمية", "Do Not Sell or Share My Personal Information": "عدم بيع أو مشاركة معلوماتي الشخصية", "Human oversight": "الإشراف البشري", "Who we are": "من نحن", "Your rights and choices": "حقوقك وخياراتك" },
  he: { "About": "אודות", "Home": "דף הבית", "Investors": "משקיעים", "Labs": "מעבדות", "Systems": "מערכות", "Technology": "טכנולוגיה", "Research": "מחקר", "Contact": "יצירת קשר", "Security": "אבטחה", "Overview": "סקירה", "Changes": "שינויים", "Retention": "שמירה", "Updates": "עדכונים", "Ownership": "בעלות", "Commitment": "מחויבות", "Acceptable use": "שימוש מקובל", "Sign In/Up": "התחברות / הרשמה", "Focus areas": "תחומי מיקוד", "Workstreams": "זרמי עבודה", "Status": "סטטוס", "Perspectives": "פרספקטיבות", "Posture": "עמדה", "Privacy Policy": "מדיניות פרטיות", "Terms of Use": "תנאי שימוש", "Cookie Policy": "מדיניות עוגיות", "Cookie Preferences": "העדפות עוגיות", "Accessibility Statement": "הצהרת נגישות", "Responsible AI": "בינה מלאכותית אחראית", "Intellectual Property": "קניין רוחני", "Legal Notices": "הודעות משפטיות", "Data Rights": "זכויות נתונים", "Medical Disclaimer": "הצהרת אחריות רפואית", "Research Disclaimer": "הצהרת אחריות מחקרית", "Trademark Notice": "הודעת סימן מסחר", "Copyright Notice": "הודעת זכויות יוצרים", "Regional Privacy Rights": "זכויות פרטיות אזוריות", "Do Not Sell or Share My Personal Information": "לא למכור או לשתף את המידע האישי שלי", "Human oversight": "פיקוח אנושי", "Who we are": "מי אנחנו", "Your rights and choices": "הזכויות והבחירות שלך" },
};

function localizeStatuses(text, locale) {
  let out = text;
  for (const [en, loc] of Object.entries(STATUS_TERMS[locale] || {})) {
    out = out.split(en).join(loc);
  }
  return out;
}

function buildLocale(locale, source, override, pages) {
  const out = {};
  for (const key of enKeys) {
    if (override?.[key] && override[key] !== key) out[key] = override[key];
    else if (pages[key] && !isCorrupted(pages[key])) out[key] = pages[key];
    else if (UI[locale]?.[key]) out[key] = UI[locale][key];
    else if (locale === "fr") out[key] = fr[key];
    else {
      let v = source[key];
      v = localizeStatuses(v, locale);
      out[key] = v;
    }
  }
  return out;
}

// fr from hand modules
fs.writeFileSync(path.join(localesDir, "fr.json"), JSON.stringify(fr, null, 2) + "\n");
console.log("fr.json from hand modules");

for (const locale of ["ja", "zh-cn", "ar", "he"]) {
  const override = await loadOverride(locale);
  const pages = parsePageDict(locale);
  const out = buildLocale(locale, es, override, pages);
  fs.writeFileSync(path.join(localesDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  const id = enKeys.filter((k) => out[k] === k).length;
  const span = enKeys.filter((k) => /[áéíóúñ¿¡]/.test(out[k] || "")).length;
  console.log(`${locale}.json identity=${id} spanish=${span}`);
}

for (const locale of ["ru", "uk"]) {
  const override = await loadOverride(locale);
  const pages = parsePageDict(locale);
  const out = buildLocale(locale, de, override, pages);
  fs.writeFileSync(path.join(localesDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  const id = enKeys.filter((k) => out[k] === k).length;
  const deChars = enKeys.filter((k) => /[äöüß]/.test(out[k] || "")).length;
  console.log(`${locale}.json identity=${id} german=${deChars}`);
}
