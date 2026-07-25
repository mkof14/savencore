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

/** Full navigation map — always visible, strongly grouped. */
export function SiteFooter({ locale }: SiteFooterProps) {
  const ui = getUi(locale);

  return (
    <footer className="site-footer">
      <div className="site-shell__inner">
        <p className="site-footer__brand">SAVEN Core</p>
        <div className="site-footer__grid">
          {footerNavigation.map((group) => {
            const title = getFooterGroupTitle(locale, group.id, group.title);
            const headingId = `footer-${group.id}`;

            return (
              <section
                key={group.id}
                className="site-footer__group"
                aria-labelledby={headingId}
              >
                <h2 className="site-footer__group-title" id={headingId}>
                  {title}
                </h2>
                {group.planned || group.links.length === 0 ? (
                  <p className="site-footer__planned">{ui.footer.plannedNote}</p>
                ) : (
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
                )}
              </section>
            );
          })}
        </div>
        <p className="site-footer__meta">{ui.footer.copyright}</p>
      </div>
    </footer>
  );
}
