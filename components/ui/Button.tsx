import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "quiet";
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
  /** Electric Blue — primäre Aktionen */
  primary:
    "bg-brand-electric text-white hover:bg-blue-600 active:scale-95 shadow-sm",
  /** Outline Electric — sekundäre Aktionen auf hellem BG */
  secondary:
    "border border-brand-electric text-brand-electric hover:bg-brand-blue-tint",
  /** Ghost White — auf dunklem BG (Midnight/Ink) */
  ghost:
    "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
  /** Ghost Dark — auf hellem BG, dezent */
  quiet:
    "text-brand-slate hover:text-brand-midnight underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg min-h-[36px]",
  md: "px-6 py-3 text-sm rounded-lg min-h-[44px]",
  lg: "px-8 py-4 text-base rounded-xl min-h-[52px]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold font-sans transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-electric focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

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
