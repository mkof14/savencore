"use client";

import dynamic from "next/dynamic";

/**
 * Client boundary for the Lab particle experiment (D-0264).
 * `next/dynamic` with `ssr: false` is only legal inside Client Components.
 */
const LabParticleScene = dynamic(
  () => import("./LabParticleScene").then((mod) => mod.LabParticleScene),
  {
    ssr: false,
    loading: () => (
      <div
        className="lab-particle-stage lab-particle-stage--shell"
        aria-hidden="true"
        role="presentation"
      />
    ),
  },
);

type LabParticleStageProps = {
  ariaLabel: string;
};

export function LabParticleStage({ ariaLabel }: LabParticleStageProps) {
  return <LabParticleScene ariaLabel={ariaLabel} />;
}
