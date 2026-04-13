"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  type MotionStyle,
  type MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

import type { ProcessStep } from "@/data/portfolio";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
};

type SceneProps = {
  progress: MotionValue<number>;
  compact: boolean;
  accent: string;
};

type SnapshotCanvasProps = {
  step: ProcessStep;
  compact?: boolean;
};

type DesktopSequenceCanvasProps = {
  activeIndex: number;
  progress: MotionValue<number>;
  stageStops: number[];
  steps: ProcessStep[];
};

const accentMap: Record<ProcessStep["accent"], string> = {
  ember: "#f29d76",
  cobalt: "#8da2ff",
  linen: "#e6d5c1",
  violet: "#bba6ff",
  glow: "#f7efe4",
};

const staticProgressMap: Record<ProcessStep["id"], number> = {
  concept: 0.64,
  structure: 0.64,
  code: 0.66,
  interface: 0.68,
  final: 0.76,
};

gsap.registerPlugin(ScrollTrigger);

function clampStage(index: number, length: number) {
  return Math.max(0, Math.min(length - 1, index));
}

function getFallbackStageStops(length: number) {
  if (length <= 0) {
    return [];
  }

  return Array.from({ length }, (_, index) => (index + 0.5) / length);
}

function normalizeStops(stops: number[]) {
  if (stops.length === 0) {
    return [];
  }

  const nextStops: number[] = [];

  for (let index = 0; index < stops.length; index += 1) {
    const boundedStop = Math.max(0, Math.min(0.999, stops[index]));

    if (index === 0) {
      nextStops.push(boundedStop);
      continue;
    }

    nextStops.push(
      Math.min(0.999, Math.max(nextStops[index - 1] + 0.001, boundedStop)),
    );
  }

  return nextStops;
}

function getStageBoundaries(stageStops: number[]) {
  if (stageStops.length === 0) {
    return [0, 1];
  }

  const boundaries = [0];

  for (let index = 0; index < stageStops.length - 1; index += 1) {
    boundaries.push((stageStops[index] + stageStops[index + 1]) / 2);
  }

  boundaries.push(1);
  return boundaries;
}

function getStageIndex(progress: number, stageStops: number[]) {
  if (stageStops.length <= 1) {
    return 0;
  }

  const boundaries = getStageBoundaries(stageStops);
  const boundedProgress = Math.max(0, Math.min(0.9999, progress));

  for (let index = 0; index < boundaries.length - 1; index += 1) {
    if (boundedProgress < boundaries[index + 1]) {
      return clampStage(index, stageStops.length);
    }
  }

  return stageStops.length - 1;
}

function useSceneOpacity(
  progress: MotionValue<number>,
  boundaries: number[],
  index: number,
  transitionBand = 0.045,
) {
  const lastIndex = boundaries.length - 2;
  let input: number[];
  let output: number[];

  if (index <= 0) {
    input = [
      0,
      Math.max(0, boundaries[1] - transitionBand),
      Math.min(1, boundaries[1] + transitionBand),
    ];
    output = [1, 1, 0];
  } else if (index >= lastIndex) {
    input = [
      Math.max(0, boundaries[lastIndex] - transitionBand),
      Math.min(1, boundaries[lastIndex] + transitionBand),
      1,
    ];
    output = [0, 1, 1];
  } else {
    input = [
      Math.max(0, boundaries[index] - transitionBand),
      Math.min(1, boundaries[index] + transitionBand),
      Math.max(0, boundaries[index + 1] - transitionBand),
      Math.min(1, boundaries[index + 1] + transitionBand),
    ];
    output = [0, 1, 1, 0];
  }

  return useTransform(progress, input, output);
}

function useSceneLift(opacity: MotionValue<number>, offset = 18) {
  return useTransform(opacity, [0, 1], [offset, 0]);
}

function useSceneScale(opacity: MotionValue<number>, minScale = 0.97) {
  return useTransform(opacity, [0, 1], [minScale, 1]);
}

function useSegmentProgress(
  progress: MotionValue<number>,
  start: number,
  end: number,
) {
  return useTransform(progress, [start, end], [0, 1]);
}

