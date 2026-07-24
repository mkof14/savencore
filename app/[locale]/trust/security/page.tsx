import { notFound } from "next/navigation";

import { TrustDisciplinePage } from "@/components/pages/TrustDisciplinePage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { trustSecurityPageContent } from "@/content/pages/en/trust-security";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <TrustDisciplinePage locale={localeParam} content={trustSecurityPageContent} />;
}
