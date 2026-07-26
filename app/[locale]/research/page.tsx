import { notFound } from "next/navigation";

import { DomainVisualPage } from "@/components/domain/DomainVisualPage";
import { isLocale } from "@/config/locales";
import { getResearchHubContent } from "@/content/hub/build-hub-content";
import { createHubGenerateMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = createHubGenerateMetadata(
  "/research/",
  getResearchHubContent,
);

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <DomainVisualPage
      locale={localeParam}
      content={getResearchHubContent(localeParam)}
    />
  );
}
