"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type ProjectPreviewProps = {
  preset: "desktop" | "dashboard" | "messenger";
  featured?: boolean;
};

export function ProjectPreview({
  preset,
  featured = false,
}: ProjectPreviewProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const shellClass = featured
    ? "project-preview-shell project-preview-shell-featured"
    : "project-preview-shell";
  const windowClass = featured
    ? "project-preview-window project-preview-window-featured"
    : "project-preview-window";

  useEffect(() => {
    const shell = shellRef.current;
    const previewWindow = windowRef.current;
    const glow = glowRef.current;
    const body = bodyRef.current;

    if (!shell || !previewWindow || !glow || !body) {
      return;
    }

    const quickRotateX = gsap.quickTo(previewWindow, "rotationX", {
      duration: 0.4,
      ease: "power3.out",
    });
    const quickRotateY = gsap.quickTo(previewWindow, "rotationY", {
      duration: 0.4,
      ease: "power3.out",
    });
    const quickX = gsap.quickTo(previewWindow, "x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const quickY = gsap.quickTo(previewWindow, "y", {
      duration: 0.45,
      ease: "power3.out",
    });
    const quickGlowX = gsap.quickTo(glow, "xPercent", {
      duration: 0.6,
      ease: "power3.out",
    });
    const quickGlowY = gsap.quickTo(glow, "yPercent", {
      duration: 0.6,
      ease: "power3.out",
    });
    const quickBodyY = gsap.quickTo(body, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const handleMove = (event: PointerEvent) => {
      const bounds = shell.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      const relativeY = (event.clientY - bounds.top) / bounds.height;
      const rotateY = (relativeX - 0.5) * (featured ? 8 : 6);
      const rotateX = (0.5 - relativeY) * (featured ? 7 : 5);

      quickRotateX(rotateX);
      quickRotateY(rotateY);
      quickX((relativeX - 0.5) * (featured ? 8 : 6));
      quickY((relativeY - 0.5) * (featured ? 6 : 4));
      quickGlowX((relativeX - 0.5) * 18);
      quickGlowY((relativeY - 0.5) * 22);
      quickBodyY((0.5 - relativeY) * 10);
    };

    const handleEnter = () => {
      gsap.to(glow, {
        opacity: 0.5,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(previewWindow, {
        scale: 1.015,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      quickRotateX(0);
      quickRotateY(0);
      quickX(0);
      quickY(0);
      quickGlowX(0);
      quickGlowY(0);
      quickBodyY(0);
      gsap.to(glow, {
        opacity: 0.32,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(previewWindow, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    shell.addEventListener("pointerenter", handleEnter);
    shell.addEventListener("pointermove", handleMove);
    shell.addEventListener("pointerleave", handleLeave);

    return () => {
      shell.removeEventListener("pointerenter", handleEnter);
      shell.removeEventListener("pointermove", handleMove);
      shell.removeEventListener("pointerleave", handleLeave);
    };
  }, [featured]);

  if (preset === "desktop") {
    return (
      <div className={shellClass} ref={shellRef}>
        <div className="project-preview-glow project-preview-glow-amber" ref={glowRef} />
        <div className={windowClass} ref={windowRef}>
          <div className="project-preview-toolbar">
            <span />
            <span />
            <span />
            <p>Local desk</p>
          </div>
          <div className="project-preview-body grid grid-cols-[0.28fr_0.72fr] gap-3" ref={bodyRef}>
            <div className="grid gap-2">
              <div className="project-preview-pill project-preview-pill-strong" />
              <div className="project-preview-pill" />
              <div className="project-preview-pill" />
              <div className="project-preview-pill project-preview-pill-accent" />
            </div>
            <div className="grid gap-3">
              <div className="project-preview-banner">
                <div className="h-2.5 w-[4.5rem] rounded-full bg-[rgba(240,232,223,0.22)]" />
                <div className="rounded-full bg-[rgba(242,157,118,0.18)] px-2.5 py-1 text-[0.52rem] uppercase tracking-[0.16em] text-[var(--foreground-soft)]">
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
        </div>
      </div>
    );
  }

  if (preset === "dashboard") {
    return (
      <div className={shellClass} ref={shellRef}>
        <div className="project-preview-glow project-preview-glow-violet" ref={glowRef} />
        <div className={windowClass} ref={windowRef}>
          <div className="project-preview-toolbar">
            <span />
            <span />
            <span />
            <p>Edu system</p>
          </div>
          <div className="project-preview-body grid gap-3" ref={bodyRef}>
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
            <div className="project-preview-accent-card">
              <div className="h-2.5 w-24 rounded-full bg-[rgba(240,232,223,0.22)]" />
              <div className="mt-3 h-12 rounded-[0.95rem] bg-[linear-gradient(180deg,rgba(187,166,255,0.28),rgba(187,166,255,0.1))]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={shellClass} ref={shellRef}>
      <div className="project-preview-glow project-preview-glow-cool" ref={glowRef} />
      <div className={windowClass} ref={windowRef}>
        <div className="project-preview-toolbar">
          <span />
          <span />
          <span />
          <p>Realtime flow</p>
        </div>
        <div className="project-preview-body grid grid-cols-[0.44fr_0.56fr] gap-3" ref={bodyRef}>
          <div className="grid gap-2">
            <div className="project-preview-banner justify-start gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[rgba(141,162,255,0.72)]" />
              <div className="h-2.5 w-16 rounded-full bg-[rgba(240,232,223,0.18)]" />
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
      </div>
    </div>
  );
}
