import type { NavLinkItem } from "@/navigation/navigation-types";
import {
  systemsNavChildren,
  technologyNavChildren,
} from "@/navigation/site-navigation";

export type KnowledgeDomainId = "technology" | "systems";

export type DomainSequenceContext = {
  domain: KnowledgeDomainId;
  domainLabel: string;
  domainHref: string;
  current: NavLinkItem;
  previous: NavLinkItem | null;
  next: NavLinkItem | null;
  siblings: readonly NavLinkItem[];
};

const DOMAIN_META: Record<
  KnowledgeDomainId,
  { label: string; href: string; children: readonly NavLinkItem[] }
> = {
  technology: {
    label: "Technology",
    href: "/technology/",
    children: technologyNavChildren,
  },
  systems: {
    label: "Systems",
    href: "/systems/",
    children: systemsNavChildren,
  },
};

/**
 * Resolve prev/next/sibling context for a published domain leaf or overview.
 */
export function getDomainSequenceContext(
  domain: KnowledgeDomainId,
  currentHref: string,
): DomainSequenceContext | null {
  const meta = DOMAIN_META[domain];
  const index = meta.children.findIndex((item) => item.href === currentHref);
  if (index === -1) {
    return null;
  }

  return {
    domain,
    domainLabel: meta.label,
    domainHref: meta.href,
    current: meta.children[index]!,
    previous: index > 0 ? meta.children[index - 1]! : null,
    next:
      index < meta.children.length - 1 ? meta.children[index + 1]! : null,
    siblings: meta.children.filter((item) => item.href !== currentHref),
  };
}
