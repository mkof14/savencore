export type SignalDiagramVariant =
  | "systems-overview"
  | "technology-overview"
  | "research-overview"
  | "human-data"
  | "human-data-model"
  | "data-infrastructure"
  | "knowledge-engine"
  | "ai-decision-support"
  | "safety-layer"
  | "communication-layer"
  | "clinical-interfaces"
  | "robotics-layer"
  | "drone-systems"
  | "interoperability"
  | "privacy"
  | "security"
  | "artificial-intelligence"
  | "automation"
  | "robotics"
  | "applications-overview"
  | "healthcare"
  | "home"
  | "hospitals"
  | "emergency"
  | "industrial"
  | "government"
  | "agriculture"
  | "research-applications"
  | "trust-overview"
  | "trust-privacy"
  | "trust-security"
  | "trust-safety"
  | "human-oversight"
  | "transparency"
  | "ethics-responsible-use"
  | "limitations";


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
  "research-overview": {
    caption: "Research field",
    description: "Questions and evidence guide design before scale.",
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
  "communication-layer": {
    caption: "Connection path",
    description: "Components exchange information through a controlled communication boundary.",
  },
  "clinical-interfaces": {
    caption: "Workflow interface",
    description: "Authorized clinical workflows connect people to governed system pathways.",
  },
  "robotics-layer": {
    caption: "Physical action path",
    description: "Digital systems connect to physical action only inside approved limits.",
  },
  "drone-systems": {
    caption: "Aerial operating path",
    description: "Aerial systems operate as a specialized pathway under communication and safety limits.",
  },
  interoperability: {
    caption: "Exchange boundary",
    description: "External exchange happens only through scoped, permissioned interfaces.",
  },
  privacy: {
    caption: "Purpose limit path",
    description: "Collection is limited by purpose, access rules and minimization.",
  },
  security: {
    caption: "Protection path",
    description: "Identity, protection and monitoring guard authorized pathways.",
  },
  "artificial-intelligence": {
    caption: "Assisted judgment path",
    description: "Models support interpretation under uncertainty and human oversight.",
  },
  automation: {
    caption: "Delegated task path",
    description: "Tasks may be delegated only inside reviewable limits with intervention points.",
  },
  robotics: {
    caption: "Physical interaction path",
    description: "Devices act in environments under governance and stop conditions.",
  },
  "applications-overview": {
    caption: "Operating environments",
    description: "Technology and Systems support real-world operating environments under constraints.",
  },
  healthcare: {
    caption: "Care support path",
    description: "Human Data and decision support stop at human review before care workflow.",
  },
  home: {
    caption: "Home assistance path",
    description: "Permissions and daily context support assistance that remains under human control.",
  },
  hospitals: {
    caption: "Hospital workflow path",
    description: "Staff workflows connect through interfaces and safety limits to care infrastructure.",
  },
  emergency: {
    caption: "Escalation path",
    description: "Signals support triage and escalate to human response under authority limits.",
  },
  industrial: {
    caption: "Industrial limit path",
    description: "Sensing and analysis reach physical action only after approved operation limits.",
  },
  government: {
    caption: "Public accountability path",
    description: "Authorized use requires controls, oversight and accountable review.",
  },
  agriculture: {
    caption: "Field action path",
    description: "Sensing and analysis support approved field action under environmental constraints.",
  },
  "research-applications": {
    caption: "Evaluation path",
    description: "Questions and evidence move through controlled evaluation before review.",
  },
  "trust-overview": {
    caption: "Trust model",
    description: "Principles guide controls, oversight and accountability.",
  },
  "trust-privacy": {
    caption: "Privacy governance path",
    description: "Collection boundary, permission, use and retention or removal.",
  },
  "trust-security": {
    caption: "Security governance path",
    description: "Access, protection, monitoring and accountable response.",
  },
  "trust-safety": {
    caption: "Safety commitment path",
    description: "Risk, limits, escalation and human authority.",
  },
  "human-oversight": {
    caption: "Oversight path",
    description: "Proposal, review, decision and accountability remain with people.",
  },
  transparency: {
    caption: "Explanation path",
    description: "Source, processing and explanation support human review.",
  },
  "ethics-responsible-use": {
    caption: "Responsible-use path",
    description: "Values and constraints guide review, refusal and escalation.",
  },
  limitations: {
    caption: "Scope boundary",
    description: "Supported scope, unsupported scope and escalation boundary.",
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
      {variant === "research-overview" ? <ResearchOverviewDiagram /> : null}
      {variant === "applications-overview" ? (
        <ApplicationsOverviewDiagram />
      ) : null}
      {variant === "trust-overview" ? <TrustOverviewDiagram /> : null}
      {variant === "human-data" ? <HumanDataDiagram /> : null}
      {variant === "human-data-model" ? <HumanDataModelDiagram /> : null}
      {variant === "data-infrastructure" ? <DataInfrastructureDiagram /> : null}
      {variant === "knowledge-engine" ? <KnowledgeEngineDiagram /> : null}
      {variant === "ai-decision-support" ? <AiDecisionSupportDiagram /> : null}
      {variant === "safety-layer" ? <SafetyLayerDiagram /> : null}

      {variant === "communication-layer" ? <Pipeline nodes={[{label:"Component A",marker:"control"},{label:"Exchange",role:"controlled",current:true,marker:"knowledge"},{label:"Component B",marker:"control"}]} paths={["connects","reaches"]} aria={COPY["communication-layer"].description} /> : null}
      {variant === "clinical-interfaces" ? <Pipeline nodes={[{label:"Staff workflow",marker:"signal"},{label:"Interface",role:"controlled",current:true,marker:"control"},{label:"Governed pathway",marker:"knowledge"}]} paths={["enters","supports"]} aria={COPY["clinical-interfaces"].description} /> : null}
      {variant === "robotics-layer" ? <Pipeline nodes={[{label:"Digital plan",marker:"knowledge"},{label:"Limit check",role:"gate",current:true,marker:"safety"},{label:"Physical action",marker:"action"}]} paths={["passes","enables"]} aria={COPY["robotics-layer"].description} /> : null}
      {variant === "drone-systems" ? <Pipeline nodes={[{label:"Mission request",marker:"control"},{label:"Aerial system",role:"specialized",current:true,marker:"action"},{label:"Safety limit",marker:"safety"}]} paths={["operates under","reports to"]} aria={COPY["drone-systems"].description} /> : null}
      {variant === "interoperability" ? <BoundaryFlow sources={[{label:"External system"},{label:"Authorized partner"}]} current={{label:"Scoped interface",role:"permissioned",marker:"control"}} boundary="Exchange boundary" aria={COPY.interoperability.description} /> : null}
      {variant === "privacy" ? <Pipeline nodes={[{label:"Collection limit",marker:"signal"},{label:"Purpose rule",role:"constraint",current:true,marker:"control"},{label:"Minimization",marker:"knowledge"}]} paths={["applies","reduces"]} aria={COPY.privacy.description} /> : null}
      {variant === "security" ? <Pipeline nodes={[{label:"Identity",marker:"control"},{label:"Protection",role:"guard",current:true,marker:"safety"},{label:"Monitoring",marker:"knowledge"}]} paths={["authenticates","observes"]} aria={COPY.security.description} /> : null}
      {variant === "artificial-intelligence" ? <Pipeline nodes={[{label:"Context",marker:"knowledge"},{label:"Model support",role:"assist",current:true,marker:"control"},{label:"Human oversight",marker:"safety"}]} paths={["interprets","requires"]} aria={COPY["artificial-intelligence"].description} /> : null}
      {variant === "automation" ? <Pipeline nodes={[{label:"Task",marker:"control"},{label:"Bounded automation",role:"delegated",current:true,marker:"action"},{label:"Intervention",marker:"safety"}]} paths={["runs inside","allows"]} aria={COPY.automation.description} /> : null}
      {variant === "robotics" ? <Pipeline nodes={[{label:"Environment",marker:"signal"},{label:"Device action",role:"physical",current:true,marker:"action"},{label:"Stop condition",marker:"safety"}]} paths={["acts in","respects"]} aria={COPY.robotics.description} /> : null}
      {variant === "healthcare" ? <Pipeline nodes={[{label:"Human Data",marker:"signal"},{label:"Decision support",marker:"knowledge"},{label:"Human review",role:"authority",current:true,marker:"safety"},{label:"Care workflow",marker:"action"}]} paths={["informs","stops at","may support"]} aria={COPY.healthcare.description} /> : null}
      {variant === "home" ? <Pipeline nodes={[{label:"Permissions",marker:"control"},{label:"Daily context",marker:"signal"},{label:"Assistance",role:"support",current:true,marker:"action"},{label:"Human control",marker:"safety"}]} paths={["authorize","enable","remain under"]} aria={COPY.home.description} /> : null}
      {variant === "hospitals" ? <Pipeline nodes={[{label:"Staff workflow",marker:"signal"},{label:"Clinical interface",marker:"control"},{label:"Safety limits",role:"gate",current:true,marker:"safety"},{label:"Care infrastructure",marker:"action"}]} paths={["connect","apply","reach"]} aria={COPY.hospitals.description} /> : null}
      {variant === "emergency" ? <Pipeline nodes={[{label:"Signals",marker:"signal"},{label:"Triage support",marker:"knowledge"},{label:"Escalation",role:"urgent",current:true,marker:"control"},{label:"Human response",marker:"safety"}]} paths={["feed","raise","require"]} aria={COPY.emergency.description} /> : null}
      {variant === "industrial" ? <Pipeline nodes={[{label:"Sensing",marker:"signal"},{label:"Analysis",marker:"knowledge"},{label:"Approved operation",role:"limit",current:true,marker:"control"},{label:"Physical action",marker:"action"}]} paths={["inform","authorize","enable"]} aria={COPY.industrial.description} /> : null}
      {variant === "government" ? <Pipeline nodes={[{label:"Authorized use",marker:"control"},{label:"Controls",marker:"safety"},{label:"Oversight",role:"review",current:true,marker:"knowledge"},{label:"Accountability",marker:"safety"}]} paths={["require","support","record"]} aria={COPY.government.description} /> : null}
      {variant === "agriculture" ? <Pipeline nodes={[{label:"Sensing",marker:"signal"},{label:"Analysis",marker:"knowledge"},{label:"Approved operation",role:"limit",current:true,marker:"control"},{label:"Field action",marker:"action"}]} paths={["inform","authorize","support"]} aria={COPY.agriculture.description} /> : null}
      {variant === "research-applications" ? <Pipeline nodes={[{label:"Questions",marker:"knowledge"},{label:"Evidence",marker:"signal"},{label:"Controlled evaluation",role:"bounded",current:true,marker:"control"},{label:"Review",marker:"safety"}]} paths={["gather","enter","require"]} aria={COPY["research-applications"].description} /> : null}
      {variant === "trust-privacy" ? <Pipeline nodes={[{label:"Collection boundary",marker:"signal"},{label:"Permission",marker:"control"},{label:"Use",role:"limited",current:true,marker:"knowledge"},{label:"Retention / removal",marker:"safety"}]} paths={["requires","allows","ends in"]} aria={COPY["trust-privacy"].description} /> : null}
      {variant === "trust-security" ? <Pipeline nodes={[{label:"Access",marker:"control"},{label:"Protection",marker:"safety"},{label:"Monitoring",role:"observe",current:true,marker:"knowledge"},{label:"Response",marker:"action"}]} paths={["guards","watches","triggers"]} aria={COPY["trust-security"].description} /> : null}
      {variant === "trust-safety" ? <Pipeline nodes={[{label:"Risk",marker:"signal"},{label:"Limits",marker:"control"},{label:"Escalation",role:"raise",current:true,marker:"safety"},{label:"Human authority",marker:"safety"}]} paths={["meet","raise","return to"]} aria={COPY["trust-safety"].description} /> : null}
      {variant === "human-oversight" ? <Pipeline nodes={[{label:"Proposal",marker:"knowledge"},{label:"Review",marker:"control"},{label:"Decision",role:"human",current:true,marker:"safety"},{label:"Accountability",marker:"safety"}]} paths={["enters","leads to","records"]} aria={COPY["human-oversight"].description} /> : null}
      {variant === "transparency" ? <Pipeline nodes={[{label:"Source",marker:"knowledge"},{label:"Processing",marker:"control"},{label:"Explanation",role:"visible",current:true,marker:"knowledge"},{label:"Human review",marker:"safety"}]} paths={["feeds","produces","supports"]} aria={COPY.transparency.description} /> : null}
      {variant === "ethics-responsible-use" ? <Pipeline nodes={[{label:"Values",marker:"knowledge"},{label:"Constraints",marker:"control"},{label:"Review",role:"judge",current:true,marker:"safety"},{label:"Refuse / escalate",marker:"action"}]} paths={["set","guide","may"]} aria={COPY["ethics-responsible-use"].description} /> : null}
      {variant === "limitations" ? <LimitationsDiagram aria={COPY.limitations.description} /> : null}

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
    <div
      className="signal-diagram__canvas signal-diagram__canvas--constellation"
      role="img"
      aria-label={COPY["systems-overview"].description}
    >
      <div className="signal-diagram__orbit" aria-hidden="true" />
      <ul className="signal-diagram__satellites" aria-hidden="true">
        <li className="signal-diagram__satellite">Technology</li>
        <li className="signal-diagram__satellite">Safety</li>
        <li className="signal-diagram__satellite">Applications</li>
        <li className="signal-diagram__satellite">Knowledge</li>
      </ul>
      <div className="signal-diagram__hub">
        <span className="signal-diagram__hub-label">Systems</span>
        <span className="signal-diagram__hub-role">coordination</span>
      </div>
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

function ApplicationsOverviewDiagram() {
  const places = [
    { id: "healthcare", label: "Healthcare", current: true },
    { id: "home", label: "Home Application" },
    { id: "hospitals", label: "Hospitals" },
    { id: "emergency", label: "Emergency" },
    { id: "industrial", label: "Industrial" },
    { id: "government", label: "Government" },
    { id: "agriculture", label: "Agriculture" },
    { id: "research", label: "Research" },
  ];

  return (
    <div
      className="signal-diagram__canvas signal-diagram__canvas--places"
      role="img"
      aria-label={COPY["applications-overview"].description}
    >
      {places.map((place) => (
        <div
          key={place.id}
          className={[
            "signal-diagram__place",
            place.current ? "is-current" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {place.label}
        </div>
      ))}
    </div>
  );
}

function TrustOverviewDiagram() {
  return (
    <div
      className="signal-diagram__canvas signal-diagram__canvas--rings"
      role="img"
      aria-label={COPY["trust-overview"].description}
    >
      <div className="signal-diagram__ring signal-diagram__ring--outer" aria-hidden="true" />
      <div className="signal-diagram__ring signal-diagram__ring--mid" aria-hidden="true" />
      <div className="signal-diagram__ring signal-diagram__ring--inner">
        Human
        <br />
        authority
      </div>
      <div className="signal-diagram__ring-labels" aria-hidden="true">
        <span className="signal-diagram__ring-label">Principles</span>
        <span className="signal-diagram__ring-label">Controls</span>
        <span className="signal-diagram__ring-label">Oversight</span>
      </div>
    </div>
  );
}

function ResearchOverviewDiagram() {
  return (
    <div
      className="signal-diagram__canvas signal-diagram__canvas--open"
      role="img"
      aria-label="Open questions guide careful system design."
    >
      <p className="signal-diagram__open-line">
        <span className="signal-diagram__open-mark" aria-hidden="true" />
        Questions before conclusions
      </p>
      <p className="signal-diagram__open-line">
        <span className="signal-diagram__open-mark" aria-hidden="true" />
        Evidence before scale
      </p>
      <p className="signal-diagram__open-line">
        <span className="signal-diagram__open-mark" aria-hidden="true" />
        Limits before claims
      </p>
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


function Pipeline({
  nodes,
  paths,
  aria,
}: {
  nodes: readonly { label: string; role?: string; current?: boolean; marker?: "signal" | "knowledge" | "control" | "safety" | "action" }[];
  paths: readonly string[];
  aria: string;
}) {
  return (
    <div className="signal-diagram__canvas" role="img" aria-label={aria}>
      {nodes.map((node, index) => (
        <div key={node.label}>
          <Node {...node} />
          {index < paths.length ? <Path label={paths[index]!} /> : null}
        </div>
      ))}
    </div>
  );
}

function BoundaryFlow({
  sources,
  current,
  boundary,
  aria,
}: {
  sources: readonly { label: string }[];
  current: { label: string; role?: string; marker?: "signal" | "knowledge" | "control" | "safety" | "action" };
  boundary: string;
  aria: string;
}) {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--intake" role="img" aria-label={aria}>
      <div className="signal-diagram__sources">
        {sources.map((source) => (
          <Node key={source.label} label={source.label} marker="knowledge" />
        ))}
      </div>
      <Path label="enter" />
      <div className="signal-diagram__enclosure">
        <Boundary label={boundary} />
        <Node
          label={current.label}
          {...(current.role ? { role: current.role } : {})}
          current
          marker={current.marker ?? "control"}
        />
      </div>
    </div>
  );
}

function LimitationsDiagram({ aria }: { aria: string }) {
  return (
    <div className="signal-diagram__canvas signal-diagram__canvas--graph" role="img" aria-label={aria}>
      <Node label="Supported scope" marker="knowledge" />
      <Node label="Unsupported scope" current marker="safety" />
      <Node label="Escalation boundary" marker="control" />
      <p className="signal-diagram__annotation">Limits are structural, not optional</p>
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
