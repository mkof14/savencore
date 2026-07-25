import { TechnologyExperience } from "@/components/technology/TechnologyExperience";
import type { Locale } from "@/config/locales";
import type { TechnologyPageContent } from "@/content/pages/en/technology";

type TechnologyPageProps = {
  locale: Locale;
  content: TechnologyPageContent;
};

/** Technology domain entrance — dedicated product experience. */
export function TechnologyPage({ locale, content }: TechnologyPageProps) {
  return <TechnologyExperience locale={locale} content={content} />;
}
