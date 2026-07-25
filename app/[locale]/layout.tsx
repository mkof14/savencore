import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "@/components/site/site-shell.css";
import "@/components/experience/experience.css";
import {
  getHtmlLang,
  getTextDirection,
  isLocale,
  LOCALES,
  type Locale,
} from "@/config/locales";
import { experienceFontVariables } from "@/design/fonts";

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
    <html
      lang={getHtmlLang(locale)}
      dir={getTextDirection(locale)}
      className={experienceFontVariables}
    >
      <body>
        <div className="site-shell">
          <SiteHeader locale={locale} />
          <main className="site-shell__main">{children}</main>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
