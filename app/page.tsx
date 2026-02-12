import { SiteHeader } from "@/components/site/site-header";
import { ThemeExporter } from "@/components/theme/theme-exporter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { featureCards, roadmapItems, useCases, workflowSteps } from "@/components/site/site-data";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-12 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteHeader />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <Badge variant="glass">Nitro Gradient Forge</Badge>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Build shadcn components that glow with cinematic gradients.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground">
              A polished studio for custom shadcn theming. Light and dark modes,
              export-ready tokens, and surface-aware overlays designed for
              production design systems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="glow" size="lg" asChild>
                <a href="/studio">
                  Launch Studio <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="/library">Component Library</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/docs">Read Docs</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 lg:hidden">
            <Card className="border-border/40 bg-card/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Pricing Tier</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-xs text-muted-foreground">Launch-ready plan for teams.</p>
                <p className="text-2xl font-semibold">$29</p>
                <Button className="w-full">Start free trial</Button>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-card/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Inline Alert</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Gradient tokens keep alerts readable across themes.
                </p>
                <Badge variant="outline">System Update</Badge>
                <Button variant="secondary" className="w-full">
                  Review changes
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="relative hidden min-h-[580px] w-full overflow-hidden lg:block">
            <div className="absolute inset-0 rounded-3xl border border-border/40 bg-background/40 shadow-[0_0_80px_hsl(var(--primary)_/_0.15)]" />

            <div className="pointer-events-none absolute left-0 top-6 w-[52%] animate-float-slow">
              <Card className="border-border/40 bg-card/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Pricing Tier</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-xs text-muted-foreground">Launch-ready plan for teams.</p>
                  <p className="text-2xl font-semibold">$29</p>
                  <Button className="w-full">Start free trial</Button>
                </CardContent>
              </Card>
            </div>

            <div className="pointer-events-none absolute right-0 top-20 w-[48%] animate-float">
              <Card className="border-border/40 bg-card/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Inline Alert</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-xs text-muted-foreground">
                    Gradient tokens keep alerts readable across themes.
                  </p>
                  <Badge variant="outline">System Update</Badge>
                  <Button variant="secondary" className="w-full">
                    Review changes
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pointer-events-none absolute left-6 top-[260px] w-[56%] animate-float">
              <Card className="border-border/40 bg-card/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Status Panel</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-2">
                  <div className="rounded-2xl border border-border/40 bg-background/50 p-2">
                    <p className="text-[10px] text-muted-foreground">Themes</p>
                    <p className="text-sm font-semibold">23</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background/50 p-2">
                    <p className="text-[10px] text-muted-foreground">Layers</p>
                    <p className="text-sm font-semibold">5</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background/50 p-2">
                    <p className="text-[10px] text-muted-foreground">Exports</p>
                    <p className="text-sm font-semibold">4</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pointer-events-none absolute right-2 top-[350px] w-[44%] animate-float-slow">
              <Card className="border-border/40 bg-card/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Launch Checklist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-background/50 p-2">
                    <span>Theme synced</span>
                    <Badge variant="glass">Done</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-background/50 p-2">
                    <span>Tokens mapped</span>
                    <Badge variant="glass">Done</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-background/50 p-2">
                    <span>Export ready</span>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <section className="grid gap-4 lg:grid-cols-4">
          {featureCards.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-background/60">
              <CardHeader>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Workflow</CardTitle>
              <p className="text-sm text-muted-foreground">
                A clean, repeatable flow for shipping gradients across shadcn components.
              </p>
            </CardHeader>
            <CardContent className="grid gap-3">
              {workflowSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border/40 bg-background/50 p-4"
                >
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Use Cases</CardTitle>
              <p className="text-sm text-muted-foreground">Where this theming system fits best.</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {useCases.map((item) => (
                <div key={item} className="rounded-2xl border border-border/40 bg-background/50 p-3">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Roadmap</CardTitle>
              <p className="text-sm text-muted-foreground">
                What is next as we scale the theming system.
              </p>
            </CardHeader>
            <CardContent className="grid gap-3">
              {roadmapItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/40 bg-background/50 p-4"
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Jump In</CardTitle>
              <p className="text-sm text-muted-foreground">
                Explore the full studio, gallery, and documentation.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground">
                The documentation includes CLI setup, manual install steps, and examples for integrating the
                token layer into any shadcn project.
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="glow" asChild>
                  <a href="/studio">Open Studio</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/library">Browse Components</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/gallery">Theme Gallery</a>
                </Button>
                <Button variant="ghost" asChild>
                  <a href="/docs">Read Docs</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <ThemeExporter />
          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <p className="text-sm text-muted-foreground">
                Export tokens and watch the hero preview respond instantly.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
                Use the studio to swap palettes and see the floating cards update in real time.
              </div>
              <Button variant="outline" asChild>
                <a href="/studio">Open Studio</a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Buy Me a Coffee</CardTitle>
              <p className="text-sm text-muted-foreground">
                Support the project and help fund new gradient packs.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground">
                If this theming system helps your project, consider supporting the work. Your support keeps the
                CLI, presets, and documentation growing.
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="glow">Buy a coffee</Button>
                <Button variant="outline">Sponsor the project</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/60">
            <CardHeader>
              <CardTitle>Quick Copy</CardTitle>
              <p className="text-sm text-muted-foreground">
                Grab the theme tokens and drop them into your next project in minutes.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-2xl border border-border/40 bg-background/50 p-4 text-xs text-muted-foreground">
                Use the export panel to copy CSS, Tailwind aliases, and the root theme hook.
              </div>
              <Button variant="outline" asChild>
                <a href="/docs">Read the install guide</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
