"use client";

import {
  useMemo,
  useState,
  useTransition,
  type ChangeEvent,
  type FormEvent,
} from "react";

import type { AdminRole } from "@/admin/roles";
import { canPerform } from "@/admin/roles";
import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import {
  looksLikeHttpUrl,
  parseVideoEmbedUrl,
  titleFromFilename,
} from "@/lib/admin/media-embed";
import {
  isExternalMediaLink,
  isHostedMediaFile,
  isSeedMediaItem,
  MEDIA_MAX_UPLOAD_BYTES,
  MEDIA_UPLOAD_ACCEPT,
  MEDIA_VERCEL_BODY_LIMIT_BYTES,
  MEDIA_VIDEO_ACCEPT,
  mediaPreviewKind,
  mediaVisibility,
  type MediaCategory,
  type MediaItem,
} from "@/lib/admin/media-types";
import {
  absoluteMediaUrl,
  mediaAdminDownloadPath,
  mediaAdminViewPath,
  triggerMediaDownload,
} from "@/lib/admin/media-urls";

type AddTab = "file" | "video" | "link";
type LibraryTab = "all" | "video" | "docs" | "link";

type MediaLibraryClientProps = {
  locale: Locale;
  role: AdminRole;
  initialItems: MediaItem[];
  storageWritable: boolean;
  canManageMedia: boolean;
};

type ApiErrorBody = {
  item?: MediaItem;
  error?: string;
  code?: string;
};

