import type { PortfolioProject } from "@/data/portfolio";

import { MotionLink } from "@/components/portfolio/reveal";
import { ProjectPreview } from "@/components/portfolio/project-preview";

type ProjectCardProps = PortfolioProject & {
  featured?: boolean;
};

export function ProjectCard({
  title,
  preview,
  meta,
  status,
  description,
  caseStudy,
  role,
  stack,
  links,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card-shell group ${
        featured ? "project-card-shell--featured" : "project-card-shell--standard"
      }`}
    >
      <div className={featured ? "grid gap-8 xl:grid-cols-[1.08fr_0.92fr]" : "grid gap-7"}>
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">{meta}</p>
              <h3
                className={`mt-4 font-semibold tracking-[-0.05em] text-[var(--foreground)] ${
                  featured ? "text-[2.35rem] leading-[0.98] sm:text-[2.8rem]" : "text-[1.75rem] leading-tight"
                }`}
              >
                {title}
              </h3>
            </div>

            <span className="project-status-pill">{status}</span>
          </div>

          <p
            className={`mt-6 text-[var(--muted)] ${
              featured ? "max-w-2xl text-base leading-8 sm:text-lg" : "text-sm leading-7 sm:text-base"
            }`}
          >
            {description}
          </p>

          <div
            className={`project-case-grid mt-7 ${
              featured ? "project-case-grid-featured" : ""
            }`}
          >
            <article className="project-case-card">
              <p className="eyebrow">Задача</p>
              <p className="project-case-copy">{caseStudy.challenge}</p>
            </article>

            <article className="project-case-card">
              <p className="eyebrow">Решение</p>
              <p className="project-case-copy">{caseStudy.solution}</p>
            </article>

            <article className="project-case-card">
              <p className="eyebrow">Результат</p>
              <p className="project-case-copy">{caseStudy.outcome}</p>
            </article>
          </div>

          <div className="project-role-box mt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              Роль и вклад
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--foreground-soft)] sm:text-base">
              {role}
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {stack.map((item) => (
              <li key={item} className="stack-chip">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            {links.map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                ariaLabel={link.ariaLabel}
                className={link.variant === "primary" ? "button-primary" : "button-secondary"}
                variant={link.variant}
              >
                {link.label}
              </MotionLink>
            ))}
          </div>
        </div>

        <div className={featured ? "xl:pl-4" : ""}>
          <ProjectPreview preset={preview} featured={featured} />
        </div>
      </div>
    </article>
  );
}