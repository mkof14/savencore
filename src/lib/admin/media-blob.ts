/**
 * Optional Vercel Blob backend for admin media (D-0194).
 * When BLOB_READ_WRITE_TOKEN is unset, callers fall back to local FS / honest unavailability.
 */

import { del, list, put } from "@vercel/blob";

const INDEX_PATHNAME = "admin-media/index.json";
const HIDDEN_PATHNAME = "admin-media/hidden.json";
const FILE_PREFIX = "admin-media/files/";

export function isBlobMediaConfigured(): boolean {
  return Boolean((process.env.BLOB_READ_WRITE_TOKEN ?? "").trim());
}

function tokenOption(): { token: string } | Record<string, never> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token ? { token } : {};
}

async function readJsonBlob<T>(pathname: string, fallback: T): Promise<T> {
  try {
    const result = await list({
      prefix: pathname,
      limit: 1,
      ...tokenOption(),
    });
    const match = result.blobs.find((blob) => blob.pathname === pathname);
    if (!match?.url) {
      return fallback;
    }
    const response = await fetch(match.url, { cache: "no-store" });
    if (!response.ok) {
      return fallback;
    }
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

async function writeJsonBlob(pathname: string, value: unknown): Promise<void> {
  await put(pathname, `${JSON.stringify(value, null, 2)}\n`, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    ...tokenOption(),
  });
}

export async function blobReadUploadIndex<T>(): Promise<T[]> {
  const parsed = await readJsonBlob<unknown>(INDEX_PATHNAME, []);
  return Array.isArray(parsed) ? (parsed as T[]) : [];
}

export async function blobWriteUploadIndex(items: unknown[]): Promise<void> {
  await writeJsonBlob(INDEX_PATHNAME, items);
}

export async function blobReadHiddenIds(): Promise<Set<string>> {
  const parsed = await readJsonBlob<unknown>(HIDDEN_PATHNAME, []);
  if (!Array.isArray(parsed)) {
    return new Set();
  }
  return new Set(
    parsed.filter((value): value is string => typeof value === "string"),
  );
}

export async function blobWriteHiddenIds(ids: Set<string>): Promise<void> {
  await writeJsonBlob(HIDDEN_PATHNAME, [...ids].sort());
}

export async function blobPutMediaFile(input: {
  storageKey: string;
  buffer: Buffer;
  mimeType: string;
}): Promise<string> {
  const pathname = `${FILE_PREFIX}${input.storageKey}`;
  const result = await put(pathname, input.buffer, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: input.mimeType,
    ...tokenOption(),
  });
  return result.url;
}

export async function blobDeleteMediaFile(storageKey: string): Promise<void> {
  const pathname = `${FILE_PREFIX}${storageKey}`;
  try {
    const result = await list({
      prefix: pathname,
      limit: 5,
      ...tokenOption(),
    });
    const urls = result.blobs
      .filter((blob) => blob.pathname === pathname)
      .map((blob) => blob.url);
    if (urls.length > 0) {
      await del(urls, { ...tokenOption() });
    }
  } catch {
    // Best-effort delete; index removal still proceeds.
  }
}