export function MediaLibraryClient({
  locale,
  role,
  initialItems,
  storageWritable,
  canManageMedia,
}: MediaLibraryClientProps) {
  const ui = getUi(locale);

  const [items, setItems] = useState(initialItems);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<MediaItem | null>(null);
  const [addTab, setAddTab] = useState<AddTab>("file");
  const [libraryTab, setLibraryTab] = useState<LibraryTab>("all");

  const [fileTitle, setFileTitle] = useState("");
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkNote, setLinkNote] = useState("");

  const [pending, startTransition] = useTransition();
  const canUpload =
    canPerform(role, "media_upload") && canManageMedia && storageWritable;
  /** Delete control always visible for operators with manage_media (D-0186). */
  const canDelete = canPerform(role, "media_upload") && canManageMedia;
  const showUploadChrome = canPerform(role, "media_upload") && canManageMedia;

  const filtered = useMemo(() => {
    if (libraryTab === "all") {
      return items;
    }
    if (libraryTab === "docs") {
      return items.filter(
        (item) =>
          item.category === "document" || item.category === "presentation",
      );
    }
    return items.filter((item) => item.category === libraryTab);
  }, [items, libraryTab]);

  const previewUrl = useMemo(() => {
    if (!preview) {
      return null;
    }
    return mediaAdminViewPath(preview);
  }, [preview]);

  const videoEmbed = useMemo(
    () => (videoUrl.trim() ? parseVideoEmbedUrl(videoUrl) : null),
    [videoUrl],
  );

  function flash(ok: string | null, err: string | null) {
    setMessage(ok);
    setError(err);
  }

  function mapError(data: ApiErrorBody, fallback: string): string {
    if (data.code === "too_large") {
      return ui.admin.mediaErrorTooLarge;
    }
    if (data.code === "invalid_type") {
      return ui.admin.mediaErrorInvalidType;
    }
    if (data.code === "storage_unavailable") {
      return ui.admin.mediaErrorStorage;
    }
    return data.error ?? fallback;
  }

  function onAdded(item: MediaItem, successMessage: string) {
    setItems((prev) => [item, ...prev]);
    setPreview(item);
    if (item.category === "video") {
      setLibraryTab("video");
    } else if (item.category === "link") {
      setLibraryTab("link");
    } else {
      setLibraryTab("all");
    }
    flash(successMessage, null);
  }

  function validateFile(file: File, videoOnly: boolean): string | null {
    if (!file.size) {
      return ui.admin.mediaErrorInvalidType;
    }
    if (videoOnly && !file.type.startsWith("video/") && !/\.(mp4|webm|ogg|ogv|mov|m4v)$/i.test(file.name)) {
      return ui.admin.mediaErrorInvalidType;
    }
    if (file.size > MEDIA_MAX_UPLOAD_BYTES) {
      return ui.admin.mediaErrorTooLarge;
    }
    if (!storageWritable && file.size > MEDIA_VERCEL_BODY_LIMIT_BYTES) {
      return ui.admin.mediaErrorTooLarge;
    }
    return null;
  }

  function uploadFileWithProgress(
    file: File,
    titleHint: string,
  ): Promise<ApiErrorBody & { ok: boolean; status: number }> {
    return new Promise((resolve) => {
      const body = new FormData();
      body.append("file", file);
      body.append("visibility", "public");
      body.append("name", titleHint);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/admin/media/");
      xhr.withCredentials = true;
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && event.total > 0) {
          setUploadProgress(Math.round((event.loaded / event.total) * 100));
        }
      };
      xhr.onload = () => {
        let data: ApiErrorBody = {};
        try {
          data = JSON.parse(xhr.responseText) as ApiErrorBody;
        } catch {
          data =
            xhr.status === 413
              ? { error: ui.admin.mediaErrorTooLarge, code: "too_large" }
              : { error: ui.admin.mediaUploadError };
        }
        resolve({
          ...data,
          ok: xhr.status >= 200 && xhr.status < 300 && Boolean(data.item),
          status: xhr.status,
        });
      };
      xhr.onerror = () => {
        resolve({
          ok: false,
          status: 0,
          error: ui.admin.mediaUploadError,
        });
      };
      setUploadProgress(0);
      xhr.send(body);
    });
  }

  function runUpload(file: File, titleHint: string) {
    if (!canUpload) {
      flash(null, ui.admin.mediaErrorStorage);
      return;
    }
    const validation = validateFile(file, false);
    if (validation) {
      flash(null, validation);
      return;
    }

    startTransition(async () => {
      flash(null, null);
      const result = await uploadFileWithProgress(file, titleHint);
      setUploadProgress(null);
      if (!result.ok || !result.item) {
        flash(null, mapError(result, ui.admin.mediaUploadError));
        return;
      }
      setPendingFile(null);
      setVideoFile(null);
      setFileTitle("");
      onAdded(result.item, ui.admin.mediaUploadSuccess);
    });
  }

  function onFileChosen(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    event.target.value = "";
    if (!file) {
      return;
    }
    setPendingFile(file);
    setFileTitle((current) => current.trim() || titleFromFilename(file.name));
  }

  function onVideoFileChosen(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    event.target.value = "";
    if (!file) {
      return;
    }
    const validation = validateFile(file, true);
    if (validation) {
      flash(null, validation);
      return;
    }
    setVideoFile(file);
  }

  async function onSaveVideoUrl(event: FormEvent) {
    event.preventDefault();
    if (!canUpload) {
      flash(null, ui.admin.mediaErrorStorage);
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
      const data = (await res.json()) as ApiErrorBody;
      if (!res.ok || !data.item) {
        flash(null, mapError(data, ui.admin.mediaLinkError));
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
      flash(null, ui.admin.mediaErrorStorage);
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
      const data = (await res.json()) as ApiErrorBody;
      if (!res.ok || !data.item) {
        flash(null, mapError(data, ui.admin.mediaLinkError));
        return;
      }
      setLinkTitle("");
      setLinkUrl("");
      setLinkNote("");
      onAdded(data.item, ui.admin.mediaLinkSuccess);
    });
  }

  async function onDelete(item: MediaItem) {
    if (!canDelete) {
      return;
    }
    if (!window.confirm(ui.admin.mediaDeleteConfirm)) {
      return;
    }

    const previous = items;
    setItems((prev) => prev.filter((row) => row.id !== item.id));
    if (preview?.id === item.id) {
      setPreview(null);
    }

    startTransition(async () => {
      flash(null, null);
      const res = await fetch(`/api/admin/media/${item.id}/`, {
        method: "DELETE",
      });
      const data = (await res.json()) as ApiErrorBody;
      if (!res.ok) {
        setItems(previous);
        flash(null, mapError(data, ui.admin.mediaDeleteError));
        return;
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
    return absoluteMediaUrl(mediaAdminViewPath(item));
  }

  function openItem(item: MediaItem) {
    window.open(absoluteUrl(item), "_blank", "noopener,noreferrer");
  }

  async function downloadItem(item: MediaItem) {
    if (isExternalMediaLink(item)) {
      openItem(item);
      return;
    }
    const path = mediaAdminDownloadPath(item);
    if (!path) {
      flash(null, ui.admin.actionFailed);
      return;
    }
    const ok = await triggerMediaDownload(path);
    if (ok) {
      flash(ui.admin.actionDownloadStarted, null);
    } else {
      flash(null, ui.admin.actionFailed);
    }
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

      {!storageWritable ? (
        <p className="admin-media-banner" role="note">
          {ui.admin.mediaVercelLimit}
        </p>
      ) : null}

      {showUploadChrome ? (
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
                ["file", ui.admin.mediaTabUploadFile],
                ["video", ui.admin.mediaTabUploadVideo],
                ["link", ui.admin.mediaTabAddLink],
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
            <form
              className="admin-media-panel admin-media-form"
              onSubmit={(event) => {
                event.preventDefault();
                if (pendingFile) {
                  runUpload(
                    pendingFile,
                    fileTitle.trim() || titleFromFilename(pendingFile.name),
                  );
                }
              }}
            >
              <label className="admin-field__label" htmlFor="admin-media-choose-file">
                {ui.admin.mediaChooseFile}
              </label>
              <input
                id="admin-media-choose-file"
                type="file"
                accept={MEDIA_UPLOAD_ACCEPT}
                className="admin-media-file-input"
                onChange={onFileChosen}
                disabled={pending || !canUpload}
              />
              <p className="admin-card__meta">{ui.admin.mediaAcceptedTypes}</p>
              <label className="admin-field__label" htmlFor="admin-media-file-title">
                {ui.admin.mediaLinkTitle}
              </label>
              <input
                id="admin-media-file-title"
                type="text"
                value={fileTitle}
                onChange={(event) => setFileTitle(event.target.value)}
                disabled={pending || !canUpload}
                placeholder={ui.admin.mediaLinkTitle}
              />
              {pendingFile ? (
                <p className="admin-card__meta">
                  {pendingFile.name} · {formatBytes(pendingFile.size)}
                </p>
              ) : null}
              {uploadProgress !== null ? (
                <div
                  className="admin-media-progress"
                  role="progressbar"
                  aria-valuenow={uploadProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={ui.admin.mediaUploading}
                >
                  <div
                    className="admin-media-progress__bar"
                    style={{ width: `${uploadProgress}%` }}
                  />
                  <span className="admin-media-progress__label">
                    {uploadProgress}%
                  </span>
                </div>
              ) : null}
              <button
                type="submit"
                className="admin-btn admin-btn--media-cta"
                disabled={pending || !canUpload || !pendingFile}
              >
                {pending ? ui.admin.mediaUploading : ui.admin.mediaUploadNow}
              </button>
            </form>
          ) : null}

          {addTab === "video" ? (
            <div className="admin-media-panel">
              <form className="admin-media-form" onSubmit={onSaveVideoUrl}>
                <p className="admin-card__meta">{ui.admin.mediaVideoUrlHint}</p>
                <label className="admin-field__label" htmlFor="admin-media-video-url">
                  {ui.admin.mediaVideoUrlLabel}
                </label>
                <input
                  id="admin-media-video-url"
                  type="url"
                  value={videoUrl}
                  onChange={(event) => setVideoUrl(event.target.value)}
                  placeholder={ui.admin.mediaVideoUrlPlaceholder}
                  disabled={pending || !canUpload}
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
                  disabled={pending || !canUpload}
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
                  className="admin-btn admin-btn--media-cta"
                  disabled={pending || !canUpload || !videoUrl.trim()}
                >
                  {pending ? ui.admin.mediaUploading : ui.admin.mediaSaveVideo}
                </button>
              </form>

              <div className="admin-media-or">
                <span>{ui.admin.mediaVideoOrUpload}</span>
              </div>

              <form
                className="admin-media-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (videoFile) {
                    runUpload(videoFile, titleFromFilename(videoFile.name));
                  }
                }}
              >
                <label className="admin-field__label" htmlFor="admin-media-choose-video">
                  {ui.admin.mediaChooseVideo}
                </label>
                <input
                  id="admin-media-choose-video"
                  type="file"
                  accept={MEDIA_VIDEO_ACCEPT}
                  className="admin-media-file-input"
                  onChange={onVideoFileChosen}
                  disabled={pending || !canUpload}
                />
                {videoFile ? (
                  <p className="admin-card__meta">
                    {videoFile.name} · {formatBytes(videoFile.size)}
                  </p>
                ) : null}
                {uploadProgress !== null && addTab === "video" ? (
                  <div
                    className="admin-media-progress"
                    role="progressbar"
                    aria-valuenow={uploadProgress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={ui.admin.mediaUploading}
                  >
                    <div
                      className="admin-media-progress__bar"
                      style={{ width: `${uploadProgress}%` }}
                    />
                    <span className="admin-media-progress__label">
                      {uploadProgress}%
                    </span>
                  </div>
                ) : null}
                <button
                  type="submit"
                  className="admin-btn admin-btn--media-cta admin-btn--media-cta-secondary"
                  disabled={pending || !canUpload || !videoFile}
                >
                  {pending ? ui.admin.mediaUploading : ui.admin.mediaUploadNow}
                </button>
              </form>
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
                disabled={pending || !canUpload}
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
                disabled={pending || !canUpload}
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
                disabled={pending || !canUpload}
              />
              <button
                type="submit"
                className="admin-btn admin-btn--media-cta"
                disabled={pending || !canUpload || !linkUrl.trim()}
              >
                {pending ? ui.admin.mediaUploading : ui.admin.mediaSaveLink}
              </button>
            </form>
          ) : null}

          <p className="admin-media-storage-note">{ui.admin.mediaNote}</p>
        </section>
      ) : null}

      <section className="admin-media-library" aria-labelledby="admin-media-library-title">
        <div className="admin-media-library__head">
          <h2 id="admin-media-library-title" className="admin-media-add__title">
            {ui.admin.mediaLibraryHeading}
          </h2>
          <div
            className="admin-media-tabs admin-media-tabs--secondary"
            role="tablist"
            aria-label={ui.admin.mediaLibraryHeading}
          >
            {(
              [
                ["all", ui.admin.mediaFilterAllFiles],
                ["video", ui.admin.mediaFilterVideos],
                ["docs", ui.admin.mediaFilterDocs],
                ["link", ui.admin.mediaFilterLinks],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={libraryTab === id}
                className={`admin-media-tabs__btn${libraryTab === id ? " is-active" : ""}`}
                onClick={() => setLibraryTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="admin-media-empty">
            <p>{ui.admin.mediaEmptyLibrary}</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table admin-media-table">
              <thead>
                <tr>
                  <th scope="col">{ui.admin.colName}</th>
                  <th scope="col">{ui.admin.colType}</th>
                  <th scope="col">{ui.admin.colDate}</th>
                  <th scope="col">{ui.admin.colActions}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="admin-media-table__name">
                          <ItemThumb item={item} />
                          <div>
                            <strong>{item.name}</strong>
                            {item.externalUrl ? (
                              <p className="admin-card__meta admin-media-card__url">
                                {item.externalUrl}
                              </p>
                            ) : null}
                            <p className="admin-card__meta">
                              {mediaVisibility(item)}
                              {isSeedMediaItem(item)
                                ? ` · ${ui.admin.mediaSourceSeed}`
                                : ""}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>{categoryLabel(item.category)}</td>
                      <td>{formatDate(item.createdAt, locale)}</td>
                      <td>
                        <div className="admin-media-table__actions">
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
                            onClick={() => openItem(item)}
                          >
                            {ui.admin.mediaOpen}
                          </button>
                          {isHostedMediaFile(item) ? (
                            <button
                              type="button"
                              className="admin-btn"
                              onClick={() => void downloadItem(item)}
                            >
                              {ui.admin.actionDownload}
                            </button>
                          ) : null}
                          <button
                            type="button"
                            className="admin-btn"
                            onClick={() => void copyText(absoluteUrl(item))}
                          >
                            {ui.admin.mediaCopyLink}
                          </button>
                          {canDelete ? (
                            <button
                              type="button"
                              className="admin-btn admin-btn--danger"
                              onClick={() => void onDelete(item)}
                              disabled={pending}
                            >
                              {ui.admin.actionDelete}
                            </button>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

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
            <div className="admin-media-table__actions">
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
              {isHostedMediaFile(preview) ? (
                <button
                  type="button"
                  className="admin-btn"
                  onClick={() => void downloadItem(preview)}
                >
                  {ui.admin.actionDownload}
                </button>
              ) : null}
              {canDelete ? (
                <button
                  type="button"
                  className="admin-btn admin-btn--danger"
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

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "zh-cn" ? "zh-CN" : locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

function ItemThumb({ item }: { item: MediaItem }) {
  const kind = mediaPreviewKind(item);
  const url = mediaAdminViewPath(item);
  if (kind === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt="" className="admin-media-table__thumb-img" />;
  }
  if (kind === "video") {
    // YouTube/Vimeo link rows only — Blob CDN URLs on uploads are not embeds.
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
          className="admin-media-table__thumb-img"
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
    const embed =
      item.externalUrl && !item.storageKey
        ? parseVideoEmbedUrl(item.externalUrl)
        : null;
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
