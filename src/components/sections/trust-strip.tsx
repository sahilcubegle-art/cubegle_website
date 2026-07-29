import { capabilityStrip } from "@/content/technologies";
import { Reveal } from "@/components/motion/reveal";

function ItemGroup({ hiddenOnReducedMotion }: { hiddenOnReducedMotion?: boolean }) {
  return (
    <div
      className={
        hiddenOnReducedMotion
          ? "flex shrink-0 gap-10 motion-reduce:hidden"
          : "flex shrink-0 flex-wrap gap-x-10 gap-y-3 motion-reduce:justify-center motion-reduce:px-6"
      }
    >
      {capabilityStrip.map((item) => (
        <span
          key={item}
          className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <Reveal>
      <section className="border-y border-hairline bg-surface-1 py-6" aria-label="Technologies we work with">
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 motion-reduce:w-full motion-reduce:animate-none">
            <ItemGroup />
            <ItemGroup hiddenOnReducedMotion />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface-1 to-transparent motion-reduce:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface-1 to-transparent motion-reduce:hidden" />
        </div>
      </section>
    </Reveal>
  );
}
