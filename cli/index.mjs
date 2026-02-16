#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const command = args[0] ?? "help";

const readArg = (flag, fallback) => {
  const idx = args.indexOf(flag);
  if (idx === -1) return fallback;
  const next = args[idx + 1];
  if (!next || next.startsWith("--")) return fallback;
  return next;
};

const hasFlag = (flag) => args.includes(flag);

const log = (msg) => process.stdout.write(`${msg}\n`);
const logError = (msg) => process.stderr.write(`${msg}\n`);
const logSuccess = (msg) => process.stdout.write(`✅ ${msg}\n`);
const logInfo = (msg) => process.stdout.write(`ℹ️  ${msg}\n`);

const themes = [
  { id: "theme-nitro-mint-apple", label: "Mint Apple" },
  { id: "theme-nitro-citrus-sherbert", label: "Citrus Sherbert" },
  { id: "theme-nitro-retro-raincloud", label: "Retro Raincloud" },
  { id: "theme-nitro-hanami", label: "Hanami" },
  { id: "theme-nitro-sunrise", label: "Sunrise" },
  { id: "theme-nitro-cotton-candy", label: "Cotton Candy" },
  { id: "theme-nitro-lofi-vibes", label: "Lofi Vibes" },
  { id: "theme-nitro-desert-khaki", label: "Desert Khaki" },
  { id: "theme-nitro-sunset", label: "Sunset" },
  { id: "theme-nitro-chroma-glow", label: "Chroma Glow" },
  { id: "theme-nitro-forest", label: "Forest" },
  { id: "theme-nitro-crimson", label: "Crimson" },
  { id: "theme-nitro-midnight-blurple", label: "Midnight Blurple" },
  { id: "theme-nitro-mars", label: "Mars" },
  { id: "theme-nitro-dusk", label: "Dusk" },
  { id: "theme-nitro-under-the-sea", label: "Under The Sea" },
  { id: "theme-nitro-retro-storm", label: "Retro Storm" },
  { id: "theme-nitro-neon-nights", label: "Neon Nights" },
  { id: "theme-nitro-strawberry-lemonade", label: "Strawberry Lemonade" },
  { id: "theme-nitro-aurora", label: "Aurora" },
  { id: "theme-nitro-sepia", label: "Sepia" },
];

const themeTokens = {
  "theme-nitro-midnight-blurple": {
    "--background": "235 26% 11%",
    "--foreground": "235 30% 95%",
    "--primary": "241 92% 70%",
    "--primary-foreground": "235 26% 98%",
    "--secondary": "210 92% 65%",
    "--secondary-foreground": "235 26% 98%",
    "--muted": "235 20% 20%",
    "--muted-foreground": "235 20% 72%",
    "--accent": "210 92% 65%",
    "--accent-foreground": "235 26% 98%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "235 18% 25%",
    "--card": "235 22% 12%",
    "--card-foreground": "235 30% 95%",
    "--popover": "235 22% 12%",
    "--popover-foreground": "235 30% 95%",
    "--input": "235 18% 25%",
    "--ring": "241 92% 70%",
    "--app-gradient": "radial-gradient(1050px 560px at -10% -20%, hsl(246 92% 66% / 0.3), transparent 60%), radial-gradient(920px 520px at 112% 2%, hsl(201 92% 63% / 0.22), transparent 58%), linear-gradient(160deg, hsl(232 29% 12%) 0%, hsl(231 24% 12%) 50%, hsl(228 22% 10%) 100%)",
    "--app-surface-tint": "hsl(241 92% 70% / 0.1)",
  },
};

// Add more theme tokens (simplified - using default for all)
themes.forEach(t => {
  if (!themeTokens[t.id]) {
    themeTokens[t.id] = themeTokens["theme-nitro-midnight-blurple"];
  }
});

const getThemeTokens = (themeId) => themeTokens[themeId] || themeTokens["theme-nitro-midnight-blurple"];

const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });

const DEFAULT_THEME = "theme-nitro-midnight-blurple";
const DEFAULT_MODE = "dark";

// Detect project type
const detectProjectType = (projectRoot) => {
  const hasNextJs = fs.existsSync(path.join(projectRoot, "next.config.js")) || 
                   fs.existsSync(path.join(projectRoot, "next.config.mjs")) ||
                   fs.existsSync(path.join(projectRoot, "app"));
  const hasVite = fs.existsSync(path.join(projectRoot, "vite.config.js")) ||
                 fs.existsSync(path.join(projectRoot, "vite.config.ts")) ||
                 fs.existsSync(path.join(projectRoot, "vite.config.mjs"));
  const hasReact = fs.existsSync(path.join(projectRoot, "src", "main.jsx")) ||
                   fs.existsSync(path.join(projectRoot, "src", "main.tsx")) ||
                   fs.existsSync(path.join(projectRoot, "src", "index.jsx")) ||
                   fs.existsSync(path.join(projectRoot, "index.html"));

  if (hasNextJs) return "next";
  if (hasVite && hasReact) return "vite";
  if (hasReact) return "react";
  return "unknown";
};

