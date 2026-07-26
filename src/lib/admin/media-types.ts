export type MediaCategory =
  | "image"
  | "video"
  | "document"
  | "presentation"
  | "other";

export type MediaItem = {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  category: MediaCategory;
  createdAt: string;
  source: "seed" | "upload";
  /** Public URL path for seed assets under /public. */
  publicPath?: string;
  /** Relative filename under storage/admin-media/files for uploads. */
  storageKey?: string;
  description?: string;
};

export function mediaPreviewKind(
  item: MediaItem,
): "image" | "video" | "pdf" | "text" | "other" {
  if (item.mimeType.startsWith("image/")) {
    return "image";
  }
  if (item.mimeType.startsWith("video/")) {
    return "video";
  }
  if (
    item.mimeType === "application/pdf" ||
    item.name.toLowerCase().endsWith(".pdf")
  ) {
    return "pdf";
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
