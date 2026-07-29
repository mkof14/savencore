import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

/** Owner-approved presentation video (footer social default — D-0195 / D-0245). */
export const HOME_YOUTUBE_VIDEO_ID = "0C1Sk_RAnSw";

const EMBED_SRC = `https://www.youtube-nocookie.com/embed/${HOME_YOUTUBE_VIDEO_ID}`;

type HomeYoutubeFeatureProps = {
  locale: Locale;
};

/**
 * Strong closing media band — after Explore SAVEN map, before SiteFooter (D-0245).
 * Privacy-friendly youtube-nocookie embed; honest presentation overview only.
 */
export function HomeYoutubeFeature({ locale }: HomeYoutubeFeatureProps) {
  const ui = getUi(locale);

  return (
    <section className="pw-youtube" aria-labelledby="pw-youtube-title">
      <div className="pw-home__inner pw-youtube__inner">
        <header className="pw-youtube__intro">
          <h2 id="pw-youtube-title" className="pw-youtube__title">
            {ui.home.watchTitle}
          </h2>
          <p className="pw-youtube__support">{ui.home.watchSupport}</p>
        </header>
        <div className="pw-youtube__frame">
          <iframe
            className="pw-youtube__embed"
            src={EMBED_SRC}
            title={ui.home.watchEmbedTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
