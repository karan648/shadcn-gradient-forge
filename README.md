<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C5CFF,100:2ED1C4&height=220&section=header&text=Gradient%20Forge&fontSize=48&fontAlignY=38&desc=Professional%20Shadcn%20Theming%20System&descAlignY=62" alt="Gradient Forge" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/gradient-forge">
    <img src="https://img.shields.io/npm/v/gradient-forge?style=for-the-badge&logo=npm&color=cb3837" alt="NPM Version" />
  </a>
  <a href="https://github.com/karanjadon648/shadcn-gradient-forge">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="https://buymeacoffee.com/karannn">
    <img src="https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-orange?style=for-the-badge&logo=buymeacoffee&logoColor=white" alt="Buy Me a Coffee" />
  </a>
</p>

<p align="center">
  <strong>Production-ready gradient theming system for shadcn/ui</strong><br/>
  21 curated gradient themes • Light/dark mode • Auto-setup CLI • Export-ready tokens
</p>

---

## ✨ Features

- 🎨 **21 Curated Gradient Themes** - Beautiful Nitro-inspired gradient palettes
- 🌓 **Light & Dark Mode** - Full support with persistent state
- 🏗️ **Surface-Aware Layers** - Cards, sidebars, and overlays with depth
- ⚡ **One-Command Setup** - Interactive CLI with auto-detection
- 📦 **Export Ready** - CSS, SCSS, JSON, Tailwind, W3C tokens, Figma
- 🔐 **Memory Lane Unlock** - Secret theme unlocked by exploring all themes
- 🔧 **TypeScript Support** - Fully typed with theme inference

## 🚀 Installation

### Option 1: CLI (Recommended)

The fastest way to get started:

```bash
npx gradient-forge init
```

The CLI will:
1. ✅ Auto-detect your project type (Next.js, Vite, React)
2. 🎨 Show interactive theme picker
3. ⚡ Generate all theme files
4. 🔧 Wrap your app with ThemeProvider
5. 🎨 Set theme classes on HTML root

**Supported Projects:**
- Next.js (App Router)
- Next.js (Pages Router)
- Vite + React
- Create React App

### Option 2: Manual Setup

Follow the detailed steps below to manually integrate Gradient Forge into your project.

---

## 📋 Manual Installation Guide

### Step 1: Create Theme Directory

Create the theme directory in your project:

```bash
mkdir -p components/theme
```

### Step 2: Create `theme-engine.ts`

Create `components/theme/theme-engine.ts`:

