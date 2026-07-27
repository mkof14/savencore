"use client";

import { useMemo, useState, useTransition, type FormEvent } from "react";

import type { AdminRole } from "@/admin/roles";
import { canPerform } from "@/admin/roles";
import type { Locale } from "@/config/locales";
import { SITE_URL } from "@/config/site";
import { getUi } from "@/i18n/ui";
import {
  MEDIA_FILTER_CATEGORIES,
  MEDIA_UPLOAD_ACCEPT,
  mediaPreviewKind,
  mediaVisibility,
  type MediaCategory,
  type MediaItem,
} from "@/lib/admin/media-types";

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
  const [items, setItems] = useState(initialItems);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | MediaCategory>("all");
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkCategory, setLinkCategory] = useState<MediaCategory>("link");
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

  function flash(ok: string | null, err: string | null) {
    setMessage(ok);
    setError(err);
  }

  async function onUpload(fileList: FileList | null) {
    if (!fileList?.[0] || !canUpload) {
      return;
    }
    const file = fileList[0];
    const body = new FormData();
    body.append("file", file);
    body.append("visibility", "public");
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
      setItems((prev) => [data.item!, ...prev]);
      flash(ui.admin.mediaUploadSuccess, null);
    });
  }

  async function onAddLink(event: FormEvent) {
    event.preventDefault();
    if (!canUpload) {
      return;
    }
    startTransition(async () => {
      flash(null, null);
      const res = await fetch("/api/admin/media/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "link",
          name: linkTitle,
          url: linkUrl,
          category: linkCategory,
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
      setItems((prev) => [data.item!, ...prev]);
      setLinkTitle("");
      setLinkUrl("");
      setLinkCategory("link");
      flash(ui.admin.mediaLinkSuccess, null);
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

  async function shareItem(item: MediaItem) {
    const url = absoluteUrl(item);
    if (navigator.share) {
      try {
        await navigator.share({ title: item.name, url });
        flash(ui.admin.actionShared, null);
        return;
      } catch {
        // fall through to copy
      }
    }
    await copyText(url);
  }

  function printItem(item: MediaItem) {
    const url = resolveItemUrl(item, { absolute: false });
    if (url.startsWith("http") && item.externalUrl) {
      window.open(url, "_blank", "noopener,noreferrer");
      flash(ui.admin.actionPrintReady, null);
      return;
    }
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      flash(null, ui.admin.actionFailed);
      return;
    }
    win.addEventListener("load", () => {
      try {
        win.focus();
        win.print();
      } catch {
        // user can print manually
      }
    });
    flash(ui.admin.actionPrintReady, null);
  }

  function downloadItem(item: MediaItem) {
    if (item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer");
      flash(ui.admin.actionDownloadStarted, null);
      return;
    }
    const url =
      item.source === "seed" && item.publicPath
        ? item.publicPath
        : `/api/admin/media/${item.id}/`;
    const a = document.createElement("a");
    a.href = url;
    a.download = item.name;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    flash(ui.admin.actionDownloadStarted, null);
  }

  function pdfAction(item: MediaItem) {
    const kind = mediaPreviewKind(item);
    if (kind === "pdf") {
      downloadItem(item);
      return;
    }
    printItem(item);
    flash(ui.admin.actionPdfHint, null);
  }

  return (
    <div>
      {message ? <p className="admin-toast" role="status">{message}</p> : null}
      {error ? (
        <p className="admin-toast admin-toast--error" role="alert">
          {error}
        </p>
      ) : null}

      <p className="admin-note">{ui.admin.mediaNote}</p>

      {canUpload ? (
        <div className="admin-media-tools">
          <div className="admin-upload">
            <label className="admin-field__label" htmlFor="admin-media-file">
              {ui.admin.mediaUploadLabel}
            </label>
            <input
              id="admin-media-file"
              type="file"
              accept={MEDIA_UPLOAD_ACCEPT}
              onChange={(event) => {
                void onUpload(event.target.files);
                event.target.value = "";
              }}
              disabled={pending}
              aria-label={ui.admin.mediaUploadLabel}
            />
            <span className="admin-card__meta">{ui.admin.mediaUploadHint}</span>
          </div>

          <form className="admin-media-link" onSubmit={onAddLink}>
            <p className="admin-field__label">{ui.admin.mediaLinkHeading}</p>
            <div className="admin-media-link__row">
              <input
                type="text"
                value={linkTitle}
                onChange={(event) => setLinkTitle(event.target.value)}
                placeholder={ui.admin.mediaLinkTitle}
                aria-label={ui.admin.mediaLinkTitle}
                disabled={pending}
                required
              />
              <input
                type="url"
                value={linkUrl}
                onChange={(event) => setLinkUrl(event.target.value)}
                placeholder={ui.admin.mediaLinkUrl}
                aria-label={ui.admin.mediaLinkUrl}
                disabled={pending}
                required
              />
              <select
                value={linkCategory}
                onChange={(event) =>
                  setLinkCategory(event.target.value as MediaCategory)
                }
                aria-label={ui.admin.colType}
                disabled={pending}
              >
                <option value="link">link</option>
                <option value="video">video</option>
                <option value="document">document</option>
                <option value="presentation">presentation</option>
              </select>
              <button
                type="submit"
                className="admin-btn admin-btn--primary"
                disabled={pending}
              >
                {ui.admin.mediaLinkAdd}
              </button>
            </div>
            <span className="admin-card__meta">{ui.admin.mediaLinkHint}</span>
          </form>
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
            {category}
          </button>
        ))}
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>{ui.admin.colName}</th>
              <th>{ui.admin.colType}</th>
              <th>{ui.admin.colSource}</th>
              <th>{ui.admin.colActions}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4}>
                  <p className="admin-card__meta">{ui.admin.mediaEmptyFilter}</p>
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.name}</strong>
                    {item.description ? (
                      <div className="admin-card__meta">{item.description}</div>
                    ) : null}
                    {item.externalUrl ? (
                      <div className="admin-card__meta">{item.externalUrl}</div>
                    ) : null}
                    <div className="admin-card__meta">
                      {mediaVisibility(item)}
                    </div>
                  </td>
                  <td>
                    <span className="admin-badge">{item.category}</span>
                    <div className="admin-card__meta">{item.mimeType}</div>
                  </td>
                  <td>{item.source}</td>
                  <td>
                    <div className="admin-actions">
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
                        {ui.admin.actionCopy}
                      </button>
                      <button
                        type="button"
                        className="admin-btn"
                        onClick={() => printItem(item)}
                      >
                        {ui.admin.actionPrint}
                      </button>
                      <button
                        type="button"
                        className="admin-btn"
                        onClick={() => void shareItem(item)}
                      >
                        {ui.admin.actionShare}
                      </button>
                      <button
                        type="button"
                        className="admin-btn"
                        onClick={() => downloadItem(item)}
                      >
                        {ui.admin.actionDownload}
                      </button>
                      <button
                        type="button"
                        className="admin-btn"
                        onClick={() => pdfAction(item)}
                      >
                        {ui.admin.actionPdf}
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
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

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
          </div>
        </div>
      ) : null}
    </div>
  );
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

function PreviewBody({ item, url }: { item: MediaItem; url: string }) {
  const kind = mediaPreviewKind(item);
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
  if (kind === "video") {
    return <video src={url} controls playsInline />;
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
