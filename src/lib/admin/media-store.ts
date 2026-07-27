import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

import type {
  MediaCategory,
  MediaItem,
  MediaVisibility,
} from "@/lib/admin/media-types";
import { mediaVisibility } from "@/lib/admin/media-types";

export type { MediaCategory, MediaItem, MediaVisibility } from "@/lib/admin/media-types";
export {
  mediaPreviewKind,
  mediaVisibility,
  MEDIA_UPLOAD_ACCEPT,
  MEDIA_FILTER_CATEGORIES,
} from "@/lib/admin/media-types";

const STORAGE_ROOT = path.join(process.cwd(), "storage", "admin-media");
const FILES_DIR = path.join(STORAGE_ROOT, "files");
const INDEX_PATH = path.join(STORAGE_ROOT, "index.json");

/** Seed catalog — real brand / site assets already in the repo (not invented KPIs). */
const SEED_ITEMS: readonly MediaItem[] = [
  {
    id: "seed-logo-mark",
    name: "SAVEN logo mark",
    mimeType: "image/webp",
    size: 0,
    category: "image",
    createdAt: "2026-07-26T00:00:00.000Z",
    source: "seed",
    publicPath: "/brand/saven-logo-mark.webp",
    description: "Falcon brand mark used in site chrome and domain mastheads.",
    visibility: "public",
  },
  {
    id: "seed-logo-mark-png",
    name: "SAVEN logo mark (email PNG)",
    mimeType: "image/png",
    size: 0,
    category: "image",
    createdAt: "2026-07-26T00:00:00.000Z",
    source: "seed",
    publicPath: "/brand/saven-logo-mark.png",
    description: "Email-safe PNG falcon brand mark for templates and mailings.",
    visibility: "public",
  },
  {
    id: "seed-og-default",
    name: "Default Open Graph image",
    mimeType: "image/png",
    size: 0,
    category: "image",
    createdAt: "2026-07-26T00:00:00.000Z",
    source: "seed",
    publicPath: "/brand/og-default.png",
    description: "Default social share card — falcon mark + SAVEN Core name (1200×630).",
    visibility: "public",
  },
  {
    id: "seed-email-network",
    name: "Email header network graphic",
    mimeType: "image/png",
    size: 0,
    category: "image",
    createdAt: "2026-07-26T00:00:00.000Z",
    source: "seed",
    publicPath: "/email/header-network.png",
    description: "Subtle constellation graphic for branded email headers (D-0180).",
    visibility: "public",
  },
  {
    id: "seed-favicon",
    name: "Favicon 32×32",
    mimeType: "image/png",
    size: 0,
    category: "image",
    createdAt: "2026-07-26T00:00:00.000Z",
    source: "seed",
    publicPath: "/favicon-32x32.png",
    description: "Site favicon asset.",
    visibility: "public",
  },
  {
    id: "seed-site-home",
    name: "SAVEN Core website",
    mimeType: "text/uri-list",
    size: 0,
    category: "link",
    createdAt: "2026-07-26T00:00:00.000Z",
    source: "link",
    externalUrl: "https://www.savencore.com/",
    description: "Public website — approved orientation materials.",
    visibility: "public",
  },
  {
    id: "seed-site-contact",
    name: "Contact SAVEN Core",
    mimeType: "text/uri-list",
    size: 0,
    category: "link",
    createdAt: "2026-07-26T00:00:00.000Z",
    source: "link",
    externalUrl: "https://www.savencore.com/en/contact/",
    description: "Authorized contact channel — info@savencore.com via Contact.",
    visibility: "public",
  },
];

async function ensureStorage(): Promise<void> {
  await fs.mkdir(FILES_DIR, { recursive: true });
  try {
    await fs.access(INDEX_PATH);
  } catch {
    await fs.writeFile(INDEX_PATH, "[]\n", "utf8");
  }
}

