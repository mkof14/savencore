import { notFound } from "next/navigation";

import { FlagshipSimplePage } from "@/components/flagship/FlagshipSimplePage";
import { isLocale } from "@/config/locales";
import { getFutureLabHubContent } from "@/content/hub/build-hub-content";
import { createHubGenerateMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = createHubGenerateMetadata(
  "/labs/internal-future-lab/",
  getFutureLabHubContent,
);

export default async function InternalFutureLabPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  return <FlagshipSimplePage locale={localeParam} variant="future-lab" />;
}
