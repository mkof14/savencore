import Link from "next/link";

import { SavenLogo } from "@/components/brand/SavenLogo";
import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

import { DesktopNavigation } from "./DesktopNavigation";
import { LanguageSelector } from "./LanguageSelector";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeSwitch } from "./ThemeSwitch";

type SiteHeaderProps = {
  locale: Locale;
};

/**
 * Layer-1 chrome — logo, important hubs, Search, theme, language, Sign In/Up (D-0153–D-0156 / D-0283).
 * Full leaf map remains in the footer. Install app lives in the footer only (D-0164).
 * Logo tone="dark" base; light theme flips ink via CSS (D-0171).
 * Sign In/Up sits after language (D-0283).
 */
export function SiteHeader({ locale }: SiteHeaderProps) {
  const ui = getUi(locale);

  return (
    <header className="site-header">
      <div className="site-shell__inner site-header__bar">
        <SavenLogo
          locale={locale}
          variant="header"
          tone="dark"
          className="site-header__brand"
        />

        <div className="site-header__desktop">
          <DesktopNavigation locale={locale} />
        </div>

        <div className="site-header__utilities">
          <Link
            href={localizePath(locale, "/search/")}
            className="site-header__text-link"
          >
            {ui.search.navLabel}
          </Link>
          <ThemeSwitch locale={locale} placement="header" />
          <LanguageSelector
            locale={locale}
            idPrefix="header-language"
            direction="down"
          />
          <Link
            href={localizePath(locale, "/auth/sign-in/")}
            className="site-header__text-link"
          >
            {ui.nav.signIn}
          </Link>
        </div>

        <div className="site-header__mobile-controls">
          <ThemeSwitch locale={locale} placement="header" />
          <MobileNavigation locale={locale} />
        </div>
      </div>
    </header>
  );
}
