"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutTemplate, 
  Monitor, 
  Smartphone, 
  Tablet,
  Code2,
  Copy,
  Check,
  Download,
  Eye,
  X,
  ChevronRight,
  Palette,
  Sparkles,
  Zap,
  RefreshCw,
  Maximize2
} from "lucide-react";
import { useThemeContext } from "@/components/theme/theme-context";
import { NITRO_ALL_THEMES, type ThemeId } from "@/components/theme/theme-engine";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/gsap-animated";

// Template imports
import { SaaSLandingTemplate } from "@/components/templates/saas-landing";
import { DashboardTemplate } from "@/components/templates/dashboard";
import { MailTemplate } from "@/components/templates/mail";
import { EcommerceTemplate } from "@/components/templates/ecommerce";
import { BlogTemplate } from "@/components/templates/blog";
import { ComponentsTemplate } from "@/components/templates/components-showcase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const templates = [
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description: "Modern landing page with hero section, features, pricing, and CTA. Perfect for startups.",
    icon: LayoutTemplate,
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    preview: "saas",
    tags: ["Marketing", "Startup", "B2B"],
    popular: true,
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description: "Full-featured dashboard with sidebar navigation, charts, stats cards, and data tables.",
    icon: Monitor,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    preview: "dashboard",
    tags: ["Admin", "Analytics", "SaaS"],
    popular: true,
  },
  {
    id: "mail",
    title: "Mail Application",
    description: "Email client interface with inbox, compose, sidebar, and message threading.",
    icon: LayoutTemplate,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    preview: "mail",
    tags: ["Productivity", "Communication"],
    popular: false,
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    description: "Product listings, shopping cart, checkout flow, and order management.",
    icon: LayoutTemplate,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    preview: "ecommerce",
    tags: ["Shop", "Retail", "B2C"],
    popular: true,
  },
  {
    id: "blog",
    title: "Blog Platform",
    description: "Content-focused blog with article cards, reading view, and author profiles.",
    icon: LayoutTemplate,
    color: "from-violet-500/20 to-indigo-500/20",
    borderColor: "border-violet-500/30",
    preview: "blog",
    tags: ["Content", "Publishing"],
    popular: false,
  },
  {
    id: "components",
    title: "Component Library",
    description: "Complete component showcase with all shadcn/ui elements styled with your theme.",
    icon: LayoutTemplate,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    preview: "components",
    tags: ["UI Kit", "Design System"],
    popular: false,
  },
];

const templateComponents: Record<string, React.FC<{ preview?: boolean }>> = {
  "saas-landing": SaaSLandingTemplate,
  "dashboard": DashboardTemplate,
  "mail": MailTemplate,
  "ecommerce": EcommerceTemplate,
  "blog": BlogTemplate,
  "components": ComponentsTemplate,
};

