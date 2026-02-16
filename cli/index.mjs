#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for terminal styling
const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
  white: "\x1b[37m",
  brightCyan: "\x1b[96m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightMagenta: "\x1b[95m",
  bgCyan: "\x1b[46m",
  bgBlack: "\x1b[40m",
};

// Utility to apply colors
const c = (text, ...styles) => `${styles.join("")}${text}${colors.reset}`;

// Box drawing characters
const box = {
  topLeft: "╔",
  topRight: "╗",
  bottomLeft: "╚",
  bottomRight: "╝",
  horizontal: "═",
  vertical: "║",
  leftT: "╠",
  rightT: "╣",
  topT: "╦",
  bottomT: "╩",
  cross: "╬",
};

// Available themes
const themes = [
  { id: "theme-nitro-mint-apple", label: "Mint Apple", color: colors.green },
  { id: "theme-nitro-citrus-sherbert", label: "Citrus Sherbert", color: colors.yellow },
  { id: "theme-nitro-retro-raincloud", label: "Retro Raincloud", color: colors.dim },
  { id: "theme-nitro-hanami", label: "Hanami", color: colors.magenta },
  { id: "theme-nitro-sunrise", label: "Sunrise", color: colors.yellow },
  { id: "theme-nitro-cotton-candy", label: "Cotton Candy", color: colors.magenta },
  { id: "theme-nitro-lofi-vibes", label: "Lofi Vibes", color: colors.cyan },
  { id: "theme-nitro-desert-khaki", label: "Desert Khaki", color: colors.yellow },
  { id: "theme-nitro-sunset", label: "Sunset", color: colors.red },
  { id: "theme-nitro-chroma-glow", label: "Chroma Glow", color: colors.magenta },
  { id: "theme-nitro-forest", label: "Forest", color: colors.green },
  { id: "theme-nitro-crimson", label: "Crimson", color: colors.red },
  { id: "theme-nitro-midnight-blurple", label: "Midnight Blurple", color: colors.blue },
  { id: "theme-nitro-mars", label: "Mars", color: colors.red },
  { id: "theme-nitro-dusk", label: "Dusk", color: colors.magenta },
  { id: "theme-nitro-under-the-sea", label: "Under The Sea", color: colors.cyan },
  { id: "theme-nitro-retro-storm", label: "Retro Storm", color: colors.dim },
  { id: "theme-nitro-neon-nights", label: "Neon Nights", color: colors.magenta },
  { id: "theme-nitro-strawberry-lemonade", label: "Strawberry Lemonade", color: colors.red },
  { id: "theme-nitro-aurora", label: "Aurora", color: colors.green },
  { id: "theme-nitro-sepia", label: "Sepia", color: colors.yellow },
];

const colorModes = [
  { id: "dark", label: "Dark Mode", icon: "🌙" },
  { id: "light", label: "Light Mode", icon: "☀️" },
];

