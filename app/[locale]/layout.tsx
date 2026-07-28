import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { roleAtLeast } from "@/admin/roles";
import { auth } from "@/auth";
import { RegisterServiceWorker } from "@/components/pwa/RegisterServiceWorker";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "@/components/site/site-shell.css";
import "@/components/experience/experience.css";
import {
  SITE_THEME_COLOR_DARK,
  SITE_THEME_COLOR_LIGHT,
} from "@/config/site";
import {
  getHtmlLang,
  getTextDirection,
  isLocale,
  LOCALES,
  type Locale,
} from "@/config/locales";
import { experienceFontVariables } from "@/design/fonts";
import { isSmtpConfigured } from "@/lib/admin/smtp";
import { buildLocaleLayoutMetadata } from "@/lib/seo/metadata";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** Reject unsupported locale segments instead of treating them as valid routes. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  return buildLocaleLayoutMetadata(localeParam);
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: SITE_THEME_COLOR_LIGHT },
    { media: "(prefers-color-scheme: dark)", color: SITE_THEME_COLOR_DARK },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const session = await auth();
  const showAdminLink = roleAtLeast(session?.user?.role, "viewer");
  const smtpConfigured = isSmtpConfigured();

  return (
    <html
      lang={getHtmlLang(locale)}
      dir={getTextDirection(locale)}
      className={experienceFontVariables}
      suppressHydrationWarning
    >
      <head>
        {/* Icons also declared in buildLocaleLayoutMetadata (D-0211); ?v=211 busts sticky caches. */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png?v=211"
        />
        <meta name="apple-mobile-web-app-title" content="SAVEN Core" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("savencore-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`,
          }}
        />
        <OrganizationJsonLd />
      </head>
      <body>
        <div className="site-shell">
          <SiteHeader locale={locale} />
          <main className="site-shell__main">{children}</main>
          <SiteFooter
            locale={locale}
            showAdminLink={showAdminLink}
            smtpConfigured={smtpConfigured}
          />
        </div>
        <RegisterServiceWorker />
      </body>
    </html>
  );
}
