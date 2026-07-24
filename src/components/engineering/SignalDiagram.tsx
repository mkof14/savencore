export type SignalDiagramVariant =
  | "systems-overview"
  | "technology-overview"
  | "human-data"
  | "human-data-model"
  | "data-infrastructure"
  | "knowledge-engine"
  | "ai-decision-support"
  | "safety-layer";

type SignalDiagramProps = {
  variant: SignalDiagramVariant;
  className?: string;
};

type DiagramCopy = {
  caption: string;
  description: string;
};

const COPY: Record<SignalDiagramVariant, DiagramCopy> = {
  "systems-overview": {
    caption: "Architecture position",
    description:
      "Technology foundations flow into coordinated Systems, then Applications.",
  },
  "technology-overview": {
    caption: "Foundation layers",
    description:
      "Technical disciplines stack as schemas and data layers before Systems.",
  },
  "human-data": {
    caption: "Signal intake",
    description:
      "Multiple human-information sources enter a controlled information boundary.",
  },
  "human-data-model": {
    caption: "Relationship structure",
    description:
      "Data categories connect through context and preserved relationships.",
  },
  "data-infrastructure": {
    caption: "Availability path",
    description:
      "Authorized information is organized and made available to later systems.",
  },
  "knowledge-engine": {
    caption: "Context boundary",
    description:
      "Structured sources enter an organized knowledge layer that provides context without making decisions.",
  },
  "ai-decision-support": {
    caption: "Review boundary",
    description:
      "Knowledge and signals flow into analysis, then stop at a human review boundary.",
  },
  "safety-layer": {
    caption: "Control path",
    description:
      "Systems pass through checks, limits, escalation, and human oversight.",
  },
};

/**
 * Page-specific system visualization for KnowledgeHero.
 * Structure carries meaning; color is secondary.
 */
