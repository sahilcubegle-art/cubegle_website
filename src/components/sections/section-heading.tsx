import { TextReveal } from "@/components/motion/text-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange-text">
          {eyebrow}
        </span>
      )}
      <h2
        aria-label={title}
        className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        <span className="sr-only">{title}</span>
        <TextReveal text={title} />
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-base text-muted-foreground sm:text-lg",
            align === "center" && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
