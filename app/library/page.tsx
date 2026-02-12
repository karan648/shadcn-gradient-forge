import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { ComponentShowcase } from "@/components/site/component-showcase";

export default function LibraryPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-12 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteHeader />

        <div className="rounded-3xl border border-border/40 bg-background/50 p-6 shadow-[0_0_80px_hsl(var(--primary)_/_0.12)]">
          <div className="flex flex-col gap-3">
            <Badge variant="glass">Component Library</Badge>
            <h1 className="text-3xl font-semibold">Premium Shadcn Components</h1>
            <p className="max-w-3xl text-sm text-muted-foreground">
              High-quality component packs with live preview, full source files, and one-click copy for rapid
              integration into your own theme system.
            </p>
          </div>
        </div>

        <ComponentShowcase />
      </section>
    </main>
  );
}
