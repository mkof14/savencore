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
  if (
    item.category === "link" ||
    item.source === "link" ||
    Boolean(item.externalUrl)
  ) {
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

/** Accept attribute for the admin file input (honest supported types). */
export const MEDIA_UPLOAD_ACCEPT =
  "image/*,video/*,.pdf,.doc,.docx,.ppt,.pptx,.key,.txt,.md,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation";

export const MEDIA_FILTER_CATEGORIES: readonly MediaCategory[] = [
  "image",
  "video",
  "document",
  "presentation",
  "link",
  "other",
] as const;
