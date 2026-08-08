import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { localizePath } from "@/navigation/locale-path";

import "./lab.css";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Experiments hub (D-0263) — sandbox for novelties without touching the public home.
 * Linked from footer Resources only; robots noindex + sitemap excluded.
 */
export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: "/lab/",
    title: ui.lab.title,
    description: ui.lab.lead.slice(0, 320),
    noIndex: true,
  });
}

const EXPERIMENTS = [
  {
    id: "particle-hero",
    href: "/preview/particle-hero/",
    titleKey: "particleHeroTitle" as const,
    leadKey: "particleHeroLead" as const,
  },
] as const;

export default async function LabPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const ui = getUi(localeParam);

  return (
    <article className="site-lab-page page">
      <div className="page-shell__inner">
        <div className="site-lab-page__column">
          <p className="site-lab-page__eyebrow">{ui.lab.eyebrow}</p>
          <h1 className="site-lab-page__title">{ui.lab.title}</h1>
          <p className="site-lab-page__lead">{ui.lab.lead}</p>

          <h2 className="site-lab-page__section-title">
            {ui.lab.experimentsHeading}
          </h2>
          <ul className="site-lab-page__list">
            {EXPERIMENTS.map((item) => (
              <li key={item.id} className="site-lab-page__item">
                <Link
                  href={localizePath(localeParam, item.href)}
                  className="site-lab-page__link"
                >
                  <span className="site-lab-page__link-title">
                    {ui.lab[item.titleKey]}
                  </span>
                  <span className="site-lab-page__link-lead">
                    {ui.lab[item.leadKey]}
                  </span>
                  <span className="site-lab-page__link-cta">
                    {ui.lab.openExperiment}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="site-lab-page__note">{ui.lab.note}</p>
        </div>
      </div>
    </article>
  );
}
