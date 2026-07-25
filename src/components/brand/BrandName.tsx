type BrandNameProps = {
  /** Visual casing for the lockup. */
  variant?: "title" | "inline";
  className?: string;
};

/**
 * Two-color brand name: SAVEN + Core (gold), matching the logo lockup.
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
      <span className="brand-name__core">Core</span>
    </span>
  );
}
