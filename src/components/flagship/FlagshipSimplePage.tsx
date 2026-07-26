import { DomainVisualPage } from "@/components/domain/DomainVisualPage";
import type { Locale } from "@/config/locales";
import type { FlagshipPageContent } from "@/content/flagship/en";
import {
  getFutureLabHubContent,
  getRoboticsInterfaceHubContent,
} from "@/content/hub/build-hub-content";

type FlagshipSimplePageProps = {
  locale: Locale;
  /** Which flagship leaf to render — avoids EN object identity checks after localization. */
  variant: "robotics-interface" | "future-lab";
  /** Optional unused content prop retained for call-site clarity. */
  content?: FlagshipPageContent;
};

/** Flagship leaf pages — domain visual shell (D-0160). */
export function FlagshipSimplePage({
  locale,
  variant,
}: FlagshipSimplePageProps) {
  const hubContent =
    variant === "robotics-interface"
      ? getRoboticsInterfaceHubContent(locale)
      : getFutureLabHubContent(locale);

  return <DomainVisualPage locale={locale} content={hubContent} />;
}
