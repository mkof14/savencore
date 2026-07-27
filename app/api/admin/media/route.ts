import { NextResponse } from "next/server";

import { roleHasPermission } from "@/admin/permissions";
import { canPerform } from "@/admin/roles";
import { requireAdminRole } from "@/admin/require-role";
import {
  listMediaItems,
  mediaStoreIsWritableHost,
  saveMediaLink,
  saveUploadedMedia,
} from "@/lib/admin/media-store";
import type { MediaCategory, MediaVisibility } from "@/lib/admin/media-types";

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
  return NextResponse.json({
    items,
    writable: mediaStoreIsWritableHost(),
  });
}

export async function POST(request: Request) {
  const gate = await requireAdminRole("editor");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  if (
    !canPerform(gate.role, "media_upload") ||
    !(await roleHasPermission(gate.role, "manage_media"))
  ) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as {
      kind?: string;
      name?: string;
      url?: string;
      category?: MediaCategory;
      description?: string;
      visibility?: MediaVisibility;
    };

    if (body.kind !== "link") {
      return NextResponse.json(
        { error: "Unsupported JSON payload. Use kind: \"link\"." },
        { status: 400 },
      );
    }

    const result = await saveMediaLink({
      name: body.name ?? "",
      url: body.url ?? "",
      ...(body.category ? { category: body.category } : {}),
      ...(body.description ? { description: body.description } : {}),
      ...(body.visibility ? { visibility: body.visibility } : {}),
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error, code: result.code },
        { status: result.code === "storage_unavailable" ? 503 : 400 },
      );
    }

    return NextResponse.json({ item: result.item }, { status: 201 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      {
        error:
          "Could not read the upload body. On Vercel, requests over ~4.5 MB usually fail — use a YouTube/Vimeo URL embed for large videos.",
        code: "too_large",
      },
      { status: 413 },
    );
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Missing file.", code: "invalid" },
      { status: 400 },
    );
  }

  const visibilityRaw = form.get("visibility");
  const visibility =
    visibilityRaw === "internal" || visibilityRaw === "public"
      ? visibilityRaw
      : undefined;

  const nameRaw = form.get("name");
  const fileExt = file.name.includes(".")
    ? file.name.slice(file.name.lastIndexOf("."))
    : "";
  let displayName = file.name;
  if (typeof nameRaw === "string" && nameRaw.trim()) {
    const trimmed = nameRaw.trim().slice(0, 180);
    displayName =
      fileExt && !trimmed.toLowerCase().endsWith(fileExt.toLowerCase())
        ? `${trimmed}${fileExt}`
        : trimmed;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await saveUploadedMedia({
    name: displayName,
    mimeType: file.type || "application/octet-stream",
    buffer,
    ...(visibility ? { visibility } : {}),
  });

  if (!result.ok) {
    const status =
      result.code === "storage_unavailable"
        ? 503
        : result.code === "too_large"
          ? 413
          : 400;
    return NextResponse.json(
      { error: result.error, code: result.code },
      { status },
    );
  }

  return NextResponse.json({ item: result.item }, { status: 201 });
}
