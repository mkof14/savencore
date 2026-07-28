import { NextResponse } from "next/server";

import { requireAdminRole } from "@/admin/require-role";
import { mediaFileResponse } from "@/lib/admin/media-response";
import {
  getMediaItem,
  isExternalMediaLink,
  readMediaFile,
} from "@/lib/admin/media-store";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * Admin same-origin forced download (D-0201).
 * Auth required; Content-Disposition: attachment for mobile + desktop save.
 */
export async function GET(_request: Request, context: RouteContext) {
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  const { id } = await context.params;
  const item = await getMediaItem(id);
  if (!item) {
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
