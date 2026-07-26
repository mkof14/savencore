import { HubReadablePage } from "@/components/hub/HubReadablePage";
import type { Locale } from "@/config/locales";
import type { HubPageContent } from "@/content/hub/types";

type DomainVisualPageProps = {
  locale: Locale;
  content: HubPageContent;
};

/**
 * Shared visual shell for Layer-1 hubs and domain leaf pages (D-0160).
 * Atmospheric masthead, human lead, what/why/next, progressive depth.
 */
export function DomainVisualPage({ locale, content }: DomainVisualPageProps) {
  return <HubReadablePage locale={locale} content={content} />;
}
