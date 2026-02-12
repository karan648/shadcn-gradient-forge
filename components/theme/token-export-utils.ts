// Token Export Utilities - Comprehensive export format generators
import { NITRO_ALL_THEMES, type ThemeId } from "./theme-engine";

// Token definitions for each theme
const themeTokens: Record<string, Record<string, string>> = {
  "theme-nitro-mint-apple": {
    "--background": "160 45% 18%",
    "--foreground": "150 40% 95%",
    "--card": "160 40% 20%",
    "--card-foreground": "150 40% 95%",
    "--popover": "160 40% 20%",
    "--popover-foreground": "150 40% 95%",
    "--primary": "145 50% 55%",
    "--primary-foreground": "160 40% 10%",
    "--secondary": "100 45% 68%",
    "--secondary-foreground": "160 40% 10%",
    "--muted": "160 35% 25%",
    "--muted-foreground": "150 30% 70%",
    "--accent": "100 45% 68%",
    "--accent-foreground": "160 40% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "160 30% 30%",
    "--input": "160 30% 30%",
    "--ring": "145 50% 55%",
    "--chart-1": "145 50% 55%",
    "--chart-2": "100 45% 68%",
    "--chart-3": "75 60% 80%",
    "--chart-4": "120 50% 60%",
    "--chart-5": "160 40% 40%",
    "--sidebar-background": "160 45% 16%",
    "--sidebar-foreground": "150 40% 95%",
    "--sidebar-primary": "145 50% 55%",
    "--sidebar-primary-foreground": "160 40% 10%",
    "--sidebar-accent": "160 35% 25%",
    "--sidebar-accent-foreground": "150 40% 95%",
    "--sidebar-border": "160 30% 30%",
    "--sidebar-ring": "145 50% 55%",
    "--app-surface-tint": "hsl(145 50% 55% / 0.1)",
  },
  "theme-nitro-citrus-sherbert": {
    "--background": "25 70% 15%",
    "--foreground": "35 60% 95%",
    "--card": "25 65% 18%",
    "--card-foreground": "35 60% 95%",
    "--popover": "25 65% 18%",
    "--popover-foreground": "35 60% 95%",
    "--primary": "25 80% 55%",
    "--primary-foreground": "25 70% 10%",
    "--secondary": "45 85% 65%",
    "--secondary-foreground": "25 70% 10%",
    "--muted": "25 50% 25%",
    "--muted-foreground": "35 40% 70%",
    "--accent": "55 90% 75%",
    "--accent-foreground": "25 70% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "25 45% 30%",
    "--input": "25 45% 30%",
    "--ring": "25 80% 55%",
    "--chart-1": "25 80% 55%",
    "--chart-2": "45 85% 65%",
    "--chart-3": "55 90% 75%",
    "--chart-4": "15 70% 50%",
    "--chart-5": "35 75% 60%",
    "--sidebar-background": "25 70% 13%",
    "--sidebar-foreground": "35 60% 95%",
    "--sidebar-primary": "25 80% 55%",
    "--sidebar-primary-foreground": "25 70% 10%",
    "--sidebar-accent": "25 50% 25%",
    "--sidebar-accent-foreground": "35 60% 95%",
    "--sidebar-border": "25 45% 30%",
    "--sidebar-ring": "25 80% 55%",
    "--app-surface-tint": "hsl(25 80% 55% / 0.1)",
  },
  "theme-nitro-retro-raincloud": {
    "--background": "215 25% 20%",
    "--foreground": "210 30% 95%",
    "--card": "215 22% 23%",
    "--card-foreground": "210 30% 95%",
    "--popover": "215 22% 23%",
    "--popover-foreground": "210 30% 95%",
    "--primary": "210 25% 55%",
    "--primary-foreground": "215 25% 15%",
    "--secondary": "210 20% 65%",
    "--secondary-foreground": "215 25% 15%",
    "--muted": "215 20% 30%",
    "--muted-foreground": "210 20% 70%",
    "--accent": "210 20% 65%",
    "--accent-foreground": "215 25% 15%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "215 20% 35%",
    "--input": "215 20% 35%",
    "--ring": "210 25% 55%",
    "--chart-1": "210 25% 55%",
    "--chart-2": "210 20% 65%",
    "--chart-3": "210 15% 75%",
    "--chart-4": "215 20% 45%",
    "--chart-5": "215 25% 35%",
    "--sidebar-background": "215 25% 18%",
    "--sidebar-foreground": "210 30% 95%",
    "--sidebar-primary": "210 25% 55%",
    "--sidebar-primary-foreground": "215 25% 15%",
    "--sidebar-accent": "215 20% 30%",
    "--sidebar-accent-foreground": "210 30% 95%",
    "--sidebar-border": "215 20% 35%",
    "--sidebar-ring": "210 25% 55%",
    "--app-surface-tint": "hsl(210 25% 55% / 0.1)",
  },
  "theme-nitro-hanami": {
    "--background": "330 30% 20%",
    "--foreground": "330 30% 95%",
    "--card": "330 25% 23%",
    "--card-foreground": "330 30% 95%",
    "--popover": "330 25% 23%",
    "--popover-foreground": "330 30% 95%",
    "--primary": "330 40% 55%",
    "--primary-foreground": "330 30% 10%",
    "--secondary": "340 45% 65%",
    "--secondary-foreground": "330 30% 10%",
    "--muted": "330 20% 30%",
    "--muted-foreground": "330 25% 70%",
    "--accent": "350 50% 75%",
    "--accent-foreground": "330 30% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "330 20% 35%",
    "--input": "330 20% 35%",
    "--ring": "330 40% 55%",
    "--chart-1": "330 40% 55%",
    "--chart-2": "340 45% 65%",
    "--chart-3": "350 50% 75%",
    "--chart-4": "320 35% 45%",
    "--chart-5": "340 30% 35%",
    "--sidebar-background": "330 30% 18%",
    "--sidebar-foreground": "330 30% 95%",
    "--sidebar-primary": "330 40% 55%",
    "--sidebar-primary-foreground": "330 30% 10%",
    "--sidebar-accent": "330 20% 30%",
    "--sidebar-accent-foreground": "330 30% 95%",
    "--sidebar-border": "330 20% 35%",
    "--sidebar-ring": "330 40% 55%",
    "--app-surface-tint": "hsl(330 40% 55% / 0.1)",
  },
  "theme-nitro-sunrise": {
    "--background": "350 50% 18%",
    "--foreground": "30 60% 95%",
    "--card": "350 45% 21%",
    "--card-foreground": "30 60% 95%",
    "--popover": "350 45% 21%",
    "--popover-foreground": "30 60% 95%",
    "--primary": "355 75% 60%",
    "--primary-foreground": "350 50% 10%",
    "--secondary": "25 85% 65%",
    "--secondary-foreground": "350 50% 10%",
    "--muted": "350 30% 28%",
    "--muted-foreground": "30 40% 75%",
    "--accent": "45 90% 73%",
    "--accent-foreground": "350 50% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "350 25% 35%",
    "--input": "350 25% 35%",
    "--ring": "355 75% 60%",
    "--chart-1": "355 75% 60%",
    "--chart-2": "25 85% 65%",
    "--chart-3": "45 90% 73%",
    "--chart-4": "340 60% 50%",
    "--chart-5": "15 70% 58%",
    "--sidebar-background": "350 50% 16%",
    "--sidebar-foreground": "30 60% 95%",
    "--sidebar-primary": "355 75% 60%",
    "--sidebar-primary-foreground": "350 50% 10%",
    "--sidebar-accent": "350 30% 28%",
    "--sidebar-accent-foreground": "30 60% 95%",
    "--sidebar-border": "350 25% 35%",
    "--sidebar-ring": "355 75% 60%",
    "--app-surface-tint": "hsl(355 75% 60% / 0.1)",
  },
  "theme-nitro-cotton-candy": {
    "--background": "220 50% 20%",
    "--foreground": "220 40% 95%",
    "--card": "220 45% 23%",
    "--card-foreground": "220 40% 95%",
    "--popover": "220 45% 23%",
    "--popover-foreground": "220 40% 95%",
    "--primary": "220 70% 65%",
    "--primary-foreground": "220 50% 10%",
    "--secondary": "270 60% 70%",
    "--secondary-foreground": "220 50% 10%",
    "--muted": "220 30% 30%",
    "--muted-foreground": "220 30% 75%",
    "--accent": "330 65% 75%",
    "--accent-foreground": "220 50% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "220 25% 35%",
    "--input": "220 25% 35%",
    "--ring": "220 70% 65%",
    "--chart-1": "220 70% 65%",
    "--chart-2": "270 60% 70%",
    "--chart-3": "330 65% 75%",
    "--chart-4": "200 60% 55%",
    "--chart-5": "280 50% 45%",
    "--sidebar-background": "220 50% 18%",
    "--sidebar-foreground": "220 40% 95%",
    "--sidebar-primary": "220 70% 65%",
    "--sidebar-primary-foreground": "220 50% 10%",
    "--sidebar-accent": "220 30% 30%",
    "--sidebar-accent-foreground": "220 40% 95%",
    "--sidebar-border": "220 25% 35%",
    "--sidebar-ring": "220 70% 65%",
    "--app-surface-tint": "hsl(220 70% 65% / 0.1)",
  },
  "theme-nitro-lofi-vibes": {
    "--background": "230 25% 18%",
    "--foreground": "230 20% 95%",
    "--card": "230 22% 21%",
    "--card-foreground": "230 20% 95%",
    "--popover": "230 22% 21%",
    "--popover-foreground": "230 20% 95%",
    "--primary": "230 25% 55%",
    "--primary-foreground": "230 25% 10%",
    "--secondary": "260 20% 60%",
    "--secondary-foreground": "230 25% 10%",
    "--muted": "230 15% 28%",
    "--muted-foreground": "230 15% 70%",
    "--accent": "280 20% 55%",
    "--accent-foreground": "230 25% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "230 15% 33%",
    "--input": "230 15% 33%",
    "--ring": "230 25% 55%",
    "--chart-1": "230 25% 55%",
    "--chart-2": "260 20% 60%",
    "--chart-3": "280 20% 55%",
    "--chart-4": "240 20% 45%",
    "--chart-5": "250 20% 35%",
    "--sidebar-background": "230 25% 16%",
    "--sidebar-foreground": "230 20% 95%",
    "--sidebar-primary": "230 25% 55%",
    "--sidebar-primary-foreground": "230 25% 10%",
    "--sidebar-accent": "230 15% 28%",
    "--sidebar-accent-foreground": "230 20% 95%",
    "--sidebar-border": "230 15% 33%",
    "--sidebar-ring": "230 25% 55%",
    "--app-surface-tint": "hsl(230 25% 55% / 0.1)",
  },
  "theme-nitro-desert-khaki": {
    "--background": "35 25% 18%",
    "--foreground": "35 30% 95%",
    "--card": "35 22% 21%",
    "--card-foreground": "35 30% 95%",
    "--popover": "35 22% 21%",
    "--popover-foreground": "35 30% 95%",
    "--primary": "35 25% 50%",
    "--primary-foreground": "35 25% 10%",
    "--secondary": "40 20% 58%",
    "--secondary-foreground": "35 25% 10%",
    "--muted": "35 15% 28%",
    "--muted-foreground": "35 20% 70%",
    "--accent": "45 25% 60%",
    "--accent-foreground": "35 25% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "35 15% 33%",
    "--input": "35 15% 33%",
    "--ring": "35 25% 50%",
    "--chart-1": "35 25% 50%",
    "--chart-2": "40 20% 58%",
    "--chart-3": "45 25% 60%",
    "--chart-4": "30 20% 42%",
    "--chart-5": "38 18% 32%",
    "--sidebar-background": "35 25% 16%",
    "--sidebar-foreground": "35 30% 95%",
    "--sidebar-primary": "35 25% 50%",
    "--sidebar-primary-foreground": "35 25% 10%",
    "--sidebar-accent": "35 15% 28%",
    "--sidebar-accent-foreground": "35 30% 95%",
    "--sidebar-border": "35 15% 33%",
    "--sidebar-ring": "35 25% 50%",
    "--app-surface-tint": "hsl(35 25% 50% / 0.1)",
  },
  "theme-nitro-sunset": {
    "--background": "320 40% 15%",
    "--foreground": "25 60% 95%",
    "--card": "320 35% 18%",
    "--card-foreground": "25 60% 95%",
    "--popover": "320 35% 18%",
    "--popover-foreground": "25 60% 95%",
    "--primary": "335 60% 50%",
    "--primary-foreground": "320 40% 10%",
    "--secondary": "20 70% 55%",
    "--secondary-foreground": "320 40% 10%",
    "--muted": "320 25% 25%",
    "--muted-foreground": "25 40% 75%",
    "--accent": "25 85% 62%",
    "--accent-foreground": "320 40% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "320 20% 32%",
    "--input": "320 20% 32%",
    "--ring": "335 60% 50%",
    "--chart-1": "335 60% 50%",
    "--chart-2": "20 70% 55%",
    "--chart-3": "25 85% 62%",
    "--chart-4": "340 50% 45%",
    "--chart-5": "10 60% 50%",
    "--sidebar-background": "320 40% 13%",
    "--sidebar-foreground": "25 60% 95%",
    "--sidebar-primary": "335 60% 50%",
    "--sidebar-primary-foreground": "320 40% 10%",
    "--sidebar-accent": "320 25% 25%",
    "--sidebar-accent-foreground": "25 60% 95%",
    "--sidebar-border": "320 20% 32%",
    "--sidebar-ring": "335 60% 50%",
    "--app-surface-tint": "hsl(335 60% 50% / 0.1)",
  },
  "theme-nitro-chroma-glow": {
    "--background": "240 60% 15%",
    "--foreground": "240 40% 95%",
    "--card": "240 55% 18%",
    "--card-foreground": "240 40% 95%",
    "--popover": "240 55% 18%",
    "--popover-foreground": "240 40% 95%",
    "--primary": "235 100% 60%",
    "--primary-foreground": "240 60% 10%",
    "--secondary": "280 95% 55%",
    "--secondary-foreground": "240 60% 10%",
    "--muted": "240 30% 25%",
    "--muted-foreground": "240 25% 75%",
    "--accent": "195 100% 50%",
    "--accent-foreground": "240 60% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "240 25% 32%",
    "--input": "240 25% 32%",
    "--ring": "235 100% 60%",
    "--chart-1": "235 100% 60%",
    "--chart-2": "280 95% 55%",
    "--chart-3": "195 100% 50%",
    "--chart-4": "260 80% 50%",
    "--chart-5": "220 70% 45%",
    "--sidebar-background": "240 60% 13%",
    "--sidebar-foreground": "240 40% 95%",
    "--sidebar-primary": "235 100% 60%",
    "--sidebar-primary-foreground": "240 60% 10%",
    "--sidebar-accent": "240 30% 25%",
    "--sidebar-accent-foreground": "240 40% 95%",
    "--sidebar-border": "240 25% 32%",
    "--sidebar-ring": "235 100% 60%",
    "--app-surface-tint": "hsl(235 100% 60% / 0.1)",
  },
  "theme-nitro-forest": {
    "--background": "150 40% 12%",
    "--foreground": "140 30% 95%",
    "--card": "150 35% 15%",
    "--card-foreground": "140 30% 95%",
    "--popover": "150 35% 15%",
    "--popover-foreground": "140 30% 95%",
    "--primary": "150 45% 45%",
    "--primary-foreground": "150 40% 10%",
    "--secondary": "100 40% 55%",
    "--secondary-foreground": "150 40% 10%",
    "--muted": "150 25% 22%",
    "--muted-foreground": "140 20% 70%",
    "--accent": "85 45% 52%",
    "--accent-foreground": "150 40% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "150 20% 28%",
    "--input": "150 20% 28%",
    "--ring": "150 45% 45%",
    "--chart-1": "150 45% 45%",
    "--chart-2": "100 40% 55%",
    "--chart-3": "85 45% 52%",
    "--chart-4": "120 40% 40%",
    "--chart-5": "160 35% 30%",
    "--sidebar-background": "150 40% 10%",
    "--sidebar-foreground": "140 30% 95%",
    "--sidebar-primary": "150 45% 45%",
    "--sidebar-primary-foreground": "150 40% 10%",
    "--sidebar-accent": "150 25% 22%",
    "--sidebar-accent-foreground": "140 30% 95%",
    "--sidebar-border": "150 20% 28%",
    "--sidebar-ring": "150 45% 45%",
    "--app-surface-tint": "hsl(150 45% 45% / 0.1)",
  },
  "theme-nitro-crimson": {
    "--background": "345 60% 8%",
    "--foreground": "345 40% 95%",
    "--card": "345 55% 11%",
    "--card-foreground": "345 40% 95%",
    "--popover": "345 55% 11%",
    "--popover-foreground": "345 40% 95%",
    "--primary": "350 65% 45%",
    "--primary-foreground": "345 60% 98%",
    "--secondary": "350 50% 55%",
    "--secondary-foreground": "345 60% 98%",
    "--muted": "345 30% 18%",
    "--muted-foreground": "345 25% 70%",
    "--accent": "355 55% 60%",
    "--accent-foreground": "345 60% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "345 25% 25%",
    "--input": "345 25% 25%",
    "--ring": "350 65% 45%",
    "--chart-1": "350 65% 45%",
    "--chart-2": "350 50% 55%",
    "--chart-3": "355 55% 60%",
    "--chart-4": "340 55% 40%",
    "--chart-5": "0 50% 30%",
    "--sidebar-background": "345 60% 6%",
    "--sidebar-foreground": "345 40% 95%",
    "--sidebar-primary": "350 65% 45%",
    "--sidebar-primary-foreground": "345 60% 98%",
    "--sidebar-accent": "345 30% 18%",
    "--sidebar-accent-foreground": "345 40% 95%",
    "--sidebar-border": "345 25% 25%",
    "--sidebar-ring": "350 65% 45%",
    "--app-surface-tint": "hsl(350 65% 45% / 0.1)",
  },
  "theme-nitro-midnight-blurple": {
    "--background": "235 26% 11%",
    "--foreground": "235 30% 95%",
    "--card": "235 22% 12%",
    "--card-foreground": "235 30% 95%",
    "--popover": "235 22% 12%",
    "--popover-foreground": "235 30% 95%",
    "--primary": "241 92% 70%",
    "--primary-foreground": "235 26% 98%",
    "--secondary": "210 92% 65%",
    "--secondary-foreground": "235 26% 98%",
    "--muted": "235 20% 20%",
    "--muted-foreground": "235 20% 72%",
    "--accent": "210 92% 65%",
    "--accent-foreground": "235 26% 98%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "235 18% 25%",
    "--input": "235 18% 25%",
    "--ring": "241 92% 70%",
    "--chart-1": "241 92% 70%",
    "--chart-2": "210 92% 65%",
    "--chart-3": "251 92% 62%",
    "--chart-4": "220 80% 55%",
    "--chart-5": "260 70% 45%",
    "--sidebar-background": "235 26% 9%",
    "--sidebar-foreground": "235 30% 95%",
    "--sidebar-primary": "241 92% 70%",
    "--sidebar-primary-foreground": "235 26% 98%",
    "--sidebar-accent": "235 20% 20%",
    "--sidebar-accent-foreground": "235 30% 95%",
    "--sidebar-border": "235 18% 25%",
    "--sidebar-ring": "241 92% 70%",
    "--app-surface-tint": "hsl(241 92% 70% / 0.1)",
  },
  "theme-nitro-mars": {
    "--background": "10 45% 12%",
    "--foreground": "20 40% 95%",
    "--card": "10 40% 15%",
    "--card-foreground": "20 40% 95%",
    "--popover": "10 40% 15%",
    "--popover-foreground": "20 40% 95%",
    "--primary": "12 55% 55%",
    "--primary-foreground": "10 45% 10%",
    "--secondary": "20 50% 45%",
    "--secondary-foreground": "10 45% 10%",
    "--muted": "10 25% 22%",
    "--muted-foreground": "20 25% 72%",
    "--accent": "25 55% 50%",
    "--accent-foreground": "10 45% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "10 20% 28%",
    "--input": "10 20% 28%",
    "--ring": "12 55% 55%",
    "--chart-1": "12 55% 55%",
    "--chart-2": "20 50% 45%",
    "--chart-3": "25 55% 50%",
    "--chart-4": "5 50% 40%",
    "--chart-5": "15 45% 32%",
    "--sidebar-background": "10 45% 10%",
    "--sidebar-foreground": "20 40% 95%",
    "--sidebar-primary": "12 55% 55%",
    "--sidebar-primary-foreground": "10 45% 10%",
    "--sidebar-accent": "10 25% 22%",
    "--sidebar-accent-foreground": "20 40% 95%",
    "--sidebar-border": "10 20% 28%",
    "--sidebar-ring": "12 55% 55%",
    "--app-surface-tint": "hsl(12 55% 55% / 0.1)",
  },
  "theme-nitro-dusk": {
    "--background": "260 30% 15%",
    "--foreground": "260 30% 95%",
    "--card": "260 25% 18%",
    "--card-foreground": "260 30% 95%",
    "--popover": "260 25% 18%",
    "--popover-foreground": "260 30% 95%",
    "--primary": "270 35% 60%",
    "--primary-foreground": "260 30% 10%",
    "--secondary": "280 30% 50%",
    "--secondary-foreground": "260 30% 10%",
    "--muted": "260 20% 25%",
    "--muted-foreground": "260 20% 72%",
    "--accent": "290 35% 55%",
    "--accent-foreground": "260 30% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "260 18% 32%",
    "--input": "260 18% 32%",
    "--ring": "270 35% 60%",
    "--chart-1": "270 35% 60%",
    "--chart-2": "280 30% 50%",
    "--chart-3": "290 35% 55%",
    "--chart-4": "260 30% 45%",
    "--chart-5": "250 25% 35%",
    "--sidebar-background": "260 30% 13%",
    "--sidebar-foreground": "260 30% 95%",
    "--sidebar-primary": "270 35% 60%",
    "--sidebar-primary-foreground": "260 30% 10%",
    "--sidebar-accent": "260 20% 25%",
    "--sidebar-accent-foreground": "260 30% 95%",
    "--sidebar-border": "260 18% 32%",
    "--sidebar-ring": "270 35% 60%",
    "--app-surface-tint": "hsl(270 35% 60% / 0.1)",
  },
  "theme-nitro-under-the-sea": {
    "--background": "200 50% 12%",
    "--foreground": "190 40% 95%",
    "--card": "200 45% 15%",
    "--card-foreground": "190 40% 95%",
    "--popover": "200 45% 15%",
    "--popover-foreground": "190 40% 95%",
    "--primary": "190 50% 48%",
    "--primary-foreground": "200 50% 10%",
    "--secondary": "180 45% 40%",
    "--secondary-foreground": "200 50% 10%",
    "--muted": "200 30% 22%",
    "--muted-foreground": "190 25% 72%",
    "--accent": "175 50% 35%",
    "--accent-foreground": "200 50% 98%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "200 25% 28%",
    "--input": "200 25% 28%",
    "--ring": "190 50% 48%",
    "--chart-1": "190 50% 48%",
    "--chart-2": "180 45% 40%",
    "--chart-3": "175 50% 35%",
    "--chart-4": "210 45% 42%",
    "--chart-5": "195 40% 32%",
    "--sidebar-background": "200 50% 10%",
    "--sidebar-foreground": "190 40% 95%",
    "--sidebar-primary": "190 50% 48%",
    "--sidebar-primary-foreground": "200 50% 10%",
    "--sidebar-accent": "200 30% 22%",
    "--sidebar-accent-foreground": "190 40% 95%",
    "--sidebar-border": "200 25% 28%",
    "--sidebar-ring": "190 50% 48%",
    "--app-surface-tint": "hsl(190 50% 48% / 0.1)",
  },
  "theme-nitro-retro-storm": {
    "--background": "210 25% 18%",
    "--foreground": "210 20% 95%",
    "--card": "210 22% 21%",
    "--card-foreground": "210 20% 95%",
    "--popover": "210 22% 21%",
    "--popover-foreground": "210 20% 95%",
    "--primary": "210 20% 55%",
    "--primary-foreground": "210 25% 10%",
    "--secondary": "210 15% 60%",
    "--secondary-foreground": "210 25% 10%",
    "--muted": "210 15% 28%",
    "--muted-foreground": "210 15% 70%",
    "--accent": "210 15% 50%",
    "--accent-foreground": "210 25% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "210 15% 33%",
    "--input": "210 15% 33%",
    "--ring": "210 20% 55%",
    "--chart-1": "210 20% 55%",
    "--chart-2": "210 15% 60%",
    "--chart-3": "210 15% 50%",
    "--chart-4": "200 15% 45%",
    "--chart-5": "220 15% 35%",
    "--sidebar-background": "210 25% 16%",
    "--sidebar-foreground": "210 20% 95%",
    "--sidebar-primary": "210 20% 55%",
    "--sidebar-primary-foreground": "210 25% 10%",
    "--sidebar-accent": "210 15% 28%",
    "--sidebar-accent-foreground": "210 20% 95%",
    "--sidebar-border": "210 15% 33%",
    "--sidebar-ring": "210 20% 55%",
    "--app-surface-tint": "hsl(210 20% 55% / 0.1)",
  },
  "theme-nitro-neon-nights": {
    "--background": "245 60% 8%",
    "--foreground": "260 40% 95%",
    "--card": "245 55% 11%",
    "--card-foreground": "260 40% 95%",
    "--popover": "245 55% 11%",
    "--popover-foreground": "260 40% 95%",
    "--primary": "290 90% 55%",
    "--primary-foreground": "245 60% 98%",
    "--secondary": "195 100% 45%",
    "--secondary-foreground": "245 60% 98%",
    "--muted": "245 30% 18%",
    "--muted-foreground": "260 25% 72%",
    "--accent": "195 100% 45%",
    "--accent-foreground": "245 60% 98%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "245 25% 25%",
    "--input": "245 25% 25%",
    "--ring": "290 90% 55%",
    "--chart-1": "290 90% 55%",
    "--chart-2": "195 100% 45%",
    "--chart-3": "260 80% 50%",
    "--chart-4": "320 80% 55%",
    "--chart-5": "180 80% 45%",
    "--sidebar-background": "245 60% 6%",
    "--sidebar-foreground": "260 40% 95%",
    "--sidebar-primary": "290 90% 55%",
    "--sidebar-primary-foreground": "245 60% 98%",
    "--sidebar-accent": "245 30% 18%",
    "--sidebar-accent-foreground": "260 40% 95%",
    "--sidebar-border": "245 25% 25%",
    "--sidebar-ring": "290 90% 55%",
    "--app-surface-tint": "hsl(290 90% 55% / 0.1)",
  },
  "theme-nitro-strawberry-lemonade": {
    "--background": "340 55% 18%",
    "--foreground": "40 70% 95%",
    "--card": "340 50% 21%",
    "--card-foreground": "40 70% 95%",
    "--popover": "340 50% 21%",
    "--popover-foreground": "40 70% 95%",
    "--primary": "345 70% 50%",
    "--primary-foreground": "340 55% 98%",
    "--secondary": "45 80% 58%",
    "--secondary-foreground": "340 55% 10%",
    "--muted": "340 30% 28%",
    "--muted-foreground": "40 40% 75%",
    "--accent": "45 80% 58%",
    "--accent-foreground": "340 55% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "340 25% 35%",
    "--input": "340 25% 35%",
    "--ring": "345 70% 50%",
    "--chart-1": "345 70% 50%",
    "--chart-2": "45 80% 58%",
    "--chart-3": "340 55% 45%",
    "--chart-4": "20 70% 50%",
    "--chart-5": "55 75% 55%",
    "--sidebar-background": "340 55% 16%",
    "--sidebar-foreground": "40 70% 95%",
    "--sidebar-primary": "345 70% 50%",
    "--sidebar-primary-foreground": "340 55% 98%",
    "--sidebar-accent": "340 30% 28%",
    "--sidebar-accent-foreground": "40 70% 95%",
    "--sidebar-border": "340 25% 35%",
    "--sidebar-ring": "345 70% 50%",
    "--app-surface-tint": "hsl(345 70% 50% / 0.1)",
  },
  "theme-nitro-aurora": {
    "--background": "190 50% 12%",
    "--foreground": "160 50% 95%",
    "--card": "190 45% 15%",
    "--card-foreground": "160 50% 95%",
    "--popover": "190 45% 15%",
    "--popover-foreground": "160 50% 95%",
    "--primary": "175 60% 52%",
    "--primary-foreground": "190 50% 10%",
    "--secondary": "145 45% 55%",
    "--secondary-foreground": "190 50% 10%",
    "--muted": "190 30% 22%",
    "--muted-foreground": "160 30% 72%",
    "--accent": "100 45% 55%",
    "--accent-foreground": "190 50% 98%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "190 25% 28%",
    "--input": "190 25% 28%",
    "--ring": "175 60% 52%",
    "--chart-1": "175 60% 52%",
    "--chart-2": "145 45% 55%",
    "--chart-3": "100 45% 55%",
    "--chart-4": "160 50% 42%",
    "--chart-5": "200 45% 35%",
    "--sidebar-background": "190 50% 10%",
    "--sidebar-foreground": "160 50% 95%",
    "--sidebar-primary": "175 60% 52%",
    "--sidebar-primary-foreground": "190 50% 10%",
    "--sidebar-accent": "190 30% 22%",
    "--sidebar-accent-foreground": "160 50% 95%",
    "--sidebar-border": "190 25% 28%",
    "--sidebar-ring": "175 60% 52%",
    "--app-surface-tint": "hsl(175 60% 52% / 0.1)",
  },
  "theme-nitro-sepia": {
    "--background": "30 25% 12%",
    "--foreground": "35 30% 95%",
    "--card": "30 22% 15%",
    "--card-foreground": "35 30% 95%",
    "--popover": "30 22% 15%",
    "--popover-foreground": "35 30% 95%",
    "--primary": "30 25% 52%",
    "--primary-foreground": "30 25% 10%",
    "--secondary": "35 25% 58%",
    "--secondary-foreground": "30 25% 10%",
    "--muted": "30 15% 22%",
    "--muted-foreground": "35 20% 70%",
    "--accent": "40 30% 55%",
    "--accent-foreground": "30 25% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "30 15% 28%",
    "--input": "30 15% 28%",
    "--ring": "30 25% 52%",
    "--chart-1": "30 25% 52%",
    "--chart-2": "35 25% 58%",
    "--chart-3": "40 30% 55%",
    "--chart-4": "25 20% 42%",
    "--chart-5": "35 20% 32%",
    "--sidebar-background": "30 25% 10%",
    "--sidebar-foreground": "35 30% 95%",
    "--sidebar-primary": "30 25% 52%",
    "--sidebar-primary-foreground": "30 25% 10%",
    "--sidebar-accent": "30 15% 22%",
    "--sidebar-accent-foreground": "35 30% 95%",
    "--sidebar-border": "30 15% 28%",
    "--sidebar-ring": "30 25% 52%",
    "--app-surface-tint": "hsl(30 25% 52% / 0.1)",
  },
  "theme-nitro-memory-lane": {
    "--background": "320 20% 18%",
    "--foreground": "210 20% 90%",
    "--card": "320 18% 21%",
    "--card-foreground": "210 20% 90%",
    "--popover": "320 18% 21%",
    "--popover-foreground": "210 20% 90%",
    "--primary": "280 30% 62%",
    "--primary-foreground": "320 20% 10%",
    "--secondary": "200 25% 55%",
    "--secondary-foreground": "320 20% 10%",
    "--muted": "320 15% 28%",
    "--muted-foreground": "210 15% 68%",
    "--accent": "165 25% 58%",
    "--accent-foreground": "320 20% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    "--border": "320 12% 32%",
    "--input": "320 12% 32%",
    "--ring": "280 30% 62%",
    "--chart-1": "280 30% 62%",
    "--chart-2": "200 25% 55%",
    "--chart-3": "165 25% 58%",
    "--chart-4": "300 25% 48%",
    "--chart-5": "180 20% 42%",
    "--sidebar-background": "320 20% 16%",
    "--sidebar-foreground": "210 20% 90%",
    "--sidebar-primary": "280 30% 62%",
    "--sidebar-primary-foreground": "320 20% 10%",
    "--sidebar-accent": "320 15% 28%",
    "--sidebar-accent-foreground": "210 20% 90%",
    "--sidebar-border": "320 12% 32%",
    "--sidebar-ring": "280 30% 62%",
    "--app-surface-tint": "hsl(280 30% 62% / 0.1)",
  },
};

