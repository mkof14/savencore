type PageMastheadProps = {
  label: string;
  title: string;
  titleId: string;
  introduction: string;
  status?: string;
};

export function PageMasthead({
  label,
  title,
  titleId,
  introduction,
  status,
}: PageMastheadProps) {
  return (
    <header className="page-masthead">
      <div className="page-shell__inner">
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
