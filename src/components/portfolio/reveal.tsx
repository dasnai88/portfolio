"use client";

import type { CSSProperties, ReactNode, RefObject } from "react";
import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

type StaggerTarget = HTMLElement & {
  dataset: DOMStringMap & {
    staggerX?: string;
    staggerY?: string;
    staggerBlur?: string;
  };
};

function getScrollStart(amount: number) {
  const clampedAmount = Math.max(0.05, Math.min(0.95, amount));
  return `top ${Math.round((1 - clampedAmount) * 100)}%`;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const initialStyle = useMemo<CSSProperties | undefined>(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    return {
      opacity: 0,
      transform: `translate3d(0, ${y}px, 0)`,
      willChange: "transform, opacity",
    };
  }, [prefersReducedMotion, y]);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) {
      return;
    }

    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.84,
          delay,
          ease: "power3.out",
          clearProps: "opacity,transform,visibility,willChange",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [delay, prefersReducedMotion, y]);

  return (
    <div ref={ref} className={className} style={initialStyle}>
      {children}
    </div>
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
  amount = 0.2,
  as = "div",
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement | HTMLUListElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) {
      return;
    }

    const container = ref.current;
    const targets = Array.from(
      container.querySelectorAll<StaggerTarget>("[data-stagger-item]"),
    );

    if (targets.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      targets.forEach((target, index) => {
        const x = Number(target.dataset.staggerX ?? 0);
        const y = Number(target.dataset.staggerY ?? 12);
        const blur = target.dataset.staggerBlur === "true";

        gsap.fromTo(
          target,
          {
            autoAlpha: 0,
            x,
            y,
            filter: blur ? "blur(8px)" : "blur(0px)",
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 0.72,
            delay: delay + index * stagger,
            ease: "power3.out",
            clearProps: "opacity,transform,visibility,filter,willChange",
            ...(mode === "scroll"
              ? {
                  scrollTrigger: {
                    trigger: container,
                    start: getScrollStart(amount),
                    once: true,
                  },
                }
              : {}),
          },
        );
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [amount, delay, mode, prefersReducedMotion, stagger]);

  if (as === "ul") {
    return (
      <ul className={className} ref={ref as RefObject<HTMLUListElement | null>}>
        {children}
      </ul>
    );
  }

  return (
    <div className={className} ref={ref as RefObject<HTMLDivElement | null>}>
      {children}
    </div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  x?: number;
  y?: number;
  blur?: boolean;
  as?: "div" | "li";
};

export function StaggerItem({
  children,
  className,
  x = 0,
  y = 12,
  blur = false,
  as = "div",
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = as;
  const initialStyle = useMemo<CSSProperties | undefined>(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    return {
      opacity: 0,
      transform: `translate3d(${x}px, ${y}px, 0)`,
      filter: blur ? "blur(8px)" : "blur(0px)",
      willChange: "transform, opacity, filter",
    };
  }, [blur, prefersReducedMotion, x, y]);

  return (
    <Component
      className={className}
      data-stagger-item=""
      data-stagger-x={x}
      data-stagger-y={y}
      data-stagger-blur={blur}
      style={initialStyle}
    >
      {children}
    </Component>
  );
}

type MotionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
};

export function MotionLink({
  href,
  className,
  children,
  variant = "secondary",
  ariaLabel,
}: MotionLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const isExternal = href.startsWith("http");
  const hoverShadow =
    variant === "primary"
      ? "0 18px 34px rgba(0, 0, 0, 0.24)"
      : "0 12px 24px rgba(0, 0, 0, 0.18)";

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={className}
      transition={{ duration: 0.28, ease: premiumEase }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -1.5,
              scale: 1.006,
              boxShadow: hoverShadow,
            }
      }
      whileTap={{ scale: 0.992 }}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </motion.a>
  );
}
