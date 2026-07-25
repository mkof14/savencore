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

export type FooterLinkItem = {
  id: string;
  label: string;
  href: NavHref;
};

export type FooterGroup = {
  id: string;
  title: string;
  links: readonly FooterLinkItem[];
  /** When true, show a calm "coming later" note instead of inventing links. */
  planned?: boolean;
};
