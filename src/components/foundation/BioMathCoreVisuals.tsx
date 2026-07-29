import Image from "next/image";
import type { ReactNode } from "react";

import type {
  BioMathCoreBlackBoxSide,
  BioMathCoreEnginePhase,
  BioMathCoreEnvironmentCard,
  BioMathCoreFormulaPart,
  BioMathCoreLivingPoint,
  BioMathCoreOpinionLane,
  BioMathCoreOutputPillar,
  BioMathCoreRoleSide,
  BioMathCoreSequenceStep,
  BioMathCoreStackLayer,
} from "@/content/pages/en/biomath-core";

const DIAGRAM_BASE = "/domain/foundation/biomath-core/diagrams";

type DiagramArtboard = "light" | "dark";

type DiagramFigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  artboard?: DiagramArtboard;
  priority?: boolean;
  children?: ReactNode;
};

/** Themeable chrome around owner-grade illustration assets (D-0234). */
function DiagramFigure({
  src,
  alt,
  width,
  height,
  caption,
  artboard = "light",
  priority = false,
  children,
}: DiagramFigureProps) {
  return (
    <figure
      className={`bmc-figure bmc-figure--${artboard}`}
      data-bmc-figure={artboard}
    >
      <div className="bmc-figure__frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="bmc-figure__img"
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 78vw, 40rem"
          priority={priority}
        />
      </div>
      {caption ? (
        <figcaption className="bmc-figure__caption">{caption}</figcaption>
      ) : null}
      {children}
    </figure>
  );
}

type LivingModelVisualProps = {
  visualLabel: string;
  caption: string;
  points: readonly BioMathCoreLivingPoint[];
};

export function LivingModelVisual({
  visualLabel,
  caption,
  points,
}: LivingModelVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--living">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/living-model.webp`}
        alt={visualLabel}
        width={1536}
        height={1024}
        caption={caption}
        artboard="light"
        priority
      >
        <ol className="bmc-figure__legend" aria-label={visualLabel}>
          {points.map((point, index) => (
            <li key={point.id} className={`bmc-figure__legend-item bmc-figure__legend-item--${point.id}`}>
              <span className="bmc-figure__legend-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{point.body}</span>
            </li>
          ))}
        </ol>
      </DiagramFigure>
    </div>
  );
}

type LayerStackVisualProps = {
  visualLabel: string;
  caption: string;
  layers: readonly BioMathCoreStackLayer[];
  calloutEyebrow: string;
  callout: string;
};

export function LayerStackVisual({
  visualLabel,
  caption,
  layers,
  calloutEyebrow,
  callout,
}: LayerStackVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--stack">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/layer-stack.webp`}
        alt={visualLabel}
        width={1536}
        height={1024}
        caption={caption}
        artboard="light"
      >
        <div className="bmc-figure__stack-meta">
          <ol className="bmc-figure__legend bmc-figure__legend--compact">
            {layers.map((layer, index) => (
              <li key={layer.id}>
                <span className="bmc-figure__legend-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong>{layer.name}</strong>
                  <span className="bmc-figure__legend-role"> — {layer.role}</span>
                </span>
              </li>
            ))}
          </ol>
          <aside className="bmc-figure__callout">
            <p className="bmc-figure__callout-eyebrow">{calloutEyebrow}</p>
            <p className="bmc-figure__callout-body">{callout}</p>
          </aside>
        </div>
      </DiagramFigure>
    </div>
  );
}

type DualRolesVisualProps = {
  visualLabel: string;
  caption: string;
  biomath: BioMathCoreRoleSide;
  saven: BioMathCoreRoleSide;
  banner: string;
};

