"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MEMORY_LANE_THEME, NITRO_PUBLIC_THEMES, NITRO_ALL_THEMES, type ThemeId } from "@/components/theme/theme-engine";
import { useThemeContext } from "@/components/theme/theme-context";
import { useToast } from "@/components/ui/toast";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Image, 
  Grid, 
  List, 
  Sparkles, 
  Check, 
  Eye,
  Search,
  Filter,
  Download,
  Copy,
  Sun,
  Moon,
  Palette
} from "lucide-react";
import { MagneticButton } from "@/components/ui/gsap-animated";
import { exportTokens, downloadFile, copyToClipboard, exportFormats, generateAllThemesCSS, type ExportFormat } from "@/components/theme/token-export-utils";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryThemes = [...NITRO_PUBLIC_THEMES, MEMORY_LANE_THEME];

export default function GalleryPage() {
  const { themeId, setThemeId, colorMode, setColorMode, memoryLaneUnlocked } = useThemeContext();
  const { showToast } = useToast();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "public" | "secret">("all");
  const [selectedExportFormat, setSelectedExportFormat] = useState<ExportFormat>("css");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");
  const gridRef = useRef<HTMLDivElement>(null);

  const isLight = colorMode === "light";

  const handleCopy = async (content: string) => {
    setCopyStatus("copying");
    const success = await copyToClipboard(content);
    setCopyStatus(success ? "copied" : "error");
    setTimeout(() => setCopyStatus("idle"), 1500);
  };

  const handleDownload = () => {
    const result = exportTokens({ 
      format: selectedExportFormat, 
      themeId, 
      colorMode 
    });
    downloadFile(result);
    showToast(`Downloaded ${result.filename}`, "success");
  };

  const handleDownloadAll = () => {
    const result = generateAllThemesCSS();
    downloadFile(result);
    showToast(`Downloaded ${result.filename}`, "success");
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".theme-card");
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: {
          amount: 0.3,
          from: "start",
        },
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [viewMode, filter, searchQuery]);

  const handleThemeSelect = (id: ThemeId) => {
    if (id === MEMORY_LANE_THEME.id && !memoryLaneUnlocked) {
      showToast("Unlock Memory Lane by viewing all public themes!", "info");
      return;
    }
    setThemeId(id);
    showToast(`Applied ${galleryThemes.find(t => t.id === id)?.label} theme`, "success");
  };

  const isActive = (id: string) => themeId === id;
  const isLocked = (id: string) => id === MEMORY_LANE_THEME.id && !memoryLaneUnlocked;

  const filteredThemes = galleryThemes.filter((theme) => {
    const matchesSearch = theme.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         theme.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || 
                         (filter === "secret" && theme.id === MEMORY_LANE_THEME.id) ||
                         (filter === "public" && theme.id !== MEMORY_LANE_THEME.id);
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen px-3 sm:px-4 lg:px-6 xl:px-8 pb-12 sm:pb-20 pt-8 sm:pt-12">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8">
        <SiteHeader />

        {/* Header */}
        <div className="flex flex-col gap-3">
          <Badge variant="glass" className="w-fit gap-1 text-xs sm:text-sm">
            <Image className="h-3 w-3 sm:h-4 sm:w-4" />
            Gallery
          </Badge>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Theme Gallery
              </h1>
              <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Preview every gradient preset with consistent shadcn surfaces. Use these palettes as-is or remix them
                to match your brand.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-border/50 bg-background/60">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 rounded-lg border border-border/50 bg-background text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            <div className="flex rounded-lg border border-border/50 bg-background overflow-hidden">
              {["all", "public", "secret"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as typeof filter)}
                  className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs capitalize transition-colors ${
                    filter === f 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="h-8 sm:h-9 px-2 sm:px-3"
            >
              <Grid className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="h-8 sm:h-9 px-2 sm:px-3"
            >
              <List className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-border/50 bg-background/60">
          <div className="flex items-center gap-2">
            <Badge variant="glass" className="text-[10px] sm:text-xs">{NITRO_PUBLIC_THEMES.length} Public</Badge>
            <Badge variant="outline" className="text-[10px] sm:text-xs">1 Secret</Badge>
          </div>
          <div className="h-3 sm:h-4 w-px bg-border" />
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            Current: <span className="font-semibold text-foreground">{galleryThemes.find(t => t.id === themeId)?.label}</span>
          </p>
          <div className="flex-1" />
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            Showing {filteredThemes.length} of {galleryThemes.length}
          </p>
        </div>

        {/* Export Controls */}
        <div className="flex flex-wrap items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-border/50 bg-background/60">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Export Theme</span>
          </div>
          
          <div className="h-4 w-px bg-border" />
          
          <Select value={selectedExportFormat} onValueChange={(v: string) => setSelectedExportFormat(v as ExportFormat)}>
            <SelectTrigger className="w-[130px] h-8">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent>
              {exportFormats.map((format) => (
                <SelectItem key={format.value} value={format.value}>
                  {format.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 gap-1.5"
            onClick={() => handleCopy(exportTokens({ format: selectedExportFormat, themeId, colorMode }).content)}
            disabled={copyStatus === "copying"}
          >
            <Copy className="h-3.5 w-3.5" />
            {copyStatus === "copying" ? "Copying..." : copyStatus === "copied" ? "Copied!" : "Copy"}
          </Button>
          
          <Button 
            size="sm" 
            className="h-8 gap-1.5"
            onClick={handleDownload}
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </Button>
          
          <div className="h-4 w-px bg-border" />
          
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-2 py-1">
            <Sun className={cn("h-4 w-4", isLight ? "text-foreground" : "text-muted-foreground")} />
            <Switch
              checked={!isLight}
              onCheckedChange={(checked) => setColorMode(checked ? "dark" : "light")}
              label="Toggle dark mode"
            />
            <Moon className={cn("h-4 w-4", !isLight ? "text-foreground" : "text-muted-foreground")} />
          </div>
          
          <div className="flex-1" />
          
          <Button 
            variant="secondary" 
            size="sm" 
            className="h-8 gap-1.5"
            onClick={handleDownloadAll}
          >
            <Download className="h-3.5 w-3.5" />
            Download All ({NITRO_ALL_THEMES.length})
          </Button>
        </div>

        {/* Theme Grid/List */}
        <section className="space-y-3 sm:space-y-4">
          <div 
            ref={gridRef}
            className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4" 
              : "flex flex-col gap-2 sm:gap-3"
            }
          >
            {filteredThemes.map((theme) => {
              const active = isActive(theme.id);
              const locked = isLocked(theme.id);
              
              return (
                <div
                  key={theme.id}
                  className={`theme-card ${locked ? "cursor-not-allowed" : "cursor-pointer"}`}
                  onClick={() => !locked && handleThemeSelect(theme.id as ThemeId)}
                >
                  <Card className={`
                    overflow-hidden border-border/50 bg-background/60 transition-all duration-300
                    ${active ? "ring-2 ring-primary ring-offset-1 sm:ring-offset-2" : ""}
                    ${!locked && !active ? "hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1" : ""}
                    ${locked ? "opacity-60" : ""}
                    ${viewMode === "list" ? "flex flex-row items-center" : ""}
                  `}>
                    <div className={`relative ${viewMode === "list" ? "w-24 sm:w-32 shrink-0" : ""}`}>
                      <div 
                        className={viewMode === "grid" ? "h-24 sm:h-28" : "h-16 sm:h-20"} 
                        style={{ backgroundImage: theme.preview }} 
                      />
                      
                      {/* Locked overlay */}
                      {locked && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <Badge variant="outline" className="gap-1 text-[10px]">
                            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            Locked
                          </Badge>
                        </div>
                      )}

                      {/* Active indicator */}
                      {active && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="default" className="gap-1 text-[10px]">
                            <Check className="h-2.5 w-2.5" />
                            Active
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className={`
                      flex items-center justify-between gap-2 sm:gap-3
                      ${viewMode === "grid" ? "py-2.5 sm:py-4 px-3 sm:px-4" : "py-2 sm:py-3 px-3 sm:px-4 flex-1"}
                    `}>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold truncate">{theme.label}</p>
                        <p className="truncate text-[10px] sm:text-xs text-muted-foreground">{theme.id}</p>
                      </div>
                      {theme.id === MEMORY_LANE_THEME.id ? (
                        <Badge variant="outline" className="shrink-0 text-[10px]">Secret</Badge>
                      ) : (
                        <Badge variant="glass" className="shrink-0 text-[10px]">Public</Badge>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {filteredThemes.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-sm sm:text-base text-muted-foreground">No themes found matching your search.</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 sm:mt-4"
                onClick={() => { setSearchQuery(""); setFilter("all"); }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </section>

        {/* Quick Tips */}
        <div className="rounded-xl sm:rounded-2xl border border-border/50 bg-background/60 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Pro Tips</h3>
          <div className="grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: 1, text: "Click any theme to apply it instantly" },
              { num: 2, text: "View all 20 public themes to unlock Memory Lane" },
              { num: 3, text: "Use the Studio for detailed component preview" },
            ].map((tip) => (
              <div key={tip.num} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] sm:text-xs font-semibold text-primary">
                  {tip.num}
                </span>
                {tip.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
