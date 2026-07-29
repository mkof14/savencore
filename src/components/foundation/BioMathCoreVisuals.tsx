import type {
  BioMathCoreEnvironmentCard,
  BioMathCoreFormulaPart,
  BioMathCoreLivingPoint,
  BioMathCoreRoleSide,
  BioMathCoreStackLayer,
} from "@/content/pages/en/biomath-core";

type LivingModelVisualProps = {
  visualLabel: string;
  points: readonly BioMathCoreLivingPoint[];
};

/** Site-native living-model diagram (D-0230) — inspired by owner references, not pasted. */
export function LivingModelVisual({ visualLabel, points }: LivingModelVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--living" role="img" aria-label={visualLabel}>
      <svg
        className="bmc-viz__svg bmc-viz__svg--living"
        viewBox="0 0 640 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bmc-living-core" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#e07a3d" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#4a8fd4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0b1524" stopOpacity="0.05" />
          </radialGradient>
          <linearGradient id="bmc-living-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a8fd4" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#d4a84b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e07a3d" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <rect width="640" height="320" fill="transparent" />
        <ellipse
          cx="320"
          cy="160"
          rx="118"
          ry="118"
          fill="url(#bmc-living-core)"
          stroke="url(#bmc-living-ring)"
          strokeWidth="2.5"
        />
        <ellipse
          cx="320"
          cy="160"
          rx="78"
          ry="78"
          fill="none"
          stroke="#d4a84b"
          strokeOpacity="0.45"
          strokeWidth="1.25"
          strokeDasharray="4 6"
        />
        <circle cx="320" cy="160" r="36" fill="#0b1524" stroke="#e07a3d" strokeWidth="2" />
        <text
          x="320"
          y="156"
          textAnchor="middle"
          fill="#f4f1ea"
          fontSize="11"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight="600"
        >
          ONE
        </text>
        <text
          x="320"
          y="172"
          textAnchor="middle"
          fill="#d4a84b"
          fontSize="10"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight="600"
        >
          HUMAN
        </text>
        {/* orbit nodes */}
        <circle cx="320" cy="42" r="7" fill="#4a8fd4" />
        <circle cx="458" cy="120" r="7" fill="#d4a84b" />
        <circle cx="430" cy="250" r="7" fill="#e07a3d" />
        <circle cx="210" cy="250" r="7" fill="#4a8fd4" />
        <circle cx="182" cy="120" r="7" fill="#d4a84b" />
        <path
          d="M320 49 Q400 90 451 120"
          fill="none"
          stroke="#4a8fd4"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M451 120 Q470 190 430 243"
          fill="none"
          stroke="#d4a84b"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M430 243 Q320 290 210 243"
          fill="none"
          stroke="#e07a3d"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M210 243 Q170 190 189 120"
          fill="none"
          stroke="#4a8fd4"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M189 120 Q240 70 320 49"
          fill="none"
          stroke="#d4a84b"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
      </svg>
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
  layers: readonly BioMathCoreStackLayer[];
  callout: string;
};

export function LayerStackVisual({ layers, callout }: LayerStackVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--stack">
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
  biomath: BioMathCoreRoleSide;
  saven: BioMathCoreRoleSide;
  banner: string;
};

export function DualRolesVisual({ biomath, saven, banner }: DualRolesVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--dual">
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
        <div className="bmc-viz__dual-join" aria-hidden="true">
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 40 L32 16 L48 16 L72 40 L48 64 L32 64 Z"
              fill="none"
              stroke="#d4a84b"
              strokeWidth="2"
            />
            <path
              d="M28 40 L40 28 L52 40 L40 52 Z"
              fill="#e07a3d"
              fillOpacity="0.35"
              stroke="#4a8fd4"
              strokeWidth="1.5"
            />
          </svg>
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
  parts: readonly BioMathCoreFormulaPart[];
  equals: string;
  equalsDetail: string;
};

export function FormulaVisual({ parts, equals, equalsDetail }: FormulaVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--formula" role="group" aria-label={equals}>
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
  cards: readonly BioMathCoreEnvironmentCard[];
  footer: string;
};

export function EnvironmentsVisual({ cards, footer }: EnvironmentsVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--envs">
      <div className="bmc-viz__helix" aria-hidden="true">
        <svg viewBox="0 0 720 48" xmlns="http://www.w3.org/2000/svg" className="bmc-viz__helix-svg">
          <path
            d="M20 24 C80 4, 140 44, 200 24 S320 4, 380 24 S500 44, 560 24 S660 4, 700 24"
            fill="none"
            stroke="#4a8fd4"
            strokeWidth="1.75"
            strokeOpacity="0.65"
          />
          <path
            d="M20 24 C80 44, 140 4, 200 24 S320 44, 380 24 S500 4, 560 24 S660 44, 700 24"
            fill="none"
            stroke="#e07a3d"
            strokeWidth="1.75"
            strokeOpacity="0.55"
          />
        </svg>
      </div>
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
