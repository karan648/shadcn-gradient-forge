import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "secondary"
  | "ghost"
  | "outline"
  | "glow";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:translate-y-[-1px]",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "bg-transparent hover:bg-muted/70",
  outline:
    "border border-border/70 bg-transparent hover:bg-muted/70 text-foreground",
  glow:
    "bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)_/_0.35)] hover:shadow-[0_0_35px_hsl(var(--primary)_/_0.55)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button({
  className,
  variant = "default",
  size = "md",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
      ...(props as Record<string, unknown>),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
