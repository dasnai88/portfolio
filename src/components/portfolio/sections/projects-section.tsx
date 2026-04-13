import { Reveal, StaggerGroup, StaggerItem } from "@/components/portfolio/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { projects, projectsSection } from "@/data/portfolio";

export function ProjectsSection() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section id="projects" className="anchor-section section-shell pt-28 sm:pt-32">
      <SectionHeading
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
        className="max-w-4xl"
      />

      <div className="projects-stage mt-12">
        <Reveal y={28}>
          <ProjectCard {...featuredProject} featured />
        </Reveal>

        <StaggerGroup className="mt-5 grid gap-5 xl:grid-cols-2" stagger={0.1}>
          {secondaryProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
