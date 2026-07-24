import Link from "next/link";

import type { Locale } from "@/config/locales";
import { continueExploring } from "@/content/home/knowledge-explorer";
import { localizePath } from "@/navigation/locale-path";

type ContinueExploringProps = {
  locale: Locale;
};

/**
 * Structured domain entry points — not plain link lists.
 */
export function ContinueExploring({ locale }: ContinueExploringProps) {
  return (
    <section
      className="kx-continue"
      aria-labelledby="continue-exploring-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">Continue exploring</p>
          <h2 id="continue-exploring-heading" className="kx-section-header__title">
            Choose a domain entrance
          </h2>
        </header>

        <ul className="kx-continue__list">
          {continueExploring.map((item) => (
            <li key={item.id}>
              <Link
                href={localizePath(locale, item.href)}
                className="kx-continue__card"
              >
                <span className="kx-continue__title">{item.title}</span>
                <span className="kx-continue__detail">{item.detail}</span>
                <span className="kx-continue__action" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
