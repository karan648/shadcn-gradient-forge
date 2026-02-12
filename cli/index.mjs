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
  log("  gradient-forge help");
  log("");
  log("Options:");
  log("  --path   Target project root (default: current directory)");
  log("  --inject Append theme CSS to app/globals.css if it exists");
  log("  --no-inject Skip css injection");
  log("  --force  Overwrite existing generated files");
  log("  --yes    Skip prompts and use defaults");
  log("  --tui    Enable arrow-key selector (disables normal scroll)");
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
];

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
  log("   @import \"./gradient-forge/themes.css\";");
  log("2. Wrap your app with ThemeProvider from gradient-forge/theme-context.");
  log("3. Add theme classes to your root element:");
  log(`   class="${modeChoice} ${themeChoice.id}"`);
  log(`   data-theme="${themeChoice.id}" data-color-mode="${modeChoice}"`);
  log("");
  log("All set. Run your app and start styling.");
};

switch (command) {
  case "init":
    init().catch((error) => {
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
