import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MEMORY_LANE_THEME, NITRO_PUBLIC_THEMES } from "@/components/theme/theme-engine";

const galleryThemes = [...NITRO_PUBLIC_THEMES, MEMORY_LANE_THEME];

export default function GalleryPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-12 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteHeader />

        <div className="flex flex-col gap-3">
          <Badge variant="glass">Gallery</Badge>
          <h1 className="text-3xl font-semibold">Theme Gallery</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Preview every gradient preset with consistent shadcn surfaces. Use these palettes as-is or remix them
            to match your brand.
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">All Presets</h2>
              <p className="text-sm text-muted-foreground">
                Public Nitro gradients plus the secret Memory Lane unlock.
              </p>
            </div>
            <Badge variant="glass">{galleryThemes.length} presets</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryThemes.map((theme) => (
              <Card key={theme.id} className="overflow-hidden border-border/50 bg-background/60">
                <div className="h-28" style={{ backgroundImage: theme.preview }} />
                <CardContent className="flex items-center justify-between gap-3 py-4">
                  <div>
                    <p className="text-sm font-semibold">{theme.label}</p>
                    <p className="text-xs text-muted-foreground">{theme.id}</p>
                  </div>
                  {theme.id === MEMORY_LANE_THEME.id ? (
                    <Badge variant="outline">Secret</Badge>
                  ) : (
                    <Badge variant="glass">Public</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </section>
    </main>
  );
}
