/**
 * BioMath Core model scope (D-0227) — owner-authorized coverage numbers.
 * Architecture / In Development model scope — not an Operational commercial catalog.
 */

export const BIOMATH_CORE_CATEGORY_COUNT = 20;
export const BIOMATH_CORE_SERVICES_LABEL = "200+";

export type BioMathCoreCategoryId =
  | "critical-health"
  | "everyday-well-being"
  | "longevity-anti-aging"
  | "mental-well-being"
  | "fitness-performance"
  | "womens-health"
  | "mens-health"
  | "beauty-skincare"
  | "nutrition-diet"
  | "sleep-recovery"
  | "environmental-health"
  | "family-health"
  | "preventive-medicine"
  | "biohacking"
  | "elderly-care"
  | "eye-health"
  | "digital-therapy"
  | "sexual-longevity"
  | "mens-sexual-health"
  | "womens-sexual-health";

export type BioMathCoreCategory = {
  readonly id: BioMathCoreCategoryId;
  readonly label: string;
};

/** English canonical labels from owner graphic (D-0227). */
export const biomathCoreCategoriesEn: readonly BioMathCoreCategory[] = [
  { id: "critical-health", label: "Critical Health" },
  { id: "everyday-well-being", label: "Everyday Well-being" },
  { id: "longevity-anti-aging", label: "Longevity and Anti-Aging" },
  { id: "mental-well-being", label: "Mental Well-being" },
  { id: "fitness-performance", label: "Fitness and Performance" },
  { id: "womens-health", label: "Women's Health" },
  { id: "mens-health", label: "Men's Health" },
  { id: "beauty-skincare", label: "Beauty and Skincare" },
  { id: "nutrition-diet", label: "Nutrition and Diet" },
  { id: "sleep-recovery", label: "Sleep and Recovery" },
  { id: "environmental-health", label: "Environmental Health" },
  { id: "family-health", label: "Family Health" },
  { id: "preventive-medicine", label: "Preventive Medicine" },
  { id: "biohacking", label: "Biohacking" },
  { id: "elderly-care", label: "Elderly Care" },
  { id: "eye-health", label: "Eye Health" },
  { id: "digital-therapy", label: "Digital Therapy" },
  { id: "sexual-longevity", label: "Sexual Longevity" },
  { id: "mens-sexual-health", label: "Men's Sexual Health" },
  { id: "womens-sexual-health", label: "Women's Sexual Health" },
];
