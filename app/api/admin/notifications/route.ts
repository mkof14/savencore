import { NextResponse } from "next/server";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import {
  createNotification,
  listNotifications,
  markNotificationRead,
} from "@/lib/admin/notifications-store";

export const runtime = "nodejs";

export async function GET() {
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  const notifications = await listNotifications(gate.email);
  return NextResponse.json({ notifications });
}

export async function POST(request: Request) {
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const action = (body as { action?: string }).action ?? "create";

  if (action === "read") {
    const id = String((body as { id?: string }).id ?? "");
    const result = await markNotificationRead({ id, email: gate.email });
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  }

  if (!(await roleHasPermission(gate.role, "manage_notifications"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const title = String((body as { title?: string }).title ?? "");
  const bodyText = String((body as { body?: string }).body ?? "");
  const result = await createNotification({
    title,
    body: bodyText,
    createdBy: gate.email,
  });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json(
    { notification: result.notification },
    { status: 201 },
  );
}
