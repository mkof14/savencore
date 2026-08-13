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

const INQUIRY_KEYS = [
  "inquiryGeneral",
  "inquiryRobotics",
  "inquiryTechnology",
  "inquiryResearch",
  "inquiryRehab",
  "inquiryCare",
  "inquiryInvestor",
  "inquiryMedia",
] as const;

function buildMailto(
  to: string,
  name: string,
  fromEmail: string,
  organization: string,
  role: string,
  website: string,
  inquiryType: string,
  subject: string,
  message: string,
): string {
  const lines = [
    `Name: ${name}`,
    `Email: ${fromEmail}`,
    organization ? `Organization: ${organization}` : "",
    role ? `Role: ${role}` : "",
    website ? `Website: ${website}` : "",
    inquiryType ? `Inquiry type: ${inquiryType}` : "",
    "",
    message,
  ].filter((line, index, all) => line !== "" || all[index - 1] !== "");
  const params = new URLSearchParams();
  const trimmedSubject = subject.trim();
  const inquiryPrefix = inquiryType ? `[${inquiryType}] ` : "";
  params.set(
    "subject",
    trimmedSubject || `${inquiryPrefix}SAVEN Core contact from ${name}`,
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
  const organizationId = useId();
  const roleId = useId();
  const emailId = useId();
  const websiteId = useId();
  const inquiryId = useId();
  const subjectId = useId();
  const messageId = useId();
  const statusId = useId();

  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const inquiryType = String(data.get("inquiryType") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message || !inquiryType) {
      setStatus("error");
      return;
    }

    const mailtoHref = buildMailto(
      emailAddress,
      name,
      email,
      organization,
      role,
      website,
      inquiryType,
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
        body: JSON.stringify({
          name,
          organization,
          role,
          email,
          website,
          inquiryType,
          subject,
          message,
        }),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; fallback?: string }
        | null;
      if (response.ok && result?.ok && result.fallback !== "mailto") {
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
      <p className="contact-page__form-note">{labels.medicalNote}</p>

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
          <label className="contact-page__field-label" htmlFor={organizationId}>
            {labels.organizationLabel}
          </label>
          <input
            id={organizationId}
            className="contact-page__input"
            type="text"
            name="organization"
            autoComplete="organization"
            maxLength={160}
          />
        </div>

        <div className="contact-page__field">
          <label className="contact-page__field-label" htmlFor={roleId}>
            {labels.roleLabel}
          </label>
          <input
            id={roleId}
            className="contact-page__input"
            type="text"
            name="role"
            autoComplete="organization-title"
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

        <div className="contact-page__field">
          <label className="contact-page__field-label" htmlFor={websiteId}>
            {labels.websiteLabel}
          </label>
          <input
            id={websiteId}
            className="contact-page__input"
            type="url"
            name="website"
            autoComplete="url"
            inputMode="url"
            maxLength={240}
          />
        </div>

        <div className="contact-page__field">
          <label className="contact-page__field-label" htmlFor={inquiryId}>
            {labels.inquiryTypeLabel}
          </label>
          <select
            id={inquiryId}
            className="contact-page__input"
            name="inquiryType"
            required
            defaultValue=""
          >
            <option value="" disabled>
              {labels.inquiryTypeLabel}
            </option>
            {INQUIRY_KEYS.map((key) => (
              <option key={key} value={labels[key]}>
                {labels[key]}
              </option>
            ))}
          </select>
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
