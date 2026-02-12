#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  log("shadcn-gradient CLI");
  log("");
  log("Usage:");
  log("  shadcn-gradient init --path <project-root> [--inject] [--force]");
  log("  shadcn-gradient help");
  log("");
  log("Options:");
  log("  --path   Target project root (default: current directory)");
  log("  --inject Append theme CSS to app/globals.css if it exists");
  log("  --force  Overwrite existing generated files");
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
  const marker = "/* shadcn-gradient theme start */";
  const content = fs.readFileSync(themeCssPath, "utf8");
  const wrapped = `${marker}\n${content}\n/* shadcn-gradient theme end */\n`;

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

const init = () => {
  const targetRoot = path.resolve(readArg("--path", process.cwd()));
  const force = hasFlag("--force");
  const inject = hasFlag("--inject");

  const themeDir = path.join(targetRoot, "shadcn-gradient");
  ensureDir(themeDir);

  const results = [];
  results.push(copyTemplate("theme-engine.ts", path.join(themeDir, "theme-engine.ts"), force));
  results.push(copyTemplate("theme-context.tsx", path.join(themeDir, "theme-context.tsx"), force));
  results.push(copyTemplate("themes.css", path.join(themeDir, "themes.css"), force));

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
  log("   @import \"./shadcn-gradient/themes.css\";");
  log("2. Wrap your app with ThemeProvider from shadcn-gradient/theme-context.");
  log("3. Add theme classes to your root element:");
  log("   class=\"dark theme-nitro-midnight-blurple\"");
};

switch (command) {
  case "init":
    init();
    break;
  case "help":
  case "--help":
  case "-h":
  default:
    usage();
    break;
}
