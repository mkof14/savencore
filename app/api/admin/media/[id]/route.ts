import { NextResponse } from "next/server";

import { roleHasPermission } from "@/admin/permissions";
import { canPerform } from "@/admin/roles";
import { requireAdminRole } from "@/admin/require-role";
import { mediaFileResponse } from "@/lib/admin/media-response";
import {
  deleteMediaItem,
  getMediaItem,
  isExternalMediaLink,
  readMediaFile,
} from "@/lib/admin/media-store";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * Admin inline preview for hosted files (D-0183 / D-0201 / D-0224).
 * External links redirect (absolute URL); seeds + Blob uploads stream same-origin
 * so relative publicPath redirects never 500 under Next.js URL rules.
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

  if (isExternalMediaLink(item) && item.externalUrl) {
    return NextResponse.redirect(item.externalUrl, 302);
  }

  const payload = await readMediaFile(id);
  if (!payload) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return mediaFileResponse(payload, "inline", "private, no-store");
}

export async function DELETE(_request: Request, context: RouteContext) {
  const gate = await requireAdminRole("editor");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  // editor+ rank and granular manage_media (D-0183 / D-0186 — all rows including seed soft-hide).
  if (
    !canPerform(gate.role, "media_upload") ||
    !(await roleHasPermission(gate.role, "manage_media"))
  ) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const { id } = await context.params;
  const result = await deleteMediaItem(id);
  if (!result.ok) {
    const status =
      result.code === "not_found"
        ? 404
        : result.code === "forbidden"
          ? 403
          : 503;
    return NextResponse.json(
      { error: result.error, code: result.code },
      { status },
    );
  }

  return NextResponse.json({ ok: true });
}
