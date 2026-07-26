"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

type NotificationRow = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  createdBy: string;
  read: boolean;
  unread: boolean;
  system?: boolean;
};

type Props = {
  notifications: NotificationRow[];
  canCreate: boolean;
  labels: {
    title: string;
    body: string;
    create: string;
    markRead: string;
    unread: string;
    empty: string;
    error: string;
  };
};

export function NotificationsClient({
  notifications,
  canCreate,
  labels,
}: Props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function create() {
    startTransition(async () => {
      setError(null);
      const res = await fetch("/api/admin/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || labels.error);
        return;
      }
      setTitle("");
      setBody("");
      router.refresh();
    });
  }

  function markRead(id: string) {
    startTransition(async () => {
      setError(null);
      const res = await fetch("/api/admin/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "read", id }),
      });
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

      {canCreate ? (
        <div className="admin-card admin-card--accent">
          <h2 className="admin-card__title">{labels.create}</h2>
          <div className="admin-form-stack">
            <label className="admin-field">
              <span>{labels.title}</span>
              <input
                className="admin-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="admin-field">
              <span>{labels.body}</span>
              <textarea
                className="admin-input admin-textarea"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </label>
            <button
              type="button"
              className="admin-btn admin-btn--primary"
              disabled={pending || !title || !body}
              onClick={create}
            >
              {labels.create}
            </button>
          </div>
        </div>
      ) : null}

      <div className="admin-stack">
        {notifications.length === 0 ? (
          <p className="admin-empty-state">{labels.empty}</p>
        ) : (
          notifications.map((n) => (
            <article
              key={n.id}
              className={
                n.unread
                  ? "admin-card admin-card--unread"
                  : "admin-card"
              }
            >
              <div className="admin-card__header-row">
                <h2 className="admin-card__title">{n.title}</h2>
                {n.unread ? (
                  <span className="admin-badge admin-badge--accent">
                    {labels.unread}
                  </span>
                ) : null}
              </div>
              <p className="admin-card__text">{n.body}</p>
              <p className="admin-card__meta">
                {new Date(n.createdAt).toLocaleString()} · {n.createdBy}
              </p>
              {n.unread ? (
                <button
                  type="button"
                  className="admin-btn"
                  disabled={pending}
                  onClick={() => markRead(n.id)}
                >
                  {labels.markRead}
                </button>
              ) : null}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
