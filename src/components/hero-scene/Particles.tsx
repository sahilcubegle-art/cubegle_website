"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 26;
const LINK_DISTANCE = 90;
const COLORS = ["#f59e0b", "#22d3ee", "#256f82"];

/**
 * Lightweight canvas particle field with constellation-style connection
 * lines. Canvas is used instead of N animated DOM nodes so this stays cheap
 * at 60fps — a single draw call per frame rather than dozens of reflowing
 * elements. Pauses when the tab is hidden and skips entirely under
 * prefers-reduced-motion.
 */
export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let frame: number | null = null;
    let visible = true;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.4 + 0.6,
      }));
    }

    function step() {
      if (!visible) {
        frame = requestAnimationFrame(step);
        return;
      }
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            ctx!.strokeStyle = `rgba(37, 111, 130, ${0.16 * (1 - dist / LINK_DISTANCE)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      particles.forEach((p, index) => {
        ctx!.fillStyle = COLORS[index % COLORS.length];
        ctx!.globalAlpha = 0.55;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.globalAlpha = 1;
      });

      frame = requestAnimationFrame(step);
    }

    function handleVisibility() {
      visible = !document.hidden;
    }

    resize();
    seed();
    frame = requestAnimationFrame(step);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement!);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
