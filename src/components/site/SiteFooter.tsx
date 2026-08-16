"use client";

import Link from "next/link";

import { BrandName } from "@/components/brand/BrandName";
import { SavenLogo } from "@/components/brand/SavenLogo";
import { InstallAppControl } from "@/components/pwa/InstallAppControl";
import type { Locale } from "@/config/locales";
import {
  getFooterGroupTitle,
  getNavEntryLabel,
} from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { isFooterLinkPublished } from "@/navigation/navigation-types";
import { footerNavigation } from "@/navigation/site-navigation";

import { FooterSocials } from "./FooterSocials";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSwitch } from "./ThemeSwitch";

type SiteFooterProps = {
  locale: Locale;
  /** When true, show restricted Admin link (signed-in role ≥ viewer). */
  showAdminLink?: boolean;
};

/**
 * Always-visible footer columns (D-0297): long Trust · Legal lists use More….
 * Sitemap stays left of socials as a page link. Install app in Company.
 */
export function SiteFooter({
  locale,
  showAdminLink = false,
}: SiteFooterProps) {
  const ui = getUi(locale);
  const taglineLines = ui.footer.tagline
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const groups = footerNavigation
    .map((group) => ({
      ...group,
      links: group.links
        .filter(isFooterLinkPublished)
        // Always-visible Sitemap sits beside socials (D-0296).
        .filter((link) => link.id !== "footer-company-sitemap"),
    }))
    .filter((group) => group.links.length > 0);

  const sitemapLabel = getNavEntryLabel(
    locale,
    "footer-company-sitemap",
    "Sitemap",
  );

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
          <p className="site-footer__tagline">
            {taglineLines.map((line) => (
              <span key={line} className="site-footer__tagline-line">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="site-footer__grid" id="site-footer-map">
          {groups.map((group, columnIndex) => {
            const title = getFooterGroupTitle(locale, group.id, group.title);
            const headingId = `footer-${group.id}`;
            const isTrustLegal = group.id === "trustLegal";
            const groupClass = `site-footer__group${isTrustLegal ? " site-footer__group--legal" : ""}`;
            const installItem =
              group.id === "company" ? (
                <li key="footer-install-app" className="site-footer__install-item">
                  <InstallAppControl locale={locale} placement="footer" />
                </li>
              ) : null;

            return (
              <div
                key={group.id}
                className={`site-footer__column site-footer__column--${columnIndex + 1}`}
              >
                <section className={groupClass} aria-labelledby={headingId}>
                  <h2 className="site-footer__group-title" id={headingId}>
                    {title}
                  </h2>
                  <ul className="site-footer__list">
                    {group.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={localizePath(locale, link.href)}
                          className={
                            link.id === "footer-legal-more"
                              ? "site-footer__link site-footer__link--more"
                              : "site-footer__link"
                          }
                        >
                          {getNavEntryLabel(locale, link.id, link.label)}
                        </Link>
                      </li>
                    ))}
                    {installItem}
                  </ul>
                </section>
              </div>
            );
          })}
        </div>

        <div className="site-footer__social-row">
          <Link
            href={localizePath(locale, "/sitemap/")}
            className="site-footer__text-link site-footer__text-link--sitemap"
          >
            {sitemapLabel}
          </Link>
          <FooterSocials locale={locale} />
        </div>

        <div className="site-footer__bar">
          <p className="site-footer__copyright">
            {ui.footer.copyrightLabel} © 2026 <BrandName />.{" "}
            {ui.footer.rightsReserved}
          </p>

          <div className="site-footer__bar-links">
            <Link
              href={localizePath(locale, "/auth/sign-in/")}
              className="site-footer__text-link"
            >
              {ui.footer.signIn}
            </Link>
            {showAdminLink ? (
              <Link
                href={localizePath(locale, "/admin/")}
                className="site-footer__text-link"
              >
                {ui.footer.admin}
              </Link>
            ) : null}
          </div>

          <div className="site-footer__utilities">
            <LanguageSelector
              locale={locale}
              idPrefix="footer-language"
              direction="up"
            />
            <ThemeSwitch locale={locale} placement="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
