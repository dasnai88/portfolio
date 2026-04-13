import { Footer } from "@/components/portfolio/footer";
import { ProcessSection } from "@/components/portfolio/process-section";
import { SiteHeader } from "@/components/portfolio/site-header";
import { AboutSection } from "@/components/portfolio/sections/about-section";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { HeroSection } from "@/components/portfolio/sections/hero-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";
import { SkillsSection } from "@/components/portfolio/sections/skills-section";
import {
  navItems,
  portfolio,
  processIntro,
  processSteps,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div id="top" className="relative overflow-x-clip">
      <SiteHeader
        name={portfolio.name}
        items={navItems}
        contactHref="#contact"
      />

      <main id="content" className="pb-10">
        <HeroSection />
        <AboutSection />
        <ProcessSection
          eyebrow={processIntro.eyebrow}
          title={processIntro.title}
          description={processIntro.description}
          steps={processSteps}
        />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer name={portfolio.name} items={navItems} />
    </div>
  );
}
