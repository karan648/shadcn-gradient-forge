#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDir = path.join(__dirname, "templates");

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

const log = (message) => process.stdout.write(`${message}\n`);
const logError = (message) => process.stderr.write(`${message}\n`);

const usage = () => {
  log("gradient-forge CLI");
  log("");
  log("Usage:");
  log("  gradient-forge init --path <project-root> [--inject|--no-inject] [--force] [--yes] [--tui]");
  log("  gradient-forge export --theme <theme-id> --format <format> [--output <path>]");
  log("  gradient-forge help");
  log("");
  log("Commands:");
  log("  init     Initialize gradient-forge in a project");
  log("  export   Export theme tokens in various formats");
  log("  help     Show this help message");
  log("");
  log("Init Options:");
  log("  --path   Target project root (default: current directory)");
  log("  --inject Append theme CSS to app/globals.css if it exists");
  log("  --no-inject Skip css injection");
  log("  --force  Overwrite existing generated files");
  log("  --yes    Skip prompts and use defaults");
  log("  --tui    Enable arrow-key selector (disables normal scroll)");
  log("");
  log("Export Options:");
  log("  --theme  Theme ID to export (default: theme-nitro-midnight-blurple)");
  log("  --format Export format: css, scss, json, tailwind, w3c-tokens, figma-tokens, css-variables, html-root, all");
  log("  --output Output directory (default: current directory)");
  log("  --mode   Color mode: dark, light (default: dark)");
};

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const copyTemplate = (name, dest, force) => {
  const src = path.join(templateDir, name);
  if (!fs.existsSync(src)) {
    throw new Error(`Missing template: ${name}`);
  }
  if (fs.existsSync(dest) && !force) {
    return { skipped: true, dest };
  }
  fs.copyFileSync(src, dest);
  return { skipped: false, dest };
};

const appendThemeCss = (globalsPath, force) => {
  const themeCssPath = path.join(templateDir, "themes.css");
  const marker = "/* gradient-forge theme start */";
  const content = fs.readFileSync(themeCssPath, "utf8");
  const wrapped = `${marker}\n${content}\n/* gradient-forge theme end */\n`;

  if (!fs.existsSync(globalsPath)) {
    return { appended: false, reason: "missing" };
  }

  const existing = fs.readFileSync(globalsPath, "utf8");
  if (existing.includes(marker) && !force) {
    return { appended: false, reason: "already" };
  }

  fs.writeFileSync(globalsPath, `${existing}\n${wrapped}`);
  return { appended: true };
};

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
  { id: "theme-nitro-memory-lane", label: "Memory Lane" },
];

