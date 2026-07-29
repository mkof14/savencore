import { SITE_URL } from "@/config/site";
import type { MediaItem } from "@/lib/admin/media-types";
import {
  isExternalMediaLink,
  isHostedMediaFile,
} from "@/lib/admin/media-types";

/**
 * Same-origin view / download URLs for hosted media (D-0201 / D-0224).
 * External links stay absolute destinations; never force-download them.
 */

export function mediaPublicViewPath(item: MediaItem): string {
  if (isExternalMediaLink(item) && item.externalUrl) {
    return item.externalUrl;
  }
  if (item.source === "seed" && item.publicPath) {
    return item.publicPath;
  }
  return `/api/media/${item.id}/`;
}

export function mediaPublicDownloadPath(item: MediaItem): string | null {
  if (!isHostedMediaFile(item)) {
    return null;
  }
  return `/api/media/download/${item.id}/`;
}

export function mediaAdminViewPath(item: MediaItem): string {
  if (isExternalMediaLink(item) && item.externalUrl) {
    return item.externalUrl;
  }
  if (item.source === "seed" && item.publicPath) {
    return item.publicPath;
  }
  return `/api/admin/media/${item.id}/`;
}

export function mediaAdminDownloadPath(item: MediaItem): string | null {
  if (!isHostedMediaFile(item)) {
    return null;
  }
  return `/api/admin/media/download/${item.id}/`;
}

export function absoluteMediaUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

function isAppleTouchBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/iPad|iPhone|iPod/i.test(ua)) return true;
  // iPadOS may report as MacIntel with touch
  return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}

function filenameFromContentDisposition(header: string | null): string | null {
  if (!header) return null;
  const utf8 = /filename\*=UTF-8''([^;]+)/i.exec(header);
  if (utf8?.[1]) {
    try {
      return decodeURIComponent(utf8[1].trim().replace(/^"+|"+$/g, ""));
    } catch {
      /* fall through */
    }
  }
  const plain = /filename="?([^";]+)"?/i.exec(header);
  return plain?.[1]?.trim() || null;
}

function openAttachmentFallback(downloadPath: string): void {
  if (isAppleTouchBrowser()) {
    const opened = window.open(downloadPath, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(downloadPath);
    }
    return;
  }

  const a = document.createElement("a");
  a.href = downloadPath;
  a.rel = "noopener";
  a.setAttribute("download", "");
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/**
 * Trigger a same-origin attachment download (mobile + desktop) — D-0201 / D-0224.
 * Prefer fetch → blob → object URL so desktop and iOS get a real save when the
 * browser honors `download`. Fall back to Apple window.open / assign, or a
 * same-origin anchor click (Content-Disposition: attachment from the API).
 */
export function triggerMediaDownload(downloadPath: string): void {
  void (async () => {
    try {
      const response = await fetch(downloadPath, {
        credentials: "same-origin",
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`download failed: ${response.status}`);
      }
      const blob = await response.blob();
      const name =
        filenameFromContentDisposition(
          response.headers.get("Content-Disposition"),
        ) || "download";
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = name;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 2_000);
    } catch {
      openAttachmentFallback(downloadPath);
    }
  })();
}
