import { trustArchitectureContent } from "@/content/home/en";

export function TrustArchitecture() {
  const content = trustArchitectureContent;

  return (
    <section
      className="home-section home-trust"
      aria-labelledby="trust-architecture-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="trust-architecture-heading" className="home-section__heading">
          {content.heading}
        </h2>
        <p className="home-section__body">{content.introduction}</p>

        <ul className="home-trust__pillars">
          {content.pillars.map((pillar) => (
            <li key={pillar.id} className="home-trust__pillar">
              <h3 className="home-trust__pillar-title">{pillar.title}</h3>
              <p className="home-trust__pillar-text">{pillar.description}</p>
            </li>
          ))}
        </ul>

        <p className="home-trust__principle">{content.principleLine}</p>
      </div>
    </section>
  );
}
