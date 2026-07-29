"use client";

import { motion } from "framer-motion";

const layers = [
  { x: 40, nodes: [40, 110, 180] },
  { x: 210, nodes: [20, 75, 130, 185] },
  { x: 380, nodes: [55, 130] },
];

const connections = layers.slice(0, -1).flatMap((layer, layerIndex) => {
  const next = layers[layerIndex + 1];
  return layer.nodes.flatMap((y1) =>
    next.nodes.map((y2) => ({
      x1: layer.x,
      y1,
      x2: next.x,
      y2,
    }))
  );
});

const pulses = connections.filter((_, index) => index % 3 === 0);

export function NeuralNetwork() {
  return (
    <div className="pointer-events-none h-full w-full" aria-hidden="true">
      <svg viewBox="0 0 420 220" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {connections.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--brand-teal-light)"
            strokeWidth={1}
            strokeOpacity={0.18}
          />
        ))}

        {pulses.map((line, index) => (
          <motion.circle
            key={index}
            r={2.5}
            fill="var(--brand-orange)"
            initial={{ cx: line.x1, cy: line.y1, opacity: 0 }}
            animate={{ cx: [line.x1, line.x2], cy: [line.y1, line.y2], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          />
        ))}

        {layers.map((layer, layerIndex) =>
          layer.nodes.map((y, nodeIndex) => (
            <motion.circle
              key={`${layerIndex}-${nodeIndex}`}
              cx={layer.x}
              cy={y}
              r={5}
              fill={layerIndex === 1 ? "var(--brand-cyan)" : "var(--brand-orange)"}
              animate={{ scale: [1, 1.3, 1], opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: layerIndex * 0.4 + nodeIndex * 0.08,
              }}
            />
          ))
        )}
      </svg>
    </div>
  );
}
