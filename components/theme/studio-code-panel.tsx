"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Check, Copy, FileCode2, Loader2, Download, Palette } from "lucide-react";
import { type ThemeId, NITRO_ALL_THEMES } from "./theme-engine";
import { 
  exportTokens, 
  downloadFile, 
  copyToClipboard,
  generateAllThemesCSS,
  getThemeTokens,
  type ExportFormat,
} from "./token-export-utils";

type CopyStatus = "idle" | "copying" | "copied" | "error";
type TabValue = "preview" | "code" | "tokens";

interface StudioCodePanelProps {
  themeId?: ThemeId;
  colorMode?: "dark" | "light";
}

export function StudioCodePanel({ themeId = "theme-nitro-midnight-blurple", colorMode = "dark" }: StudioCodePanelProps) {
  const [tab, setTab] = useState<TabValue>("preview");
  const [copyState, setCopyState] = useState<Record<string, CopyStatus>>({});
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>("css");

  const theme = useMemo(() => NITRO_ALL_THEMES.find((t) => t.id === themeId), [themeId]);
  const tokens = useMemo(() => getThemeTokens(themeId), [themeId]);

  const exportResult = useMemo(() => {
    return exportTokens({ format: selectedFormat, themeId, colorMode });
  }, [selectedFormat, themeId, colorMode]);

  const allThemesExport = useMemo(() => generateAllThemesCSS(), []);

  const snippets = useMemo(() => {
    return [
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
      className="${colorMode} ${themeId}"
      data-theme="${themeId}"
      data-color-mode="${colorMode}"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider defaultTheme="${themeId}" defaultColorMode="${colorMode}">
          {children}
        </ThemeProvider>
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
    id: "${themeId}",
    label: "${theme?.label ?? "Theme"}",
    preview: "${theme?.preview ?? ""}",
  },
] as const;

export type ThemeId = (typeof NITRO_PUBLIC_THEMES)[number]["id"];`,
      },
      {
        id: "globals",
        label: "Global Tokens",
        path: "app/globals.css",
        description: "Define surface and app gradient tokens for all components.",
        code: generateThemeCSS(themeId, tokens),
      },
      {
        id: "theme-context",
        label: "Theme Context",
        path: "components/theme/theme-context.tsx",
        description: "Client provider that applies theme and color mode state.",
        code: generateThemeContextCode(themeId, colorMode),
      },
    ];
  }, [themeId, colorMode, theme, tokens]);

  const [activeSnippetId, setActiveSnippetId] = useState(snippets[0].id);
  const activeSnippet = useMemo(
    () => snippets.find((snippet) => snippet.id === activeSnippetId) ?? snippets[0],
    [activeSnippetId, snippets]
  );

  const handleCopy = async (id: string, content: string) => {
    setCopyState((prev) => ({ ...prev, [id]: "copying" }));
    const success = await copyToClipboard(content);
    setCopyState((prev) => ({ ...prev, [id]: success ? "copied" : "error" }));
    window.setTimeout(() => {
      setCopyState((prev) => ({ ...prev, [id]: "idle" }));
    }, 1400);
  };

  const handleDownload = (result: typeof exportResult) => {
    downloadFile(result);
  };

  const copyLabel = (status: CopyStatus) => {
    if (status === "copying") return "Copying...";
    if (status === "copied") return "Copied";
    if (status === "error") return "Copy failed";
    return "Copy code";
  };

  const setupPackState = copyState["setup-pack"] ?? "idle";
  const activeSnippetState = copyState[activeSnippet.id] ?? "idle";
  const tokensState = copyState["tokens"] ?? "idle";
  const allThemesState = copyState["all-themes"] ?? "idle";

  const requiredSnippetIds = ["root-layout", "theme-engine", "theme-context", "globals"] as const;

  const getSetupPack = () => {
    return requiredSnippetIds
      .map((id) => snippets.find((snippet) => snippet.id === id))
      .filter((snippet): snippet is typeof snippets[0] => Boolean(snippet))
      .map((snippet) => `// ${snippet.path}\n${snippet.code}`)
      .join("\n\n");
  };

  return (
    <Card className="border-border/50 bg-background/60">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle>Token Export</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Preview install guidance or open full code snippets with copy actions.
              {theme && (
                <span className="block mt-1 font-medium text-foreground">
                  Current theme: {theme.label}
                </span>
              )}
            </p>
          </div>
          <Badge variant="glass" className="gap-1">
            <FileCode2 className="h-3 w-3" /> Dev Ready
          </Badge>
        </div>
        <div className="flex flex-wrap items-center gap-2">
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
          <Button
            variant={tab === "tokens" ? "default" : "ghost"}
            size="sm"
            onClick={() => setTab("tokens")}
          >
            <Palette className="h-3.5 w-3.5 mr-1" />
            Tokens
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
            
            {/* Theme Preview */}
            {theme && (
              <div className="mt-4 p-4 rounded-xl bg-background/70 border border-border/40">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-16 h-16 rounded-xl shadow-lg"
                    style={{ background: theme.preview }}
                  />
                  <div>
                    <p className="font-medium">{theme.label}</p>
                    <p className="text-xs text-muted-foreground font-mono">{theme.id}</p>
                    <p className="text-xs text-muted-foreground mt-1 capitalize">{colorMode} mode</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {requiredSnippetIds.map((id) => {
                const snippet = snippets.find((item) => item.id === id);
                if (!snippet) return null;
                return (
                  <Badge key={id} variant="outline">
                    {snippet.path}
                  </Badge>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/docs">Open docs</a>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleCopy("setup-pack", getSetupPack())}
                disabled={setupPackState === "copying"}
              >
                {setupPackState === "copying" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : setupPackState === "copied" ? (
                  <Check className="h-4 w-4" />
                ) : setupPackState === "error" ? (
                  <AlertCircle className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copyLabel(setupPackState)}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setTab("code")}>
                Open code snippets
              </Button>
            </div>
          </div>
        ) : tab === "code" ? (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {snippets.map((snippet) => (
                <Button
                  key={snippet.id}
                  size="sm"
                  variant={activeSnippetId === snippet.id ? "default" : "ghost"}
                  onClick={() => setActiveSnippetId(snippet.id)}
                >
                  {snippet.label}
                </Button>
              ))}
            </div>

            <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="break-all text-sm font-semibold">{activeSnippet.path}</p>
                  <p className="text-xs text-muted-foreground">{activeSnippet.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(activeSnippet.id, activeSnippet.code)}
                    disabled={activeSnippetState === "copying"}
                  >
                    {activeSnippetState === "copying" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : activeSnippetState === "copied" ? (
                      <Check className="h-4 w-4" />
                    ) : activeSnippetState === "error" ? (
                      <AlertCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copyLabel(activeSnippetState)}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleCopy("setup-pack", getSetupPack())}
                    disabled={setupPackState === "copying"}
                  >
                    {setupPackState === "copying" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : setupPackState === "copied" ? (
                      <Check className="h-4 w-4" />
                    ) : setupPackState === "error" ? (
                      <AlertCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    Copy All
                  </Button>
                </div>
              </div>
              <pre className="mt-4 max-h-[360px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Token Export Formats */}
            <div className="flex flex-wrap gap-2">
              {[
                { value: "css" as ExportFormat, label: "CSS" },
                { value: "json" as ExportFormat, label: "JSON" },
                { value: "tailwind" as ExportFormat, label: "Tailwind" },
                { value: "w3c-tokens" as ExportFormat, label: "W3C" },
              ].map((format) => (
                <Button
                  key={format.value}
                  size="sm"
                  variant={selectedFormat === format.value ? "default" : "ghost"}
                  onClick={() => setSelectedFormat(format.value)}
                >
                  {format.label}
                </Button>
              ))}
            </div>

            {/* Export Preview */}
            <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <p className="text-sm font-semibold">{exportResult.filename}</p>
                  <p className="text-xs text-muted-foreground">
                    {theme?.label} theme in {selectedFormat.toUpperCase()} format
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy("tokens", exportResult.content)}
                    disabled={tokensState === "copying"}
                  >
                    {tokensState === "copying" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : tokensState === "copied" ? (
                      <Check className="h-4 w-4" />
                    ) : tokensState === "error" ? (
                      <AlertCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copyLabel(tokensState)}
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleDownload(exportResult)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
              <pre className="max-h-[300px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90">
                <code>{exportResult.content}</code>
              </pre>
            </div>

            {/* All Themes Export */}
            <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">All Themes</p>
                  <p className="text-xs text-muted-foreground">
                    Export all {NITRO_ALL_THEMES.length} themes at once
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy("all-themes", allThemesExport.content)}
                    disabled={allThemesState === "copying"}
                  >
                    {allThemesState === "copying" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : allThemesState === "copied" ? (
                      <Check className="h-4 w-4" />
                    ) : allThemesState === "error" ? (
                      <AlertCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copyLabel(allThemesState)}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleDownload(allThemesExport)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper functions
function generateThemeCSS(themeId: string, tokens: Record<string, string>): string {
  const cssVars = Object.entries(tokens)
    .filter(([key]) => key !== "--app-surface-tint")
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  return `.${themeId} {
${cssVars}
  --app-surface-tint: ${tokens["--app-surface-tint"] ?? "transparent"};
  --app-gradient:
    radial-gradient(1050px 560px at -10% -20%, hsl(var(--primary) / 0.3), transparent 60%),
    radial-gradient(920px 520px at 112% 2%, hsl(var(--accent) / 0.22), transparent 58%),
    linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--background)) 50%, hsl(var(--background)) 100%);
}`;
}

function generateThemeContextCode(themeId: string, colorMode: string): string {
  return `"use client";

import { createContext, useContext, useState } from "react";
import { applyTheme } from "@/components/theme/theme-engine";

const ThemeContext = createContext(null);

export function ThemeProvider({ 
  children, 
  defaultTheme = "${themeId}",
  defaultColorMode = "${colorMode}"
}: { 
  children: React.ReactNode;
  defaultTheme?: string;
  defaultColorMode?: "dark" | "light";
}) {
  const [themeId, setThemeId] = useState(defaultTheme);
  const [colorMode, setColorMode] = useState<"dark" | "light">(defaultColorMode);

  const updateTheme = (nextTheme: string) => {
    setThemeId(nextTheme);
    applyTheme(nextTheme, colorMode);
  };

  const updateMode = (nextMode: "dark" | "light") => {
    setColorMode(nextMode);
    applyTheme(themeId, nextMode);
  };

  return (
    <ThemeContext.Provider value={{ themeId, colorMode, setThemeId: updateTheme, setColorMode: updateMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};`;
}
