/**
 * Labs overview — SAVEN data/action loop diagram labels (D-0166).
 * Architecture framing only; not an operational deployment claim.
 */

export type LabsDataLoopLabels = {
  title: string;
  lede: string;
  humanDataModel: string;
  saven: string;
  bioMathCore: string;
  physicalLayer: string;
  robots: string;
  manipulators: string;
  sensors: string;
  ingress: string;
  analysis: string;
  outbound: string;
  returnFlow: string;
  ascent: string;
  note: string;
};

export const labsDataLoopEn: LabsDataLoopLabels = {
  title: "From human understanding to physical action",
  lede: "An architecture loop: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.",
  humanDataModel: "Human Data Model",
  saven: "SAVEN",
  bioMathCore: "BioMath Core",
  physicalLayer: "Executive devices",
  robots: "Robots",
  manipulators: "Manipulators",
  sensors: "Sensors",
  ingress: "Context in",
  analysis: "Analyze · roles · events · actions",
  outbound: "Distribute & execute",
  returnFlow: "Sense & return",
  ascent: "When needed",
  note: "Architecture and engineering direction — not a claim of operational hospital deployment.",
};
