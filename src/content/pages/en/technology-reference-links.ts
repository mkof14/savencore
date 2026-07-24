import type { EngineeringLink } from "@/components/engineering/engineering-types";
import { TECHNOLOGY_DOMAIN_REFERENCE_LINKS } from "@/content/pages/en/technology-discipline-types";

/** Reference links for a Technology discipline page, excluding its own route. */
export function technologyDisciplineReferenceLinks(
  selfHref: string,
): readonly EngineeringLink[] {
  return TECHNOLOGY_DOMAIN_REFERENCE_LINKS.filter(
    (link) => link.href !== selfHref,
  );
}
