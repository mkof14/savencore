import type { EngineeringLink } from "@/components/engineering/engineering-types";
import {
  systemsNavChildren,
  technologyNavChildren,
} from "@/navigation/site-navigation";

const SITE_LINKS: readonly EngineeringLink[] = [
  { label: "Applications", href: "/applications/" },
  { label: "Research", href: "/research/" },
  { label: "Foundation", href: "/foundation/" },
  { label: "Purpose", href: "/purpose/" },
];

export function systemsDisciplineReferenceLinks(
  selfHref: string,
): readonly EngineeringLink[] {
  const systems = systemsNavChildren.map((item) => ({
    label: item.label,
    href: item.href,
  }));
  const technology = technologyNavChildren.map((item) => ({
    label: item.label,
    href: item.href,
  }));
  return [...systems, ...technology, ...SITE_LINKS].filter(
    (link) => link.href !== selfHref,
  );
}
