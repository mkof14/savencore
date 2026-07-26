#!/usr/bin/env node
/**
 * Offline flagship+legal locale builder (D-0161).
 * fr: de + DE_FR | ru/uk: de + DE_RU/DE_UK | ja/zh/ar/he: es + ES_* rules
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as deF } from "./de-flagship.mjs";
import { translations as deL } from "./de-legal.mjs";
import { translations as esF } from "./es-flagship.mjs";
import { translations as esL } from "./es-legal.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const modDir = path.dirname(fileURLToPath(import.meta.url));
const flagshipOut = path.join(root, "src/content/flagship/dictionaries");
const legalOut = path.join(root, "src/content/legal/dictionaries");

const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const flKeys = [...new Set([...flagshipKeys, ...legalKeys])];

const de = { ...deF, ...deL };
const es = { ...esF, ...esL };

const KEEP = [
  "SAVEN Core",
  "SAVEN Robotics Lab",
  "SAVEN Robotics Interface",
  "Internal Future Lab",
  "Intelligence for the Physical World",
  "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA",
  "WCAG 2.2 Level AA",
  "Layer-2",
  "HMI",
  "IRR",
  "ROI",
  "TBD",
  "security@",
  "Future Lab",
  "Robotics Interface",
  "Robotics Lab",
  "Robotics Layer",
];

function shield(text) {
  let out = text;
  const slots = [];
  for (const k of KEEP) {
    if (out.includes(k)) {
      const id = `\x00${slots.length}\x00`;
      slots.push(k);
      out = out.split(k).join(id);
    }
  }
  return { out, slots };
}

function unshield(text, slots) {
  let out = text;
  slots.forEach((k, i) => {
    out = out.split(`\x00${i}\x00`).join(k);
  });
  return out;
}

function applyRules(text, rules) {
  const { out, slots } = shield(text);
  let result = out;
  for (const [from, to] of rules) result = result.split(from).join(to);
  return unshield(result, slots);
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function writeDictionary(outDir, keys, map, locale) {
  fs.mkdirSync(outDir, { recursive: true });
  const lines = keys.map((k) => {
    const v = map[k] ?? k;
    return `  "${escapeTs(k)}": "${escapeTs(v)}",`;
  });
  fs.writeFileSync(
    path.join(outDir, `${locale}.ts`),
    `/* Generated from the canonical English source. */\nexport const dictionary: Record<string, string> = {\n${lines.join("\n")}\n};\n`,
  );
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

// Import DE_FR from build-reference-maps (inline subset + full file read)
const refBuilder = fs.readFileSync(path.join(modDir, "build-reference-maps-from-de-es.mjs"), "utf8");
const deFrMatch = refBuilder.match(/const DE_FR = \[([\s\S]*?)\n\];/);
if (!deFrMatch) throw new Error("Could not parse DE_FR");
const DE_FR = eval(`[${deFrMatch[1]}]`);

// FR→RU and FR→UK phrase rules (French intermediate from DE_FR)
const FR_RU = [
  ["BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique.", "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ — Не окончательный юридический текст. Ожидает юридической проверки."],
  ["Date en attente de revue juridique", "Дата ожидает юридической проверки"],
  ["Un système pour interagir avec des robots et des machines autonomes — afin que les personnes restent aux commandes d'un travail physique complexe.", "Система для взаимодействия с роботами и автономными машинами — чтобы люди сохраняли контроль над сложной физической работой."],
  ["Conçu pour soutenir les soins humains à l'hôpital, à domicile et partout où la vie se déroule — sans prétendre à un déploiement opérationnel.", "Создано для поддержки человеческой заботы в больницах, дома и везде, где происходит жизнь — без заявлений об операционном развёртывании."],
  ["Les domaines de capacité ci-dessous sont des composants possibles de l'architecture. Aucun n'est présenté comme un module produit livré.", "Перечисленные ниже области возможностей — возможные компоненты архитектуры. Ни один не представлен как поставленный продуктовый модуль."],
  ["Mobilité autonome — déplacement dans des espaces humains partagés avec des limites rendues visibles", "Автономная мобильность — перемещение в общих человеческих пространствах с видимыми ограничениями"],
  ["Direction de l'entreprise : Intelligence for the Physical World", "Направление компании: Intelligence for the Physical World"],
  ["En développement", "В разработке"],
  ["Politique de confidentialité", "Политика конфиденциальности"],
  ["Se connecter / S'inscrire", "Вход / Регистрация"],
  ["Accueil", "Главная"],
  ["À propos", "О разделе"],
  ["Investisseurs", "Инвесторы"],
  ["Laboratoires", "Лаборатории"],
  ["Systèmes", "Системы"],
  ["Technologie", "Технологии"],
  ["Recherche", "Исследования"],
  ["Confiance", "Доверие"],
  ["Contact", "Контакты"],
  ["Sécurité", "Безопасность"],
  ["Conditions d'utilisation", "Условия использования"],
  ["Politique relative aux cookies", "Политика cookie"],
  ["Déclaration d'accessibilité", "Заявление о доступности"],
  ["Aide à la décision par IA", "Поддержка решений с ИИ"],
  ["Formes avancées de robotique", "Продвинутые формы робототехники"],
  ["Prise de décision autonome", "Автономное принятие решений"],
  ["Progrès du développement", "Прогресс разработки"],
  ["État du développement", "Статус разработки"],
  ["Environnement numérique de mission", "Цифровая среда миссии"],
  ["IA incarnée", "Воплощённый ИИ"],
  ["Commande et contrôle", "Командование и управление"],
  ["Domaines prioritaires", "Приоритетные области"],
  ["Comment cela aide les personnes", "Как это помогает людям"],
  ["Comment nous collaborons", "Как мы взаимодействуем"],
  ["Bénéfice humain", "Польза для человека"],
  ["Interaction homme-machine", "Взаимодействие человека и машины"],
  ["Interaction homme-robot", "Взаимодействие человека и робота"],
  ["Gestion de flotte", "Управление парком"],
  ["Planification de mission", "Планирование миссии"],
  ["Opérations à distance", "Удалённая эксплуатация"],
  ["Télémétrie en temps réel", "Телеметрия в реальном времени"],
  ["Diagnostic système", "Диагностика системы"],
  ["Interface visuelle", "Визуальный интерфейс"],
  ["De quoi s'agit-il", "Что это"],
  ["Ce que nous construisons", "Что мы создаём"],
  ["Pourquoi c'est important", "Почему это важно"],
  ["Prochaines étapes", "Куда двигаться дальше"],
  ["Filières", "Рабочие направления"],
  ["Statut", "Статус"],
  ["Aperçu", "Обзор"],
  ["Modifications", "Изменения"],
  ["Engagement", "Обязательство"],
  ["Mises à jour", "Обновления"],
  ["Informations que nous pouvons collecter", "Информация, которую мы можем собирать"],
  ["Comment nous pouvons utiliser les informations", "Как мы можем использовать информацию"],
  ["Partage et sous-traitants", "Передача и обработчики"],
  ["Conservation", "Хранение"],
  ["Vos droits et choix", "Ваши права и выбор"],
  ["Supervision humaine", "Человеческий надзор"],
  ["IA responsable", "Ответственный ИИ"],
  ["Propriété intellectuelle", "Интеллектуальная собственность"],
  ["Mentions légales", "Юридические уведомления"],
  ["Avertissement médical", "Медицинский отказ от ответственности"],
  ["Limitation de responsabilité", "Ограничение ответственности"],
  ["Cookies essentiels", "Основные cookie"],
  ["Cookies analytiques", "Аналитические cookie"],
  ["Cookies de préférences / fonctionnels", "Cookie предпочтений / функциональные"],
  ["Ne pas vendre ni partager mes informations personnelles", "Не продавать и не передавать мои персональные данные"],
  ["Qui nous sommes", "Кто мы"],
  ["Portée de cette politique", "Область действия этой политики"],
  ["Droit applicable / juridiction", "Применимое право / юрисдикция"],
  ["Signalement de vulnérabilités", "Сообщение об уязвимостях"],
  [" et ", " и "],
  [" ou ", " или "],
  [" pour ", " для "],
  [" avec ", " с "],
  [" sans ", " без "],
  [" lorsque ", " когда "],
  [" sera ", " будет "],
  [" seront ", " будут "],
  ["Les ", ""],
  ["Le ", ""],
  ["La ", ""],
  ["L'", ""],
  [" des ", " "],
  [" de la ", " "],
  [" du ", " "],
  ["informations", "информация"],
  ["données", "данные"],
  ["confidentialité", "конфиденциальность"],
  ["brouillon", "черновик"],
  ["site web", "сайт"],
  ["développement", "разработка"],
  ["recherche", "исследования"],
  ["architecture", "архитектура"],
  ["robotique", "робототехника"],
  ["ingénierie", "инженерия"],
  ["soins humains", "человеческая забота"],
  ["supervision humaine", "человеческий надзор"],
  ["visiteurs", "посетители"],
  ["utilisateur", "пользователь"],
  ["cookies", "cookie"],
  ["approbation", "одобрение"],
  ["revue juridique", "юридическая проверка"],
  ["allègue", "заявляет"],
  ["allégations", "заявления"],
  ["opérationnel", "операционный"],
  ["déploiement", "развёртывание"],
  ["plateforme", "платформа"],
  ["capital", "капитал"],
  ["investissement", "инвестиции"],
  ["investisseurs", "инвесторы"],
  ["laboratoire", "лаборатория"],
  ["interface", "интерфейс"],
  ["sécurité", "безопасность"],
  ["urgence", "экстренная ситуация"],
  ["médicale", "медицинская"],
  ["médical", "мédical"],
  ["clinique", "клиническая"],
  ["capacité", "возможность"],
  ["personnes", "люди"],
  ["personne", "человек"],
  ["Cette page", "Эта страница"],
  ["Ce brouillon", "Этот черновик"],
  ["ce site web", "этот сайт"],
  ["Seront publiés", "Будут опубликованы"],
  ["sera publié", "будет опубликовано"],
  ["Aucune adresse n'est inventée", "Адреса не выдумываются"],
  ["Placeholder uniquement", "Только заполнитель"],
  ["en attente d'approbation", "ожидает одобрения"],
  ["en attente de revue juridique", "ожидает юридической проверки"],
  ["Ne pas ", "Не "],
  ["Aucun ", "Никакой "],
  ["Aucune ", "Никакая "],
  ["Pas de ", "Без "],
  ["N'allègue pas", "Не заявляет"],
  ["Nous ne publions pas", "Мы не публикуем"],
  ["Consultez", "Обратитесь"],
  ["Consultez toujours", "Всегда обращайтесь"],
];

const FR_UK = FR_RU.map(([a, b]) => {
  const uk = b
    .replace(/В разработке/g, "У розробці")
    .replace(/Политика конфиденциальности/g, "Політика конфіденційності")
    .replace(/Вход \/ Регистрация/g, "Увійти / Зареєструватися")
    .replace(/Главная/g, "Головна")
    .replace(/О разделе/g, "Про розділ")
    .replace(/Инвесторы/g, "Інвестори")
    .replace(/Лаборатории/g, "Лабораторії")
    .replace(/Системы/g, "Системи")
    .replace(/Технологии/g, "Технології")
    .replace(/Исследования/g, "Дослідження")
    .replace(/Контакты/g, "Контакт")
    .replace(/Безопасность/g, "Безпека")
    .replace(/Условия использования/g, "Умови використання")
    .replace(/Политика cookie/g, "Політика файлів cookie")
    .replace(/Заявление о доступности/g, "Заява про доступність")
    .replace(/Поддержка решений с ИИ/g, "Підтримка рішень за допомогою ШІ")
    .replace(/ЧЕРНОВИК/g, "ЧЕРНЕТКА")
    .replace(/черновик/g, "чернетка")
    .replace(/Эта страница/g, "Ця сторінка")
    .replace(/Этот черновик/g, "Ця чернетка")
    .replace(/этот сайт/g, "цей сайт")
    .replace(/Будут опубликованы/g, "Будуть опубліковані")
    .replace(/будет опубликовано/g, "буде опубліковано")
    .replace(/ и /g, " та ")
    .replace(/ или /g, " або ");
  return [a, uk];
});

// ES→locale rules from compose-locales
const composeSrc = fs.readFileSync(path.join(modDir, "compose-locales.mjs"), "utf8");
function extractRules(name) {
  const m = composeSrc.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\n\\];`));
  if (!m) throw new Error(`Missing ${name}`);
  return eval(`[${m[1]}]`);
}

