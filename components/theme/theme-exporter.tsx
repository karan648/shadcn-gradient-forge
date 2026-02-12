"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ExportBlock = {
  id: string;
  label: string;
  description: string;
  code: string;
  language: string;
};

const exportBlocks: ExportBlock[] = [
  {
    id: "root-class",
    label: "Root Theme Hook",
    description: "Attach the active theme class and data attributes to your root element.",
    code: `<html class="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">`,
    language: "html",
  },
  {
    id: "surface-layer",
    label: "Surface Layer Tokens",
    description: "Drop-in surface styles that tint cards, popovers, and sidebars.",
    code: `.bg-card {\n  background-color: hsl(var(--background) / 0.34);\n  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));\n  backdrop-filter: blur(16px);\n}`,
    language: "css",
  },
  {
    id: "tailwind-alias",
    label: "Tailwind Alias",
    description: "Map Tailwind colors to the theme tokens for component parity.",
    code: `colors: {\n  background: "hsl(var(--background))",\n  foreground: "hsl(var(--foreground))",\n  primary: "hsl(var(--primary))",\n  accent: "hsl(var(--accent))",\n}`,
    language: "ts",
  },
];

const copyLabel = (status: "idle" | "copied" | "error") => {
  if (status === "copied") return "Copied";
  if (status === "error") return "Copy failed";
  return "Copy";
};

export function ThemeExporter() {
  const [copyState, setCopyState] = useState<Record<string, "idle" | "copied" | "error">>({});

  const blocks = useMemo(() => exportBlocks, []);

  const handleCopy = async (block: ExportBlock) => {
    try {
      await navigator.clipboard.writeText(block.code);
      setCopyState((prev) => ({ ...prev, [block.id]: "copied" }));
      window.setTimeout(() => {
        setCopyState((prev) => ({ ...prev, [block.id]: "idle" }));
      }, 1400);
    } catch {
      setCopyState((prev) => ({ ...prev, [block.id]: "error" }));
    }
  };

  return (
    <Card className="border-border/50 bg-background/60">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle>Theme Export</CardTitle>
          <Badge variant="glass">Copy Ready</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Grab the exact tokens used in this studio and wire them into any shadcn project.
        </p>
      </CardHeader>
      <CardContent className="grid gap-4">
        {blocks.map((block) => {
          const state = copyState[block.id] ?? "idle";
          return (
            <div
              key={block.id}
              className="rounded-2xl border border-border/40 bg-background/50 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{block.label}</p>
                  <p className="text-xs text-muted-foreground">{block.description}</p>
                </div>
                <Button
                  size="sm"
                  variant={state === "copied" ? "glow" : "outline"}
                  onClick={() => handleCopy(block)}
                >
                  {copyLabel(state)}
                </Button>
              </div>
              <pre
                className={cn(
                  "mt-3 overflow-x-auto rounded-2xl bg-black/70 p-3 text-xs text-white/90",
                  "border border-white/10",
                )}
              >
                <code className={`language-${block.language}`}>{block.code}</code>
              </pre>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
