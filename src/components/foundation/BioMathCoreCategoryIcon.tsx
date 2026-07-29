import type { BioMathCoreCategoryId } from "@/content/biomath-core/scope";

type BioMathCoreCategoryIconProps = {
  id: BioMathCoreCategoryId;
};

/** Compact monoline icons for BioMath Core category cards — no neon (D-0228). */
export function BioMathCoreCategoryIcon({ id }: BioMathCoreCategoryIconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true as const,
    focusable: false as const,
    width: 20,
    height: 20,
  };

  switch (id) {
    case "critical-health":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
        </svg>
      );
    case "everyday-well-being":
      return (
        <svg {...common}>
          <path d="M12 3l1.5 5.5H19l-4.5 3.4L16 18l-4-2.8L8 18l1.5-6.1L5 8.5h5.5L12 3z" />
        </svg>
      );
    case "longevity-anti-aging":
      return (
        <svg {...common}>
          <path d="M6 16l4-8 3 5 2-3 3 6" />
          <path d="M5 19h14" />
        </svg>
      );
    case "mental-well-being":
      return (
        <svg {...common}>
          <path d="M8 14c0-3 2-5 4-5s4 2 4 5" />
          <path d="M7 9a5 5 0 0 1 10 0v6a3 3 0 0 1-3 3h-1l-2 2v-2H10a3 3 0 0 1-3-3V9z" />
        </svg>
      );
    case "fitness-performance":
      return (
        <svg {...common}>
          <path d="M4 10v4M7 8v8M10 11h4M17 8v8M20 10v4" />
        </svg>
      );
    case "womens-health":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="3.5" />
          <path d="M12 12.5V19M9.5 16h5" />
        </svg>
      );
    case "mens-health":
      return (
        <svg {...common}>
          <circle cx="10" cy="12" r="4" />
          <path d="M13 9l5-5M15 4h3v3" />
        </svg>
      );
    case "beauty-skincare":
      return (
        <svg {...common}>
          <path d="M12 4c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10z" />
        </svg>
      );
    case "nutrition-diet":
      return (
        <svg {...common}>
          <path d="M12 20c4-3 6-6 6-10a6 6 0 1 0-12 0c0 4 2 7 6 10z" />
          <path d="M12 8v4" />
        </svg>
      );
    case "sleep-recovery":
      return (
        <svg {...common}>
          <path d="M15 4a7 7 0 1 0 5 11A8 8 0 0 1 15 4z" />
        </svg>
      );
    case "environmental-health":
      return (
        <svg {...common}>
          <path d="M12 20V10" />
          <path d="M12 10c-3-1-5-4-5-7 4 0 6 2 7 5 1-3 3-5 7-5 0 3-2 6-5 7" />
        </svg>
      );
    case "family-health":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.2" />
          <circle cx="16" cy="8" r="2.2" />
          <circle cx="12" cy="11" r="2" />
          <path d="M4 19c1-3 3-4.5 4-4.5S10 16 12 16s2-1.5 4-1.5 3 1.5 4 4.5" />
        </svg>
      );
    case "preventive-medicine":
      return (
        <svg {...common}>
          <path d="M3 12h4l2-5 3 10 2-5h7" />
        </svg>
      );
    case "biohacking":
      return (
        <svg {...common}>
          <path d="M13 3L6 13h5l-1 8 8-11h-5l0-7z" />
        </svg>
      );
    case "elderly-care":
      return (
        <svg {...common}>
          <path d="M4 11l8-6 8 6v8H4v-8z" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "eye-health":
      return (
        <svg {...common}>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "digital-therapy":
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" />
          <path d="M10 18h4" />
        </svg>
      );
    case "sexual-longevity":
      return (
        <svg {...common}>
          <path d="M12 3c2.5 3 4 5.5 4 8a4 4 0 1 1-8 0c0-2.5 1.5-5 4-8z" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case "mens-sexual-health":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "womens-sexual-health":
      return (
        <svg {...common}>
          <circle cx="9" cy="12" r="3.5" />
          <circle cx="15" cy="12" r="3.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
  }
}
