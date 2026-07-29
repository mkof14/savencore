import { NextResponse } from "next/server";

import { mediaFileResponse } from "@/lib/admin/media-response";
import {
  getMediaItem,
  isExternalMediaLink,
  readMediaFile,
} from "@/lib/admin/media-store";
import { mediaVisibility } from "@/lib/admin/media-types";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * Public media file access for visibility=public library items (D-0183 / D-0201 / D-0224).
 * Serves inline for preview. Use /api/media/download/[id]/ for attachment downloads.
 * Hosted Blob uploads and seeds are streamed same-origin (not relative redirects)
 * so Next.js redirect rules + CSP + download work.
 */
export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const item = await getMediaItem(id);
  if (!item || mediaVisibility(item) !== "public") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (isExternalMediaLink(item) && item.externalUrl) {
    return NextResponse.redirect(item.externalUrl, 302);
  }

  const payload = await readMediaFile(id);
  if (!payload) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return mediaFileResponse(payload, "inline", "public, max-age=300");
}
