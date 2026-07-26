import { NextResponse } from "next/server";

import {
  ADMIN_PERMISSIONS,
  getPermissionMatrix,
  roleHasPermission,
  savePermissionMatrix,
  type PermissionMatrix,
} from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { ADMIN_ROLES } from "@/admin/roles";

export const runtime = "nodejs";

export async function GET() {
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  const matrix = await getPermissionMatrix();
  return NextResponse.json({
    matrix,
    roles: ADMIN_ROLES,
    permissions: ADMIN_PERMISSIONS,
  });
}

export async function PUT(request: Request) {
  const gate = await requireAdminRole("super_admin");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }

  if (!(await roleHasPermission(gate.role, "manage_roles"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const matrix = (body as { matrix?: PermissionMatrix }).matrix;
  if (!matrix) {
    return NextResponse.json({ error: "matrix required." }, { status: 400 });
  }

  const result = await savePermissionMatrix(matrix);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 503 });
  }
  return NextResponse.json({ matrix: result.matrix });
}