const themeTokens = {
  "theme-nitro-mint-apple": {
    "--background": "160 45% 18%",
    "--foreground": "150 40% 95%",
    "--card": "160 40% 20%",
    "--card-foreground": "150 40% 95%",
    "--popover": "160 40% 20%",
    "--popover-foreground": "150 40% 95%",
    "--primary": "145 50% 55%",
    "--primary-foreground": "160 40% 10%",
    "--secondary": "100 45% 68%",
    "--secondary-foreground": "160 40% 10%",
    "--muted": "160 35% 25%",
    "--muted-foreground": "150 30% 70%",
    "--accent": "100 45% 68%",
    "--accent-foreground": "160 40% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "160 30% 30%",
    "--input": "160 30% 30%",
    "--ring": "145 50% 55%",
    "--chart-1": "145 50% 55%",
    "--chart-2": "100 45% 68%",
    "--chart-3": "75 60% 80%",
    "--chart-4": "120 50% 60%",
    "--chart-5": "160 40% 40%",
    "--sidebar-background": "160 45% 16%",
    "--sidebar-foreground": "150 40% 95%",
    "--sidebar-primary": "145 50% 55%",
    "--sidebar-primary-foreground": "160 40% 10%",
    "--sidebar-accent": "160 35% 25%",
    "--sidebar-accent-foreground": "150 40% 95%",
    "--sidebar-border": "160 30% 30%",
    "--sidebar-ring": "145 50% 55%",
    "--app-surface-tint": "hsl(145 50% 55% / 0.1)",
  },
  "theme-nitro-citrus-sherbert": {
    "--background": "25 70% 15%",
    "--foreground": "35 60% 95%",
    "--card": "25 65% 18%",
    "--card-foreground": "35 60% 95%",
    "--popover": "25 65% 18%",
    "--popover-foreground": "35 60% 95%",
    "--primary": "25 80% 55%",
    "--primary-foreground": "25 70% 10%",
    "--secondary": "45 85% 65%",
    "--secondary-foreground": "25 70% 10%",
    "--muted": "25 50% 25%",
    "--muted-foreground": "35 40% 70%",
    "--accent": "55 90% 75%",
    "--accent-foreground": "25 70% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "25 45% 30%",
    "--input": "25 45% 30%",
    "--ring": "25 80% 55%",
    "--chart-1": "25 80% 55%",
    "--chart-2": "45 85% 65%",
    "--chart-3": "55 90% 75%",
    "--chart-4": "15 70% 50%",
    "--chart-5": "35 75% 60%",
    "--sidebar-background": "25 70% 13%",
    "--sidebar-foreground": "35 60% 95%",
    "--sidebar-primary": "25 80% 55%",
    "--sidebar-primary-foreground": "25 70% 10%",
    "--sidebar-accent": "25 50% 25%",
    "--sidebar-accent-foreground": "35 60% 95%",
    "--sidebar-border": "25 45% 30%",
    "--sidebar-ring": "25 80% 55%",
    "--app-surface-tint": "hsl(25 80% 55% / 0.1)",
  },
  "theme-nitro-midnight-blurple": {
    "--background": "235 26% 11%",
    "--foreground": "235 30% 95%",
    "--card": "235 22% 12%",
    "--card-foreground": "235 30% 95%",
    "--popover": "235 22% 12%",
    "--popover-foreground": "235 30% 95%",
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
    "--input": "235 18% 25%",
    "--ring": "241 92% 70%",
    "--chart-1": "241 92% 70%",
    "--chart-2": "210 92% 65%",
    "--chart-3": "251 92% 62%",
    "--chart-4": "220 80% 55%",
    "--chart-5": "260 70% 45%",
    "--sidebar-background": "235 26% 9%",
    "--sidebar-foreground": "235 30% 95%",
    "--sidebar-primary": "241 92% 70%",
    "--sidebar-primary-foreground": "235 26% 98%",
    "--sidebar-accent": "235 20% 20%",
    "--sidebar-accent-foreground": "235 30% 95%",
    "--sidebar-border": "235 18% 25%",
    "--sidebar-ring": "241 92% 70%",
    "--app-surface-tint": "hsl(241 92% 70% / 0.1)",
  },
};

// Default tokens for themes without specific definitions
const defaultTokens = themeTokens["theme-nitro-midnight-blurple"];

const getThemeTokens = (themeId) => {
  return themeTokens[themeId] || defaultTokens;
};

const generateAppGradient = (themeId) => {
  const tokens = getThemeTokens(themeId);
  const primaryHsl = tokens["--primary"].split(" ").join(", ");
  const accentHsl = tokens["--accent"].split(" ").join(", ");
  return `radial-gradient(1050px 560px at -10% -20%, hsl(${primaryHsl} / 0.3), transparent 60%), radial-gradient(920px 520px at 112% 2%, hsl(${accentHsl} / 0.22), transparent 58%), linear-gradient(160deg, hsl(${tokens["--background"]}) 0%, hsl(${tokens["--background"]}) 50%, hsl(${tokens["--background"]}) 100%)`;
};

const DEFAULT_THEME = "theme-nitro-midnight-blurple";
const DEFAULT_MODE = "dark";

const promptSelectSimple = async (title, items, defaultIndex = 0) => {
  const list = items.map((item, i) => {
    const label = item.label ?? item;
    const mark = i === defaultIndex ? "*" : " ";
    return `${mark} [${i + 1}] ${label}`;
  });

  log(title);
  log("");
  list.forEach((line) => log(line));
  log("");
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise((resolve) => {
    rl.question(`Choose 1-${items.length} (default ${defaultIndex + 1}): `, resolve);
  });
  rl.close();

  const parsed = Number.parseInt(String(answer).trim(), 10);
  if (Number.isNaN(parsed) || parsed < 1 || parsed > items.length) {
    return items[defaultIndex];
  }
  return items[parsed - 1];
};