async function readUploadIndex(): Promise<MediaItem[]> {
  await ensureStorage();
  try {
    const raw = await fs.readFile(INDEX_PATH, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter(isMediaItem);
  } catch {
    return [];
  }
}

function isMediaItem(value: unknown): value is MediaItem {
  if (!value || typeof value !== "object") {
    return false;
  }
  const item = value as MediaItem;
  return (
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.mimeType === "string" &&
    typeof item.size === "number" &&
    typeof item.category === "string" &&
    typeof item.createdAt === "string" &&
    (item.source === "seed" || item.source === "upload" || item.source === "link")
  );
}

async function writeUploadIndex(items: MediaItem[]): Promise<void> {
  await ensureStorage();
  await fs.writeFile(INDEX_PATH, `${JSON.stringify(items, null, 2)}\n`, "utf8");
}

export function guessCategory(mimeType: string, name: string): MediaCategory {
  if (mimeType.startsWith("image/")) {
    return "image";
  }
  if (mimeType.startsWith("video/")) {
    return "video";
  }
  if (
    mimeType.includes("presentation") ||
    mimeType.includes("powerpoint") ||
    mimeType.includes("keynote") ||
    /\.(ppt|pptx|key)$/i.test(name)
  ) {
    return "presentation";
  }
  if (
    mimeType.includes("pdf") ||
    mimeType.includes("document") ||
    mimeType.includes("msword") ||
    mimeType.includes("wordprocessing") ||
    mimeType.includes("text") ||
    /\.(pdf|doc|docx|txt|md)$/i.test(name)
  ) {
    return "document";
  }
  return "other";
}

async function withSeedSizes(seeds: readonly MediaItem[]): Promise<MediaItem[]> {
  return Promise.all(
    seeds.map(async (item) => {
      if (!item.publicPath) {
        return item;
      }
      try {
        const abs = path.join(process.cwd(), "public", item.publicPath);
        const stat = await fs.stat(abs);
        return { ...item, size: stat.size };
      } catch {
        return item;
      }
    }),
  );
}

export async function listMediaItems(): Promise<MediaItem[]> {
  const uploads = await readUploadIndex();
  const seeds = await withSeedSizes(SEED_ITEMS);
  return [...seeds, ...uploads].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}

/** Public Media page — only visibility=public items (default public). */
export async function listPublicMediaItems(): Promise<MediaItem[]> {
  const items = await listMediaItems();
  return items.filter((item) => mediaVisibility(item) === "public");
}

export async function getMediaItem(id: string): Promise<MediaItem | null> {
  const items = await listMediaItems();
  return items.find((item) => item.id === id) ?? null;
}

export type MediaFilePayload = {
  item: MediaItem;
  buffer: Buffer;
  downloadName: string;
};

export async function readMediaFile(
  id: string,
): Promise<MediaFilePayload | null> {
  const item = await getMediaItem(id);
  if (!item) {
    return null;
  }

  if (item.source === "link" || item.externalUrl) {
    return null;
  }

  if (item.source === "seed" && item.publicPath) {
    const abs = path.join(process.cwd(), "public", item.publicPath);
    const buffer = await fs.readFile(abs);
    return {
      item: { ...item, size: buffer.length },
      buffer,
      downloadName: path.basename(item.publicPath),
    };
  }

  if (item.source === "upload" && item.storageKey) {
    const abs = path.join(FILES_DIR, item.storageKey);
    const buffer = await fs.readFile(abs);
    return {
      item: { ...item, size: buffer.length },
      buffer,
      downloadName: item.name,
    };
  }

  return null;
}

export type UploadResult =
  | { ok: true; item: MediaItem }
  | { ok: false; error: string; code: "storage_unavailable" | "invalid" };

const MAX_UPLOAD_BYTES = 40 * 1024 * 1024;

export async function saveUploadedMedia(input: {
  name: string;
  mimeType: string;
  buffer: Buffer;
  visibility?: MediaVisibility;
}): Promise<UploadResult> {
  const name = input.name.trim().slice(0, 180) || "upload.bin";
  if (!input.buffer.length) {
    return { ok: false, error: "Empty file.", code: "invalid" };
  }
  if (input.buffer.length > MAX_UPLOAD_BYTES) {
    return {
      ok: false,
      error: "File exceeds 40 MB limit for this development store.",
      code: "invalid",
    };
  }

  try {
    await ensureStorage();
    const id = randomUUID();
    const safeExt = path.extname(name).slice(0, 12) || "";
    const storageKey = `${id}${safeExt}`;
    await fs.writeFile(path.join(FILES_DIR, storageKey), input.buffer);

    const item: MediaItem = {
      id,
      name,
      mimeType: input.mimeType || "application/octet-stream",
      size: input.buffer.length,
      category: guessCategory(input.mimeType, name),
      createdAt: new Date().toISOString(),
      source: "upload",
      storageKey,
      visibility: input.visibility ?? "public",
    };

    const index = await readUploadIndex();
    index.push(item);
    await writeUploadIndex(index);
    return { ok: true, item };
  } catch {
    return {
      ok: false,
      error:
        "Durable upload storage is not available in this environment. Local development writes to storage/admin-media/; production on Vercel typically cannot persist filesystem uploads — configure object storage in a later phase.",
      code: "storage_unavailable",
    };
  }
}

function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

export async function saveMediaLink(input: {
  name: string;
  url: string;
  category?: MediaCategory;
  description?: string;
  visibility?: MediaVisibility;
}): Promise<UploadResult> {
  const name = input.name.trim().slice(0, 180);
  const externalUrl = normalizeUrl(input.url);
  if (!name) {
    return { ok: false, error: "Title is required.", code: "invalid" };
  }
  if (!externalUrl) {
    return {
      ok: false,
      error: "Enter a valid http(s) URL.",
      code: "invalid",
    };
  }

  const category =
    input.category === "video" ||
    input.category === "document" ||
    input.category === "presentation" ||
    input.category === "link"
      ? input.category
      : "link";

  try {
    await ensureStorage();
    const description = input.description?.trim().slice(0, 400);
    const item: MediaItem = {
      id: randomUUID(),
      name,
      mimeType: "text/uri-list",
      size: 0,
      category,
      createdAt: new Date().toISOString(),
      source: "link",
      externalUrl,
      ...(description ? { description } : {}),
      visibility: input.visibility ?? "public",
    };

    const index = await readUploadIndex();
    index.push(item);
    await writeUploadIndex(index);
    return { ok: true, item };
  } catch {
    return {
      ok: false,
      error:
        "Durable media storage is not available in this environment. Local development writes to storage/admin-media/; production on Vercel typically cannot persist filesystem writes — configure object storage in a later phase.",
      code: "storage_unavailable",
    };
  }
}

export type DeleteResult =
  | { ok: true }
  | { ok: false; error: string; code: "not_found" | "forbidden" | "storage_unavailable" };

export async function deleteMediaItem(id: string): Promise<DeleteResult> {
  if (id.startsWith("seed-")) {
    return {
      ok: false,
      error: "Seed brand assets cannot be deleted.",
      code: "forbidden",
    };
  }

  try {
    const index = await readUploadIndex();
    const existing = index.find((item) => item.id === id);
    if (!existing) {
      return { ok: false, error: "Not found.", code: "not_found" };
    }

    if (existing.storageKey) {
      try {
        await fs.unlink(path.join(FILES_DIR, existing.storageKey));
      } catch {
        // Index removal still proceeds if file already missing.
      }
    }

    await writeUploadIndex(index.filter((item) => item.id !== id));
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Could not delete media in this environment. Filesystem storage may be read-only (typical on Vercel).",
      code: "storage_unavailable",
    };
  }
}
