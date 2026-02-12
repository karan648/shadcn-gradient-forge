import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectValueProps {
  placeholder?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const SelectContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
} | null>(null);

function useSelect() {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within a Select provider");
  }
  return context;
}

export function Select({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  className,
}: SelectProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const [isOpen, setIsOpen] = React.useState(false);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
      setIsOpen(false);
    },
    [isControlled, onValueChange]
  );

  return (
    <SelectContext.Provider
      value={{ value, onValueChange: handleValueChange, isOpen, setIsOpen }}
    >
      <div className={cn("relative", className)}>{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, className }: SelectTriggerProps) {
  const { isOpen, setIsOpen } = useSelect();

  return (
    <button
      type="button"
      role="combobox"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-full border border-border/70 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 opacity-50 transition-transform",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

export function SelectValue({ placeholder }: SelectValueProps) {
  const { value } = useSelect();
  const [selectedLabel, setSelectedLabel] = React.useState<string>("");

  React.useEffect(() => {
    // Find the selected item's label from the DOM
    const selectedItem = document.querySelector(`[data-select-value="${value}"]`);
    if (selectedItem) {
      setSelectedLabel(selectedItem.textContent || "");
    } else {
      setSelectedLabel("");
    }
  }, [value]);

  return (
    <span className={cn(!selectedLabel && "text-muted-foreground")}>
      {selectedLabel || placeholder}
    </span>
  );
}

export function SelectContent({ children, className }: SelectContentProps) {
  const { isOpen } = useSelect();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={(e) => {
          e.stopPropagation();
          const selectContext = React.useContext(SelectContext);
          selectContext?.setIsOpen(false);
        }}
      />
      <div
        className={cn(
          "absolute z-50 min-w-[8rem] overflow-hidden rounded-2xl border border-border/70 bg-background/95 backdrop-blur-md shadow-lg animate-in fade-in-0 zoom-in-95",
          "top-full mt-1 left-0 right-0",
          className
        )}
      >
        <div className="p-1 max-h-[300px] overflow-auto">{children}</div>
      </div>
    </>
  );
}

export function SelectItem({ value, children, className }: SelectItemProps) {
  const { value: selectedValue, onValueChange } = useSelect();
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      role="option"
      aria-selected={isSelected}
      data-select-value={value}
      onClick={() => onValueChange(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-xl py-2.5 px-3 text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
    >
      {children}
    </button>
  );
}
