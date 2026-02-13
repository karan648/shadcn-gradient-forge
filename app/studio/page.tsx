"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThemeContext } from "@/components/theme/theme-context";
import { NITRO_ALL_THEMES, type ThemeId } from "@/components/theme/theme-engine";
import { getThemeTokens } from "@/components/theme/token-export-utils";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/toast";
import { 
  AnimatedSection, 
  StaggerContainer,
  MagneticButton,
  FloatingElement
} from "@/components/ui/gsap-animated";
import { 
  Palette, 
  Layers, 
  Code2, 
  Download, 
  Zap, 
  Check, 
  Copy,
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  Eye,
  Settings,
  Sun,
  Moon,
  ChevronRight,
  Search,
  Bell,
  User,
  Mail,
  Loader2,
  AlertCircle,
  Info,
  CheckCircle2,
  X,
  Trash2,
  Plus,
  MoreHorizontal,
  Layout,
  Type,
  Image as ImageIcon,
  Component,
  Palette as PaletteIcon,
  Wand2,
  FileCode,
  Download as DownloadIcon,
  Share2,
  Moon as MoonIcon,
  Sun as SunIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Export formats
const exportFormats = [
  { id: "css", label: "CSS", icon: FileCode },
  { id: "scss", label: "SCSS", icon: FileCode },
  { id: "json", label: "JSON", icon: FileCode },
  { id: "tailwind", label: "Tailwind", icon: FileCode },
  { id: "w3c", label: "W3C Tokens", icon: FileCode },
  { id: "figma", label: "Figma", icon: FileCode },
];

// Component preview sections
const previewSections = [
  { id: "overview", label: "Overview", icon: Layout },
  { id: "buttons", label: "Buttons", icon: Component },
  { id: "inputs", label: "Inputs", icon: Type },
  { id: "cards", label: "Cards", icon: ImageIcon },
  { id: "feedback", label: "Feedback", icon: PaletteIcon },
];

export default function StudioPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [deviceView, setDeviceView] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [selectedFormat, setSelectedFormat] = useState("css");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCssVariables, setShowCssVariables] = useState(true);
  const [previewColorMode, setPreviewColorMode] = useState<"light" | "dark">("light");
  const { showToast } = useToast();
  const { themeId, setThemeId, colorMode, setColorMode } = useThemeContext();
  const previewRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLPreElement>(null);

  const currentTheme = NITRO_ALL_THEMES.find((t: { id: string }) => t.id === themeId) || NITRO_ALL_THEMES[0];
  const flatTokens = getThemeTokens(themeId);
  
  // Transform flat tokens into the expected structure for export functions
  const tokens = {
    colors: Object.fromEntries(
      Object.entries(flatTokens).map(([key, value]) => [
        key.replace(/^--/, ''), // Remove leading --
        value
      ])
    )
  };

  // Filter themes based on search
  const filteredThemes = NITRO_ALL_THEMES.filter((theme: { label: string }) =>
    theme.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animate preview cards on section change
  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const cards = preview.querySelectorAll(".preview-item");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.5)",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeSection, deviceView, themeId]);

  const handleCopyCode = () => {
    const code = generateExportCode(selectedFormat, tokens, themeId);
    navigator.clipboard.writeText(code);
    showToast("Code copied to clipboard!", "success");
  };

  const handleDownload = () => {
    const code = generateExportCode(selectedFormat, tokens, themeId);
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${themeId}-tokens.${getFileExtension(selectedFormat)}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("File downloaded!", "success");
  };

  const handleCopyAll = () => {
    const allTokens = NITRO_ALL_THEMES.map((theme: { id: ThemeId; label: string }) => ({
      theme: theme.label,
      tokens: getThemeTokens(theme.id)
    }));
    navigator.clipboard.writeText(JSON.stringify(allTokens, null, 2));
    showToast("All themes copied to clipboard!", "success");
  };

  const getDeviceClasses = () => {
    switch (deviceView) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Main Studio Layout */}
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        
        {/* Left Sidebar - Theme List */}
        <aside className="w-72 border-r border-border/50 bg-background/95 backdrop-blur-xl flex flex-col hidden lg:flex">
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-sm flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                Themes
              </h2>
              <Badge variant="glass" className="text-xs">{NITRO_ALL_THEMES.length}</Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            <div className="space-y-1">
              {filteredThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setThemeId(theme.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 group",
                    themeId === theme.id 
                      ? "bg-primary/10 border border-primary/30 shadow-sm" 
                      : "hover:bg-muted/50 border border-transparent"
                  )}
                >
                  <div 
                    className="w-10 h-10 rounded-lg shadow-sm shrink-0"
                    style={{ background: theme.preview }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "font-medium text-sm truncate",
                      themeId === theme.id && "text-primary"
                    )}>
                      {theme.label}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      Gradient theme
                    </p>
                  </div>
                  {themeId === theme.id && (
                    <Check className="h-4 w-4 text-primary shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-border/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Preview Mode</span>
              <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
                <button
                  onClick={() => setPreviewColorMode("light")}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    previewColorMode === "light" ? "bg-background shadow-sm" : "text-muted-foreground"
                  )}
                >
                  <SunIcon className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setPreviewColorMode("dark")}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    previewColorMode === "dark" ? "bg-background shadow-sm" : "text-muted-foreground"
                  )}
                >
                  <MoonIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Center - Live Preview */}
        <section className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="h-14 border-b border-border/50 flex items-center justify-between px-4 bg-background/95 backdrop-blur-xl shrink-0">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-sm hidden sm:block">Component Preview</h1>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
                {[
                  { id: "mobile", icon: Smartphone, label: "Mobile" },
                  { id: "tablet", icon: Tablet, label: "Tablet" },
                  { id: "desktop", icon: Monitor, label: "Desktop" },
                ].map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setDeviceView(id as typeof deviceView)}
                    className={cn(
                      "p-1.5 rounded-full transition-all",
                      deviceView === id 
                        ? "bg-background shadow-sm text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="glass" className="gap-1.5 text-xs">
                <Sparkles className="h-3 w-3" />
                {currentTheme.label}
              </Badge>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className={cn("mx-auto transition-all duration-300", getDeviceClasses())}>
              {/* Section Tabs */}
              <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-2">
                {previewSections.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap",
                      activeSection === id
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Preview Area */}
              <div 
                ref={previewRef}
                className="bg-card/50 rounded-2xl border border-border/50 p-4 sm:p-6 min-h-[500px]"
                style={{ backgroundColor: previewColorMode === "dark" ? "#0a0a0a" : undefined }}
              >
                {activeSection === "overview" && <OverviewPreview />}
                {activeSection === "buttons" && <ButtonsPreview />}
                {activeSection === "inputs" && <InputsPreview />}
                {activeSection === "cards" && <CardsPreview />}
                {activeSection === "feedback" && <FeedbackPreview />}
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar - Export Panel */}
        <aside className="w-80 border-l border-border/50 bg-background/95 backdrop-blur-xl flex flex-col hidden xl:flex">
          <div className="p-4 border-b border-border/50">
            <h2 className="font-semibold text-sm flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4 text-primary" />
              Export Tokens
            </h2>
            <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
              {exportFormats.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedFormat(id)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-xs font-medium transition-all",
                    selectedFormat === id
                      ? "bg-background shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  title={label}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden 2xl:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
              <span className="text-xs font-medium text-muted-foreground">Generated Code</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                  title="Copy code"
                >
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                  title="Download file"
                >
                  <DownloadIcon className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <pre 
                ref={codeRef}
                className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-all"
              >
                {generateExportCode(selectedFormat, tokens, themeId)}
              </pre>
            </div>
          </div>

          <div className="p-4 border-t border-border/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Show CSS Variables</span>
              <Switch 
                checked={showCssVariables}
                onCheckedChange={setShowCssVariables}
              />
            </div>
            <Button 
              variant="outline" 
              className="w-full gap-2 text-xs"
              onClick={handleCopyAll}
            >
              <Copy className="h-3.5 w-3.5" />
              Copy All Themes
            </Button>
            <Button 
              className="w-full gap-2 text-xs"
              onClick={handleDownload}
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              Download Tokens
            </Button>
          </div>
        </aside>
      </div>
    </main>
  );
}

