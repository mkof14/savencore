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
import { MedicalDisclaimerNotice } from "./MedicalDisclaimerNotice";
import { ThemeSwitch } from "./ThemeSwitch";

type SiteFooterProps = {
  locale: Locale;
  /** When true, show restricted Admin link (signed-in role ≥ viewer). */
  showAdminLink?: boolean;
};

/**
 * Compact expandable footer depth map (D-0293 / D-0292):
 * section titles stay visible; links open on demand (exclusive accordion).
 * Install app lives in the Company column; Contact form on `/contact/` only;
 * bottom order: socials → disclaimer → bar.
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
          <p className="site-footer__tagline">
            {taglineLines.map((line) => (
              <span key={line} className="site-footer__tagline-line">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="site-footer__grid">
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
                <details className={groupClass} name="site-footer-nav">
                  <summary className="site-footer__group-title" id={headingId}>
                    {title}
                  </summary>
                  <ul className="site-footer__list" aria-labelledby={headingId}>
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
                </details>
              </div>
            );
          })}
        </div>

        <div className="site-footer__social-row">
          <FooterSocials locale={locale} />
        </div>

        <MedicalDisclaimerNotice locale={locale} placement="footer" />

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
