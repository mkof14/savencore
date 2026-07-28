export type MediaCategory =
  | "image"
  | "video"
  | "document"
  | "presentation"
  | "link"
  | "other";

export type MediaSource = "seed" | "upload" | "link";

/** Public Media page may list public items; internal stays admin-only. */
export type MediaVisibility = "public" | "internal";

export type MediaItem = {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  category: MediaCategory;
  createdAt: string;
  source: MediaSource;
  /** Public URL path for seed assets under /public. */
  publicPath?: string;
  /** Relative filename under storage/admin-media/files for uploads. */
  storageKey?: string;
  /** External or site URL for link entries. */
  externalUrl?: string;
  description?: string;
  /** Defaults to public for seeds/links; uploads default public for shared library. */
  visibility?: MediaVisibility;
};

export function mediaVisibility(item: MediaItem): MediaVisibility {
  return item.visibility ?? "public";
}

/**
 * Built-in catalog rows (brand assets + curated site links).
 * D-0186: deletable via soft-hide (files under /public are not removed).
 */
export function isSeedMediaItem(item: MediaItem): boolean {
  return item.source === "seed" || item.id.startsWith("seed-");
}

/** @deprecated Use isSeedMediaItem — seeds are no longer hard-protected from delete (D-0186). */
export function isProtectedMediaItem(item: MediaItem): boolean {
  return isSeedMediaItem(item);
}

/**
 * Hosted file we can stream (seed under /public, or upload on FS / Vercel Blob).
 * Blob uploads may also set externalUrl to the Blob CDN URL — still hosted.
 */
export function isHostedMediaFile(item: MediaItem): boolean {
  if (item.source === "seed" && Boolean(item.publicPath)) {
    return true;
  }
  if (item.source === "upload" && Boolean(item.storageKey)) {
    return true;
  }
  return false;
}

/** True external / site link rows — open in a new tab; never force-download. */
export function isExternalMediaLink(item: MediaItem): boolean {
  if (item.source === "link") {
    return true;
  }
  if (isHostedMediaFile(item)) {
    return false;
  }
  return Boolean(item.externalUrl) || item.category === "link";
}

export function mediaPreviewKind(
  item: MediaItem,
): "image" | "video" | "pdf" | "text" | "link" | "other" {
  if (item.category === "video") {
    return "video";
  }
  if (item.mimeType.startsWith("video/")) {
    return "video";
  }
  if (item.mimeType.startsWith("image/")) {
    return "image";
  }
  if (
    item.mimeType === "application/pdf" ||
    item.name.toLowerCase().endsWith(".pdf")
  ) {
    return "pdf";
  }
  // Do not treat Blob CDN URLs on uploads as “link” (D-0201).
  if (isExternalMediaLink(item)) {
    return "link";
  }
  if (
    item.mimeType.startsWith("text/") ||
    item.name.toLowerCase().endsWith(".md") ||
    item.name.toLowerCase().endsWith(".txt")
  ) {
    return "text";
  }
  return "other";
}

/** Local / durable-host max for filesystem store (D-0183). */
export const MEDIA_MAX_UPLOAD_BYTES = 40 * 1024 * 1024;

/**
 * Typical Vercel serverless request body limit. Larger file uploads fail
 * before our handler runs — prefer YouTube/Vimeo URL embeds for video.
 */
export const MEDIA_VERCEL_BODY_LIMIT_BYTES = 4.5 * 1024 * 1024;

/** Accept attribute for the admin file input (honest supported types). */
export const MEDIA_UPLOAD_ACCEPT =
  "image/*,video/*,.mp4,.webm,.ogg,.mov,.m4v,.pdf,.doc,.docx,.ppt,.pptx,.key,.txt,.md,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation";

export const MEDIA_VIDEO_ACCEPT = "video/*,.mp4,.webm,.ogg,.mov,.m4v";

export const MEDIA_FILTER_CATEGORIES: readonly MediaCategory[] = [
  "image",
  "video",
  "document",
  "presentation",
  "link",
  "other",
] as const;

export type MediaLibraryFilter = "all" | "video" | "link" | MediaCategory;

/** Infer MIME when the browser leaves type empty (common for .mov / some MP4). */
export function inferMimeType(name: string, mimeType: string): string {
  const trimmed = mimeType.trim();
  if (trimmed && trimmed !== "application/octet-stream") {
    return trimmed;
  }
  const ext = name.includes(".")
    ? name.slice(name.lastIndexOf(".")).toLowerCase()
    : "";
  switch (ext) {
    case ".mp4":
    case ".m4v":
      return "video/mp4";
    case ".webm":
      return "video/webm";
    case ".ogg":
    case ".ogv":
      return "video/ogg";
    case ".mov":
      return "video/quicktime";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".pdf":
      return "application/pdf";
    case ".doc":
      return "application/msword";
    case ".docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case ".ppt":
      return "application/vnd.ms-powerpoint";
    case ".pptx":
      return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    case ".txt":
      return "text/plain";
    case ".md":
      return "text/markdown";
    default:
      return trimmed || "application/octet-stream";
  }
}

export function isAllowedUpload(name: string, mimeType: string): boolean {
  const mime = inferMimeType(name, mimeType).toLowerCase();
  if (
    mime.startsWith("image/") ||
    mime.startsWith("video/") ||
    mime.startsWith("text/")
  ) {
    return true;
  }
  if (
    mime.includes("pdf") ||
    mime.includes("msword") ||
    mime.includes("wordprocessing") ||
    mime.includes("powerpoint") ||
    mime.includes("presentation") ||
    mime.includes("keynote")
  ) {
    return true;
  }
  return /\.(pdf|doc|docx|ppt|pptx|key|txt|md|mp4|webm|ogg|ogv|mov|m4v|png|jpe?g|webp|gif)$/i.test(
    name,
  );
}