// Template files
const TEMPLATES = {
  "theme-engine.ts": `export const NITRO_PUBLIC_THEMES = [
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

export const MEMORY_LANE_THEME = { id: "theme-nitro-memory-lane", label: "Memory Lane", preview: "radial-gradient(circle at 10% 10%, #ba8fd4 0%, transparent 42%), linear-gradient(145deg, #462d42 0%, #684b75 35%, #4a7199 68%, #77ad9f 100%)" } as const;
export const NITRO_ALL_THEMES = [...NITRO_PUBLIC_THEMES, MEMORY_LANE_THEME] as const;
export type ThemeId = (typeof NITRO_ALL_THEMES)[number]["id"];
export type ColorMode = "dark" | "light";

const DEFAULT_THEME: ThemeId = "{{DEFAULT_THEME}}";
const DEFAULT_COLOR_MODE: ColorMode = "{{DEFAULT_MODE}}";
const THEME_STORAGE_KEY = "shadcn-gradient.theme";
const COLOR_MODE_STORAGE_KEY = "shadcn-gradient.color-mode";
const NITRO_THEME_IDS = new Set<string>(NITRO_ALL_THEMES.map((theme) => theme.id));
export const publicThemeIds = NITRO_PUBLIC_THEMES.map((theme) => theme.id);
export const publicThemeIdSet = new Set<string>(publicThemeIds);

export const normalizeTheme = (theme?: string | null): ThemeId => {
  if (!theme || !NITRO_THEME_IDS.has(theme)) return DEFAULT_THEME;
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
export const defaultColorMode = DEFAULT_COLOR_MODE;
`,

  "theme-context.tsx": `"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  type ColorMode,
  type ThemeId,
  NITRO_ALL_THEMES,
  NITRO_PUBLIC_THEMES,
  applyTheme,
  defaultColorMode,
  defaultTheme,
  getStoredColorMode,
  getStoredTheme,
  publicThemeIds,
} from "./theme-engine";

type ThemeContextValue = {
  themeId: ThemeId;
  colorMode: ColorMode;
  availableThemes: typeof NITRO_ALL_THEMES;
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

  const setThemeId = (nextTheme: ThemeId) => setThemeIdState(nextTheme);
  const setColorMode = (mode: ColorMode) => setColorModeState(mode);

  const availableThemes = useMemo(() => NITRO_ALL_THEMES, []);

  return (
    <ThemeContext.Provider
      value={{ themeId, colorMode, availableThemes, setThemeId, setColorMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return ctx;
};
`,

  "themes.css": `/* Gradient Forge Theme CSS - Generated by gradient-forge CLI */

@layer base {
  :root {
    --radius: 0.625rem;
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 91%;
    --input: 240 5.9% 91%;
    --ring: 240 5.9% 10%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

/* Theme: Mint Apple */
.theme-nitro-mint-apple {
  --background: 160 20% 8%;
  --foreground: 150 30% 96%;
  --card: 160 18% 10%;
  --card-foreground: 150 30% 96%;
  --popover: 160 18% 10%;
  --popover-foreground: 150 30% 96%;
  --primary: 158 52% 37%;
  --primary-foreground: 150 30% 96%;
  --secondary: 160 15% 16%;
  --secondary-foreground: 150 30% 96%;
  --muted: 160 15% 16%;
  --muted-foreground: 160 10% 60%;
  --accent: 100 45% 55%;
  --accent-foreground: 160 20% 8%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 160 15% 20%;
  --input: 160 15% 20%;
  --ring: 158 52% 37%;
}

.theme-nitro-mint-apple.light {
  --background: 150 30% 96%;
  --foreground: 160 20% 12%;
  --card: 0 0% 100%;
  --card-foreground: 160 20% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 160 20% 12%;
  --primary: 158 52% 37%;
  --primary-foreground: 0 0% 100%;
  --secondary: 160 20% 92%;
  --secondary-foreground: 160 20% 12%;
  --muted: 160 20% 92%;
  --muted-foreground: 160 10% 40%;
  --accent: 100 45% 45%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 160 20% 88%;
  --input: 160 20% 88%;
  --ring: 158 52% 37%;
}

/* Theme: Midnight Blurple */
.theme-nitro-midnight-blurple {
  --background: 235 40% 8%;
  --foreground: 235 30% 96%;
  --card: 235 35% 10%;
  --card-foreground: 235 30% 96%;
  --popover: 235 35% 10%;
  --popover-foreground: 235 30% 96%;
  --primary: 235 60% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 235 25% 16%;
  --secondary-foreground: 235 30% 96%;
  --muted: 235 25% 16%;
  --muted-foreground: 235 15% 60%;
  --accent: 260 70% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 235 25% 20%;
  --input: 235 25% 20%;
  --ring: 235 60% 55%;
}

.theme-nitro-midnight-blurple.light {
  --background: 235 30% 98%;
  --foreground: 235 40% 15%;
  --card: 0 0% 100%;
  --card-foreground: 235 40% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 235 40% 15%;
  --primary: 235 60% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 235 20% 94%;
  --secondary-foreground: 235 40% 15%;
  --muted: 235 20% 94%;
  --muted-foreground: 235 15% 40%;
  --accent: 260 70% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 235 20% 90%;
  --input: 235 20% 90%;
  --ring: 235 60% 50%;
}

/* Theme: Aurora */
.theme-nitro-aurora {
  --background: 195 50% 8%;
  --foreground: 170 30% 96%;
  --card: 195 45% 10%;
  --card-foreground: 170 30% 96%;
  --popover: 195 45% 10%;
  --popover-foreground: 170 30% 96%;
  --primary: 175 60% 40%;
  --primary-foreground: 0 0% 100%;
  --secondary: 195 30% 16%;
  --secondary-foreground: 170 30% 96%;
  --muted: 195 30% 16%;
  --muted-foreground: 195 20% 60%;
  --accent: 145 50% 50%;
  --accent-foreground: 195 50% 8%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 195 30% 20%;
  --input: 195 30% 20%;
  --ring: 175 60% 40%;
}

.theme-nitro-aurora.light {
  --background: 170 30% 98%;
  --foreground: 195 50% 12%;
  --card: 0 0% 100%;
  --card-foreground: 195 50% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 195 50% 12%;
  --primary: 175 60% 35%;
  --primary-foreground: 0 0% 100%;
  --secondary: 195 25% 94%;
  --secondary-foreground: 195 50% 12%;
  --muted: 195 25% 94%;
  --muted-foreground: 195 15% 40%;
  --accent: 145 50% 45%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 195 25% 90%;
  --input: 195 25% 90%;
  --ring: 175 60% 35%;
}

/* Theme: Sunset */
.theme-nitro-sunset {
  --background: 320 30% 10%;
  --foreground: 30 30% 96%;
  --card: 320 25% 12%;
  --card-foreground: 30 30% 96%;
  --popover: 320 25% 12%;
  --popover-foreground: 30 30% 96%;
  --primary: 350 60% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 320 20% 18%;
  --secondary-foreground: 30 30% 96%;
  --muted: 320 20% 18%;
  --muted-foreground: 320 15% 60%;
  --accent: 25 80% 55%;
  --accent-foreground: 320 30% 10%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 320 20% 22%;
  --input: 320 20% 22%;
  --ring: 350 60% 45%;
}

.theme-nitro-sunset.light {
  --background: 30 30% 98%;
  --foreground: 320 30% 15%;
  --card: 0 0% 100%;
  --card-foreground: 320 30% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 320 30% 15%;
  --primary: 350 60% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 320 20% 94%;
  --secondary-foreground: 320 30% 15%;
  --muted: 320 20% 94%;
  --muted-foreground: 320 15% 40%;
  --accent: 25 80% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 320 20% 90%;
  --input: 320 20% 90%;
  --ring: 350 60% 50%;
}

/* Theme: Forest */
.theme-nitro-forest {
  --background: 150 25% 8%;
  --foreground: 140 30% 96%;
  --card: 150 22% 10%;
  --card-foreground: 140 30% 96%;
  --popover: 150 22% 10%;
  --popover-foreground: 140 30% 96%;
  --primary: 150 50% 35%;
  --primary-foreground: 0 0% 100%;
  --secondary: 150 18% 16%;
  --secondary-foreground: 140 30% 96%;
  --muted: 150 18% 16%;
  --muted-foreground: 150 12% 60%;
  --accent: 100 40% 45%;
  --accent-foreground: 150 25% 8%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 150 18% 20%;
  --input: 150 18% 20%;
  --ring: 150 50% 35%;
}

.theme-nitro-forest.light {
  --background: 140 30% 98%;
  --foreground: 150 25% 12%;
  --card: 0 0% 100%;
  --card-foreground: 150 25% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 150 25% 12%;
  --primary: 150 50% 30%;
  --primary-foreground: 0 0% 100%;
  --secondary: 150 20% 94%;
  --secondary-foreground: 150 25% 12%;
  --muted: 150 20% 94%;
  --muted-foreground: 150 12% 40%;
  --accent: 100 40% 40%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 150 20% 90%;
  --input: 150 20% 90%;
  --ring: 150 50% 30%;
}

/* Theme: Crimson */
.theme-nitro-crimson {
  --background: 350 40% 8%;
  --foreground: 350 30% 96%;
  --card: 350 35% 10%;
  --card-foreground: 350 30% 96%;
  --popover: 350 35% 10%;
  --popover-foreground: 350 30% 96%;
  --primary: 350 70% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 350 25% 16%;
  --secondary-foreground: 350 30% 96%;
  --muted: 350 25% 16%;
  --muted-foreground: 350 15% 60%;
  --accent: 10 80% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 350 25% 20%;
  --input: 350 25% 20%;
  --ring: 350 70% 45%;
}

.theme-nitro-crimson.light {
  --background: 350 30% 98%;
  --foreground: 350 40% 15%;
  --card: 0 0% 100%;
  --card-foreground: 350 40% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 350 40% 15%;
  --primary: 350 70% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 350 20% 94%;
  --secondary-foreground: 350 40% 15%;
  --muted: 350 20% 94%;
  --muted-foreground: 350 15% 40%;
  --accent: 10 80% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 350 20% 90%;
  --input: 350 20% 90%;
  --ring: 350 70% 50%;
}

/* Theme: Chroma Glow */
.theme-nitro-chroma-glow {
  --background: 240 30% 8%;
  --foreground: 240 30% 96%;
  --card: 240 25% 10%;
  --card-foreground: 240 30% 96%;
  --popover: 240 25% 10%;
  --popover-foreground: 240 30% 96%;
  --primary: 250 80% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 20% 16%;
  --secondary-foreground: 240 30% 96%;
  --muted: 240 20% 16%;
  --muted-foreground: 240 15% 60%;
  --accent: 280 90% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 20% 20%;
  --input: 240 20% 20%;
  --ring: 250 80% 55%;
}

.theme-nitro-chroma-glow.light {
  --background: 240 30% 98%;
  --foreground: 240 40% 15%;
  --card: 0 0% 100%;
  --card-foreground: 240 40% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 40% 15%;
  --primary: 250 80% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 20% 94%;
  --secondary-foreground: 240 40% 15%;
  --muted: 240 20% 94%;
  --muted-foreground: 240 15% 40%;
  --accent: 280 90% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 20% 90%;
  --input: 240 20% 90%;
  --ring: 250 80% 50%;
}

/* Theme: Neon Nights */
.theme-nitro-neon-nights {
  --background: 240 50% 5%;
  --foreground: 180 30% 96%;
  --card: 240 45% 8%;
  --card-foreground: 180 30% 96%;
  --popover: 240 45% 8%;
  --popover-foreground: 180 30% 96%;
  --primary: 280 100% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 30% 14%;
  --secondary-foreground: 180 30% 96%;
  --muted: 240 30% 14%;
  --muted-foreground: 240 20% 60%;
  --accent: 190 100% 50%;
  --accent-foreground: 240 50% 5%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 30% 18%;
  --input: 240 30% 18%;
  --ring: 280 100% 60%;
}

.theme-nitro-neon-nights.light {
  --background: 180 30% 98%;
  --foreground: 240 50% 10%;
  --card: 0 0% 100%;
  --card-foreground: 240 50% 10%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 50% 10%;
  --primary: 280 100% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 25% 94%;
  --secondary-foreground: 240 50% 10%;
  --muted: 240 25% 94%;
  --muted-foreground: 240 15% 40%;
  --accent: 190 100% 45%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 25% 90%;
  --input: 240 25% 90%;
  --ring: 280 100% 55%;
}

/* Theme: Cotton Candy */
.theme-nitro-cotton-candy {
  --background: 260 20% 12%;
  --foreground: 260 30% 96%;
  --card: 260 18% 14%;
  --card-foreground: 260 30% 96%;
  --popover: 260 18% 14%;
  --popover-foreground: 260 30% 96%;
  --primary: 220 80% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 260 15% 20%;
  --secondary-foreground: 260 30% 96%;
  --muted: 260 15% 20%;
  --muted-foreground: 260 12% 60%;
  --accent: 330 70% 65%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 260 15% 24%;
  --input: 260 15% 24%;
  --ring: 220 80% 60%;
}

.theme-nitro-cotton-candy.light {
  --background: 260 30% 98%;
  --foreground: 260 25% 15%;
  --card: 0 0% 100%;
  --card-foreground: 260 25% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 260 25% 15%;
  --primary: 220 80% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 260 20% 94%;
  --secondary-foreground: 260 25% 15%;
  --muted: 260 20% 94%;
  --muted-foreground: 260 12% 40%;
  --accent: 330 70% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 260 20% 90%;
  --input: 260 20% 90%;
  --ring: 220 80% 55%;
}

/* Theme: Dusk */
.theme-nitro-dusk {
  --background: 260 30% 10%;
  --foreground: 260 25% 96%;
  --card: 260 25% 12%;
  --card-foreground: 260 25% 96%;
  --popover: 260 25% 12%;
  --popover-foreground: 260 25% 96%;
  --primary: 270 50% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 260 20% 18%;
  --secondary-foreground: 260 25% 96%;
  --muted: 260 20% 18%;
  --muted-foreground: 260 15% 60%;
  --accent: 290 40% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 260 20% 22%;
  --input: 260 20% 22%;
  --ring: 270 50% 50%;
}

.theme-nitro-dusk.light {
  --background: 260 25% 98%;
  --foreground: 260 30% 15%;
  --card: 0 0% 100%;
  --card-foreground: 260 30% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 260 30% 15%;
  --primary: 270 50% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 260 20% 94%;
  --secondary-foreground: 260 30% 15%;
  --muted: 260 20% 94%;
  --muted-foreground: 260 15% 40%;
  --accent: 290 40% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 260 20% 90%;
  --input: 260 20% 90%;
  --ring: 270 50% 45%;
}

/* Theme: Under The Sea */
.theme-nitro-under-the-sea {
  --background: 195 40% 8%;
  --foreground: 190 30% 96%;
  --card: 195 35% 10%;
  --card-foreground: 190 30% 96%;
  --popover: 195 35% 10%;
  --popover-foreground: 190 30% 96%;
  --primary: 195 60% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 195 25% 16%;
  --secondary-foreground: 190 30% 96%;
  --muted: 195 25% 16%;
  --muted-foreground: 195 15% 60%;
  --accent: 175 50% 50%;
  --accent-foreground: 195 40% 8%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 195 25% 20%;
  --input: 195 25% 20%;
  --ring: 195 60% 45%;
}

.theme-nitro-under-the-sea.light {
  --background: 190 30% 98%;
  --foreground: 195 40% 12%;
  --card: 0 0% 100%;
  --card-foreground: 195 40% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 195 40% 12%;
  --primary: 195 60% 40%;
  --primary-foreground: 0 0% 100%;
  --secondary: 195 20% 94%;
  --secondary-foreground: 195 40% 12%;
  --muted: 195 20% 94%;
  --muted-foreground: 195 15% 40%;
  --accent: 175 50% 45%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 195 20% 90%;
  --input: 195 20% 90%;
  --ring: 195 60% 40%;
}

/* Theme: Hanami */
.theme-nitro-hanami {
  --background: 320 20% 12%;
  --foreground: 320 30% 96%;
  --card: 320 18% 14%;
  --card-foreground: 320 30% 96%;
  --popover: 320 18% 14%;
  --popover-foreground: 320 30% 96%;
  --primary: 330 40% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 320 15% 20%;
  --secondary-foreground: 320 30% 96%;
  --muted: 320 15% 20%;
  --muted-foreground: 320 12% 60%;
  --accent: 340 60% 70%;
  --accent-foreground: 320 20% 12%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 320 15% 24%;
  --input: 320 15% 24%;
  --ring: 330 40% 55%;
}

.theme-nitro-hanami.light {
  --background: 320 30% 98%;
  --foreground: 320 25% 15%;
  --card: 0 0% 100%;
  --card-foreground: 320 25% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 320 25% 15%;
  --primary: 330 40% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 320 20% 94%;
  --secondary-foreground: 320 25% 15%;
  --muted: 320 20% 94%;
  --muted-foreground: 320 12% 40%;
  --accent: 340 60% 65%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 320 20% 90%;
  --input: 320 20% 90%;
  --ring: 330 40% 50%;
}

/* Theme: Sunrise */
.theme-nitro-sunrise {
  --background: 20 30% 10%;
  --foreground: 40 30% 96%;
  --card: 20 25% 12%;
  --card-foreground: 40 30% 96%;
  --popover: 20 25% 12%;
  --popover-foreground: 40 30% 96%;
  --primary: 350 70% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 20 20% 18%;
  --secondary-foreground: 40 30% 96%;
  --muted: 20 20% 18%;
  --muted-foreground: 20 15% 60%;
  --accent: 35 90% 60%;
  --accent-foreground: 20 30% 10%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 20 20% 22%;
  --input: 20 20% 22%;
  --ring: 350 70% 55%;
}

.theme-nitro-sunrise.light {
  --background: 40 30% 98%;
  --foreground: 20 30% 15%;
  --card: 0 0% 100%;
  --card-foreground: 20 30% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 20 30% 15%;
  --primary: 350 70% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 20 20% 94%;
  --secondary-foreground: 20 30% 15%;
  --muted: 20 20% 94%;
  --muted-foreground: 20 15% 40%;
  --accent: 35 90% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 20 20% 90%;
  --input: 20 20% 90%;
  --ring: 350 70% 50%;
}

/* Theme: Mars */
.theme-nitro-mars {
  --background: 15 30% 8%;
  --foreground: 20 30% 96%;
  --card: 15 25% 10%;
  --card-foreground: 20 30% 96%;
  --popover: 15 25% 10%;
  --popover-foreground: 20 30% 96%;
  --primary: 15 60% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 15 20% 16%;
  --secondary-foreground: 20 30% 96%;
  --muted: 15 20% 16%;
  --muted-foreground: 15 15% 60%;
  --accent: 25 70% 55%;
  --accent-foreground: 15 30% 8%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 15 20% 20%;
  --input: 15 20% 20%;
  --ring: 15 60% 45%;
}

.theme-nitro-mars.light {
  --background: 20 30% 98%;
  --foreground: 15 30% 12%;
  --card: 0 0% 100%;
  --card-foreground: 15 30% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 15 30% 12%;
  --primary: 15 60% 40%;
  --primary-foreground: 0 0% 100%;
  --secondary: 15 20% 94%;
  --secondary-foreground: 15 30% 12%;
  --muted: 15 20% 94%;
  --muted-foreground: 15 15% 40%;
  --accent: 25 70% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 15 20% 90%;
  --input: 15 20% 90%;
  --ring: 15 60% 40%;
}

/* Theme: Citrus Sherbert */
.theme-nitro-citrus-sherbert {
  --background: 30 20% 12%;
  --foreground: 45 30% 96%;
  --card: 30 18% 14%;
  --card-foreground: 45 30% 96%;
  --popover: 30 18% 14%;
  --popover-foreground: 45 30% 96%;
  --primary: 25 80% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 30 15% 20%;
  --secondary-foreground: 45 30% 96%;
  --muted: 30 15% 20%;
  --muted-foreground: 30 12% 60%;
  --accent: 45 90% 60%;
  --accent-foreground: 30 20% 12%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 30 15% 24%;
  --input: 30 15% 24%;
  --ring: 25 80% 50%;
}

.theme-nitro-citrus-sherbert.light {
  --background: 45 30% 98%;
  --foreground: 30 25% 15%;
  --card: 0 0% 100%;
  --card-foreground: 30 25% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 30 25% 15%;
  --primary: 25 80% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 30 20% 94%;
  --secondary-foreground: 30 25% 15%;
  --muted: 30 20% 94%;
  --muted-foreground: 30 12% 40%;
  --accent: 45 90% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 30 20% 90%;
  --input: 30 20% 90%;
  --ring: 25 80% 45%;
}

/* Theme: Lofi Vibes */
.theme-nitro-lofi-vibes {
  --background: 230 20% 12%;
  --foreground: 230 20% 96%;
  --card: 230 18% 14%;
  --card-foreground: 230 20% 96%;
  --popover: 230 18% 14%;
  --popover-foreground: 230 20% 96%;
  --primary: 230 25% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 230 15% 20%;
  --secondary-foreground: 230 20% 96%;
  --muted: 230 15% 20%;
  --muted-foreground: 230 10% 60%;
  --accent: 260 25% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 230 15% 24%;
  --input: 230 15% 24%;
  --ring: 230 25% 55%;
}

.theme-nitro-lofi-vibes.light {
  --background: 230 20% 98%;
  --foreground: 230 20% 15%;
  --card: 0 0% 100%;
  --card-foreground: 230 20% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 230 20% 15%;
  --primary: 230 25% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 230 15% 94%;
  --secondary-foreground: 230 20% 15%;
  --muted: 230 15% 94%;
  --muted-foreground: 230 10% 40%;
  --accent: 260 25% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 230 15% 90%;
  --input: 230 15% 90%;
  --ring: 230 25% 50%;
}

/* Theme: Desert Khaki */
.theme-nitro-desert-khaki {
  --background: 35 15% 12%;
  --foreground: 40 20% 96%;
  --card: 35 12% 14%;
  --card-foreground: 40 20% 96%;
  --popover: 35 12% 14%;
  --popover-foreground: 40 20% 96%;
  --primary: 35 25% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 35 10% 20%;
  --secondary-foreground: 40 20% 96%;
  --muted: 35 10% 20%;
  --muted-foreground: 35 8% 60%;
  --accent: 45 30% 55%;
  --accent-foreground: 35 15% 12%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 35 10% 24%;
  --input: 35 10% 24%;
  --ring: 35 25% 45%;
}

.theme-nitro-desert-khaki.light {
  --background: 40 20% 98%;
  --foreground: 35 15% 15%;
  --card: 0 0% 100%;
  --card-foreground: 35 15% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 35 15% 15%;
  --primary: 35 25% 40%;
  --primary-foreground: 0 0% 100%;
  --secondary: 35 12% 94%;
  --secondary-foreground: 35 15% 15%;
  --muted: 35 12% 94%;
  --muted-foreground: 35 8% 40%;
  --accent: 45 30% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 35 12% 90%;
  --input: 35 12% 90%;
  --ring: 35 25% 40%;
}

/* Theme: Retro Raincloud */
.theme-nitro-retro-raincloud {
  --background: 210 15% 12%;
  --foreground: 210 15% 96%;
  --card: 210 12% 14%;
  --card-foreground: 210 15% 96%;
  --popover: 210 12% 14%;
  --popover-foreground: 210 15% 96%;
  --primary: 210 20% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 10% 20%;
  --secondary-foreground: 210 15% 96%;
  --muted: 210 10% 20%;
  --muted-foreground: 210 8% 60%;
  --accent: 220 20% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 210 10% 24%;
  --input: 210 10% 24%;
  --ring: 210 20% 55%;
}

.theme-nitro-retro-raincloud.light {
  --background: 210 15% 98%;
  --foreground: 210 15% 15%;
  --card: 0 0% 100%;
  --card-foreground: 210 15% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 210 15% 15%;
  --primary: 210 20% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 10% 94%;
  --secondary-foreground: 210 15% 15%;
  --muted: 210 10% 94%;
  --muted-foreground: 210 8% 40%;
  --accent: 220 20% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 210 10% 90%;
  --input: 210 10% 90%;
  --ring: 210 20% 50%;
}

/* Theme: Strawberry Lemonade */
.theme-nitro-strawberry-lemonade {
  --background: 340 25% 10%;
  --foreground: 50 30% 96%;
  --card: 340 22% 12%;
  --card-foreground: 50 30% 96%;
  --popover: 340 22% 12%;
  --popover-foreground: 50 30% 96%;
  --primary: 345 70% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 340 18% 18%;
  --secondary-foreground: 50 30% 96%;
  --muted: 340 18% 18%;
  --muted-foreground: 340 12% 60%;
  --accent: 45 80% 55%;
  --accent-foreground: 340 25% 10%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 340 18% 22%;
  --input: 340 18% 22%;
  --ring: 345 70% 50%;
}

.theme-nitro-strawberry-lemonade.light {
  --background: 50 30% 98%;
  --foreground: 340 25% 15%;
  --card: 0 0% 100%;
  --card-foreground: 340 25% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 340 25% 15%;
  --primary: 345 70% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 340 18% 94%;
  --secondary-foreground: 340 25% 15%;
  --muted: 340 18% 94%;
  --muted-foreground: 340 12% 40%;
  --accent: 45 80% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 340 18% 90%;
  --input: 340 18% 90%;
  --ring: 345 70% 45%;
}

/* Theme: Retro Storm */
.theme-nitro-retro-storm {
  --background: 210 20% 10%;
  --foreground: 210 15% 96%;
  --card: 210 18% 12%;
  --card-foreground: 210 15% 96%;
  --popover: 210 18% 12%;
  --popover-foreground: 210 15% 96%;
  --primary: 210 25% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 15% 18%;
  --secondary-foreground: 210 15% 96%;
  --muted: 210 15% 18%;
  --muted-foreground: 210 10% 60%;
  --accent: 220 25% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 210 15% 22%;
  --input: 210 15% 22%;
  --ring: 210 25% 50%;
}

.theme-nitro-retro-storm.light {
  --background: 210 15% 98%;
  --foreground: 210 20% 15%;
  --card: 0 0% 100%;
  --card-foreground: 210 20% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 210 20% 15%;
  --primary: 210 25% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 15% 94%;
  --secondary-foreground: 210 20% 15%;
  --muted: 210 15% 94%;
  --muted-foreground: 210 10% 40%;
  --accent: 220 25% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 210 15% 90%;
  --input: 210 15% 90%;
  --ring: 210 25% 45%;
}

/* Theme: Sepia */
.theme-nitro-sepia {
  --background: 30 15% 10%;
  --foreground: 35 20% 96%;
  --card: 30 12% 12%;
  --card-foreground: 35 20% 96%;
  --popover: 30 12% 12%;
  --popover-foreground: 35 20% 96%;
  --primary: 30 25% 40%;
  --primary-foreground: 0 0% 100%;
  --secondary: 30 10% 18%;
  --secondary-foreground: 35 20% 96%;
  --muted: 30 10% 18%;
  --muted-foreground: 30 8% 60%;
  --accent: 35 30% 50%;
  --accent-foreground: 30 15% 10%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 30 10% 22%;
  --input: 30 10% 22%;
  --ring: 30 25% 40%;
}

.theme-nitro-sepia.light {
  --background: 35 20% 98%;
  --foreground: 30 15% 15%;
  --card: 0 0% 100%;
  --card-foreground: 30 15% 15%;
  --popover: 0 0% 100%;
  --popover-foreground: 30 15% 15%;
  --primary: 30 25% 35%;
  --primary-foreground: 0 0% 100%;
  --secondary: 30 12% 94%;
  --secondary-foreground: 30 15% 15%;
  --muted: 30 12% 94%;
  --muted-foreground: 30 8% 40%;
  --accent: 35 30% 45%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 30 12% 90%;
  --input: 30 12% 90%;
  --ring: 30 25% 35%;
}
`,
};

