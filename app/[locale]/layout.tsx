import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import {
  getHtmlLang,
  getTextDirection,
  isLocale,
  LOCALES,
  type Locale,
} from "@/config/locales";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** Reject unsupported locale segments instead of treating them as valid routes. */
export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return (
    <html lang={getHtmlLang(locale)} dir={getTextDirection(locale)}>
      <body>{children}</body>
    </html>
  );
}
