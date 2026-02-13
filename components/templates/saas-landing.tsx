"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Sparkles, Zap, Shield, Globe } from "lucide-react";

interface SaaSLandingTemplateProps {
  preview?: boolean;
}

export function SaaSLandingTemplate({ preview }: SaaSLandingTemplateProps) {
  // Show compact preview version
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized performance with minimal bundle size" },
    { icon: Shield, title: "Type Safe", desc: "Full TypeScript support with strict typing" },
    { icon: Globe, title: "Production Ready", desc: "Battle-tested in production environments" },
    { icon: Sparkles, title: "Beautiful Themes", desc: "21 curated gradient themes included" },
    { icon: Check, title: "Accessible", desc: "WCAG 2.1 AA compliant components" },
    { icon: Zap, title: "Dark Mode", desc: "Automatic dark mode with system preference" },
  ];

  const plans = [
    { name: "Starter", price: "$0", desc: "Perfect for side projects", features: ["5 projects", "Basic themes", "Community support"] },
    { name: "Pro", price: "$29", desc: "For growing teams", features: ["Unlimited projects", "All themes", "Priority support", "Custom exports"], popular: true },
    { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Everything in Pro", "SLA", "Dedicated support", "Custom development"] },
  ];

  return (
    <div className="min-h-full bg-background">
      {/* Navbar */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-sm sm:text-base">SaaSify</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-xs">Features</Button>
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-xs">Pricing</Button>
            <Button variant="glow" size="sm" className="text-xs">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 text-center">
        <Badge variant="glass" className="mb-3 sm:mb-4 text-xs">Now in Beta</Badge>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Build faster with{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Gradient Forge
          </span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          Production-ready theming system with beautiful gradients and surface-aware overlays for modern web apps.
        </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center px-4">
          <Button size={preview ? "sm" : "md"} variant="glow" className="gap-1.5 text-xs sm:text-sm">
            Start Building <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
          <Button size={preview ? "sm" : "md"} variant="outline" className="text-xs sm:text-sm">
            View Documentation
          </Button>
        </div>

        {/* Trusted By */}
        <div className="mt-12 sm:mt-20 px-4">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-50">
            {["Vercel", "Linear", "Notion", "Figma", "Stripe"].map((company) => (
              <div key={company} className="text-xs sm:text-sm font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Everything you need</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Powerful features for modern applications</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="border-border/50 bg-background/60 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Simple Pricing</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Choose the plan that works for you</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {plans.map((plan, i) => (
              <Card key={i} className={cn(
                "border-border/50 relative",
                plan.popular && "border-primary/50 shadow-lg shadow-primary/10"
              )}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-sm sm:text-base mb-1">{plan.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{plan.price}</div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{plan.desc}</p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs sm:text-sm">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "glow" : "outline"} 
                    className="w-full text-xs sm:text-sm"
                    size="sm"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to get started?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
            Join thousands of developers building beautiful applications
          </p>
          <Button size={preview ? "md" : "lg"} variant="glow" className="gap-2 text-xs sm:text-sm">
            Start Building Now <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
