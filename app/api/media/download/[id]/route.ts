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
 * Public same-origin forced download (D-0201).
 * Streams with Content-Disposition: attachment so mobile Safari / desktop
 * save the file without relying on the HTML download attribute.
 */
export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const item = await getMediaItem(id);
  if (!item || mediaVisibility(item) !== "public") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (isExternalMediaLink(item)) {
    return NextResponse.json(
      { error: "External links cannot be force-downloaded." },
      { status: 400 },
    );
  }

  const payload = await readMediaFile(id);
  if (!payload) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return mediaFileResponse(payload, "attachment", "private, no-store");
}
