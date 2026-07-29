"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const groupTags = { div: motion.div, ul: motion.ul, ol: motion.ol } as const;
const itemTags = { div: motion.div, li: motion.li } as const;
const revealTags = { div: motion.div, aside: motion.aside } as const;

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: keyof typeof groupTags;
}) {
  const Tag = groupTags[as];
  return (
    <Tag
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof itemTags;
  id?: string;
}) {
  const Tag = itemTags[as];
  return (
    <Tag variants={fadeUp} className={className} id={id}>
      {children}
    </Tag>
  );
}

export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof revealTags;
}) {
  const Tag = revealTags[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {children}
    </Tag>
  );
}
