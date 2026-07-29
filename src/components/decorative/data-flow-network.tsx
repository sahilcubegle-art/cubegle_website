"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 60, y: 90, delay: 0 },
  { x: 220, y: 40, delay: 0.3 },
  { x: 380, y: 110, delay: 0.6 },
  { x: 520, y: 50, delay: 0.9 },
  { x: 660, y: 130, delay: 1.2 },
] as const;

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
] as const;

export function DataFlowNetwork() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full w-full overflow-hidden opacity-70"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 720 180"
        className="absolute right-0 top-6 h-auto w-full max-w-3xl"
        preserveAspectRatio="xMaxYMin meet"
      >
        {links.map(([a, b], index) => {
          const from = nodes[a];
          const to = nodes[b];
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--brand-teal-light)"
              strokeWidth={1.5}
              strokeOpacity={0.35}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: index * 0.25, ease: "easeOut" }}
            />
          );
        })}
        {nodes.map((node, index) => (
          <motion.circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={5}
            fill={index % 2 === 0 ? "var(--brand-cyan)" : "var(--brand-orange)"}
            animate={{
              cy: [node.y, node.y - 10, node.y],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