export function DualRolesVisual({
  visualLabel,
  caption,
  biomath,
  saven,
  banner,
}: DualRolesVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--dual">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/dual-roles.webp`}
        alt={visualLabel}
        width={1536}
        height={1024}
        caption={caption}
        artboard="light"
      >
        <div className="bmc-figure__dual-meta">
          <div className="bmc-figure__dual-side">
            <p className="bmc-figure__dual-name">{biomath.name}</p>
            <p className="bmc-figure__dual-title">{biomath.title}</p>
            <ul>
              {biomath.verbs.map((verb) => (
                <li key={verb}>{verb}</li>
              ))}
            </ul>
          </div>
          <div className="bmc-figure__dual-side">
            <p className="bmc-figure__dual-name">{saven.name}</p>
            <p className="bmc-figure__dual-title">{saven.title}</p>
            <ul>
              {saven.verbs.map((verb) => (
                <li key={verb}>{verb}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="bmc-figure__banner">{banner}</p>
      </DiagramFigure>
    </div>
  );
}

type EngineVisualProps = {
  visualLabel: string;
  caption: string;
  phases: readonly BioMathCoreEnginePhase[];
};

export function EngineVisual({ visualLabel, caption, phases }: EngineVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--engine">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/engine-phases-en-v2.webp`}
        alt={visualLabel}
        width={1920}
        height={1280}
        caption={caption}
        artboard="dark"
      >
        <ol className="bmc-figure__legend bmc-figure__legend--phases">
          {phases.map((phase, index) => (
            <li key={phase.id} className={`bmc-figure__legend-item bmc-figure__legend-item--${phase.id}`}>
              <span className="bmc-figure__legend-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <strong>{phase.label}</strong>
                <span className="bmc-figure__legend-body"> — {phase.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </DiagramFigure>
    </div>
  );
}

type SecondOpinionVisualProps = {
  visualLabel: string;
  caption: string;
  signalLabel: string;
  resultLabel: string;
  lanes: readonly BioMathCoreOpinionLane[];
  insight: string;
};

/** One unified Second Opinion panel — dual paths → verified / unified conclusion. */
export function SecondOpinionVisual({
  visualLabel,
  caption,
  signalLabel,
  resultLabel,
  lanes,
  insight,
}: SecondOpinionVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--opinion">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/second-opinion.webp`}
        alt={visualLabel}
        width={1536}
        height={1024}
        caption={caption}
        artboard="dark"
      >
        <div className="bmc-figure__opinion-legend" role="group" aria-label={visualLabel}>
          <span className="bmc-figure__chip bmc-figure__chip--signal">{signalLabel}</span>
          <ol className="bmc-figure__legend bmc-figure__legend--opinion">
            {lanes.map((lane) => (
              <li
                key={lane.id}
                className={`bmc-figure__legend-item bmc-figure__legend-item--${lane.id}`}
              >
                <strong>{lane.label}</strong>
                <span className="bmc-figure__legend-body"> — {lane.body}</span>
              </li>
            ))}
          </ol>
          <span className="bmc-figure__chip bmc-figure__chip--result">{resultLabel}</span>
        </div>
        <p className="bmc-figure__insight">{insight}</p>
      </DiagramFigure>
    </div>
  );
}

type BlackBoxVisualProps = {
  visualLabel: string;
  caption: string;
  sides: readonly BioMathCoreBlackBoxSide[];
};

export function BlackBoxVisual({ visualLabel, caption, sides }: BlackBoxVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--blackbox">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/black-box.webp`}
        alt={visualLabel}
        width={1024}
        height={1024}
        caption={caption}
        artboard="dark"
      >
        <ul className="bmc-figure__legend bmc-figure__legend--sides">
          {sides.map((side) => (
            <li
              key={side.id}
              className={`bmc-figure__legend-item bmc-figure__legend-item--${side.id}`}
            >
              <strong>{side.label}</strong>
              <span className="bmc-figure__legend-body"> — {side.body}</span>
            </li>
          ))}
        </ul>
      </DiagramFigure>
    </div>
  );
}

type OutputVisualProps = {
  visualLabel: string;
  caption: string;
  pillars: readonly BioMathCoreOutputPillar[];
  footer: string;
};

export function OutputVisual({
  visualLabel,
  caption,
  pillars,
  footer,
}: OutputVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--output">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/output-pillars.webp`}
        alt={visualLabel}
        width={1536}
        height={1024}
        caption={caption}
        artboard="dark"
      >
        <ol className="bmc-figure__legend bmc-figure__legend--pillars">
          {pillars.map((pillar, index) => (
            <li key={pillar.id}>
              <span className="bmc-figure__legend-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <strong>{pillar.label}</strong>
                <span className="bmc-figure__legend-body"> — {pillar.body}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="bmc-figure__banner">{footer}</p>
      </DiagramFigure>
    </div>
  );
}

type FormulaVisualProps = {
  visualLabel: string;
  caption: string;
  parts: readonly BioMathCoreFormulaPart[];
  equals: string;
  equalsDetail: string;
};

export function FormulaVisual({
  visualLabel,
  caption,
  parts,
  equals,
  equalsDetail,
}: FormulaVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--formula">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/formula.webp`}
        alt={visualLabel}
        width={1536}
        height={1024}
        caption={caption}
        artboard="light"
      >
        <p className="bmc-figure__formula-readout" aria-label={equals}>
          {parts.map((part, index) => (
            <span key={part.id}>
              {index > 0 ? (
                <span className="bmc-figure__formula-op" aria-hidden="true">
                  {" "}
                  +{" "}
                </span>
              ) : null}
              <strong>{part.label}</strong>
              <span className="bmc-figure__legend-role"> ({part.detail})</span>
            </span>
          ))}
          <span className="bmc-figure__formula-op" aria-hidden="true">
            {" "}
            ={" "}
          </span>
          <strong>{equals}</strong>
        </p>
        <p className="bmc-figure__caption bmc-figure__caption--inline">{equalsDetail}</p>
      </DiagramFigure>
    </div>
  );
}

type EnvironmentsVisualProps = {
  visualLabel: string;
  caption: string;
  cards: readonly BioMathCoreEnvironmentCard[];
  footer: string;
};

export function EnvironmentsVisual({
  visualLabel,
  caption,
  cards,
  footer,
}: EnvironmentsVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--envs">
      <DiagramFigure
        src={`${DIAGRAM_BASE}/environments.webp`}
        alt={visualLabel}
        width={1536}
        height={1024}
        caption={caption}
        artboard="light"
      >
        <ul className="bmc-figure__legend bmc-figure__legend--envs">
          {cards.map((card) => (
            <li key={card.id}>
              <strong>{card.label}</strong>
              <span className="bmc-figure__legend-body"> — {card.body}</span>
            </li>
          ))}
        </ul>
        <p className="bmc-figure__banner">{footer}</p>
      </DiagramFigure>
    </div>
  );
}

type SequenceVisualProps = {
  visualLabel: string;
  steps: readonly BioMathCoreSequenceStep[];
};

/** Premium foundation sequence — glass steps + continuous helix (not a plain arrow list). */
export function SequenceVisual({ visualLabel, steps }: SequenceVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--sequence" role="group" aria-label={visualLabel}>
      <div className="bmc-sequence">
        <div className="bmc-sequence__helix" aria-hidden="true">
          <svg viewBox="0 0 720 56" xmlns="http://www.w3.org/2000/svg" className="bmc-sequence__helix-svg">
            <defs>
              <linearGradient id="bmc-seq-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4a8fd4" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#4a8fd4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4a8fd4" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="bmc-seq-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e07a3d" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#e07a3d" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e07a3d" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path
              className="bmc-sequence__helix-path"
              d="M12 28 C70 6, 130 50, 190 28 S310 6, 370 28 S490 50, 550 28 S650 6, 708 28"
              fill="none"
              stroke="url(#bmc-seq-blue)"
              strokeWidth="2.5"
            />
            <path
              className="bmc-sequence__helix-path bmc-sequence__helix-path--alt"
              d="M12 28 C70 50, 130 6, 190 28 S310 50, 370 28 S490 6, 550 28 S650 50, 708 28"
              fill="none"
              stroke="url(#bmc-seq-orange)"
              strokeWidth="2.5"
            />
          </svg>
        </div>
        <ol className="bmc-sequence__list">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={
                step.emphasis
                  ? "bmc-sequence__step bmc-sequence__step--emphasis"
                  : "bmc-sequence__step"
              }
            >
              {index > 0 ? (
                <span className="bmc-sequence__connector" aria-hidden="true">
                  <span className="bmc-sequence__connector-line" />
                </span>
              ) : null}
              <div className="bmc-sequence__card">
                <span className="bmc-sequence__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="bmc-sequence__label">{step.label}</span>
                {step.detail ? (
                  <span className="bmc-sequence__detail">{step.detail}</span>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
