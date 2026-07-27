import {
  EMAIL_BRAND,
  button,
  headline,
  paragraph,
  wrapEmailHtml,
} from "@/content/admin/email-templates/brand";
import type { EmailTemplateDefinition } from "@/content/admin/email-templates/types";

const { name, siteUrl, contactEmail } = EMAIL_BRAND;

/**
 * Canonical English email templates for business life cases (D-0176 / D-0180).
 * Shared chrome (header / features / quote / contact / footer) lives in brand.ts.
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
      headline(`Thank you for your interest in ${name}.`),
      paragraph(
        "We develop intelligent systems that help people in hospitals, at home, and wherever life happens — across every age and stage of life. AI and robotics are tools; human support is the purpose.",
      ),
      paragraph(
        "You can explore our public site to learn how we think about human data, responsible technology, and physical-world assistance. Everything principal remains in development.",
      ),
      button("Visit SAVEN Core", siteUrl),
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
      headline("You are invited to review SAVEN Core."),
      paragraph(
        "You have been invited to review selected pages on the SAVEN Core website.",
      ),
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
      headline(`Thank you for your interest in learning about ${name}.`),
      paragraph(
        "SAVEN Core uses and advances AI alongside robotics, autonomous systems, and engineering technologies meant to operate in real environments under human control. Our focus is human support — from understanding to physical assistance.",
      ),
      paragraph(
        "Principal systems remain in development. We do not present forecasts, returns, customer counts, or commercial availability in this note. For orientation, please begin with the public Investors and Foundation pages.",
      ),
      button("Investors overview", `${siteUrl}/en/investors/`),
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
      headline("Thank you for contacting SAVEN Core."),
      paragraph(
        "Thank you for contacting SAVEN Core about a possible partnership.",
      ),
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
      headline("Thank you for reaching out to SAVEN Core."),
      paragraph(
        "We have received your media inquiry. We will respond with available public information when we can. Please rely only on materials published on our website unless we provide something further in writing.",
      ),
      button("Public site", siteUrl),
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
      headline("Notes from SAVEN Core"),
      paragraph("Hello,"),
      paragraph(
        "This is a newsletter template for occasional updates about how SAVEN Core thinks about human care, responsible technology, and systems meant for real environments.",
      ),
      paragraph(
        "Replace this paragraph with an approved update. Do not include invented metrics, customer logos, or operational claims.",
      ),
      button("Read more on the site", siteUrl),
      paragraph(
        "You received this because you opted in or were added by an administrator.",
      ),
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
      headline("You are invited to a SAVEN Core conversation."),
      paragraph(
        "Details (date, format, and access) should be filled in by the sender before this template is used. Do not publish unconfirmed venues or attendance figures.",
      ),
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
      headline("Security notice"),
      paragraph(
        "This is a security notice related to your SAVEN Core account access.",
      ),
      paragraph(
        "If you recently signed in or changed credentials and this was expected, no action is required. If you did not perform this action, contact us immediately and stop using the affected credentials.",
      ),
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
      headline("Internal operations note"),
      paragraph("Internal operations note — not for external distribution."),
      paragraph(
        "Use this template for brief coordination among authorized operators. Keep facts precise. Do not invent status upgrades or claim systems are operational unless the Decisions Log authorizes that language.",
      ),
      button("Open admin", `${siteUrl}/en/admin/`),
    ].join(""),
  },
  {
    id: "event-followup",
    category: "event",
    subject: `Thank you for joining a ${name} conversation`,
    description:
      "Webinar / event follow-up — no invented attendance figures or venues.",
    preheader: "Thank you for your time with SAVEN Core.",
    status: "In Development",
    bodyHtml: [
      headline("Thank you for joining the conversation."),
      paragraph(
        "Thank you for attending a SAVEN Core conversation or webinar. We appreciate your time and interest.",
      ),
      paragraph(
        "If useful next steps were discussed, fill them in before sending. Public materials remain on the website; principal systems remain in development.",
      ),
      button("Explore SAVEN Core", siteUrl),
      paragraph(
        `Questions are welcome at ${contactEmail}. This note is a courtesy follow-up, not an offer or commitment.`,
      ),
    ].join(""),
  },
  {
    id: "research-update",
    category: "research",
    subject: `${name} — research and architecture update`,
    description:
      "Research update shell — Research / Architecture / In Development only.",
    preheader: "A careful update on SAVEN Core research direction.",
    status: "Architecture",
    bodyHtml: [
      headline("A careful research update"),
      paragraph("Hello,"),
      paragraph(
        "This template is for occasional updates on research direction and architecture work at SAVEN Core. Use only approved status language: Research, Architecture, or In Development.",
      ),
      paragraph(
        "Replace this paragraph with an authorized summary. Do not claim operational products, validated clinical outcomes, customer counts, or commercial availability.",
      ),
      button("Research overview", `${siteUrl}/en/research/`),
    ].join(""),
  },
  {
    id: "partnership-followup",
    category: "partnership",
    subject: `Following up on your partnership inquiry — ${name}`,
    description:
      "Partnership follow-up after acknowledgement — no invented agreements.",
    preheader: "A follow-up from SAVEN Core.",
    status: "In Development",
    bodyHtml: [
      headline("Following up on your inquiry"),
      paragraph(
        "Thank you again for your interest in a possible partnership with SAVEN Core.",
      ),
      paragraph(
        "We are following up on your earlier message. Please reply with any clarifying detail that would help us review the inquiry. This note does not create an agreement, evaluation outcome, or commitment.",
      ),
      button("Contact SAVEN Core", `${siteUrl}/en/contact/`),
      paragraph(`You can also write directly to ${contactEmail}.`),
    ].join(""),
  },
  {
    id: "press-kit-invite",
    category: "press",
    subject: `${name} — media materials invitation`,
    description:
      "Invite press contacts to public Media / brand materials — no fake quotes.",
    preheader: "Public media materials from SAVEN Core.",
    status: "Architecture",
    bodyHtml: [
      headline("Public media materials"),
      paragraph(
        "Thank you for your interest in SAVEN Core. You are invited to review public brand and media materials on our website.",
      ),
      paragraph(
        "Please rely only on materials we publish or provide in writing. Do not invent spokespeople, partner logos, deployment photography, or operational claims.",
      ),
      button("Open Media", `${siteUrl}/en/media/`),
      paragraph(
        `For further questions, contact ${contactEmail}.`,
      ),
    ].join(""),
  },
  {
    id: "newsletter-care-domain",
    category: "newsletter",
    subject: `${name} — care, home, and human support`,
    description:
      "Care-domain newsletter variant — hospitals, home, and everyday support framing.",
    preheader: "Notes on human care and responsible technology.",
    status: "Architecture",
    bodyHtml: [
      headline("Care across everyday life"),
      paragraph("Hello,"),
      paragraph(
        "SAVEN Core develops intelligent systems meant to help people in hospitals, at home, and wherever life happens — across every age and stage of life. AI and robotics are tools; human support is the purpose.",
      ),
      paragraph(
        "Replace this paragraph with an approved care-domain note. Keep status honest. Do not invent metrics, customer stories, or operational product claims.",
      ),
      button("Applications overview", `${siteUrl}/en/applications/`),
      paragraph(
        "You received this because you opted in or were added by an administrator.",
      ),
    ].join(""),
  },
  {
    id: "meeting-thankyou",
    category: "meeting",
    subject: `Thank you for meeting with ${name}`,
    description: "Post-meeting thank-you — no invented commitments or timelines.",
    preheader: "Thank you for the conversation.",
    status: "In Development",
    bodyHtml: [
      headline("Thank you for the conversation."),
      paragraph(
        "Thank you for meeting with SAVEN Core. We appreciated the discussion.",
      ),
      paragraph(
        "If we agreed on next steps, add them here before sending. Until then, the public site remains the best place for published orientation materials.",
      ),
      button("Visit the site", siteUrl),
      paragraph(
        `If anything was unclear, reply to this message or write to ${contactEmail}.`,
      ),
    ].join(""),
  },
  {
    id: "reengage-explore",
    category: "reengage",
    subject: `Explore ${name} when you have a moment`,
    description:
      "Soft re-engagement — invite people back to the public site without pressure.",
    preheader: "A quiet invitation to explore SAVEN Core.",
    status: "In Development",
    bodyHtml: [
      headline("Whenever you are ready to explore"),
      paragraph(
        "We are writing with a brief invitation to revisit SAVEN Core when it is useful to you.",
      ),
      paragraph(
        "The public site shares how we think about human data, responsible technology, and physical-world assistance. There is no obligation to respond.",
      ),
      button("Explore the site", siteUrl),
      paragraph(
        `If you prefer not to receive occasional notes, reply to ${contactEmail} and we will respect that request.`,
      ),
    ].join(""),
  },
  {
    id: "internal-briefing",
    category: "ops",
    subject: `[Internal] ${name} briefing`,
    description:
      "Internal ops briefing shell — coordination among authorized operators only.",
    preheader: "Internal briefing — not for external distribution.",
    status: "Architecture",
    bodyHtml: [
      headline("Internal briefing"),
      paragraph(
        "Internal briefing — not for external distribution or public mailings.",
      ),
      paragraph(
        "Use this shell for a short operator update: context, owners, and open questions. Keep facts precise. Do not invent status upgrades, customers, or operational claims.",
      ),
      button("Open admin platform", `${siteUrl}/en/admin/`),
      paragraph(
        "Share only with authorized operators. Prefer Decisions Log language for any status wording.",
      ),
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
