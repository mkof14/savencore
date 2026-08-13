import { notFound } from "next/navigation";

import { LabVideoHero } from "@/components/lab/LabVideoHero";
import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

import "./lab.css";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Experiments hub (D-0263 / D-0266–D-0278) — sandbox for novelties without touching the public home.
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

  return (
    <article className="site-lab-page page">
      <LabVideoHero
        locale={localeParam}
        copy={{
          overlayEyebrow: ui.lab.videoOverlayEyebrow,
          overlayLine: ui.lab.videoOverlayLine,
          conceptLabel: ui.lab.conceptLabel,
          caption: ui.lab.videoCaption,
          captions: {
            understanding: ui.lab.videoCaptionUnderstanding,
            assistance: ui.lab.videoCaptionAssistance,
            care: ui.lab.videoCaptionCare,
          },
          clipCaptions: {
            site: {
              understanding: ui.lab.videoCaptionSiteUnderstanding,
              assistance: ui.lab.videoCaptionSiteAssistance,
              care: ui.lab.videoCaptionSiteCare,
            },
            saven: {
              understanding: ui.lab.videoCaptionSavenUnderstanding,
              assistance: ui.lab.videoCaptionSavenAssistance,
              care: ui.lab.videoCaptionSavenCare,
            },
          },
          chaptersLabel: ui.lab.videoChaptersLabel,
          chapterLabels: {
            understanding: ui.lab.videoChapterUnderstanding,
            assistance: ui.lab.videoChapterAssistance,
            care: ui.lab.videoChapterCare,
          },
          switcherLabel: ui.lab.videoSwitcherLabel,
          clipLabels: {
            site: ui.lab.videoClipSite,
            gwr: ui.lab.videoClipGwr,
            saven: ui.lab.videoClipSaven,
          },
          mute: ui.lab.videoMute,
          unmute: ui.lab.videoUnmute,
          linksLabel: ui.lab.videoLinksLabel,
          links: [
            { href: "/", label: ui.lab.videoLinkHome },
            {
              href: "/foundation/biomath-core/",
              label: ui.lab.videoLinkBiomath,
            },
            {
              href: "/systems/saven-robotics-interface/",
              label: ui.lab.videoLinkInterface,
            },
            { href: "/contact/", label: ui.lab.videoLinkContact },
          ],
        }}
      />
      <div className="page-shell__inner site-lab-page__body">
        <div className="site-lab-page__column">
          <p className="site-lab-page__eyebrow">{ui.lab.eyebrow}</p>
          <h1 className="site-lab-page__title">{ui.lab.title}</h1>
          <p className="site-lab-page__lead">{ui.lab.lead}</p>
          <p className="site-lab-page__effects">{ui.lab.conceptNote}</p>

          <h2 className="site-lab-page__section-title">
            {ui.lab.videoEffectsHeading}
          </h2>
          <p className="site-lab-page__effects">{ui.lab.videoEffectsApplied}</p>
          <p className="site-lab-page__effects-ideas">
            {ui.lab.videoEffectsIdeas}
          </p>

          <p className="site-lab-page__note">{ui.lab.note}</p>
        </div>
      </div>
    </article>
  );
}
