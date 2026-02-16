"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useThemeContext } from "./theme-context";
import { cn } from "@/lib/utils";
import { 
  Check, 
  Copy, 
  Download, 
  FileCode, 
  Palette, 
  Code2, 
  Braces, 
  FileJson,
  Layers,
  FileType,
  AlertCircle,
  Sun,
  Moon
} from "lucide-react";
import { type ThemeId, NITRO_ALL_THEMES } from "./theme-engine";
import { 
  exportTokens, 
  downloadFile, 
  copyToClipboard, 
  exportFormats,
  type ExportFormat,
  generateAllThemesCSS,
  getThemeTokens,
} from "./token-export-utils";

type CopyStatus = "idle" | "copying" | "copied" | "error";

interface ThemeExporterProps {
  themeId?: ThemeId;
  colorMode?: "dark" | "light";
}

export function ThemeExporter({ 
  themeId: externalThemeId, 
  colorMode: externalColorMode 
}: ThemeExporterProps) {
  const { themeId: contextThemeId, colorMode: contextColorMode, setThemeId, setColorMode } = useThemeContext();
  
  const themeId = externalThemeId ?? contextThemeId;
  const colorMode = externalColorMode ?? contextColorMode;
  
  const [selectedThemeId, setSelectedThemeId] = useState<ThemeId>(themeId);
  const [selectedColorMode, setSelectedColorMode] = useState<"dark" | "light">(colorMode);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>("css");
  const [copyState, setCopyState] = useState<Record<string, CopyStatus>>({});
  const [activeTab, setActiveTab] = useState<string>("single");

  const currentThemeId = externalThemeId ? themeId : selectedThemeId;
  const currentColorMode = externalColorMode ? colorMode : selectedColorMode;

  const exportResult = useMemo(() => {
    return exportTokens({ 
      format: selectedFormat, 
      themeId: currentThemeId, 
      colorMode: currentColorMode 
    });
  }, [selectedFormat, currentThemeId, currentColorMode]);

  const allThemesExport = useMemo(() => {
    return generateAllThemesCSS();
  }, []);

  const tokens = useMemo(() => {
    return getThemeTokens(currentThemeId);
  }, [currentThemeId]);

  const handleCopy = async (id: string, content: string) => {
    setCopyState((prev) => ({ ...prev, [id]: "copying" }));
    const success = await copyToClipboard(content);
    setCopyState((prev) => ({ ...prev, [id]: success ? "copied" : "error" }));
    window.setTimeout(() => {
      setCopyState((prev) => ({ ...prev, [id]: "idle" }));
    }, 1400);
  };

  const handleDownload = (result: ReturnType<typeof exportTokens>) => {
    downloadFile(result);
  };

  const copyLabel = (status: CopyStatus) => {
    if (status === "copying") return "Copying...";
    if (status === "copied") return "Copied!";
    if (status === "error") return "Failed";
    return "Copy";
  };

  const getFormatIcon = (format: ExportFormat) => {
    switch (format) {
      case "css":
      case "css-variables":
        return <FileCode className="h-4 w-4" />;
      case "scss":
        return <Palette className="h-4 w-4" />;
      case "json":
      case "w3c-tokens":
      case "figma-tokens":
        return <FileJson className="h-4 w-4" />;
      case "tailwind":
        return <Layers className="h-4 w-4" />;
      case "html-root":
        return <FileType className="h-4 w-4" />;
      default:
        return <Code2 className="h-4 w-4" />;
    }
  };

  const currentStatus = copyState["export"] ?? "idle";
  const allThemesStatus = copyState["all-themes"] ?? "idle";

  const handleThemeChange = (newThemeId: string) => {
    const id = newThemeId as ThemeId;
    setSelectedThemeId(id);
    if (setThemeId && !externalThemeId) {
      setThemeId(id);
    }
  };

  const handleColorModeToggle = (checked: boolean) => {
    const mode = checked ? "dark" : "light";
    setSelectedColorMode(mode);
    if (setColorMode && !externalColorMode) {
      setColorMode(mode);
    }
  };

  return (
    <Card className="border-border/50 bg-background/60">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <CardTitle>Theme Export</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Export {currentThemeId.replace("theme-nitro-", "").replace(/-/g, " ")} theme in multiple formats
            </p>
          </div>
          <Badge variant="glass" className="gap-1">
            <Braces className="h-3 w-3" /> Multi-Format
          </Badge>
        </div>
        
        {/* Theme Selection & Color Mode Toggle */}
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <div className="flex-1 min-w-[200px]">
            <Select value={currentThemeId} onValueChange={handleThemeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a theme" />
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
          
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-1.5">
            <Sun className={cn("h-4 w-4", currentColorMode === "light" ? "text-foreground" : "text-muted-foreground")} />
            <Switch
              checked={currentColorMode === "dark"}
              onCheckedChange={handleColorModeToggle}
            />
            <Moon className={cn("h-4 w-4", currentColorMode === "dark" ? "text-foreground" : "text-muted-foreground")} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="single">Single Theme</TabsTrigger>
            <TabsTrigger value="all">All Themes</TabsTrigger>
          </TabsList>

          <TabsContent value="single" className="space-y-4 mt-4">
            {/* Format Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Export Format</label>
              <Select value={selectedFormat} onValueChange={(v: string) => setSelectedFormat(v as ExportFormat)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  {exportFormats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      <div className="flex items-center gap-2">
                        {getFormatIcon(format.value)}
                        <span>{format.label}</span>
                        <span className="text-muted-foreground text-xs ml-auto">.{format.extension}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {exportFormats.find((f) => f.value === selectedFormat)?.description}
              </p>
            </div>

            {/* Color Swatches Preview */}
            <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Theme Colors
              </h4>
              <div className="grid grid-cols-8 gap-2">
                {[
                  { name: "primary", value: tokens["--primary"] },
                  { name: "secondary", value: tokens["--secondary"] },
                  { name: "accent", value: tokens["--accent"] },
                  { name: "background", value: tokens["--background"] },
                  { name: "card", value: tokens["--card"] },
                  { name: "muted", value: tokens["--muted"] },
                  { name: "border", value: tokens["--border"] },
                  { name: "destructive", value: tokens["--destructive"] },
                ].map((color) => (
                  <div key={color.name} className="group relative">
                    <div
                      className="w-full aspect-square rounded-lg border border-border/40 cursor-pointer transition-transform hover:scale-110"
                      style={{ backgroundColor: `hsl(${color.value})` }}
                      title={`${color.name}: ${color.value}`}
                      onClick={() => handleCopy(`color-${color.name}`, color.value)}
                    />
                    <span className="text-[10px] text-muted-foreground text-center block mt-1 truncate">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Preview */}
            <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  {getFormatIcon(selectedFormat)}
                  <span className="text-sm font-semibold">
                    {exportResult.filename}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy("export", exportResult.content)}
                    disabled={currentStatus === "copying"}
                  >
                    {currentStatus === "copied" ? (
                      <Check className="h-4 w-4 mr-1" />
                    ) : currentStatus === "error" ? (
                      <AlertCircle className="h-4 w-4 mr-1" />
                    ) : (
                      <Copy className="h-4 w-4 mr-1" />
                    )}
                    {copyLabel(currentStatus)}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => handleDownload(exportResult)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
              <pre
                className={cn(
                  "overflow-x-auto rounded-2xl bg-black/80 p-4 text-xs text-white/90",
                  "border border-white/10 max-h-[400px] overflow-y-auto"
                )}
              >
                <code>{exportResult.content}</code>
              </pre>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy("root-attrs", `<html class="${colorMode} ${themeId}" data-theme="${themeId}" data-color-mode="${colorMode}">`)}
              >
                <Code2 className="h-4 w-4 mr-2" />
                Copy Root Attributes
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy("surface-css", `.bg-card {
  background-color: hsl(var(--background) / 0.34);
  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));
  backdrop-filter: blur(16px);
}`)}
              >
                <Layers className="h-4 w-4 mr-2" />
                Copy Surface CSS
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-4 mt-4">
            <div className="rounded-2xl border border-border/40 bg-background/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <h4 className="text-sm font-semibold">All Themes CSS</h4>
                  <p className="text-xs text-muted-foreground">
                    Export all {NITRO_ALL_THEMES.length} themes in a single CSS file
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy("all-themes", allThemesExport.content)}
                    disabled={allThemesStatus === "copying"}
                  >
                    {allThemesStatus === "copied" ? (
                      <Check className="h-4 w-4 mr-1" />
                    ) : allThemesStatus === "error" ? (
                      <AlertCircle className="h-4 w-4 mr-1" />
                    ) : (
                      <Copy className="h-4 w-4 mr-1" />
                    )}
                    {copyLabel(allThemesStatus)}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => handleDownload(allThemesExport)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download All
                  </Button>
                </div>
              </div>
              <pre
                className={cn(
                  "overflow-x-auto rounded-2xl bg-black/80 p-4 text-xs text-white/90",
                  "border border-white/10 max-h-[300px] overflow-y-auto"
                )}
              >
                <code>{allThemesExport.content.substring(0, 1500)}...</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