// Helper functions
const log = (msg = "") => console.log(msg);
const clearScreen = () => {
  process.stdout.write("\x1b[2J\x1b[0f");
};

const drawBox = (width, title = "") => {
  const horizontal = box.horizontal.repeat(width - 2);
  if (title) {
    const titleStr = ` ${title} `;
    const leftWidth = Math.floor((width - 2 - titleStr.length) / 2);
    const rightWidth = width - 2 - titleStr.length - leftWidth;
    return (
      c(box.topLeft, colors.cyan) +
      c(box.horizontal.repeat(leftWidth), colors.cyan) +
      c(titleStr, colors.brightCyan, colors.bold) +
      c(box.horizontal.repeat(rightWidth), colors.cyan) +
      c(box.topRight, colors.cyan)
    );
  }
  return c(box.topLeft + horizontal + box.topRight, colors.cyan);
};

const drawBottomBox = (width) => {
  const horizontal = box.horizontal.repeat(width - 2);
  return c(box.bottomLeft + horizontal + box.bottomRight, colors.cyan);
};

const drawLine = (text, width, align = "left") => {
  const padding = width - 2 - text.length;
  if (align === "center") {
    const left = Math.floor(padding / 2);
    const right = padding - left;
    return (
      c(box.vertical, colors.cyan) +
      " ".repeat(left) +
      text +
      " ".repeat(right) +
      c(box.vertical, colors.cyan)
    );
  }
  return (
    c(box.vertical, colors.cyan) +
    " " +
    text +
    " ".repeat(Math.max(0, padding - 1)) +
    c(box.vertical, colors.cyan)
  );
};

