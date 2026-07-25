import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getHomeContent } from "@/content/home/get-home-content";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type ContinueExploringProps = {
  locale: Locale;
};

/** Structured topic entrances. */
export function ContinueExploring({ locale }: ContinueExploringProps) {
  const items = getHomeContent(locale).continueExploring;
  const ui = getUi(locale);

  return (
    <section
      className="kx-continue"
      aria-labelledby="continue-exploring-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">{ui.home.continue}</p>
          <h2
            id="continue-exploring-heading"
            className="kx-section-header__title"
          >
            {ui.home.chooseEntrance}
          </h2>
        </header>

        <ul className="kx-continue__list">
          {items.map((item) => (
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
