import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navItems } from "@/components/site/site-data";
import { Wand2 } from "lucide-react";

export function SiteHeader() {
  return (
    <header>
      <div className="rounded-3xl border border-border/40 bg-background/50 px-3 py-3 sm:rounded-full sm:px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="glass" className="gap-2">
              <Wand2 className="h-3 w-3" /> Gradient Forge
            </Badge>
            <span className="hidden text-xs text-muted-foreground md:inline">
              Nitro-inspired theming studio
            </span>
          </div>
          <span className="text-xs text-muted-foreground md:hidden">
            Nitro-inspired theming studio
          </span>
          <nav className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:justify-end sm:overflow-visible sm:px-0 sm:pb-0">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="shrink-0 whitespace-nowrap"
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
