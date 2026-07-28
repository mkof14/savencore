import { NextResponse } from "next/server";

import type { MediaFilePayload } from "@/lib/admin/media-store";

/** ASCII-safe filename for Content-Disposition fallback. */
export function sanitizeFilename(name: string): string {
  return name.replace(/[^\w.\- ()[\]]+/g, "_").slice(0, 160) || "download.bin";
}

/**
 * Build Content-Disposition with ASCII filename + RFC 5987 UTF-8 filename*.
 */
export function contentDispositionHeader(
  disposition: "inline" | "attachment",
  filename: string,
): string {
  const ascii = sanitizeFilename(filename);
  const encoded = encodeURIComponent(filename);
  return `${disposition}; filename="${ascii}"; filename*=UTF-8''${encoded}`;
}

export function mediaFileResponse(
  payload: MediaFilePayload,
  disposition: "inline" | "attachment",
  cacheControl: string,
): NextResponse {
  return new NextResponse(new Uint8Array(payload.buffer), {
    status: 200,
    headers: {
      "Content-Type": payload.item.mimeType || "application/octet-stream",
      "Content-Length": String(payload.buffer.length),
      "Content-Disposition": contentDispositionHeader(
        disposition,
        payload.downloadName,
      ),
      "Cache-Control": cacheControl,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
