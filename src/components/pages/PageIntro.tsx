type PageIntroProps = {
  children: string;
};

/** Optional secondary intro block below the masthead when needed. */
export function PageIntro({ children }: PageIntroProps) {
  return (
    <div className="page-intro">
      <div className="page-shell__inner">
        <p className="page-intro__text">{children}</p>
      </div>
    </div>
  );
}
