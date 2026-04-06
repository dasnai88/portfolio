"use client";

import { motion, useReducedMotion } from "framer-motion";

type ProjectPreviewProps = {
  preset: "desktop" | "dashboard" | "messenger";
};

export function ProjectPreview({ preset }: ProjectPreviewProps) {
  const prefersReducedMotion = useReducedMotion();

  const surfaceMotion = prefersReducedMotion
    ? undefined
    : {
        y: -3,
        scale: 1.01,
      };

  if (preset === "desktop") {
    return (
      <div className="project-preview-shell">
        <motion.div className="project-preview-glow project-preview-glow-amber" whileHover={surfaceMotion} />
        <motion.div className="project-preview-window" whileHover={surfaceMotion}>
          <div className="project-preview-toolbar">
            <span />
            <span />
            <span />
            <p>Local desk</p>
          </div>
          <div className="project-preview-body grid grid-cols-[0.28fr_0.72fr] gap-3">
            <div className="grid gap-2">
              <div className="project-preview-pill project-preview-pill-strong" />
              <div className="project-preview-pill" />
              <div className="project-preview-pill" />
              <div className="project-preview-pill project-preview-pill-accent" />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center justify-between rounded-[0.95rem] border border-[rgba(23,20,17,0.08)] bg-white/68 px-3 py-2">
                <div className="h-2.5 w-[4.5rem] rounded-full bg-[rgba(23,20,17,0.16)]" />
                <div className="rounded-full bg-[rgba(242,157,118,0.14)] px-2.5 py-1 text-[0.52rem] uppercase tracking-[0.16em] text-[var(--muted-strong)]">
                  retail
                </div>
              </div>
              <div className="project-preview-card project-preview-card-hero" />
              <div className="grid grid-cols-2 gap-3">
                <div className="project-preview-card" />
                <div className="project-preview-card" />
              </div>
              <div className="project-preview-line-stack">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (preset === "dashboard") {
    return (
      <div className="project-preview-shell">
        <motion.div className="project-preview-glow project-preview-glow-violet" whileHover={surfaceMotion} />
        <motion.div className="project-preview-window" whileHover={surfaceMotion}>
          <div className="project-preview-toolbar">
            <span />
            <span />
            <span />
            <p>Edu system</p>
          </div>
          <div className="project-preview-body grid gap-3">
            <div className="flex items-center gap-2">
              <div className="project-preview-pill project-preview-pill-strong h-7 w-20" />
              <div className="project-preview-pill h-7 w-16" />
              <div className="project-preview-pill project-preview-pill-accent h-7 w-[4.5rem]" />
            </div>
            <div className="grid grid-cols-[0.52fr_0.48fr] gap-3">
              <div className="project-preview-card project-preview-card-hero" />
              <div className="grid gap-3">
                <div className="project-preview-card project-preview-card-small" />
                <div className="project-preview-card project-preview-card-small" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="project-preview-card project-preview-card-small" />
              <div className="project-preview-card project-preview-card-small" />
              <div className="project-preview-card project-preview-card-small" />
            </div>
            <div className="rounded-[1rem] border border-[rgba(23,20,17,0.08)] bg-white/68 p-3">
              <div className="h-2.5 w-24 rounded-full bg-[rgba(23,20,17,0.16)]" />
              <div className="mt-3 h-12 rounded-[0.95rem] bg-[linear-gradient(180deg,rgba(187,166,255,0.2),rgba(187,166,255,0.08))]" />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="project-preview-shell">
      <motion.div className="project-preview-glow project-preview-glow-cool" whileHover={surfaceMotion} />
      <motion.div className="project-preview-window" whileHover={surfaceMotion}>
        <div className="project-preview-toolbar">
          <span />
          <span />
          <span />
          <p>Realtime flow</p>
        </div>
        <div className="project-preview-body grid grid-cols-[0.44fr_0.56fr] gap-3">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 rounded-[0.95rem] border border-[rgba(23,20,17,0.08)] bg-white/68 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(141,162,255,0.72)]" />
              <div className="h-2.5 w-16 rounded-full bg-[rgba(23,20,17,0.15)]" />
            </div>
            <div className="project-preview-chat-bubble project-preview-chat-bubble-strong" />
            <div className="project-preview-chat-bubble" />
            <div className="project-preview-chat-bubble project-preview-chat-bubble-accent" />
            <div className="project-preview-chat-bubble" />
          </div>
          <div className="grid gap-3">
            <div className="project-preview-card project-preview-card-hero" />
            <div className="grid grid-cols-2 gap-3">
              <div className="project-preview-card project-preview-card-small" />
              <div className="project-preview-card project-preview-card-small" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
