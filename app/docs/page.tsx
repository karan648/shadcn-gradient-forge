import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cliSteps = [
  "Run the CLI to scaffold the theme assets into your project.",
  "Import the generated CSS in your global stylesheet.",
  "Wrap your app with the ThemeProvider.",
  "Set the theme classes on the root element.",
];

const cliCommands = [
  { title: "Init", command: "npx shadcn-gradient@latest init" },
  { title: "Init with inject", command: "npx shadcn-gradient@latest init --inject" },
  { title: "Init with custom path", command: "npx shadcn-gradient@latest init --path ./apps/web" },
  { title: "Force overwrite", command: "npx shadcn-gradient@latest init --force" },
  { title: "Help", command: "npx shadcn-gradient@latest help" },
];

const runners = [
  { label: "npx", command: "npx shadcn-gradient@latest init --inject" },
  { label: "pnpm", command: "pnpm dlx shadcn-gradient@latest init --inject" },
  { label: "yarn", command: "yarn dlx shadcn-gradient@latest init --inject" },
  { label: "bun", command: "bunx shadcn-gradient@latest init --inject" },
];

const manualSteps = [
  "Copy the theme CSS from this repo (app/globals.css theme section).",
  "Copy theme-engine.ts and theme-context.tsx into your project.",
  "Wire the ThemeProvider in your root layout.",
  "Add theme classes to the HTML element and keep data-theme in sync.",
];

const fileTree = [
  "shadcn-gradient/theme-engine.ts",
  "shadcn-gradient/theme-context.tsx",
  "shadcn-gradient/themes.css",
];

export default function DocsPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-12 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteHeader />

        <div className="flex flex-col gap-3">
          <Badge variant="glass">Documentation</Badge>
          <h1 className="text-3xl font-semibold">Install the Shadcn Gradient System</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Use the CLI for the fastest setup or follow the manual path if you want total control.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>CLI Install</CardTitle>
              <p className="text-sm text-muted-foreground">
                Recommended. Generates the theme system directly inside your project.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground">
                Use the published CLI for the best experience. This keeps your local project clean and works from
                anywhere.
              </div>
              <pre className="rounded-2xl border border-border/40 bg-black/70 p-4 text-xs text-white/90">
                <code>npx shadcn-gradient@latest init --inject</code>
              </pre>
              <div className="rounded-2xl border border-border/40 bg-background/50 p-3 text-xs text-muted-foreground">
                Local repo usage: <span className="text-foreground">node ./cli/index.mjs init --inject</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                {cliSteps.map((step) => (
                  <div key={step} className="rounded-2xl border border-border/40 bg-background/50 p-3">
                    {step}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-border/40 bg-background/50 p-3 text-xs text-muted-foreground">
                Tip: Use --force to overwrite existing generated files if you are regenerating the theme system.
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>What the CLI Adds</CardTitle>
              <p className="text-sm text-muted-foreground">Files created inside your project root.</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {fileTree.map((item) => (
                <div key={item} className="rounded-2xl border border-border/40 bg-background/50 p-3 text-sm">
                  {item}
                </div>
              ))}
              <Button variant="outline" asChild>
                <a href="/studio">Preview Studio</a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>CLI Commands</CardTitle>
              <p className="text-sm text-muted-foreground">
                Copy the exact commands to scaffold or update your theme system.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {cliCommands.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/40 bg-background/50 p-4"
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <pre className="mt-2 overflow-x-auto text-xs text-muted-foreground">
                    <code>{item.command}</code>
                  </pre>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Options</CardTitle>
              <p className="text-sm text-muted-foreground">
                Flags you can use with the CLI to control generation.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
                <span className="font-semibold text-foreground">--inject</span> adds the theme CSS to
                app/globals.css automatically.
              </div>
              <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
                <span className="font-semibold text-foreground">--path</span> targets a custom project root.
              </div>
              <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
                <span className="font-semibold text-foreground">--force</span> overwrites existing generated
                files.
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Manual Install</CardTitle>
              <p className="text-sm text-muted-foreground">
                For teams that want full control over placement and naming.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {manualSteps.map((step) => (
                <div key={step} className="rounded-2xl border border-border/40 bg-background/50 p-3">
                  {step}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Required Root Setup</CardTitle>
              <p className="text-sm text-muted-foreground">Make sure the root element carries theme classes.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <pre className="rounded-2xl border border-border/40 bg-black/70 p-4 text-xs text-white/90">
                <code>{`<html class="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">`}</code>
              </pre>
              <pre className="rounded-2xl border border-border/40 bg-black/70 p-4 text-xs text-white/90">
                <code>{`import { ThemeProvider } from "./shadcn-gradient/theme-context";

export default function RootLayout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Tailwind Token Mapping</CardTitle>
              <p className="text-sm text-muted-foreground">
                Add these aliases in your Tailwind config to map shadcn tokens.
              </p>
            </CardHeader>
            <CardContent>
              <pre className="rounded-2xl border border-border/40 bg-black/70 p-4 text-xs text-white/90">
                <code>{`colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: "hsl(var(--primary))",
  accent: "hsl(var(--accent))",
  border: "hsl(var(--border))",
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <p className="text-sm text-muted-foreground">
                Visit the studio and compare components side by side.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="glow" asChild>
                <a href="/studio">Open Studio</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/gallery">Browse Gallery</a>
              </Button>
            </CardContent>
          </Card>
        </section>

      </section>
    </main>
  );
}
