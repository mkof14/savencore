import { humanPurposeContent } from "@/content/home/en";

export function HumanPurpose() {
  const content = humanPurposeContent;

  return (
    <section
      className="home-section home-purpose"
      aria-labelledby="human-purpose-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="human-purpose-heading" className="home-section__heading">
          {content.heading}
        </h2>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph} className="home-section__body">
            {paragraph}
          </p>
        ))}

        <div className="home-purpose__principles">
          {content.principles.map((principle) => (
            <div key={principle.id} className="home-purpose__principle">
              <h3 className="home-purpose__principle-title">
                {principle.title}
              </h3>
              <p className="home-purpose__principle-text">{principle.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
