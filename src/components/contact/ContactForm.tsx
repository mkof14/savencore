"use client";

import { useId, useState, type FormEvent } from "react";

import type { UiMessages } from "@/i18n/ui";

type ContactFormProps = {
  labels: UiMessages["contact"];
  emailAddress: string;
  formNote: string;
};

type FormStatus = "idle" | "ready" | "error";

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
}: ContactFormProps) {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();
  const statusId = useId();

  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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

    const href = buildMailto(emailAddress, name, email, subject, message);
    setStatus("ready");
    window.location.href = href;
  }

  return (
    <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
      <p className="contact-page__form-note">{formNote}</p>

      <div className="contact-page__fields">
        <div className="contact-page__field">
          <label className="contact-page__label" htmlFor={nameId}>
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
          <label className="contact-page__label" htmlFor={emailId}>
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
          <label className="contact-page__label" htmlFor={subjectId}>
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
          <label className="contact-page__label" htmlFor={messageId}>
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
        <button type="submit" className="contact-page__submit">
          {labels.submit}
        </button>
        <p
          id={statusId}
          className="contact-page__status"
          role="status"
          aria-live="polite"
        >
          {status === "ready" ? labels.success : null}
          {status === "error" ? labels.error : null}
        </p>
      </div>
    </form>
  );
}
