import Link from "next/link";

import { SavenLogo } from "@/components/brand/SavenLogo";
import { InstallAppControl } from "@/components/pwa/InstallAppControl";
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
 * Layer-1 chrome — logo, important hubs, Sign In/Up, theme, language (D-0153–D-0156).
 * Full leaf map remains in the footer.
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
          <InstallAppControl locale={locale} placement="header" />
          <Link
            href={localizePath(locale, "/auth/sign-in/")}
            className="site-header__text-link"
          >
            {ui.nav.signIn}
          </Link>
          <ThemeSwitch locale={locale} placement="header" />
          <LanguageSelector
            locale={locale}
            idPrefix="header-language"
            direction="down"
          />
        </div>

        <div className="site-header__mobile-controls">
          <InstallAppControl locale={locale} placement="header" />
          <ThemeSwitch locale={locale} placement="header" />
          <MobileNavigation locale={locale} />
        </div>
      </div>
    </header>
  );
}
