import { NextResponse } from "next/server";

import { canPerform } from "@/admin/roles";
import { requireAdminRole } from "@/admin/require-role";
import { listMediaItems, saveUploadedMedia } from "@/lib/admin/media-store";

export const runtime = "nodejs";

export async function GET() {
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  const items = await listMediaItems();
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const gate = await requireAdminRole("editor");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  if (!canPerform(gate.role, "media_upload")) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await saveUploadedMedia({
    name: file.name,
    mimeType: file.type || "application/octet-stream",
    buffer,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, code: result.code },
      { status: result.code === "storage_unavailable" ? 503 : 400 },
    );
  }

  return NextResponse.json({ item: result.item }, { status: 201 });
}
