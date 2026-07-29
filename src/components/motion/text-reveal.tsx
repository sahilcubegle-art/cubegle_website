"use client";

import { motion, type Variants } from "framer-motion";
import { easeOutPremium, viewportOnce } from "@/lib/motion";

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: easeOutPremium } },
};

const containerVariants = (delayChildren: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren } },
});

export function TextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");

  return (
    <motion.span
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={containerVariants(delay)}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-[0.15em] align-top">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