export type ExportFormat =
  | "css"
  | "scss"
  | "json"
  | "tailwind"
  | "w3c-tokens"
  | "figma-tokens"
  | "css-variables"
  | "html-root";

export interface ExportOptions {
  format: ExportFormat;
  themeId: ThemeId;
  colorMode?: "dark" | "light";
  includeAllThemes?: boolean;
  minimal?: boolean;
}

export interface ExportResult {
  content: string;
  filename: string;
  mimeType: string;
}

export const getThemeTokens = (themeId: ThemeId): Record<string, string> => {
  return themeTokens[themeId] ?? themeTokens["theme-nitro-midnight-blurple"];
};

const getThemeInfo = (themeId: ThemeId) => {
  return NITRO_ALL_THEMES.find((t) => t.id === themeId);
};

const generateAppGradient = (themeId: ThemeId): string => {
  const theme = getThemeInfo(themeId);
  if (!theme) return "";
  
  const tokens = getThemeTokens(themeId);
  const primaryHsl = tokens["--primary"].split(" ").join(", ");
  const accentHsl = tokens["--accent"].split(" ").join(", ");
  const primary = `hsl(${primaryHsl})`;
  const accent = `hsl(${accentHsl})`;
  
  return `radial-gradient(1050px 560px at -10% -20%, ${primary.replace(")", " / 0.3)")}, transparent 60%),
    radial-gradient(920px 520px at 112% 2%, ${accent.replace(")", " / 0.22)")}, transparent 58%),
    linear-gradient(160deg, hsl(${tokens["--background"]}) 0%, hsl(${tokens["--background"]}) 50%, hsl(${tokens["--background"]}) 100%)`;
};

