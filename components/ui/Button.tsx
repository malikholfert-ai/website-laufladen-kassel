import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  as?: "button";
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: "link";
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  /** Grün — NUR für primäre Aktionen (Termin buchen, Laufanalyse anfragen) */
  primary:
    "bg-brand-cta text-white hover:opacity-90 active:opacity-80 shadow-sm",
  /** Outline — Secondary Actions */
  secondary:
    "border-2 border-brand-blue text-brand-navy hover:bg-brand-tint active:bg-brand-tint/70",
  /** Ghost — auf dunklem Hintergrund */
  ghost:
    "border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 active:bg-white/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg min-h-[36px]",
  md: "px-6 py-3 text-sm rounded-lg min-h-[44px]",
  lg: "px-8 py-4 text-base rounded-xl min-h-[52px]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold font-sans transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (props.as === "link") {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
