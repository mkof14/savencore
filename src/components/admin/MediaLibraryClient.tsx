"use client";

import { useMemo, useState, useTransition } from "react";

import type { AdminRole } from "@/admin/roles";
import { canPerform } from "@/admin/roles";
import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import {
  mediaPreviewKind,
  type MediaItem,
} from "@/lib/admin/media-types";
import { SITE_URL } from "@/config/site";

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
  const [pending, startTransition] = useTransition();
  const canUpload = canPerform(role, "media_upload");

  const previewUrl = useMemo(() => {
    if (!preview) {
      return null;
    }
    if (preview.source === "seed" && preview.publicPath) {
      return preview.publicPath;
    }
    return `/api/admin/media/${preview.id}/`;
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

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      flash(ui.admin.actionCopied, null);
    } catch {
      flash(null, ui.admin.actionFailed);
    }
  }

  function absoluteUrl(item: MediaItem): string {
    if (item.source === "seed" && item.publicPath) {
      return `${SITE_URL}${item.publicPath}`;
    }
    return `${SITE_URL}/api/admin/media/${item.id}/`;
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
    const url =
      item.source === "seed" && item.publicPath
        ? item.publicPath
        : `/api/admin/media/${item.id}/`;
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
    const url = `/api/admin/media/${item.id}/`;
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
    // Honest path: open print dialog so the operator can Save as PDF.
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
        <div className="admin-upload">
          <input
            type="file"
            onChange={(event) => {
              void onUpload(event.target.files);
              event.target.value = "";
            }}
            disabled={pending}
            aria-label={ui.admin.mediaUploadLabel}
          />
          <span className="admin-card__meta">{ui.admin.mediaUploadHint}</span>
        </div>
      ) : null}

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
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <strong>{item.name}</strong>
                  {item.description ? (
                    <div className="admin-card__meta">{item.description}</div>
                  ) : null}
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
                  </div>
                </td>
              </tr>
            ))}
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

function PreviewBody({ item, url }: { item: MediaItem; url: string }) {
  const kind = mediaPreviewKind(item);
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
