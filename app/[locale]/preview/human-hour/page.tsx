import { permanentRedirect } from "next/navigation";

import { isLocale, type Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Former creative preview — now aliases the public homepage (D-0129).
 * `/[locale]/preview/human-hour/` → `/[locale]/`
 */
export default async function HumanHourPreviewPage({ params }: Props) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    permanentRedirect("/en/");
  }

  permanentRedirect(localizePath(localeParam as Locale, "/"));
}