// Print welcome banner
const printBanner = () => {
  const width = 70;
  log();
  log(drawBox(width));
  log(drawLine("", width));
  log(
    drawLine(
      c("⚡ Gradient Forge", colors.brightCyan, colors.bold, colors.underline),
      width,
      "center"
    )
  );
  log(
    drawLine(
      c("Professional shadcn/ui gradient theming system", colors.dim),
      width,
      "center"
    )
  );
  log(drawLine("", width));
  log(drawBottomBox(width));
  log();
};

// Interactive selector with proper key handling
const promptSelect = async (title, items, defaultIndex = 0) => {
  return new Promise((resolve) => {
    let selectedIndex = defaultIndex;
    const height = items.length + 5;

    const render = () => {
      // Move cursor to top and clear below
      process.stdout.write("\x1b[s"); // Save cursor position
      process.stdout.write("\x1b[?25l"); // Hide cursor

      // Clear previous render
      for (let i = 0; i < height; i++) {
        process.stdout.write("\x1b[2K\x1b[A");
      }
      process.stdout.write("\x1b[2K"); // Clear current line

      log(c(`  ${title}`, colors.bold, colors.cyan));
      log(c("  " + "─".repeat(title.length + 2), colors.dim));
      log();

      items.forEach((item, index) => {
        const isSelected = index === selectedIndex;
        const pointer = isSelected ? c("▸", colors.green, colors.bold) : " ";
        const label = isSelected
          ? c(item.label, colors.brightCyan, colors.bold)
          : c(item.label, colors.dim);
        const icon = item.icon || "";
        log(`  ${pointer} ${icon} ${label}`);
      });

      log();
      log(
        c(
          "  Use ↑/↓ or j/k to navigate, Enter to select",
          colors.dim,
          colors.italic
        )
      );

      process.stdout.write("\x1b[u"); // Restore cursor position
    };

    const cleanup = () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdin.removeAllListeners("data");
      process.stdout.write("\x1b[?25h"); // Show cursor
      // Clear the menu
      for (let i = 0; i < height; i++) {
        process.stdout.write("\x1b[2K\x1b[A");
      }
      process.stdout.write("\x1b[2K");
    };

    const handleData = (buffer) => {
      const key = buffer.toString();

      // Ctrl+C
      if (key === "\x03") {
        cleanup();
        process.exit(0);
      }

      // Up arrow or 'k'
      if (key === "\x1b[A" || key === "k" || key === "K") {
        selectedIndex = selectedIndex === 0 ? items.length - 1 : selectedIndex - 1;
        render();
      }
      // Down arrow or 'j'
      else if (key === "\x1b[B" || key === "j" || key === "J") {
        selectedIndex = selectedIndex === items.length - 1 ? 0 : selectedIndex + 1;
        render();
      }
      // Enter
      else if (key === "\r" || key === "\n") {
        cleanup();
        resolve(items[selectedIndex]);
      }
    };

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", handleData);

    // Initial render
    log();
    render();
  });
};

