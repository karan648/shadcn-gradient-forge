"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy, FileCode2 } from "lucide-react";

type CodeSnippet = {
  id: string;
  label: string;
  path: string;
  description: string;
  code: string;
};

const snippets: CodeSnippet[] = [
  {
    id: "root-layout",
    label: "Root Layout",
    path: "app/layout.tsx",
    description: "Set default theme and wrap app with ThemeProvider.",
    code: `import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-context";

export const metadata: Metadata = {
  title: "Gradient Forge",
  description: "A production-ready gradient theming system for shadcn components.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark theme-nitro-midnight-blurple"
      data-theme="theme-nitro-midnight-blurple"
      data-color-mode="dark"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}`,
  },
  {
    id: "theme-engine",
    label: "Theme Engine",
    path: "components/theme/theme-engine.ts",
    description: "Add and manage your theme presets.",
    code: `export const NITRO_PUBLIC_THEMES = [
  {
    id: "theme-nitro-midnight-blurple",
    label: "Midnight Blurple",
    preview: "radial-gradient(...), linear-gradient(...)",
  },
] as const;

export const MEMORY_LANE_THEME = {
  id: "theme-nitro-memory-lane",
  label: "Memory Lane",
  preview: "radial-gradient(...), linear-gradient(...)",
} as const;`,
  },
  {
    id: "globals",
    label: "Global Tokens",
    path: "app/globals.css",
    description: "Define surface and app gradient tokens for all components.",
    code: `.theme-nitro-midnight-blurple {
  --background: 235 26% 11%;
  --card: 235 22% 12%;
  --primary: 241 92% 70%;
  --accent: 210 92% 65%;
  --ring: 241 92% 70%;
  --app-gradient:
    radial-gradient(1050px 560px at -10% -20%, hsl(246 92% 66% / 0.3), transparent 60%),
    radial-gradient(920px 520px at 112% 2%, hsl(201 92% 63% / 0.22), transparent 58%),
    linear-gradient(160deg, hsl(232 29% 12%) 0%, hsl(231 24% 12%) 50%, hsl(228 22% 10%) 100%);
  --app-surface-tint: hsl(241 92% 70% / 0.1);
}`,
  },
  {
    id: "use-theme",
    label: "Theme Hook",
    path: "components/theme/theme-context.tsx",
    description: "Use setThemeId and setColorMode in your components.",
    code: `"use client";

import { useThemeContext } from "@/components/theme/theme-context";

export function ThemeActions() {
  const { themeId, colorMode, setThemeId, setColorMode } = useThemeContext();

  return (
    <div>
      <p>{themeId}</p>
      <p>{colorMode}</p>
      <button onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}>Toggle mode</button>
      <button onClick={() => setThemeId("theme-nitro-aurora")}>Set Aurora</button>
    </div>
  );
}`,
  },
];

const copyLabel = (status: "idle" | "copied" | "error") => {
  if (status === "copied") return "Copied";
  if (status === "error") return "Copy failed";
  return "Copy code";
};

export function StudioCodePanel() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [activeId, setActiveId] = useState(snippets[0].id);
  const [copyState, setCopyState] = useState<Record<string, "idle" | "copied" | "error">>({});

  const activeSnippet = useMemo(
    () => snippets.find((snippet) => snippet.id === activeId) ?? snippets[0],
    [activeId],
  );

  const handleCopy = async (id: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyState((prev) => ({ ...prev, [id]: "copied" }));
      window.setTimeout(() => {
        setCopyState((prev) => ({ ...prev, [id]: "idle" }));
      }, 1400);
    } catch {
      setCopyState((prev) => ({ ...prev, [id]: "error" }));
    }
  };

  return (
    <Card className="border-border/50 bg-background/60">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <CardTitle>Token Export</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Preview install guidance or open full code snippets with copy actions.
            </p>
          </div>
          <Badge variant="glass" className="gap-1">
            <FileCode2 className="h-3 w-3" /> Dev Ready
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={tab === "preview" ? "default" : "ghost"}
            size="sm"
            onClick={() => setTab("preview")}
          >
            Preview
          </Button>
          <Button
            variant={tab === "code" ? "default" : "ghost"}
            size="sm"
            onClick={() => setTab("code")}
          >
            Code
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {tab === "preview" ? (
          <div className="rounded-2xl border border-border/40 bg-background/50 p-5">
            <h3 className="text-lg font-semibold">Copy-ready setup</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Add data-theme attributes to your app root, import global tokens, and use ThemeProvider to keep
              theme state synced across shadcn components.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/docs">Open docs</a>
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setTab("code")}>
                Open code snippets
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {snippets.map((snippet) => (
                <Button
                  key={snippet.id}
                  size="sm"
                  variant={activeId === snippet.id ? "default" : "ghost"}
                  onClick={() => setActiveId(snippet.id)}
                >
                  {snippet.label}
                </Button>
              ))}
            </div>

            <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{activeSnippet.path}</p>
                  <p className="text-xs text-muted-foreground">{activeSnippet.description}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopy(activeSnippet.id, activeSnippet.code)}
                >
                  {copyState[activeSnippet.id] === "copied" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copyLabel(copyState[activeSnippet.id] ?? "idle")}
                </Button>
              </div>
              <pre className="mt-4 max-h-[360px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
