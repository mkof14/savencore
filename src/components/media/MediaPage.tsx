"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { Locale } from "@/config/locales";
import { SITE_FALCON_MARK_PATH, SITE_URL } from "@/config/site";
import type { MediaPageContent } from "@/content/media/en";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import { getUi } from "@/i18n/ui";
import { parseVideoEmbedUrl } from "@/lib/admin/media-embed";
import {
  mediaPreviewKind,
  type MediaItem,
} from "@/lib/admin/media-types";
import { localizePath } from "@/navigation/locale-path";

import "./media.css";

type MediaPageProps = {
  locale: Locale;
  content: MediaPageContent;
  items: MediaItem[];
};

function itemHref(item: MediaItem): string {
  if (item.externalUrl) {
    return item.externalUrl;
  }
  if (item.source === "seed" && item.publicPath) {
    return item.publicPath;
  }
  return `/api/media/${item.id}/`;
}

function absoluteHref(item: MediaItem): string {
  const href = itemHref(item);
  if (href.startsWith("http")) {
    return href;
  }
  return `${SITE_URL}${href}`;
}

export function MediaPage({ locale, content, items }: MediaPageProps) {
  const ui = getUi(locale);
  const visual = domainVisualForHref("/media/");
  const titleId = "media-page-title";
  const [message, setMessage] = useState<string | null>(null);
  const [preview, setPreview] = useState<MediaItem | null>(null);

  const videos = useMemo(
    () => items.filter((item) => item.category === "video"),
    [items],
  );
  const documents = useMemo(
    () =>
      items.filter(
        (item) =>
          item.category === "document" || item.category === "presentation",
      ),
    [items],
  );
  const links = useMemo(
    () => items.filter((item) => item.category === "link"),
    [items],
  );
  const brand = useMemo(
    () => items.filter((item) => item.category === "image"),
    [items],
  );

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
    const href = itemHref(item);
    if (item.externalUrl) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const a = document.createElement("a");
    a.href = href;
    a.download = item.name;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setMessage(ui.media.downloadStarted);
  }

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

        <MediaSection
          id="videos"
          title={ui.media.sectionVideos}
          empty={ui.media.emptyVideos}
          items={videos}
          onPreview={setPreview}
          onCopy={copyLink}
          onShare={shareItem}
          onDownload={downloadItem}
          labels={ui.media}
        />
        <MediaSection
          id="documents"
          title={ui.media.sectionDocuments}
          empty={ui.media.emptyDocuments}
          items={documents}
          onPreview={setPreview}
          onCopy={copyLink}
          onShare={shareItem}
          onDownload={downloadItem}
          labels={ui.media}
        />
        <MediaSection
          id="links"
          title={ui.media.sectionLinks}
          empty={ui.media.emptyLinks}
          items={links}
          onPreview={setPreview}
          onCopy={copyLink}
          onShare={shareItem}
          onDownload={downloadItem}
          labels={ui.media}
        />
        <MediaSection
          id="brand"
          title={ui.media.sectionBrand}
          empty={ui.media.emptyBrand}
          items={brand}
          onPreview={setPreview}
          onCopy={copyLink}
          onShare={shareItem}
          onDownload={downloadItem}
          labels={ui.media}
        />
      </div>

      {preview ? (
        <div
          className="media-page__modal"
          role="dialog"
          aria-modal="true"
          aria-label={ui.media.preview}
        >
          <div className="media-page__modal-panel">
            <div className="media-page__modal-header">
              <h2 className="media-page__modal-title">{preview.name}</h2>
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
          </div>
        </div>
      ) : null}
    </article>
  );
}

type SectionLabels = {
  preview: string;
  download: string;
  copy: string;
  share: string;
  open: string;
};

function MediaSection({
  id,
  title,
  empty,
  items,
  onPreview,
  onCopy,
  onShare,
  onDownload,
  labels,
}: {
  id: string;
  title: string;
  empty: string;
  items: MediaItem[];
  onPreview: (item: MediaItem) => void;
  onCopy: (item: MediaItem) => void;
  onShare: (item: MediaItem) => void;
  onDownload: (item: MediaItem) => void;
  labels: SectionLabels;
}) {
  return (
    <section className="media-page__section" aria-labelledby={`media-${id}`}>
      <div className="media-page__section-head">
        <h2 id={`media-${id}`} className="media-page__section-title">
          {title}
        </h2>
      </div>
      {items.length === 0 ? (
        <div className="media-page__empty">
          <p>{empty}</p>
        </div>
      ) : (
        <ul className="media-page__grid">
          {items.map((item) => (
            <li key={item.id} className="media-page__card">
              <div className="media-page__card-top">
                <span className="media-page__badge">{item.category}</span>
                <h3 className="media-page__card-title">{item.name}</h3>
                {item.description ? (
                  <p className="media-page__card-desc">{item.description}</p>
                ) : null}
              </div>
              <div className="media-page__card-actions">
                <button
                  type="button"
                  className="media-page__action"
                  onClick={() => onPreview(item)}
                >
                  {labels.preview}
                </button>
                <button
                  type="button"
                  className="media-page__action"
                  onClick={() => onDownload(item)}
                >
                  {item.externalUrl ? labels.open : labels.download}
                </button>
                <button
                  type="button"
                  className="media-page__action"
                  onClick={() => void onCopy(item)}
                >
                  {labels.copy}
                </button>
                <button
                  type="button"
                  className="media-page__action"
                  onClick={() => void onShare(item)}
                >
                  {labels.share}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
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
    if (embed?.provider === "youtube" || embed?.provider === "vimeo") {
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
        src={embed?.embedUrl ?? href}
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
    <p>
      <a href={href} target="_blank" rel="noreferrer">
        {item.name}
      </a>
    </p>
  );
}
