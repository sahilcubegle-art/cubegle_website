"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedBlobs } from "@/components/decorative/animated-blobs";
import { TextReveal } from "@/components/motion/text-reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function PageHeader({
  eyebrow,
  title,
  description,
  decor,
  character,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  decor?: ReactNode;
  character?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-grid pt-28 pb-12 sm:pt-36 sm:pb-16">
      <AnimatedBlobs />
      {decor && (
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[26rem] opacity-70 lg:block">
          {decor}
        </div>
      )}
      {character && (
        <motion.div
          className="pointer-events-none absolute top-28 right-6 bottom-6 hidden w-56 items-center justify-center sm:top-36 lg:right-12 lg:flex lg:w-64 xl:right-20 xl:w-72"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
        >
          <Image
            src={character.src}
            alt={character.alt}
            width={1792}
            height={2432}
            className="h-auto w-full drop-shadow-xl"
            priority={false}
          />
        </motion.div>
      )}
      <motion.div
        className="container-content"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange-text"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          variants={fadeUp}
          aria-label={title}
          className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          <span className="sr-only">{title}</span>
          <TextReveal text={title} />
        </motion.h1>
        {description && (
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
