"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

type MailingRow = {
  id: string;
  subject: string;
  recipients: string[];
  status: string;
};

type TemplateOption = { id: string; subject: string };

type Props = {
  mailings: MailingRow[];
  templates: TemplateOption[];
  smtpConfigured: boolean;
  labels: {
    template: string;
    recipients: string;
    recipientsHint: string;
    create: string;
    send: string;
    preview: string;
    status: string;
    smtpOn: string;
    smtpOff: string;
    empty: string;
    error: string;
    close: string;
  };
};

export function MailingsClient({
  mailings,
  templates,
  smtpConfigured,
  labels,
}: Props) {
  const router = useRouter();
  const [templateId, setTemplateId] = useState(templates[0]?.id ?? "");
  const [recipients, setRecipients] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function create() {
    startTransition(async () => {
      setError(null);
      setMessage(null);
      const res = await fetch("/api/admin/mailings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId, recipients }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || labels.error);
        return;
      }
      setRecipients("");
      router.refresh();
    });
  }

  function send(id: string) {
    startTransition(async () => {
      setError(null);
      setMessage(null);
      const res = await fetch("/api/admin/mailings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "send", id }),
      });
      const data = (await res.json()) as {
        error?: string;
        message?: string;
      };
      if (!res.ok) {
        setError(data.error || labels.error);
        return;
      }
      setMessage(data.message ?? "OK");
      router.refresh();
    });
  }

  function preview(id: string) {
    startTransition(async () => {
      setError(null);
      const res = await fetch(`/api/admin/mailings?preview=${encodeURIComponent(id)}`);
      const data = (await res.json()) as { error?: string; html?: string };
      if (!res.ok || !data.html) {
        setError(data.error || labels.error);
        return;
      }
      setPreviewHtml(data.html);
    });
  }

  return (
    <div>
      <p className="admin-note">
        {smtpConfigured ? labels.smtpOn : labels.smtpOff}
      </p>
      {error ? <p className="admin-toast admin-toast--error">{error}</p> : null}
      {message ? <p className="admin-toast">{message}</p> : null}

      <div className="admin-card admin-card--accent">
        <h2 className="admin-card__title">{labels.create}</h2>
        <div className="admin-form-stack">
          <label className="admin-field">
            <span>{labels.template}</span>
            <select
              className="admin-input"
              value={templateId}
              onChange={(e) => setTemplateId(e.target.value)}
            >
              {templates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.subject}
                </option>
              ))}
            </select>
          </label>
          <label className="admin-field">
            <span>{labels.recipients}</span>
            <textarea
              className="admin-input admin-textarea"
              rows={3}
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
              placeholder="a@example.com, b@example.com"
            />
            <span className="admin-field__hint">{labels.recipientsHint}</span>
          </label>
          <button
            type="button"
            className="admin-btn admin-btn--primary"
            disabled={pending || !templateId || !recipients.trim()}
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
              <th>Subject</th>
              <th>{labels.recipients}</th>
              <th>{labels.status}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {mailings.length === 0 ? (
              <tr>
                <td colSpan={4} className="admin-empty">
                  {labels.empty}
                </td>
              </tr>
            ) : (
              mailings.map((m) => (
                <tr key={m.id}>
                  <td>{m.subject}</td>
                  <td>{m.recipients.join(", ")}</td>
                  <td>
                    <span className="admin-badge">{m.status}</span>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button
                        type="button"
                        className="admin-btn"
                        disabled={pending}
                        onClick={() => preview(m.id)}
                      >
                        {labels.preview}
                      </button>
                      {m.status === "draft" || m.status === "scheduled" ? (
                        <button
                          type="button"
                          className="admin-btn admin-btn--primary"
                          disabled={pending}
                          onClick={() => send(m.id)}
                        >
                          {labels.send}
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {previewHtml ? (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal__panel">
            <div className="admin-modal__header">
              <h2 className="admin-modal__title">{labels.preview}</h2>
              <button
                type="button"
                className="admin-btn"
                onClick={() => setPreviewHtml(null)}
              >
                {labels.close}
              </button>
            </div>
            <div className="admin-preview">
              <iframe title={labels.preview} srcDoc={previewHtml} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
