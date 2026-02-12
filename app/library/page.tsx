import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { ComponentShowcase } from "@/components/site/component-showcase";

export default function LibraryPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-12 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteHeader />

        <div className="flex flex-col gap-3">
          <Badge variant="glass">Component Library</Badge>
          <h1 className="text-3xl font-semibold">Premium Shadcn Components</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Each component ships with a live preview and copy-ready source code. Switch tabs to preview or copy
            the full file instantly.
          </p>
        </div>

        <ComponentShowcase />
      </section>
    </main>
  );
}
