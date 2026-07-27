import { NextResponse } from "next/server";

import { canPerform } from "@/admin/roles";
import { requireAdminRole } from "@/admin/require-role";
import { deleteMediaItem, readMediaFile } from "@/lib/admin/media-store";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  const { id } = await context.params;
  const payload = await readMediaFile(id);
  if (!payload) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(payload.buffer), {
    status: 200,
    headers: {
      "Content-Type": payload.item.mimeType,
      "Content-Length": String(payload.buffer.length),
      "Content-Disposition": `attachment; filename="${sanitizeFilename(payload.downloadName)}"`,
      "Cache-Control": "private, no-store",
    },
  });
}

export async function DELETE(_request: Request, context: RouteContext) {
  const gate = await requireAdminRole("editor");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  // Mutations require media_upload rank; manage_media is the granular label (D-0183).
  if (!canPerform(gate.role, "media_upload")) {
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

function sanitizeFilename(name: string): string {
  return name.replace(/[^\w.\- ()[\]]+/g, "_").slice(0, 160) || "download.bin";
}