export const generateCSSExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const tokens = getThemeTokens(themeId);
  const theme = getThemeInfo(themeId);
  
  const tokenEntries = Object.entries(tokens);
  const cssVariables = tokenEntries
    .filter(([key]) => key !== "--app-surface-tint")
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");
  
  const appGradient = generateAppGradient(themeId);
  
  const content = `/* Gradient Forge Theme: ${theme?.label ?? themeId} */
/* Color Mode: ${colorMode} */

.${themeId} {
${cssVariables}
  --app-gradient: ${appGradient};
  ${tokens["--app-surface-tint"] ? `--app-surface-tint: ${tokens["--app-surface-tint"]};` : ""}
}

/* Surface Layer Styles */
.bg-card,
.bg-popover,
.bg-sidebar {
  background-color: hsl(var(--background) / 0.34);
  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));
  backdrop-filter: blur(16px);
}`;

  return {
    content,
    filename: `${themeId}-theme.css`,
    mimeType: "text/css",
  };
};

export const generateSCSSExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const tokens = getThemeTokens(themeId);
  const theme = getThemeInfo(themeId);
  
  const tokenEntries = Object.entries(tokens);
  const scssVariables = tokenEntries
    .filter(([key]) => key !== "--app-surface-tint")
    .map(([key, value]) => `$${key.replace("--", "")}: ${value};`)
    .join("\n");
  
  const appGradient = generateAppGradient(themeId);
  
  const content = `// Gradient Forge Theme: ${theme?.label ?? themeId}
// Color Mode: ${colorMode}

${scssVariables}
$app-gradient: ${appGradient};
$app-surface-tint: ${tokens["--app-surface-tint"] ?? "transparent"};

// SCSS Mixins
@mixin surface-layer {
  background-color: hsl($background / 0.34);
  background-image: linear-gradient($app-surface-tint, $app-surface-tint);
  backdrop-filter: blur(16px);
}

// Usage
// .my-card {
//   @include surface-layer;
// }`;

  return {
    content,
    filename: `${themeId}-theme.scss`,
    mimeType: "text/x-scss",
  };
};

