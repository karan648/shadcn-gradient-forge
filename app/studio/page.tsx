"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThemeContext } from "@/components/theme/theme-context";
import { NITRO_ALL_THEMES, type ThemeId } from "@/components/theme/theme-engine";
import { getThemeTokens } from "@/components/theme/token-export-utils";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/toast";
import { 
  AnimatedSection, 
  StaggerContainer,
  MagneticButton,
  FloatingElement
} from "@/components/ui/gsap-animated";
import { 
  Palette, 
  Layers, 
  Code2, 
  Download, 
  Zap, 
  Check, 
  Copy,
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  Eye,
  Settings,
  Sun,
  Moon,
  ChevronRight,
  Search,
  Bell,
  User,
  Mail,
  Loader2,
  AlertCircle,
  Info,
  CheckCircle2,
  X,
  Trash2,
  Plus,
  MoreHorizontal,
  Layout,
  Type,
  Image as ImageIcon,
  Component,
  Palette as PaletteIcon,
  Wand2,
  FileCode,
  Download as DownloadIcon,
  Share2,
  Moon as MoonIcon,
  Sun as SunIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Export formats
const exportFormats = [
  { id: "css", label: "CSS", icon: FileCode },
  { id: "scss", label: "SCSS", icon: FileCode },
  { id: "json", label: "JSON", icon: FileCode },
  { id: "tailwind", label: "Tailwind", icon: FileCode },
  { id: "w3c", label: "W3C Tokens", icon: FileCode },
  { id: "figma", label: "Figma", icon: FileCode },
];

// Component preview sections
const previewSections = [
  { id: "overview", label: "Overview", icon: Layout },
  { id: "buttons", label: "Buttons", icon: Component },
  { id: "inputs", label: "Inputs", icon: Type },
  { id: "cards", label: "Cards", icon: ImageIcon },
  { id: "feedback", label: "Feedback", icon: PaletteIcon },
];

// Core theme files with their content
const coreFilesData: Record<string, { filename: string; description: string; extension: string; content: string }> = {
  "theme-engine": {
    filename: "components/theme/theme-engine.ts",
    description: "Core theme logic & definitions",
    extension: "ts",
    content: `export const NITRO_PUBLIC_THEMES = [
  { id: "theme-nitro-mint-apple", label: "Mint Apple", preview: "radial-gradient(circle at 12% 10%, #b2ffe1 0%, transparent 42%), linear-gradient(145deg, #2d8e74 0%, #70c76a 46%, #d5ef91 100%)" },
  { id: "theme-nitro-citrus-sherbert", label: "Citrus Sherbert", preview: "radial-gradient(circle at 10% 10%, #ffd37d 0%, transparent 42%), linear-gradient(145deg, #e67d35 0%, #f7bb54 46%, #fff0a3 100%)" },
  { id: "theme-nitro-retro-raincloud", label: "Retro Raincloud", preview: "radial-gradient(circle at 12% 10%, #b3c6dc 0%, transparent 42%), linear-gradient(145deg, #4e6077 0%, #6f86a0 46%, #98aec3 100%)" },
  { id: "theme-nitro-hanami", label: "Hanami", preview: "radial-gradient(circle at 12% 10%, #ffd5e7 0%, transparent 42%), linear-gradient(145deg, #995382 0%, #c77ca9 46%, #f0b7ce 100%)" },
  { id: "theme-nitro-sunrise", label: "Sunrise", preview: "radial-gradient(circle at 12% 10%, #ffb596 0%, transparent 42%), linear-gradient(145deg, #e25263 0%, #ef8a57 46%, #ffd07a 100%)" },
  { id: "theme-nitro-cotton-candy", label: "Cotton Candy", preview: "radial-gradient(circle at 12% 10%, #c8e9ff 0%, transparent 42%), linear-gradient(145deg, #5aa2ff 0%, #9b78f0 46%, #f39bca 100%)" },
  { id: "theme-nitro-lofi-vibes", label: "Lofi Vibes", preview: "radial-gradient(circle at 10% 10%, #8e97c6 0%, transparent 42%), linear-gradient(145deg, #3f476c 0%, #59608f 46%, #7a6f9f 100%)" },
  { id: "theme-nitro-desert-khaki", label: "Desert Khaki", preview: "radial-gradient(circle at 10% 10%, #d5bf92 0%, transparent 42%), linear-gradient(145deg, #6d5c49 0%, #8f7a5d 46%, #b49f76 100%)" },
  { id: "theme-nitro-sunset", label: "Sunset", preview: "radial-gradient(circle at 10% 10%, #d66a82 0%, transparent 42%), linear-gradient(145deg, #3f1b4d 0%, #8c335f 46%, #f4874f 100%)" },
  { id: "theme-nitro-chroma-glow", label: "Chroma Glow", preview: "radial-gradient(circle at 10% 10%, #7f8dff 0%, transparent 42%), linear-gradient(145deg, #2d3eff 0%, #a726fa 46%, #00c7ff 100%)" },
  { id: "theme-nitro-forest", label: "Forest", preview: "radial-gradient(circle at 10% 10%, #56be87 0%, transparent 42%), linear-gradient(145deg, #163f2e 0%, #246b49 46%, #59a86c 100%)" },
  { id: "theme-nitro-crimson", label: "Crimson", preview: "radial-gradient(circle at 10% 10%, #c23956 0%, transparent 42%), linear-gradient(145deg, #2d050f 0%, #681126 46%, #a82435 100%)" },
  { id: "theme-nitro-midnight-blurple", label: "Midnight Blurple", preview: "radial-gradient(circle at 10% 10%, #6d6eff 0%, transparent 42%), linear-gradient(145deg, #0f1232 0%, #25366f 46%, #5757dc 100%)" },
  { id: "theme-nitro-mars", label: "Mars", preview: "radial-gradient(circle at 10% 10%, #cc654c 0%, transparent 42%), linear-gradient(145deg, #2e140f 0%, #5e261d 46%, #9c422f 100%)" },
  { id: "theme-nitro-dusk", label: "Dusk", preview: "radial-gradient(circle at 10% 10%, #9475c1 0%, transparent 42%), linear-gradient(145deg, #1b1632 0%, #3b2d5b 46%, #745495 100%)" },
  { id: "theme-nitro-under-the-sea", label: "Under The Sea", preview: "radial-gradient(circle at 10% 10%, #3ea6b7 0%, transparent 42%), linear-gradient(145deg, #0b2242 0%, #0d4f69 46%, #2b848e 100%)" },
  { id: "theme-nitro-retro-storm", label: "Retro Storm", preview: "radial-gradient(circle at 10% 10%, #7e95ab 0%, transparent 42%), linear-gradient(145deg, #1d2b3a 0%, #354657 46%, #55667a 100%)" },
  { id: "theme-nitro-neon-nights", label: "Neon Nights", preview: "radial-gradient(circle at 10% 10%, #d13eff 0%, transparent 42%), linear-gradient(145deg, #05061a 0%, #180f52 46%, #00bde6 100%)" },
  { id: "theme-nitro-strawberry-lemonade", label: "Strawberry Lemonade", preview: "radial-gradient(circle at 10% 10%, #ff8aa8 0%, transparent 42%), linear-gradient(145deg, #8f1847 0%, #cc3f5e 46%, #efc141 100%)" },
  { id: "theme-nitro-aurora", label: "Aurora", preview: "radial-gradient(circle at 10% 10%, #41cbb1 0%, transparent 42%), linear-gradient(145deg, #083142 0%, #1b7e74 46%, #5fbf75 100%)" },
  { id: "theme-nitro-sepia", label: "Sepia", preview: "radial-gradient(circle at 10% 10%, #b99672 0%, transparent 42%), linear-gradient(145deg, #35261d 0%, #5d4636 46%, #927454 100%)" },
] as const;

export const MEMORY_LANE_THEME = {
  id: "theme-nitro-memory-lane",
  label: "Memory Lane",
  preview: "radial-gradient(circle at 10% 10%, #ba8fd4 0%, transparent 42%), linear-gradient(145deg, #462d42 0%, #684b75 35%, #4a7199 68%, #77ad9f 100%)",
} as const;

export const NITRO_ALL_THEMES = [...NITRO_PUBLIC_THEMES, MEMORY_LANE_THEME] as const;
export type ThemeId = (typeof NITRO_ALL_THEMES)[number]["id"];
export type ColorMode = "dark" | "light";

const DEFAULT_THEME: ThemeId = "theme-nitro-midnight-blurple";
const DEFAULT_COLOR_MODE: ColorMode = "dark";
const THEME_STORAGE_KEY = "shadcn-gradient.theme";
const COLOR_MODE_STORAGE_KEY = "shadcn-gradient.color-mode";

export const normalizeTheme = (theme?: string | null): ThemeId => {
  if (!theme) return DEFAULT_THEME;
  return theme as ThemeId;
};

export const normalizeColorMode = (mode?: string | null): ColorMode => {
  if (mode === "light") return "light";
  return DEFAULT_COLOR_MODE;
};

export const getStoredTheme = (): ThemeId => {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
};

export const getStoredColorMode = (): ColorMode => {
  if (typeof window === "undefined") return DEFAULT_COLOR_MODE;
  return normalizeColorMode(localStorage.getItem(COLOR_MODE_STORAGE_KEY));
};

export const applyTheme = (theme?: string | null, mode?: ColorMode) => {
  if (typeof window === "undefined") return;
  const normalizedTheme = normalizeTheme(theme);
  const normalizedMode = normalizeColorMode(mode ?? getStoredColorMode());
  const root = document.documentElement;
  
  Array.from(root.classList).forEach((className) => {
    if (className === "dark" || className === "light" || className.startsWith("theme-nitro-")) {
      root.classList.remove(className);
    }
  });
  
  root.classList.add(normalizedMode, normalizedTheme);
  root.setAttribute("data-theme", normalizedTheme);
  root.setAttribute("data-color-mode", normalizedMode);
  localStorage.setItem(THEME_STORAGE_KEY, normalizedTheme);
  localStorage.setItem(COLOR_MODE_STORAGE_KEY, normalizedMode);
};

export const defaultTheme = DEFAULT_THEME;
export const defaultColorMode = DEFAULT_COLOR_MODE;`
  },
  "theme-context": {
    filename: "components/theme/theme-context.tsx",
    description: "React context provider",
    extension: "tsx",
    content: `"use client";

import {
  type ColorMode,
  type ThemeId,
  NITRO_ALL_THEMES,
  applyTheme,
  defaultColorMode,
  defaultTheme,
  getStoredColorMode,
  getStoredTheme,
} from "@/components/theme/theme-engine";
import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextValue = {
  themeId: ThemeId;
  colorMode: ColorMode;
  setThemeId: (themeId: ThemeId) => void;
  setColorMode: (mode: ColorMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeId, setThemeIdState] = useState<ThemeId>(defaultTheme);
  const [colorMode, setColorModeState] = useState<ColorMode>(defaultColorMode);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const storedMode = getStoredColorMode();
    setThemeIdState(storedTheme);
    setColorModeState(storedMode);
    applyTheme(storedTheme, storedMode);
  }, []);

  useEffect(() => {
    applyTheme(themeId, colorMode);
  }, [themeId, colorMode]);

  const setThemeId = (nextTheme: ThemeId) => {
    setThemeIdState(nextTheme);
  };

  const setColorMode = (mode: ColorMode) => {
    setColorModeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeId, colorMode, setThemeId, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeProvider");
  return ctx;
};`
  },
  "token-export-utils": {
    filename: "components/theme/token-export-utils.ts",
    description: "Export utilities for tokens",
    extension: "ts",
    content: `import { NITRO_ALL_THEMES, type ThemeId } from "./theme-engine";

const themeTokens: Record<string, Record<string, string>> = {
  "theme-nitro-midnight-blurple": {
    "--background": "235 26% 11%",
    "--foreground": "235 30% 95%",
    "--card": "235 22% 12%",
    "--primary": "241 92% 70%",
    "--accent": "210 92% 65%",
    "--ring": "241 92% 70%",
    "--app-surface-tint": "hsl(241 92% 70% / 0.1)",
  },
};

export type ExportFormat = "css" | "json" | "tailwind";

export interface ExportOptions {
  format: ExportFormat;
  themeId: ThemeId;
  colorMode?: "dark" | "light";
}

export interface ExportResult {
  content: string;
  filename: string;
  mimeType: string;
}

export const getThemeTokens = (themeId: ThemeId): Record<string, string> => {
  return themeTokens[themeId] ?? themeTokens["theme-nitro-midnight-blurple"];
};

export const generateCSSExport = (options: ExportOptions): ExportResult => {
  const { themeId } = options;
  const tokens = getThemeTokens(themeId);
  const cssVariables = Object.entries(tokens)
    .map(([key, value]) => \`  \${key}: \${value};\`)
    .join("\\n");
  
  const content = \`/* Gradient Forge Theme */
.\${themeId} {
\${cssVariables}
}\`;

  return { content, filename: \`\${themeId}.css\`, mimeType: "text/css" };
};

export const exportTokens = (options: ExportOptions): ExportResult => {
  return generateCSSExport(options);
};

export const downloadFile = (result: ExportResult): void => {
  const blob = new Blob([result.content], { type: result.mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = result.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};`
  },
  "globals-css": {
    filename: "app/globals.css",
    description: "CSS variables & theme classes",
    extension: "css",
    content: `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-primary: hsl(var(--primary));
  --color-accent: hsl(var(--accent));
  --radius-lg: var(--radius);
}

@layer base {
  body {
    background-color: hsl(var(--background) / 0.9);
    background-image: var(--app-gradient);
    color: hsl(var(--foreground));
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --primary: 0 0% 9%;
    --radius: 0.9rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --app-gradient: radial-gradient(1100px 560px at -10% -20%, hsl(250 90% 66% / 0.28), transparent 60%);
    --app-surface-tint: hsl(250 85% 65% / 0.08);
  }

  .theme-nitro-midnight-blurple {
    --background: 235 26% 11%;
    --primary: 241 92% 70%;
    --app-gradient: radial-gradient(1050px 560px at -10% -20%, hsl(246 92% 66% / 0.3), transparent 60%);
    --app-surface-tint: hsl(241 92% 70% / 0.1);
  }
}`
  }
};

export default function StudioPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [deviceView, setDeviceView] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [selectedFormat, setSelectedFormat] = useState("css");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCssVariables, setShowCssVariables] = useState(true);
  const [previewColorMode, setPreviewColorMode] = useState<"light" | "dark">("light");
  const [selectedCoreFile, setSelectedCoreFile] = useState<string | null>(null);
  const { showToast } = useToast();
  const { themeId, setThemeId, colorMode, setColorMode } = useThemeContext();
  const previewRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLPreElement>(null);

  const currentTheme = NITRO_ALL_THEMES.find((t: { id: string }) => t.id === themeId) || NITRO_ALL_THEMES[0];
  const flatTokens = getThemeTokens(themeId);
  
  // Transform flat tokens into the expected structure for export functions
  const tokens = {
    colors: Object.fromEntries(
      Object.entries(flatTokens).map(([key, value]) => [
        key.replace(/^--/, ''), // Remove leading --
        value
      ])
    )
  };

  // Filter themes based on search
  const filteredThemes = NITRO_ALL_THEMES.filter((theme: { label: string }) =>
    theme.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animate preview cards on section change
  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const cards = preview.querySelectorAll(".preview-item");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.5)",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeSection, deviceView, themeId]);

  const handleCopyCode = () => {
    const code = generateExportCode(selectedFormat, tokens, themeId);
    navigator.clipboard.writeText(code);
    showToast("Code copied to clipboard!", "success");
  };

  const handleDownload = () => {
    const code = generateExportCode(selectedFormat, tokens, themeId);
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${themeId}-tokens.${getFileExtension(selectedFormat)}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("File downloaded!", "success");
  };

  const handleCopyAll = () => {
    const allTokens = NITRO_ALL_THEMES.map((theme: { id: ThemeId; label: string }) => ({
      theme: theme.label,
      tokens: getThemeTokens(theme.id)
    }));
    navigator.clipboard.writeText(JSON.stringify(allTokens, null, 2));
    showToast("All themes copied to clipboard!", "success");
  };

  const getDeviceClasses = () => {
    switch (deviceView) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Main Studio Layout */}
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        
        {/* Left Sidebar - Theme List */}
        <aside className="w-72 border-r border-border/50 bg-background/95 backdrop-blur-xl flex flex-col hidden lg:flex">
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-sm flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                Themes
              </h2>
              <Badge variant="glass" className="text-xs">{NITRO_ALL_THEMES.length}</Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            <div className="space-y-1">
              {filteredThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setThemeId(theme.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 group",
                    themeId === theme.id 
                      ? "bg-primary/10 border border-primary/30 shadow-sm" 
                      : "hover:bg-muted/50 border border-transparent"
                  )}
                >
                  <div 
                    className="w-10 h-10 rounded-lg shadow-sm shrink-0"
                    style={{ background: theme.preview }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "font-medium text-sm truncate",
                      themeId === theme.id && "text-primary"
                    )}>
                      {theme.label}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      Gradient theme
                    </p>
                  </div>
                  {themeId === theme.id && (
                    <Check className="h-4 w-4 text-primary shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-border/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Preview Mode</span>
              <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
                <button
                  onClick={() => setPreviewColorMode("light")}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    previewColorMode === "light" ? "bg-background shadow-sm" : "text-muted-foreground"
                  )}
                >
                  <SunIcon className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setPreviewColorMode("dark")}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    previewColorMode === "dark" ? "bg-background shadow-sm" : "text-muted-foreground"
                  )}
                >
                  <MoonIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Center - Live Preview */}
        <section className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="h-14 border-b border-border/50 flex items-center justify-between px-4 bg-background/95 backdrop-blur-xl shrink-0">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-sm hidden sm:block">Component Preview</h1>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
                {[
                  { id: "mobile", icon: Smartphone, label: "Mobile" },
                  { id: "tablet", icon: Tablet, label: "Tablet" },
                  { id: "desktop", icon: Monitor, label: "Desktop" },
                ].map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setDeviceView(id as typeof deviceView)}
                    className={cn(
                      "p-1.5 rounded-full transition-all",
                      deviceView === id 
                        ? "bg-background shadow-sm text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="glass" className="gap-1.5 text-xs">
                <Sparkles className="h-3 w-3" />
                {currentTheme.label}
              </Badge>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className={cn("mx-auto transition-all duration-300", getDeviceClasses())}>
              {/* Section Tabs */}
              <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-2">
                {previewSections.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap",
                      activeSection === id
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Preview Area */}
              <div 
                ref={previewRef}
                className="bg-card/50 rounded-2xl border border-border/50 p-4 sm:p-6 min-h-[500px]"
                style={{ backgroundColor: previewColorMode === "dark" ? "#0a0a0a" : undefined }}
              >
                {activeSection === "overview" && <OverviewPreview />}
                {activeSection === "buttons" && <ButtonsPreview />}
                {activeSection === "inputs" && <InputsPreview />}
                {activeSection === "cards" && <CardsPreview />}
                {activeSection === "feedback" && <FeedbackPreview />}
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar - Export Panel */}
        <aside className="w-80 border-l border-border/50 bg-background/95 backdrop-blur-xl flex flex-col hidden xl:flex">
          <div className="p-4 border-b border-border/50">
            <h2 className="font-semibold text-sm flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4 text-primary" />
              Export Tokens
            </h2>
            <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
              {exportFormats.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedFormat(id)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-xs font-medium transition-all",
                    selectedFormat === id
                      ? "bg-background shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  title={label}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden 2xl:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Core Files Documentation */}
            <div className="px-4 py-3 border-b border-border/50 bg-muted/20">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2">Core Theme Files - Click to View & Copy</p>
              <div className="space-y-1.5">
                {Object.entries(coreFilesData).map(([key, file]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCoreFile(selectedCoreFile === key ? null : key)}
                    className={cn(
                      "w-full flex items-center gap-2 text-xs p-1.5 rounded border transition-all text-left",
                      selectedCoreFile === key
                        ? "bg-primary/10 border-primary/30"
                        : "bg-background/50 border-border/30 hover:bg-background/80"
                    )}
                  >
                    <FileCode className={cn("h-3 w-3 shrink-0", selectedCoreFile === key ? "text-primary" : "text-muted-foreground")} />
                    <div className="flex-1 min-w-0">
                      <p className={cn("font-medium truncate", selectedCoreFile === key && "text-primary")}>{file.filename}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{file.description}</p>
                    </div>
                    {selectedCoreFile === key && <Check className="h-3 w-3 text-primary shrink-0" />}
                  </button>
                ))}
              </div>
              {selectedCoreFile && (
                <div className="mt-3 p-2 bg-black/90 rounded border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-primary font-medium">{coreFilesData[selectedCoreFile].filename}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(coreFilesData[selectedCoreFile].content);
                        showToast("File copied to clipboard!", "success");
                      }}
                      className="text-[10px] px-2 py-1 bg-primary/20 hover:bg-primary/30 text-primary rounded transition-colors"
                    >
                      Copy File
                    </button>
                  </div>
                  <pre className="text-[10px] text-green-400 overflow-auto max-h-[200px] whitespace-pre-wrap break-all">
                    {coreFilesData[selectedCoreFile].content}
                  </pre>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
              <span className="text-xs font-medium text-muted-foreground">
                {selectedCoreFile ? `Viewing: ${coreFilesData[selectedCoreFile].filename}` : "Generated Code"}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    const content = selectedCoreFile 
                      ? coreFilesData[selectedCoreFile].content 
                      : generateExportCode(selectedFormat, tokens, themeId);
                    navigator.clipboard.writeText(content);
                    showToast(selectedCoreFile ? "File copied!" : "Code copied!", "success");
                  }}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                  title="Copy code"
                >
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                {!selectedCoreFile && (
                  <button
                    onClick={handleDownload}
                    className="p-1.5 rounded-md hover:bg-muted transition-colors"
                    title="Download file"
                  >
                    <DownloadIcon className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <pre 
                ref={codeRef}
                className={cn(
                  "text-xs whitespace-pre-wrap break-all",
                  selectedCoreFile ? "text-green-400 font-mono" : "font-mono text-muted-foreground"
                )}
              >
                {selectedCoreFile 
                  ? coreFilesData[selectedCoreFile].content 
                  : generateExportCode(selectedFormat, tokens, themeId)}
              </pre>
            </div>
          </div>

          <div className="p-4 border-t border-border/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Show CSS Variables</span>
              <Switch 
                checked={showCssVariables}
                onCheckedChange={setShowCssVariables}
              />
            </div>
            <Button 
              variant="outline" 
              className="w-full gap-2 text-xs border-primary/30 hover:bg-primary/10"
              onClick={() => {
                const allFilesContent = Object.entries(coreFilesData)
                  .map(([key, file]) => `// ===== ${file.filename} =====\\n\\n${file.content}`)
                  .join("\\n\\n\\n");
                navigator.clipboard.writeText(allFilesContent);
                showToast("All core files copied! Paste them into your project.", "success");
              }}
            >
              <FileCode className="h-3.5 w-3.5" />
              Copy All Core Files
            </Button>
            <Button 
              variant="outline" 
              className="w-full gap-2 text-xs"
              onClick={handleCopyAll}
            >
              <Copy className="h-3.5 w-3.5" />
              Copy All Themes
            </Button>
            <Button 
              className="w-full gap-2 text-xs"
              onClick={handleDownload}
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              Download Tokens
            </Button>
          </div>
        </aside>
      </div>
    </main>
  );
}