const ES_FR = extractRules("ES_FR");
const ES_JA = extractRules("ES_JA");
const ES_ZH = extractRules("ES_ZH");
const ES_AR = extractRules("ES_AR");
const ES_HE = extractRules("ES_HE");

const EN_OVERRIDES = {
  fr: {
    "In Development": "En développement",
    "Privacy Policy": "Politique de confidentialité",
    "Home": "Accueil",
    "Sign In/Up": "Se connecter / S'inscrire",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique.",
    "Date pending legal review": "Date en attente de revue juridique",
  },
  ja: {
    "In Development": "開発中",
    "Privacy Policy": "プライバシーポリシー",
    "Home": "ホーム",
    "Sign In/Up": "サインイン / 登録",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "構成目的の草案 — 最終的な法的文書ではありません。法的レビュー待ちです。",
    "Date pending legal review": "日付は法的レビュー待ち",
  },
  "zh-cn": {
    "In Development": "开发中",
    "Privacy Policy": "隐私政策",
    "Home": "首页",
    "Sign In/Up": "登录 / 注册",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "结构性草案 — 非最终法律文本。待法律审核。",
    "Date pending legal review": "日期待法律审核",
  },
  ar: {
    "In Development": "قيد التطوير",
    "Privacy Policy": "سياسة الخصوصية",
    "Home": "الرئيسية",
    "Sign In/Up": "تسجيل الدخول / الاشتراك",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "مسودة لأغراض هيكلية — ليست نصًا قانونيًا نهائيًا. بانتظار المراجعة القانونية.",
    "Date pending legal review": "التاريخ بانتظار المراجعة القانونية",
  },
  he: {
    "In Development": "בפיתוח",
    "Privacy Policy": "מדיניות פרטיות",
    "Home": "דף הבית",
    "Sign In/Up": "התחברות / הרשמה",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "טיוטה למטרות מבניות — אינה טקסט משפטי סופי. ממתינה לסקירה משפטית.",
    "Date pending legal review": "התאריך ממתין לסקירה משפטית",
  },
  ru: {
    "In Development": "В разработке",
    "Privacy Policy": "Политика конфиденциальности",
    "Home": "Главная",
    "Sign In/Up": "Вход / Регистрация",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ — Не окончательный юридический текст. Ожидает юридической проверки.",
    "Date pending legal review": "Дата ожидает юридической проверки",
  },
  uk: {
    "In Development": "У розробці",
    "Privacy Policy": "Політика конфіденційності",
    "Home": "Головна",
    "Sign In/Up": "Увійти / Зареєструватися",
    "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
      "ЧЕРНЕТКА ДЛЯ СТРУКТУРНИХ ЦІЛЕЙ — Не остаточний юридичний текст. Очікує юридичного перегляду.",
    "Date pending legal review": "Дата очікує юридичного перегляду",
  },
};