// Preview Components
function OverviewPreview() {
  return (
    <div className="space-y-6 preview-item">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
                <CardDescription className="text-xs">Common tasks</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button size="sm" className="w-full text-xs gap-2">
              <Plus className="h-3.5 w-3.5" />
              Create New
            </Button>
            <Button variant="outline" size="sm" className="w-full text-xs gap-2">
              <Layout className="h-3.5 w-3.5" />
              View Dashboard
            </Button>
          </CardContent>
        </Card>

        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <User className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <CardTitle className="text-sm">Profile</CardTitle>
                <CardDescription className="text-xs">User settings</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/20 text-primary text-sm">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full text-xs">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Bell className="h-5 w-5 text-accent" />
              </div>
              <div>
                <CardTitle className="text-sm">Notifications</CardTitle>
                <CardDescription className="text-xs">3 unread</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="flex-1">New theme available</span>
              <span className="text-muted-foreground">2m</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span className="flex-1">Export completed</span>
              <span className="text-muted-foreground">1h</span>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-xs">
              View All
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="preview-item border-border/40 bg-card/70">
        <CardHeader>
          <CardTitle className="text-sm">Theme Preview</CardTitle>
          <CardDescription className="text-xs">
            See how your theme looks across different components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="glass">Glass</Badge>
            <Badge className="gap-1"><Check className="h-3 w-3" /> Success</Badge>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button size="sm">Primary</Button>
            <Button size="sm" variant="secondary">Secondary</Button>
            <Button size="sm" variant="outline">Outline</Button>
            <Button size="sm" variant="ghost">Ghost</Button>
            <Button size="sm" variant="glow">Glow</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ButtonsPreview() {
  return (
    <div className="space-y-6">
      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Button Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Default</Button>
          <Button size="sm" variant="secondary">Secondary</Button>
          <Button size="sm" variant="outline">Outline</Button>
          <Button size="sm" variant="ghost">Ghost</Button>
          <Button size="sm" variant="glow">Glow</Button>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="glow">Small</Button>
          <Button size="md" variant="glow">Medium</Button>
          <Button size="lg" variant="glow">Large</Button>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Button States</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="glow">
            <Check className="h-4 w-4 mr-1.5" />
            With Icon
          </Button>
          <Button size="sm" variant="glow" disabled>
            <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
            Loading
          </Button>
          <Button size="sm" variant="outline" disabled>Disabled</Button>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Icon Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="px-2.5">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="glow" className="px-2.5">
            <Bell className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="px-2.5">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function InputsPreview() {
  return (
    <div className="space-y-6">
      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Text Inputs</h3>
        <div className="grid sm:grid-cols-2 gap-4 max-w-md">
          <div className="space-y-2">
            <label className="text-xs font-medium">Default</label>
            <Input placeholder="Enter text..." />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">With Icon</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Email" className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">Disabled</label>
            <Input placeholder="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">With Button</label>
            <div className="flex gap-2">
              <Input placeholder="Search..." className="flex-1" />
              <Button size="sm" variant="glow">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Switches</h3>
        <Card className="max-w-sm">
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sun className="h-4 w-4" />
                <span className="text-sm">Light Mode</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-4 w-4" />
                <span className="text-sm">Notifications</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email Updates</span>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Checkboxes</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <Checkbox defaultChecked />
            <span className="text-sm">Enable notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <Checkbox />
            <span className="text-sm">Auto-save changes</span>
          </label>
          <label className="flex items-center gap-3">
            <Checkbox defaultChecked />
            <span className="text-sm">Show previews</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function CardsPreview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader>
            <CardTitle className="text-sm">Simple Card</CardTitle>
            <CardDescription className="text-xs">Basic card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Cards provide a flexible container for displaying content.
            </p>
          </CardContent>
        </Card>

        <Card className="preview-item border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Featured Card
            </CardTitle>
            <CardDescription className="text-xs">Highlighted styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Cards can have custom borders and backgrounds.
            </p>
          </CardContent>
        </Card>

        <Card className="preview-item border-border/40 bg-card/70">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Interactive Card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Cards can contain buttons and other interactive elements.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs flex-1">Cancel</Button>
              <Button size="sm" variant="glow" className="text-xs flex-1">Confirm</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="preview-item border-border/40 bg-card/70">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-sm">Card with Actions</CardTitle>
            <CardDescription className="text-xs">Header actions example</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="px-2">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Project Update</p>
              <p className="text-xs text-muted-foreground">Updated 2 hours ago</p>
            </div>
            <Badge variant="glass">New</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs gap-1.5">
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </Button>
            <Button size="sm" className="text-xs gap-1.5">
              <Check className="h-3.5 w-3.5" />
              Approve
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FeedbackPreview() {
  return (
    <div className="space-y-6">
      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="glass">Glass</Badge>
          <Badge className="gap-1"><Check className="h-3 w-3" /> Success</Badge>
          <Badge variant="outline" className="gap-1"><Bell className="h-3 w-3" /> Alert</Badge>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Loading States</h3>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading content...
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-muted rounded animate-pulse w-1/3" />
                <div className="h-2 bg-muted rounded animate-pulse w-1/2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Alert States</h3>
        <div className="space-y-3 max-w-md">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Information</p>
              <p className="text-xs text-muted-foreground">This is an informational message.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/10 border border-secondary/20">
            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Success</p>
              <p className="text-xs text-muted-foreground">Your action was completed successfully.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/10 border border-destructive/20">
            <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Error</p>
              <p className="text-xs text-muted-foreground">Something went wrong. Please try again.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-item">
        <h3 className="text-sm font-medium mb-3">Empty State</h3>
        <Card>
          <CardContent className="text-center py-12">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium mb-1">No messages yet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start a conversation to see messages here.
            </p>
            <Button size="sm" variant="outline">
              Start Conversation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper functions
function generateExportCode(format: string, tokens: any, themeId: string): string {
  switch (format) {
    case "css":
      return generateCSS(tokens, themeId);
    case "scss":
      return generateSCSS(tokens, themeId);
    case "json":
      return JSON.stringify(tokens, null, 2);
    case "tailwind":
      return generateTailwind(tokens, themeId);
    case "w3c":
      return generateW3C(tokens, themeId);
    case "figma":
      return generateFigma(tokens, themeId);
    default:
      return generateCSS(tokens, themeId);
  }
}

function generateCSS(tokens: any, themeId: string): string {
  let css = `/* ${themeId} Theme Tokens */\n:root {\n`;
  
  Object.entries(tokens.colors).forEach(([key, value]) => {
    css += `  --${key}: ${value};\n`;
  });
  
  if (tokens.gradients) {
    css += `\n  /* Gradients */\n`;
    Object.entries(tokens.gradients).forEach(([key, value]) => {
      css += `  --gradient-${key}: ${value};\n`;
    });
  }
  
  css += `}\n`;
  return css;
}

function generateSCSS(tokens: any, themeId: string): string {
  let scss = `// ${themeId} Theme Tokens\n$tokens: (\n`;
  
  Object.entries(tokens.colors).forEach(([key, value]) => {
    scss += `  "${key}": ${value},\n`;
  });
  
  scss += `);\n`;
  return scss;
}

function generateTailwind(tokens: any, themeId: string): string {
  return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(tokens.colors, null, 6).replace(/"/g, "'")},
    },
  },
}`;
}

function generateW3C(tokens: any, themeId: string): string {
  return JSON.stringify({
    $schema: "https://design-tokens.github.io/format/",
    $themes: [{
      id: themeId,
      name: themeId,
      selectedTokenSets: { [themeId]: "enabled" }
    }],
    [themeId]: {
      color: tokens.colors
    }
  }, null, 2);
}

function generateFigma(tokens: any, themeId: string): string {
  const figmaTokens: any = {};
  
  Object.entries(tokens.colors).forEach(([key, value]) => {
    figmaTokens[key] = {
      value: value,
      type: "color"
    };
  });
  
  return JSON.stringify({
    [themeId]: {
      color: figmaTokens
    }
  }, null, 2);
}

function getFileExtension(format: string): string {
  switch (format) {
    case "css": return "css";
    case "scss": return "scss";
    case "json":
    case "w3c":
    case "figma": return "json";
    case "tailwind": return "js";
    default: return "txt";
  }
}
