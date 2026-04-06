"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { PortfolioProject } from "@/data/portfolio";
import { ProjectPreview } from "@/components/portfolio/project-preview";

export function ProjectCard({
  title,
  preview,
  meta,
  status,
  description,
  highlight,
  role,
  stack,
  primaryLink,
  secondaryLink,
}: PortfolioProject) {
  const prefersReducedMotion = useReducedMotion();
  const titleY = prefersReducedMotion ? undefined : -2;
  const contentY = prefersReducedMotion ? undefined : -1;

  return (
    <motion.article
      className="surface-panel motion-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 sm:p-7"
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -7,
              scale: 1.008,
              boxShadow: "0 24px 56px rgba(32, 21, 15, 0.14)",
            }
      }
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-none absolute inset-x-[18%] top-[-16%] h-36 rounded-full bg-[radial-gradient(circle,rgba(189,95,65,0.14)_0%,transparent_72%)] blur-3xl"
        style={prefersReducedMotion ? undefined : { opacity: 0.72 }}
        whileHover={prefersReducedMotion ? undefined : { opacity: 0.95, scale: 1.04, y: 6 }}
      />

      <div className="flex items-start justify-between gap-4">
        <motion.div
          className="relative z-10"
          initial={false}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          whileHover={prefersReducedMotion ? undefined : { y: titleY }}
        >
          <p className="eyebrow">{meta}</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
            {title}
          </h3>
        </motion.div>

        <motion.div
          className="relative z-10 rounded-full border border-[var(--line)] bg-white/45 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
          transition={{ duration: 0.25 }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  y: -1,
                  borderColor: "rgba(189, 95, 65, 0.28)",
                  backgroundColor: "rgba(255,255,255,0.72)",
                }
          }
        >
          {status}
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mt-6"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      >
        <ProjectPreview preset={preview} />
      </motion.div>

      <motion.p
        className="relative z-10 mt-6 text-sm leading-7 text-[var(--muted)] sm:text-base"
        transition={{ duration: 0.28 }}
        whileHover={prefersReducedMotion ? undefined : { y: contentY }}
      >
        {description}
      </motion.p>

      <motion.div
        className="relative z-10 mt-6 rounded-[1.35rem] border border-[var(--line)] bg-white/62 p-4"
        transition={{ duration: 0.28 }}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                y: -1,
                borderColor: "rgba(189, 95, 65, 0.2)",
                backgroundColor: "rgba(255,255,255,0.82)",
              }
        }
      >
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Сильная сторона</p>
        <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">{highlight}</p>
      </motion.div>

      <motion.p
        className="relative z-10 mt-5 text-sm leading-7 text-[var(--muted)]"
        transition={{ duration: 0.28 }}
        whileHover={prefersReducedMotion ? undefined : { y: contentY }}
      >
        <span className="font-medium text-[var(--foreground)]">Роль и вклад:</span> {role}
      </motion.p>

      <motion.ul className="relative z-10 mt-6 flex flex-wrap gap-2">
        {stack.map((item, index) => (
          <motion.li
            key={item}
            className="rounded-full border border-transparent bg-[rgba(255,255,255,0.72)] px-3 py-1.5 text-sm text-[var(--muted-strong)]"
            transition={{ delay: index * 0.02, duration: 0.22 }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -1,
                    borderColor: "rgba(189, 95, 65, 0.18)",
                    backgroundColor: "rgba(255,255,255,0.88)",
                  }
            }
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="relative z-10 mt-8 flex items-center gap-3 text-sm"
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        whileHover={prefersReducedMotion ? undefined : { y: -1 }}
      >
        <motion.a
          href={primaryLink.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--line-strong)] px-4 py-2 text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-white"
          transition={{ duration: 0.22 }}
          whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        >
          {primaryLink.label}
        </motion.a>
        {secondaryLink ? (
          <motion.a
            href={secondaryLink.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--foreground)] px-4 py-2 text-white hover:bg-[var(--accent-deep)]"
            transition={{ duration: 0.22 }}
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
          >
            {secondaryLink.label}
          </motion.a>
        ) : null}
      </motion.div>
    </motion.article>
  );
}
