"use client";

import { motion } from "framer-motion";

const checkpoints = [40, 150, 280, 410, 520];
const validateIndex = 2;

const packets = [0, 1, 2, 3].map((i) => ({ delay: i * 1.1, duration: 4 + (i % 2) }));

export function PipelineFlow() {
  return (
    <div className="pointer-events-none h-full w-full" aria-hidden="true">
      <svg viewBox="0 0 560 160" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <line
          x1={20}
          y1={80}
          x2={540}
          y2={80}
          stroke="var(--brand-teal-light)"
          strokeWidth={2}
          strokeOpacity={0.22}
        />

        {checkpoints.map((x, index) => (
          <motion.circle
            key={x}
            cx={x}
            cy={80}
            r={6}
            fill={index === validateIndex ? "var(--brand-cyan)" : "var(--brand-orange)"}
            animate={
              index === validateIndex
                ? { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }
                : { opacity: [0.5, 0.85, 0.5] }
            }
            transition={{
              duration: index === validateIndex ? 2.2 : 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}

        {packets.map((packet, index) => (
          <motion.rect
            key={index}
            y={75}
            width={10}
            height={10}
            rx={2}
            fill="var(--brand-orange)"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: [10, 530], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: packet.duration,
              repeat: Infinity,
              ease: "linear",
              delay: packet.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