```typescript
export const NITRO_PUBLIC_THEMES = [
  {
    id: "theme-nitro-mint-apple",
    label: "Mint Apple",
    preview:
      "radial-gradient(circle at 12% 10%, #b2ffe1 0%, transparent 42%), linear-gradient(145deg, #2d8e74 0%, #70c76a 46%, #d5ef91 100%)",
  },
  {
    id: "theme-nitro-citrus-sherbert",
    label: "Citrus Sherbert",
    preview:
      "radial-gradient(circle at 10% 10%, #ffd37d 0%, transparent 42%), linear-gradient(145deg, #e67d35 0%, #f7bb54 46%, #fff0a3 100%)",
  },
  {
    id: "theme-nitro-retro-raincloud",
    label: "Retro Raincloud",
    preview:
      "radial-gradient(circle at 12% 10%, #b3c6dc 0%, transparent 42%), linear-gradient(145deg, #4e6077 0%, #6f86a0 46%, #98aec3 100%)",
  },
  {
    id: "theme-nitro-hanami",
    label: "Hanami",
    preview:
      "radial-gradient(circle at 12% 10%, #ffd5e7 0%, transparent 42%), linear-gradient(145deg, #995382 0%, #c77ca9 46%, #f0b7ce 100%)",
  },
  {
    id: "theme-nitro-sunrise",
    label: "Sunrise",
    preview:
      "radial-gradient(circle at 12% 10%, #ffb596 0%, transparent 42%), linear-gradient(145deg, #e25263 0%, #ef8a57 46%, #ffd07a 100%)",
  },
  {
    id: "theme-nitro-cotton-candy",
    label: "Cotton Candy",
    preview:
      "radial-gradient(circle at 12% 10%, #c8e9ff 0%, transparent 42%), linear-gradient(145deg, #5aa2ff 0%, #9b78f0 46%, #f39bca 100%)",
  },
  {
    id: "theme-nitro-lofi-vibes",
    label: "Lofi Vibes",
    preview:
      "radial-gradient(circle at 10% 10%, #8e97c6 0%, transparent 42%), linear-gradient(145deg, #3f476c 0%, #59608f 46%, #7a6f9f 100%)",
  },
  {
    id: "theme-nitro-desert-khaki",
    label: "Desert Khaki",
    preview:
      "radial-gradient(circle at 10% 10%, #d5bf92 0%, transparent 42%), linear-gradient(145deg, #6d5c49 0%, #8f7a5d 46%, #b49f76 100%)",
  },
  {
    id: "theme-nitro-sunset",
    label: "Sunset",
    preview:
      "radial-gradient(circle at 10% 10%, #d66a82 0%, transparent 42%), linear-gradient(145deg, #3f1b4d 0%, #8c335f 46%, #f4874f 100%)",
  },
  {
    id: "theme-nitro-chroma-glow",
    label: "Chroma Glow",
    preview:
      "radial-gradient(circle at 10% 10%, #7f8dff 0%, transparent 42%), linear-gradient(145deg, #2d3eff 0%, #a726fa 46%, #00c7ff 100%)",
  },
  {
    id: "theme-nitro-forest",
    label: "Forest",
    preview:
      "radial-gradient(circle at 10% 10%, #56be87 0%, transparent 42%), linear-gradient(145deg, #163f2e 0%, #246b49 46%, #59a86c 100%)",
  },
  {
    id: "theme-nitro-crimson",
    label: "Crimson",
    preview:
      "radial-gradient(circle at 10% 10%, #c23956 0%, transparent 42%), linear-gradient(145deg, #2d050f 0%, #681126 46%, #a82435 100%)",
  },
  {
    id: "theme-nitro-midnight-blurple",
    label: "Midnight Blurple",
    preview:
      "radial-gradient(circle at 10% 10%, #6d6eff 0%, transparent 42%), linear-gradient(145deg, #0f1232 0%, #25366f 46%, #5757dc 100%)",
  },
  {
    id: "theme-nitro-mars",
    label: "Mars",
    preview:
      "radial-gradient(circle at 10% 10%, #cc654c 0%, transparent 42%), linear-gradient(145deg, #2e140f 0%, #5e261d 46%, #9c422f 100%)",
  },
  {
    id: "theme-nitro-dusk",
    label: "Dusk",
    preview:
      "radial-gradient(circle at 10% 10%, #9475c1 0%, transparent 42%), linear-gradient(145deg, #1b1632 0%, #3b2d5b 46%, #745495 100%)",
  },
  {
    id: "theme-nitro-under-the-sea",
    label: "Under The Sea",
    preview:
      "radial-gradient(circle at 10% 10%, #3ea6b7 0%, transparent 42%), linear-gradient(145deg, #0b2242 0%, #0d4f69 46%, #2b848e 100%)",
  },
  {
    id: "theme-nitro-retro-storm",
    label: "Retro Storm",
    preview:
      "radial-gradient(circle at 10% 10%, #7e95ab 0%, transparent 42%), linear-gradient(145deg, #1d2b3a 0%, #354657 46%, #55667a 100%)",
  },
  {
    id: "theme-nitro-neon-nights",
    label: "Neon Nights",
    preview:
      "radial-gradient(circle at 10% 10%, #d13eff 0%, transparent 42%), linear-gradient(145deg, #05061a 0%, #180f52 46%, #00bde6 100%)",
  },
  {
    id: "theme-nitro-strawberry-lemonade",
    label: "Strawberry Lemonade",
    preview:
      "radial-gradient(circle at 10% 10%, #ff8aa8 0%, transparent 42%), linear-gradient(145deg, #8f1847 0%, #cc3f5e 46%, #efc141 100%)",
  },
  {
    id: "theme-nitro-aurora",
    label: "Aurora",
    preview:
      "radial-gradient(circle at 10% 10%, #41cbb1 0%, transparent 42%), linear-gradient(145deg, #083142 0%, #1b7e74 46%, #5fbf75 100%)",
  },
  {
    id: "theme-nitro-sepia",
    label: "Sepia",
    preview:
      "radial-gradient(circle at 10% 10%, #b99672 0%, transparent 42%), linear-gradient(145deg, #35261d 0%, #5d4636 46%, #927454 100%)",
  },
] as const;

export const MEMORY_LANE_THEME = {
  id: "theme-nitro-memory-lane",
  label: "Memory Lane",
  preview:
    "radial-gradient(circle at 10% 10%, #ba8fd4 0%, transparent 42%), linear-gradient(145deg, #462d42 0%, #684b75 35%, #4a7199 68%, #77ad9f 100%)",
} as const;

export const NITRO_ALL_THEMES = [
  ...NITRO_PUBLIC_THEMES,
  MEMORY_LANE_THEME,
] as const;

export type ThemeId = (typeof NITRO_ALL_THEMES)[number]["id"];
export type ColorMode = "dark" | "light";

type ThemeTourProgress = {
  viewedThemeIds: string[];
  memoryLaneUnlocked: boolean;
};

const DEFAULT_THEME: ThemeId = "theme-nitro-midnight-blurple";
const DEFAULT_COLOR_MODE: ColorMode = "dark";
const THEME_STORAGE_KEY = "shadcn-gradient.theme";
const COLOR_MODE_STORAGE_KEY = "shadcn-gradient.color-mode";
const THEME_TOUR_STORAGE_KEY = "shadcn-gradient.theme-tour.v1";

const NITRO_THEME_IDS = new Set<string>(NITRO_ALL_THEMES.map((theme) => theme.id));

export const publicThemeIds: ThemeId[] = NITRO_PUBLIC_THEMES.map((theme) => theme.id);

export const normalizeTheme = (theme?: string | null): ThemeId => {
  if (!theme || !NITRO_THEME_IDS.has(theme)) {
    return DEFAULT_THEME;
  }
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

export const readTourProgress = (): ThemeTourProgress => {
  if (typeof window === "undefined") {
    return { viewedThemeIds: [], memoryLaneUnlocked: false };
  }

  const raw = localStorage.getItem(THEME_TOUR_STORAGE_KEY);
  if (!raw) {
    return { viewedThemeIds: [], memoryLaneUnlocked: false };
  }

  try {
    const parsed = JSON.parse(raw) as ThemeTourProgress;
    return {
      viewedThemeIds: Array.isArray(parsed.viewedThemeIds)
        ? parsed.viewedThemeIds.filter((id) => NITRO_THEME_IDS.has(id))
        : [],
      memoryLaneUnlocked: Boolean(parsed.memoryLaneUnlocked),
    };
  } catch {
    return { viewedThemeIds: [], memoryLaneUnlocked: false };
  }
};

export const persistTourProgress = (progress: ThemeTourProgress) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_TOUR_STORAGE_KEY, JSON.stringify(progress));
};

export const applyTheme = (theme?: string | null, mode?: ColorMode) => {
  if (typeof window === "undefined") return;

  const normalizedTheme = normalizeTheme(theme);
  const normalizedMode = normalizeColorMode(mode ?? getStoredColorMode());
  const root = document.documentElement;

  Array.from(root.classList).forEach((className) => {
    if (
      className === "dark" ||
      className === "light" ||
      className.startsWith("theme-nitro-")
    ) {
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
```