export const generateJSONExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const tokens = getThemeTokens(themeId);
  const theme = getThemeInfo(themeId);
  
  const tokenEntries = Object.entries(tokens);
  const colorTokens: Record<string, string> = {};
  
  tokenEntries.forEach(([key, value]) => {
    const tokenName = key.replace("--", "");
    if (key === "--app-surface-tint") {
      colorTokens[tokenName] = value;
    } else {
      colorTokens[tokenName] = `hsl(${value})`;
    }
  });
  
  const exportData = {
    name: theme?.label ?? themeId,
    id: themeId,
    colorMode,
    version: "1.0.0",
    generatedAt: new Date().toISOString(),
    colors: colorTokens,
    gradients: {
      app: generateAppGradient(themeId),
    },
  };

  return {
    content: JSON.stringify(exportData, null, 2),
    filename: `${themeId}-tokens.json`,
    mimeType: "application/json",
  };
};

export const generateTailwindExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const tokens = getThemeTokens(themeId);
  const theme = getThemeInfo(themeId);
  
  const colorEntries = Object.entries(tokens)
    .filter(([key]) => key !== "--app-surface-tint")
    .map(([key, value]) => {
      const name = key.replace("--", "");
      return `      ${name}: "hsl(var(${key}))"`;
    })
    .join(",\n");

  const content = `// Gradient Forge Theme: ${theme?.label ?? themeId}
// Color Mode: ${colorMode}

// Add to your tailwind.config.ts or tailwind.config.js:

import type { Config } from "tailwindcss";

const config: Config = {
  // ... other config
  theme: {
    extend: {
      colors: {
${colorEntries}
      },
      backgroundImage: {
        "app-gradient": "var(--app-gradient)",
      },
    },
  },
};

export default config;

// Don't forget to add the CSS variables to your globals.css!`;

  return {
    content,
    filename: `${themeId}-tailwind.ts`,
    mimeType: "text/typescript",
  };
};

