import Link from "next/link";

import type { PageLink } from "@/components/pages/page-types";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type PageRelatedLinksProps = {
  locale: Locale;
  links: readonly PageLink[];
  heading?: string;
};

export function PageRelatedLinks({
  locale,
  links,
  heading = "Related",
}: PageRelatedLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <aside className="page-related" aria-labelledby="page-related-heading">
      <div className="page-shell__inner">
        <h2 id="page-related-heading" className="page-related__heading">
          {heading}
        </h2>
        <ul className="page-related__list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={localizePath(locale, link.href)}
                className="page-related__link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
