import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
};

export function Switch({ checked, defaultChecked = false, onCheckedChange, label }: SwitchProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    const newValue = !isChecked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onCheckedChange?.(newValue);
  };
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      aria-label={label}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-7 w-12 items-center rounded-full border border-border/60 bg-background/40 transition-all",
        isChecked && "bg-primary/30 border-primary/50",
      )}
    >
      <span
        className={cn(
          "h-5 w-5 translate-x-1 rounded-full bg-foreground/80 shadow transition-all",
          isChecked && "translate-x-6 bg-primary",
        )}
      />
    </button>
  );
}
