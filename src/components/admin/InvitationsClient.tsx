"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import type { AdminRole } from "@/admin/roles";
import { roleLabel } from "@/admin/roles";
import { inviteSignInPath } from "@/lib/admin/invitation-link";

type InvitationRow = {
  id: string;
  email: string;
  role: AdminRole;
  token: string;
  status: string;
  expiresAt: string;
};

type Props = {
  locale: string;
  invitations: InvitationRow[];
  assignableRoles: AdminRole[];
  labels: {
    email: string;
    role: string;
    status: string;
    create: string;
    revoke: string;
    copyLink: string;
    copied: string;
    error: string;
    expires: string;
  };
};

export function InvitationsClient({
  locale,
  invitations,
  assignableRoles,
  labels,
}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<AdminRole>("viewer");
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function create() {
    startTransition(async () => {
      setError(null);
      const res = await fetch("/api/admin/invitations", {
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

  function revoke(id: string) {
    startTransition(async () => {
      setError(null);
      const res = await fetch("/api/admin/invitations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "revoke", id }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || labels.error);
        return;
      }
      router.refresh();
    });
  }

  async function copyLink(token: string) {
    // Sign-in carries invite=; accept page finalizes after auth.
    const path = inviteSignInPath(locale, token);
    const url = `${window.location.origin}${path}`;
    try {
      await navigator.clipboard.writeText(url);
      setToast(labels.copied);
    } catch {
      setToast(url);
    }
  }

  return (
    <div>
      {error ? <p className="admin-toast admin-toast--error">{error}</p> : null}
      {toast ? <p className="admin-toast">{toast}</p> : null}

      <div className="admin-card admin-card--accent">
        <h2 className="admin-card__title">{labels.create}</h2>
        <div className="admin-form-row">
          <label className="admin-field">
            <span>{labels.email}</span>
            <input
              type="email"
              className="admin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={create}
          >
            {labels.create}
          </button>
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>{labels.email}</th>
              <th>{labels.role}</th>
              <th>{labels.status}</th>
              <th>{labels.expires}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {invitations.length === 0 ? (
              <tr>
                <td colSpan={5} className="admin-empty">
                  —
                </td>
              </tr>
            ) : (
              invitations.map((inv) => (
                <tr key={inv.id}>
                  <td>{inv.email}</td>
                  <td>{roleLabel(inv.role)}</td>
                  <td>
                    <span className="admin-badge">{inv.status}</span>
                  </td>
                  <td>{new Date(inv.expiresAt).toLocaleString()}</td>
                  <td>
                    <div className="admin-actions">
                      {inv.status === "pending" ? (
                        <>
                          <button
                            type="button"
                            className="admin-btn"
                            onClick={() => copyLink(inv.token)}
                          >
                            {labels.copyLink}
                          </button>
                          <button
                            type="button"
                            className="admin-btn"
                            disabled={pending}
                            onClick={() => revoke(inv.id)}
                          >
                            {labels.revoke}
                          </button>
                        </>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
