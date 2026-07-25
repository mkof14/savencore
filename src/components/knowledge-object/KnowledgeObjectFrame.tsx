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
import {
  getDomainSequenceContext,
  type KnowledgeDomainId,
} from "@/navigation/domain-sequences";

type KnowledgeObjectFrameProps = {
  locale: Locale;
  input: KnowledgeObjectPageInput;
  domain?: KnowledgeDomainId;
  children: ReactNode;
  /** Rendered between main body and supporting dossier (e.g. page navigation). */
  between?: ReactNode;
  supporting?: ReactNode;
};

/**
 * Shared page frame: main content + engineering sidebar + knowledge dossier.
 */
export function KnowledgeObjectFrame({
  locale,
  input,
  domain,
  children,
  between,
  supporting,
}: KnowledgeObjectFrameProps) {
  const object = resolveKnowledgeObject(input);
  const sequence = domain
    ? getDomainSequenceContext(domain, input.href)
    : null;
  const currentPosition = sequence
    ? `${sequence.domainLabel} / ${sequence.current.label}`
    : `${object.domain} / ${object.title}`;

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
            nextLabel={sequence?.next?.label ?? null}
          />
        </div>
      </div>

      {between}

      <div className="page-supporting">
        <div className="page-shell__inner">
          <div className="ko-dossier">
            <h2 className="ko-dossier__heading">Knowledge Object</h2>
            <KnowledgePassport object={object} />
            <DependencyGraph locale={locale} object={object} />
            <KnowledgeGraphPanel locale={locale} object={object} />
            <KnowledgeLifecycle object={object} />
            <VersionHistory object={object} />
            <ReadingPathsPanel locale={locale} object={object} />
          </div>
          {supporting}
        </div>
      </div>
    </>
  );
}