// File system helpers
const fileExists = (filepath) => {
  try {
    fs.accessSync(filepath);
    return true;
  } catch {
    return false;
  }
};

const ensureDir = (dir) => {
  if (!fileExists(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Detect project type
const detectProjectType = (projectRoot) => {
  const packageJsonPath = path.join(projectRoot, "package.json");
  if (!fileExists(packageJsonPath)) {
    return null;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  // Check for Next.js
  if (deps.next) {
    // Check for App Router
    const appDir = path.join(projectRoot, "app");
    const srcAppDir = path.join(projectRoot, "src", "app");

    if (fileExists(appDir) || fileExists(srcAppDir)) {
      const layoutFile = fileExists(path.join(appDir, "layout.tsx"))
        ? path.join(appDir, "layout.tsx")
        : fileExists(path.join(appDir, "layout.jsx"))
        ? path.join(appDir, "layout.jsx")
        : fileExists(path.join(appDir, "layout.js"))
        ? path.join(appDir, "layout.js")
        : fileExists(path.join(srcAppDir, "layout.tsx"))
        ? path.join(srcAppDir, "layout.tsx")
        : fileExists(path.join(srcAppDir, "layout.jsx"))
        ? path.join(srcAppDir, "layout.jsx")
        : fileExists(path.join(srcAppDir, "layout.js"))
        ? path.join(srcAppDir, "layout.js")
        : null;

      return { type: "next-app", layoutFile };
    }

    // Check for Pages Router
    const pagesDir = path.join(projectRoot, "pages");
    const srcPagesDir = path.join(projectRoot, "src", "pages");

    if (fileExists(pagesDir) || fileExists(srcPagesDir)) {
      const appFile = fileExists(path.join(pagesDir, "_app.tsx"))
        ? path.join(pagesDir, "_app.tsx")
        : fileExists(path.join(pagesDir, "_app.jsx"))
        ? path.join(pagesDir, "_app.jsx")
        : fileExists(path.join(pagesDir, "_app.js"))
        ? path.join(pagesDir, "_app.js")
        : fileExists(path.join(srcPagesDir, "_app.tsx"))
        ? path.join(srcPagesDir, "_app.tsx")
        : fileExists(path.join(srcPagesDir, "_app.jsx"))
        ? path.join(srcPagesDir, "_app.jsx")
        : fileExists(path.join(srcPagesDir, "_app.js"))
        ? path.join(srcPagesDir, "_app.js")
        : null;

      const documentFile = fileExists(path.join(pagesDir, "_document.tsx"))
        ? path.join(pagesDir, "_document.tsx")
        : fileExists(path.join(pagesDir, "_document.jsx"))
        ? path.join(pagesDir, "_document.jsx")
        : fileExists(path.join(pagesDir, "_document.js"))
        ? path.join(pagesDir, "_document.js")
        : fileExists(path.join(srcPagesDir, "_document.tsx"))
        ? path.join(srcPagesDir, "_document.tsx")
        : fileExists(path.join(srcPagesDir, "_document.jsx"))
        ? path.join(srcPagesDir, "_document.jsx")
        : fileExists(path.join(srcPagesDir, "_document.js"))
        ? path.join(srcPagesDir, "_document.js")
        : null;

      return { type: "next-pages", appFile, documentFile };
    }

    return { type: "next-unknown" };
  }

  // Check for Vite
  if (deps.vite || fileExists(path.join(projectRoot, "vite.config.ts")) || fileExists(path.join(projectRoot, "vite.config.js"))) {
    const mainFile =
      fileExists(path.join(projectRoot, "src", "main.tsx")) ? path.join(projectRoot, "src", "main.tsx") :
      fileExists(path.join(projectRoot, "src", "main.jsx")) ? path.join(projectRoot, "src", "main.jsx") :
      fileExists(path.join(projectRoot, "src", "main.js")) ? path.join(projectRoot, "src", "main.js") :
      fileExists(path.join(projectRoot, "main.tsx")) ? path.join(projectRoot, "main.tsx") :
      fileExists(path.join(projectRoot, "main.jsx")) ? path.join(projectRoot, "main.jsx") :
      fileExists(path.join(projectRoot, "main.js")) ? path.join(projectRoot, "main.js") :
      null;

    return { type: "vite", mainFile };
  }

  // Check for Create React App
  if (deps["react-scripts"]) {
    const indexFile =
      fileExists(path.join(projectRoot, "src", "index.tsx")) ? path.join(projectRoot, "src", "index.tsx") :
      fileExists(path.join(projectRoot, "src", "index.jsx")) ? path.join(projectRoot, "src", "index.jsx") :
      fileExists(path.join(projectRoot, "src", "index.js")) ? path.join(projectRoot, "src", "index.js") :
      null;

    return { type: "react", indexFile };
  }

  return { type: "unknown" };
};

// Detect TypeScript usage
const detectTypeScript = (projectRoot) => {
  return (
    fileExists(path.join(projectRoot, "tsconfig.json")) ||
    fileExists(path.join(projectRoot, "src", "main.tsx")) ||
    fileExists(path.join(projectRoot, "src", "index.tsx")) ||
    fileExists(path.join(projectRoot, "app", "layout.tsx"))
  );
};

// Get relative import path
const getRelativeImport = (from, to) => {
  const relative = path.relative(path.dirname(from), to);
  return relative.startsWith(".") ? relative : `./${relative}`;
};

// Inject theme into Next.js App Router
const injectNextApp = (projectRoot, themeId, colorMode, isTypeScript) => {
  const ext = isTypeScript ? "tsx" : "jsx";
  const appDir = fileExists(path.join(projectRoot, "app"))
    ? path.join(projectRoot, "app")
    : path.join(projectRoot, "src", "app");

  const layoutFile = path.join(appDir, `layout.${ext}`);
  const themeDir = path.join(projectRoot, "components", "theme");
  const cssFile = path.join(appDir, "globals.css");

  ensureDir(themeDir);

  // Write theme files
  const engineContent = TEMPLATES["theme-engine.ts"]
    .replace("{{DEFAULT_THEME}}", themeId)
    .replace("{{DEFAULT_MODE}}", colorMode);

  fs.writeFileSync(path.join(themeDir, `theme-engine.${ext}`), engineContent);
  fs.writeFileSync(path.join(themeDir, `theme-context.${ext}`), TEMPLATES["theme-context.tsx"]);

  // Write CSS
  fs.writeFileSync(cssFile, TEMPLATES["themes.css"]);

  // Update layout file
  if (fileExists(layoutFile)) {
    let layoutContent = fs.readFileSync(layoutFile, "utf8");

    // Add import for ThemeProvider
    const importLine = `import { ThemeProvider } from "@/components/theme/theme-context";`;
    if (!layoutContent.includes(importLine)) {
      // Add after last import
      const importMatch = layoutContent.match(/import.*?from.*?;\n/g);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        layoutContent = layoutContent.replace(lastImport, lastImport + importLine + "\n");
      } else {
        layoutContent = importLine + "\n" + layoutContent;
      }
    }

    // Add CSS import
    const cssImport = `import "./globals.css";`;
    if (!layoutContent.includes(cssImport)) {
      layoutContent = layoutContent.replace(
        /import.*?from.*?;\n/,
        (match) => match + cssImport + "\n"
      );
    }

    // Wrap children with ThemeProvider
    if (!layoutContent.includes("<ThemeProvider>")) {
      layoutContent = layoutContent.replace(
        /(\{children\})/,
        `<ThemeProvider>$1</ThemeProvider>`
      );
    }

    // Add theme classes to html
    if (!layoutContent.includes(`className="${colorMode} ${themeId}"`)) {
      layoutContent = layoutContent.replace(
        /<html([^>]*)>/,
        `<html$1 className="${colorMode} ${themeId}" data-theme="${themeId}" data-color-mode="${colorMode}">`
      );
    }

    fs.writeFileSync(layoutFile, layoutContent);
  }

  return {
    files: [cssFile, path.join(themeDir, `theme-engine.${ext}`), path.join(themeDir, `theme-context.${ext}`)],
    modified: [layoutFile],
  };
};

// Inject theme into Next.js Pages Router
const injectNextPages = (projectRoot, themeId, colorMode, isTypeScript, appFile, documentFile) => {
  const ext = isTypeScript ? "tsx" : "jsx";
  const themeDir = path.join(projectRoot, "components", "theme");
  const cssFile = path.join(projectRoot, "styles", "globals.css");

  ensureDir(themeDir);
  ensureDir(path.dirname(cssFile));

  // Write theme files
  const engineContent = TEMPLATES["theme-engine.ts"]
    .replace("{{DEFAULT_THEME}}", themeId)
    .replace("{{DEFAULT_MODE}}", colorMode);

  fs.writeFileSync(path.join(themeDir, `theme-engine.${ext}`), engineContent);
  fs.writeFileSync(path.join(themeDir, `theme-context.${ext}`), TEMPLATES["theme-context.tsx"]);

  // Write CSS
  fs.writeFileSync(cssFile, TEMPLATES["themes.css"]);

  // Update _app file
  if (appFile && fileExists(appFile)) {
    let appContent = fs.readFileSync(appFile, "utf8");

    // Add import for ThemeProvider
    const importLine = `import { ThemeProvider } from "../components/theme/theme-context";`;
    if (!appContent.includes(importLine)) {
      const importMatch = appContent.match(/import.*?from.*?;\n/g);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        appContent = appContent.replace(lastImport, lastImport + importLine + "\n");
      } else {
        appContent = importLine + "\n" + appContent;
      }
    }

    // Add CSS import
    const cssImport = `import "../styles/globals.css";`;
    if (!appContent.includes(cssImport)) {
      appContent = appContent.replace(
        /import.*?from.*?;\n/,
        (match) => match + cssImport + "\n"
      );
    }

    // Wrap Component with ThemeProvider
    if (!appContent.includes("<ThemeProvider>")) {
      appContent = appContent.replace(
        /<Component \{...pageProps\} \/>/,
        `<ThemeProvider><Component {...pageProps} /></ThemeProvider>`
      );
    }

    fs.writeFileSync(appFile, appContent);
  }

  // Update _document file
  if (documentFile && fileExists(documentFile)) {
    let docContent = fs.readFileSync(documentFile, "utf8");

    if (!docContent.includes(`className="${colorMode} ${themeId}"`)) {
      docContent = docContent.replace(
        /<Html([^>]*)>/,
        `<Html$1 className="${colorMode} ${themeId}" data-theme="${themeId}" data-color-mode="${colorMode}">`
      );
    }

    fs.writeFileSync(documentFile, docContent);
  }

  return {
    files: [cssFile, path.join(themeDir, `theme-engine.${ext}`), path.join(themeDir, `theme-context.${ext}`)],
    modified: [appFile, documentFile].filter(Boolean),
  };
};

// Inject theme into Vite project
const injectVite = (projectRoot, themeId, colorMode, isTypeScript, mainFile) => {
  const ext = isTypeScript ? "tsx" : "jsx";
  const srcDir = path.join(projectRoot, "src");
  const themeDir = path.join(srcDir, "components", "theme");
  const cssFile = path.join(srcDir, "index.css");

  ensureDir(themeDir);

  // Write theme files
  const engineContent = TEMPLATES["theme-engine.ts"]
    .replace("{{DEFAULT_THEME}}", themeId)
    .replace("{{DEFAULT_MODE}}", colorMode);

  fs.writeFileSync(path.join(themeDir, `theme-engine.${ext}`), engineContent);
  fs.writeFileSync(path.join(themeDir, `theme-context.${ext}`), TEMPLATES["theme-context.tsx"]);

  // Write CSS
  fs.writeFileSync(cssFile, TEMPLATES["themes.css"]);

  // Update main file
  if (mainFile && fileExists(mainFile)) {
    let mainContent = fs.readFileSync(mainFile, "utf8");

    // Add import for ThemeProvider
    const importLine = `import { ThemeProvider } from "./components/theme/theme-context";`;
    if (!mainContent.includes(importLine)) {
      const importMatch = mainContent.match(/import.*?from.*?;\n/g);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        mainContent = mainContent.replace(lastImport, lastImport + importLine + "\n");
      } else {
        mainContent = importLine + "\n" + mainContent;
      }
    }

    // Add CSS import
    const cssImport = `import "./index.css";`;
    if (!mainContent.includes(cssImport)) {
      mainContent = mainContent.replace(
        /import.*?from.*?;\n/,
        (match) => match + cssImport + "\n"
      );
    }

    // Wrap App with ThemeProvider
    if (!mainContent.includes("<ThemeProvider>")) {
      mainContent = mainContent.replace(
        /<App \/>/,
        `<ThemeProvider><App /></ThemeProvider>`
      );
    }

    fs.writeFileSync(mainFile, mainContent);
  }

  // Update index.html
  const indexHtml = path.join(projectRoot, "index.html");
  if (fileExists(indexHtml)) {
    let htmlContent = fs.readFileSync(indexHtml, "utf8");

    if (!htmlContent.includes(`class="${colorMode} ${themeId}"`)) {
      htmlContent = htmlContent.replace(
        /<html([^>]*)>/,
        `<html$1 class="${colorMode} ${themeId}" data-theme="${themeId}" data-color-mode="${colorMode}">`
      );
    }

    fs.writeFileSync(indexHtml, htmlContent);
  }

  return {
    files: [cssFile, path.join(themeDir, `theme-engine.${ext}`), path.join(themeDir, `theme-context.${ext}`)],
    modified: [mainFile, path.join(projectRoot, "index.html")].filter((f) => fileExists(f)),
  };
};

// Inject theme into React (CRA) project
const injectReact = (projectRoot, themeId, colorMode, isTypeScript, indexFile) => {
  const ext = isTypeScript ? "tsx" : "jsx";
  const srcDir = path.join(projectRoot, "src");
  const themeDir = path.join(srcDir, "components", "theme");
  const cssFile = path.join(srcDir, "index.css");

  ensureDir(themeDir);

  // Write theme files
  const engineContent = TEMPLATES["theme-engine.ts"]
    .replace("{{DEFAULT_THEME}}", themeId)
    .replace("{{DEFAULT_MODE}}", colorMode);

  fs.writeFileSync(path.join(themeDir, `theme-engine.${ext}`), engineContent);
  fs.writeFileSync(path.join(themeDir, `theme-context.${ext}`), TEMPLATES["theme-context.tsx"]);

  // Write CSS
  fs.writeFileSync(cssFile, TEMPLATES["themes.css"]);

  // Update index file
  if (indexFile && fileExists(indexFile)) {
    let indexContent = fs.readFileSync(indexFile, "utf8");

    // Add import for ThemeProvider
    const importLine = `import { ThemeProvider } from "./components/theme/theme-context";`;
    if (!indexContent.includes(importLine)) {
      const importMatch = indexContent.match(/import.*?from.*?;\n/g);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        indexContent = indexContent.replace(lastImport, lastImport + importLine + "\n");
      } else {
        indexContent = importLine + "\n" + indexContent;
      }
    }

    // Add CSS import
    const cssImport = `import "./index.css";`;
    if (!indexContent.includes(cssImport)) {
      indexContent = indexContent.replace(
        /import.*?from.*?;\n/,
        (match) => match + cssImport + "\n"
      );
    }

    // Wrap App with ThemeProvider (handle ReactDOM.render and createRoot)
    if (!indexContent.includes("<ThemeProvider>")) {
      // Try to find App component in various patterns
      indexContent = indexContent.replace(
        /<App \/>/,
        `<ThemeProvider><App /></ThemeProvider>`
      );
    }

    fs.writeFileSync(indexFile, indexContent);
  }

  // Update public/index.html
  const publicHtml = path.join(projectRoot, "public", "index.html");
  if (fileExists(publicHtml)) {
    let htmlContent = fs.readFileSync(publicHtml, "utf8");

    if (!htmlContent.includes(`class="${colorMode} ${themeId}"`)) {
      htmlContent = htmlContent.replace(
        /<html([^>]*)>/,
        `<html$1 class="${colorMode} ${themeId}" data-theme="${themeId}" data-color-mode="${colorMode}">`
      );
    }

    fs.writeFileSync(publicHtml, htmlContent);
  }

  return {
    files: [cssFile, path.join(themeDir, `theme-engine.${ext}`), path.join(themeDir, `theme-context.${ext}`)],
    modified: [indexFile, path.join(projectRoot, "public", "index.html")].filter((f) => fileExists(f)),
  };
};

