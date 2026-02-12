"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navItems } from "@/components/site/site-data";
import { 
  Wand2, 
  Command, 
  Github, 
  Twitter, 
  Menu, 
  X,
  Sparkles
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/gsap-animated";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Header entrance animation
    gsap.fromTo(
      header,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      // Animate mobile menu open
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      
      // Animate menu items
      const items = mobileMenuRef.current.querySelectorAll(".mobile-nav-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="relative z-50">
      <div className="rounded-2xl sm:rounded-full border border-border/40 bg-background/50 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <MagneticButton strength={0.1}>
              <Badge variant="glass" className="gap-1.5 sm:gap-2 cursor-pointer text-xs sm:text-sm py-1 sm:py-1.5">
                <Wand2 className="h-3 w-3 sm:h-4 sm:w-4" /> 
                <span className="hidden sm:inline">Gradient Forge</span>
                <span className="sm:hidden">GF</span>
              </Badge>
            </MagneticButton>
            <span className="hidden lg:inline text-xs text-muted-foreground">
              Nitro-inspired theming studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <MagneticButton key={item.label} strength={0.05}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "text-xs sm:text-sm h-8 sm:h-9",
                      isActive && "shadow-md"
                    )}
                    asChild
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </MagneticButton>
              );
            })}
            
            <div className="h-4 w-px bg-border mx-1" />
            
            {/* Command Palette Trigger */}
            <MagneticButton strength={0.05}>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 text-muted-foreground text-xs sm:text-sm h-8 sm:h-9"
                onClick={() => {
                  window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
                }}
              >
                <Command className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span className="hidden lg:inline text-xs">Cmd K</span>
              </Button>
            </MagneticButton>
            
            {/* Social Links */}
            <MagneticButton strength={0.05}>
              <Button
                variant="ghost"
                size="sm"
                className="px-2 h-8 sm:h-9"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </Button>
            </MagneticButton>
            
            <MagneticButton strength={0.05}>
              <Button
                variant="ghost"
                size="sm"
                className="px-2 h-8 sm:h-9"
                asChild
              >
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </Button>
            </MagneticButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            <MagneticButton strength={0.1}>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="absolute top-full left-0 right-0 mt-2 mx-3 rounded-xl border border-border/40 bg-background/95 backdrop-blur-xl shadow-xl overflow-hidden md:hidden"
        >
          <nav className="flex flex-col p-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "mobile-nav-item flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {isActive && <Sparkles className="h-3 w-3" />}
                </a>
              );
            })}
            
            <div className="h-px bg-border my-2" />
            
            <button
              className="mobile-nav-item flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
              }}
            >
              <Command className="h-4 w-4" />
              Command Palette
              <span className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded">Cmd K</span>
            </button>
            
            <div className="flex items-center gap-2 px-3 py-2 mt-1">
              <Button variant="ghost" size="sm" className="flex-1 h-9" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 h-9" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
