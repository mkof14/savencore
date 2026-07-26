"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import type { AdminRole } from "@/admin/roles";
import { roleLabel } from "@/admin/roles";

type OperatorRow = {
  email: string;
  role: AdminRole;
  source: string;
};

type Props = {
  operators: OperatorRow[];
  assignableRoles: AdminRole[];
  labels: {
    email: string;
    role: string;
    source: string;
    assign: string;
    remove: string;
    error: string;
  };
};

export function UsersRolesClient({
  operators,
  assignableRoles,
  labels,
}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<AdminRole>("viewer");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function assign() {
    startTransition(async () => {
      setError(null);
      const res = await fetch("/api/admin/operators", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || labels.error);
        return;
      }
      setEmail("");
      router.refresh();
    });
  }

  function remove(target: string) {
    startTransition(async () => {
      setError(null);
      const res = await fetch(
        `/api/admin/operators?email=${encodeURIComponent(target)}`,
        { method: "DELETE" },
      );
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || labels.error);
        return;
      }
      router.refresh();
    });
  }

  return (
    <div>
      {error ? <p className="admin-toast admin-toast--error">{error}</p> : null}

      <div className="admin-card admin-card--accent">
        <h2 className="admin-card__title">{labels.assign}</h2>
        <div className="admin-form-row">
          <label className="admin-field">
            <span>{labels.email}</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="admin-input"
              placeholder="operator@example.com"
            />
          </label>
          <label className="admin-field">
            <span>{labels.role}</span>
            <select
              className="admin-input"
              value={role}
              onChange={(e) => setRole(e.target.value as AdminRole)}
            >
              {assignableRoles.map((r) => (
                <option key={r} value={r}>
                  {roleLabel(r)}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="admin-btn admin-btn--primary"
            disabled={pending || !email}
            onClick={assign}
          >
            {labels.assign}
          </button>
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>{labels.email}</th>
              <th>{labels.role}</th>
              <th>{labels.source}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {operators.map((op) => (
              <tr key={`${op.email}-${op.source}`}>
                <td>{op.email}</td>
                <td>
                  <span className="admin-badge">{roleLabel(op.role)}</span>
                </td>
                <td>{op.source}</td>
                <td>
                  {op.source === "assignment" || op.source === "invitation" ? (
                    <button
                      type="button"
                      className="admin-btn"
                      disabled={pending}
                      onClick={() => remove(op.email)}
                    >
                      {labels.remove}
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
