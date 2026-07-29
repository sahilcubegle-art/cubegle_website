import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
        className
      )}
    >
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        Cubegle
      </span>
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-brand-orange-text">
        Data · AI · Cloud
      </span>
    </Link>
  );
}
