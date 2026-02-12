"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, Sun, Moon, Palette, Code, Library, Image, FileText, Home, X, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/components/theme/theme-context";
import { NITRO_ALL_THEMES, type ThemeId } from "@/components/theme/theme-engine";

interface CommandItem {
  id: string;
  label: string;
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { themeId, setThemeId, colorMode, setColorMode } = useThemeContext();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle, close]);

  const commands: CommandItem[] = useMemo(() => [
    // Navigation
    {
      id: "nav-home",
      label: "Go to Home",
      shortcut: "H",
      icon: <Home className="h-4 w-4" />,
      action: () => { router.push("/"); close(); },
      category: "Navigation",
    },
    {
      id: "nav-studio",
      label: "Open Studio",
      shortcut: "S",
      icon: <Palette className="h-4 w-4" />,
      action: () => { router.push("/studio"); close(); },
      category: "Navigation",
    },
    {
      id: "nav-gallery",
      label: "View Gallery",
      shortcut: "G",
      icon: <Image className="h-4 w-4" />,
      action: () => { router.push("/gallery"); close(); },
      category: "Navigation",
    },
    {
      id: "nav-library",
      label: "Browse Library",
      shortcut: "L",
      icon: <Library className="h-4 w-4" />,
      action: () => { router.push("/library"); close(); },
      category: "Navigation",
    },
    {
      id: "nav-docs",
      label: "Read Documentation",
      shortcut: "D",
      icon: <FileText className="h-4 w-4" />,
      action: () => { router.push("/docs"); close(); },
      category: "Navigation",
    },
    // Theme
    {
      id: "theme-toggle",
      label: `Switch to ${colorMode === "dark" ? "Light" : "Dark"} Mode`,
      shortcut: "T",
      icon: colorMode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
      action: () => { setColorMode(colorMode === "dark" ? "light" : "dark"); close(); },
      category: "Theme",
    },
    // Export
    {
      id: "export-css",
      label: "Export Theme as CSS",
      icon: <Code className="h-4 w-4" />,
      action: () => { router.push("/studio"); close(); },
      category: "Export",
    },
  ], [router, close, colorMode, setColorMode]);

  // Theme commands
  const themeCommands: CommandItem[] = useMemo(() => 
    NITRO_ALL_THEMES.map((theme) => ({
      id: `theme-${theme.id}`,
      label: `Apply ${theme.label} Theme`,
      icon: <Sparkles className="h-4 w-4" />,
      action: () => { setThemeId(theme.id as ThemeId); close(); },
      category: "Themes",
    }))
  , [setThemeId, close]);

  const allCommands = useMemo(() => [...commands, ...themeCommands], [commands, themeCommands]);

  const filteredCommands = useMemo(() => {
    if (!search.trim()) return allCommands;
    const query = search.toLowerCase();
    return allCommands.filter((cmd) => 
      cmd.label.toLowerCase().includes(query) ||
      cmd.category.toLowerCase().includes(query)
    );
  }, [allCommands, search]);

  const groupedCommands = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    filteredCommands.forEach((cmd) => {
      if (!groups[cmd.category]) groups[cmd.category] = [];
      groups[cmd.category].push(cmd);
    });
    return groups;
  }, [filteredCommands]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={close}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-2xl px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-background/95 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
            {/* Search header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border/50">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search commands, themes, or pages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <div className="flex items-center gap-2">
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono bg-muted rounded-lg border">
                  <Command className="h-3 w-3" /> K
                </kbd>
                <button
                  onClick={close}
                  className="p-2 rounded-full hover:bg-muted/50 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto p-2">
              {Object.entries(groupedCommands).map(([category, items]) => (
                items.length > 0 && (
                  <div key={category} className="mb-2">
                    <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {category}
                    </div>
                    {items.map((cmd) => (
                      <CommandItem key={cmd.id} item={cmd} onSelect={cmd.action} />
                    ))}
                  </div>
                )
              ))}
              
              {filteredCommands.length === 0 && (
                <div className="px-4 py-8 text-center text-muted-foreground">
                  <p>No commands found</p>
                  <p className="text-sm mt-1">Try a different search term</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-border/50 text-xs text-muted-foreground flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded border">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-muted rounded border">↓</kbd>
                  <span className="ml-1">Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded border">Enter</kbd>
                  <span className="ml-1">Select</span>
                </span>
              </div>
              <span>{filteredCommands.length} results</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CommandItem({ item, onSelect }: { item: CommandItem; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left hover:bg-accent hover:text-accent-foreground transition-colors group"
    >
      <span className="text-muted-foreground group-hover:text-accent-foreground">
        {item.icon}
      </span>
      <span className="flex-1 font-medium">{item.label}</span>
      {item.shortcut && (
        <kbd className="px-2 py-0.5 text-xs font-mono bg-muted rounded border group-hover:bg-accent-foreground/10">
          {item.shortcut}
        </kbd>
      )}
    </button>
  );
}
