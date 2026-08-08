import Link from "next/link";
import { notFound } from "next/navigation";

import { LabParticleStage } from "@/components/lab/LabParticleStage";
import "@/components/lab/lab-particle.css";
import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { localizePath } from "@/navigation/locale-path";

import "./particle-hero-preview.css";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Lab particle experiment (D-0264) — human + energy waves, images only on canvas.
 * Discoverable via `/lab/`. Robots: noindex.
 */
export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: "/preview/particle-hero/",
    title: ui.lab.particleHeroTitle,
    description: ui.lab.particleHeroLead,
    noIndex: true,
  });
}

export default async function ParticleHeroPreviewPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const ui = getUi(localeParam);

  return (
    <article className="particle-hero-preview">
      <header className="particle-hero-preview__chrome">
        <p className="particle-hero-preview__eyebrow">{ui.lab.eyebrow}</p>
        <h1 className="particle-hero-preview__title">
          {ui.lab.particleHeroTitle}
        </h1>
        <p className="particle-hero-preview__lead">{ui.lab.particleHeroLead}</p>
        <p className="particle-hero-preview__back">
          <Link href={localizePath(localeParam, "/lab/")}>{ui.lab.backToLab}</Link>
        </p>
      </header>
      <LabParticleStage ariaLabel={ui.home.particleHeroLabel} />
    </article>
  );
}