function WireframeBase({
  insetClass,
  style,
}: {
  insetClass: string;
  style: MotionStyle;
}) {
  return (
    <motion.div
      className={`absolute ${insetClass} rounded-[1.25rem] border border-dashed border-[var(--process-line)]`}
      style={style}
    >
      <div className="absolute left-[7%] top-[10%] h-[14%] w-[28%] rounded-[1rem] border border-[var(--process-line)] bg-white/[0.03]" />
      <div className="absolute right-[7%] top-[10%] h-[14%] w-[42%] rounded-[1rem] border border-[var(--process-line)] bg-white/[0.03]" />
      <div className="absolute left-[7%] top-[30%] h-[22%] w-[55%] rounded-[1.15rem] border border-[var(--process-line)] bg-white/[0.03]" />
      <div className="absolute right-[7%] top-[30%] h-[22%] w-[24%] rounded-[1.15rem] border border-[var(--process-line)] bg-white/[0.03]" />
      <div className="absolute left-[7%] bottom-[10%] h-[24%] w-[34%] rounded-[1.15rem] border border-[var(--process-line)] bg-white/[0.03]" />
      <div className="absolute left-[45%] bottom-[10%] h-[24%] w-[20%] rounded-[1.15rem] border border-[var(--process-line)] bg-white/[0.03]" />
      <div className="absolute right-[7%] bottom-[10%] h-[24%] w-[24%] rounded-[1.15rem] border border-[var(--process-line)] bg-white/[0.03]" />
    </motion.div>
  );
}

function CanvasShell({
  accent,
  compact = false,
  progress,
  children,
}: {
  accent: string;
  compact?: boolean;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  const shellInset = compact ? "inset-4" : "inset-6";
  const glowOpacity = useTransform(progress, [0, 0.12, 0.4, 1], [0.34, 0.62, 0.82, 0.76]);
  const glowScale = useTransform(progress, [0, 0.24, 1], [0.96, 1.02, 1.01]);
  const gridOpacity = useTransform(progress, [0, 0.2, 0.6, 1], [0.08, 0.12, 0.16, 0.14]);
  const gridY = useTransform(progress, [0, 1], [12, -10]);
  const rimOpacity = useTransform(progress, [0, 0.18, 1], [0.18, 0.34, 0.28]);

  return (
    <div className="process-surface relative h-full overflow-hidden rounded-[2rem] p-4 sm:p-5">
      <motion.div
        className="process-glow absolute inset-x-[18%] top-[12%] h-40 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${accent}55 0%, transparent 72%)`,
          opacity: glowOpacity,
          scale: glowScale,
        }}
      />

      <div
        className={`absolute ${shellInset} overflow-hidden rounded-[1.75rem] border border-[var(--process-line)] bg-[linear-gradient(180deg,rgba(14,18,27,0.94)_0%,rgba(10,14,22,0.98)_100%)]`}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: gridOpacity,
            y: gridY,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: compact ? "52px 52px" : "64px 64px",
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-[1px] rounded-[1.7rem]"
          style={{
            opacity: rimOpacity,
            boxShadow: `inset 0 0 0 1px ${accent}22`,
          }}
        />

        <div className="absolute inset-x-0 top-0 flex h-12 items-center gap-2 border-b border-[var(--process-line)] px-5">
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.08)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.08)]" />
          <span className="ml-3 text-[0.68rem] font-mono uppercase tracking-[0.18em] text-[var(--process-muted)]">
            Производственный слой
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

