import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "cta" | "navy" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-brand-blue-tint text-brand-midnight border border-brand-electric/20",
  cta:
    "bg-brand-blue-tint text-brand-electric border border-brand-electric/20",
  navy:
    "bg-brand-midnight text-white",
  outline:
    "border border-brand-electric/30 text-brand-electric bg-transparent",
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
