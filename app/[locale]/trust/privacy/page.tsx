import { notFound } from "next/navigation";

import { TrustDisciplinePage } from "@/components/pages/TrustDisciplinePage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { trustPrivacyPageContent } from "@/content/pages/en/trust-privacy";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <TrustDisciplinePage locale={localeParam} content={trustPrivacyPageContent} />;
}
