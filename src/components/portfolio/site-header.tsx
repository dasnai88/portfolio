"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { LogoLockup } from "@/components/portfolio/logo-lockup";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  name: string;
  items: NavItem[];
};

export function SiteHeader({ name, items }: SiteHeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = items
      .map((item) => {
        const id = item.href.replace("#", "");
        return document.getElementById(id);
      })
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-24% 0px -56% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="section-shell-wide">
        <div className="surface-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <motion.a
            href="#top"
            aria-label={`${name} наверх`}
            className="shrink-0"
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -1,
                    scale: 1.01,
                    filter: "drop-shadow(0 12px 20px rgba(32,21,15,0.08))",
                  }
            }
          >
            <LogoLockup compact name={name} />
          </motion.a>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 py-1.5 text-sm transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-white/70 text-[var(--foreground)] shadow-[0_10px_24px_rgba(32,21,15,0.06)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
                transition={{ duration: 0.22 }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -1,
                        backgroundColor:
                          activeSection === item.href.replace("#", "")
                            ? "rgba(255,255,255,0.76)"
                            : "rgba(255,255,255,0.38)",
                      }
                }
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          <motion.a
            href="#contact"
            className="rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-white"
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            whileHover={prefersReducedMotion ? undefined : { y: -2, boxShadow: "0 14px 26px rgba(32,21,15,0.08)" }}
          >
            Связаться
          </motion.a>
        </div>
      </div>
    </header>
  );
}
