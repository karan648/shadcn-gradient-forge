"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ComponentShowcase } from "@/components/site/component-showcase";
import { 
  Library, 
  Sparkles, 
  Layers, 
  Code2, 
  Zap, 
  ArrowRight,
  Check,
  Star,
  Download
} from "lucide-react";
import { 
  AnimatedSection,
  StaggerContainer,
  MagneticButton 
} from "@/components/ui/gsap-animated";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  { icon: Layers, title: "20+ Components", desc: "Pre-built, production-ready" },
  { icon: Code2, title: "TypeScript", desc: "Fully typed for safety" },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized performance" },
  { icon: Download, title: "One-Click Install", desc: "CLI or manual setup" },
];

export default function LibraryPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      hero.querySelectorAll(".hero-badge"),
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5 }
    )
    .fromTo(
      hero.querySelectorAll(".hero-title"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.3"
    )
    .fromTo(
      hero.querySelectorAll(".hero-desc"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    )
    .fromTo(
      hero.querySelectorAll(".hero-stat"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
      "-=0.3"
    )
    .fromTo(
      hero.querySelectorAll(".hero-cta"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
      "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen px-3 sm:px-4 lg:px-6 xl:px-8 pb-12 sm:pb-20 pt-8 sm:pt-12">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
        <SiteHeader />

        {/* Hero Header */}
        <div 
          ref={heroRef}
          className="rounded-2xl sm:rounded-3xl border border-border/40 bg-background/50 p-5 sm:p-6 lg:p-8 shadow-[0_0_60px_hsl(var(--primary)_/_0.1)] relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
            <div className="hero-badge">
              <Badge variant="glass" className="w-fit gap-1 text-xs sm:text-sm">
                <Library className="h-3 w-3 sm:h-4 sm:w-4" />
                Component Library
              </Badge>
            </div>
            
            <h1 className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Premium Shadcn Components
            </h1>
            
            <p className="hero-desc text-xs sm:text-sm text-muted-foreground max-w-3xl">
              High-quality component packs with live preview, full source files, and one-click copy for rapid
              integration into your own theme system.
            </p>

            {/* Stats */}
            <div className="hero-stat flex flex-wrap gap-3 sm:gap-4 mt-1 sm:mt-2">
              {[
                { icon: Layers, label: "20+ Components" },
                { icon: Code2, label: "TypeScript Ready" },
                { icon: Zap, label: "Production Grade" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground bg-background/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-border/30">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2">
              <MagneticButton className="hero-cta" strength={0.15}>
                <Button variant="glow" size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm" asChild>
                  <a href="/studio">
                    Browse Components
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton className="hero-cta" strength={0.15}>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
                  <a href="/docs">View Documentation</a>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" stagger={0.08}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="border-border/50 bg-background/60 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">{feature.title}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </StaggerContainer>
        </AnimatedSection>

        {/* Component Showcase */}
        <AnimatedSection>
          <ComponentShowcase />
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div className="rounded-2xl sm:rounded-3xl border border-border/40 bg-background/50 p-5 sm:p-8 text-center">
            <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Ready to elevate your UI?</h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-4 sm:mb-6">
              Explore the Studio to see these components in action across all 21 gradient themes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <MagneticButton strength={0.15}>
                <Button variant="glow" size="sm" className="text-xs sm:text-sm" asChild>
                  <a href="/studio">Open Studio</a>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
                  <a href="/gallery">View Gallery</a>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
