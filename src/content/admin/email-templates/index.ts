import {
  EMAIL_BRAND,
  button,
  paragraph,
  wrapEmailHtml,
} from "@/content/admin/email-templates/brand";
import type { EmailTemplateDefinition } from "@/content/admin/email-templates/types";

const { name, siteUrl, contactEmail } = EMAIL_BRAND;

/**
 * Canonical English email templates for business life cases (D-0176).
 * No fake claims, traction, returns, or operational product language.
 */
export const EMAIL_TEMPLATES: readonly EmailTemplateDefinition[] = [
  {
    id: "welcome-invite",
    category: "welcome",
    subject: `Welcome to ${name}`,
    description: "Welcome a new contact and invite them to explore the public site.",
    preheader: "A clear invitation to explore SAVEN Core.",
    status: "In Development",
    bodyHtml: [
      paragraph(`Thank you for your interest in ${name}.`),
      paragraph(
        "We develop intelligent systems that help people in hospitals, at home, and wherever life happens — across every age and stage of life. AI and robotics are tools; human support is the purpose.",
      ),
      paragraph(
        "You can explore our public site to learn how we think about human data, responsible technology, and physical-world assistance. Everything principal remains in development.",
      ),
      button("Visit SAVEN Core", siteUrl),
      paragraph(`Questions are welcome at ${contactEmail}.`),
    ].join(""),
  },
  {
    id: "invite-to-site",
    category: "invite",
    subject: `An invitation from ${name}`,
    description: "Personal invitation to review specific public pages.",
    preheader: "You are invited to review SAVEN Core.",
    status: "In Development",
    bodyHtml: [
      paragraph("You have been invited to review selected pages on the SAVEN Core website."),
      paragraph(
        "This invitation grants access to publicly published materials only. Restricted systems and private portals are not included.",
      ),
      button("Open the site", siteUrl),
      paragraph(
        "If you did not expect this message, you can ignore it or contact us at the address below.",
      ),
    ].join(""),
  },
  {
    id: "investor-intro",
    category: "investor",
    subject: `${name} — introduction for investors`,
    description:
      "Careful investor introduction — no returns, traction, or valuation claims.",
    preheader: "An introduction to SAVEN Core for investors.",
    status: "Architecture",
    bodyHtml: [
      paragraph(`Thank you for your interest in learning about ${name}.`),
      paragraph(
        "SAVEN Core uses and advances AI alongside robotics, autonomous systems, and engineering technologies meant to operate in real environments under human control. Our focus is human support — from understanding to physical assistance.",
      ),
      paragraph(
        "Principal systems remain in development. We do not present forecasts, returns, customer counts, or commercial availability in this note. For orientation, please begin with the public Investors and Foundation pages.",
      ),
      button("Investors overview", `${siteUrl}/en/investors/`),
      paragraph(`For follow-up, write to ${contactEmail}.`),
    ].join(""),
  },
  {
    id: "partnership-ack",
    category: "partnership",
    subject: `We received your partnership inquiry — ${name}`,
    description: "Acknowledge a partnership inquiry without inventing commitments.",
    preheader: "Thank you — we received your message.",
    status: "In Development",
    bodyHtml: [
      paragraph("Thank you for contacting SAVEN Core about a possible partnership."),
      paragraph(
        "We have received your inquiry. A member of the team will review it and respond when appropriate. This message confirms receipt only — it is not an agreement, evaluation outcome, or commitment.",
      ),
      paragraph(`If you need to add detail, reply to ${contactEmail}.`),
    ].join(""),
  },
  {
    id: "press-media",
    category: "press",
    subject: `Media inquiry — ${name}`,
    description: "Acknowledge press/media contact; no invented spokespeople.",
    preheader: "Thank you for your media inquiry.",
    status: "Architecture",
    bodyHtml: [
      paragraph("Thank you for reaching out to SAVEN Core."),
      paragraph(
        "We have received your media inquiry. We will respond with available public information when we can. Please rely only on materials published on our website unless we provide something further in writing.",
      ),
      button("Public site", siteUrl),
      paragraph(`Contact: ${contactEmail}`),
    ].join(""),
  },
  {
    id: "newsletter-care",
    category: "newsletter",
    subject: `${name} — notes on human care and technology`,
    description: "Newsletter shell for care-centered updates (no fake metrics).",
    preheader: "Occasional notes from SAVEN Core.",
    status: "Architecture",
    bodyHtml: [
      paragraph("Hello,"),
      paragraph(
        "This is a newsletter template for occasional updates about how SAVEN Core thinks about human care, responsible technology, and systems meant for real environments.",
      ),
      paragraph(
        "Replace this paragraph with an approved update. Do not include invented metrics, customer logos, or operational claims.",
      ),
      button("Read more on the site", siteUrl),
      paragraph("You received this because you opted in or were added by an administrator."),
    ].join(""),
  },
  {
    id: "event-invite",
    category: "event",
    subject: `Invitation — ${name} conversation`,
    description: "Event / conversation invite without inventing venues or dates.",
    preheader: "You are invited to a SAVEN Core conversation.",
    status: "Architecture",
    bodyHtml: [
      paragraph("You are invited to a conversation hosted by SAVEN Core."),
      paragraph(
        "Details (date, format, and access) should be filled in by the sender before this template is used. Do not publish unconfirmed venues or attendance figures.",
      ),
      paragraph(`Questions: ${contactEmail}`),
    ].join(""),
  },
  {
    id: "password-security",
    category: "security",
    subject: `${name} — security notice`,
    description: "Password / security notice shell for operator accounts.",
    preheader: "Security notice from SAVEN Core.",
    status: "In Development",
    bodyHtml: [
      paragraph("This is a security notice related to your SAVEN Core account access."),
      paragraph(
        "If you recently signed in or changed credentials and this was expected, no action is required. If you did not perform this action, contact us immediately and stop using the affected credentials.",
      ),
      paragraph(`Contact: ${contactEmail}`),
      paragraph(
        "SAVEN Core does not ask for passwords by email. Never share your password in reply to a message.",
      ),
    ].join(""),
  },
  {
    id: "internal-ops",
    category: "ops",
    subject: `[Internal] ${name} operations note`,
    description: "Internal operations note for staff — not for public send.",
    preheader: "Internal operations note.",
    status: "Architecture",
    bodyHtml: [
      paragraph("Internal operations note — not for external distribution."),
      paragraph(
        "Use this template for brief coordination among authorized operators. Keep facts precise. Do not invent status upgrades or claim systems are operational unless the Decisions Log authorizes that language.",
      ),
      paragraph(`Admin platform: ${siteUrl}/en/admin/`),
    ].join(""),
  },
] as const;

export function getEmailTemplate(
  id: string,
): EmailTemplateDefinition | undefined {
  return EMAIL_TEMPLATES.find((template) => template.id === id);
}

export function renderEmailTemplateHtml(
  template: EmailTemplateDefinition,
): string {
  return wrapEmailHtml({
    preheader: template.preheader,
    title: template.subject,
    bodyHtml: template.bodyHtml,
  });
}

export type { EmailTemplateDefinition, EmailTemplateCategory } from "./types";
