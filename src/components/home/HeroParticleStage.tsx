"use client";

import dynamic from "next/dynamic";

/**
 * Client boundary for the WebGL particle hero (D-0255).
 * `next/dynamic` with `ssr: false` is only legal inside Client Components.
 */
const HeroParticleScene = dynamic(
  () => import("./HeroParticleScene").then((mod) => mod.HeroParticleScene),
  {
    ssr: false,
    loading: () => (
      <div
        className="pw-particle-hero pw-particle-hero--shell"
        aria-hidden="true"
        role="presentation"
      />
    ),
  },
);

type HeroParticleStageProps = {
  ariaLabel: string;
};

export function HeroParticleStage({ ariaLabel }: HeroParticleStageProps) {
  return <HeroParticleScene ariaLabel={ariaLabel} />;
}
