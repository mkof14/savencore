import type { EngineeringLink } from "@/components/engineering/engineering-types";
import { technologyNavChildren } from "@/navigation/site-navigation";

const SITE_REFERENCE_LINKS: readonly EngineeringLink[] = [
  { label: "Foundation", href: "/foundation/" },
  { label: "Research", href: "/research/" },
  { label: "Applications", href: "/applications/" },
  { label: "Purpose", href: "/purpose/" },
];

/**
 * Reference links for Technology pages.
 * Technology entries derive from the same `technologyNavChildren` source as
 * header/footer navigation.
 */
export function technologyDisciplineReferenceLinks(
  selfHref: string,
): readonly EngineeringLink[] {
  const technologyLinks: EngineeringLink[] = technologyNavChildren.map(
    (item) => ({
      label: item.label,
      href: item.href,
    }),
  );

  return [...technologyLinks, ...SITE_REFERENCE_LINKS].filter(
    (link) => link.href !== selfHref,
  );
}