export const generateW3CTokensExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const tokens = getThemeTokens(themeId);
  const theme = getThemeInfo(themeId);
  
  const tokenEntries = Object.entries(tokens);
  
  const w3cTokens: Record<string, unknown> = {
    $schema: "https://design-tokens.github.io/schema/format.json",
    name: theme?.label ?? themeId,
    id: themeId,
    colorMode,
    version: "1.0.0",
    generatedAt: new Date().toISOString(),
  };
  
  const colorTokens: Record<string, { $type: string; $value: string; $description?: string }> = {};
  
  tokenEntries.forEach(([key, value]) => {
    const tokenName = key.replace("--", "").replace(/-/g, ".");
    if (key === "--app-surface-tint") {
      colorTokens[tokenName] = {
        $type: "color",
        $value: value,
        $description: "Surface tint color for glassmorphism effects",
      };
    } else {
      colorTokens[tokenName] = {
        $type: "color",
        $value: `hsl(${value})`,
      };
    }
  });
  
  w3cTokens.colors = colorTokens;
  w3cTokens.gradients = {
    app: {
      $type: "gradient",
      $value: generateAppGradient(themeId),
    },
  };

  return {
    content: JSON.stringify(w3cTokens, null, 2),
    filename: `${themeId}-w3c-tokens.json`,
    mimeType: "application/json",
  };
};

