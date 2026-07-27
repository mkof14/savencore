"use client";

import { useId, useState, type FormEvent } from "react";

import type { UiMessages } from "@/i18n/ui";

type ContactFormProps = {
  labels: UiMessages["contact"];
  emailAddress: string;
  formNote: string;
  smtpConfigured: boolean;
};

type FormStatus = "idle" | "sending" | "success" | "mailto" | "error";

function buildMailto(
  to: string,
  name: string,
  fromEmail: string,
  subject: string,
  message: string,
): string {
  const lines = [
    `Name: ${name}`,
    `Email: ${fromEmail}`,
    "",
    message,
  ];
  const params = new URLSearchParams();
  const trimmedSubject = subject.trim();
  params.set(
    "subject",
    trimmedSubject || `SAVEN Core contact from ${name}`,
  );
  params.set("body", lines.join("\n"));
  return `mailto:${to}?${params.toString()}`;
}

export function ContactForm({
  labels,
  emailAddress,
  formNote,
  smtpConfigured,
}: ContactFormProps) {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();
  const statusId = useId();

  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const mailtoHref = buildMailto(
      emailAddress,
      name,
      email,
      subject,
      message,
    );

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
        body: JSON.stringify({ name, email, subject, message }),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean }
        | null;
      if (response.ok && result?.ok) {
        setStatus("success");
        return;
      }
    } catch {
      /* fall through to mailto */
    }

    setStatus("mailto");
    window.location.href = mailtoHref;
  }

  return (
    <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
      <p className="contact-page__form-note">
        {smtpConfigured ? formNote : labels.fallbackNote}
      </p>

      <div className="contact-page__fields">
        <div className="contact-page__field">
          <label className="contact-page__field-label" htmlFor={nameId}>
            {labels.nameLabel}
          </label>
          <input
            id={nameId}
            className="contact-page__input"
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
          />
        </div>

        <div className="contact-page__field">
          <label className="contact-page__field-label" htmlFor={emailId}>
            {labels.emailLabel}
          </label>
          <input
            id={emailId}
            className="contact-page__input"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={200}
          />
        </div>

        <div className="contact-page__field contact-page__field--full">
          <label className="contact-page__field-label" htmlFor={subjectId}>
            {labels.subjectLabel}
          </label>
          <input
            id={subjectId}
            className="contact-page__input"
            type="text"
            name="subject"
            autoComplete="off"
            maxLength={160}
          />
        </div>

        <div className="contact-page__field contact-page__field--full">
          <label className="contact-page__field-label" htmlFor={messageId}>
            {labels.messageLabel}
          </label>
          <textarea
            id={messageId}
            className="contact-page__textarea"
            name="message"
            required
            rows={7}
            maxLength={4000}
          />
        </div>
      </div>

      <div className="contact-page__actions">
        <button
          type="submit"
          className="contact-page__submit"
          disabled={status === "sending"}
        >
          {smtpConfigured ? labels.submit : labels.submitMailto}
        </button>
        <p
          id={statusId}
          className="contact-page__status"
          role="status"
          aria-live="polite"
        >
          {status === "success" ? labels.success : null}
          {status === "mailto" ? labels.successMailto : null}
          {status === "error" ? labels.error : null}
        </p>
      </div>
    </form>
  );
}