// Main init command
const init = async () => {
  clearScreen();
  printBanner();

  const projectRoot = process.cwd();

  // Detect project
  log(c("  🔍 Detecting project type...", colors.cyan));
  log();

  const projectType = detectProjectType(projectRoot);

  if (!projectType || projectType.type === "unknown") {
    log(c("  ❌ Error: Could not detect a supported project type.", colors.red));
    log();
    log(c("  Supported projects:", colors.yellow));
    log(c("    • Next.js (App Router or Pages Router)", colors.dim));
    log(c("    • Vite + React", colors.dim));
    log(c("    • Create React App", colors.dim));
    log();
    process.exit(1);
  }

  log(c(`  ✓ Found ${projectType.type.replace("-", " ")} project`, colors.green));
  log();

  const isTypeScript = detectTypeScript(projectRoot);
  log(c(`  ${isTypeScript ? "✓" : "•"} TypeScript ${isTypeScript ? "detected" : "not detected"}`, colors.dim));
  log();

  // Select theme
  const selectedTheme = await promptSelect(
    "Choose a theme",
    themes.map((t) => ({ ...t, icon: "🎨" })),
    12 // Default to Midnight Blurple
  );

  log();
  log(c(`  ✓ Selected: ${selectedTheme.label}`, colors.green));
  log();

  // Select color mode
  const selectedMode = await promptSelect(
    "Choose color mode",
    colorModes,
    0 // Default to dark
  );

  log();
  log(c(`  ✓ Mode: ${selectedMode.label}`, colors.green));
  log();

  // Show summary and confirm
  log(c("  📦 Summary:", colors.cyan, colors.bold));
  log(c("  " + "─".repeat(50), colors.dim));
  log(c(`    Theme: ${selectedTheme.label}`, colors.white));
  log(c(`    Mode: ${selectedMode.label}`, colors.white));
  log(c(`    Target: ${projectType.type.replace("-", " ")}`, colors.white));
  log(c("  " + "─".repeat(50), colors.dim));
  log();

  // Inject theme
  log(c("  🚀 Injecting theme...", colors.cyan));
  log();

  let result;
  try {
    switch (projectType.type) {
      case "next-app":
        result = injectNextApp(projectRoot, selectedTheme.id, selectedMode.id, isTypeScript);
        break;
      case "next-pages":
        result = injectNextPages(
          projectRoot,
          selectedTheme.id,
          selectedMode.id,
          isTypeScript,
          projectType.appFile,
          projectType.documentFile
        );
        break;
      case "vite":
        result = injectVite(projectRoot, selectedTheme.id, selectedMode.id, isTypeScript, projectType.mainFile);
        break;
      case "react":
        result = injectReact(projectRoot, selectedTheme.id, selectedMode.id, isTypeScript, projectType.indexFile);
        break;
      default:
        throw new Error("Unsupported project type");
    }

    // Show results
    log(c("  ✅ Theme injected successfully!", colors.green, colors.bold));
    log();

    log(c("  📄 Created files:", colors.cyan));
    result.files.forEach((file) => {
      log(c(`    + ${path.relative(projectRoot, file)}`, colors.green));
    });
    log();

    log(c("  📝 Modified files:", colors.cyan));
    result.modified.forEach((file) => {
      log(c(`    ~ ${path.relative(projectRoot, file)}`, colors.yellow));
    });
    log();

    log(c("  🎉 Your theme is ready!", colors.brightCyan, colors.bold));
    log();
    log(c("  Next steps:", colors.white));
    log(c("    1. Run your dev server: npm run dev", colors.dim));
    log(c("    2. Open your browser and see the magic! ✨", colors.dim));
    log();

  } catch (error) {
    log(c(`  ❌ Error: ${error.message}`, colors.red));
    process.exit(1);
  }
};

// Show help
const showHelp = () => {
  printBanner();
  log(c("  Usage:", colors.bold));
  log(c("    npx gradient-forge init", colors.cyan));
  log();
  log(c("  Description:", colors.bold));
  log(c("    Initialize Gradient Forge in your project with an interactive", colors.dim));
  log(c("    theme selector and automatic file generation.", colors.dim));
  log();
  log(c("  Supported Projects:", colors.bold));
  log(c("    • Next.js (App Router)", colors.dim));
  log(c("    • Next.js (Pages Router)", colors.dim));
  log(c("    • Vite + React", colors.dim));
  log(c("    • Create React App", colors.dim));
  log();
};

// Main entry
const main = async () => {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === "init") {
    await init();
  } else if (command === "--help" || command === "-h" || command === "help") {
    showHelp();
  } else {
    showHelp();
  }
};

main().catch((error) => {
  console.error(c(`Error: ${error.message}`, colors.red));
  process.exit(1);
});
