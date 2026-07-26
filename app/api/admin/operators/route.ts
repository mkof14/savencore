import { NextResponse } from "next/server";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { isAdminRole, type AdminRole } from "@/admin/roles";
import {
  assignOperatorRole,
  listOperators,
  removeOperatorAssignment,
} from "@/lib/admin/operators-store";

export const runtime = "nodejs";

export async function GET() {
  const gate = await requireAdminRole("admin");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }
  if (!(await roleHasPermission(gate.role, "manage_users"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const operators = await listOperators();
  return NextResponse.json({ operators });
}

export async function POST(request: Request) {
  const gate = await requireAdminRole("admin");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }
  if (!(await roleHasPermission(gate.role, "manage_users"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const email = String((body as { email?: string }).email ?? "");
  const role = (body as { role?: string }).role;
  if (!isAdminRole(role) || role === "super_admin") {
    return NextResponse.json(
      { error: "Assignable roles: admin, editor, marketer, viewer." },
      { status: 400 },
    );
  }

  const result = await assignOperatorRole({
    email,
    role: role as AdminRole,
    source: "assignment",
  });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json({ operator: result.operator }, { status: 201 });
}

export async function DELETE(request: Request) {
  const gate = await requireAdminRole("admin");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }
  if (!(await roleHasPermission(gate.role, "manage_users"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email") ?? "";
  const result = await removeOperatorAssignment(email);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
