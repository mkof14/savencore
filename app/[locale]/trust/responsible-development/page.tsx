import { notFound } from "next/navigation";

import { DomainVisualPage } from "@/components/domain/DomainVisualPage";
import { isLocale } from "@/config/locales";
import { RESPONSIBLE_DEVELOPMENT_HREF } from "@/content/trust/responsible-development";
import { getResponsibleDevelopmentContent } from "@/content/trust/get-responsible-development";
import { createHubGenerateMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = createHubGenerateMetadata(
  RESPONSIBLE_DEVELOPMENT_HREF,
  getResponsibleDevelopmentContent,
);

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <DomainVisualPage
      locale={localeParam}
      content={getResponsibleDevelopmentContent(localeParam)}
    />
  );
}
