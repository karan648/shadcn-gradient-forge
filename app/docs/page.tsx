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
  Sparkles,
  ChevronRight,
  BookOpen,
  Zap,
  Rocket
} from "lucide-react";
import { useToast } from "@/components/ui/toast";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const runners = [
  { label: "npx", command: "npx gradient-forge@latest init" },
  { label: "pnpm", command: "pnpm dlx gradient-forge@latest init" },
  { label: "yarn", command: "yarn dlx gradient-forge@latest init" },
  { label: "bun", command: "bunx gradient-forge@latest init" },
];

const cliFeatures = [
  "Auto-detects Next.js, Vite, and React projects",
  "Interactive theme selector with 21 gradient themes",
  "Automatic file generation and injection",
  "Wraps your app with ThemeProvider instantly",
  "Sets up CSS variables and theme classes",
  "Supports both TypeScript and JavaScript",
];

const cliOptions = [
  { flag: "init", desc: "Initialize Gradient Forge with interactive setup" },
];

export default function DocsPage() {
  const { showToast } = useToast();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

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
            Quick setup with our CLI. One command and your theme is ready to go.
          </p>
        </div>

        {/* Quick Install Hero */}
        <div ref={contentRef}>
          <div className="doc-card rounded-xl sm:rounded-2xl border border-border/50 bg-background/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <CardHeader className="relative px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Quick Install
                <Badge variant="outline" className="ml-1 text-[10px] bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
                  Now Available
                </Badge>
              </CardTitle>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Run one command and get an interactive setup experience.
              </p>
            </CardHeader>
            <CardContent className="relative px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {runners.map((runner) => (
                  <div 
                    key={runner.label}
                    className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2.5 sm:p-3 group relative hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-[10px] sm:text-xs font-semibold text-foreground">{runner.label}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 sm:h-7 opacity-0 group-hover:opacity-100 transition-opacity"
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
          {/* CLI Features */}
          <AnimatedSection animation="slideLeft">
            <Card className="doc-card border-border/50 bg-background/60">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  CLI Features
                  <Badge variant="outline" className="text-[10px] bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
                    Live
                  </Badge>
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  What the CLI does automatically for you.
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4">
                <div className="rounded-lg sm:rounded-xl border border-primary/20 bg-primary/5 p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-foreground font-medium mb-2">🚀 One-Command Setup:</p>
                  <ol className="text-[10px] sm:text-xs text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Auto-detects your project type (Next.js, Vite, React)</li>
                    <li>Shows interactive theme picker with 21 gradients</li>
                    <li>Generates all theme files automatically</li>
                    <li>Injects ThemeProvider into your app root</li>
                    <li>Sets up CSS and HTML theme classes</li>
                  </ol>
                </div>
                
                <StaggerContainer className="space-y-1.5 sm:space-y-2" stagger={0.05}>
                  {cliFeatures.map((feature, index) => (
                    <div 
                      key={feature}
                      className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 flex items-start gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground"
                    >
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[8px] sm:text-[10px] font-semibold text-primary">
                        {index + 1}
                      </span>
                      {feature}
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Supported Projects */}
          <AnimatedSection animation="slideRight">
            <Card className="doc-card border-border/50 bg-background/60">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  Supported Projects
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  The CLI works with these project types.
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-1.5 sm:space-y-2">
                {[
                  { name: "Next.js (App Router)", desc: "layout.tsx modification", icon: "⚡" },
                  { name: "Next.js (Pages Router)", desc: "_app.tsx + _document.tsx", icon: "📄" },
                  { name: "Vite + React", desc: "main.tsx modification", icon: "⚡" },
                  { name: "Create React App", desc: "index.tsx modification", icon: "⚛️" },
                ].map((item) => (
                  <div 
                    key={item.name}
                    className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 text-[10px] sm:text-xs hover:border-secondary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-md sm:rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="text-xs sm:text-sm">{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium block">{item.name}</span>
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground">{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="rounded-lg sm:rounded-xl border border-primary/20 bg-primary/5 p-3 sm:p-4 mt-2">
                  <p className="text-[10px] sm:text-xs text-foreground">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                    Both <strong>TypeScript</strong> and <strong>JavaScript</strong> projects are supported!
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* CLI Options & What Gets Generated */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_1.1fr]">
          <AnimatedSection animation="fadeUp">
            <Card className="doc-card border-border/50 bg-background/60">
              <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  CLI Usage
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Simple command with interactive prompts.
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="relative group mb-3">
                  <pre className="overflow-x-auto rounded-lg sm:rounded-xl border border-border/40 bg-black/70 p-2.5 sm:p-3 text-[10px] sm:text-xs text-white/90">
                    <code>npx gradient-forge init</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 sm:h-7"
                    onClick={() => handleCopy("npx gradient-forge init", "CLI Command")}
                  >
                    {copiedCommand === "CLI Command" ? (
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    )}
                  </Button>
                </div>
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
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Generated Files
                </CardTitle>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  The CLI creates these files in your project.
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <StaggerContainer className="space-y-1.5 sm:space-y-2" stagger={0.03}>
                  {[
                    { file: "components/theme/theme-engine.ts", desc: "Core theme logic & 21 theme definitions" },
                    { file: "components/theme/theme-context.tsx", desc: "React context provider with state" },
                    { file: "globals.css (or index.css)", desc: "CSS variables for all 21 themes" },
                  ].map((item) => (
                    <div 
                      key={item.file}
                      className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary mt-1.5" />
                        <div>
                          <code className="text-[10px] sm:text-xs font-mono block">{item.file}</code>
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Manual Setup - Optional */}
        <AnimatedSection animation="fadeUp">
          <Card className="doc-card border-border/50 bg-background/60">
            <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                Manual Setup (Optional)
              </CardTitle>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Prefer to set up manually? Copy files from the Studio instead.
              </p>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-2 sm:space-y-3">
              <div className="grid gap-2 sm:gap-3">
                {[
                  { step: 1, title: "Go to Studio", desc: "Visit /studio and pick your favorite theme" },
                  { step: 2, title: "Copy Files", desc: "Click 'Get Theme' to copy the CSS and React code" },
                  { step: 3, title: "Paste & Configure", desc: "Paste into your project and wrap with ThemeProvider" },
                ].map((item) => (
                  <div 
                    key={item.step}
                    className="rounded-lg sm:rounded-xl border border-border/40 bg-background/50 p-2 sm:p-3 flex items-start gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground"
                  >
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] sm:text-xs font-semibold text-accent">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-medium text-foreground">{item.title}:</span>{" "}
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <MagneticButton strength={0.1}>
                <Button variant="outline" size="sm" className="w-full mt-1 sm:mt-2 text-xs" asChild>
                  <a href="/studio">Open Studio</a>
                </Button>
              </MagneticButton>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Root Setup Reference */}
        <AnimatedSection animation="fadeUp">
          <Card className="doc-card border-border/50 bg-background/60">
            <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                Theme Class Reference
              </CardTitle>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                The CLI sets these classes automatically. Reference for manual setup.
              </p>
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
              Head over to the Studio to explore themes or run the CLI to get started instantly.
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