const promptSelect = async (title, items, defaultIndex = 0) => {
  return new Promise((resolve) => {
    if (!process.stdin.isTTY) {
      resolve(items[defaultIndex]);
      return;
    }

    let index = defaultIndex;
    let isFirstRender = true;

    const render = () => {
      if (isFirstRender) {
        process.stdout.write("\x1b[s");
        isFirstRender = false;
      } else {
        process.stdout.write("\x1b[u");
        process.stdout.write("\x1b[0J");
      }
      log(title);
      log("");
      items.forEach((item, i) => {
        const prefix = i === index ? "> " : "  ";
        log(`${prefix}${item.label ?? item}`);
      });
      log("");
      log("Use up/down arrows and press Enter.");
    };

    const onKey = (data) => {
      const key = data.toString();
      if (key === "\u0003") {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.exit(1);
      }
      if (key === "\r") {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.stdin.removeListener("data", onKey);
        process.stdout.write("\x1b[?25h");
        resolve(items[index]);
        return;
      }
      if (key === "\u001b[A") {
        index = (index - 1 + items.length) % items.length;
        render();
      }
      if (key === "\u001b[B") {
        index = (index + 1) % items.length;
        render();
      }
    };

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", onKey);
    process.stdout.write("\x1b[?25l");
    render();
  });
};

const promptYesNo = async (title, defaultYes = true) => {
  const items = defaultYes ? ["Yes", "No"] : ["No", "Yes"];
  const choice = await promptSelectSimple(title, items, 0);
  return choice === "Yes";
};

const init = async () => {
  const targetRoot = path.resolve(readArg("--path", process.cwd()));
  const force = hasFlag("--force");
  const yes = hasFlag("--yes");
  const tui = hasFlag("--tui");
  const explicitInject = hasFlag("--inject");
  const noInject = hasFlag("--no-inject");

  log("");
  log("Gradient Forge");
  log("Crafting the theme engine for your shadcn project...");
  log("");

  const select = tui ? promptSelect : promptSelectSimple;

  const themeChoice = yes
    ? themes.find((theme) => theme.id === DEFAULT_THEME) ?? themes[0]
    : await select("Pick a default theme", themes, themes.findIndex((t) => t.id === DEFAULT_THEME));
  const modeChoice = yes
    ? DEFAULT_MODE
    : await select("Pick a default color mode", ["dark", "light"], DEFAULT_MODE === "dark" ? 0 : 1);

  let inject = explicitInject;
  if (noInject) {
    inject = false;
  } else if (!explicitInject) {
    inject = yes ? true : await promptYesNo("Inject theme CSS into app/globals.css?", true);
  }

  const themeDir = path.join(targetRoot, "gradient-forge");
  ensureDir(themeDir);

  const results = [];
  results.push(copyTemplate("theme-engine.ts", path.join(themeDir, "theme-engine.ts"), force));
  results.push(copyTemplate("theme-context.tsx", path.join(themeDir, "theme-context.tsx"), force));
  results.push(copyTemplate("themes.css", path.join(themeDir, "themes.css"), force));

  log("");
  log("Created theme assets:");
  results.forEach((item) => {
    const status = item.skipped ? "skipped" : "written";
    log(`- ${status}: ${path.relative(targetRoot, item.dest)}`);
  });

  if (inject) {
    const globalsPath = path.join(targetRoot, "app", "globals.css");
    const injected = appendThemeCss(globalsPath, force);
    if (injected.appended) {
      log(`- injected theme css into ${path.relative(targetRoot, globalsPath)}`);
    } else if (injected.reason === "already") {
      log("- theme css already injected, use --force to re-inject");
    } else {
      log("- app/globals.css not found, skipped injection");
    }
  }

  log("");
  log("Next steps:");
  log("1. Import the CSS file in your global stylesheet:");
  log('   @import "./gradient-forge/themes.css";');
  log("2. Wrap your app with ThemeProvider from gradient-forge/theme-context.");
  log("3. Add theme classes to your root element:");
  log(`   class="${modeChoice} ${themeChoice.id}"`);
  log(`   data-theme="${themeChoice.id}" data-color-mode="${modeChoice}"`);
  log("");
  log("All set. Run your app and start styling.");
};

