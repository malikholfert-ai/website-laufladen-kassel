import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "cta" | "navy" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-brand-tint text-brand-navy border border-brand-blue/20",
  cta:
    "bg-brand-cta-light text-brand-cta border border-brand-cta/20",
  navy:
    "bg-brand-navy text-white",
  outline:
    "border border-brand-blue/30 text-brand-blue bg-transparent",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-[0.06em]",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
