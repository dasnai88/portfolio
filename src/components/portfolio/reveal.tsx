"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.7, ease: premiumEase, delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: "load" | "scroll";
  amount?: number;
  as?: "div" | "ul";
};

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  mode = "scroll",
  amount = 0.22,
  as = "div",
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = as === "ul" ? motion.ul : motion.div;

  const variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { delayChildren: delay }
        : { delayChildren: delay, staggerChildren: stagger },
    },
  };

  if (mode === "load") {
    return (
      <Component
        animate="show"
        className={className}
        initial={prefersReducedMotion ? false : "hidden"}
        variants={variants}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      variants={variants}
      viewport={{ once: true, amount }}
      whileInView="show"
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  blur?: boolean;
  as?: "div" | "li";
};

export function StaggerItem({
  children,
  className,
  y = 18,
  x = 0,
  blur = true,
  as = "div",
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      className={className}
      variants={{
        hidden: prefersReducedMotion
          ? {}
          : {
              opacity: 0,
              x,
              y,
              filter: blur ? "blur(8px)" : "blur(0px)",
            },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.72,
            ease: premiumEase,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

type HoverSurfaceProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
  shadow?: string;
};

export function HoverSurface({
  children,
  className,
  y = -4,
  scale = 1.01,
  shadow = "0 20px 38px rgba(32, 22, 16, 0.1)",
}: HoverSurfaceProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      transition={{ duration: 0.28, ease: premiumEase }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y,
              scale,
              boxShadow: shadow,
            }
      }
    >
      {children}
    </motion.div>
  );
}

type MotionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MotionLink({
  href,
  className,
  children,
  variant = "secondary",
}: MotionLinkProps) {
  const isExternal = href.startsWith("http");
  const prefersReducedMotion = useReducedMotion();
  const hoverShadow =
    variant === "primary"
      ? "0 22px 40px rgba(34, 22, 16, 0.18)"
      : "0 16px 28px rgba(32, 22, 16, 0.1)";

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -3,
              scale: 1.012,
              boxShadow: hoverShadow,
            }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28, ease: premiumEase }}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </motion.a>
  );
}