// Export format generators
const exportGenerators = {
  css: (themeId, mode) => {
    const tokens = getThemeTokens(themeId);
    const theme = themes.find((t) => t.id === themeId);
    const cssVars = Object.entries(tokens)
      .filter(([key]) => key !== "--app-surface-tint")
      .map(([key, value]) => `  ${key}: ${value};`)
      .join("\n");

    return {
      filename: `${themeId}-theme.css`,
      content: `/* Gradient Forge Theme: ${theme?.label ?? themeId} */\n/* Color Mode: ${mode} */\n\n.${themeId} {\n${cssVars}\n  --app-gradient: ${generateAppGradient(themeId)};\n  --app-surface-tint: ${tokens["--app-surface-tint"]};\n}\n\n/* Surface Layer Styles */\n.bg-card,\n.bg-popover,\n.bg-sidebar {\n  background-color: hsl(var(--background) / 0.34);\n  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));\n  backdrop-filter: blur(16px);\n}`,
    };
  },

  scss: (themeId, mode) => {
    const tokens = getThemeTokens(themeId);
    const theme = themes.find((t) => t.id === themeId);
    const scssVars = Object.entries(tokens)
      .filter(([key]) => key !== "--app-surface-tint")
      .map(([key, value]) => `$${key.replace("--", "")}: ${value};`)
      .join("\n");

    return {
      filename: `${themeId}-theme.scss`,
      content: `// Gradient Forge Theme: ${theme?.label ?? themeId}\n// Color Mode: ${mode}\n\n${scssVars}\n$app-gradient: ${generateAppGradient(themeId)};\n$app-surface-tint: ${tokens["--app-surface-tint"]};\n\n// SCSS Mixins\n@mixin surface-layer {\n  background-color: hsl($background / 0.34);\n  background-image: linear-gradient($app-surface-tint, $app-surface-tint);\n  backdrop-filter: blur(16px);\n}`,
    };
  },

  json: (themeId, mode) => {
    const tokens = getThemeTokens(themeId);
    const theme = themes.find((t) => t.id === themeId);
    const colorTokens = {};
    
    Object.entries(tokens).forEach(([key, value]) => {
      const tokenName = key.replace("--", "");
      if (key === "--app-surface-tint") {
        colorTokens[tokenName] = value;
      } else {
        colorTokens[tokenName] = `hsl(${value})`;
      }
    });

    return {
      filename: `${themeId}-tokens.json`,
      content: JSON.stringify({
        name: theme?.label ?? themeId,
        id: themeId,
        colorMode: mode,
        version: "1.0.0",
        generatedAt: new Date().toISOString(),
        colors: colorTokens,
        gradients: {
          app: generateAppGradient(themeId),
        },
      }, null, 2),
    };
  },

  tailwind: (themeId, mode) => {
    const tokens = getThemeTokens(themeId);
    const theme = themes.find((t) => t.id === themeId);
    const colorEntries = Object.entries(tokens)
      .filter(([key]) => key !== "--app-surface-tint")
      .map(([key, value]) => `      ${key.replace("--", "")}: "hsl(var(${key}))"`)
      .join(",\n");

    return {
      filename: `${themeId}-tailwind.ts`,
      content: `// Gradient Forge Theme: ${theme?.label ?? themeId}\n// Color Mode: ${mode}\n\nimport type { Config } from "tailwindcss";\n\nconst config: Config = {\n  theme: {\n    extend: {\n      colors: {\n${colorEntries}\n      },\n      backgroundImage: {\n        "app-gradient": "var(--app-gradient)",\n      },\n    },\n  },\n};\n\nexport default config;`,
    };
  },

  "w3c-tokens": (themeId, mode) => {
    const tokens = getThemeTokens(themeId);
    const theme = themes.find((t) => t.id === themeId);
    const colorTokens = {};
    
    Object.entries(tokens).forEach(([key, value]) => {
      const tokenName = key.replace("--", "").replace(/-/g, ".");
      colorTokens[tokenName] = {
        $type: "color",
        $value: key === "--app-surface-tint" ? value : `hsl(${value})`,
      };
    });

    return {
      filename: `${themeId}-w3c-tokens.json`,
      content: JSON.stringify({
        $schema: "https://design-tokens.github.io/schema/format.json",
        name: theme?.label ?? themeId,
        id: themeId,
        colorMode: mode,
        version: "1.0.0",
        generatedAt: new Date().toISOString(),
        colors: colorTokens,
        gradients: {
          app: {
            $type: "gradient",
            $value: generateAppGradient(themeId),
          },
        },
      }, null, 2),
    };
  },

  "figma-tokens": (themeId, mode) => {
    const tokens = getThemeTokens(themeId);
    const theme = themes.find((t) => t.id === themeId);
    const colorTokens = {};
    
    Object.entries(tokens).forEach(([key, value]) => {
      const tokenName = key.replace("--", "");
      colorTokens[tokenName] = {
        value: key === "--app-surface-tint" ? value : `hsl(${value})`,
        type: "color",
      };
    });

    return {
      filename: `${themeId}-figma-tokens.json`,
      content: JSON.stringify({
        GradientForge: {
          [theme?.label ?? themeId]: {
            colors: colorTokens,
          },
        },
      }, null, 2),
    };
  },

  "css-variables": (themeId, mode) => {
    const tokens = getThemeTokens(themeId);
    const theme = themes.find((t) => t.id === themeId);
    const cssVars = Object.entries(tokens)
      .filter(([key]) => key !== "--app-surface-tint")
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n");

    return {
      filename: `${themeId}-variables.css`,
      content: `/* Gradient Forge Theme: ${theme?.label ?? themeId} */\n/* Color Mode: ${mode} */\n/* Paste these into your :root or theme class */\n\n${cssVars}\n--app-gradient: ${generateAppGradient(themeId)};\n--app-surface-tint: ${tokens["--app-surface-tint"]};`,
    };
  },

  "html-root": (themeId, mode) => {
    const theme = themes.find((t) => t.id === themeId);
    return {
      filename: `${themeId}-html-root.html`,
      content: `<!-- Gradient Forge Theme: ${theme?.label ?? themeId} -->\n<!-- Add these attributes to your <html> element -->\n\n<html \n  lang="en"\n  class="${mode} ${themeId}"\n  data-theme="${themeId}"\n  data-color-mode="${mode}"\n  suppressHydrationWarning\n>\n  <!-- Your app content -->\n</html>`,
    };
  },
};

