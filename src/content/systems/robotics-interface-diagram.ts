/**
 * SAVEN Robotics Interface — hub diagram labels (D-0189–D-0193).
 * Architecture framing only; not an operational deployment claim.
 */

export type RoboticsInterfaceDiagramLabels = {
  title: string;
  lede: string;
  saven: string;
  interfaceRing: string;
  manipulators: string;
  mobileRobots: string;
  trolleyRobots: string;
  assistiveForms: string;
  sensors: string;
  cue: string;
  note: string;
};

export const roboticsInterfaceDiagramEn: RoboticsInterfaceDiagramLabels = {
  title: "One control and communication system",
  lede: "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.",
  saven: "SAVEN",
  interfaceRing: "SAVEN Robotics Interface",
  manipulators: "Manipulators",
  mobileRobots: "Mobile robots",
  trolleyRobots: "Trolley robots",
  assistiveForms: "Assistive forms",
  sensors: "Sensors",
  cue: "Communicate · coordinate",
  note: "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.",
};
