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
 * Experiments hub (D-0263 / D-0265) — sandbox for novelties without touching the public home.
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

export default async function LabPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const ui = getUi(localeParam);
  const experimentHref = localizePath(localeParam, "/preview/particle-hero/");

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

          {/* Featured particle story (D-0265) */}
          <Link
            href={experimentHref}
            className="site-lab-page__feature"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- experiment poster */}
            <img
              className="site-lab-page__feature-media"
              src="/lab/particle/poster.webp?v=d0265"
              alt=""
              width={1600}
              height={900}
              decoding="async"
            />
            <span className="site-lab-page__feature-body">
              <span className="site-lab-page__feature-badge">
                {ui.lab.featuredBadge}
              </span>
              <span className="site-lab-page__link-title">
                {ui.lab.particleHeroTitle}
              </span>
              <span className="site-lab-page__link-lead">
                {ui.lab.particleHeroLead}
              </span>
              <span className="site-lab-page__story">
                {ui.lab.beatUnderstanding}
                <span aria-hidden="true"> → </span>
                {ui.lab.beatAssistance}
                <span aria-hidden="true"> → </span>
                {ui.lab.beatCare}
              </span>
              <span className="site-lab-page__link-cta">
                {ui.lab.openExperiment}
              </span>
            </span>
          </Link>

          <p className="site-lab-page__note">{ui.lab.note}</p>
        </div>
      </div>
    </article>
  );
}