const generateAllThemesCSS = () => {
  const allThemesContent = themes.map((theme) => {
    const tokens = getThemeTokens(theme.id);
    const cssVars = Object.entries(tokens)
      .filter(([key]) => key !== "--app-surface-tint")
      .map(([key, value]) => `  ${key}: ${value};`)
      .join("\n");
    
    return `/* ${theme.label} */\n.${theme.id} {\n${cssVars}\n  --app-surface-tint: ${tokens["--app-surface-tint"]};\n}`;
  }).join("\n\n");

  return {
    filename: "gradient-forge-all-themes.css",
    content: `/* Gradient Forge - All Themes CSS */\n/* Generated on ${new Date().toISOString()} */\n\n${allThemesContent}\n\n/* Surface Layer Styles */\n.bg-card,\n.bg-popover,\n.bg-sidebar {\n  background-color: hsl(var(--background) / 0.34);\n  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));\n  backdrop-filter: blur(16px);\n}`,
  };
};

const exportCommand = async () => {
  const themeId = readArg("--theme", DEFAULT_THEME);
  const format = readArg("--format", "css");
  const outputDir = path.resolve(readArg("--output", process.cwd()));
  const mode = readArg("--mode", "dark");

  log("");
  log("Gradient Forge Export");
  log("Exporting theme tokens...");
  log("");

  // Validate theme
  const theme = themes.find((t) => t.id === themeId);
  if (!theme) {
    logError(`Error: Unknown theme "${themeId}"`);
    log("Available themes:");
    themes.forEach((t) => log(`  - ${t.id} (${t.label})`));
    process.exit(1);
  }

  // Validate format
  const validFormats = Object.keys(exportGenerators);
  if (format !== "all" && !validFormats.includes(format)) {
    logError(`Error: Unknown format "${format}"`);
    log(`Valid formats: ${validFormats.join(", ")}, all`);
    process.exit(1);
  }

  ensureDir(outputDir);

  if (format === "all") {
    // Export all formats
    log(`Exporting all formats for ${theme.label}...`);
    for (const [fmt, generator] of Object.entries(exportGenerators)) {
      const result = generator(themeId, mode);
      const outputPath = path.join(outputDir, result.filename);
      fs.writeFileSync(outputPath, result.content);
      log(`  Created: ${result.filename}`);
    }
    
    // Also export all themes CSS
    const allThemesResult = generateAllThemesCSS();
    const allThemesPath = path.join(outputDir, allThemesResult.filename);
    fs.writeFileSync(allThemesPath, allThemesResult.content);
    log(`  Created: ${allThemesResult.filename}`);
  } else {
    // Export single format
    const generator = exportGenerators[format];
    const result = generator(themeId, mode);
    const outputPath = path.join(outputDir, result.filename);
    fs.writeFileSync(outputPath, result.content);
    log(`Created: ${result.filename}`);
    log(`Location: ${outputPath}`);
  }

  log("");
  log("Export complete!");
};

switch (command) {
  case "init":
    init().catch((error) => {
      logError(`Error: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    });
    break;
  case "export":
    exportCommand().catch((error) => {
      logError(`Error: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    });
    break;
  case "help":
  case "--help":
  case "-h":
  default:
    usage();
    break;
}
