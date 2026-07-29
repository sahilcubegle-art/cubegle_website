"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (reduceMotion) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;

    function handleMove(event: PointerEvent) {
      const rect = parent!.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    }
    function handleEnter() {
      setActive(true);
    }
    function handleLeave() {
      setActive(false);
    }

    parent.addEventListener("pointermove", handleMove);
    parent.addEventListener("pointerenter", handleEnter);
    parent.addEventListener("pointerleave", handleLeave);
    return () => {
      parent.removeEventListener("pointermove", handleMove);
      parent.removeEventListener("pointerenter", handleEnter);
      parent.removeEventListener("pointerleave", handleLeave);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute -z-10 size-[26rem] rounded-full blur-3xl"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in oklch, var(--brand-cyan) 40%, transparent) 0%, transparent 70%)",
      }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  );
}
