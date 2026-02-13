import * as React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border border-border/50 bg-background text-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
        className
      )}
      {...props}
    />
  );
}
