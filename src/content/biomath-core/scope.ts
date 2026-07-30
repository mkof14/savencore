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
    blurb: "Advanced health monitoring and risk assessment for critical medical conditions",
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
    blurb: "Advanced aging science and lifespan optimization",
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
    blurb: "Evidence-based nutrition and dietary optimization",
  },
  {
    id: "sleep-recovery",
    label: "Sleep & Recovery",
    serviceCount: 8,
    blurb: "Sleep optimization and recovery enhancement",
  },
  {
    id: "environmental-health",
    label: "Environmental Health",
    serviceCount: 8,
    blurb: "Environmental exposure monitoring and mitigation",
  },
  {
    id: "family-health",
    label: "Family Health",
    serviceCount: 7,
    blurb: "Comprehensive family healthcare management",
  },
  {
    id: "preventive-medicine",
    label: "Preventive Medicine & Longevity",
    serviceCount: 8,
    blurb: "Proactive disease prevention and health optimization",
  },
  {
    id: "biohacking",
    label: "Biohacking & Performance",
    serviceCount: 17,
    blurb: "Advanced human performance optimization",
  },
  {
    id: "elderly-care",
    label: "Senior Care",
    serviceCount: 9,
    blurb: "Specialized healthcare for older adults",
  },
  {
    id: "eye-health",
    label: "Eye-Health Suite",
    serviceCount: 4,
    blurb: "Visual health monitoring and optimization",
  },
  {
    id: "digital-therapy",
    label: "Digital Therapeutics Store",
    serviceCount: 5,
    blurb: "Evidence-based digital health interventions",
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
