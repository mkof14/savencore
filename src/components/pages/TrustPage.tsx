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
import type { TrustPageContent } from "@/content/pages/en/trust";

type Props = {
  locale: Locale;
  content: TrustPageContent;
};

export function TrustPage({ locale, content }: Props) {
  const titleId = "page-title";

  return (
    <article className="page page--trust" aria-labelledby={titleId}>
      <KnowledgeHero
        locale={locale}
        domain="trust"
        label={content.label}
        title={content.title}
        titleId={titleId}
        explanation={content.introduction}
        {...(content.metadata.status
          ? { status: content.metadata.status }
          : {})}
        visualization={<SignalDiagram variant="trust-overview" />}
      />

      <KnowledgeObjectFrame
        locale={locale}
        domain={"trust"}
        input={{
          knowledgeId: "page-trust",
          href: "/trust/",
          title: content.label,
          domain: "Trust",
          entityId: "trust-architecture",
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="trust"
        currentHref="/trust/"
          />
        }
        supporting={<PageSectionNav items={content.sectionNav} />}
      >
        <div id="definition">
          <DefinitionPanel
            term={content.definitionTerm}
            definition={content.definition}
            coordinate="TRU"
          />
        </div>

        <EngineeringAnnotation
          coordinate="GOV"
          label="Trust model"
          text="Principles → Controls → Oversight → Accountability"
        />

        <ScopePanel locale={locale} id="boundaries" variant="safety-boundary" title="Page boundaries">
          <p>{content.boundaryNote}</p>
        </ScopePanel>

        <RelationshipFlow
          locale={locale}
          heading="Trust path"
          description="Governance commitments shape controls, oversight and accountability."
          steps={[
            {
              id: "principles",
              label: "Principles",
              href: "/trust/",
              relation: "shape",
            },
            {
              id: "controls",
              label: "Controls",
              href: "/trust/privacy/",
              relation: "require",
            },
            {
              id: "oversight",
              label: "Oversight",
              href: "/trust/human-oversight/",
              relation: "record",
            },
            {
              id: "accountability",
              label: "Accountability",
              href: "/trust/limitations/",
            },
          ]}
        />

        <div id="trust-topics">
          <ConceptGrid
            locale={locale}
            heading={content.cardsHeading}
            identity="architecture"
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
