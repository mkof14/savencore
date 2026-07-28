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

/** Short honest site notice (D-0216) — replaces structural DRAFT banner. */
export const LEGAL_SITE_NOTICE =
  "These pages describe SAVEN Core information practices and terms of site use. For questions: info@savencore.com.";

/** @deprecated Use LEGAL_SITE_NOTICE — kept only to avoid stale imports during transition. */
export const LEGAL_DRAFT_BANNER = LEGAL_SITE_NOTICE;

export const LEGAL_LAST_UPDATED = "28 July 2026";

const SITE_NOTICE_BY_LOCALE: Record<ContentLocale, string> = {
  en: LEGAL_SITE_NOTICE,
  es: "Estas páginas describen las prácticas de información de SAVEN Core y los términos de uso del sitio. Preguntas: info@savencore.com.",
  de: "Diese Seiten beschreiben Informationspraktiken von SAVEN Core und Nutzungsbedingungen der Website. Fragen: info@savencore.com.",
  fr: "Ces pages décrivent les pratiques d’information de SAVEN Core et les conditions d’utilisation du site. Questions : info@savencore.com.",
  ja: "これらのページは、SAVEN Coreの情報取り扱いとサイト利用条件を説明します。お問い合わせ: info@savencore.com。",
  "zh-cn": "这些页面说明 SAVEN Core 的信息处理做法与网站使用条款。咨询：info@savencore.com。",
  ar: "تصف هذه الصفحات ممارسات معلومات SAVEN Core وشروط استخدام الموقع. للاستفسار: info@savencore.com.",
  he: "דפים אלה מתארים את נוהלי המידע של SAVEN Core ואת תנאי השימוש באתר. לשאלות: info@savencore.com.",
  uk: "Ці сторінки описують інформаційні практики SAVEN Core і умови користування сайтом. Питання: info@savencore.com.",
  ru: "Эти страницы описывают информационные практики SAVEN Core и условия использования сайта. Вопросы: info@savencore.com.",
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
