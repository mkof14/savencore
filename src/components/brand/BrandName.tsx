type BrandNameProps = {
  /** Visual size for the lockup — typography matches the logo wordmark. */
  variant?: "title" | "inline";
  className?: string;
};

/**
 * Two-color brand name matching SavenLogo wordmark:
 * SAVEN (light/ink) + CORE (gold), sans, uppercase.
 */
export function BrandName({
  variant = "inline",
  className,
}: BrandNameProps) {
  const classes = [
    "brand-name",
    variant === "title" ? "brand-name--title" : "brand-name--inline",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} dir="ltr" lang="en">
      <span className="brand-name__saven">SAVEN</span>{" "}
      <span className="brand-name__core">CORE</span>
    </span>
  );
}
