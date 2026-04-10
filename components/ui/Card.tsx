import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Hebt die Card leicht an beim Hover */
  hoverable?: boolean;
  /** Padding-Variante */
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hoverable = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-gray-100 shadow-sm",
        paddingClasses[padding],
        hoverable &&
          "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-brand-tint",
        className
      )}
    >
      {children}
    </div>
  );
}
