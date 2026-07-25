"use client";

import Link from "next/link";

import type { Locale } from "@/config/locales";
import {
  getFooterGroupTitle,
  getNavEntryLabel,
} from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { footerNavigation } from "@/navigation/site-navigation";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const ui = getUi(locale);

  return (
    <footer className="site-footer">
      <div className="site-shell__inner">
        <div className="site-footer__grid">
          {footerNavigation.map((group) => {
            const title = getFooterGroupTitle(locale, group.id, group.title);
            const headingId = `footer-${group.id}`;

            return (
              <details key={group.id} className="site-footer__group">
                <summary
                  className="site-footer__group-title"
                  id={headingId}
                >
                  {title}
                </summary>
                {group.planned || group.links.length === 0 ? (
                  <p className="site-footer__planned" aria-labelledby={headingId}>
                    {ui.footer.plannedNote}
                  </p>
                ) : (
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
                )}
              </details>
            );
          })}
        </div>
        <p className="site-footer__meta">{ui.footer.copyright}</p>
      </div>
    </footer>
  );
}
