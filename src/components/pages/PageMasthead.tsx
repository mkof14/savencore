type PageMastheadProps = {
  label: string;
  title: string;
  titleId: string;
  introduction: string;
  status?: string;
  /** Optional domain marker shown above the page label. */
  domain?: "technology" | "systems" | "foundation" | "research" | "applications";
};

export function PageMasthead({
  label,
  title,
  titleId,
  introduction,
  status,
  domain,
}: PageMastheadProps) {
  return (
    <header className="page-masthead">
      <div className="page-shell__inner">
        {domain ? (
          <p className={`page-masthead__domain page-masthead__domain--${domain}`}>
            {domain === "technology"
              ? "Technology domain"
              : domain === "systems"
                ? "Systems domain"
                : `${domain} domain`}
          </p>
        ) : null}
        <p className="page-masthead__label">{label}</p>
        <h1 id={titleId} className="page-masthead__title">
          {title}
        </h1>
        <p className="page-masthead__intro">{introduction}</p>
        {status ? <p className="page-masthead__status">{status}</p> : null}
      </div>
    </header>
  );
}
