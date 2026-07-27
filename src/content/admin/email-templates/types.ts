export type EmailTemplateCategory =
  | "welcome"
  | "invite"
  | "investor"
  | "partnership"
  | "press"
  | "newsletter"
  | "event"
  | "research"
  | "meeting"
  | "reengage"
  | "security"
  | "ops";

export type EmailTemplateDefinition = {
  id: string;
  category: EmailTemplateCategory;
  /** English subject line (canonical). */
  subject: string;
  /** Short admin-facing description. */
  description: string;
  /** Preheader text for inbox preview. */
  preheader: string;
  /** Status for honesty — templates are architecture / in development. */
  status: "Architecture" | "In Development";
  /** Inner body HTML (already escaped content). */
  bodyHtml: string;
};