export default function ShowcasePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("saas-landing");
  const [previewMode, setPreviewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("preview");
  const [copied, setCopied] = useState(false);
  const { themeId, setThemeId, colorMode } = useThemeContext();
  const { showToast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate);
  const TemplateComponent = templateComponents[selectedTemplate];

  useEffect(() => {
    // Animate template cards
    const cards = document.querySelectorAll(".template-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".template-grid",
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCopyCode = () => {
    const code = generateTemplateCode(selectedTemplate);
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast("Template code copied!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => {
    showToast("Template exported!", "success");
  };

  const handleThemeChange = (newThemeId: ThemeId) => {
    setThemeId(newThemeId);
    showToast(`Applied ${NITRO_ALL_THEMES.find(t => t.id === newThemeId)?.label} theme`, "success");
  };

  const getPreviewClasses = () => {
    switch (previewMode) {
      case "mobile": 
        return "w-[375px] max-w-full";
      case "tablet": 
        return "w-[768px] max-w-full";
      default: 
        return "w-full";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 flex">
        {/* Left Sidebar - Template List */}
        <aside className="w-72 border-r border-border/50 bg-background/50 backdrop-blur-xl flex flex-col">
          <div className="p-4 border-b border-border/50">
            <h2 className="font-semibold flex items-center gap-2">
              <LayoutTemplate className="h-4 w-4 text-primary" />
              Templates
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Select a template to preview
            </p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-2 template-grid">
            {templates.map((template) => (
              <div
                key={template.id}
                className={cn(
                  "template-card cursor-pointer rounded-xl border p-3 transition-all duration-200",
                  selectedTemplate === template.id
                    ? cn("bg-primary/5 border-primary/50 shadow-md", template.borderColor)
                    : "border-border/50 hover:border-primary/30 hover:bg-muted/30"
                )}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  gsap.fromTo(
                    previewRef.current,
                    { opacity: 0, y: 10 },
                    { opacity: 1, y: 0, duration: 0.3 }
                  );
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center shrink-0",
                    "bg-gradient-to-br",
                    template.color
                  )}>
                    <template.icon className="h-5 w-5 text-foreground/80" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-sm truncate">{template.title}</h3>
                      {template.popular && (
                        <Badge variant="default" className="text-[10px] px-1.5 py-0 h-4">
                          <Sparkles className="h-2.5 w-2.5 mr-0.5" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {template.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Toolbar */}
          <div className="h-14 border-b border-border/50 bg-background/50 backdrop-blur-xl flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold">{selectedTemplateData?.title}</h1>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                <Button
                  variant={previewMode === "desktop" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => setPreviewMode("desktop")}
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button
                  variant={previewMode === "tablet" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => setPreviewMode("tablet")}
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button
                  variant={previewMode === "mobile" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => setPreviewMode("mobile")}
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                <TabsList className="h-8">
                  <TabsTrigger value="preview" className="text-xs gap-1.5">
                    <Eye className="h-3.5 w-3.5" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="text-xs gap-1.5">
                    <Code2 className="h-3.5 w-3.5" />
                    Code
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="h-4 w-px bg-border mx-1" />
              
              <MagneticButton strength={0.1}>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 text-xs"
                  onClick={handleCopyCode}
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  Copy Code
                </Button>
              </MagneticButton>
              
              <MagneticButton strength={0.1}>
                <Button
                  variant="glow"
                  size="sm"
                  className="gap-1.5 text-xs"
                  onClick={handleExport}
                >
                  <Download className="h-3.5 w-3.5" />
                  Export
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Preview/Code Area */}
          <div className="flex-1 overflow-hidden bg-muted/30 relative">
            {activeTab === "preview" ? (
              <div className="h-full overflow-auto p-4 sm:p-8 flex justify-center">
                <div 
                  ref={previewRef}
                  className={cn(
                    "bg-background rounded-xl shadow-2xl overflow-hidden transition-all duration-300 mx-auto relative",
                    getPreviewClasses()
                  )}
                  style={{ 
                    height: "800px",
                    maxHeight: "calc(100vh - 200px)"
                  }}
                >
                  <div className="h-full overflow-hidden">
                    <TemplateComponent preview={true} />
                  </div>
                  {/* Gradient overlay to indicate there's more content */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                </div>
              </div>
            ) : (
              <div className="h-full overflow-auto">
                <div className="max-w-4xl mx-auto p-6">
                  <div className="rounded-xl bg-black/90 border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                      <span className="text-xs text-white/60">Template Code</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs text-white/60 hover:text-white"
                        onClick={handleCopyCode}
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <pre className="p-4 text-sm text-white/90 overflow-x-auto">
                      <code>{generateTemplateCode(selectedTemplate)}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Theme Switcher */}
        <aside 
          ref={sidebarRef}
          className="w-72 border-l border-border/50 bg-background/50 backdrop-blur-xl flex flex-col"
        >
          <div className="p-4 border-b border-border/50">
            <h2 className="font-semibold flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              Theme Preview
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              See how this template looks with different themes
            </p>
          </div>

          {/* Current Theme Display */}
          <div className="p-4 border-b border-border/50">
            <div className="text-xs text-muted-foreground mb-2">Current Theme</div>
            <div 
              className="rounded-xl p-4 border transition-all duration-300"
              style={{ 
                borderColor: "hsl(var(--primary) / 0.3)",
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))"
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="h-12 w-12 rounded-xl shadow-lg"
                  style={{ 
                    background: NITRO_ALL_THEMES.find(t => t.id === themeId)?.preview 
                  }}
                />
                <div>
                  <div className="font-medium text-sm">
                    {NITRO_ALL_THEMES.find(t => t.id === themeId)?.label}
                  </div>
                  <div className="text-xs text-muted-foreground capitalize">
                    {colorMode} Mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <div className="text-xs text-muted-foreground px-1 mb-2">All Themes ({NITRO_ALL_THEMES.length})</div>
            {NITRO_ALL_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={cn(
                  "w-full flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-200 text-left",
                  themeId === theme.id
                    ? "border-primary/50 bg-primary/5 shadow-sm"
                    : "border-border/50 hover:border-primary/30 hover:bg-muted/30"
                )}
              >
                <div 
                  className="h-10 w-10 rounded-lg shadow-sm shrink-0"
                  style={{ background: theme.preview }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{theme.label}</div>
                  <div className="text-[10px] text-muted-foreground truncate">
                    {theme.id.replace("theme-nitro-", "").replace(/-/g, " ")}
                  </div>
                </div>
                {themeId === theme.id && (
                  <Check className="h-4 w-4 text-primary shrink-0" />
                )}
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-border/50 space-y-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full gap-2 text-xs"
              onClick={() => setThemeId("theme-nitro-midnight-blurple")}
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset to Default
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full gap-2 text-xs"
              asChild
            >
              <a href="/gallery">
                Browse All Themes
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </aside>
      </main>
    </div>
  );
}

// Generate template code
function generateTemplateCode(templateId: string): string {
  const codes: Record<string, string> = {
    "saas-landing": `import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold">Your SaaS</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Features</Button>
            <Button variant="ghost" size="sm">Pricing</Button>
            <Button variant="glow" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <Badge variant="glass" className="mb-4">Now in Beta</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build faster with{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Gradient Forge
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Production-ready theming system with beautiful gradients and surface-aware overlays.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="glow">
            Start Building <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Documentation
          </Button>
        </div>
      </section>
    </div>
  );
}`,
    "dashboard": `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, DollarSign, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="flex h-16 items-center px-6 gap-4">
          <h1 className="font-semibold">Analytics Dashboard</h1>
          <div className="flex-1" />
          <Button variant="outline" size="sm">Export</Button>
        </div>
      </header>

      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="border-border/50 bg-background/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-emerald-500">+20.1% from last month</p>
            </CardContent>
          </Card>
          {/* More stat cards... */}
        </div>
      </main>
    </div>
  );
}`,
    "mail": `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Inbox, Send, Archive, Trash } from "lucide-react";

export default function MailApp() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 bg-muted/30 p-4">
        <Button className="w-full mb-4" variant="glow">
          Compose
        </Button>
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Inbox className="mr-2 h-4 w-4" /> Inbox
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Send className="mr-2 h-4 w-4" /> Sent
          </Button>
        </nav>
      </aside>

      {/* Email List */}
      <div className="flex-1 flex">
        <div className="w-80 border-r border-border/50">
          {/* Email items */}
        </div>
        
        {/* Email Content */}
        <main className="flex-1 p-6">
          {/* Email view */}
        </main>
      </div>
    </div>
  );
}`,
    "ecommerce": `import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

export default function Ecommerce() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6">
          <h1 className="font-semibold text-xl">Shop</h1>
          <Button variant="outline" size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart (0)
          </Button>
        </div>
      </header>

      {/* Products Grid */}
      <main className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((product) => (
            <Card key={product} className="border-border/50">
              <CardContent className="p-4">
                <div className="aspect-square bg-muted rounded-lg mb-4" />
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-sm text-muted-foreground">$99.00</p>
                <Button className="w-full mt-4" variant="glow">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}`,
    "blog": `import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto h-16 flex items-center justify-center">
          <h1 className="font-semibold text-xl">My Blog</h1>
        </div>
      </header>

      {/* Articles */}
      <main className="max-w-4xl mx-auto p-6">
        <article className="mb-12">
          <div className="h-64 bg-muted rounded-2xl mb-6" />
          <Badge variant="glass">Technology</Badge>
          <h2 className="text-3xl font-bold mt-4 mb-4">
            Building Beautiful UIs with Gradient Forge
          </h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Jan 15, 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> 5 min read
            </span>
          </div>
          <p className="text-muted-foreground">
            Learn how to create stunning gradient themes...
          </p>
        </article>
      </main>
    </div>
  );
}`,
    "components": `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Components() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Component Showcase</h1>
      
      {/* Buttons */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="glow">Glow</Button>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="glass">Glass</Badge>
        </CardContent>
      </Card>
    </div>
  );
}`,
  };
  
  return codes[templateId] || "// Template code not available";
}
