import { cn } from "@/lib/utils";

type LabelVariant = "default" | "light";

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: LabelVariant;
  className?: string;
}

export function SectionLabel({
  children,
  variant = "default",
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.1em] font-sans mb-3",
        variant === "default" ? "text-brand-electric" : "text-brand-muted",
        className
      )}
    >
      {children}
    </p>
  );
}
