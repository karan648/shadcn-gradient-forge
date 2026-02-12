import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
};

export function Switch({ checked, onCheckedChange, label }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "relative inline-flex h-7 w-12 items-center rounded-full border border-border/60 bg-background/40 transition-all",
        checked && "bg-primary/30 border-primary/50",
      )}
    >
      <span
        className={cn(
          "h-5 w-5 translate-x-1 rounded-full bg-foreground/80 shadow transition-all",
          checked && "translate-x-6 bg-primary",
        )}
      />
    </button>
  );
}