// Prompt for selection
const promptSelect = async (title, items, defaultIndex = 0) => {
  return new Promise((resolve) => {
    if (!process.stdin.isTTY) {
      resolve(items[defaultIndex]);
      return;
    }

    let index = defaultIndex;
    let buffer = "";

    const render = () => {
      process.stdout.write("\x1b[2J\x1b[H");
      log(title);
      log("");
      items.forEach((item, i) => {
        const prefix = i === index ? ">" : " ";
        log(`${prefix} ${i + 1}. ${item.label ?? item}`);
      });
      log("");
      log("Use up/down arrows and press Enter.");
    };

    const onKey = (data) => {
      buffer += data.toString();
      if (buffer.includes("\u001b[A")) {
        index = index > 0 ? index - 1 : items.length - 1;
        buffer = "";
        render();
      } else if (buffer.includes("\u001b[B")) {
        index = index < items.length - 1 ? index + 1 : 0;
        buffer = "";
        render();
      } else if (buffer.includes("\r") || buffer.includes("\n")) {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.stdin.removeListener("data", onKey);
        process.stdout.write("\x1b[?25h");
        resolve(items[index]);
        return;
      } else if (buffer.includes("\u0003")) {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.exit(1);
      } else {
        buffer = "";
      }
    };

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", onKey);
    process.stdout.write("\x1b[?25l");
    render();
  });
};

// Generate CSS - with !important to override tailwind defaults
const generateCSS = (themeId, mode) => {
  const tokens = getThemeTokens(themeId);
  const isDark = mode === "dark";
  
  return `/* Gradient Forge Theme - ${mode} */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
}

/* Theme CSS Variables */
.${themeId},
.${themeId} body {
${Object.entries(tokens).map(([k, v]) => `  ${k}: ${v};`).join("\n")}
}

/* Force theme override with !important */
.${themeId} {
  --background: ${tokens["--background"]} !important;
  --foreground: ${tokens["--foreground"]} !important;
  --primary: ${tokens["--primary"]} !important;
  --primary-foreground: ${tokens["--primary-foreground"]} !important;
  --secondary: ${tokens["--secondary"]} !important;
  --secondary-foreground: ${tokens["--secondary-foreground"]} !important;
  --muted: ${tokens["--muted"]} !important;
  --muted-foreground: ${tokens["--muted-foreground"]} !important;
  --accent: ${tokens["--accent"]} !important;
  --accent-foreground: ${tokens["--accent-foreground"]} !important;
  --destructive: ${tokens["--destructive"]} !important;
  --destructive-foreground: ${tokens["--destructive-foreground"]} !important;
  --border: ${tokens["--border"]} !important;
  --card: ${tokens["--card"]} !important;
  --card-foreground: ${tokens["--card-foreground"]} !important;
  --popover: ${tokens["--popover"]} !important;
  --popover-foreground: ${tokens["--popover-foreground"]} !important;
  --input: ${tokens["--input"]} !important;
  --ring: ${tokens["--ring"]} !important;
}

/* Apply gradient background */
.${themeId} body {
  background: linear-gradient(160deg, hsl(${tokens["--background"]}) 0%, hsl(${tokens["--background"]}) 50%, hsl(${tokens["--background"]}) 100%);
  background-attachment: fixed;
}

/* Surface layers with glassmorphism */
.${themeId} .bg-card,
.${themeId} .bg-popover,
.${themeId} .bg-sidebar {
  background-color: hsl(${tokens["--card"]} / 0.4) !important;
  background-image: linear-gradient(${tokens["--app-surface-tint"]}, ${tokens["--app-surface-tint"]});
  backdrop-filter: blur(16px);
  border: 1px solid hsl(${tokens["--border"]} / 0.3);
}
`;
};