export const generateFigmaTokensExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const tokens = getThemeTokens(themeId);
  const theme = getThemeInfo(themeId);
  
  const tokenEntries = Object.entries(tokens);
  
  const figmaTokens: Record<string, unknown> = {};
  
  const colorTokens: Record<string, { value: string; type: string }> = {};
  
  tokenEntries.forEach(([key, value]) => {
    const tokenName = key.replace("--", "");
    if (key === "--app-surface-tint") {
      colorTokens[tokenName] = {
        value: value,
        type: "color",
      };
    } else {
      colorTokens[tokenName] = {
        value: `hsl(${value})`,
        type: "color",
      };
    }
  });
  
  figmaTokens.colors = colorTokens;
  
  const fullExport = {
    GradientForge: {
      [theme?.label ?? themeId]: figmaTokens,
    },
  };

  return {
    content: JSON.stringify(fullExport, null, 2),
    filename: `${themeId}-figma-tokens.json`,
    mimeType: "application/json",
  };
};

export const generateCSSVariablesExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const tokens = getThemeTokens(themeId);
  const theme = getThemeInfo(themeId);
  
  const tokenEntries = Object.entries(tokens);
  const cssVariables = tokenEntries
    .filter(([key]) => key !== "--app-surface-tint")
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");
  
  const content = `/* Gradient Forge Theme: ${theme?.label ?? themeId} */
/* Color Mode: ${colorMode} */
/* Paste these into your :root or theme class */

${cssVariables}
--app-gradient: ${generateAppGradient(themeId)};
${tokens["--app-surface-tint"] ? `--app-surface-tint: ${tokens["--app-surface-tint"]};` : ""}`;

  return {
    content,
    filename: `${themeId}-variables.css`,
    mimeType: "text/css",
  };
};

