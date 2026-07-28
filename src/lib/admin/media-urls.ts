import { SITE_URL } from "@/config/site";
import type { MediaItem } from "@/lib/admin/media-types";
import {
  isExternalMediaLink,
  isHostedMediaFile,
} from "@/lib/admin/media-types";

/**
 * Same-origin view / download URLs for hosted media (D-0201).
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

/**
 * Trigger a same-origin attachment download (mobile + desktop).
 * Relies on Content-Disposition: attachment from the download API —
 * do not depend on the HTML download attribute (ignored cross-origin / iOS).
 */
export function triggerMediaDownload(downloadPath: string): void {
  const a = document.createElement("a");
  a.href = downloadPath;
  a.rel = "noopener";
  // New tab: keeps the gallery open; iOS Safari honors attachment headers here.
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