### Step 3: Create `theme-context.tsx`

Create `components/theme/theme-context.tsx`:

```tsx
"use client";

import {
  type ColorMode,
  type ThemeId,
  MEMORY_LANE_THEME,
  NITRO_ALL_THEMES,
  NITRO_PUBLIC_THEMES,
  applyTheme,
  defaultColorMode,
  defaultTheme,
  getStoredColorMode,
  getStoredTheme,
  persistTourProgress,
  publicThemeIds,
  readTourProgress,
} from "./theme-engine";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeContextValue = {
  themeId: ThemeId;
  colorMode: ColorMode;
  availableThemes: typeof NITRO_ALL_THEMES;
  viewedThemeIds: string[];
  memoryLaneUnlocked: boolean;
  remainingForUnlock: number;
  setThemeId: (themeId: ThemeId) => void;
  setColorMode: (mode: ColorMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeId, setThemeIdState] = useState<ThemeId>(defaultTheme);
  const [colorMode, setColorModeState] = useState<ColorMode>(defaultColorMode);
  const [viewedThemeIds, setViewedThemeIds] = useState<string[]>([]);
  const [memoryLaneUnlocked, setMemoryLaneUnlocked] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const storedMode = getStoredColorMode();
    const tour = readTourProgress();

    setThemeIdState(storedTheme);
    setColorModeState(storedMode);
    setViewedThemeIds(tour.viewedThemeIds);
    setMemoryLaneUnlocked(tour.memoryLaneUnlocked);
    applyTheme(storedTheme, storedMode);
  }, []);

  useEffect(() => {
    applyTheme(themeId, colorMode);
  }, [themeId, colorMode]);

  const setThemeId = (nextTheme: ThemeId) => {
    const isPublic = publicThemeIds.includes(nextTheme);
    const nextViewedThemeIds = isPublic
      ? Array.from(new Set([...viewedThemeIds, nextTheme]))
      : viewedThemeIds;

    const hasCompletedTour = publicThemeIds.every((id) =>
      nextViewedThemeIds.includes(id),
    );
    const nextMemoryLaneUnlocked = memoryLaneUnlocked || hasCompletedTour;

    setThemeIdState(nextTheme);
    setViewedThemeIds(nextViewedThemeIds);
    setMemoryLaneUnlocked(nextMemoryLaneUnlocked);
    persistTourProgress({
      viewedThemeIds: nextViewedThemeIds,
      memoryLaneUnlocked: nextMemoryLaneUnlocked,
    });
  };

  const setColorMode = (mode: ColorMode) => {
    setColorModeState(mode);
  };

  const availableThemes = useMemo(
    () => (memoryLaneUnlocked ? NITRO_ALL_THEMES : NITRO_PUBLIC_THEMES),
    [memoryLaneUnlocked],
  );

  const remainingForUnlock = useMemo(() => {
    const remaining = publicThemeIds.length - viewedThemeIds.length;
    return Math.max(0, remaining);
  }, [viewedThemeIds]);

  useEffect(() => {
    if (themeId === MEMORY_LANE_THEME.id && !memoryLaneUnlocked) {
      setMemoryLaneUnlocked(true);
    }
  }, [themeId, memoryLaneUnlocked]);

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        colorMode,
        availableThemes: availableThemes as typeof NITRO_ALL_THEMES,
        viewedThemeIds,
        memoryLaneUnlocked,
        remainingForUnlock,
        setThemeId,
        setColorMode,
      }}
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
```

