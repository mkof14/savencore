"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { Locale } from "@/config/locales";
import { SITE_FALCON_MARK_PATH } from "@/config/site";
import type { MediaPageContent } from "@/content/media/en";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import { getUi } from "@/i18n/ui";
import { parseVideoEmbedUrl } from "@/lib/admin/media-embed";
import {
  isExternalMediaLink,
  mediaPreviewKind,
  type MediaCategory,
  type MediaItem,
} from "@/lib/admin/media-types";
import {
  absoluteMediaUrl,
  mediaPublicDownloadPath,
  mediaPublicViewPath,
  triggerMediaDownload,
} from "@/lib/admin/media-urls";
import { localizePath } from "@/navigation/locale-path";

import "./media.css";

type MediaPageProps = {
  locale: Locale;
  content: MediaPageContent;
  items: MediaItem[];
};

type GalleryFilter = "all" | "video" | "docs" | "link";

function itemHref(item: MediaItem): string {
  return mediaPublicViewPath(item);
}

function absoluteHref(item: MediaItem): string {
  return absoluteMediaUrl(itemHref(item));
}

function matchesFilter(item: MediaItem, filter: GalleryFilter): boolean {
  if (filter === "all") {
    return true;
  }
  if (filter === "video") {
    return item.category === "video";
  }
  if (filter === "link") {
    return item.category === "link" || isExternalMediaLink(item);
  }
  return item.category === "document" || item.category === "presentation";
}

