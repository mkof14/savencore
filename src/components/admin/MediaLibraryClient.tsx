"use client";

import {
  useMemo,
  useRef,
  useState,
  useTransition,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
} from "react";

import type { AdminRole } from "@/admin/roles";
import { canPerform } from "@/admin/roles";
import type { Locale } from "@/config/locales";
import { SITE_URL } from "@/config/site";
import { getUi } from "@/i18n/ui";
import {
  looksLikeHttpUrl,
  parseVideoEmbedUrl,
  titleFromFilename,
} from "@/lib/admin/media-embed";
import {
  MEDIA_FILTER_CATEGORIES,
  MEDIA_UPLOAD_ACCEPT,
  mediaPreviewKind,
  mediaVisibility,
  type MediaCategory,
  type MediaItem,
} from "@/lib/admin/media-types";

type AddTab = "file" | "video" | "link";

type MediaLibraryClientProps = {
  locale: Locale;
  role: AdminRole;
  initialItems: MediaItem[];
};

export function MediaLibraryClient({
  locale,
  role,
  initialItems,
}: MediaLibraryClientProps) {
  const ui = getUi(locale);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoFileInputRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState(initialItems);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<MediaItem | null>(null);
  const [justAdded, setJustAdded] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | MediaCategory>("all");
  const [addTab, setAddTab] = useState<AddTab>("file");
  const [dragOver, setDragOver] = useState(false);

  const [fileTitle, setFileTitle] = useState("");
  const [pendingFile, setPendingFile] = useState<File | null>(null);

  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkNote, setLinkNote] = useState("");

  const [pending, startTransition] = useTransition();
  const canUpload = canPerform(role, "media_upload");
  const canManage = canUpload;

  const filtered = useMemo(() => {
    if (filter === "all") {
      return items;
    }
    return items.filter((item) => item.category === filter);
  }, [filter, items]);

  const previewUrl = useMemo(() => {
    if (!preview) {
      return null;
    }
    return resolveItemUrl(preview, { absolute: false });
  }, [preview]);

  const videoEmbed = useMemo(
    () => (videoUrl.trim() ? parseVideoEmbedUrl(videoUrl) : null),
    [videoUrl],
  );

  function flash(ok: string | null, err: string | null) {
    setMessage(ok);
    setError(err);
  }

  function onAdded(item: MediaItem, successMessage: string) {
    setItems((prev) => [item, ...prev]);
    setJustAdded(item);
    setPreview(item);
    flash(successMessage, null);
  }

  async function uploadFile(file: File, titleHint?: string) {
    if (!canUpload) {
      return;
    }
    const body = new FormData();
    body.append("file", file);
    body.append("visibility", "public");
    const title = (titleHint ?? fileTitle).trim() || titleFromFilename(file.name);
    body.append("name", title);

    startTransition(async () => {
      flash(null, null);
      const res = await fetch("/api/admin/media/", {
        method: "POST",
        body,
      });
      const data = (await res.json()) as {
        item?: MediaItem;
        error?: string;
      };
      if (!res.ok || !data.item) {
        flash(null, data.error ?? ui.admin.mediaUploadError);
        return;
      }
      setPendingFile(null);
      setFileTitle("");
      onAdded(data.item, ui.admin.mediaUploadSuccess);
    });
  }

  function selectFile(file: File | null) {
    if (!file) {
      return;
    }
    setPendingFile(file);
    setFileTitle((current) => current.trim() || titleFromFilename(file.name));
    setAddTab(file.type.startsWith("video/") ? "video" : "file");
  }

  function onFileInputChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    selectFile(file);
    event.target.value = "";
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragOver(false);
    if (!canUpload || pending) {
      return;
    }
    const file = event.dataTransfer.files?.[0];
    if (file) {
      selectFile(file);
      return;
    }
    const text = event.dataTransfer.getData("text/uri-list")
      || event.dataTransfer.getData("text/plain");
    if (text && looksLikeHttpUrl(text)) {
      applyPastedUrl(text.trim());
    }
  }

  function applyPastedUrl(raw: string) {
    if (parseVideoEmbedUrl(raw)) {
      setAddTab("video");
      setVideoUrl(raw);
      if (!videoTitle.trim()) {
        setVideoTitle(guessTitleFromUrl(raw));
      }
      return;
    }
    setAddTab("link");
    setLinkUrl(raw);
    if (!linkTitle.trim()) {
      setLinkTitle(guessTitleFromUrl(raw));
    }
  }

  function onPasteUrl(raw: string) {
    if (!looksLikeHttpUrl(raw)) {
      return;
    }
    applyPastedUrl(raw.trim());
  }

  async function onSaveVideoUrl(event: FormEvent) {
    event.preventDefault();
    if (!canUpload) {
      return;
    }
    const url = videoUrl.trim();
    const embed = parseVideoEmbedUrl(url);
    if (!embed && !looksLikeHttpUrl(url)) {
      flash(null, ui.admin.mediaLinkError);
      return;
    }
    const name =
      videoTitle.trim() ||
      guessTitleFromUrl(url) ||
      ui.admin.mediaTabVideo;

    startTransition(async () => {
      flash(null, null);
      const res = await fetch("/api/admin/media/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "link",
          name,
          url,
          category: "video",
          visibility: "public",
        }),
      });
      const data = (await res.json()) as {
        item?: MediaItem;
        error?: string;
      };
      if (!res.ok || !data.item) {
        flash(null, data.error ?? ui.admin.mediaLinkError);
        return;
      }
      setVideoUrl("");
      setVideoTitle("");
      onAdded(data.item, ui.admin.mediaLinkSuccess);
    });
  }

  async function onAddLink(event: FormEvent) {
    event.preventDefault();
    if (!canUpload) {
      return;
    }
    const name =
      linkTitle.trim() ||
      guessTitleFromUrl(linkUrl) ||
      ui.admin.mediaTabLink;

    startTransition(async () => {
      flash(null, null);
      const res = await fetch("/api/admin/media/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "link",
          name,
          url: linkUrl,
          category: "link",
          description: linkNote.trim() || undefined,
          visibility: "public",
        }),
      });
      const data = (await res.json()) as {
        item?: MediaItem;
        error?: string;
      };
      if (!res.ok || !data.item) {
        flash(null, data.error ?? ui.admin.mediaLinkError);
        return;
      }
      setLinkTitle("");
      setLinkUrl("");
      setLinkNote("");
      onAdded(data.item, ui.admin.mediaLinkSuccess);
    });
  }

  async function onDelete(item: MediaItem) {
    if (!canManage || item.source === "seed") {
      return;
    }
    if (!window.confirm(ui.admin.mediaDeleteConfirm)) {
      return;
    }
    startTransition(async () => {
      flash(null, null);
      const res = await fetch(`/api/admin/media/${item.id}/`, {
        method: "DELETE",
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        flash(null, data.error ?? ui.admin.mediaDeleteError);
        return;
      }
      setItems((prev) => prev.filter((row) => row.id !== item.id));
      if (preview?.id === item.id) {
        setPreview(null);
      }
      if (justAdded?.id === item.id) {
        setJustAdded(null);
      }
      flash(ui.admin.mediaDeleteSuccess, null);
    });
  }

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      flash(ui.admin.actionCopied, null);
    } catch {
      flash(null, ui.admin.actionFailed);
    }
  }

  function absoluteUrl(item: MediaItem): string {
    return resolveItemUrl(item, { absolute: true });
  }

  function openItem(item: MediaItem) {
    window.open(absoluteUrl(item), "_blank", "noopener,noreferrer");
  }

  const categoryLabel = (category: MediaCategory): string => {
    switch (category) {
      case "image":
        return ui.admin.mediaCatImage;
      case "video":
        return ui.admin.mediaCatVideo;
      case "document":
        return ui.admin.mediaCatDocument;
      case "presentation":
        return ui.admin.mediaCatPresentation;
      case "link":
        return ui.admin.mediaCatLink;
      default:
        return ui.admin.mediaCatOther;
    }
  };

  return (
    <div className="admin-media">
      {message ? <p className="admin-toast" role="status">{message}</p> : null}
      {error ? (
        <p className="admin-toast admin-toast--error" role="alert">
          {error}
        </p>
      ) : null}

      {canUpload ? (
        <section className="admin-media-add" aria-labelledby="admin-media-add-title">
          <div className="admin-media-add__head">
            <h2 id="admin-media-add-title" className="admin-media-add__title">
              {ui.admin.mediaAddHeading}
            </h2>
            <p className="admin-media-add__lead">{ui.admin.mediaAddLead}</p>
          </div>

          <div
            className="admin-media-tabs"
            role="tablist"
            aria-label={ui.admin.mediaAddHeading}
          >
            {(
              [
                ["file", ui.admin.mediaTabFile],
                ["video", ui.admin.mediaTabVideo],
                ["link", ui.admin.mediaTabLink],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={addTab === id}
                className={`admin-media-tabs__btn${addTab === id ? " is-active" : ""}`}
                onClick={() => setAddTab(id)}
                disabled={pending}
              >
                {label}
              </button>
            ))}
          </div>

          {addTab === "file" ? (
            <div className="admin-media-panel">
              <div
                className={`admin-media-drop${dragOver ? " is-dragover" : ""}`}
                onDragEnter={(event) => {
                  event.preventDefault();
                  setDragOver(true);
                }}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={(event) => {
                  event.preventDefault();
                  setDragOver(false);
                }}
                onDrop={onDrop}
                onPaste={(event) => {
                  const text = event.clipboardData.getData("text/plain");
                  if (text && looksLikeHttpUrl(text)) {
                    event.preventDefault();
                    onPasteUrl(text);
                  }
                }}
              >
                <p className="admin-media-drop__title">{ui.admin.mediaDropTitle}</p>
                <p className="admin-media-drop__hint">{ui.admin.mediaDropHint}</p>
                <p className="admin-media-drop__types">{ui.admin.mediaAcceptedTypes}</p>
                <button
                  type="button"
                  className="admin-btn admin-btn--primary"
                  disabled={pending}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {ui.admin.mediaBrowse}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={MEDIA_UPLOAD_ACCEPT}
                  className="admin-media-drop__input"
                  onChange={onFileInputChange}
                  disabled={pending}
                  aria-label={ui.admin.mediaBrowse}
                />
              </div>

              {pendingFile ? (
                <div className="admin-media-ready">
                  <label className="admin-field__label" htmlFor="admin-media-file-title">
                    {ui.admin.mediaLinkTitle}
                  </label>
                  <input
                    id="admin-media-file-title"
                    type="text"
                    value={fileTitle}
                    onChange={(event) => setFileTitle(event.target.value)}
                    disabled={pending}
                  />
                  <p className="admin-card__meta">
                    {pendingFile.name} · {formatBytes(pendingFile.size)}
                  </p>
                  <div className="admin-media-ready__actions">
                    <button
                      type="button"
                      className="admin-btn admin-btn--primary"
                      disabled={pending}
                      onClick={() => void uploadFile(pendingFile)}
                    >
                      {pending ? ui.admin.mediaUploading : ui.admin.mediaUploadNow}
                    </button>
                    <button
                      type="button"
                      className="admin-btn"
                      disabled={pending}
                      onClick={() => {
                        setPendingFile(null);
                        setFileTitle("");
                      }}
                    >
                      {ui.close}
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {addTab === "video" ? (
            <div className="admin-media-panel">
              <form className="admin-media-form" onSubmit={onSaveVideoUrl}>
                <label className="admin-field__label" htmlFor="admin-media-video-url">
                  {ui.admin.mediaVideoUrlLabel}
                </label>
                <input
                  id="admin-media-video-url"
                  type="url"
                  value={videoUrl}
                  onChange={(event) => setVideoUrl(event.target.value)}
                  onPaste={(event) => {
                    const text = event.clipboardData.getData("text/plain");
                    if (text && looksLikeHttpUrl(text)) {
                      window.setTimeout(() => onPasteUrl(text), 0);
                    }
                  }}
                  placeholder={ui.admin.mediaVideoUrlPlaceholder}
                  disabled={pending}
                  required
                />
                <label className="admin-field__label" htmlFor="admin-media-video-title">
                  {ui.admin.mediaLinkTitle}
                </label>
                <input
                  id="admin-media-video-title"
                  type="text"
                  value={videoTitle}
                  onChange={(event) => setVideoTitle(event.target.value)}
                  placeholder={ui.admin.mediaVideoTitlePlaceholder}
                  disabled={pending}
                />
                {videoEmbed ? (
                  <div className="admin-media-embed-preview">
                    <p className="admin-field__label">{ui.admin.mediaVideoPreview}</p>
                    {videoEmbed.provider === "direct" ? (
                      <video
                        src={videoEmbed.embedUrl}
                        controls
                        playsInline
                        className="admin-media-embed-preview__video"
                      />
                    ) : (
                      <iframe
                        title={ui.admin.mediaVideoPreview}
                        src={videoEmbed.embedUrl}
                        className="admin-media-embed-preview__frame"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                ) : null}
                <button
                  type="submit"
                  className="admin-btn admin-btn--primary"
                  disabled={pending || !videoUrl.trim()}
                >
                  {pending ? ui.admin.mediaUploading : ui.admin.mediaSaveVideo}
                </button>
              </form>

              <div className="admin-media-or">
                <span>{ui.admin.mediaVideoOrUpload}</span>
              </div>
              <div className="admin-media-ready__actions">
                <button
                  type="button"
                  className="admin-btn"
                  disabled={pending}
                  onClick={() => videoFileInputRef.current?.click()}
                >
                  {ui.admin.mediaBrowse}
                </button>
                <input
                  ref={videoFileInputRef}
                  type="file"
                  accept="video/*,.mp4,.webm,.ogg"
                  className="admin-media-drop__input"
                  disabled={pending}
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      void uploadFile(file, titleFromFilename(file.name));
                    }
                    event.target.value = "";
                  }}
                  aria-label={ui.admin.mediaBrowse}
                />
              </div>
            </div>
          ) : null}

          {addTab === "link" ? (
            <form className="admin-media-panel admin-media-form" onSubmit={onAddLink}>
              <label className="admin-field__label" htmlFor="admin-media-link-title">
                {ui.admin.mediaLinkTitle}
              </label>
              <input
                id="admin-media-link-title"
                type="text"
                value={linkTitle}
                onChange={(event) => setLinkTitle(event.target.value)}
                placeholder={ui.admin.mediaLinkTitle}
                disabled={pending}
              />
              <label className="admin-field__label" htmlFor="admin-media-link-url">
                {ui.admin.mediaLinkUrlLabel}
              </label>
              <input
                id="admin-media-link-url"
                type="url"
                value={linkUrl}
                onChange={(event) => setLinkUrl(event.target.value)}
                placeholder={ui.admin.mediaLinkUrl}
                disabled={pending}
                required
              />
              <label className="admin-field__label" htmlFor="admin-media-link-note">
                {ui.admin.mediaLinkNote}
              </label>
              <input
                id="admin-media-link-note"
                type="text"
                value={linkNote}
                onChange={(event) => setLinkNote(event.target.value)}
                placeholder={ui.admin.mediaLinkNotePlaceholder}
                disabled={pending}
              />
              <button
                type="submit"
                className="admin-btn admin-btn--primary"
                disabled={pending || !linkUrl.trim()}
              >
                {pending ? ui.admin.mediaUploading : ui.admin.mediaSaveLink}
              </button>
            </form>
          ) : null}

          <p className="admin-media-storage-note">{ui.admin.mediaNote}</p>
        </section>
      ) : null}

      {justAdded ? (
        <div className="admin-media-success" role="status">
          <div className="admin-media-success__preview">
            <ItemThumb item={justAdded} />
          </div>
          <div className="admin-media-success__body">
            <p className="admin-media-success__label">{ui.admin.mediaJustAdded}</p>
            <p className="admin-media-success__name">{justAdded.name}</p>
            <div className="admin-media-success__actions">
              <button
                type="button"
                className="admin-btn admin-btn--primary"
                onClick={() => void copyText(absoluteUrl(justAdded))}
              >
                {ui.admin.mediaCopyLink}
              </button>
              <button
                type="button"
                className="admin-btn"
                onClick={() => openItem(justAdded)}
              >
                {ui.admin.mediaOpen}
              </button>
              <button
                type="button"
                className="admin-btn"
                onClick={() => setPreview(justAdded)}
              >
                {ui.admin.actionPreview}
              </button>
              {canManage && justAdded.source !== "seed" ? (
                <button
                  type="button"
                  className="admin-btn"
                  disabled={pending}
                  onClick={() => void onDelete(justAdded)}
                >
                  {ui.admin.actionDelete}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <div className="admin-media-filters" role="group" aria-label={ui.admin.colType}>
        <button
          type="button"
          className={`admin-btn${filter === "all" ? " admin-btn--primary" : ""}`}
          onClick={() => setFilter("all")}
        >
          {ui.admin.mediaFilterAll}
        </button>
        {MEDIA_FILTER_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={`admin-btn${filter === category ? " admin-btn--primary" : ""}`}
            onClick={() => setFilter(category)}
          >
            {categoryLabel(category)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="admin-media-empty">
          <p>{ui.admin.mediaEmptyLibrary}</p>
        </div>
      ) : (
        <ul className="admin-media-list">
          {filtered.map((item) => (
            <li key={item.id} className="admin-media-card">
              <div className="admin-media-card__thumb">
                <ItemThumb item={item} />
              </div>
              <div className="admin-media-card__body">
                <div className="admin-media-card__meta-row">
                  <span className="admin-badge">{categoryLabel(item.category)}</span>
                  <span className="admin-card__meta">{mediaVisibility(item)}</span>
                </div>
                <h3 className="admin-media-card__title">{item.name}</h3>
                {item.description ? (
                  <p className="admin-card__meta">{item.description}</p>
                ) : null}
                {item.externalUrl ? (
                  <p className="admin-card__meta admin-media-card__url">
                    {item.externalUrl}
                  </p>
                ) : null}
                <div className="admin-media-card__actions">
                  <button
                    type="button"
                    className="admin-btn"
                    onClick={() => setPreview(item)}
                  >
                    {ui.admin.actionPreview}
                  </button>
                  <button
                    type="button"
                    className="admin-btn"
                    onClick={() => void copyText(absoluteUrl(item))}
                  >
                    {ui.admin.mediaCopyLink}
                  </button>
                  <button
                    type="button"
                    className="admin-btn"
                    onClick={() => openItem(item)}
                  >
                    {ui.admin.mediaOpen}
                  </button>
                  {canManage && item.source !== "seed" ? (
                    <button
                      type="button"
                      className="admin-btn"
                      onClick={() => void onDelete(item)}
                      disabled={pending}
                    >
                      {ui.admin.actionDelete}
                    </button>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {preview && previewUrl ? (
        <div
          className="admin-modal"
          role="dialog"
          aria-modal="true"
          aria-label={ui.admin.actionPreview}
        >
          <div className="admin-modal__panel">
            <div className="admin-modal__header">
              <h2 className="admin-modal__title">{preview.name}</h2>
              <button
                type="button"
                className="admin-btn"
                onClick={() => setPreview(null)}
              >
                {ui.close}
              </button>
            </div>
            <div className="admin-preview__media">
              <PreviewBody item={preview} url={previewUrl} />
            </div>
            <div className="admin-media-success__actions">
              <button
                type="button"
                className="admin-btn admin-btn--primary"
                onClick={() => void copyText(absoluteUrl(preview))}
              >
                {ui.admin.mediaCopyLink}
              </button>
              <button
                type="button"
                className="admin-btn"
                onClick={() => openItem(preview)}
              >
                {ui.admin.mediaOpen}
              </button>
              {canManage && preview.source !== "seed" ? (
                <button
                  type="button"
                  className="admin-btn"
                  disabled={pending}
                  onClick={() => void onDelete(preview)}
                >
                  {ui.admin.actionDelete}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function guessTitleFromUrl(raw: string): string {
  try {
    const url = new URL(raw.trim());
    const host = url.hostname.replace(/^www\./i, "");
    const last = url.pathname.split("/").filter(Boolean).pop();
    if (last) {
      return titleFromFilename(decodeURIComponent(last));
    }
    return host;
  } catch {
    return "";
  }
}

function formatBytes(size: number): string {
  if (size < 1024) {
    return `${size} B`;
  }
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function resolveItemUrl(
  item: MediaItem,
  options: { absolute: boolean },
): string {
  if (item.externalUrl) {
    return item.externalUrl;
  }
  if (item.source === "seed" && item.publicPath) {
    return options.absolute
      ? `${SITE_URL}${item.publicPath}`
      : item.publicPath;
  }
  const path = `/api/admin/media/${item.id}/`;
  return options.absolute ? `${SITE_URL}${path}` : path;
}

function ItemThumb({ item }: { item: MediaItem }) {
  const kind = mediaPreviewKind(item);
  const url = resolveItemUrl(item, { absolute: false });
  if (kind === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt="" className="admin-media-thumb__img" />;
  }
  if (kind === "video") {
    const embed = item.externalUrl ? parseVideoEmbedUrl(item.externalUrl) : null;
    if (embed?.provider === "youtube") {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://i.ytimg.com/vi/${embed.id}/hqdefault.jpg`}
          alt=""
          className="admin-media-thumb__img"
        />
      );
    }
    return <span className="admin-media-thumb__glyph">▶</span>;
  }
  if (kind === "pdf" || item.category === "document" || item.category === "presentation") {
    return <span className="admin-media-thumb__glyph">DOC</span>;
  }
  if (kind === "link") {
    return <span className="admin-media-thumb__glyph">URL</span>;
  }
  return <span className="admin-media-thumb__glyph">•</span>;
}

function PreviewBody({ item, url }: { item: MediaItem; url: string }) {
  const kind = mediaPreviewKind(item);
  if (kind === "video") {
    const embed = item.externalUrl ? parseVideoEmbedUrl(item.externalUrl) : null;
    if (embed?.provider === "youtube" || embed?.provider === "vimeo") {
      return (
        <iframe
          title={item.name}
          src={embed.embedUrl}
          className="admin-media-embed-preview__frame"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return <video src={embed?.embedUrl ?? url} controls playsInline />;
  }
  if (kind === "link") {
    return (
      <p>
        <a href={url} target="_blank" rel="noreferrer">
          {item.name}
        </a>
      </p>
    );
  }
  if (kind === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt={item.name} />;
  }
  if (kind === "pdf") {
    return <iframe title={item.name} src={url} />;
  }
  return (
    <p>
      <a href={url} target="_blank" rel="noreferrer">
        {item.name}
      </a>
    </p>
  );
}
