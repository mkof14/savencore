import type {
  BioMathCoreBlackBoxSide,
  BioMathCoreDualModelStep,
  BioMathCoreEnginePhase,
  BioMathCoreEnvironmentCard,
  BioMathCoreFormulaPart,
  BioMathCoreLivingPoint,
  BioMathCoreOpinionLane,
  BioMathCoreOutputPillar,
  BioMathCoreRoleSide,
  BioMathCoreStackLayer,
} from "@/content/pages/en/biomath-core";

type LivingModelVisualProps = {
  visualLabel: string;
  points: readonly BioMathCoreLivingPoint[];
};

/** Site-native living-model diagram (D-0232) — owner concept adapted, not pasted. */
export function LivingModelVisual({ visualLabel, points }: LivingModelVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--living" role="img" aria-label={visualLabel}>
      <svg
        className="bmc-viz__svg bmc-viz__svg--living"
        viewBox="0 0 640 280"
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
        <ellipse
          cx="320"
          cy="140"
          rx="100"
          ry="100"
          fill="url(#bmc-living-core)"
          stroke="url(#bmc-living-ring)"
          strokeWidth="2.5"
        />
        <ellipse
          cx="320"
          cy="140"
          rx="66"
          ry="66"
          fill="none"
          stroke="#d4a84b"
          strokeOpacity="0.45"
          strokeWidth="1.25"
          strokeDasharray="4 6"
        />
        <circle cx="320" cy="140" r="30" fill="#0b1524" stroke="#e07a3d" strokeWidth="2" />
        <text
          x="320"
          y="136"
          textAnchor="middle"
          fill="#f4f1ea"
          fontSize="10"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight="600"
        >
          ONE
        </text>
        <text
          x="320"
          y="150"
          textAnchor="middle"
          fill="#d4a84b"
          fontSize="9"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight="600"
        >
          HUMAN
        </text>
        <circle cx="320" cy="38" r="6" fill="#4a8fd4" />
        <circle cx="440" cy="108" r="6" fill="#d4a84b" />
        <circle cx="412" cy="220" r="6" fill="#e07a3d" />
        <circle cx="228" cy="220" r="6" fill="#4a8fd4" />
        <circle cx="200" cy="108" r="6" fill="#d4a84b" />
        <path
          d="M320 44 Q388 82 434 108"
          fill="none"
          stroke="#4a8fd4"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M434 108 Q452 168 412 214"
          fill="none"
          stroke="#d4a84b"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M412 214 Q320 252 228 214"
          fill="none"
          stroke="#e07a3d"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M228 214 Q188 168 206 108"
          fill="none"
          stroke="#4a8fd4"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
        <path
          d="M206 108 Q248 64 320 44"
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

type EngineVisualProps = {
  phases: readonly BioMathCoreEnginePhase[];
};

export function EngineVisual({ phases }: EngineVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--engine">
      <ol className="bmc-viz__engine-flow">
        {phases.map((phase, index) => (
          <li key={phase.id} className={`bmc-viz__engine-phase bmc-viz__engine-phase--${phase.id}`}>
            {index > 0 ? (
              <span className="bmc-viz__engine-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
            <div className="bmc-viz__engine-card">
              <p className="bmc-viz__engine-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="bmc-viz__engine-label">{phase.label}</p>
              <p className="bmc-viz__engine-body">{phase.body}</p>
              {phase.tags && phase.tags.length > 0 ? (
                <ul className="bmc-viz__engine-tags">
                  {phase.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
              {phase.id === "core" ? (
                <div className="bmc-viz__engine-core" aria-hidden="true">
                  <span className="bmc-viz__engine-core-ring" />
                  <span className="bmc-viz__engine-core-dot" />
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

type SecondOpinionVisualProps = {
  signalLabel: string;
  resultLabel: string;
  lanes: readonly BioMathCoreOpinionLane[];
  dualModelHeading: string;
  dualModelSteps: readonly BioMathCoreDualModelStep[];
  insight: string;
};

export function SecondOpinionVisual({
  signalLabel,
  resultLabel,
  lanes,
  dualModelHeading,
  dualModelSteps,
  insight,
}: SecondOpinionVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--opinion">
      <div className="bmc-viz__opinion-flow" role="group" aria-label={signalLabel}>
        <div className="bmc-viz__opinion-node bmc-viz__opinion-node--signal">
          <span className="bmc-viz__opinion-node-label">{signalLabel}</span>
        </div>
        <div className="bmc-viz__opinion-lanes">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className={`bmc-viz__opinion-lane bmc-viz__opinion-lane--${lane.id}`}
            >
              <p className="bmc-viz__opinion-lane-label">{lane.label}</p>
              <p className="bmc-viz__opinion-lane-body">{lane.body}</p>
            </div>
          ))}
        </div>
        <div className="bmc-viz__opinion-node bmc-viz__opinion-node--result">
          <span className="bmc-viz__opinion-node-label">{resultLabel}</span>
        </div>
      </div>

      <h3 className="bmc-viz__subhead">{dualModelHeading}</h3>
      <ol className="bmc-viz__dual-model">
        {dualModelSteps.map((step, index) => (
          <li
            key={step.id}
            className={`bmc-viz__dual-model-step bmc-viz__dual-model-step--${step.id}`}
          >
            {index > 0 ? (
              <span className="bmc-viz__dual-model-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
            <div className="bmc-viz__dual-model-card">
              <p className="bmc-viz__dual-model-label">{step.label}</p>
              <p className="bmc-viz__dual-model-body">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="bmc-viz__opinion-insight">{insight}</p>
    </div>
  );
}

type BlackBoxVisualProps = {
  sides: readonly BioMathCoreBlackBoxSide[];
};

export function BlackBoxVisual({ sides }: BlackBoxVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--blackbox">
      <div className="bmc-viz__blackbox-frame" role="group">
        {sides.map((side) => (
          <div
            key={side.id}
            className={`bmc-viz__blackbox-side bmc-viz__blackbox-side--${side.id}`}
          >
            <div className="bmc-viz__blackbox-glyph" aria-hidden="true">
              {side.id === "intelligence" ? (
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="18" fill="none" stroke="#e07a3d" strokeWidth="1.75" />
                  <circle cx="32" cy="32" r="4" fill="#e07a3d" />
                  <circle cx="18" cy="22" r="3" fill="#d4a84b" />
                  <circle cx="46" cy="22" r="3" fill="#d4a84b" />
                  <circle cx="18" cy="42" r="3" fill="#4a8fd4" />
                  <circle cx="46" cy="42" r="3" fill="#4a8fd4" />
                  <path
                    d="M32 28 L18 22 M32 28 L46 22 M32 36 L18 42 M32 36 L46 42"
                    stroke="#e07a3d"
                    strokeOpacity="0.55"
                    strokeWidth="1.25"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 10 L50 18 V34 C50 46 40 54 32 56 C24 54 14 46 14 34 V18 Z"
                    fill="none"
                    stroke="#4a8fd4"
                    strokeWidth="2"
                  />
                  <rect
                    x="26"
                    y="28"
                    width="12"
                    height="14"
                    rx="0"
                    fill="none"
                    stroke="#4a8fd4"
                    strokeWidth="1.75"
                  />
                  <path
                    d="M29 28 V24 C29 21.2 31 19 32 19 C33 19 35 21.2 35 24 V28"
                    fill="none"
                    stroke="#4a8fd4"
                    strokeWidth="1.75"
                  />
                </svg>
              )}
            </div>
            <p className="bmc-viz__blackbox-label">{side.label}</p>
            <p className="bmc-viz__blackbox-body">{side.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type OutputVisualProps = {
  pillars: readonly BioMathCoreOutputPillar[];
  footer: string;
};

export function OutputVisual({ pillars, footer }: OutputVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--output">
      <ul className="bmc-viz__pillar-grid">
        {pillars.map((pillar) => (
          <li
            key={pillar.id}
            className={`bmc-viz__pillar bmc-viz__pillar--${pillar.id}`}
          >
            <p className="bmc-viz__pillar-label">{pillar.label}</p>
            <p className="bmc-viz__pillar-body">{pillar.body}</p>
          </li>
        ))}
      </ul>
      <p className="bmc-viz__output-footer">{footer}</p>
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
