import { notFound } from "next/navigation";

import { FlagshipSimplePage } from "@/components/flagship/FlagshipSimplePage";
import { isLocale } from "@/config/locales";
import { getRoboticsInterfaceHubContent } from "@/content/hub/build-hub-content";
import { createHubGenerateMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = createHubGenerateMetadata(
  "/systems/saven-robotics-interface/",
  getRoboticsInterfaceHubContent,
);

export default async function SavenRoboticsInterfacePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  return <FlagshipSimplePage locale={localeParam} variant="robotics-interface" />;
}
