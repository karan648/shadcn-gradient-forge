"use client";

import { useThemeContext } from "@/components/theme/theme-context";
import { MEMORY_LANE_THEME, NITRO_PUBLIC_THEMES, NITRO_ALL_THEMES, type ThemeId } from "@/components/theme/theme-engine";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Lock, Moon, Sun, Download, Copy, Check, FileCode, Palette } from "lucide-react";
import { useState } from "react";
import { exportTokens, downloadFile, copyToClipboard, exportFormats, generateAllThemesCSS, type ExportFormat } from "./token-export-utils";

export function ThemePanel() {
  const {
    themeId,
    colorMode,
    availableThemes,
    memoryLaneUnlocked,
    remainingForUnlock,
    setThemeId,
    setColorMode,
  } = useThemeContext();

  const isLight = colorMode === "light";
  const totalThemes = NITRO_PUBLIC_THEMES.length;
  const seenThemes = totalThemes - remainingForUnlock;
  const progress = Math.round((seenThemes / totalThemes) * 100);

  const [selectedExportFormat, setSelectedExportFormat] = useState<ExportFormat>("css");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");

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
  };

  const handleDownloadAll = () => {
    const result = generateAllThemesCSS();
    downloadFile(result);
  };

  const currentTheme = NITRO_ALL_THEMES.find(t => t.id === themeId);

  return (
    <Card className="border-border/50 bg-background/60">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>Gradient Studio</CardTitle>
            <CardDescription>
              Preview every theme to unlock the secret Memory Lane palette.
            </CardDescription>
          </div>
          <Badge variant="glass">Shadcn Ready</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Selection */}
        <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 flex-1">
            <p className="text-sm font-semibold flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Select Theme
            </p>
            <p className="text-xs text-muted-foreground">
              Choose a theme to export.
            </p>
          </div>
          <Select value={themeId} onValueChange={(v: string) => setThemeId(v as ThemeId)}>
            <SelectTrigger className="w-full sm:w-[220px]">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              {NITRO_ALL_THEMES.map((theme) => (
                <SelectItem key={theme.id} value={theme.id}>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-md border border-border/30" 
                      style={{ background: theme.preview }}
                    />
                    <span>{theme.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Color Mode Toggle */}
        <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold">Color Mode</p>
            <p className="text-xs text-muted-foreground">
              Switch between light and dark surfaces.
            </p>
          </div>
          <div className="flex items-center gap-3 sm:justify-end">
            <Sun className={cn("h-4 w-4", isLight ? "text-foreground" : "text-muted-foreground")} />
            <Switch
              checked={!isLight}
              onCheckedChange={(checked) => setColorMode(checked ? "dark" : "light")}
              label="Toggle dark mode"
            />
            <Moon className={cn("h-4 w-4", !isLight ? "text-foreground" : "text-muted-foreground")} />
          </div>
        </div>

        {/* Export Section */}
        <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export Theme
              </p>
              <p className="text-xs text-muted-foreground">
                Download theme files for your project.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Select value={selectedExportFormat} onValueChange={(v: string) => setSelectedExportFormat(v as ExportFormat)}>
              <SelectTrigger className="w-[140px] h-8">
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
              {copyStatus === "copied" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
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
          </div>
          
          <div className="pt-2 border-t border-border/30">
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full h-8 gap-1.5"
              onClick={handleDownloadAll}
            >
              <FileCode className="h-3.5 w-3.5" />
              Download All Themes ({NITRO_ALL_THEMES.length} themes)
            </Button>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Secret Theme Unlock</p>
              <p className="text-xs text-muted-foreground">
                Preview all {totalThemes} public themes to reveal Memory Lane.
              </p>
            </div>
            <Badge variant={memoryLaneUnlocked ? "default" : "outline"}>
              {memoryLaneUnlocked ? "Unlocked" : `${remainingForUnlock} remaining`}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{seenThemes} of {totalThemes} previewed</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-border/60">
              <div
                className="h-full rounded-full bg-primary/80 transition-all"
                style={{ width: `${progress}%` }}
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {availableThemes.map((theme) => {
            const isActive = themeId === theme.id;
            const isSecret = theme.id === MEMORY_LANE_THEME.id;
            const isLocked = isSecret && !memoryLaneUnlocked;

            return (
              <div
                key={theme.id}
                role="button"
                tabIndex={isLocked ? -1 : 0}
                onClick={() => !isLocked && setThemeId(theme.id)}
                onKeyDown={(event) => {
                  if (isLocked) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setThemeId(theme.id);
                  }
                }}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/40 text-left transition-all",
                  isActive && "border-primary/60 shadow-[0_0_25px_hsl(var(--primary)_/_0.35)]",
                  isLocked && "cursor-not-allowed opacity-70",
                )}
              >
                <div
                  className="relative h-24 w-full"
                  style={{ backgroundImage: theme.preview }}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                      <Lock className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{theme.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {isActive ? "Active" : "Preview"}
                    </p>
                  </div>
                  <Button
                    variant={isActive ? "glow" : "ghost"}
                    size="sm"
                    className="h-7 px-3"
                  >
                    {isActive ? "Live" : "Set"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
