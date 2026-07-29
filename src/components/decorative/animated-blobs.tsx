"use client";

import { motion } from "framer-motion";

const blobRadii = [
  "42% 58% 70% 30% / 45% 45% 55% 55%",
  "58% 42% 35% 65% / 60% 35% 65% 40%",
  "35% 65% 55% 45% / 40% 60% 40% 60%",
  "42% 58% 70% 30% / 45% 45% 55% 55%",
];

const blobs: {
  color: string;
  size: string;
  style: { top?: string; left?: string; right?: string; bottom?: string };
  duration: number;
  range: { x: number[]; y: number[] };
}[] = [
  { color: "bg-brand-cyan/30", size: "28rem", style: { top: "-12%", left: "-2%" }, duration: 18, range: { x: [0, 46, -34, 0], y: [0, -38, 26, 0] } },
  { color: "bg-brand-orange/25", size: "24rem", style: { top: "6%", right: "0%" }, duration: 22, range: { x: [0, -40, 30, 0], y: [0, 32, -20, 0] } },
  { color: "bg-brand-teal-light/30", size: "22rem", style: { bottom: "-16%", left: "26%" }, duration: 26, range: { x: [0, 34, -30, 0], y: [0, -28, 22, 0] } },
  { color: "bg-brand-cyan/20", size: "16rem", style: { bottom: "4%", right: "18%" }, duration: 16, range: { x: [0, -26, 20, 0], y: [0, 22, -18, 0] } },
];

export function AnimatedBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute blur-3xl ${blob.color}`}
          style={{ width: blob.size, height: blob.size, ...blob.style }}
          animate={{
            x: blob.range.x,
            y: blob.range.y,
            scale: [1, 1.1, 0.94, 1],
            borderRadius: blobRadii,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
