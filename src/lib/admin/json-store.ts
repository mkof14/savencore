/**
 * Admin JSON store (invitations, roles, permissions, mailings, notifications, outbox).
 * Local FS under storage/admin/ in development.
 * When BLOB_READ_WRITE_TOKEN is set, persists via Vercel Blob (D-0220).
 * On Vercel without Blob: writes fail honestly — surfaces “local-only / not durable”.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

import { list, put } from "@vercel/blob";

const STORAGE_ROOT = path.join(process.cwd(), "storage", "admin");
const BLOB_PREFIX = "admin-store/";

export type StoreWriteResult =
  | { ok: true }
  | { ok: false; error: string; code: "storage_unavailable" };

function isBlobConfigured(): boolean {
  return Boolean((process.env.BLOB_READ_WRITE_TOKEN ?? "").trim());
}

/** True when admin JSON can persist (local FS or Vercel Blob). */
export function jsonStoreIsWritableHost(): boolean {
  return isBlobConfigured() || !process.env.VERCEL;
}

function shouldUseBlobBackend(): boolean {
  return isBlobConfigured();
}

function tokenOption(): { token: string } | Record<string, never> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token ? { token } : {};
}

function blobPathname(filename: string): string {
  return `${BLOB_PREFIX}${filename}`;
}

async function ensureRoot(): Promise<void> {
  await fs.mkdir(STORAGE_ROOT, { recursive: true });
}

export function adminStorePath(filename: string): string {
  return path.join(STORAGE_ROOT, filename);
}

async function blobReadText(pathname: string): Promise<string | null> {
  try {
    const result = await list({
      prefix: pathname,
      limit: 5,
      ...tokenOption(),
    });
    const match = result.blobs.find((blob) => blob.pathname === pathname);
    if (!match?.url) return null;
    const response = await fetch(match.url, { cache: "no-store" });
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}

async function blobWriteText(
  pathname: string,
  body: string,
  contentType: string,
): Promise<void> {
  await put(pathname, body, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
    ...tokenOption(),
  });
}

export async function readJsonFile<T>(
  filename: string,
  fallback: T,
): Promise<T> {
  if (shouldUseBlobBackend()) {
    const text = await blobReadText(blobPathname(filename));
    if (text == null) return fallback;
    try {
      return JSON.parse(text) as T;
    } catch {
      return fallback;
    }
  }
  try {
    const raw = await fs.readFile(adminStorePath(filename), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeJsonFile<T>(
  filename: string,
  data: T,
): Promise<StoreWriteResult> {
  const body = `${JSON.stringify(data, null, 2)}\n`;
  try {
    if (shouldUseBlobBackend()) {
      await blobWriteText(blobPathname(filename), body, "application/json");
      return { ok: true };
    }
    if (process.env.VERCEL) {
      return {
        ok: false,
        error:
          "Admin JSON store is not durable on this host without BLOB_READ_WRITE_TOKEN. Local development writes to storage/admin/; configure Vercel Blob for production persistence.",
        code: "storage_unavailable",
      };
    }
    await ensureRoot();
    await fs.writeFile(adminStorePath(filename), body, "utf8");
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Admin JSON store is not writable in this environment. Local development writes to storage/admin/; production needs BLOB_READ_WRITE_TOKEN (Vercel Blob) or a later durable store.",
      code: "storage_unavailable",
    };
  }
}

export async function appendJsonLinesFile(
  filename: string,
  line: unknown,
): Promise<StoreWriteResult> {
  const entry = `${JSON.stringify(line)}\n`;
  try {
    if (shouldUseBlobBackend()) {
      const pathname = blobPathname(filename);
      const existing = (await blobReadText(pathname)) ?? "";
      await blobWriteText(pathname, `${existing}${entry}`, "application/x-ndjson");
      return { ok: true };
    }
    if (process.env.VERCEL) {
      return {
        ok: false,
        error:
          "Admin outbox store is not durable on this host without BLOB_READ_WRITE_TOKEN.",
        code: "storage_unavailable",
      };
    }
    await ensureRoot();
    await fs.appendFile(adminStorePath(filename), entry, "utf8");
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Admin outbox store is not writable in this environment.",
      code: "storage_unavailable",
    };
  }
}
