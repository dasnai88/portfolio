"use client";

import { motion, useReducedMotion } from "framer-motion";

type SkillGroupProps = {
  title: string;
  items: string[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="surface-panel motion-card group relative overflow-hidden rounded-[2rem] p-6 sm:p-7"
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -4,
              scale: 1.004,
              boxShadow: "0 22px 44px rgba(32, 21, 15, 0.12)",
            }
      }
    >
      <motion.div
        className="pointer-events-none absolute inset-x-[24%] top-[-20%] h-28 rounded-full bg-[radial-gradient(circle,rgba(189,95,65,0.12)_0%,transparent_72%)] blur-3xl"
        whileHover={prefersReducedMotion ? undefined : { opacity: 0.95, y: 4, scale: 1.04 }}
      />

      <motion.h3
        className="relative text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]"
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        whileHover={prefersReducedMotion ? undefined : { y: -1 }}
      >
        {title}
      </motion.h3>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {items.map((item, index) => (
          <motion.li
            key={item}
            className="relative rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-2 text-sm text-[var(--muted-strong)]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
            transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -1,
                    borderColor: "rgba(189, 95, 65, 0.22)",
                    backgroundColor: "rgba(255,255,255,0.84)",
                    boxShadow: "0 10px 22px rgba(32, 21, 15, 0.06)",
                  }
            }
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}