// Preview Components
function OverviewPreview() {
  return (
    <div className="space-y-6 preview-item">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
                <CardDescription className="text-xs">Common tasks</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button size="sm" className="w-full text-xs gap-2">
              <Plus className="h-3.5 w-3.5" />
              Create New
            </Button>
            <Button variant="outline" size="sm" className="w-full text-xs gap-2">
              <Layout className="h-3.5 w-3.5" />
              View Dashboard
            </Button>
          </CardContent>
        </Card>

        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <User className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <CardTitle className="text-sm">Profile</CardTitle>
                <CardDescription className="text-xs">User settings</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/20 text-primary text-sm">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full text-xs">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Bell className="h-5 w-5 text-accent" />
              </div>
              <div>
                <CardTitle className="text-sm">Notifications</CardTitle>
                <CardDescription className="text-xs">3 unread</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="flex-1">New theme available</span>
              <span className="text-muted-foreground">2m</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span className="flex-1">Export completed</span>
              <span className="text-muted-foreground">1h</span>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-xs">
              View All
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="preview-item border-border/40 bg-card/70">
        <CardHeader>
          <CardTitle className="text-sm">Theme Preview</CardTitle>
          <CardDescription className="text-xs">
            See how your theme looks across different components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="glass">Glass</Badge>
            <Badge className="gap-1"><Check className="h-3 w-3" /> Success</Badge>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button size="sm">Primary</Button>
            <Button size="sm" variant="secondary">Secondary</Button>
            <Button size="sm" variant="outline">Outline</Button>
            <Button size="sm" variant="ghost">Ghost</Button>
            <Button size="sm" variant="glow">Glow</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ButtonsPreview() {
  return (
    <div className="space-y-6">
      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Button Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Default</Button>
          <Button size="sm" variant="secondary">Secondary</Button>
          <Button size="sm" variant="outline">Outline</Button>
          <Button size="sm" variant="ghost">Ghost</Button>
          <Button size="sm" variant="glow">Glow</Button>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="glow">Small</Button>
          <Button size="md" variant="glow">Medium</Button>
          <Button size="lg" variant="glow">Large</Button>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Button States</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="glow">
            <Check className="h-4 w-4 mr-1.5" />
            With Icon
          </Button>
          <Button size="sm" variant="glow" disabled>
            <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
            Loading
          </Button>
          <Button size="sm" variant="outline" disabled>Disabled</Button>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Icon Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="px-2.5">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="glow" className="px-2.5">
            <Bell className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="px-2.5">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function InputsPreview() {
  return (
    <div className="space-y-6">
      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Text Inputs</h3>
        <div className="grid sm:grid-cols-2 gap-4 max-w-md">
          <div className="space-y-2">
            <label className="text-xs font-medium">Default</label>
            <Input placeholder="Enter text..." />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">With Icon</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Email" className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">Disabled</label>
            <Input placeholder="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">With Button</label>
            <div className="flex gap-2">
              <Input placeholder="Search..." className="flex-1" />
              <Button size="sm" variant="glow">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Switches</h3>
        <Card className="max-w-sm">
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sun className="h-4 w-4" />
                <span className="text-sm">Light Mode</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-4 w-4" />
                <span className="text-sm">Notifications</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email Updates</span>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Checkboxes</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <Checkbox defaultChecked />
            <span className="text-sm">Enable notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <Checkbox />
            <span className="text-sm">Auto-save changes</span>
          </label>
          <label className="flex items-center gap-3">
            <Checkbox defaultChecked />
            <span className="text-sm">Show previews</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function CardsPreview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader>
            <CardTitle className="text-sm">Simple Card</CardTitle>
            <CardDescription className="text-xs">Basic card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Cards provide a flexible container for displaying content.
            </p>
          </CardContent>
        </Card>

        <Card className="preview-item border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Featured Card
            </CardTitle>
            <CardDescription className="text-xs">Highlighted styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Cards can have custom borders and backgrounds.
            </p>
          </CardContent>
        </Card>

        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Interactive Card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Cards can contain buttons and other interactive elements.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs flex-1">Cancel</Button>
              <Button size="sm" variant="glow" className="text-xs flex-1">Confirm</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="preview-item border-border/40 bg-card/70">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-sm">Card with Actions</CardTitle>
            <CardDescription className="text-xs">Header actions example</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="px-2">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Project Update</p>
              <p className="text-xs text-muted-foreground">Updated 2 hours ago</p>
            </div>
            <Badge variant="glass">New</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs gap-1.5">
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </Button>
            <Button size="sm" className="text-xs gap-1.5">
              <Check className="h-3.5 w-3.5" />
              Approve
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FeedbackPreview() {
  return (
    <div className="space-y-6">
      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="glass">Glass</Badge>
          <Badge className="gap-1"><Check className="h-3 w-3" /> Success</Badge>
          <Badge variant="outline" className="gap-1"><Bell className="h-3 w-3" /> Alert</Badge>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Loading States</h3>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading content...
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-muted rounded animate-pulse w-1/3" />
                <div className="h-2 bg-muted rounded animate-pulse w-1/2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Alert States</h3>
        <div className="space-y-3 max-w-md">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Information</p>
              <p className="text-xs text-muted-foreground">This is an informational message.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/10 border border-secondary/20">
            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Success</p>
              <p className="text-xs text-muted-foreground">Your action was completed successfully.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/10 border border-destructive/20">
            <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Error</p>
              <p className="text-xs text-muted-foreground">Something went wrong. Please try again.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Empty State</h3>
        <Card>
          <CardContent className="text-center py-12">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium mb-1">No messages yet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start a conversation to see messages here.
            </p>
            <Button size="sm" variant="outline">
              Start Conversation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper functions
function generateExportCode(format: string, tokens: any, themeId: string): string {
  switch (format) {
    case "css":
      return generateCSS(tokens, themeId);
    case "scss":
      return generateSCSS(tokens, themeId);
    case "json":
      return JSON.stringify(tokens, null, 2);
    case "tailwind":
      return generateTailwind(tokens, themeId);
    case "w3c":
      return generateW3C(tokens, themeId);
    case "figma":
      return generateFigma(tokens, themeId);
    default:
      return generateCSS(tokens, themeId);
  }
}

function generateCSS(tokens: any, themeId: string): string {
  let css = `/* ${themeId} Theme Tokens */\n:root {\n`;
  
  Object.entries(tokens.colors).forEach(([key, value]) => {
    css += `  --${key}: ${value};\n`;
  });
  
  if (tokens.gradients) {
    css += `\n  /* Gradients */\n`;
    Object.entries(tokens.gradients).forEach(([key, value]) => {
      css += `  --gradient-${key}: ${value};\n`;
    });
  }
  
  css += `}\n`;
  return css;
}

function generateSCSS(tokens: any, themeId: string): string {
  let scss = `// ${themeId} Theme Tokens\n$tokens: (\n`;
  
  Object.entries(tokens.colors).forEach(([key, value]) => {
    scss += `  "${key}": ${value},\n`;
  });
  
  scss += `);\n`;
  return scss;
}

function generateTailwind(tokens: any, themeId: string): string {
  return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(tokens.colors, null, 6).replace(/"/g, "'")},
    },
  },
}`;
}

function generateW3C(tokens: any, themeId: string): string {
  return JSON.stringify({
    $schema: "https://design-tokens.github.io/format/",
    $themes: [{
      id: themeId,
      name: themeId,
      selectedTokenSets: { [themeId]: "enabled" }
    }],
    [themeId]: {
      color: tokens.colors
    }
  }, null, 2);
}

function generateFigma(tokens: any, themeId: string): string {
  const figmaTokens: any = {};
  
  Object.entries(tokens.colors).forEach(([key, value]) => {
    figmaTokens[key] = {
      value: value,
      type: "color"
    };
  });
  
  return JSON.stringify({
    [themeId]: {
      color: figmaTokens
    }
  }, null, 2);
}

function getFileExtension(format: string): string {
  switch (format) {
    case "css": return "css";
    case "scss": return "scss";
    case "json":
    case "w3c":
    case "figma": return "json";
    case "tailwind": return "js";
    default: return "txt";
  }
}
