export type NavHref = `/${string}`;

export type NavLinkItem = {
  id: string;
  label: string;
  href: NavHref;
};

export type NavGroupItem = {
  id: string;
  label: string;
  href: NavHref;
  children: readonly NavLinkItem[];
};

export type PrimaryNavItem = NavLinkItem | NavGroupItem;

export function isNavGroup(item: PrimaryNavItem): item is NavGroupItem {
  return "children" in item;
}

export type FooterLinkPublished = {
  id: string;
  label: string;
  status: "published";
  href: NavHref;
};

export type FooterLinkComingSoon = {
  id: string;
  label: string;
  status: "coming-soon";
};

export type FooterLinkItem = FooterLinkPublished | FooterLinkComingSoon;

export type FooterGroup = {
  id: string;
  title: string;
  links: readonly FooterLinkItem[];
};

export function isFooterLinkPublished(
  link: FooterLinkItem,
): link is FooterLinkPublished {
  return link.status === "published";
}
