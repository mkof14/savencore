import { NextResponse } from "next/server";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { isAdminRole, type AdminRole } from "@/admin/roles";
import {
  createInvitation,
  listInvitations,
  revokeInvitation,
} from "@/lib/admin/invitations-store";

export const runtime = "nodejs";

export async function GET() {
  const gate = await requireAdminRole("admin");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }
  if (!(await roleHasPermission(gate.role, "manage_invitations"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const invitations = await listInvitations();
  return NextResponse.json({ invitations });
}

export async function POST(request: Request) {
  const gate = await requireAdminRole("admin");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }
  if (!(await roleHasPermission(gate.role, "manage_invitations"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const action = (body as { action?: string }).action ?? "create";

  if (action === "revoke") {
    const id = String((body as { id?: string }).id ?? "");
    const result = await revokeInvitation(id);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  }

  const email = String((body as { email?: string }).email ?? "");
  const role = (body as { role?: string }).role;
  if (!isAdminRole(role) || role === "super_admin") {
    return NextResponse.json(
      { error: "Invite role must be admin, editor, marketer, or viewer." },
      { status: 400 },
    );
  }

  const result = await createInvitation({
    email,
    role: role as AdminRole,
    createdBy: gate.email,
  });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json({ invitation: result.invitation }, { status: 201 });
}
