"use client";

import { useState, useTransition } from "react";

import { permissionLabel } from "@/admin/permission-labels";
import type {
  GranularPermission,
  PermissionMatrix,
} from "@/admin/permissions-types";
import type { AdminRole } from "@/admin/roles";
import { roleLabel } from "@/admin/roles";

type Props = {
  initialMatrix: PermissionMatrix;
  roles: AdminRole[];
  permissions: GranularPermission[];
  canEdit: boolean;
  labels: {
    save: string;
    saved: string;
    error: string;
    readonly: string;
  };
};

export function PermissionsMatrixClient({
  initialMatrix,
  roles,
  permissions,
  canEdit,
  labels,
}: Props) {
  const [matrix, setMatrix] = useState(initialMatrix);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function toggle(role: AdminRole, permission: GranularPermission) {
    if (!canEdit || role === "super_admin") return;
    setMatrix((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [permission]: !prev[role][permission],
      },
    }));
  }

  function save() {
    startTransition(async () => {
      setError(null);
      setMessage(null);
      const res = await fetch("/api/admin/permissions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matrix }),
      });
      const data = (await res.json()) as {
        matrix?: PermissionMatrix;
        error?: string;
      };
      if (!res.ok) {
        setError(data.error || labels.error);
        return;
      }
      if (data.matrix) setMatrix(data.matrix);
      setMessage(labels.saved);
    });
  }

  return (
    <div>
      {!canEdit ? <p className="admin-note">{labels.readonly}</p> : null}
      {message ? <p className="admin-toast">{message}</p> : null}
      {error ? <p className="admin-toast admin-toast--error">{error}</p> : null}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Permission</th>
              {roles.map((role) => (
                <th key={role}>{roleLabel(role)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission}>
                <td>{permissionLabel(permission)}</td>
                {roles.map((role) => (
                  <td key={`${role}-${permission}`}>
                    <input
                      type="checkbox"
                      checked={Boolean(matrix[role]?.[permission])}
                      disabled={!canEdit || role === "super_admin" || pending}
                      onChange={() => toggle(role, permission)}
                      aria-label={`${roleLabel(role)} — ${permissionLabel(permission)}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {canEdit ? (
        <div className="admin-page__toolbar">
          <button
            type="button"
            className="admin-btn admin-btn--primary"
            disabled={pending}
            onClick={save}
          >
            {labels.save}
          </button>
        </div>
      ) : null}
    </div>
  );
}
