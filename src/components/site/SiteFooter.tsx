"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "@/config/locales";
import {
  getFooterGroupTitle,
  getNavEntryLabel,
} from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import {
  isFooterLinkPublished,
  type FooterLinkItem,
} from "@/navigation/navigation-types";
import {
  FOOTER_VERSION,
  footerNavigation,
} from "@/navigation/site-navigation";

import { LanguageSelector } from "./LanguageSelector";
import { ThemeSwitch } from "./ThemeSwitch";

type SiteFooterProps = {
  locale: Locale;
};

function FooterLink({
  locale,
  link,
  comingSoonLabel,
}: {
  locale: Locale;
  link: FooterLinkItem;
  comingSoonLabel: string;
}) {
  const label = getNavEntryLabel(locale, link.id, link.label);

  if (isFooterLinkPublished(link)) {
    return (
      <Link
        href={localizePath(locale, link.href)}
        className="site-footer__link"
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="site-footer__link site-footer__link--soon"
      disabled
      aria-disabled="true"
    >
      <span className="site-footer__link-label">{label}</span>
      <span className="site-footer__soon">{comingSoonLabel}</span>
    </button>
  );
}

/** Complete professional footer — full navigation hub. */
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

  return (
    <footer className="site-footer">
      <div className="site-shell__inner site-footer__inner">
        <div className="site-footer__intro">
          <p className="site-footer__brand">SAVEN Core</p>
          <p className="site-footer__tagline">{ui.footer.tagline}</p>
        </div>

        <div className="site-footer__grid">
          {footerNavigation.map((group) => {
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
                        <FooterLink
                          locale={locale}
                          link={link}
                          comingSoonLabel={ui.footer.comingSoon}
                        />
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
                      <FooterLink
                        locale={locale}
                        link={link}
                        comingSoonLabel={ui.footer.comingSoon}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="site-footer__bar">
          <p className="site-footer__copyright">{ui.footer.copyrightShort}</p>

          <ul className="site-footer__legal">
            <li>
              <button
                type="button"
                className="site-footer__bar-link site-footer__bar-link--soon"
                disabled
                aria-disabled="true"
              >
                {ui.footer.privacy}
                <span className="site-footer__soon">{ui.footer.comingSoon}</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="site-footer__bar-link site-footer__bar-link--soon"
                disabled
                aria-disabled="true"
              >
                {ui.footer.terms}
                <span className="site-footer__soon">{ui.footer.comingSoon}</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="site-footer__bar-link site-footer__bar-link--soon"
                disabled
                aria-disabled="true"
              >
                {ui.footer.cookies}
                <span className="site-footer__soon">{ui.footer.comingSoon}</span>
              </button>
            </li>
          </ul>

          <div className="site-footer__utilities">
            <LanguageSelector locale={locale} idPrefix="footer-language" />
            <ThemeSwitch locale={locale} />
            <p className="site-footer__version">
              {ui.footer.version} {FOOTER_VERSION}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
