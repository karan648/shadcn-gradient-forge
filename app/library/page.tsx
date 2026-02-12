import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { ComponentShowcase } from "@/components/site/component-showcase";

export default function LibraryPage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-12 sm:px-6 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteHeader />

        <div className="rounded-3xl border border-border/40 bg-background/50 p-4 shadow-[0_0_80px_hsl(var(--primary)_/_0.12)] sm:p-6">
          <div className="flex flex-col gap-3">
            <Badge variant="glass">Component Library</Badge>
            <h1 className="text-2xl font-semibold sm:text-3xl">Premium Shadcn Components</h1>
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
