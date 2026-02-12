"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site/site-header";
import { ThemeExporter } from "@/components/theme/theme-exporter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Palette, 
  Code2, 
  Layers, 
  GitBranch, 
  Coffee,
  Terminal,
  FileJson,
  Wand2
} from "lucide-react";
import { featureCards, roadmapItems, useCases, workflowSteps } from "@/components/site/site-data";
import { 
  AnimatedSection, 
  StaggerContainer, 
  MagneticButton,
  FloatingElement,
  TextReveal
} from "@/components/ui/gsap-animated";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero entrance animation
    const hero = heroRef.current;
    if (hero) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(
        hero.querySelectorAll(".hero-badge"),
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 }
      )
      .fromTo(
        hero.querySelectorAll(".hero-title"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.3"
      )
      .fromTo(
        hero.querySelectorAll(".hero-description"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        hero.querySelectorAll(".hero-cta"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.3"
      );
    }

    // Floating cards animation
    const floatingCards = floatingCardsRef.current;
    if (floatingCards) {
      const cards = floatingCards.querySelectorAll(".floating-card");
      
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: floatingCards,
            start: "top 80%",
          },
        }
      );

      // Add floating animation to each card
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? 8 : -8,
          duration: 2 + index * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen px-3 sm:px-4 lg:px-6 xl:px-8 pb-12 sm:pb-20 pt-8 sm:pt-12">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
        <SiteHeader />

        {/* Hero Section */}
        <div ref={heroRef} className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4 sm:space-y-5">
            <div className="hero-badge">
              <Badge variant="glass" className="gap-1 text-xs sm:text-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                Nitro Gradient Forge
              </Badge>
            </div>
            
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight">
              <span className="bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Build shadcn components that glow with cinematic gradients.
              </span>
            </h1>
            
            <p className="hero-description text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              A polished studio for custom shadcn theming. Light and dark modes,
              export-ready tokens, and surface-aware overlays designed for
              production design systems.
            </p>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <MagneticButton className="hero-cta" strength={0.2}>
                <Button variant="glow" size="sm" className="sm:size-lg gap-1.5 sm:gap-2 text-xs sm:text-sm" asChild>
                  <a href="/studio">
                    Launch Studio <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton className="hero-cta" strength={0.2}>
                <Button variant="secondary" size="sm" className="sm:size-lg text-xs sm:text-sm" asChild>
                  <a href="/library">Component Library</a>
                </Button>
              </MagneticButton>
              <MagneticButton className="hero-cta" strength={0.2}>
                <Button variant="outline" size="sm" className="sm:size-lg text-xs sm:text-sm" asChild>
                  <a href="/docs">Read Docs</a>
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Floating Cards Preview - Desktop Only */}
          <div 
            ref={floatingCardsRef}
            className="hidden lg:block relative min-h-[400px] xl:min-h-[500px] w-full"
          >
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border/40 bg-background/40 shadow-[0_0_60px_hsl(var(--primary)_/_0.12)]" />

            <div className="floating-card absolute left-0 top-4 w-[52%]">
              <Card className="border-border/40 bg-card/70 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-2 px-3 sm:px-4">
                  <CardTitle className="text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    Pricing Tier
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-3 sm:px-4 pb-3 sm:pb-4">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Launch-ready plan for teams.</p>
                  <p className="text-lg sm:text-xl font-semibold">$29</p>
                  <Button className="w-full text-xs" size="sm">Start free trial</Button>
                </CardContent>
              </Card>
            </div>

            <div className="floating-card absolute right-0 top-12 w-[48%]">
              <Card className="border-border/40 bg-card/70 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-2 px-3 sm:px-4">
                  <CardTitle className="text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                    <Layers className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                    Inline Alert
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-3 sm:px-4 pb-3 sm:pb-4">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    Gradient tokens keep alerts readable across themes.
                  </p>
                  <Badge variant="outline" className="text-[10px]">System Update</Badge>
                  <Button variant="secondary" className="w-full text-xs" size="sm">
                    Review changes
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="floating-card absolute left-4 sm:left-6 top-[180px] sm:top-[200px] w-[56%]">
              <Card className="border-border/40 bg-card/70 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-2 px-3 sm:px-4">
                  <CardTitle className="text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                    <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                    Status Panel
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-1.5 sm:gap-2 px-3 sm:px-4 pb-3 sm:pb-4">
                  {[
                    { label: "Themes", value: "23" },
                    { label: "Layers", value: "5" },
                    { label: "Exports", value: "8" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border/40 bg-background/50 p-1.5 sm:p-2">
                      <p className="text-[8px] sm:text-[10px] text-muted-foreground">{stat.label}</p>
                      <p className="text-xs sm:text-sm font-semibold">{stat.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="floating-card absolute right-2 sm:right-4 top-[280px] sm:top-[300px] w-[44%]">
              <Card className="border-border/40 bg-card/70 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-2 px-3 sm:px-4">
                  <CardTitle className="text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                    <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    Launch Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1.5 sm:space-y-2 px-3 sm:px-4 pb-3 sm:pb-4 text-[10px] sm:text-xs text-muted-foreground">
                  {[
                    { label: "Theme synced", done: true },
                    { label: "Tokens mapped", done: true },
                    { label: "Export ready", done: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-lg border border-border/40 bg-background/50 p-1.5 sm:p-2">
                      <span>{item.label}</span>
                      <Badge variant={item.done ? "glass" : "outline"} className="text-[8px] sm:text-[10px]">
                        {item.done ? "Done" : "Pending"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mobile Preview Cards */}
          <div className="grid gap-3 sm:gap-4 lg:hidden">
            <StaggerContainer className="grid gap-3 sm:gap-4" stagger={0.1}>
              <Card className="border-border/40 bg-card/70">
                <CardHeader className="pb-2 px-3 sm:px-4">
                  <CardTitle className="text-xs sm:text-sm">Pricing Tier</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 px-3 sm:px-4 pb-3 sm:pb-4">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Launch-ready plan for teams.</p>
                  <p className="text-xl sm:text-2xl font-semibold">$29</p>
                  <Button className="w-full text-xs" size="sm">Start free trial</Button>
                </CardContent>
              </Card>
              <Card className="border-border/40 bg-card/70">
                <CardHeader className="pb-2 px-3 sm:px-4">
                  <CardTitle className="text-xs sm:text-sm">Status Panel</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-2 px-3 sm:px-4 pb-3 sm:pb-4">
                  {[
                    { label: "Themes", value: "23" },
                    { label: "Layers", value: "5" },
                    { label: "Exports", value: "8" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border/40 bg-background/50 p-2">
                      <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-semibold">{stat.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </StaggerContainer>
          </div>
        </div>

        {/* Feature Cards */}
        <AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" stagger={0.08}>
            {featureCards.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="border-border/50 bg-background/60 h-full hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                  <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                    {index === 0 && <Palette className="h-4 w-4 text-primary" />}
                    {index === 1 && <Layers className="h-4 w-4 text-secondary" />}
                    {index === 2 && <Code2 className="h-4 w-4 text-accent" />}
                    {index === 3 && <Zap className="h-4 w-4 text-primary" />}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Workflow & Use Cases */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_1fr]">
          <AnimatedSection animation="slideLeft">
            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <GitBranch className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Workflow
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  A clean, repeatable flow for shipping gradients across shadcn components.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <StaggerContainer className="grid gap-2 sm:gap-3" stagger={0.08}>
                  {workflowSteps.map((step, index) => (
                    <div 
                      key={step.title}
                      className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-2.5 sm:p-4 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] sm:text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold">{step.title}</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slideRight">
            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  Use Cases
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">Where this theming system fits best.</p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <StaggerContainer className="space-y-2 sm:space-y-3" stagger={0.08}>
                  {useCases.map((item) => (
                    <div 
                      key={item}
                      className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-2.5 sm:p-3 text-xs sm:text-sm text-muted-foreground hover:border-secondary/30 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Roadmap & Jump In */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_1.1fr]">
          <AnimatedSection animation="fadeUp">
            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <GitBranch className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  Roadmap
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  What is next as we scale the theming system.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <StaggerContainer className="grid gap-2 sm:gap-3" stagger={0.08}>
                  {roadmapItems.map((item) => (
                    <div 
                      key={item.title}
                      className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-2.5 sm:p-4 hover:border-accent/30 transition-colors"
                    >
                      <p className="text-xs sm:text-sm font-semibold">{item.title}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Jump In
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Explore the full studio, gallery, and documentation.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-3 sm:space-y-4">
                <div className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-3 sm:p-4 text-xs sm:text-sm text-muted-foreground">
                  The documentation includes CLI setup, manual install steps, and examples for integrating the
                  token layer into any shadcn project.
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <MagneticButton strength={0.15}>
                    <Button variant="glow" size="sm" className="sm:size-default text-xs sm:text-sm" asChild>
                      <a href="/studio">Open Studio</a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton strength={0.15}>
                    <Button variant="secondary" size="sm" className="sm:size-default text-xs sm:text-sm" asChild>
                      <a href="/library">Browse Components</a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton strength={0.15}>
                    <Button variant="outline" size="sm" className="sm:size-default text-xs sm:text-sm" asChild>
                      <a href="/gallery">Theme Gallery</a>
                    </Button>
                  </MagneticButton>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* CLI Section */}
        <AnimatedSection animation="fadeUp">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_1fr]">
            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    CLI Export
                  </CardTitle>
                  <Badge variant="outline" className="text-[10px] sm:text-xs">Ready</Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Export themes in 8+ formats directly from the command line.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
                {[
                  { cmd: "init", desc: "Scaffolds theme files and context" },
                  { cmd: "export", desc: "Generates CSS, JSON, Tailwind, W3C tokens" },
                  { cmd: "--inject", desc: "Adds theme CSS automatically" },
                ].map((item) => (
                  <div 
                    key={item.cmd}
                    className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-2 sm:p-3 hover:border-primary/30 transition-colors"
                  >
                    <code className="text-xs sm:text-sm font-semibold text-foreground">{item.cmd}</code>
                    <span className="text-[10px] sm:text-xs text-muted-foreground ml-2">{item.desc}</span>
                  </div>
                ))}
                <pre className="overflow-x-auto rounded-xl sm:rounded-2xl border border-border/40 bg-black/70 p-2 sm:p-3 text-[10px] sm:text-xs text-white/90">
                  <code>npx gradient-forge export --theme theme-nitro-midnight-blurple --format all</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <FileJson className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  Export Formats
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Multiple formats to fit any workflow or design tool.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <StaggerContainer className="grid grid-cols-2 gap-2 sm:gap-3" stagger={0.05}>
                  {["CSS Theme", "SCSS", "JSON Tokens", "Tailwind", "W3C Tokens", "Figma"].map((format) => (
                    <div 
                      key={format}
                      className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-2 sm:p-3 hover:border-secondary/30 transition-colors flex items-center gap-2"
                    >
                      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                      <span className="text-[10px] sm:text-xs">{format}</span>
                    </div>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Theme Exporter & Live Preview */}
        <AnimatedSection animation="fadeUp">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_1fr]">
            <ThemeExporter />
            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Live Preview
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Export tokens and watch the hero preview respond instantly.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
                <div className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-3 sm:p-4 text-xs sm:text-sm text-muted-foreground">
                  Use the studio to swap palettes and see the floating cards update in real time.
                </div>
                <MagneticButton strength={0.15}>
                  <Button variant="outline" size="sm" className="sm:size-default text-xs sm:text-sm" asChild>
                    <a href="/studio">Open Studio</a>
                  </Button>
                </MagneticButton>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Support & Quick Copy */}
        <AnimatedSection animation="fadeUp">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Coffee className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Buy Me a Coffee
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Support the project and help fund new gradient packs.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-3 sm:space-y-4">
                <div className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-3 sm:p-4 text-xs sm:text-sm text-muted-foreground">
                  If this theming system helps your project, consider supporting the work. Your support keeps the
                  CLI, presets, and documentation growing.
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <MagneticButton strength={0.15}>
                    <Button variant="glow" size="sm" className="sm:size-default text-xs sm:text-sm">Buy a coffee</Button>
                  </MagneticButton>
                  <MagneticButton strength={0.15}>
                    <Button variant="outline" size="sm" className="sm:size-default text-xs sm:text-sm">Sponsor</Button>
                  </MagneticButton>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/60">
              <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  Quick Copy
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Grab the theme tokens and drop them into your next project.
                </p>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 sm:space-y-3">
                <div className="rounded-xl sm:rounded-2xl border border-border/40 bg-background/50 p-3 sm:p-4 text-[10px] sm:text-xs text-muted-foreground">
                  Use the export panel to copy CSS, Tailwind aliases, and the root theme hook.
                </div>
                <MagneticButton strength={0.15}>
                  <Button variant="outline" size="sm" className="sm:size-default text-xs sm:text-sm" asChild>
                    <a href="/docs">Read the install guide</a>
                  </Button>
                </MagneticButton>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
