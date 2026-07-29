"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBlobs } from "@/components/decorative/animated-blobs";
import { Magnetic } from "@/components/motion/magnetic";
import { siteConfig, primaryCta } from "@/config/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CtaSection({
  title = "Let's talk about what your data should be doing for you",
  description = "Tell us where you are today and where you're trying to get to. We'll respond with a clear, honest read on the path forward.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-content">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-hairline bg-surface-1 px-6 py-14 text-center sm:px-16 sm:py-20"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <AnimatedBlobs />
          <div className="relative flex flex-col items-center gap-6">
            <motion.h2
              variants={fadeUp}
              className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {title}
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-xl text-base text-muted-foreground sm:text-lg">
              {description}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Button asChild size="lg" className="h-11 px-6 text-base">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowUpRight />
                  </Link>
                </Button>
              </Magnetic>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                {siteConfig.email.general}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
