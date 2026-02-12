"use client";

import {
  type ColorMode,
  type ThemeId,
  MEMORY_LANE_THEME,
  NITRO_ALL_THEMES,
  NITRO_PUBLIC_THEMES,
  applyTheme,
  defaultColorMode,
  defaultTheme,
  getStoredColorMode,
  getStoredTheme,
  persistTourProgress,
  publicThemeIdSet,
  publicThemeIds,
  readTourProgress,
} from "@/components/theme/theme-engine";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeContextValue = {
  themeId: ThemeId;
  colorMode: ColorMode;
  availableThemes: typeof NITRO_ALL_THEMES;
  viewedThemeIds: string[];
  memoryLaneUnlocked: boolean;
  remainingForUnlock: number;
  setThemeId: (themeId: ThemeId) => void;
  setColorMode: (mode: ColorMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeId, setThemeIdState] = useState<ThemeId>(defaultTheme);
  const [colorMode, setColorModeState] = useState<ColorMode>(defaultColorMode);
  const [viewedThemeIds, setViewedThemeIds] = useState<string[]>([]);
  const [memoryLaneUnlocked, setMemoryLaneUnlocked] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const storedMode = getStoredColorMode();
    const tour = readTourProgress();

    setThemeIdState(storedTheme);
    setColorModeState(storedMode);
    setViewedThemeIds(tour.viewedThemeIds);
    setMemoryLaneUnlocked(tour.memoryLaneUnlocked);
    applyTheme(storedTheme, storedMode);
  }, []);

  useEffect(() => {
    applyTheme(themeId, colorMode);
  }, [themeId, colorMode]);

  const setThemeId = (nextTheme: ThemeId) => {
    const isPublic = publicThemeIdSet.has(nextTheme);
    const nextViewedThemeIds = isPublic
      ? Array.from(new Set([...viewedThemeIds, nextTheme]))
      : viewedThemeIds;

    const hasCompletedTour = publicThemeIds.every((id) =>
      nextViewedThemeIds.includes(id),
    );
    const nextMemoryLaneUnlocked = memoryLaneUnlocked || hasCompletedTour;

    setThemeIdState(nextTheme);
    setViewedThemeIds(nextViewedThemeIds);
    setMemoryLaneUnlocked(nextMemoryLaneUnlocked);
    persistTourProgress({
      viewedThemeIds: nextViewedThemeIds,
      memoryLaneUnlocked: nextMemoryLaneUnlocked,
    });
  };

  const setColorMode = (mode: ColorMode) => {
    setColorModeState(mode);
  };

  const availableThemes = useMemo(
    () => (memoryLaneUnlocked ? NITRO_ALL_THEMES : NITRO_PUBLIC_THEMES),
    [memoryLaneUnlocked],
  );

  const remainingForUnlock = useMemo(() => {
    const remaining = publicThemeIds.length - viewedThemeIds.length;
    return Math.max(0, remaining);
  }, [viewedThemeIds]);

  useEffect(() => {
    if (themeId === MEMORY_LANE_THEME.id && !memoryLaneUnlocked) {
      setMemoryLaneUnlocked(true);
    }
  }, [themeId, memoryLaneUnlocked]);

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        colorMode,
        availableThemes: availableThemes as typeof NITRO_ALL_THEMES,
        viewedThemeIds,
        memoryLaneUnlocked,
        remainingForUnlock,
        setThemeId,
        setColorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return ctx;
};
