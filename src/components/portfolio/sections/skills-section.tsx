import { Reveal, StaggerGroup, StaggerItem } from "@/components/portfolio/reveal";
import { SkillGroup } from "@/components/portfolio/skill-group";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { skillGroups, stackSection } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="stack" className="anchor-section section-shell pt-28 sm:pt-32">
      <Reveal className="rounded-[2.15rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(15,20,29,0.92),rgba(11,15,22,0.98))] px-7 py-8 shadow-[0_16px_34px_rgba(0,0,0,0.2)] sm:px-8 sm:py-10">
        <SectionHeading
          eyebrow={stackSection.eyebrow}
          title={stackSection.title}
          description={stackSection.description}
          className="max-w-4xl"
        />

        <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.1}>
          {skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <SkillGroup {...group} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>
    </section>
  );
}
