#!/usr/bin/env node
/** Build ja/zh-cn/ar/he/ru/uk: localized short labels + draft banners; EN fallback for long body. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
const enKeys = Object.keys(
  JSON.parse(
    fs.readFileSync(path.join(root, "tmp/translations/es.json"), "utf8"),
  ),
);
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

const LABELS = {
  ja: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "ロボットや自律機械とやり取りするためのシステム — 人が複雑な物理作業の指揮を握り続けられるように。",
    "AI Decision Support": "AI意思決定支援",
    "About": "概要",
    "Home": "ホーム",
    "Investors": "投資家",
    "Labs": "ラボ",
    "Systems": "システム",
    "Technology": "テクノロジー",
    "Research": "研究",
    "In Development": "開発中",
    "Sign In/Up": "サインイン / 登録",
    "What this is": "これは何か",
    "What we build": "私たちが構築するもの",
    "Why it matters": "なぜ重要か",
    "Where to go next": "次に進む場所",
    "Workstreams": "ワークストリーム",
    "Focus areas": "重点分野",
    "Status": "ステータス",
    "Overview": "概要",
    "Contact": "お問い合わせ",
    "Privacy Policy": "プライバシーポリシー",
    "Terms of Use": "利用規約",
    "Cookie Policy": "Cookieポリシー",
    "Accessibility Statement": "アクセシビリティ声明",
    "Security": "セキュリティ",
    "Responsible AI": "責任あるAI",
    "Medical Disclaimer": "医療に関する免責事項",
    "Research Disclaimer": "研究に関する免責事項",
    "Intellectual Property": "知的財産",
    "Legal Notices": "法的通知",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "構成目的の草案 — 最終的な法的文書ではありません。法的レビュー待ちです。",
    "Date pending legal review": "日付は法的レビュー待ち",
  },
  "zh-cn": {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "用于与机器人和自主机器交互的系统 — 让人始终掌控复杂的物理工作。",
    "AI Decision Support": "AI 决策支持",
    "About": "关于",
    "Home": "首页",
    "Investors": "投资者",
    "Labs": "实验室",
    "Systems": "系统",
    "Technology": "技术",
    "Research": "研究",
    "In Development": "开发中",
    "Sign In/Up": "登录 / 注册",
    "What this is": "这是什么",
    "What we build": "我们构建什么",
    "Why it matters": "为何重要",
    "Where to go next": "下一步",
    "Workstreams": "工作流",
    "Focus areas": "重点领域",
    "Status": "状态",
    "Overview": "概述",
    "Contact": "联系",
    "Privacy Policy": "隐私政策",
    "Terms of Use": "使用条款",
    "Cookie Policy": "Cookie 政策",
    "Accessibility Statement": "无障碍声明",
    "Security": "安全",
    "Responsible AI": "负责任的 AI",
    "Medical Disclaimer": "医疗免责声明",
    "Research Disclaimer": "研究免责声明",
    "Intellectual Property": "知识产权",
    "Legal Notices": "法律通知",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "结构性草案 — 非最终法律文本。待法律审核。",
    "Date pending legal review": "日期待法律审核",
  },
  ar: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "نظام للتفاعل مع الروبots والآلات المستقلة — حتى يبقى الناس في قيادة العمل الفيزيائي المعقد.",
    "AI Decision Support": "دعم القرار بالذكاء الاصطناعي",
    "About": "حول",
    "Home": "الرئيسية",
    "Investors": "المستثمرون",
    "Labs": "المختبرات",
    "Systems": "الأنظمة",
    "Technology": "التكنولوجيا",
    "Research": "البحث",
    "In Development": "قيد التطوير",
    "Sign In/Up": "تسجيل الدخول / الاشتراك",
    "What this is": "ما هذا",
    "What we build": "ما نبنيه",
    "Why it matters": "لماذا يهم",
    "Where to go next": "أين تذهب بعد ذلك",
    "Workstreams": "مسارات العمل",
    "Focus areas": "مجالات التركيز",
    "Status": "الحالة",
    "Overview": "نظرة عامة",
    "Contact": "اتصل",
    "Privacy Policy": "سياسة الخصوصية",
    "Terms of Use": "شروط الاستخدام",
    "Cookie Policy": "سياسة ملفات تعريف الارتباط",
    "Accessibility Statement": "بيان إمكانية الوصول",
    "Security": "الأمان",
    "Responsible AI": "الذكاء الاصطناعي المسؤول",
    "Medical Disclaimer": "إخلاء مسؤولية طبية",
    "Research Disclaimer": "إخلاء مسؤولية بحثية",
    "Intellectual Property": "الملكية الفكرية",
    "Legal Notices": "إشعارات قانونية",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "مسودة لأغراض هيكلية — ليست نصًا قانونيًا نهائيًا. بانتظار المراجعة القانونية.",
    "Date pending legal review": "التاريخ بانتظار المراجعة القانونية",
  },
  he: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "מערכת לאינטראקציה עם רובוטים ומכונות אוטונומיות — כדי שאנשים יישארו בשליטה על עבודה פיזית מורכבת.",
    "AI Decision Support": "תמיכה בהחלטות באמצעות בינה מלאכותית",
    "About": "אודות",
    "Home": "דף הבית",
    "Investors": "משקיעים",
    "Labs": "מעבדות",
    "Systems": "מערכות",
    "Technology": "טכנולוגיה",
    "Research": "מחקר",
    "In Development": "בפיתוח",
    "Sign In/Up": "התחברות / הרשמה",
    "What this is": "מה זה",
    "What we build": "מה אנחנו בונים",
    "Why it matters": "למה זה חשוב",
    "Where to go next": "לאן להמשיך",
    "Workstreams": "זרמי עבודה",
    "Focus areas": "תחומי מיקוד",
    "Status": "סטטוס",
    "Overview": "סקירה",
    "Contact": "יצירת קשר",
    "Privacy Policy": "מדיניות פרטיות",
    "Terms of Use": "תנאי שימוש",
    "Cookie Policy": "מדיניות עוגיות",
    "Accessibility Statement": "הצהרת נגישות",
    "Security": "אבטחה",
    "Responsible AI": "בינה מלאכותית אחראית",
    "Medical Disclaimer": "כתב ויתור רפואי",
    "Research Disclaimer": "כתב ויתור מחקרי",
    "Intellectual Property": "קניין רוחני",
    "Legal Notices": "הודעות משפטיות",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "טיוטה למטרות מבניות — אינה טקסט משפטי סופי. ממתינה לסקירה משפטית.",
    "Date pending legal review": "התאריך ממתין לסקירה משפטית",
  },
  ru: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Система для взаимодействия с роботами и автономными машинами — чтобы люди сохраняли контроль над сложной физической работой.",
    "AI Decision Support": "Поддержка решений с ИИ",
    "About": "О разделе",
    "Home": "Главная",
    "Investors": "Инвесторы",
    "Labs": "Лаборатории",
    "Systems": "Системы",
    "Technology": "Технологии",
    "Research": "Исследования",
    "In Development": "В разработке",
    "Sign In/Up": "Вход / Регистрация",
    "What this is": "Что это",
    "What we build": "Что мы создаём",
    "Why it matters": "Почему это важно",
    "Where to go next": "Куда дальше",
    "Workstreams": "Рабочие направления",
    "Focus areas": "Приоритетные области",
    "Status": "Статус",
    "Overview": "Обзор",
    "Contact": "Контакты",
    "Privacy Policy": "Политика конфиденциальности",
    "Terms of Use": "Условия использования",
    "Cookie Policy": "Политика cookie",
    "Accessibility Statement": "Заявление о доступности",
    "Security": "Безопасность",
    "Responsible AI": "Ответственный ИИ",
    "Medical Disclaimer": "Медицинский отказ от ответственности",
    "Research Disclaimer": "Исследовательский отказ от ответственности",
    "Intellectual Property": "Интеллектуальная собственность",
    "Legal Notices": "Юридические уведомления",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ — Не окончательный юридический текст. Ожидает юридической проверки.",
    "Date pending legal review": "Дата ожидает юридической проверки",
  },
  uk: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Система для взаємодії з роботами та автономними машинами — щоб люди залишалися на команді складної фізичної роботи.",
    "AI Decision Support": "Підтримка рішень за допомогою ШІ",
    "About": "Про розділ",
    "Home": "Головна",
    "Investors": "Інвестори",
    "Labs": "Лабораторії",
    "Systems": "Системи",
    "Technology": "Технології",
    "Research": "Дослідження",
    "In Development": "У розробці",
    "Sign In/Up": "Увійти / Зареєструватися",
    "What this is": "Що це",
    "What we build": "Що ми будуємо",
    "Why it matters": "Чому це важливо",
    "Where to go next": "Куди далі",
    "Workstreams": "Робочі напрями",
    "Focus areas": "Пріоритетні напрями",
    "Status": "Статус",
    "Overview": "Огляд",
    "Contact": "Контакт",
    "Privacy Policy": "Політика конфіденційності",
    "Terms of Use": "Умови використання",
    "Cookie Policy": "Політика файлів cookie",
    "Accessibility Statement": "Заява про доступність",
    "Security": "Безпека",
    "Responsible AI": "Відповідальний ШІ",
    "Medical Disclaimer": "Медичне застереження",
    "Research Disclaimer": "Дослідницьке застереження",
    "Intellectual Property": "Інтелектуальна власність",
    "Legal Notices": "Юридичні повідомлення",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНЕТКА ДЛЯ СТРУКТУРНИХ ЦІЛЕЙ — Не остаточний юридичний текст. Очікує юридичного перегляду.",
    "Date pending legal review": "Дата очікує юридичного перегляду",
  },
};

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(dir, name),
    `/** Locale module (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const loc of ["ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const labels = LABELS[loc];
  const out = {};
  for (const key of enKeys) {
    out[key] = labels[key] ?? key;
  }
  fs.writeFileSync(
    path.join(root, `tmp/translations/${loc}.json`),
    JSON.stringify(out, null, 2) + "\n",
  );
  writeModule(
    `${loc}-flagship.mjs`,
    Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])),
  );
  writeModule(
    `${loc}-legal.mjs`,
    Object.fromEntries(legalKeys.map((k) => [k, out[k]])),
  );
  const tr = enKeys.filter((k) => out[k] !== k).length;
  console.log(`${loc}: ${tr} translated, ${360 - tr} EN fallback`);
}
