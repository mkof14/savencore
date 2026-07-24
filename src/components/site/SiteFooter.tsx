import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";
import {
  FOOTER_COPYRIGHT,
  footerNavigation,
} from "@/navigation/site-navigation";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-shell__inner">
        <div className="site-footer__grid">
          {footerNavigation.map((group) => (
            <section key={group.id} aria-labelledby={`footer-${group.id}`}>
              <h2 className="site-footer__group-title" id={`footer-${group.id}`}>
                {group.title}
              </h2>
              <ul className="site-footer__list">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={localizePath(locale, link.href)}
                      className="site-footer__link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="site-footer__meta">{FOOTER_COPYRIGHT}</p>
      </div>
    </footer>
  );
}
