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

export const LEGAL_DRAFT_BANNER =
  "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review. Not an active privacy notice, terms agreement, or consent UI.";

export const LEGAL_LAST_UPDATED = "Date pending legal review";

const DRAFT_BANNER_BY_LOCALE: Record<ContentLocale, string> = {
  en: LEGAL_DRAFT_BANNER,
  es: "BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión jurídica. No es un aviso de privacidad activo, un acuerdo de términos ni una interfaz de consentimiento.",
  de: "ENTWURF ZU STRUKTURELLEN ZWECKEN — Kein endgültiger Rechtstext. Rechtliche Prüfung ausstehend. Keine aktive Datenschutzerklärung, keine AGB-Vereinbarung und keine Einwilligungs-UI.",
  fr: "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique. Ce n’est pas un avis de confidentialité actif, un accord de conditions ni une interface de consentement.",
  ja: "構成目的の草案 — 最終的な法的文書ではありません。法的レビュー待ちです。有効なプライバシー通知、利用規約の合意、または同意UIではありません。",
  "zh-cn": "结构性草案 — 非最终法律文本。待法律审核。不是有效的隐私声明、条款协议或同意界面。",
  ar: "مسودة لأغراض هيكلية — ليست نصًا قانونيًا نهائيًا. بانتظار المراجعة القانونية. ليست إشعار خصوصية ساريًا ولا اتفاق شروط ولا واجهة موافقة.",
  he: "טיוטה למטרות מבניות — אינה טקסט משפטי סופי. ממתינה לסקירה משפטית. אינה הודעת פרטיות פעילה, הסכם תנאים או ממשק הסכמה.",
  uk: "ЧЕРНЕТКА ДЛЯ СТРУКТУРНИХ ЦІЛЕЙ — Не остаточний юридичний текст. Очікує юридичного перегляду. Це не активне повідомлення про конфіденційність, угода про умови чи інтерфейс згоди.",
  ru: "ЧЕРНОВИК ДЛЯ СТРУКТУРНЫХ ЦЕЛЕЙ — Не окончательный юридический текст. Ожидает юридической проверки. Это не действующее уведомление о конфиденциальности, соглашение об условиях и не интерфейс согласия.",
};

const LAST_UPDATED_BY_LOCALE: Record<ContentLocale, string> = {
  en: LEGAL_LAST_UPDATED,
  es: "Fecha pendiente de revisión jurídica",
  de: "Datum ausstehend — rechtliche Prüfung",
  fr: "Date en attente de revue juridique",
  ja: "日付は法的レビュー待ち",
  "zh-cn": "日期待法律审核",
  ar: "التاريخ بانتظار المراجعة القانونية",
  he: "התאריך ממתין לסקירה משפטית",
  uk: "Дата очікує юридичного перегляду",
  ru: "Дата ожидает юридической проверки",
};

export function getLegalDraftBanner(locale: Locale): string {
  return DRAFT_BANNER_BY_LOCALE[resolveContentLocale(locale)];
}

export function getLegalLastUpdatedLabel(locale: Locale): string {
  return LAST_UPDATED_BY_LOCALE[resolveContentLocale(locale)];
}
