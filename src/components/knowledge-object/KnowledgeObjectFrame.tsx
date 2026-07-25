import type { ReactNode } from "react";

import { DependencyGraph } from "@/components/knowledge-object/DependencyGraph";
import { EngineeringSidebar } from "@/components/knowledge-object/EngineeringSidebar";
import { KnowledgeGraphPanel } from "@/components/knowledge-object/KnowledgeGraphPanel";
import { KnowledgeLifecycle } from "@/components/knowledge-object/KnowledgeLifecycle";
import { KnowledgePassport } from "@/components/knowledge-object/KnowledgePassport";
import { ReadingPathsPanel } from "@/components/knowledge-object/ReadingPathsPanel";
import { VersionHistory } from "@/components/knowledge-object/VersionHistory";
import "@/components/knowledge-object/knowledge-object.css";
import type { Locale } from "@/config/locales";
import {
  resolveKnowledgeObject,
  type KnowledgeObjectPageInput,
} from "@/content/knowledge-objects";
import { getNavEntryLabel, getPrimaryNavLabel } from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import {
  getDomainSequenceContext,
  type KnowledgeDomainId,
} from "@/navigation/domain-sequences";

type KnowledgeObjectFrameProps = {
  locale: Locale;
  input: KnowledgeObjectPageInput;
  domain?: KnowledgeDomainId;
  children: ReactNode;
  between?: ReactNode;
  supporting?: ReactNode;
};

/**
 * Shared page frame: main content + document sidebar + document dossier.
 */
export function KnowledgeObjectFrame({
  locale,
  input,
  domain,
  children,
  between,
  supporting,
}: KnowledgeObjectFrameProps) {
  const ui = getUi(locale);
  const object = resolveKnowledgeObject(input);
  const sequence = domain
    ? getDomainSequenceContext(domain, input.href)
    : null;

  const domainLabel = sequence
    ? getPrimaryNavLabel(locale, sequence.domain, sequence.domainLabel)
    : object.domain;
  const currentLabel = sequence
    ? getNavEntryLabel(locale, sequence.current.id, sequence.current.label)
    : object.title;
  const currentPosition = `${domainLabel} / ${currentLabel}`;
  const nextLabel = sequence?.next
    ? getNavEntryLabel(locale, sequence.next.id, sequence.next.label)
    : null;

  return (
    <>
      <div className="page-body">
        <div className="page-shell__inner ko-shell">
          <div className="ko-shell__main">{children}</div>
          <EngineeringSidebar
            locale={locale}
            object={object}
            currentPosition={currentPosition}
            nextHref={sequence?.next?.href ?? null}
            nextLabel={nextLabel}
          />
        </div>
      </div>

      {between}

      <div className="page-supporting">
        <div className="page-shell__inner">
          <div className="ko-dossier">
            <h2 className="ko-dossier__heading">{ui.ko.document}</h2>
            <KnowledgePassport locale={locale} object={object} />
            <DependencyGraph locale={locale} object={object} />
            <KnowledgeGraphPanel locale={locale} object={object} />
            <KnowledgeLifecycle locale={locale} object={object} />
            <VersionHistory locale={locale} object={object} />
            <ReadingPathsPanel locale={locale} object={object} />
          </div>
          {supporting}
        </div>
      </div>
    </>
  );
}
