import type { ReactNode } from "react";

import { DependencyGraph } from "@/components/knowledge-object/DependencyGraph";
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
import { getUi } from "@/i18n/ui";
import type { KnowledgeDomainId } from "@/navigation/domain-sequences";

type KnowledgeObjectFrameProps = {
  locale: Locale;
  input: KnowledgeObjectPageInput;
  domain?: KnowledgeDomainId;
  children: ReactNode;
  between?: ReactNode;
  supporting?: ReactNode;
};

/**
 * Human-first page frame.
 * Level 1: page content. Level 2: related reading. Level 3: document details.
 */
export function KnowledgeObjectFrame({
  locale,
  input,
  children,
  between,
  supporting,
}: KnowledgeObjectFrameProps) {
  const ui = getUi(locale);
  const object = resolveKnowledgeObject(input);

  return (
    <>
      <div className="page-body">
        <div className="page-shell__inner ko-shell ko-shell--human-first">
          <div className="ko-shell__main">{children}</div>
        </div>
      </div>

      {between}

      <div className="page-supporting">
        <div className="page-shell__inner">
          <section
            className="ko-level ko-level--professional"
            aria-labelledby="ko-level-2-heading"
          >
            <header className="ko-level__header">
              <p className="ko-level__kicker">{ui.ko.level2Kicker}</p>
              <h2 id="ko-level-2-heading" className="ko-level__title">
                {ui.ko.level2Title}
              </h2>
            </header>
            <div className="ko-level__grid">
              <ReadingPathsPanel locale={locale} object={object} />
              <DependencyGraph locale={locale} object={object} compact />
            </div>
          </section>

          <details className="ko-level ko-level--engineering">
            <summary className="ko-level__summary">
              <span className="ko-level__kicker">{ui.ko.level3Kicker}</span>
              <span className="ko-level__title">{ui.ko.level3Title}</span>
            </summary>
            <div className="ko-dossier">
              <KnowledgePassport locale={locale} object={object} />
              <DependencyGraph locale={locale} object={object} />
              <KnowledgeGraphPanel locale={locale} object={object} />
              <KnowledgeLifecycle locale={locale} object={object} />
              <VersionHistory locale={locale} object={object} />
            </div>
          </details>

          {supporting}
        </div>
      </div>
    </>
  );
}
