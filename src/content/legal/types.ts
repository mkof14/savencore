import type { Locale } from "@/config/locales";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";

export type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

export type LegalPageContent = {
  slug: string;
  title: string;
  summary: string;
  sections: readonly LegalSection[];
};

/**
 * Short honest site notice (D-0216 / D-0220) — website policies, not a
 * counsel-complete multi-jurisdiction regulatory pack. No invented entity/DPO/law.
 */
export const LEGAL_SITE_NOTICE =
  "These pages are site policies and terms of use for this website — not a complete multi-jurisdiction regulatory compliance pack. For questions: info@savencore.com.";

/** @deprecated Use LEGAL_SITE_NOTICE — kept only to avoid stale imports during transition. */
export const LEGAL_DRAFT_BANNER = LEGAL_SITE_NOTICE;

export const LEGAL_LAST_UPDATED = "13 August 2026";

const SITE_NOTICE_BY_LOCALE: Record<ContentLocale, string> = {
  en: LEGAL_SITE_NOTICE,
  es: "Estas páginas son políticas del sitio y términos de uso de este sitio web — no un paquete completo de cumplimiento normativo multi-jurisdiccional. Preguntas: info@savencore.com.",
  de: "Diese Seiten sind Website-Richtlinien und Nutzungsbedingungen dieser Website — kein vollständiges multi-jurisdiktionelles Regulierungspaket. Fragen: info@savencore.com.",
  fr: "Ces pages sont des politiques du site et des conditions d’utilisation de ce site web — pas un pack réglementaire multi-juridictionnel complet. Questions : info@savencore.com.",
  ja: "これらのページは本ウェブサイトのサイトポリシーおよび利用条件であり、複数法域にわたる完全な規制コンプライアンスパックではありません。お問い合わせ: info@savencore.com。",
  "zh-cn": "这些页面是本网站的站点政策与使用条款——并非完整的多司法辖区监管合规套件。咨询：info@savencore.com。",
  ar: "هذه الصفحات سياسات موقع وشروط استخدام لهذا الموقع الإلكتروني — وليست حزمة امتثال تنظيمي كاملة متعددة الولايات القضائية. للاستفسار: info@savencore.com.",
  he: "דפים אלה הם מדיניות אתר ותנאי שימוש של אתר זה — לא חבילת ציות רגולטורי מלאה לכל תחומי השיפוט. לשאלות: info@savencore.com.",
  uk: "Ці сторінки — політики сайту та умови використання цього вебсайту, а не повний багатоюрисдикційний регуляторний пакет. Питання: info@savencore.com.",
  ru: "Эти страницы — политики сайта и условия использования этого веб-сайта, а не полный многоюрисдикционный регуляторный пакет. Вопросы: info@savencore.com.",
};

const LAST_UPDATED_BY_LOCALE: Record<ContentLocale, string> = {
  en: LEGAL_LAST_UPDATED,
  es: "28 de julio de 2026",
  de: "28. Juli 2026",
  fr: "28 juillet 2026",
  ja: "2026年7月28日",
  "zh-cn": "2026年7月28日",
  ar: "28 يوليو 2026",
  he: "28 ביולי 2026",
  uk: "28 липня 2026",
  ru: "28 июля 2026",
};

export function getLegalSiteNotice(locale: Locale): string {
  return SITE_NOTICE_BY_LOCALE[resolveContentLocale(locale)];
}

/** @deprecated Prefer getLegalSiteNotice (D-0216). */
export function getLegalDraftBanner(locale: Locale): string {
  return getLegalSiteNotice(locale);
}

export function getLegalLastUpdatedLabel(locale: Locale): string {
  return LAST_UPDATED_BY_LOCALE[resolveContentLocale(locale)];
}
