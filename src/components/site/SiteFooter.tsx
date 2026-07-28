"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
 * Apple-style footer (D-0209): each published section is its own equal column
 * in one forced desktop row — Architecture never stacks under Technology.
 */
/** Layer 2 depth map — published domain destinations + Architecture + Legal. */
export function SiteFooter({
  locale,
  showAdminLink = false,
}: SiteFooterProps) {
  const ui = getUi(locale);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 859px)");
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

  const renderGroup = (group: (typeof groups)[number]) => {
    const title = getFooterGroupTitle(locale, group.id, group.title);
    const headingId = `footer-${group.id}`;
    const isLegal = group.id === "legal";
    const groupClass = `site-footer__group${isLegal ? " site-footer__group--legal" : ""}`;

    if (isCompact) {
      return (
        <details key={group.id} className={groupClass}>
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
          </ul>
        </details>
      );
    }

    return (
      <section
        key={group.id}
        className={groupClass}
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
        </ul>
      </section>
    );
  };

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
          {groups.map((group, columnIndex) => (
            <div
              key={group.id}
              className={`site-footer__column site-footer__column--${columnIndex + 1}`}
            >
              {renderGroup(group)}
            </div>
          ))}
        </div>

        <div className="site-footer__social-row">
          <FooterSocials locale={locale} />
        </div>

        <div className="site-footer__bar">
          <p className="site-footer__copyright">
            {ui.footer.copyrightLabel} © 2026 <BrandName />.{" "}
            {ui.footer.rightsReserved}
          </p>

          <div className="site-footer__bar-links">
            <InstallAppControl locale={locale} placement="footer" />
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
