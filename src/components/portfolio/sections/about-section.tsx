import { Reveal, StaggerGroup, StaggerItem } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { aboutSection, proofCards } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="anchor-section section-shell pt-28 sm:pt-32">
      <SectionHeading
        eyebrow={aboutSection.eyebrow}
        title={aboutSection.title}
        description={aboutSection.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="editorial-card rounded-[2rem] p-7 sm:p-8" y={24}>
          <div className="space-y-6">
            {aboutSection.narrative.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-base leading-8 text-[var(--muted)] sm:text-lg ${
                  index === 0 ? "text-[var(--foreground-soft)]" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal className="muted-panel rounded-[2rem] p-7 sm:p-8" delay={0.05}>
            <p className="eyebrow">Принципы работы</p>
            <StaggerGroup as="ul" className="mt-6 grid gap-3" stagger={0.08}>
              {aboutSection.principles.map((principle, index) => (
                <StaggerItem
                  as="li"
                  key={principle}
                  className="principle-item"
                  x={index % 2 === 0 ? 0 : 12}
                >
                  {principle}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>

          <StaggerGroup className="grid gap-4" stagger={0.08}>
            {proofCards.map((card) => (
              <StaggerItem key={card.title}>
                <article className="editorial-card card-hover rounded-[1.75rem] p-6">
                  <p className="eyebrow">{card.meta}</p>
                  <h3 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {card.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}