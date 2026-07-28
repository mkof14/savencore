"use client";

import { useId, useState, type FormEvent } from "react";

import type { UiMessages } from "@/i18n/ui";

type FooterContactFormProps = {
  labels: UiMessages["footerContact"];
  contactLabels: UiMessages["contact"];
  emailAddress: string;
  smtpConfigured: boolean;
};

type FormStatus = "idle" | "sending" | "success" | "mailto" | "error";

function buildMailto(
  to: string,
  name: string,
  fromEmail: string,
  message: string,
): string {
  const lines = [`Name: ${name}`, `Email: ${fromEmail}`, "", message];
  const params = new URLSearchParams();
  params.set("subject", `SAVEN Core contact from ${name}`);
  params.set("body", lines.join("\n"));
  return `mailto:${to}?${params.toString()}`;
}

/**
 * Compact footer Get in touch — same SMTP↔mailto pattern as Contact (D-0211).
 */
export function FooterContactForm({
  labels,
  contactLabels,
  emailAddress,
  smtpConfigured,
}: FooterContactFormProps) {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const statusId = useId();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const mailtoHref = buildMailto(emailAddress, name, email, message);

    if (!smtpConfigured) {
      setStatus("mailto");
      window.location.href = mailtoHref;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject: "", message }),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean }
        | null;
      if (response.ok && result?.ok) {
        setStatus("success");
        form.reset();
        return;
      }
    } catch {
      /* fall through to mailto */
    }

    setStatus("mailto");
    window.location.href = mailtoHref;
  }

  return (
    <form
      className="site-footer__contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="footer-contact-heading"
    >
      <div className="site-footer__contact-fields">
        <div className="site-footer__contact-field">
          <label className="site-footer__contact-label" htmlFor={nameId}>
            {contactLabels.nameLabel}
          </label>
          <input
            id={nameId}
            className="site-footer__contact-input"
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
          />
        </div>
        <div className="site-footer__contact-field">
          <label className="site-footer__contact-label" htmlFor={emailId}>
            {contactLabels.emailLabel}
          </label>
          <input
            id={emailId}
            className="site-footer__contact-input"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={200}
          />
        </div>
        <div className="site-footer__contact-field site-footer__contact-field--full">
          <label className="site-footer__contact-label" htmlFor={messageId}>
            {contactLabels.messageLabel}
          </label>
          <textarea
            id={messageId}
            className="site-footer__contact-textarea"
            name="message"
            required
            rows={3}
            maxLength={4000}
          />
        </div>
      </div>

      <div className="site-footer__contact-actions">
        <button
          type="submit"
          className="site-footer__contact-submit"
          disabled={status === "sending"}
        >
          {smtpConfigured ? labels.submit : labels.submitMailto}
        </button>
        <p
          id={statusId}
          className="site-footer__contact-status"
          role="status"
          aria-live="polite"
        >
          {status === "success" ? contactLabels.success : null}
          {status === "mailto" ? contactLabels.successMailto : null}
          {status === "error" ? contactLabels.error : null}
        </p>
      </div>
    </form>
  );
}
