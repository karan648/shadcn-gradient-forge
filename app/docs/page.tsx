"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AnimatedSection,
  StaggerContainer,
  MagneticButton 
} from "@/components/ui/gsap-animated";
import { 
  FileText, 
  Terminal, 
  Copy, 
  Check, 
  ArrowRight, 
  Package, 
  Settings, 
  Trash2, 
  Sparkles,
  ChevronRight,
  BookOpen
} from "lucide-react";
import { useToast } from "@/components/ui/toast";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const runners = [
  { label: "npx", command: "npx gradient-forge@latest init --inject" },
  { label: "pnpm", command: "pnpm dlx gradient-forge@latest init --inject" },
  { label: "yarn", command: "yarn dlx gradient-forge@latest init --inject" },
  { label: "bun", command: "bunx gradient-forge@latest init --inject" },
];

const cliOptions = [
  { flag: "--inject", desc: "Adds theme CSS to app/globals.css" },
  { flag: "--no-inject", desc: "Keeps globals.css unchanged" },
  { flag: "--path", desc: "Targets custom project root" },
  { flag: "--force", desc: "Overwrites existing files" },
  { flag: "--yes", desc: "Skips prompts, uses defaults" },
  { flag: "--tui", desc: "Arrow-key selector mode" },
];

export default function DocsPage() {
  const { showToast } = useToast();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Animate cards on scroll
    const cards = content.querySelectorAll(".doc-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleCopy = (command: string, label: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(label);
    showToast(`Copied ${label}`, "success");
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <main className="min-h-screen px-3 sm:px-4 lg:px-6 xl:px-8 pb-12 sm:pb-20 pt-8 sm:pt-12">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8">
        <SiteHeader />

        {/* Header */}
        <div className="flex flex-col gap-3">
          <Badge variant="glass" className="w-fit gap-1 text-xs sm:text-sm">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
            Documentation
          </Badge>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Install the Gradient Forge System
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground">
            Use the CLI for the fastest setup or follow the manual path if you want total control.
          </p>
        </div>

        {/* Quick Install Hero */}
        <div ref={contentRef}>
          <div className="doc-card rounded-xl sm:rounded-2xl border border-border/50 bg-background/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <CardHeader className="relative px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Quick Install
              </CardTitle>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Get started in seconds with a single command
              </p>
            </CardHeader>
            <CardContent className="relative px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {runners.map((runner) => (
                  <div 
                    key={runner.label}
                    className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2.5 sm:p-3 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-foreground">{runner.label}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 sm:h-7 px-1.5 sm:px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleCopy(runner.command, runner.label)}
                      >
                        {copiedCommand === runner.label ? (
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        )}
                      </Button>
                    </div>
                    <code className="text-[10px] sm:text-xs text-muted-foreground block truncate font-mono">
                      {runner.command}
                    </code>
                  </div>
                ))}
              </div>
            </CardContent>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* CLI Install */}
          <AnimatedSection animation="slideLeft">
            <Card className="doc-card border-border/50 bg-background/60">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  CLI Install
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Recommended. Generates the theme system directly inside your project.
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4">
                <div className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2.5 sm:p-3 text-[10px] sm:text-xs text-muted-foreground">
                  Use the published CLI for the best experience. This keeps your local project clean and works from
                  anywhere.
                </div>
                
                <div className="relative group">
                  <pre className="overflow-x-auto rounded-lg sm:rounded-xl border border-border/40 bg-black/70 p-2.5 sm:p-3 text-[10px] sm:text-xs text-white/90">
                    <code>npx gradient-forge@latest init --inject</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 sm:h-7"
                    onClick={() => handleCopy("npx gradient-forge@latest init --inject", "CLI Install")}
                  >
                    {copiedCommand === "CLI Install" ? (
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    )}
                  </Button>
                </div>

                <StaggerContainer className="space-y-1.5 sm:space-y-2" stagger={0.05}>
                  {[
                    "Run the CLI to scaffold theme assets",
                    "Import the generated CSS in your globals",
                    "Wrap your app with ThemeProvider",
                    "Set theme classes on root element",
                  ].map((step, index) => (
                    <div 
                      key={step}
                      className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 flex items-start gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground"
                    >
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[8px] sm:text-[10px] font-semibold text-primary">
                        {index + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* What CLI Adds */}
          <AnimatedSection animation="slideRight">
            <Card className="doc-card border-border/50 bg-background/60">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  What the CLI Adds
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Files created inside your project root.</p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-1.5 sm:space-y-2">
                {[
                  "gradient-forge/theme-engine.ts",
                  "gradient-forge/theme-context.tsx",
                  "gradient-forge/themes.css",
                ].map((item, index) => (
                  <div 
                    key={item}
                    className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 text-[10px] sm:text-xs flex items-center gap-2 sm:gap-3 hover:border-secondary/30 transition-colors"
                  >
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-md sm:rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <code className="font-mono truncate">{item}</code>
                  </div>
                ))}
                <MagneticButton strength={0.1}>
                  <Button variant="outline" size="sm" className="w-full mt-1 sm:mt-2 text-xs" asChild>
                    <a href="/studio">Preview Studio</a>
                  </Button>
                </MagneticButton>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* CLI Options & Export Formats */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_1.1fr]">
          <AnimatedSection animation="fadeUp">
            <Card className="doc-card border-border/50 bg-background/60">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  CLI Options
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Flags to control generation behavior.
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <StaggerContainer className="space-y-1.5 sm:space-y-2" stagger={0.05}>
                  {cliOptions.map((option) => (
                    <div 
                      key={option.flag}
                      className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 text-[10px] sm:text-xs text-muted-foreground hover:border-accent/30 transition-colors"
                    >
                      <code className="font-semibold text-foreground font-mono text-[10px] sm:text-xs">{option.flag}</code>
                      <span className="ml-1.5 sm:ml-2">{option.desc}</span>
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <Card className="doc-card border-border/50 bg-background/60">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Export Formats
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Multiple formats to fit any workflow.
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <StaggerContainer className="grid grid-cols-2 gap-1.5 sm:gap-2" stagger={0.03}>
                  {["CSS Theme", "SCSS", "JSON Tokens", "Tailwind", "W3C Tokens", "Figma"].map((format) => (
                    <div 
                      key={format}
                      className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 hover:border-secondary/30 transition-colors flex items-center gap-1.5 sm:gap-2"
                    >
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                      <span className="text-[10px] sm:text-xs">{format}</span>
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Root Setup */}
        <AnimatedSection animation="fadeUp">
          <Card className="doc-card border-border/50 bg-background/60">
            <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                Required Root Setup
              </CardTitle>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Make sure the root element carries theme classes.</p>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-2 sm:space-y-3">
              <div className="relative group">
                <pre className="overflow-x-auto rounded-lg sm:rounded-xl border border-border/40 bg-black/70 p-2.5 sm:p-3 text-[10px] sm:text-xs text-white/90">
                  <code>{`<html class="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">`}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 sm:h-7"
                  onClick={() => handleCopy(`<html class="dark theme-nitro-midnight-blurple" data-theme="theme-nitro-midnight-blurple" data-color-mode="dark">`, "HTML Root")}
                >
                  {copiedCommand === "HTML Root" ? (
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Next Steps CTA */}
        <AnimatedSection animation="fadeUp">
          <div className="rounded-2xl sm:rounded-3xl border border-border/40 bg-background/50 p-5 sm:p-8 text-center">
            <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Ready to create?</h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-4 sm:mb-6">
              Head over to the Studio to explore themes and export tokens for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <MagneticButton strength={0.15}>
                <Button variant="glow" size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm" asChild>
                  <a href="/studio">
                    Open Studio
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
                  <a href="/gallery">Browse Gallery</a>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
