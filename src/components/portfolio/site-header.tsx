"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { LogoLockup } from "@/components/portfolio/logo-lockup";
import type { NavItem } from "@/data/portfolio";

type SiteHeaderProps = {
  name: string;
  items: NavItem[];
  contactHref: string;
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function SiteHeader({ name, items, contactHref }: SiteHeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window === "undefined") {
      return "about";
    }

    return window.location.hash.replace("#", "") || "about";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const updateActiveSection = useEffectEvent(
    (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (visibleEntry?.target.id) {
        setActiveSection(visibleEntry.target.id);
      }
    },
  );

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-30% 0px -52% 0px",
      threshold: [0.2, 0.4, 0.6],
    });

    sections.forEach((section) => observer.observe(section));

    const onHashChange = () => {
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash) {
        setActiveSection(currentHash);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [items]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="section-shell-wide relative">
        <div className="header-shell">
          <a
            href="#top"
            aria-label={`${name}: перейти к началу страницы`}
            className="shrink-0"
          >
            <LogoLockup compact name={name} variant="inverse" />
          </a>

          <nav
            aria-label="Основная навигация"
            className="hidden items-center gap-2 md:flex"
          >
            {items.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  aria-current={isActive ? "page" : undefined}
                  className={`header-link ${isActive ? "header-link-active" : ""}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={contactHref} className="button-secondary">
              Обсудить задачу
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/[0.06] text-[var(--foreground)] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="sr-only">{menuOpen ? "Закрыть меню" : "Открыть меню"}</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-4 rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-4 rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-navigation"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.24, ease }}
              className="header-menu absolute inset-x-0 top-[calc(100%+0.75rem)] p-5 md:hidden"
            >
              <nav aria-label="Мобильная навигация" className="flex flex-col gap-2">
                {items.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      aria-label={item.ariaLabel}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-[1.2rem] px-4 py-3 text-sm transition-colors duration-200 ${
                        isActive
                          ? "bg-[var(--accent)] text-[var(--foreground-inverse)]"
                          : "bg-white/[0.04] text-[var(--foreground)]"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 flex flex-col gap-2">
                <a href={contactHref} className="button-primary" onClick={closeMenu}>
                  Обсудить задачу
                </a>
                <a href="#projects" className="button-secondary" onClick={closeMenu}>
                  Смотреть кейсы
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}