export const generateHTMLRootExport = (options: ExportOptions): ExportResult => {
  const { themeId, colorMode = "dark" } = options;
  const theme = getThemeInfo(themeId);
  
  const content = `<!-- Gradient Forge Theme: ${theme?.label ?? themeId} -->
<!-- Add these attributes to your <html> element -->

<html 
  lang="en"
  class="${colorMode} ${themeId}"
  data-theme="${themeId}"
  data-color-mode="${colorMode}"
  suppressHydrationWarning
>
  <!-- Your app content -->
</html>`;

  return {
    content,
    filename: `${themeId}-html-root.html`,
    mimeType: "text/html",
  };
};

export const generateAllThemesCSS = (): ExportResult => {
  const allThemes = NITRO_ALL_THEMES.map((theme) => {
    const tokens = getThemeTokens(theme.id);
    const tokenEntries = Object.entries(tokens);
    const cssVariables = tokenEntries
      .filter(([key]) => key !== "--app-surface-tint")
      .map(([key, value]) => `  ${key}: ${value};`)
      .join("\n");
    
    return `/* ${theme.label} */
.${theme.id} {
${cssVariables}
  --app-surface-tint: ${tokens["--app-surface-tint"] ?? "transparent"};
}`;
  }).join("\n\n");

  return {
    content: `/* Gradient Forge - All Themes CSS */
/* Generated on ${new Date().toISOString()} */

${allThemes}

/* Surface Layer Styles */
.bg-card,
.bg-popover,
.bg-sidebar {
  background-color: hsl(var(--background) / 0.34);
  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));
  backdrop-filter: blur(16px);
}`,
    filename: "gradient-forge-all-themes.css",
    mimeType: "text/css",
  };
};

