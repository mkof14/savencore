import Link from "next/link";

import type { EngineeringLink } from "@/components/engineering/engineering-types";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type ReferenceLinksProps = {
  locale: Locale;
  links: readonly EngineeringLink[];
  heading?: string;
};

export function ReferenceLinks({
  locale,
  links,
  heading = "Reference Links",
}: ReferenceLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <nav className="eng-block" aria-labelledby="eng-reference-heading">
      <h2 id="eng-reference-heading" className="eng-block__heading">
        {heading}
      </h2>
      <ul className="eng-link-list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={localizePath(locale, link.href)}
              className="eng-text-link"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
