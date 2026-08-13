/**
 * BioMath Core model scope (D-0227 / D-0229) — owner-authorized coverage.
 * Architecture model catalog — not an Operational commercial storefront.
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
  readonly serviceCount: number;
  readonly blurb: string;
};

/** English canonical labels, counts, and blurbs (D-0229). */
export const biomathCoreCategoriesEn: readonly BioMathCoreCategory[] = [
  {
    id: "critical-health",
    label: "Critical Health",
    serviceCount: 18,
    blurb: "Health-context modeling and risk assessment for serious conditions — architecture scope, not a clinical product",
  },
  {
    id: "everyday-well-being",
    label: "Everyday Wellness",
    serviceCount: 15,
    blurb: "Daily health optimization and wellness practices",
  },
  {
    id: "longevity-anti-aging",
    label: "Longevity & Anti-Aging",
    serviceCount: 15,
    blurb: "Aging-science context for long-horizon human modeling",
  },
  {
    id: "mental-well-being",
    label: "Mental Wellness",
    serviceCount: 11,
    blurb: "Psychological health and cognitive optimization",
  },
  {
    id: "fitness-performance",
    label: "Fitness & Performance",
    serviceCount: 19,
    blurb: "Athletic training and physical optimization",
  },
  {
    id: "womens-health",
    label: "Women's Health",
    serviceCount: 8,
    blurb: "Specialized healthcare for women",
  },
  {
    id: "mens-health",
    label: "Men's Health",
    serviceCount: 8,
    blurb: "Specialized healthcare for men",
  },
  {
    id: "beauty-skincare",
    label: "Beauty & Skincare",
    serviceCount: 10,
    blurb: "Dermatological health and cosmetic optimization",
  },
  {
    id: "nutrition-diet",
    label: "Nutrition & Diet",
    serviceCount: 15,
    blurb: "Nutrition and dietary context for authorized human modeling",
  },
  {
    id: "sleep-recovery",
    label: "Sleep & Recovery",
    serviceCount: 8,
    blurb: "Sleep and recovery context for daily human modeling",
  },
  {
    id: "environmental-health",
    label: "Environmental Health",
    serviceCount: 8,
    blurb: "Environmental context for authorized human modeling",
  },
  {
    id: "family-health",
    label: "Family Health",
    serviceCount: 7,
    blurb: "Family-context modeling across related human profiles",
  },
  {
    id: "preventive-medicine",
    label: "Preventive Medicine & Longevity",
    serviceCount: 8,
    blurb: "Preventive-health context and long-horizon wellness modeling",
  },
  {
    id: "biohacking",
    label: "Biohacking & Performance",
    serviceCount: 17,
    blurb: "Performance-context modeling for authorized human data",
  },
  {
    id: "elderly-care",
    label: "Senior Care",
    serviceCount: 9,
    blurb: "Aging and care-context modeling for older adults",
  },
  {
    id: "eye-health",
    label: "Eye-Health Suite",
    serviceCount: 4,
    blurb: "Visual-health context for authorized human modeling",
  },
  {
    id: "digital-therapy",
    label: "Digital Therapeutics Store",
    serviceCount: 5,
    blurb: "Modeled digital-health intervention categories — not a live therapeutics storefront",
  },
  {
    id: "sexual-longevity",
    label: "General Sexual Longevity",
    serviceCount: 16,
    blurb: "Comprehensive sexual health and wellness optimization",
  },
  {
    id: "mens-sexual-health",
    label: "Men's Sexual Health",
    serviceCount: 4,
    blurb: "Specialized sexual wellness for men",
  },
  {
    id: "womens-sexual-health",
    label: "Women's Sexual Health",
    serviceCount: 4,
    blurb: "Specialized sexual wellness for women",
  },
];