export function SignalDiagram({ variant, className }: SignalDiagramProps) {
  const copy = COPY[variant];
  const rootClass = [
    "signal-diagram",
    `signal-diagram--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={rootClass} aria-labelledby={`signal-diagram-${variant}`}>
      <figcaption
        id={`signal-diagram-${variant}`}
        className="signal-diagram__caption"
      >
        <span className="signal-diagram__caption-label">{copy.caption}</span>
        <span className="signal-diagram__caption-text">{copy.description}</span>
      </figcaption>

      {variant === "systems-overview" ? <SystemsOverviewDiagram /> : null}
      {variant === "technology-overview" ? <TechnologyOverviewDiagram /> : null}
      {variant === "human-data" ? <HumanDataDiagram /> : null}
      {variant === "human-data-model" ? <HumanDataModelDiagram /> : null}
      {variant === "data-infrastructure" ? <DataInfrastructureDiagram /> : null}
      {variant === "knowledge-engine" ? <KnowledgeEngineDiagram /> : null}
      {variant === "ai-decision-support" ? <AiDecisionSupportDiagram /> : null}
      {variant === "safety-layer" ? <SafetyLayerDiagram /> : null}
    </figure>
  );
}

function Node({
  label,
  role,
  current,
  marker,
}: {
  label: string;
  role?: string;
  current?: boolean;
  marker?: "signal" | "knowledge" | "control" | "safety" | "action";
}) {
  return (
    <div
      className={[
        "signal-diagram__node",
        current ? "is-current" : "",
        marker ? `signal-diagram__node--${marker}` : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="signal-diagram__dot" aria-hidden="true" />
      <span className="signal-diagram__node-label">{label}</span>
      {role ? <span className="signal-diagram__node-role">{role}</span> : null}
    </div>
  );
}

function Path({ label }: { label: string }) {
  return (
    <div className="signal-diagram__path" aria-hidden="true">
      <span className="signal-diagram__path-line" />
      <span className="signal-diagram__path-label">{label}</span>
    </div>
  );
}

function Boundary({ label }: { label: string }) {
  return (
    <div className="signal-diagram__boundary" role="group" aria-label={label}>
      <span className="signal-diagram__boundary-label">{label}</span>
    </div>
  );
}

function SystemsOverviewDiagram() {
  return (
    <div className="signal-diagram__canvas" role="img" aria-label={COPY["systems-overview"].description}>
      <Node label="Technology" role="foundations" marker="knowledge" />
      <Path label="feeds" />
      <Node label="Systems" role="coordination" current marker="control" />
      <Path label="supports" />
      <Node label="Applications" role="operating contexts" marker="action" />
    </div>
  );
}

function TechnologyOverviewDiagram() {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--layers" role="img" aria-label={COPY["technology-overview"].description}>
      <div className="signal-diagram__layer">
        <span className="signal-diagram__coord" aria-hidden="true">
          L1
        </span>
        <Node label="Human Data" role="signals" marker="signal" current />
      </div>
      <div className="signal-diagram__layer">
        <span className="signal-diagram__coord" aria-hidden="true">
          L2
        </span>
        <Node label="Human Data Model" role="schema" marker="knowledge" />
      </div>
      <div className="signal-diagram__layer">
        <span className="signal-diagram__coord" aria-hidden="true">
          L3
        </span>
        <Node label="Data Infrastructure" role="availability" marker="knowledge" />
      </div>
      <Path label="into Systems" />
    </div>
  );
}

function HumanDataDiagram() {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--intake" role="img" aria-label={COPY["human-data"].description}>
      <div className="signal-diagram__sources">
        <Node label="Clinical" marker="signal" />
        <Node label="Personal" marker="signal" />
        <Node label="Contextual" marker="signal" />
      </div>
      <Path label="enter" />
      <div className="signal-diagram__enclosure">
        <Boundary label="Controlled information boundary" />
        <Node label="Human Data" role="authorized intake" current marker="signal" />
      </div>
    </div>
  );
}

function HumanDataModelDiagram() {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--graph" role="img" aria-label={COPY["human-data-model"].description}>
      <Node label="Identity" marker="knowledge" />
      <Node label="Context" current marker="knowledge" />
      <Node label="Events" marker="knowledge" />
      <div className="signal-diagram__links" aria-hidden="true">
        <span className="signal-diagram__link-mark" />
        <span className="signal-diagram__link-mark" />
        <span className="signal-diagram__link-mark" />
      </div>
      <p className="signal-diagram__annotation">Relationships preserved</p>
    </div>
  );
}

function DataInfrastructureDiagram() {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--pipeline" role="img" aria-label={COPY["data-infrastructure"].description}>
      <Node label="Organize" role="structure" marker="knowledge" />
      <Path label="authorize" />
      <Node label="Store" role="controlled" current marker="control" />
      <Path label="serve" />
      <Node label="Systems" role="consumers" marker="action" />
    </div>
  );
}

function KnowledgeEngineDiagram() {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--context" role="img" aria-label={COPY["knowledge-engine"].description}>
      <div className="signal-diagram__sources">
        <Node label="Sources" marker="knowledge" />
        <Node label="Models" marker="knowledge" />
      </div>
      <Path label="organize" />
      <div className="signal-diagram__enclosure">
        <Node label="Knowledge layer" role="context only" current marker="knowledge" />
        <Boundary label="No decision boundary" />
      </div>
    </div>
  );
}

function AiDecisionSupportDiagram() {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--review" role="img" aria-label={COPY["ai-decision-support"].description}>
      <Node label="Knowledge" marker="knowledge" />
      <Node label="Signals" marker="signal" />
      <Path label="analyze" />
      <Node label="Analysis" role="support" current marker="control" />
      <Path label="stops at" />
      <div className="signal-diagram__enclosure signal-diagram__enclosure--safety">
        <Boundary label="Human review boundary" />
        <Node label="Person" role="decision owner" marker="safety" />
      </div>
    </div>
  );
}

function SafetyLayerDiagram() {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--control" role="img" aria-label={COPY["safety-layer"].description}>
      <Node label="Checks" marker="safety" />
      <Path label="then" />
      <Node label="Limits" current marker="safety" />
      <Path label="then" />
      <Node label="Escalation" marker="control" />
      <Path label="to" />
      <Node label="Oversight" role="human" marker="safety" />
    </div>
  );
}
