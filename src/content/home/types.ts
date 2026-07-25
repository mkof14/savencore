export type HomeHeroContent = {
  brand: string;
  sentence: string;
  explanation: string;
  status: string;
};

export type HomeArchitectureNode = {
  id: string;
  label: string;
  href?: string;
};

export type HomeExplorerDomain = {
  id: string;
  title: string;
  purpose: string;
  href: string;
  pageIds: readonly string[];
  relationships: string;
};

export type HomeDomainMapStep = {
  id: string;
  label: string;
  href: string;
  dependency: string;
};

export type HomeStatusItem = {
  id: string;
  label: string;
  stateKey: "complete" | "inProgress" | "planned";
  complete: boolean;
};

export type HomeFeaturedConcept = {
  id: string;
  knowledgeId: string;
  title: string;
  role: string;
  href: string;
  note: string;
};

export type HomeContinueItem = {
  id: string;
  title: string;
  detail: string;
  href: string;
};

export type HomeContent = {
  hero: HomeHeroContent;
  architectureChain: readonly HomeArchitectureNode[];
  explorerDomains: readonly HomeExplorerDomain[];
  domainMapSteps: readonly HomeDomainMapStep[];
  platformStatus: readonly HomeStatusItem[];
  featuredConcepts: readonly HomeFeaturedConcept[];
  continueExploring: readonly HomeContinueItem[];
  domainMapConstraints: readonly string[];
};
