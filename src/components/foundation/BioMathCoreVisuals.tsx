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
  badgeOne: string;
  badgeHuman: string;
  points: readonly BioMathCoreLivingPoint[];
};

/** Site-native living human model (D-0233) — digital silhouette + continuous principles. */
export function LivingModelVisual({
  visualLabel,
  badgeOne,
  badgeHuman,
  points,
}: LivingModelVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--living" role="group" aria-label={visualLabel}>
      <div className="bmc-viz__living-stage">
        <div className="bmc-viz__living-badge" aria-hidden="true">
          <span className="bmc-viz__living-badge-one">{badgeOne}</span>
          <span className="bmc-viz__living-badge-human">{badgeHuman}</span>
        </div>
        <svg
          className="bmc-viz__svg bmc-viz__svg--living"
          viewBox="0 0 220 320"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bmc-living-mesh" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a8fd4" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#4a8fd4" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#e07a3d" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="bmc-living-fill" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#4a8fd4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#e07a3d" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="bmc-living-platform" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4a8fd4" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#4a8fd4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#4a8fd4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Platform */}
          <ellipse cx="110" cy="292" rx="72" ry="14" fill="url(#bmc-living-platform)" />
          <ellipse
            cx="110"
            cy="292"
            rx="58"
            ry="10"
            fill="none"
            stroke="#4a8fd4"
            strokeOpacity="0.45"
            strokeWidth="1.25"
          />
          <ellipse
            cx="110"
            cy="292"
            rx="38"
            ry="6"
            fill="none"
            stroke="#d4a84b"
            strokeOpacity="0.4"
            strokeWidth="1"
          />

          {/* Mesh grid behind figure */}
          <g stroke="#4a8fd4" strokeOpacity="0.12" strokeWidth="0.75">
            <path d="M40 40 H180 M40 70 H180 M40 100 H180 M40 130 H180 M40 160 H180 M40 190 H180 M40 220 H180 M40 250 H180" />
            <path d="M55 30 V270 M80 30 V270 M110 30 V270 M140 30 V270 M165 30 V270" />
          </g>

          {/* Digital human silhouette (A-pose wireframe) */}
          <g fill="url(#bmc-living-fill)" stroke="url(#bmc-living-mesh)" strokeWidth="1.6" strokeLinejoin="round">
            {/* Head */}
            <ellipse cx="110" cy="48" rx="18" ry="22" />
            {/* Neck + torso */}
            <path d="M102 68 L98 78 L78 96 L72 168 L88 168 L92 118 L110 122 L128 118 L132 168 L148 168 L142 96 L122 78 L118 68 Z" />
            {/* Arms */}
            <path d="M78 96 L48 128 L42 158 L54 162 L62 136 L88 108 Z" />
            <path d="M142 96 L172 128 L178 158 L166 162 L158 136 L132 108 Z" />
            {/* Legs */}
            <path d="M88 168 L82 236 L78 278 L94 280 L100 236 L110 178 Z" />
            <path d="M132 168 L138 236 L142 278 L126 280 L120 236 L110 178 Z" />
          </g>

          {/* Mesh contour accents */}
          <g fill="none" stroke="#4a8fd4" strokeOpacity="0.55" strokeWidth="0.9">
            <path d="M94 88 Q110 96 126 88" />
            <path d="M86 112 Q110 124 134 112" />
            <path d="M80 140 Q110 152 140 140" />
            <ellipse cx="110" cy="48" rx="12" ry="14" />
          </g>

          {/* Scan / focus nodes */}
          <g>
            <circle cx="110" cy="48" r="3.2" fill="#e07a3d" />
            <circle cx="110" cy="118" r="3.2" fill="#d4a84b" />
            <circle cx="72" cy="148" r="2.6" fill="#4a8fd4" />
            <circle cx="148" cy="148" r="2.6" fill="#4a8fd4" />
            <circle cx="110" cy="210" r="2.8" fill="#e07a3d" />
          </g>

          {/* HUD callout lines */}
          <g stroke="#4a8fd4" strokeOpacity="0.4" strokeWidth="1" fill="none">
            <path d="M128 48 H178" />
            <path d="M128 118 H178" />
            <path d="M92 210 H42" />
          </g>
          <g fill="#4a8fd4" fillOpacity="0.55">
            <rect x="178" y="42" width="22" height="6" />
            <rect x="178" y="54" width="14" height="3" />
            <rect x="178" y="112" width="22" height="6" />
            <rect x="178" y="124" width="16" height="3" />
            <rect x="20" y="204" width="22" height="6" />
            <rect x="20" y="216" width="14" height="3" />
          </g>
        </svg>
      </div>

      <ol className="bmc-viz__living-points">
        {points.map((point, index) => (
          <li
            key={point.id}
            className={`bmc-viz__living-point bmc-viz__living-point--${point.id}`}
          >
            <span className="bmc-viz__living-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="bmc-viz__living-point-body">{point.body}</span>
            <span className="bmc-viz__living-point-mark" aria-hidden="true" />
          </li>
        ))}
      </ol>
    </div>
  );
}

type LayerStackVisualProps = {
  layers: readonly BioMathCoreStackLayer[];
  calloutEyebrow: string;
  callout: string;
};

export function LayerStackVisual({
  layers,
  calloutEyebrow,
  callout,
}: LayerStackVisualProps) {
  return (
    <div className="bmc-viz bmc-viz--stack">
      <div className="bmc-viz__stack-layout">
        <ol className="bmc-viz__stack-list" aria-label="Four-layer stack">
          {layers.map((layer, index) => (
            <li
              key={layer.id}
              className={`bmc-viz__stack-layer bmc-viz__stack-layer--${layer.id}`}
              style={{ ["--bmc-stack-i" as string]: String(index) }}
            >
              <div className="bmc-viz__stack-plate" aria-hidden="true">
                {layer.id === "saven" ? (
                  <svg
                    className="bmc-viz__stack-helix"
                    viewBox="0 0 120 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 14 C20 2, 40 26, 56 14 S92 2, 116 14"
                      fill="none"
                      stroke="#e07a3d"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 14 C20 26, 40 2, 56 14 S92 26, 116 14"
                      fill="none"
                      stroke="#4a8fd4"
                      strokeWidth="2"
                    />
                  </svg>
                ) : null}
                {layer.id === "body" ? (
                  <svg
                    className="bmc-viz__stack-mesh"
                    viewBox="0 0 120 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 6 H112 M8 14 H112 M8 22 H112 M24 4 V24 M48 4 V24 M72 4 V24 M96 4 V24"
                      fill="none"
                      stroke="#4a8fd4"
                      strokeOpacity="0.45"
                      strokeWidth="1"
                    />
                    <path
                      d="M16 8 L40 20 M40 8 L64 20 M64 8 L88 20 M88 8 L112 20"
                      fill="none"
                      stroke="#e07a3d"
                      strokeOpacity="0.35"
                      strokeWidth="1"
                    />
                  </svg>
                ) : null}
                {layer.id === "biomath-core" ? (
                  <span className="bmc-viz__stack-core-orb" />
                ) : null}
              </div>
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

        <aside className="bmc-viz__stack-callout">
          <p className="bmc-viz__stack-callout-eyebrow">{calloutEyebrow}</p>
          <p className="bmc-viz__stack-callout-body">{callout}</p>
        </aside>
      </div>
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
