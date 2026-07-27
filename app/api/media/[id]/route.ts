import { NextResponse } from "next/server";

import {
  getMediaItem,
  readMediaFile,
} from "@/lib/admin/media-store";
import { mediaVisibility } from "@/lib/admin/media-types";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * Public media file access for visibility=public library items (D-0183).
 * Seeds with publicPath should be linked directly; this serves uploads.
 */
export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const item = await getMediaItem(id);
  if (!item || mediaVisibility(item) !== "public") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (item.externalUrl) {
    return NextResponse.redirect(item.externalUrl, 302);
  }

  if (item.source === "seed" && item.publicPath) {
    return NextResponse.redirect(item.publicPath, 302);
  }

  const payload = await readMediaFile(id);
  if (!payload) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(payload.buffer), {
    status: 200,
    headers: {
      "Content-Type": payload.item.mimeType,
      "Content-Length": String(payload.buffer.length),
      "Content-Disposition": `inline; filename="${sanitizeFilename(payload.downloadName)}"`,
      "Cache-Control": "public, max-age=300",
    },
  });
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^\w.\- ()[\]]+/g, "_").slice(0, 160) || "download.bin";
}
