import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/config/site";

/**
 * Honest Organization JSON-LD — name, URL, description only.
 * No fabricated address, phone, logo ownership claims beyond public brand mark.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DEFAULT_DESCRIPTION,
    logo: `${SITE_URL}/brand/saven-logo-mark.webp`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
