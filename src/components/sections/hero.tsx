"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/sections/hero-visual";
import { AnimatedBlobs } from "@/components/decorative/animated-blobs";
import { DataFlowNetwork } from "@/components/decorative/data-flow-network";
import { CursorGlow } from "@/components/decorative/cursor-glow";
import { TextReveal } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { siteConfig, primaryCta } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const HeroScene = dynamic(
  () => import("@/components/hero-scene/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <Image
        src="/characters/cubey/master-neutral-standing.svg"
        alt=""
        width={1792}
        height={2432}
        className="h-auto w-28 drop-shadow-lg"
      />
    ),
  }
);

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-28 pb-16 sm:pt-36 sm:pb-20">
      <AnimatedBlobs />
      <DataFlowNetwork />
      <CursorGlow />
      <motion.div
        className="pointer-events-none absolute top-24 right-4 hidden items-start justify-center xl:right-8 xl:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HeroScene />
      </motion.div>
      <div className="container-content">
        <motion.div
          className="flex max-w-3xl flex-col gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange-text"
          >
            Data · AI · Cloud Engineering
          </motion.span>

          <motion.h1
            variants={fadeUp}
            aria-label={siteConfig.positioning}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            <span className="sr-only">{siteConfig.positioning}</span>
            <TextReveal text={siteConfig.positioning} />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap gap-3">
            <Magnetic>
              <Button asChild size="lg" className="h-11 px-6 text-base">
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowUpRight />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild variant="outline" size="lg" className="h-11 px-6 text-base">
              <Link href="/case-studies">See our work</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ChevronDown className="size-5" strokeWidth={1.75} />
        </motion.div>
      </motion.div>
    </section>
  );
}
