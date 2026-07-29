"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export function StatCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const target = parseInt(value, 10);
  const suffix = value.slice(String(target).length);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
