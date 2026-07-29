import Image from "next/image";

import type {
  BioMathCoreEnvironmentCard,
  BioMathCoreFormulaPart,
  BioMathCoreLivingPoint,
  BioMathCoreRoleSide,
  BioMathCoreStackLayer,
} from "@/content/pages/en/biomath-core";

const FIGURE_SIZES = "(max-width: 900px) 100vw, 920px";

type CapabilityFigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

function CapabilityFigure({
  src,
  alt,
  width,
  height,
  priority = false,
}: CapabilityFigureProps) {
  return (
    <figure className="bmc-viz__figure">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={FIGURE_SIZES}
        className="bmc-viz__image"
        priority={priority}
      />
    </figure>
  );
}

type LivingModelVisualProps = {
  imageSrc: string;
  imageAlt: string;
  visualLabel: string;
  points: readonly BioMathCoreLivingPoint[];
};

/** Owner living-model graphic + English callouts (D-0231). */
export function LivingModelVisual({
  imageSrc,
  imageAlt,
  visualLabel,
  points,
}: LivingModelVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--living" aria-label={visualLabel}>
      <CapabilityFigure
        src={imageSrc}
        alt={imageAlt}
        width={1024}
        height={559}
        priority
      />
      <ol className="bmc-viz__living-points">
        {points.map((point, index) => (
          <li key={point.id} className="bmc-viz__living-point">
            <span className="bmc-viz__living-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{point.body}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

type LayerStackVisualProps = {
  imageSrc: string;
  imageAlt: string;
  layers: readonly BioMathCoreStackLayer[];
  callout: string;
};

export function LayerStackVisual({
  imageSrc,
  imageAlt,
  layers,
  callout,
}: LayerStackVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--stack">
      <CapabilityFigure
        src={imageSrc}
        alt={imageAlt}
        width={1024}
        height={533}
      />
      <ol className="bmc-viz__stack-list">
        {layers.map((layer, index) => (
          <li
            key={layer.id}
            className={
              layer.id === "biomath-core"
                ? "bmc-viz__stack-layer bmc-viz__stack-layer--core"
                : "bmc-viz__stack-layer"
            }
          >
            <span className="bmc-viz__stack-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="bmc-viz__stack-copy">
              <p className="bmc-viz__stack-name">{layer.name}</p>
              <p className="bmc-viz__stack-role">{layer.role}</p>
              <p className="bmc-viz__stack-detail">{layer.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="bmc-viz__stack-callout">{callout}</p>
    </div>
  );
}

type DualRolesVisualProps = {
  imageSrc: string;
  imageAlt: string;
  biomath: BioMathCoreRoleSide;
  saven: BioMathCoreRoleSide;
  banner: string;
};

export function DualRolesVisual({
  imageSrc,
  imageAlt,
  biomath,
  saven,
  banner,
}: DualRolesVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--dual">
      <CapabilityFigure
        src={imageSrc}
        alt={imageAlt}
        width={1024}
        height={560}
      />
      <div className="bmc-viz__dual-grid">
        <div className="bmc-viz__dual-piece bmc-viz__dual-piece--biomath">
          <p className="bmc-viz__dual-name">{biomath.name}</p>
          <p className="bmc-viz__dual-title">{biomath.title}</p>
          <ul className="bmc-viz__dual-verbs">
            {biomath.verbs.map((verb) => (
              <li key={verb}>{verb}</li>
            ))}
          </ul>
        </div>
        <div className="bmc-viz__dual-piece bmc-viz__dual-piece--saven">
          <p className="bmc-viz__dual-name">{saven.name}</p>
          <p className="bmc-viz__dual-title">{saven.title}</p>
          <ul className="bmc-viz__dual-verbs">
            {saven.verbs.map((verb) => (
              <li key={verb}>{verb}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="bmc-viz__dual-banner">{banner}</p>
    </div>
  );
}

type FormulaVisualProps = {
  imageSrc: string;
  imageAlt: string;
  parts: readonly BioMathCoreFormulaPart[];
  equals: string;
  equalsDetail: string;
};

export function FormulaVisual({
  imageSrc,
  imageAlt,
  parts,
  equals,
  equalsDetail,
}: FormulaVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--formula" role="group" aria-label={equals}>
      <CapabilityFigure
        src={imageSrc}
        alt={imageAlt}
        width={1024}
        height={554}
      />
      <div className="bmc-viz__formula-row">
        {parts.map((part, index) => (
          <div key={part.id} className="bmc-viz__formula-group">
            {index > 0 ? (
              <span className="bmc-viz__formula-op" aria-hidden="true">
                +
              </span>
            ) : null}
            <div className={`bmc-viz__formula-part bmc-viz__formula-part--${part.id}`}>
              <p className="bmc-viz__formula-label">{part.label}</p>
              <p className="bmc-viz__formula-detail">{part.detail}</p>
            </div>
          </div>
        ))}
        <span className="bmc-viz__formula-op" aria-hidden="true">
          =
        </span>
        <div className="bmc-viz__formula-result">
          <p className="bmc-viz__formula-equals">{equals}</p>
          <p className="bmc-viz__formula-equals-detail">{equalsDetail}</p>
        </div>
      </div>
    </div>
  );
}

type EnvironmentsVisualProps = {
  imageSrc: string;
  imageAlt: string;
  cards: readonly BioMathCoreEnvironmentCard[];
  footer: string;
};

export function EnvironmentsVisual({
  imageSrc,
  imageAlt,
  cards,
  footer,
}: EnvironmentsVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--envs">
      <CapabilityFigure
        src={imageSrc}
        alt={imageAlt}
        width={1024}
        height={568}
      />
      <ul className="bmc-viz__env-grid">
        {cards.map((card) => (
          <li key={card.id} className={`bmc-viz__env-card bmc-viz__env-card--${card.id}`}>
            <p className="bmc-viz__env-label">{card.label}</p>
            <p className="bmc-viz__env-body">{card.body}</p>
          </li>
        ))}
      </ul>
      <p className="bmc-viz__env-footer">{footer}</p>
    </div>
  );
}