### Step 4: Add CSS to `globals.css`

Add the following CSS to your `app/globals.css` (or `src/index.css` for Vite/CRA):

```css
/* Base CSS Variables */
:root {
  --radius: 0.625rem;
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

/* Theme: Midnight Blurple (Default) */
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
  --app-gradient: radial-gradient(circle at 10% 10%, #6d6eff 0%, transparent 42%), 
                  linear-gradient(145deg, #0f1232 0%, #25366f 46%, #5757dc 100%);
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
  --app-gradient: radial-gradient(circle at 10% 10%, #6d6eff 0%, transparent 42%), 
                  linear-gradient(145deg, #d0d4ff 0%, #9fa8ff 46%, #7a7aff 100%);
}
```

> **Note:** The complete CSS with all 21 themes is available in the [Studio](https://gradient-forge.vercel.app/studio). Use the export feature to get the full CSS file.

### Step 5: Wrap Your App with ThemeProvider

**For Next.js (App Router) - `app/layout.tsx`:**

```tsx
import { ThemeProvider } from '@/components/theme/theme-context';
import './globals.css';

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**For Next.js (Pages Router) - `pages/_app.tsx`:**

```tsx
import { ThemeProvider } from '../components/theme/theme-context';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

**For Next.js (Pages Router) - `pages/_document.tsx`:**

```tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

**For Vite + React - `src/main.tsx`:**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './components/theme/theme-context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

**For Create React App - `src/index.tsx`:**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './components/theme/theme-context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### Step 6: Update HTML Template (Vite/CRA)

**For Vite - `index.html`:**

```html
<!DOCTYPE html>
<html lang="en" class="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**For Create React App - `public/index.html`:**

```html
<!DOCTYPE html>
<html lang="en" class="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

## 🎨 Using the Theme System

### useThemeContext Hook

Access theme state and controls anywhere in your app:

```tsx
import { useThemeContext } from '@/components/theme/theme-context';

function ThemeToggle() {
  const { themeId, colorMode, setThemeId, setColorMode, availableThemes } = useThemeContext();

  return (
    <div>
      <select value={themeId} onChange={(e) => setThemeId(e.target.value)}>
        {availableThemes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.label}
          </option>
        ))}
      </select>
      
      <button onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}>
        Toggle {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
```

### Available Theme IDs

Public themes (21 total):
- `theme-nitro-mint-apple`
- `theme-nitro-citrus-sherbert`
- `theme-nitro-retro-raincloud`
- `theme-nitro-hanami`
- `theme-nitro-sunrise`
- `theme-nitro-cotton-candy`
- `theme-nitro-lofi-vibes`
- `theme-nitro-desert-khaki`
- `theme-nitro-sunset`
- `theme-nitro-chroma-glow`
- `theme-nitro-forest`
- `theme-nitro-crimson`
- `theme-nitro-midnight-blurple` (default)
- `theme-nitro-mars`
- `theme-nitro-dusk`
- `theme-nitro-under-the-sea`
- `theme-nitro-retro-storm`
- `theme-nitro-neon-nights`
- `theme-nitro-strawberry-lemonade`
- `theme-nitro-aurora`
- `theme-nitro-sepia`

Secret theme (unlock by viewing all public themes):
- `theme-nitro-memory-lane`

---

## 📦 Export Formats

Visit the [Studio](https://gradient-forge.vercel.app/studio) to export themes in multiple formats:

- **CSS Theme** - Full CSS variables file
- **SCSS** - SASS variables and mixins
- **JSON Tokens** - Design tokens in JSON format
- **Tailwind** - Tailwind CSS configuration
- **W3C Tokens** - W3C design tokens format
- **Figma** - Figma-compatible JSON

---

## 🏗️ Architecture

```
gradient-forge/
├── cli/
│   └── index.mjs              # CLI entry point
├── app/
│   ├── page.tsx               # Home page
│   ├── studio/page.tsx        # Interactive theme studio
│   ├── gallery/page.tsx       # Theme gallery
│   ├── showcase/page.tsx      # Template showcase
│   └── docs/page.tsx          # Documentation
├── components/
│   └── theme/
│       ├── theme-engine.ts    # Core theme logic
│       ├── theme-context.tsx  # React context provider
│       ├── theme-panel.tsx    # Theme selector UI
│       └── theme-exporter.tsx # Export utilities
└── gradient-forge/
    ├── theme-engine.ts        # Source theme definitions
    ├── theme-context.tsx      # Source context
    └── themes.css             # Source CSS
```

---

## 🛠️ Development

Clone the repository and start development:

```bash
git clone https://github.com/karanjadon648/shadcn-gradient-forge.git
cd shadcn-gradient-forge
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ☕ Support

If Gradient Forge helps your project, consider supporting development:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-orange?style=for-the-badge&logo=buymeacoffee&logoColor=white)](https://buymeacoffee.com/karannn)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/karanjadon648">Karan Jadon</a>
</p>

<p align="center">
  <a href="https://gradient-forge.vercel.app">🌐 Live Demo</a> •
  <a href="https://www.npmjs.com/package/gradient-forge">📦 NPM Package</a> •
  <a href="https://github.com/karanjadon648/shadcn-gradient-forge">💻 GitHub</a>
</p>
