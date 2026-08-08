import { notFound } from "next/navigation";

import { HeroParticleStage } from "@/components/home/HeroParticleStage";
import "@/components/home/physical-world-home.css";
import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

import "./particle-hero-preview.css";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Internal experiment surface for the particle morph hero (D-0261).
 * Not linked from public nav/footer. Robots: noindex (proxy + metadata).
 */
export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: "/preview/particle-hero/",
    title: ui.home.particlePreviewTitle,
    description: ui.home.particlePreviewLead,
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
        <p className="particle-hero-preview__eyebrow">{ui.media.preview}</p>
        <h1 className="particle-hero-preview__title">
          {ui.home.particlePreviewTitle}
        </h1>
        <p className="particle-hero-preview__lead">
          {ui.home.particlePreviewLead}
        </p>
      </header>
      <HeroParticleStage ariaLabel={ui.home.particleHeroLabel} />
    </article>
  );
}
