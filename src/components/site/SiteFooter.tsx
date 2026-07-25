"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BrandName } from "@/components/brand/BrandName";
import { SavenLogo } from "@/components/brand/SavenLogo";
import type { Locale } from "@/config/locales";
import {
  getFooterGroupTitle,
  getNavEntryLabel,
} from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { isFooterLinkPublished } from "@/navigation/navigation-types";
import { footerNavigation } from "@/navigation/site-navigation";

import { LanguageSelector } from "./LanguageSelector";
import { ThemeSwitch } from "./ThemeSwitch";

type SiteFooterProps = {
  locale: Locale;
};

/** Professional footer — published destinations only. */
export function SiteFooter({ locale }: SiteFooterProps) {
  const ui = getUi(locale);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 899px)");
    const sync = () => setIsCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const groups = footerNavigation
    .map((group) => ({
      ...group,
      links: group.links.filter(isFooterLinkPublished),
    }))
    .filter((group) => group.links.length > 0);

  return (
    <footer className="site-footer">
      <div className="site-shell__inner site-footer__inner">
        <div className="site-footer__intro">
          <SavenLogo
            locale={locale}
            variant="footer"
            tone="dark"
            className="site-footer__brand"
          />
          <p className="site-footer__tagline">{ui.footer.tagline}</p>
        </div>

        <div className="site-footer__grid">
          {groups.map((group) => {
            const title = getFooterGroupTitle(locale, group.id, group.title);
            const headingId = `footer-${group.id}`;

            if (isCompact) {
              return (
                <details key={group.id} className="site-footer__group">
                  <summary
                    className="site-footer__group-title"
                    id={headingId}
                  >
                    {title}
                  </summary>
                  <ul className="site-footer__list" aria-labelledby={headingId}>
                    {group.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={localizePath(locale, link.href)}
                          className="site-footer__link"
                        >
                          {getNavEntryLabel(locale, link.id, link.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            }

            return (
              <section
                key={group.id}
                className="site-footer__group"
                aria-labelledby={headingId}
              >
                <h2 className="site-footer__group-title" id={headingId}>
                  {title}
                </h2>
                <ul className="site-footer__list">
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={localizePath(locale, link.href)}
                        className="site-footer__link"
                      >
                        {getNavEntryLabel(locale, link.id, link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="site-footer__bar">
          <p className="site-footer__copyright">
            © 2026 <BrandName />. {ui.footer.rightsReserved}
          </p>

          <div className="site-footer__utilities">
            <LanguageSelector locale={locale} idPrefix="footer-language" />
            <ThemeSwitch locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
}
