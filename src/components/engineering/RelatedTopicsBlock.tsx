import Link from "next/link";

import type { EngineeringLink } from "@/components/engineering/engineering-types";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type RelatedTopicsBlockProps = {
  locale: Locale;
  links: readonly EngineeringLink[];
  heading?: string;
};

export function RelatedTopicsBlock({
  locale,
  links,
  heading = "Related Topics",
}: RelatedTopicsBlockProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <aside className="eng-block" aria-labelledby="eng-related-heading">
      <h2 id="eng-related-heading" className="eng-block__heading">
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
    </aside>
  );
}