// Generate theme context
const generateContext = (themeId, mode) => {
  return `"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeId = string;
export type ColorMode = string;

interface ThemeContextType {
  themeId: string;
  colorMode: string;
  setThemeId: (id: string) => void;
  setColorMode: (mode: string) => void;
  themes: { id: string; label: string }[];
}

const allThemes = [
${themes.map(t => `  { id: "${t.id}", label: "${t.label}" }`).join(",\n")}
];

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeId, setThemeId] = useState("${themeId}");
  const [colorMode, setColorMode] = useState("${mode}");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
${themes.map(t => `    root.classList.remove("${t.id}");`).join("\n")}
    root.classList.add(colorMode, themeId);
    root.setAttribute("data-theme", themeId);
    root.setAttribute("data-color-mode", colorMode);
    localStorage.setItem("theme", themeId);
    localStorage.setItem("mode", colorMode);
  }, [themeId, colorMode]);

  return (
    <ThemeContext.Provider value={{ themeId, colorMode, setThemeId, setColorMode, themes: allThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export function ThemeSwitcher() {
  const { themeId, colorMode, setThemeId, setColorMode, themes } = useTheme();
  return (
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <select value={themeId} onChange={(e) => setThemeId(e.target.value)} style={{ padding: "4px" }}>
        {themes.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
      </select>
      <button onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")} style={{ padding: "4px 8px" }}>
        {colorMode === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
`;
};

// Setup for Next.js
const setupNextJs = (projectRoot, themeId, mode) => {
  const appDir = path.join(projectRoot, "app");
  const themeDir = path.join(projectRoot, "components", "theme");
  
  ensureDir(themeDir);
  
  // Create CSS
  const cssPath = path.join(appDir, "gradient-forge.css");
  fs.writeFileSync(cssPath, generateCSS(themeId, mode));
  logSuccess(`Created: app/gradient-forge.css`);
  
  // Create context
  const contextPath = path.join(themeDir, "theme-context.tsx");
  fs.writeFileSync(contextPath, generateContext(themeId, mode));
  logSuccess(`Created: components/theme/theme-context.tsx`);
  
  // Inject into globals.css - add AFTER tailwind imports so theme overrides tailwind
  const globalsPath = path.join(appDir, "globals.css");
  if (fs.existsSync(globalsPath)) {
    let content = fs.readFileSync(globalsPath, "utf8");
    if (!content.includes("gradient-forge.css")) {
      // Add at the end after all tailwind imports
      content = content + '\n@import "./gradient-forge.css";';
      fs.writeFileSync(globalsPath, content);
      logSuccess(`Injected into: app/globals.css`);
    }
  }
  
  // Update layout.tsx
  const layoutPath = path.join(appDir, "layout.tsx");
  if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, "utf8");
    
    if (!content.includes("ThemeProvider")) {
      // Use @/ import path for Next.js
      const importStmt = `import { ThemeProvider } from "@/components/theme/theme-context";`;
      if (!content.includes(importStmt)) {
        content = importStmt + "\n" + content;
      }
      
      // Wrap body - keep existing className and add ThemeProvider around children
      content = content.replace(/(<body[^>]*>)([\s\S]*?)(<\/body>)/, 
        '$1<ThemeProvider>$2</ThemeProvider>$3');
      
      // Add theme classes to html - ALWAYS use className for JSX
      // Check if html has any class/className attribute
      const htmlHasClass = /<html[^>]*class(=|Name)/.test(content);
      
      if (htmlHasClass) {
        // html already has class, update it
        content = content.replace(
          /(<html[^>]*class(=|Name)=")([^"]*)(")/,
          `$1$3 ${mode} ${themeId}$4`
        );
      } else {
        // No class on html, add className attribute
        content = content.replace(/<html/, 
          `<html className="${mode} ${themeId}"`);
      }
      
      // Add data attributes
      if (!content.includes('data-theme=')) {
        content = content.replace(/<html/, `<html data-theme="${themeId}" data-color-mode="${mode}"`);
      }
      
      fs.writeFileSync(layoutPath, content);
      logSuccess(`Updated: app/layout.tsx`);
    }
  }
  
  return { success: true };
};

