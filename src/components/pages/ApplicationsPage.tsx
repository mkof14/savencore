import {
  ConceptGrid,
  DefinitionPanel,
  EngineeringAnnotation,
  KeyPrinciples,
  KnowledgeHero,
  ReferenceLinks,
  RelationshipFlow,
  ScopePanel,
  SignalDiagram,
} from "@/components/engineering";
import { KnowledgeObjectFrame } from "@/components/knowledge-object";
import { KnowledgePageNavigation } from "@/components/pages/KnowledgePageNavigation";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import type { ApplicationsPageContent } from "@/content/pages/en/applications";

type Props = {
  locale: Locale;
  content: ApplicationsPageContent;
};

export function ApplicationsPage({ locale, content }: Props) {
  const titleId = "page-title";

  return (
    <article className="page page--applications" aria-labelledby={titleId}>
      <KnowledgeHero
        locale={locale}
        domain="applications"
        label={content.label}
        title={content.title}
        titleId={titleId}
        explanation={content.introduction}
        {...(content.metadata.status
          ? { status: content.metadata.status }
          : {})}
        visualization={<SignalDiagram variant="applications-overview" />}
      />

      <KnowledgeObjectFrame
        locale={locale}
        domain={"applications"}
        input={{
          knowledgeId: "page-applications",
          href: "/applications/",
          title: content.label,
          domain: "Applications",
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="applications"
        currentHref="/applications/"
          />
        }
        supporting={<PageSectionNav items={content.sectionNav} />}
      >
        <div id="definition">
          <DefinitionPanel
            term={content.definitionTerm}
            definition={content.definition}
            coordinate="APP"
          />
        </div>

        <EngineeringAnnotation
          coordinate="ENV"
          label="Reading order"
          text="Technology → Systems → Operating Environments"
        />

        <RelationshipFlow
          locale={locale}
          heading="Architecture position"
          description="Applications sit after Technology foundations and Systems coordination."
          steps={[
            {
              id: "technology",
              label: "Technology",
              href: "/technology/",
              relation: "feeds",
            },
            {
              id: "systems",
              label: "Systems",
              href: "/systems/",
              relation: "support",
            },
            {
              id: "applications",
              label: "Applications",
              href: "/applications/",
            },
          ]}
        />

        <div id="operating-contexts">
          <ConceptGrid
            locale={locale}
            heading={content.cardsHeading}
            identity="usage"
            items={content.cards}
          />
        </div>

        <div id="engineering-principles">
          <KeyPrinciples
            heading={content.principlesHeading}
            principles={content.principles}
          />
        </div>

        <ScopePanel locale={locale}
          id="current-development-scope"
          variant="current-scope"
          title={content.scopeHeading}
        >
          {content.scope.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ScopePanel>

        <ScopePanel locale={locale} variant="engineering-note" title="Scope">
          <p>{content.developmentNote}</p>
        </ScopePanel>

        <ScopePanel locale={locale} variant="future-scope" title={content.futureHeading}>
          <p>{content.futureIntro}</p>
        </ScopePanel>

        <div id="reference-links">
          <ReferenceLinks
            locale={locale}
            heading={content.referenceHeading}
            links={content.referenceLinks}
          />
        </div>
      </KnowledgeObjectFrame>
    </article>
  );
}
