import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

import { DesktopNavigation } from "./DesktopNavigation";
import { LanguageSelector } from "./LanguageSelector";
import { MobileNavigation } from "./MobileNavigation";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-shell__inner site-header__bar">
        <Link
          href={localizePath(locale, "/")}
          className="site-header__brand"
        >
          SAVEN Core
        </Link>

        <div className="site-header__desktop">
          <DesktopNavigation locale={locale} />
        </div>

        <div className="site-header__utilities">
          <LanguageSelector locale={locale} idPrefix="desktop-language" />
        </div>

        <div className="site-header__mobile-controls">
          <MobileNavigation locale={locale} />
        </div>
      </div>
    </header>
  );
}
