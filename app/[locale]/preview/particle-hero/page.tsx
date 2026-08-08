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
 * Lab particle story (D-0265) — Understanding → Assistance → Care.
 * Captions outside the canvas only. Discoverable via `/lab/`. noindex.
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

  const beats = [
    { label: ui.lab.beatUnderstanding, note: ui.lab.beatUnderstandingNote },
    { label: ui.lab.beatAssistance, note: ui.lab.beatAssistanceNote },
    { label: ui.lab.beatCare, note: ui.lab.beatCareNote },
  ] as const;

  return (
    <article className="particle-hero-preview">
      <header className="particle-hero-preview__chrome">
        <p className="particle-hero-preview__eyebrow">{ui.lab.eyebrow}</p>
        <h1 className="particle-hero-preview__title">
          {ui.lab.particleHeroTitle}
        </h1>
        <p className="particle-hero-preview__lead">{ui.lab.particleHeroLead}</p>
        <ol className="particle-hero-preview__beats" aria-label={ui.lab.beatsLabel}>
          {beats.map((beat, i) => (
            <li key={beat.label} className="particle-hero-preview__beat">
              <span className="particle-hero-preview__beat-index">{i + 1}</span>
              <span className="particle-hero-preview__beat-copy">
                <span className="particle-hero-preview__beat-label">
                  {beat.label}
                </span>
                <span className="particle-hero-preview__beat-note">
                  {beat.note}
                </span>
              </span>
            </li>
          ))}
        </ol>
        <p className="particle-hero-preview__back">
          <Link href={localizePath(localeParam, "/lab/")}>{ui.lab.backToLab}</Link>
        </p>
      </header>
      <LabParticleStage ariaLabel={ui.home.particleHeroLabel} />
    </article>
  );
}