// Parse FR_EN from finalize-locales
const finalizeSrc = fs.readFileSync(path.join(modDir, "finalize-locales.mjs"), "utf8");
const frEnMatch = finalizeSrc.match(/const FR_EN = \{([\s\S]*?)\n\};/);
const FR_EN_MAP = {};
if (frEnMatch) {
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*\n?\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(frEnMatch[0]))) {
    FR_EN_MAP[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
}

function buildDeFr(key) {
  if (FR_EN_MAP[key]) return FR_EN_MAP[key];
  return applyRules(de[key], DE_FR);
}

function buildDeRu(key) {
  const fr = buildDeFr(key);
  return applyRules(fr, FR_RU);
}

function buildDeUk(key) {
  const fr = buildDeFr(key);
  return applyRules(fr, FR_UK);
}

function buildEs(key, rules) {
  return applyRules(es[key], rules);
}

const builders = {
  fr: (k) => EN_OVERRIDES.fr[k] ?? buildDeFr(k),
  ja: (k) => EN_OVERRIDES.ja[k] ?? buildEs(k, ES_JA),
  "zh-cn": (k) => EN_OVERRIDES["zh-cn"][k] ?? buildEs(k, ES_ZH),
  ar: (k) => EN_OVERRIDES.ar[k] ?? buildEs(k, ES_AR),
  he: (k) => EN_OVERRIDES.he[k] ?? buildEs(k, ES_HE),
  ru: (k) => EN_OVERRIDES.ru[k] ?? buildDeRu(k),
  uk: (k) => EN_OVERRIDES.uk[k] ?? buildDeUk(k),
};

for (const [locale, build] of Object.entries(builders)) {
  const out = {};
  for (const key of flKeys) out[key] = build(key);

  writeModule(`${locale}-flagship.mjs`, Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])));
  writeModule(`${locale}-legal.mjs`, Object.fromEntries(legalKeys.map((k) => [k, out[k]])));
  writeDictionary(flagshipOut, flagshipKeys, out, locale);
  writeDictionary(legalOut, legalKeys, out, locale);

  const id = flKeys.filter((k) => out[k] === k).length;
  const esLeak = Object.values(out).filter((v) => /[áéíóúñ¿¡]/.test(v)).length;
  const deLeak = Object.values(out).filter((v) => /[äöüßÄÖÜ]|Unternehmens|werden | und |Der |Die /.test(v)).length;
  const frLeak = ["ja", "zh-cn", "ar", "he", "ru", "uk"].includes(locale)
    ? Object.values(out).filter((v) => /BROUILLON|confidentialité|développement|allègue/.test(v)).length
    : 0;
  console.log(
    `${locale}: flagship=${flagshipKeys.length} legal=${legalKeys.length} identity=${id} es=${esLeak} de=${deLeak} fr=${frLeak}`,
  );
  console.log(`  In Development: ${out["In Development"]}`);
  console.log(`  Privacy Policy: ${out["Privacy Policy"]}`);
}

console.log("Done.");
