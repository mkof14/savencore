#!/usr/bin/env node
/**
 * Compose locale modules from es.json using locale-specific phrase rules (D-0161).
 * es + de remain hand-authored; other locales derive from Spanish reference strings.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
const es = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/translations/es.json"), "utf8"),
);
const enKeys = Object.keys(es);
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

const KEEP = [
  "SAVEN Core",
  "SAVEN Robotics Lab",
  "SAVEN Robotics Interface",
  "Internal Future Lab",
  "Intelligence for the Physical World",
  "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA",
  "WCAG 2.2 Nivel AA",
  "Layer-2",
  "Capa 2",
  "HMI",
  "IHM",
  "IRR",
  "ROI",
  "TIR",
  "Tri",
  "Inc.",
  "security@",
  "TBD",
  "Future Lab",
  "Robotics Interface",
  "Robotics Lab",
  "Robotics Layer",
  "Capa de Robótica",
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
  for (const [from, to] of rules) {
    result = result.split(from).join(to);
  }
  return unshield(result, slots);
}

const ES_FR = [
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique."],
  ["Fecha pendiente de revisión legal", "Date en attente de revue juridique"],
  ["Fecha pendiente de revisión jurídica", "Date en attente de revue juridique"],
  ["Se publicará", "Seront publiés"],
  ["se publicará", "sera publié"],
  ["Se añadirán", "Seront ajoutés"],
  ["se añadirán", "seront ajoutés"],
  ["Se registrarán", "Seront enregistrés"],
  ["se registrarán", "seront enregistrés"],
  ["Se definirán", "Seront définis"],
  ["se definirán", "seront définis"],
  ["Se actualizarán", "Seront mis à jour"],
  ["se actualizarán", "seront mis à jour"],
  ["Se listarán", "Seront listés"],
  ["se listarán", "seront listés"],
  ["Se gestionarán", "Seront traités"],
  ["se gestionarán", "seront traités"],
  ["Se describirán", "Seront décrits"],
  ["se describirán", "seront décrits"],
  ["Se publicarán", "Seront publiés"],
  ["No se inventan", "Aucune adresse n'est inventée"],
  ["No invente", "N'inventez pas"],
  ["No se afirma", "Aucun n'est allégué"],
  ["no se afirma", "n'est pas allégué"],
  ["No afirma", "N'allègue pas"],
  ["no afirma", "n'allègue pas"],
  ["No asuma", "Ne supposez pas"],
  ["No copie", "Ne copiez pas"],
  ["No use", "N'utilisez pas"],
  ["No interprete", "N'interprétez pas"],
  ["No es", "Ce n'est pas"],
  ["no es", "n'est pas"],
  ["No publicamos", "Nous ne publions pas"],
  ["este borrador", "ce brouillon"],
  ["Este borrador", "Ce brouillon"],
  ["Esta página", "Cette page"],
  ["esta página", "cette page"],
  ["El sitio web", "Le site web"],
  ["el sitio web", "le site web"],
  ["sitio web", "site web"],
  ["Pendiente de revisión legal", "En attente de revue juridique"],
  ["pendiente de revisión legal", "en attente de revue juridique"],
  ["pendiente de aprobación", "en attente d'approbation"],
  ["Pendiente de aprobación", "En attente d'approbation"],
  ["cuando se apruebe", "lorsque approuvé"],
  ["Cuando se apruebe", "Lorsque approuvé"],
  ["cuando se aprueben", "lorsque approuvés"],
  ["cuando se confirme", "lorsque confirmé"],
  ["cuando existan", "lorsqu'ils existent"],
  ["cuando comience", "lorsque commencera"],
  ["cuando se seleccione", "lorsque sélectionnée"],
  ["cuando se realicen", "lorsque effectuées"],
  ["cuando se introduzca", "lorsqu'introduite"],
  ["cuando se autorice", "lorsque autorisé"],
  ["Solo marcador de posición", "Placeholder uniquement"],
  ["solo borrador", "brouillon uniquement"],
  ["Solo borrador", "Brouillon uniquement"],
  ["Solo informativo", "Informatif uniquement"],
  ["Consulte", "Consultez"],
  ["Consulte siempre", "Consultez toujours"],
  ["Consulte los", "Consultez les"],
  ["Consulte el", "Consultez le"],
  ["Consulte la", "Consultez la"],
  ["Iniciar sesión / Registrarse", "Se connecter / S'inscrire"],
  ["Iniciar sesión", "Se connecter"],
  ["Apoyo a la decisión con IA", "Aide à la décision par IA"],
  ["Acerca de", "À propos"],
  ["Inicio", "Accueil"],
  ["Inversores", "Investisseurs"],
  ["Laboratorios", "Laboratoires"],
  ["Sistemas", "Systèmes"],
  ["Tecnología", "Technologie"],
  ["Investigación", "Recherche"],
  ["En desarrollo", "En développement"],
  ["Confianza", "Confiance"],
  ["Contacto", "Contact"],
  ["Seguridad", "Sécurité"],
  ["Privacidad", "Confidentialité"],
  ["Política de privacidad", "Politique de confidentialité"],
  ["Términos de uso", "Conditions d'utilisation"],
  ["Política de cookies", "Politique relative aux cookies"],
  ["Preferencias de cookies", "Préférences en matière de cookies"],
  ["Declaración de accesibilidad", "Déclaration d'accessibilité"],
  ["IA responsable", "IA responsable"],
  ["Propiedad intelectual", "Propriété intellectuelle"],
  ["Avisos legales", "Mentions légales"],
  ["Los ", "Les "],
  ["Las ", "Les "],
  ["La ", "La "],
  ["El ", "Le "],
  [" los ", " les "],
  [" las ", " les "],
  [" del ", " du "],
  [" de la ", " de la "],
  [" de los ", " des "],
  [" de las ", " des "],
  [" para ", " pour "],
  [" con ", " avec "],
  [" sin ", " sans "],
  [" y ", " et "],
  [" o ", " ou "],
  [" no ", " ne pas "],
  [" es ", " est "],
  [" son ", " sont "],
  [" está ", " est "],
  [" están ", " sont "],
  [" puede ", " peut "],
  [" pueden ", " peuvent "],
  [" será ", " sera "],
  [" serán ", " seront "],
  [" información ", " informations "],
  [" datos ", " données "],
  [" cookies", " cookies"],
  ["Cookies ", "Cookies "],
  [" usuario", " utilisateur"],
  [" visitantes", " visiteurs"],
  [" solicitud", " demande"],
  [" solicitudes", " demandes"],
  [" borrador", " brouillon"],
  [" revisión legal", " revue juridique"],
  [" asesor legal", " conseil juridique"],
  [" aprobación", " approbation"],
  [" privacidad", " confidentialité"],
  [" accesibilidad", " accessibilité"],
  [" derechos", " droits"],
  [" marcas", " marques"],
  [" encargados", " sous-traitants"],
  [" proveedor", " fournisseur"],
  [" consentimiento", " consentement"],
  [" preferencias", " préférences"],
  [" almacenamiento", " stockage"],
  [" navegador", " navigateur"],
  [" dispositivo", " appareil"],
  [" jurisdicción", " juridiction"],
  [" entidad", " entité"],
  [" materiales", " matériaux"],
  [" contenido", " contenu"],
  [" afirma", " allègue"],
  [" afirmación", " allégation"],
  [" afirmaciones", " allégations"],
  [" tratamiento", " traitement"],
  [" investigación", " recherche"],
  [" desarrollo", " développement"],
  [" arquitectura", " architecture"],
  [" seguridad", " sécurité"],
  [" emergencia", " urgence"],
  [" médica", " médicale"],
  [" médico", " médical"],
  [" clínica", " clinique"],
  [" clínico", " clinique"],
  [" operativo", " opérationnel"],
  [" operativas", " opérationnelles"],
  [" despliegue", " déploiement"],
  [" robótica", " robotique"],
  [" ingeniería", " ingénierie"],
  [" plataforma", " plateforme"],
  [" capital", " capital"],
  [" inversión", " investissement"],
  [" inversores", " investisseurs"],
  [" laboratorio", " laboratoire"],
  [" interfaz", " interface"],
  [" supervisión humana", " supervision humaine"],
  [" cuidado humano", " soins humains"],
  [" Qué ", " De quoi "],
  [" qué ", " ce que "],
  [" Cómo ", " Comment "],
  [" Por qué ", " Pourquoi "],
  [" Adónde ", " Où "],
  [" Quiénes somos", " Qui nous sommes"],
  [" Resumen", " Aperçu"],
  [" Estado", " Statut"],
  [" Cambios", " Modifications"],
  [" Compromiso", " Engagement"],
  [" Actualizaciones", " Mises à jour"],
  [" Todos los derechos reservados", " Tous droits réservés"],
  ["Copyright © 2026 SAVEN Core.", "Copyright © 2026 SAVEN Core."],
];

const ES_JA = [
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "構成目的の草案 — 最終的な法的文書ではありません。法的レビュー待ちです。"],
  ["Fecha pendiente de revisión legal", "日付は法的レビュー待ち"],
  ["Iniciar sesión / Registrarse", "サインイン / 登録"],
  ["Apoyo a la decisión con IA", "AI意思決定支援"],
  ["Acerca de", "概要"],
  ["Inicio", "ホーム"],
  ["Inversores", "投資家"],
  ["Laboratorios", "ラボ"],
  ["Sistemas", "システム"],
  ["Tecnología", "テクノロジー"],
  ["Investigación", "研究"],
  ["En desarrollo", "開発中"],
  ["Confianza", "信頼"],
  ["Contacto", "お問い合わせ"],
  ["Seguridad", "セキュリティ"],
  ["Política de privacidad", "プライバシーポリシー"],
  ["Términos de uso", "利用規約"],
  ["Política de cookies", "Cookieポリシー"],
  ["Declaración de accesibilidad", "アクセシビリティ声明"],
  ["Se publicará", "公開予定"],
  ["se publicará", "公開予定"],
  ["No se inventan", "本草案では創作しません"],
  ["este borrador", "本草案"],
  ["Esta página", "本ページ"],
  ["El sitio web", "本ウェブサイト"],
  ["sitio web", "ウェブサイト"],
  ["Pendiente de revisión legal", "法的レビュー待ち"],
  [" y ", "および"],
  [" o ", "または"],
  [" no ", "しない"],
  [" es ", "は"],
  [" son ", "は"],
  [" está ", "は"],
  [" pueden ", "できます"],
  [" información ", "情報"],
  [" datos ", "データ"],
  [" privacidad", "プライバシー"],
  [" cookies", "Cookie"],
  [" borrador", "草案"],
  [" revisión legal", "法的レビュー"],
  [" aprobación", "承認"],
  [" derechos", "権利"],
  [" seguridad", "セキュリティ"],
  [" investigación", "研究"],
  [" desarrollo", "開発"],
  [" arquitectura", "アーキテクチャ"],
  [" robótica", "ロボティクス"],
  [" ingeniería", "エンジニアリング"],
  [" supervisión humana", "人間の監督"],
  [" cuidado humano", "人間のケア"],
];

const ES_ZH = [
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "结构性草案 — 非最终法律文本。待法律审核。"],
  ["Fecha pendiente de revisión legal", "日期待法律审核"],
  ["Iniciar sesión / Registrarse", "登录 / 注册"],
  ["Apoyo a la decisión con IA", "AI 决策支持"],
  ["Acerca de", "关于"],
  ["Inicio", "首页"],
  ["Inversores", "投资者"],
  ["Laboratorios", "实验室"],
  ["Sistemas", "系统"],
  ["Tecnología", "技术"],
  ["Investigación", "研究"],
  ["En desarrollo", "开发中"],
  ["Confianza", "信任"],
  ["Contacto", "联系"],
  ["Seguridad", "安全"],
  ["Política de privacidad", "隐私政策"],
  ["Términos de uso", "使用条款"],
  ["Política de cookies", "Cookie 政策"],
  ["Declaración de accesibilidad", "无障碍声明"],
  ["Se publicará", "将发布"],
  ["se publicará", "将发布"],
  ["No se inventan", "本草案不虚构"],
  ["este borrador", "本草案"],
  ["Esta página", "本页"],
  ["El sitio web", "本网站"],
  ["sitio web", "网站"],
  ["Pendiente de revisión legal", "待法律审核"],
  [" y ", "以及"],
  [" o ", "或"],
  [" no ", "不"],
  [" es ", "是"],
  [" son ", "是"],
  [" información ", "信息"],
  [" datos ", "数据"],
  [" privacidad", "隐私"],
  [" cookies", "Cookie"],
  [" borrador", "草案"],
  [" revisión legal", "法律审核"],
  [" aprobación", "批准"],
  [" derechos", "权利"],
  [" seguridad", "安全"],
  [" investigación", "研究"],
  [" desarrollo", "开发"],
  [" arquitectura", "架构"],
  [" robótica", "机器人"],
  [" ingeniería", "工程"],
  [" supervisión humana", "人类监督"],
  [" cuidado humano", "人类关怀"],
];

const ES_AR = [
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "مسودة لأغراض هيكلية — ليست نصًا قانونيًا نهائيًا. بانتظار المراجعة القانونية."],
  ["Fecha pendiente de revisión legal", "التاريخ بانتظار المراجعة القانونية"],
  ["Iniciar sesión / Registrarse", "تسجيل الدخول / الاشتراك"],
  ["Apoyo a la decisión con IA", "دعم القرار بالذكاء الاصطناعي"],
  ["Acerca de", "حول"],
  ["Inicio", "الرئيسية"],
  ["Inversores", "المستثمرون"],
  ["Laboratorios", "المختبرات"],
  ["Sistemas", "الأنظمة"],
  ["Tecnología", "التكنولوجيا"],
  ["Investigación", "البحث"],
  ["En desarrollo", "قيد التطوير"],
  ["Confianza", "الثقة"],
  ["Contacto", "اتصل"],
  ["Seguridad", "الأمان"],
  ["Política de privacidad", "سياسة الخصوصية"],
  ["Términos de uso", "شروط الاستخدام"],
  ["Política de cookies", "سياسة ملفات تعريف الارتباط"],
  ["Declaración de accesibilidad", "بيان إمكانية الوصول"],
  ["Se publicará", "سيُنشر"],
  ["No se inventan", "لا يُختلق في هذه المسودة"],
  ["este borrador", "هذه المسودة"],
  ["Esta página", "هذه الصفحة"],
  ["El sitio web", "الموقع"],
  ["Pendiente de revisión legal", "بانتظار المراجعة القانونية"],
  [" y ", " و"],
  [" o ", " أو"],
  [" privacidad", " الخصوصية"],
  [" cookies", " ملفات تعريف الارتباط"],
  [" borrador", " مسودة"],
  [" revisión legal", " المراجعة القانونية"],
  [" derechos", " الحقوق"],
  [" seguridad", " الأمان"],
  [" investigación", " البحث"],
  [" desarrollo", " التطوير"],
  [" arquitectura", " الهندسة"],
  [" robótica", " الروبotics"],
  [" ingeniería", " الهندسة"],
  [" supervisión humana", " الإشراف البشري"],
  [" cuidado humano", " الرعاية البشرية"],
];

const ES_HE = [
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "טיוטה למטרות מבניות — אינה טקסט משפטי סופי. ממתינה לסקירה משפטית."],
  ["Fecha pendiente de revisión legal", "התאריך ממתין לסקירה משפטית"],
  ["Iniciar sesión / Registrarse", "התחברות / הרשמה"],
  ["Apoyo a la decisión con IA", "תמיכה בהחלטות באמצעות בינה מלאכותית"],
  ["Acerca de", "אודות"],
  ["Inicio", "דף הבית"],
  ["Inversores", "משקיעים"],
  ["Laboratorios", "מעבדות"],
  ["Sistemas", "מערכות"],
  ["Tecnología", "טכנולוגיה"],
  ["Investigación", "מחקר"],
  ["En desarrollo", "בפיתוח"],
  ["Confianza", "אמון"],
  ["Contacto", "יצירת קשר"],
  ["Seguridad", "אבטחה"],
  ["Política de privacidad", "מדיניות פרטיות"],
  ["Términos de uso", "תנאי שימוש"],
  ["Política de cookies", "מדיניות עוגיות"],
  ["Declaración de accesibilidad", "הצהרת נגישות"],
  ["Se publicará", "ייפורסם"],
  ["No se inventan", "לא מומצאים בטיוטה זו"],
  ["este borrador", "טיוטה זו"],
  ["Esta página", "עמוד זה"],
  ["El sitio web", "האתר"],
  ["Pendiente de revisión legal", "ממתין לסקירה משפטית"],
  [" y ", " ו"],
  [" o ", " או"],
  [" privacidad", " פרטיות"],
  [" cookies", " עוגיות"],
  [" borrador", " טיוטה"],
  [" revisión legal", " סקירה משפטית"],
  [" derechos", " זכויות"],
  [" seguridad", " אבטחה"],
  [" investigación", " מחקר"],
  [" desarrollo", " פיתוח"],
  [" arquitectura", " ארכיטקטורה"],
  [" robótica", " רובוטיקה"],
  [" ingeniería", " הנדסה"],
  [" supervisión humana", " פיקוח אנושי"],
  [" cuidado humano", " טיפול אנושי"],
];

const ES_RU = [
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ — Не окончательный юридический текст. Ожидает юридической проверки."],
  ["Fecha pendiente de revisión legal", "Дата ожидает юридической проверки"],
  ["Iniciar sesión / Registrarse", "Вход / Регистрация"],
  ["Apoyo a la decisión con IA", "Поддержка решений с ИИ"],
  ["Acerca de", "О разделе"],
  ["Inicio", "Главная"],
  ["Inversores", "Инвесторы"],
  ["Laboratorios", "Лаборатории"],
  ["Sistemas", "Системы"],
  ["Tecnología", "Технологии"],
  ["Investigación", "Исследования"],
  ["En desarrollo", "В разработке"],
  ["Confianza", "Доверие"],
  ["Contacto", "Контакты"],
  ["Seguridad", "Безопасность"],
  ["Política de privacidad", "Политика конфиденциальности"],
  ["Términos de uso", "Условия использования"],
  ["Política de cookies", "Политика cookie"],
  ["Declaración de accesibilidad", "Заявление о доступности"],
  ["Se publicará", "Будет опубликовано"],
  ["No se inventan", "В этом черновике не выдумываются"],
  ["este borrador", "этот черновик"],
  ["Esta página", "Эта страница"],
  ["El sitio web", "Сайт"],
  ["Pendiente de revisión legal", "Ожидает юридической проверки"],
  [" y ", " и "],
  [" o ", " или "],
  [" privacidad", " конфиденциальность"],
  [" cookies", " cookie"],
  [" borrador", " черновик"],
  [" revisión legal", " юридическая проверка"],
  [" derechos", " права"],
  [" seguridad", " безопасность"],
  [" investigación", " исследования"],
  [" desarrollo", " разработка"],
  [" arquitectura", " архитектура"],
  [" robótica", " робототехника"],
  [" ingeniería", " инженерия"],
  [" supervisión humana", " человеческий надзор"],
  [" cuidado humano", " человеческая забота"],
];

const ES_UK = [
  ["BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.", "ЧЕРНЕТКА ДЛЯ СТРУКТУРНИХ ЦІЛЕЙ — Не остаточний юридичний текст. Очікує юридичного перегляду."],
  ["Fecha pendiente de revisión legal", "Дата очікує юридичного перегляду"],
  ["Iniciar sesión / Registrarse", "Увійти / Зареєструватися"],
  ["Apoyo a la decisión con IA", "Підтримка рішень за допомогою ШІ"],
  ["Acerca de", "Про розділ"],
  ["Inicio", "Головна"],
  ["Inversores", "Інвестори"],
  ["Laboratorios", "Лабораторії"],
  ["Sistemas", "Системи"],
  ["Tecnología", "Технології"],
  ["Investigación", "Дослідження"],
  ["En desarrollo", "У розробці"],
  ["Confianza", "Довіра"],
  ["Contacto", "Контакт"],
  ["Seguridad", "Безпека"],
  ["Política de privacidad", "Політика конфіденційності"],
  ["Términos de uso", "Умови використання"],
  ["Política de cookies", "Політика файлів cookie"],
  ["Declaración de accesibilidad", "Заява про доступність"],
  ["Se publicará", "Буде опубліковано"],
  ["No se inventan", "У цій чернетці не вигадуються"],
  ["este borrador", "ця чернетка"],
  ["Esta página", "Ця сторінка"],
  ["El sitio web", "Сайт"],
  ["Pendiente de revisión legal", "Очікує юридичного перегляду"],
  [" y ", " та "],
  [" o ", " або "],
  [" privacidad", " конфіденційність"],
  [" cookies", " cookie"],
  [" borrador", " чернетка"],
  [" revisión legal", " юридичний перегляд"],
  [" derechos", " права"],
  [" seguridad", " безпека"],
  [" investigación", " дослідження"],
  [" desarrollo", " розробка"],
  [" arquitectura", " архітектура"],
  [" robótica", " робототехніка"],
  [" ingeniería", " інженерія"],
  [" supervisión humana", " людський нагляд"],
  [" cuidado humano", " людська опіка"],
];

const EN_OVERRIDES = {
  fr: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Un système pour interagir avec des robots et des machines autonomes — afin que les personnes restent aux commandes d'un travail physique complexe.",
    "SAVEN Core": "SAVEN Core",
    "SAVEN Robotics Lab": "SAVEN Robotics Lab",
    "SAVEN Robotics Interface": "SAVEN Robotics Interface",
    "Internal Future Lab": "Internal Future Lab",
  },
  ja: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "ロボットや自律機械とやり取りするためのシステム — 人が複雑な物理作業の指揮を握り続けられるように。",
  },
  "zh-cn": {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "用于与机器人和自主机器交互的系统 — 让人始终掌控复杂的物理工作。",
  },
  ar: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "نظام للتفاعل مع الروبots والآلات المستقلة — حتى يبقى الناس في قيادة العمل الفيزيائي المعقد.",
  },
  he: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "מערכת לאינטראקציה עם רובוטים ומכונות אוטונומיות — כדי שאנשים יישארו בשליטה על עבודה פיזית מורכבת.",
  },
  ru: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Система для взаимодействия с роботами и автономными машинами — чтобы люди сохраняли контроль над сложной физической работой.",
  },
  uk: {
    "A system for interacting with robots and autonomous machines — so people stay in command of complex physical work.":
      "Система для взаємодії з роботами та автономними машинами — щоб люди залишалися на команді складної фізичної роботи.",
  },
};

const LOCALE_RULES = {
  fr: ES_FR,
  ja: ES_JA,
  "zh-cn": ES_ZH,
  ar: ES_AR,
  he: ES_HE,
  ru: ES_RU,
  uk: ES_UK,
};

function translate(key, locale) {
  if (EN_OVERRIDES[locale]?.[key]) return EN_OVERRIDES[locale][key];
  const esVal = es[key];
  return applyRules(esVal, LOCALE_RULES[locale]);
}

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(dir, name),
    `/** Locale module (D-0161) — composed from es reference. */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

const outDir = path.join(root, "tmp/translations");

for (const locale of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const out = {};
  for (const key of enKeys) {
    out[key] = translate(key, locale);
  }
  fs.writeFileSync(
    path.join(outDir, `${locale}.json`),
    JSON.stringify(out, null, 2) + "\n",
  );
  writeModule(
    `${locale}-flagship.mjs`,
    Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])),
  );
  writeModule(
    `${locale}-legal.mjs`,
    Object.fromEntries(legalKeys.map((k) => [k, out[k]])),
  );
  const stillEs = enKeys.filter((k) => out[k] === es[k]).length;
  const stillEn = enKeys.filter((k) => out[k] === k).length;
  console.log(`${locale}: stillEs=${stillEs} stillEn=${stillEn}`);
}