export const exportTokens = (options: ExportOptions): ExportResult => {
  switch (options.format) {
    case "css":
      return generateCSSExport(options);
    case "scss":
      return generateSCSSExport(options);
    case "json":
      return generateJSONExport(options);
    case "tailwind":
      return generateTailwindExport(options);
    case "w3c-tokens":
      return generateW3CTokensExport(options);
    case "figma-tokens":
      return generateFigmaTokensExport(options);
    case "css-variables":
      return generateCSSVariablesExport(options);
    case "html-root":
      return generateHTMLRootExport(options);
    default:
      return generateCSSExport(options);
  }
};

export const downloadFile = (result: ExportResult): void => {
  const blob = new Blob([result.content], { type: result.mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = result.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const copyToClipboard = async (content: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch {
    return false;
  }
};

export const exportFormats: { value: ExportFormat; label: string; description: string; extension: string }[] = [
  { value: "css", label: "CSS Theme", description: "Complete CSS theme file with all variables", extension: "css" },
  { value: "scss", label: "SCSS", description: "SCSS variables with mixins", extension: "scss" },
  { value: "json", label: "JSON Tokens", description: "Structured JSON with all theme data", extension: "json" },
  { value: "tailwind", label: "Tailwind Config", description: "Ready-to-use Tailwind configuration", extension: "ts" },
  { value: "w3c-tokens", label: "W3C Design Tokens", description: "W3C standard design tokens format", extension: "json" },
  { value: "figma-tokens", label: "Figma Tokens", description: "Figma Tokens plugin compatible format", extension: "json" },
  { value: "css-variables", label: "CSS Variables", description: "Raw CSS variables for :root", extension: "css" },
  { value: "html-root", label: "HTML Root", description: "HTML root element attributes", extension: "html" },
];
