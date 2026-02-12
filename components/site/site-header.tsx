import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navItems } from "@/components/site/site-data";
import { Wand2 } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-border/40 bg-background/50 px-4 py-3">
        <div className="flex items-center gap-3">
          <Badge variant="glass" className="gap-2">
            <Wand2 className="h-3 w-3" /> Gradient Forge
          </Badge>
          <span className="text-xs text-muted-foreground">
            Nitro-inspired theming studio
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