export function MediaPage({ locale, content, items }: MediaPageProps) {
  const ui = getUi(locale);
  const visual = domainVisualForHref("/media/");
  const titleId = "media-page-title";
  const [message, setMessage] = useState<string | null>(null);
  const [preview, setPreview] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<GalleryFilter>("all");

  const filtered = useMemo(
    () => items.filter((item) => matchesFilter(item, filter)),
    [items, filter],
  );

  const counts = useMemo(() => {
    return {
      all: items.length,
      video: items.filter((item) => item.category === "video").length,
      docs: items.filter((item) =>
        matchesFilter(item, "docs"),
      ).length,
      link: items.filter((item) => item.category === "link").length,
    };
  }, [items]);

  async function copyLink(item: MediaItem) {
    try {
      await navigator.clipboard.writeText(absoluteHref(item));
      setMessage(ui.media.copied);
    } catch {
      setMessage(ui.media.actionFailed);
    }
  }

  async function shareItem(item: MediaItem) {
    const url = absoluteHref(item);
    if (navigator.share) {
      try {
        await navigator.share({ title: item.name, url });
        setMessage(ui.media.shared);
        return;
      } catch {
        // fall through
      }
    }
    await copyLink(item);
  }

  function downloadItem(item: MediaItem) {
    if (isExternalMediaLink(item)) {
      window.open(itemHref(item), "_blank", "noopener,noreferrer");
      return;
    }
    const downloadPath = mediaPublicDownloadPath(item);
    if (!downloadPath) {
      setMessage(ui.media.actionFailed);
      return;
    }
    triggerMediaDownload(downloadPath);
    setMessage(ui.media.downloadStarted);
  }

  function categoryLabel(category: MediaCategory): string {
    switch (category) {
      case "image":
        return ui.media.badgeImage;
      case "video":
        return ui.media.badgeVideo;
      case "document":
        return ui.media.badgeDocument;
      case "presentation":
        return ui.media.badgePresentation;
      case "link":
        return ui.media.badgeLink;
      default:
        return ui.media.badgeOther;
    }
  }

  const emptyMessage =
    filter === "video"
      ? ui.media.emptyVideos
      : filter === "docs"
        ? ui.media.emptyDocuments
        : filter === "link"
          ? ui.media.emptyLinks
          : ui.media.emptyAll;

  return (
    <article className="media-page" aria-labelledby={titleId}>
      <header className="media-page__masthead">
        <div className="media-page__masthead-media" aria-hidden="true">
          <Image
            src={visual.mastheadImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="media-page__masthead-image"
          />
          <div className="media-page__masthead-scrim" />
          <div className="media-page__masthead-grain" />
        </div>
        <div className="media-page__falcon" aria-hidden="true">
          <Image
            src={SITE_FALCON_MARK_PATH}
            alt=""
            width={72}
            height={97}
            className="media-page__falcon-mark"
            draggable={false}
          />
        </div>
        <div className="media-page__masthead-copy">
          <p className="media-page__label">{content.label}</p>
          <h1 id={titleId} className="media-page__title">
            {content.title}
          </h1>
          <p className="media-page__lede">{content.lede}</p>
        </div>
      </header>

      <div className="media-page__body">
        <div className="media-page__intro">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="media-page__note" role="note">
            {content.note}
          </p>
          <nav className="media-page__ctas" aria-label={ui.hub.related}>
            <Link
              className="media-page__cta media-page__cta--primary"
              href={localizePath(locale, "/contact/")}
            >
              {ui.footer.contact}
            </Link>
            <Link
              className="media-page__cta"
              href={localizePath(locale, "/")}
            >
              {ui.nav.home}
            </Link>
          </nav>
        </div>

        {message ? (
          <p className="media-page__toast" role="status">
            {message}
          </p>
        ) : null}

        <section
          className="media-page__gallery"
          aria-labelledby="media-gallery-title"
        >
          <div className="media-page__gallery-head">
            <div>
              <h2 id="media-gallery-title" className="media-page__section-title">
                {ui.media.galleryTitle}
              </h2>
              <p className="media-page__gallery-lead">{ui.media.galleryLead}</p>
            </div>
            <div
              className="media-page__filters"
              role="tablist"
              aria-label={ui.media.galleryTitle}
            >
              {(
                [
                  ["all", ui.media.filterAll, counts.all],
                  ["video", ui.media.filterVideos, counts.video],
                  ["docs", ui.media.filterDocs, counts.docs],
                  ["link", ui.media.filterLinks, counts.link],
                ] as const
              ).map(([id, label, count]) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={filter === id}
                  className={`media-page__filter${filter === id ? " is-active" : ""}`}
                  onClick={() => setFilter(id)}
                >
                  <span>{label}</span>
                  <span className="media-page__filter-count">{count}</span>
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="media-page__empty">
              <p>{emptyMessage}</p>
            </div>
          ) : (
            <ul className="media-page__grid">
              {filtered.map((item) => (
                <li key={item.id} className="media-page__card">
                  <button
                    type="button"
                    className="media-page__card-visual"
                    onClick={() => setPreview(item)}
                    aria-label={`${ui.media.view}: ${item.name}`}
                  >
                    <CardVisual item={item} />
                    {item.category === "video" ? (
                      <span className="media-page__play" aria-hidden="true">
                        ▶
                      </span>
                    ) : null}
                  </button>
                  <div className="media-page__card-body">
                    <span className="media-page__badge">
                      {categoryLabel(item.category)}
                    </span>
                    <h3 className="media-page__card-title">{item.name}</h3>
                    {item.description ? (
                      <p className="media-page__card-desc">{item.description}</p>
                    ) : null}
                    <div className="media-page__card-actions">
                      <button
                        type="button"
                        className="media-page__action media-page__action--primary"
                        onClick={() => setPreview(item)}
                      >
                        {ui.media.view}
                      </button>
                      <button
                        type="button"
                        className="media-page__action media-page__action--download"
                        onClick={() => downloadItem(item)}
                      >
                        {isExternalMediaLink(item) ? ui.media.open : ui.media.download}
                      </button>
                      <button
                        type="button"
                        className="media-page__action"
                        onClick={() => void copyLink(item)}
                      >
                        {ui.media.copy}
                      </button>
                      <button
                        type="button"
                        className="media-page__action"
                        onClick={() => void shareItem(item)}
                      >
                        {ui.media.share}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {preview ? (
        <div
          className="media-page__modal"
          role="dialog"
          aria-modal="true"
          aria-label={ui.media.view}
        >
          <div className="media-page__modal-panel">
            <div className="media-page__modal-header">
              <div>
                <span className="media-page__badge">
                  {categoryLabel(preview.category)}
                </span>
                <h2 className="media-page__modal-title">{preview.name}</h2>
              </div>
              <button
                type="button"
                className="media-page__action"
                onClick={() => setPreview(null)}
              >
                {ui.close}
              </button>
            </div>
            <div className="media-page__modal-body">
              <PublicPreview item={preview} />
            </div>
            <div className="media-page__card-actions media-page__modal-actions">
              <button
                type="button"
                className="media-page__action media-page__action--download"
                onClick={() => downloadItem(preview)}
              >
                {isExternalMediaLink(preview) ? ui.media.open : ui.media.download}
              </button>
              <button
                type="button"
                className="media-page__action media-page__action--primary"
                onClick={() => void copyLink(preview)}
              >
                {ui.media.copy}
              </button>
              <button
                type="button"
                className="media-page__action"
                onClick={() => void shareItem(preview)}
              >
                {ui.media.share}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function CardVisual({ item }: { item: MediaItem }) {
  const href = itemHref(item);
  const kind = mediaPreviewKind(item);

  if (kind === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={href} alt="" className="media-page__card-media" />
    );
  }

  if (kind === "video") {
    const embed =
      item.externalUrl && !item.storageKey
        ? parseVideoEmbedUrl(item.externalUrl)
        : null;
    if (embed?.provider === "youtube") {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://i.ytimg.com/vi/${embed.id}/hqdefault.jpg`}
          alt=""
          className="media-page__card-media"
        />
      );
    }
    if (embed?.provider === "direct" || (!embed && href)) {
      return (
        <video
          src={embed?.embedUrl ?? href}
          className="media-page__card-media"
          muted
          playsInline
          preload="metadata"
        />
      );
    }
    return <span className="media-page__card-glyph">▶</span>;
  }

  if (kind === "pdf" || item.category === "document") {
    return <span className="media-page__card-glyph">PDF</span>;
  }
  if (item.category === "presentation") {
    return <span className="media-page__card-glyph">PPT</span>;
  }
  if (kind === "link") {
    return <span className="media-page__card-glyph">URL</span>;
  }
  return <span className="media-page__card-glyph">•</span>;
}

function PublicPreview({ item }: { item: MediaItem }) {
  const href = itemHref(item);
  const kind = mediaPreviewKind(item);
  if (kind === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={href} alt={item.name} className="media-page__preview-media" />
    );
  }
  if (kind === "video") {
    const embed = item.externalUrl
      ? parseVideoEmbedUrl(item.externalUrl)
      : null;
    // Hosted video files use same-origin href; only parse true link embeds.
    if (
      !item.storageKey &&
      (embed?.provider === "youtube" || embed?.provider === "vimeo")
    ) {
      return (
        <iframe
          title={item.name}
          src={embed.embedUrl}
          className="media-page__preview-frame"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return (
      <video
        src={item.storageKey ? href : (embed?.embedUrl ?? href)}
        controls
        playsInline
        className="media-page__preview-media"
      />
    );
  }
  if (kind === "pdf") {
    return (
      <iframe
        title={item.name}
        src={href}
        className="media-page__preview-frame"
      />
    );
  }
  return (
    <p className="media-page__preview-link">
      <a href={href} target="_blank" rel="noreferrer">
        {item.name}
      </a>
    </p>
  );
}
