import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

import type { MediaCategory, MediaItem } from "@/lib/admin/media-types";

export type { MediaCategory, MediaItem } from "@/lib/admin/media-types";
export { mediaPreviewKind } from "@/lib/admin/media-types";

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
    description: "Brand mark used in site chrome.",
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
    description: "Email-safe PNG brand mark for templates and mailings.",
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
    description: "Default social sharing image for the public site.",
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
    (item.source === "seed" || item.source === "upload")
  );
}

async function writeUploadIndex(items: MediaItem[]): Promise<void> {
  await ensureStorage();
  await fs.writeFile(INDEX_PATH, `${JSON.stringify(items, null, 2)}\n`, "utf8");
}

function guessCategory(mimeType: string, name: string): MediaCategory {
  if (mimeType.startsWith("image/")) {
    return "image";
  }
  if (mimeType.startsWith("video/")) {
    return "video";
  }
  if (
    mimeType.includes("presentation") ||
    mimeType.includes("powerpoint") ||
    /\.(ppt|pptx|key)$/i.test(name)
  ) {
    return "presentation";
  }
  if (
    mimeType.includes("pdf") ||
    mimeType.includes("document") ||
    mimeType.includes("text") ||
    /\.(pdf|doc|docx|txt|md)$/i.test(name)
  ) {
    return "document";
  }
  return "other";
}

export async function listMediaItems(): Promise<MediaItem[]> {
  const uploads = await readUploadIndex();
  const seeds = await Promise.all(
    SEED_ITEMS.map(async (item) => {
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
  return [...seeds, ...uploads].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
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

const MAX_UPLOAD_BYTES = 15 * 1024 * 1024;

export async function saveUploadedMedia(input: {
  name: string;
  mimeType: string;
  buffer: Buffer;
}): Promise<UploadResult> {
  const name = input.name.trim().slice(0, 180) || "upload.bin";
  if (!input.buffer.length) {
    return { ok: false, error: "Empty file.", code: "invalid" };
  }
  if (input.buffer.length > MAX_UPLOAD_BYTES) {
    return {
      ok: false,
      error: "File exceeds 15 MB limit for this development store.",
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
    };

    const index = await readUploadIndex();
    index.push(item);
    await writeUploadIndex(index);
    return { ok: true, item };
  } catch {
    return {
      ok: false,
      error:
        "Durable upload storage is not available in this environment. Local development writes to storage/admin-media/; production needs configured object storage (next phase).",
      code: "storage_unavailable",
    };
  }
}