function ConceptScene({ progress, compact, accent }: SceneProps) {
  const baseOpacity = useTransform(progress, [0, 0.28, 1], [0.02, 0.08, 0.02]);
  const baseScale = useTransform(progress, [0, 0.3, 1], [0.978, 1, 0.988]);
  const conceptOpacity = useTransform(
    progress,
    [0, 0.22, 0.64, 1],
    [0.12, 0.88, 1, 0.82],
  );
  const conceptY = useTransform(progress, [0, 0.34, 1], [compact ? 0 : 24, 0, compact ? 0 : -18]);
  const conceptScale = useTransform(progress, [0, 0.34, 1], [0.94, 1, 0.982]);
  const nodeOpacity = useTransform(progress, [0, 0.22, 1], [0.28, 1, 0.68]);
  const nodeScale = useTransform(progress, [0, 0.3, 1], [0.82, 1.06, 0.94]);
  const briefOpacity = useTransform(progress, [0, 0.26, 1], [0.04, 0.78, 0.32]);
  const connectorScale = useTransform(progress, [0, 0.34, 1], [0.12, 1, 0.5]);
  const insetClass = compact ? "inset-[4.25rem]" : "inset-[4.75rem]";

  return (
    <>
      <WireframeBase insetClass={insetClass} style={{ opacity: baseOpacity, scale: baseScale }} />

      <motion.div
        className="absolute right-[10%] top-[18%] z-10 w-[28%] rounded-[1.15rem] border border-[var(--process-line-strong)] bg-white/[0.04] p-4"
        style={{ opacity: briefOpacity }}
      >
        <p className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-[var(--process-muted)]">
          Продуктовый бриф
        </p>
        <div className="mt-3 space-y-2.5">
          <div className="h-2.5 w-3/4 rounded-full bg-white/[0.16]" />
          <div className="h-2.5 w-full rounded-full bg-white/[0.08]" />
          <div className="h-2.5 w-2/3 rounded-full bg-white/[0.08]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[12%] top-[22%] z-10"
        style={{ opacity: conceptOpacity, y: conceptY, scale: conceptScale }}
      >
        <div className="flex flex-col gap-3">
          {["Цель", "Ритм", "Тон"].map((chip) => (
            <div
              className="rounded-full border border-[var(--process-line-strong)] bg-white/[0.05] px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-[var(--process-text)]"
              key={chip}
            >
              {chip}
            </div>
          ))}
        </div>

        <motion.div
          className="absolute -right-12 top-12 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--process-line-strong)]"
          style={{
            opacity: nodeOpacity,
            scale: nodeScale,
            backgroundColor: `${accent}22`,
          }}
        >
          <div
            className="h-3.5 w-3.5 rounded-full"
            style={{
              backgroundColor: accent,
              boxShadow: `0 0 26px ${accent}66`,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-[34%] top-[30%] z-[9] h-[1px] w-[26%] bg-[linear-gradient(90deg,rgba(242,157,118,0.45),rgba(242,157,118,0.04))]"
        style={{ scaleX: connectorScale, transformOrigin: "left", opacity: nodeOpacity }}
      />
      <motion.div
        className="absolute left-[38%] top-[58%] z-[9] h-[1px] w-[18%] bg-[linear-gradient(90deg,rgba(242,157,118,0.32),rgba(242,157,118,0.04))]"
        style={{ scaleX: connectorScale, transformOrigin: "left", opacity: nodeOpacity }}
      />
    </>
  );
}

function StructureScene({ progress, compact, accent }: SceneProps) {
  const baseOpacity = useTransform(
    progress,
    [0, 0.18, 0.44, 1],
    [0.08, 0.56, 0.94, 0.18],
  );
  const baseScale = useTransform(progress, [0, 0.28, 1], [0.965, 1, 0.992]);
  const accentOpacity = useTransform(progress, [0, 0.2, 1], [0.14, 0.88, 0.28]);
  const accentY = useTransform(progress, [0, 0.34, 1], [compact ? 0 : 18, 0, compact ? 0 : -12]);
  const railOpacity = useTransform(progress, [0, 0.26, 1], [0.02, 0.34, 0.12]);
  const insetClass = compact ? "inset-[4.25rem]" : "inset-[4.75rem]";

  return (
    <>
      <WireframeBase insetClass={insetClass} style={{ opacity: baseOpacity, scale: baseScale }} />

      <motion.div
        className="absolute inset-x-[18%] top-[20%] z-[9] flex items-stretch gap-[17%]"
        style={{ opacity: railOpacity }}
      >
        <div className="h-56 w-px bg-[linear-gradient(180deg,rgba(230,213,193,0.26),transparent)]" />
        <div className="h-56 w-px bg-[linear-gradient(180deg,rgba(230,213,193,0.2),transparent)]" />
        <div className="h-56 w-px bg-[linear-gradient(180deg,rgba(230,213,193,0.14),transparent)]" />
      </motion.div>

      <motion.div
        className="absolute inset-x-[16%] top-[24%] z-10 grid gap-3"
        style={{ opacity: accentOpacity, y: accentY }}
      >
        <div className="h-3 w-24 rounded-full" style={{ backgroundColor: `${accent}CC` }} />
        <div className="grid grid-cols-[0.65fr_0.35fr] gap-3">
          <div className="h-20 rounded-[1.2rem] border border-[var(--process-line-strong)] bg-white/[0.05]" />
          <div className="h-20 rounded-[1.2rem] border border-[var(--process-line)] bg-white/[0.03]" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-14 rounded-[1rem] border border-[var(--process-line)] bg-white/[0.03]" />
          <div className="h-14 rounded-[1rem] border border-[var(--process-line)] bg-white/[0.03]" />
          <div className="h-14 rounded-[1rem] border border-[var(--process-line)] bg-white/[0.03]" />
        </div>
      </motion.div>
    </>
  );
}

function CodeScene({ progress, compact }: SceneProps) {
  const baseOpacity = useTransform(progress, [0, 0.26, 1], [0.02, 0.06, 0.02]);
  const baseScale = useTransform(progress, [0, 0.28, 1], [0.978, 1, 0.988]);
  const codeOpacity = useTransform(
    progress,
    [0, 0.2, 0.62, 1],
    [0.06, 0.94, 1, 0.72],
  );
  const codeX = useTransform(progress, [0, 0.26, 1], [compact ? 0 : -26, 0, compact ? 0 : -8]);
  const codeY = useTransform(progress, [0, 0.28, 1], [compact ? 0 : 22, 0, compact ? 0 : -14]);
  const codeScale = useTransform(progress, [0, 0.26, 1], [0.9, 1.03, 0.98]);
  const lineScale = useTransform(progress, [0, 0.24, 1], [0.14, 1, 0.64]);
  const moduleOpacity = useTransform(progress, [0, 0.2, 1], [0.01, 0.1, 0.02]);
  const insetClass = compact ? "inset-[4.25rem]" : "inset-[4.75rem]";
  const panelWidth = compact ? "w-[54%]" : "w-[63%]";

  return (
    <>
      <WireframeBase insetClass={insetClass} style={{ opacity: baseOpacity, scale: baseScale }} />

      <motion.div
        className="absolute right-[8%] top-[24%] z-[9] w-[22%] space-y-3"
        style={{ opacity: moduleOpacity }}
      >
        <div className="rounded-[1.05rem] border border-[var(--process-line)] bg-white/[0.04] p-3">
          <div className="h-2.5 w-16 rounded-full bg-white/[0.18]" />
          <div className="mt-3 h-12 rounded-[0.9rem] bg-white/[0.05]" />
        </div>
        <div className="rounded-[1.05rem] border border-[var(--process-line)] bg-white/[0.04] p-3">
          <div className="h-2.5 w-12 rounded-full bg-white/[0.18]" />
          <div className="mt-3 h-8 rounded-[0.9rem] bg-white/[0.05]" />
        </div>
      </motion.div>

      <motion.div
        className={`process-code-panel absolute bottom-[11%] left-[8%] z-20 ${panelWidth} rounded-[1.4rem] p-4 sm:p-5`}
        style={{ opacity: codeOpacity, x: codeX, y: codeY, scale: codeScale }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[0.68rem] font-mono uppercase tracking-[0.18em] text-[var(--process-muted)]">
            Компонентная логика
          </span>
          <span className="h-2 w-2 rounded-full bg-[var(--process-accent-cool)]" />
        </div>

        <div className="space-y-2.5">
          {[72, 86, 58, 90, 64, 48].map((width, lineIndex) => (
            <motion.div
              className="process-code-line"
              key={`${width}-${lineIndex}`}
              style={{
                width: `${width}%`,
                transformOrigin: "left",
                opacity: codeOpacity,
                scaleX: lineScale,
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}

function InterfaceScene({ progress, compact }: SceneProps) {
  const baseOpacity = useTransform(progress, [0, 0.24, 1], [0.01, 0.04, 0.015]);
  const baseScale = useTransform(progress, [0, 0.24, 1], [0.976, 1, 0.986]);
  const interfaceOpacity = useTransform(
    progress,
    [0, 0.18, 0.58, 1],
    [0.06, 0.88, 1, 0.7],
  );
  const interfaceX = useTransform(progress, [0, 0.24, 1], [compact ? 0 : 26, 0, compact ? 0 : -4]);
  const interfaceY = useTransform(progress, [0, 0.26, 1], [compact ? 0 : -18, 0, compact ? 0 : -10]);
  const interfaceScale = useTransform(progress, [0, 0.24, 1], [0.92, 1.03, 0.99]);
  const previewOpacity = useTransform(progress, [0, 0.2, 1], [0.04, 0.82, 0.48]);
  const insetClass = compact ? "inset-[4.25rem]" : "inset-[4.75rem]";
  const clusterWidth = compact ? "w-[44%]" : "w-[48%]";

  return (
    <>
      <WireframeBase insetClass={insetClass} style={{ opacity: baseOpacity, scale: baseScale }} />

      <motion.div
        className="absolute left-[6%] top-[16%] z-[18] h-[42%] w-[42%] rounded-[1.45rem] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-4"
        style={{ opacity: previewOpacity, y: interfaceY, scale: interfaceScale }}
      >
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-16 rounded-full bg-white/[0.86]" />
          <div className="h-7 w-16 rounded-full bg-[rgba(187,166,255,0.18)]" />
        </div>
        <div className="mt-4 h-[58%] rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="h-9 rounded-[0.9rem] bg-white/[0.08]" />
          <div className="h-9 rounded-[0.9rem] bg-white/[0.08]" />
        </div>
      </motion.div>

      <motion.div
        className={`absolute right-[6%] top-[16%] z-20 grid ${clusterWidth} gap-3`}
        style={{
          opacity: interfaceOpacity,
          x: interfaceX,
          y: interfaceY,
          scale: interfaceScale,
        }}
      >
        <div className="rounded-[1.2rem] border border-[var(--process-line)] bg-white/[0.05] p-4">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-white/[0.82]" />
            <div className="rounded-full bg-[rgba(187,166,255,0.18)] px-2.5 py-1 text-[0.56rem] font-mono uppercase tracking-[0.16em] text-[var(--process-text)]">
              UI-сборка
            </div>
          </div>
          <div className="mt-4 h-16 rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.1rem] border border-[var(--process-line)] bg-white/[0.04] p-3">
            <div className="h-2.5 w-14 rounded-full bg-white/[0.8]" />
            <div className="mt-3 h-10 rounded-[0.95rem] bg-white/[0.06]" />
          </div>
          <div className="rounded-[1.1rem] border border-[var(--process-line)] bg-white/[0.04] p-3">
            <div className="h-2.5 w-14 rounded-full bg-white/[0.8]" />
            <div className="mt-3 h-10 rounded-[0.95rem] bg-white/[0.06]" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function FinalScene({ progress, compact }: SceneProps) {
  const baseOpacity = useTransform(progress, [0, 0.2, 1], [0.01, 0.03, 0.02]);
  const baseScale = useTransform(progress, [0, 0.24, 1], [0.982, 1, 0.996]);
  const finalOpacity = useTransform(
    progress,
    [0, 0.18, 0.52, 1],
    [0.08, 0.78, 1, 1],
  );
  const finalY = useTransform(progress, [0, 0.24, 1], [compact ? 0 : 30, 0, compact ? 0 : -4]);
  const finalScale = useTransform(progress, [0, 0.26, 1], [0.88, 1.05, 1.03]);
  const finalBlur = useTransform(progress, [0, 0.22], [14, 0]);
  const finalBlurFilter = useTransform(finalBlur, (value) => `blur(${value}px)`);
  const accentStripOpacity = useTransform(progress, [0, 0.22, 1], [0.18, 0.92, 0.86]);
  const insetClass = compact ? "inset-[4.25rem]" : "inset-[4.75rem]";
  const finalInset = compact ? "inset-5" : "inset-5 lg:inset-6 xl:inset-7";

  return (
    <>
      <WireframeBase insetClass={insetClass} style={{ opacity: baseOpacity, scale: baseScale }} />

      <motion.div
        className={`process-mockup absolute ${finalInset} z-30 overflow-hidden rounded-[1.65rem] p-4 sm:p-5`}
        style={{
          opacity: finalOpacity,
          y: finalY,
          scale: finalScale,
          filter: compact ? "blur(0px)" : finalBlurFilter,
        }}
      >
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4">
          <div>
            <p className="text-[0.68rem] font-mono uppercase tracking-[0.18em] text-[var(--process-muted)]">
              Финальный продукт
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[var(--process-text)] sm:text-xl">
              Готовый интерфейс к запуску
            </h3>
          </div>
          <div className="rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 text-[0.62rem] font-mono uppercase tracking-[0.18em] text-[var(--process-text)]">
            Финальная версия
          </div>
        </div>

        <motion.div
          className="mt-4 flex gap-2"
          style={{ opacity: accentStripOpacity }}
        >
          <div className="rounded-full bg-[rgba(242,157,118,0.18)] px-3 py-1 text-[0.58rem] font-mono uppercase tracking-[0.16em] text-[var(--process-text)]">
            Адаптив и сценарии
          </div>
          <div className="rounded-full bg-[rgba(141,162,255,0.14)] px-3 py-1 text-[0.58rem] font-mono uppercase tracking-[0.16em] text-[var(--process-text)]">
            Тонкая полировка
          </div>
        </motion.div>

        {compact ? (
          <div className="mt-4 grid h-[calc(100%-5.8rem)] gap-3">
            <div className="grid grid-cols-2 gap-3">
              {[0, 1].map((item) => (
                <div
                  className="rounded-[1rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-3"
                  key={item}
                >
                  <div className="h-2.5 w-12 rounded-full bg-[rgba(255,255,255,0.72)]" />
                  <div className="mt-3 h-8 rounded-[0.85rem] bg-[rgba(255,255,255,0.08)]" />
                </div>
              ))}
            </div>

            <div className="rounded-[1.15rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4">
              <div className="h-3 w-24 rounded-full bg-[rgba(255,255,255,0.78)]" />
              <div className="mt-4 h-24 rounded-[1rem] bg-[linear-gradient(180deg,rgba(242,157,118,0.18),rgba(141,162,255,0.12))]" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-11 rounded-[0.95rem] bg-[rgba(255,255,255,0.06)]" />
                <div className="h-11 rounded-[0.95rem] bg-[rgba(255,255,255,0.06)]" />
              </div>
            </div>

            <div className="rounded-[1.15rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-4">
              <div className="h-2.5 w-20 rounded-full bg-[rgba(255,255,255,0.7)]" />
              <div className="mt-4 space-y-2.5">
                <div className="h-2.5 w-full rounded-full bg-[rgba(255,255,255,0.12)]" />
                <div className="h-2.5 w-4/5 rounded-full bg-[rgba(255,255,255,0.12)]" />
                <div className="h-2.5 w-3/5 rounded-full bg-[rgba(255,255,255,0.12)]" />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 grid h-[calc(100%-5.8rem)] grid-cols-[0.3fr_0.7fr] gap-3 sm:gap-4">
            <div className="rounded-[1.15rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-3">
              <div className="space-y-2">
                <div className="h-9 rounded-[0.95rem] bg-[rgba(255,255,255,0.07)]" />
                <div className="h-9 rounded-[0.95rem] bg-[rgba(255,255,255,0.05)]" />
                <div className="h-9 rounded-[0.95rem] bg-[rgba(242,157,118,0.12)]" />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((item) => (
                  <div
                    className="rounded-[1rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-3"
                    key={item}
                  >
                    <div className="h-2.5 w-12 rounded-full bg-[rgba(255,255,255,0.72)]" />
                    <div className="mt-3 h-8 rounded-[0.85rem] bg-[rgba(255,255,255,0.08)]" />
                  </div>
                ))}
              </div>

              <div className="grid flex-1 gap-3 sm:gap-4 xl:grid-cols-[0.6fr_0.4fr]">
                <div className="rounded-[1.2rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4">
                  <div className="h-3 w-24 rounded-full bg-[rgba(255,255,255,0.78)]" />
                  <div className="mt-4 h-[60%] rounded-[1rem] bg-[linear-gradient(180deg,rgba(242,157,118,0.18),rgba(141,162,255,0.12))]" />
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-12 rounded-[0.95rem] bg-[rgba(255,255,255,0.06)]" />
                    <div className="h-12 rounded-[0.95rem] bg-[rgba(255,255,255,0.06)]" />
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.15rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-4">
                    <div className="h-2.5 w-16 rounded-full bg-[rgba(255,255,255,0.7)]" />
                    <div className="mt-4 h-20 rounded-[1rem] bg-[rgba(255,255,255,0.06)]" />
                  </div>
                  <div className="rounded-[1.15rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-4">
                    <div className="h-2.5 w-20 rounded-full bg-[rgba(255,255,255,0.7)]" />
                    <div className="mt-4 space-y-2.5">
                      <div className="h-2.5 w-full rounded-full bg-[rgba(255,255,255,0.12)]" />
                      <div className="h-2.5 w-4/5 rounded-full bg-[rgba(255,255,255,0.12)]" />
                      <div className="h-2.5 w-3/5 rounded-full bg-[rgba(255,255,255,0.12)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

function SceneById({
  stepId,
  progress,
  compact,
}: {
  stepId: ProcessStep["id"];
  progress: MotionValue<number>;
  compact: boolean;
}) {
  switch (stepId) {
    case "concept":
      return <ConceptScene progress={progress} compact={compact} accent={accentMap.ember} />;
    case "structure":
      return <StructureScene progress={progress} compact={compact} accent={accentMap.linen} />;
    case "code":
      return <CodeScene progress={progress} compact={compact} accent={accentMap.cobalt} />;
    case "interface":
      return <InterfaceScene progress={progress} compact={compact} accent={accentMap.violet} />;
    case "final":
      return <FinalScene progress={progress} compact={compact} accent={accentMap.glow} />;
  }
}

function SnapshotCanvas({ step, compact = false }: SnapshotCanvasProps) {
  const progress = useMotionValue(staticProgressMap[step.id]);

  return (
    <CanvasShell accent={accentMap[step.accent]} compact={compact} progress={progress}>
      <SceneById compact={compact} progress={progress} stepId={step.id} />
    </CanvasShell>
  );
}

function DesktopSequenceCanvas({
  activeIndex,
  progress,
  stageStops,
  steps,
}: DesktopSequenceCanvasProps) {
  const currentAccent = accentMap[steps[activeIndex]?.accent ?? "ember"];
  const effectiveStageStops =
    stageStops.length === steps.length
      ? stageStops
      : getFallbackStageStops(steps.length);
  const boundaries = getStageBoundaries(effectiveStageStops);

  const conceptProgress = useSegmentProgress(
    progress,
    boundaries[0],
    boundaries[1],
  );
  const structureProgress = useSegmentProgress(
    progress,
    boundaries[1],
    boundaries[2],
  );
  const codeProgress = useSegmentProgress(progress, boundaries[2], boundaries[3]);
  const interfaceProgress = useSegmentProgress(
    progress,
    boundaries[3],
    boundaries[4],
  );
  const finalProgress = useSegmentProgress(progress, boundaries[4], boundaries[5]);

  const conceptOpacity = useSceneOpacity(progress, boundaries, 0, 0.03);
  const structureOpacity = useSceneOpacity(progress, boundaries, 1, 0.032);
  const codeOpacity = useSceneOpacity(progress, boundaries, 2, 0.032);
  const interfaceOpacity = useSceneOpacity(progress, boundaries, 3, 0.032);
  const finalOpacity = useSceneOpacity(progress, boundaries, 4, 0.034);
  const conceptY = useSceneLift(conceptOpacity, 10);
  const structureY = useSceneLift(structureOpacity, 12);
  const codeY = useSceneLift(codeOpacity, 14);
  const interfaceY = useSceneLift(interfaceOpacity, 12);
  const finalY = useSceneLift(finalOpacity, 10);
  const conceptScale = useSceneScale(conceptOpacity, 0.988);
  const structureScale = useSceneScale(structureOpacity, 0.97);
  const codeScale = useSceneScale(codeOpacity, 0.962);
  const interfaceScale = useSceneScale(interfaceOpacity, 0.966);
  const finalScale = useSceneScale(finalOpacity, 0.97);

  return (
    <CanvasShell accent={currentAccent} progress={progress}>
      <motion.div
        className="absolute inset-0"
        style={{ opacity: conceptOpacity, y: conceptY, scale: conceptScale }}
      >
        <SceneById compact={false} progress={conceptProgress} stepId="concept" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ opacity: structureOpacity, y: structureY, scale: structureScale }}
      >
        <SceneById compact={false} progress={structureProgress} stepId="structure" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ opacity: codeOpacity, y: codeY, scale: codeScale }}
      >
        <SceneById compact={false} progress={codeProgress} stepId="code" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ opacity: interfaceOpacity, y: interfaceY, scale: interfaceScale }}
      >
        <SceneById compact={false} progress={interfaceProgress} stepId="interface" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ opacity: finalOpacity, y: finalY, scale: finalScale }}
      >
        <SceneById compact={false} progress={finalProgress} stepId="final" />
      </motion.div>
    </CanvasShell>
  );
}

export function ProcessSection({
  eyebrow,
  title,
  description,
  steps,
}: ProcessSectionProps) {
  const sequenceRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const stageStopsRef = useRef<number[]>(getFallbackStageStops(steps.length));
  const progress = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stageStops, setStageStops] = useState<number[]>(() =>
    getFallbackStageStops(steps.length),
  );
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const measure = () => {
      const sequence = sequenceRef.current;

      if (!sequence) {
        return;
      }

      const sequenceTop = sequence.getBoundingClientRect().top;
      const sequenceHeight = sequence.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScrollDistance = Math.max(sequenceHeight - viewportHeight, 1);

      const measuredStageStops = normalizeStops(
        steps.map((_, index) => {
          const node = stepRefs.current[index];
          if (!node) {
            return getFallbackStageStops(steps.length)[index];
          }

          const top = node.getBoundingClientRect().top - sequenceTop;
          const center = top + node.offsetHeight / 2;
          return (center - viewportHeight / 2) / maxScrollDistance;
        }),
      );

      stageStopsRef.current = measuredStageStops;
      setStageStops(measuredStageStops);
    };

    measure();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => measure())
        : null;

    [sequenceRef.current, ...stepRefs.current].forEach((node) => {
      if (node && resizeObserver) {
        resizeObserver.observe(node);
      }
    });

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [steps]);

  const effectiveStageStops =
    stageStops.length === steps.length
      ? stageStops
      : getFallbackStageStops(steps.length);

  useEffect(() => {
    stageStopsRef.current = effectiveStageStops;
  }, [effectiveStageStops, progress]);

  useEffect(() => {
    if (prefersReducedMotion) {
      progress.set(0);
      return;
    }

    const sequence = sequenceRef.current;
    if (!sequence) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: sequence,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        progress.set(self.progress);
        setActiveIndex(getStageIndex(self.progress, stageStopsRef.current));
      },
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, [prefersReducedMotion, progress, steps.length]);

  return (
    <section className="process-section anchor-section" id="process">
      <div className="section-shell relative">
        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--process-accent)]">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[var(--process-text)] sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--process-muted)] sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-12 space-y-6 lg:hidden">
          {steps.map((step) => (
            <article className="process-surface rounded-[1.75rem] p-5" key={step.id}>
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: accentMap[step.accent] }}
                />
                <p className="text-[0.72rem] font-mono uppercase tracking-[0.18em] text-[var(--process-muted)]">
                  {step.label}
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--process-text)]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--process-muted)] sm:text-base">
                {step.description}
              </p>

              <div className="mt-5 h-[19rem]">
                <SnapshotCanvas compact step={step} />
              </div>
            </article>
          ))}
        </div>

        <div
          className="relative mt-14 hidden gap-10 lg:grid lg:grid-cols-[0.78fr_1.22fr]"
          ref={sequenceRef}
        >
          <div className="space-y-24 pr-6">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const isReached = index <= activeIndex;

              return (
                <article
                  className="flex min-h-[72vh] items-center"
                  key={step.id}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                >
                  <div
                    className={`process-rail-card w-full rounded-[1.7rem] p-7 sm:p-8 transition-colors duration-200 ${
                      isActive
                        ? "border-[var(--process-line-strong)] bg-white/[0.06]"
                        : "bg-white/[0.025]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${isReached ? "opacity-100" : "opacity-35"}`}
                        style={{ backgroundColor: accentMap[step.accent] }}
                      />
                      <p className="text-[0.72rem] font-mono uppercase tracking-[0.18em] text-[var(--process-muted)]">
                        {step.label}
                      </p>
                    </div>

                    <h3
                      className={`mt-5 text-4xl font-semibold tracking-[-0.05em] transition-colors duration-200 xl:text-[3.3rem] ${
                        isActive
                          ? "text-[var(--process-text)]"
                          : "text-[rgba(245,241,234,0.72)]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-6 max-w-lg text-base leading-8 text-[var(--process-muted)] sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="relative">
            {prefersReducedMotion ? (
              <div className="sticky top-28 h-[34rem] xl:h-[38rem]">
                <SnapshotCanvas step={steps[activeIndex] ?? steps[0]} />
              </div>
            ) : (
              <div className="sticky top-28 h-[34rem] xl:h-[38rem]">
                <DesktopSequenceCanvas
                  activeIndex={activeIndex}
                  progress={progress}
                  stageStops={effectiveStageStops}
                  steps={steps}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
