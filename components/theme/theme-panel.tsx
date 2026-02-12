"use client";

import { useThemeContext } from "@/components/theme/theme-context";
import { MEMORY_LANE_THEME, NITRO_PUBLIC_THEMES } from "@/components/theme/theme-engine";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Lock, Moon, Sun } from "lucide-react";

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

  return (
    <Card className="border-border/50 bg-background/60">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
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
        <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 px-4 py-3">
          <div className="space-y-1">
            <p className="text-sm font-semibold">Color Mode</p>
            <p className="text-xs text-muted-foreground">
              Switch between light and dark surfaces.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Sun className={cn("h-4 w-4", isLight ? "text-foreground" : "text-muted-foreground")} />
            <Switch
              checked={!isLight}
              onCheckedChange={(checked) => setColorMode(checked ? "dark" : "light")}
              label="Toggle dark mode"
            />
            <Moon className={cn("h-4 w-4", !isLight ? "text-foreground" : "text-muted-foreground")} />
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3">
          <div className="flex items-center justify-between">
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

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
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
                <div className="flex items-center justify-between gap-2 px-3 py-3">
                  <div>
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
