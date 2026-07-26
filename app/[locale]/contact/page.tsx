import { notFound } from "next/navigation";

import { ContactPage } from "@/components/contact/ContactPage";
import { isLocale } from "@/config/locales";
import { getContactPageContent } from "@/content/contact/get-contact-content";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const content = getContactPageContent(localeParam);
  const visual = domainVisualForHref("/contact/");
  return buildPageMetadata({
    locale: localeParam,
    path: "/contact/",
    title: content.title,
    description: content.lede.slice(0, 320),
    image: visual.mastheadImage,
    imageAlt: visual.mastheadAlt,
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <ContactPage locale={localeParam} />;
}