// Setup for Vite + React
const setupVite = (projectRoot, themeId, mode) => {
  const srcDir = path.join(projectRoot, "src");
  const themeDir = path.join(projectRoot, "src", "components", "theme");
  const cssDir = path.join(projectRoot, "src");
  
  ensureDir(themeDir);
  
  // Create CSS
  const cssPath = path.join(cssDir, "gradient-forge.css");
  fs.writeFileSync(cssPath, generateCSS(themeId, mode));
  logSuccess(`Created: src/gradient-forge.css`);
  
  // Create context
  const contextPath = path.join(themeDir, "theme-context.tsx");
  fs.writeFileSync(contextPath, generateContext(themeId, mode));
  logSuccess(`Created: src/components/theme/theme-context.tsx`);
  
  // Inject into index.css or main.css
  const possibleCssFiles = ["src/index.css", "src/App.css", "src/main.css"];
  for (const cssFile of possibleCssFiles) {
    const cssPath2 = path.join(projectRoot, cssFile);
    if (fs.existsSync(cssPath2)) {
      const content = fs.readFileSync(cssPath2, "utf8");
      if (!content.includes("gradient-forge.css")) {
        fs.writeFileSync(cssPath2, `@import "./gradient-forge.css";\n${content}`);
        logSuccess(`Injected into: ${cssFile}`);
      }
      break;
    }
  }
  
  // Update main.tsx or main.jsx
  const mainFiles = ["src/main.tsx", "src/main.jsx", "src/index.tsx", "src/index.jsx"];
  for (const mainFile of mainFiles) {
    const mainPath = path.join(projectRoot, mainFile);
    if (fs.existsSync(mainPath)) {
      let content = fs.readFileSync(mainPath, "utf8");
      
      if (!content.includes("ThemeProvider")) {
        const importStmt = `import { ThemeProvider } from "./components/theme/theme-context";`;
        if (!content.includes(importStmt)) {
          content = importStmt + "\n" + content;
        }
        
        // Wrap app with ThemeProvider
        content = content.replace(/(<App[^>]*>)/, '<ThemeProvider>$1</ThemeProvider>');
        content = content.replace(/(React\.createElement\(App)/, 'React.createElement(ThemeProvider, null, React.createElement(App)');
        
        // Add theme classes to root div
        content = content.replace(
          /document\.getElementById\(['"]root['"]\)\.innerHTML/,
          `document.getElementById('root').innerHTML = '<div class="${mode} ${themeId}" data-theme="${themeId}" data-color-mode="${mode}">' +`
        );
        
        fs.writeFileSync(mainPath, content);
        logSuccess(`Updated: ${mainFile}`);
      }
      break;
    }
  }
  
  // Update index.html
  const indexPath = path.join(projectRoot, "index.html");
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, "utf8");
    content = content.replace(/<html[^>]*>/, `<html class="${mode} ${themeId}" data-theme="${themeId}" data-color-mode="${mode}">`);
    fs.writeFileSync(indexPath, content);
    logSuccess(`Updated: index.html`);
  }
  
  return { success: true };
};

// Setup for React (CRA)
const setupReact = (projectRoot, themeId, mode) => {
  // Similar to Vite but with CRA-specific paths
  return setupVite(projectRoot, themeId, mode);
};

const init = async () => {
  log("");
  log("🎨 Gradient Forge CLI - Instant Theme Setup");
  log("==========================================");
  log("");
  
  const projectRoot = readArg("--path", process.cwd());
  logInfo(`Project: ${projectRoot}`);
  
  // Detect project type
  const projectType = detectProjectType(projectRoot);
  logInfo(`Detected: ${projectType === "next" ? "Next.js" : projectType === "vite" ? "Vite + React" : projectType === "react" ? "React (CRA)" : "Unknown"} project`);
  log("");
  
  // Check package.json exists
  const packageJsonPath = path.join(projectRoot, "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    logError("Error: Not a valid project. No package.json found.");
    process.exit(1);
  }
  
  // Select theme
  log("Select a theme:");
  const selectedTheme = await promptSelect("Choose your theme:", themes, 12);
  log(`\n✓ ${selectedTheme.label}`);
  
  // Select mode
  log("");
  const modeOptions = [
    { id: "dark", label: "Dark Mode" },
    { id: "light", label: "Light Mode" },
  ];
  log("Select color mode:");
  const selectedMode = await promptSelect("Choose color mode:", modeOptions, 0);
  log(`\n✓ ${selectedMode.label}`);
  
  const themeId = selectedTheme.id;
  const mode = selectedMode.id;
  
  log("");
  logInfo("Setting up theme...");
  log("");
  
  // Setup based on project type
  if (projectType === "next") {
    setupNextJs(projectRoot, themeId, mode);
  } else if (projectType === "vite") {
    setupVite(projectRoot, themeId, mode);
  } else if (projectType === "react") {
    setupReact(projectRoot, themeId, mode);
  } else {
    logError("Could not detect project type. Supported: Next.js, Vite, React");
    process.exit(1);
  }
  
  log("");
  log("==========================================");
  logSuccess("🎉 Theme applied instantly!");
  log("");
  log(`Theme: ${selectedTheme.label} (${mode})`);
  log("Run: npm run dev");
  log("");
};

const usage = () => {
  log("🎨 Gradient Forge CLI");
  log("");
  log("Usage:");
  log("  gradient-forge init [--path <project>]");
  log("");
  log("Examples:");
  log("  gradient-forge init");
  log("  gradient-forge init --path my-app");
  log("");
  log("Supported: Next.js, Vite + React, React (CRA)");
};

switch (command) {
  case "init":
    init().catch(err => {
      logError(`Error: ${err.message}`);
      process.exit(1);
    });
    break;
  default:
    usage();
}
