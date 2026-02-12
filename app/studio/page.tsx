"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemePanel } from "@/components/theme/theme-panel";
import { StudioCodePanel } from "@/components/theme/studio-code-panel";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  AnimatedSection, 
  StaggerContainer,
  MagneticButton 
} from "@/components/ui/gsap-animated";
import { 
  Palette, 
  Layers, 
  Code2, 
  Image, 
  Download, 
  Zap, 
  Check, 
  Eye,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor
} from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { useThemeContext } from "@/components/theme/theme-context";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navItems = [
  { label: "Overview", icon: Layers },
  { label: "Tokens", icon: Code2 },
  { label: "Components", icon: Palette },
  { label: "Gallery", icon: Image },
  { label: "Export", icon: Download },
];

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [deviceView, setDeviceView] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const { showToast } = useToast();
  const { themeId, colorMode } = useThemeContext();
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    // Animate preview cards on load
    const cards = preview.querySelectorAll(".preview-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [deviceView]);

  const handleCopyTokens = () => {
    showToast("Tokens copied to clipboard!", "success");
  };

  const getDeviceClasses = () => {
    switch (deviceView) {
      case "mobile":
        return "max-w-[375px] mx-auto";
      case "tablet":
        return "max-w-[768px] mx-auto";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen px-3 sm:px-4 lg:px-6 xl:px-8 pb-12 sm:pb-20 pt-8 sm:pt-12">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
        <SiteHeader />

        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <Badge variant="glass" className="w-fit gap-1 text-xs sm:text-sm">
            <Palette className="h-3 w-3 sm:h-4 sm:w-4" />
            Studio
          </Badge>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Theme Studio
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground">
            Preview every gradient, toggle light or dark mode, and validate how shadcn components react to the
            surface tint layer.
          </p>
        </div>

        {/* Device View Toggle */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 p-1 rounded-xl sm:rounded-2xl bg-background/60 border border-border/50 w-fit mx-auto">
          {[
            { id: "mobile", icon: Smartphone, label: "Mobile" },
            { id: "tablet", icon: Tablet, label: "Tablet" },
            { id: "desktop", icon: Monitor, label: "Desktop" },
          ].map(({ id, icon: Icon, label }) => (
            <Button
              key={id}
              variant={deviceView === id ? "default" : "ghost"}
              size="sm"
              className="gap-1.5 text-xs"
              onClick={() => setDeviceView(id as typeof deviceView)}
            >
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{label}</span>
            </Button>
          ))}
        </div>

        {/* Main Content */}
        <section className={`grid gap-6 sm:gap-8 ${deviceView === "mobile" ? "lg:grid-cols-1" : "lg:grid-cols-[1.05fr_1fr]"}`}>
          <AnimatedSection>
            <ThemePanel />
          </AnimatedSection>

          <div className={`space-y-4 sm:space-y-6 ${getDeviceClasses()}`}>
            {/* Component Preview Card */}
            <AnimatedSection animation="slideRight">
              <Card className="border-border/50 bg-background/60">
                <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                        <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        Component Preview
                      </CardTitle>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">
                        Shadcn-style elements reacting to gradients in real time.
                      </p>
                    </div>
                    <Badge variant="default" className="shrink-0 gap-1 text-[10px] sm:text-xs animate-pulse">
                      <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-4 sm:space-y-6">
                  {/* Navigation Tabs */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeTab === item.label;
                      return (
                        <MagneticButton key={item.label} strength={0.1}>
                          <Button
                            variant={isActive ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setActiveTab(item.label)}
                            className={`text-[10px] sm:text-xs ${isActive ? "shadow-lg" : ""}`}
                          >
                            <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5" />
                            <span className="hidden sm:inline">{item.label}</span>
                          </Button>
                        </MagneticButton>
                      );
                    })}
                  </div>

                  {/* Preview Cards */}
                  <div ref={previewRef} className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className="preview-card">
                      <Card className="border-border/40 bg-card/70 hover:shadow-lg hover:shadow-primary/5 transition-all">
                        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                          <CardTitle className="text-xs sm:text-sm flex items-center gap-2">
                            <Palette className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            Gradient Card
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 sm:space-y-4 px-3 sm:px-4 pb-3 sm:pb-4">
                          <p className="text-[10px] sm:text-xs text-muted-foreground">
                            Cards inherit a soft tint from the active gradient theme.
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            <Badge className="text-[10px]">Primary</Badge>
                            <Badge variant="outline" className="text-[10px]">Outline</Badge>
                            <Badge variant="glass" className="text-[10px]">Glass</Badge>
                          </div>
                          <Button className="w-full text-xs" size="sm">Primary Action</Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="preview-card">
                      <Card className="border-border/40 bg-card/70 hover:shadow-lg hover:shadow-primary/5 transition-all">
                        <CardHeader className="pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
                          <CardTitle className="text-xs sm:text-sm flex items-center gap-2">
                            <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary" />
                            Sign-in Form
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 sm:space-y-3 px-3 sm:px-4 pb-3 sm:pb-4">
                          <Input placeholder="Email address" type="email" className="text-xs h-8 sm:h-10" />
                          <Input placeholder="Password" type="password" className="text-xs h-8 sm:h-10" />
                          <Button variant="secondary" className="w-full text-xs" size="sm">
                            Continue
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2">
                    <MagneticButton strength={0.1}>
                      <Button variant="outline" size="sm" onClick={handleCopyTokens} className="gap-1 text-[10px] sm:text-xs">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        Copy Tokens
                      </Button>
                    </MagneticButton>
                    <MagneticButton strength={0.1}>
                      <Button variant="ghost" size="sm" className="text-[10px] sm:text-xs">
                        Reset Preview
                      </Button>
                    </MagneticButton>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Sidebar & Code Panel */}
            <AnimatedSection animation="slideRight">
              <Card className="border-border/50 bg-background/60">
                <CardHeader className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                    Export Panel
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                  <div className="grid gap-4 lg:grid-cols-[160px_minmax(0,1fr)]">
                    {/* Sidebar Navigation */}
                    <div className="rounded-xl sm:rounded-2xl bg-sidebar/70 p-3 sm:p-4 shadow-inner">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase text-muted-foreground">
                        Navigation
                      </p>
                      <div className="mt-3 sm:mt-4 space-y-1">
                        {navItems.slice(0, 4).map((item, index) => {
                          const Icon = item.icon;
                          const isActive = index === 1;
                          return (
                            <MagneticButton key={item.label} strength={0.05}>
                              <Button
                                variant={isActive ? "default" : "ghost"}
                                size="sm"
                                className="w-full justify-start text-[10px] sm:text-xs h-8 sm:h-9"
                              >
                                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1.5 sm:mr-2" />
                                {item.label}
                              </Button>
                            </MagneticButton>
                          );
                        })}
                      </div>
                    </div>
                    <StudioCodePanel themeId={themeId} colorMode={colorMode} />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </section>
    </main>
  );
}
