import { ThemePanel } from "@/components/theme/theme-panel";
import { StudioCodePanel } from "@/components/theme/studio-code-panel";
import { SiteHeader } from "@/components/site/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const navItems = ["Overview", "Tokens", "Components", "Gallery", "Export"];

export default function StudioPage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-12 sm:px-6 lg:px-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteHeader />

        <div className="flex flex-col gap-3">
          <Badge variant="glass">Studio</Badge>
          <h1 className="text-2xl font-semibold sm:text-3xl">Theme Studio</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Preview every gradient, toggle light or dark mode, and validate how shadcn components react to the
            surface tint layer.
          </p>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <ThemePanel />

          <div className="space-y-6">
            <Card className="border-border/50 bg-background/60">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle>Component Preview</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Shadcn-style elements reacting to gradients in real time.
                    </p>
                  </div>
                  <Badge variant="default" className="shrink-0 gap-1">
                    <Sparkles className="h-3 w-3" /> Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {navItems.map((item, index) => (
                    <Button
                      key={item}
                      variant={index === 0 ? "default" : "ghost"}
                      size="sm"
                      className={cn(index === 0 && "shadow-lg")}
                    >
                      {item}
                    </Button>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-border/40 bg-card/70">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Gradient Card</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Cards inherit a soft tint from the active gradient theme.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Primary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="glass">Glass</Badge>
                      </div>
                      <Button className="w-full">Primary Action</Button>
                    </CardContent>
                  </Card>
                  <Card className="border-border/40 bg-card/70">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Sign-in Form</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Input placeholder="Email address" type="email" />
                      <Input placeholder="Password" type="password" />
                      <Button variant="secondary" className="w-full">
                        Continue
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/60">
              <CardHeader>
                <CardTitle>Sidebar Surface</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-[200px_minmax(0,1fr)]">
                  <div className="rounded-2xl bg-sidebar/70 p-4 shadow-inner">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                      Navigation
                    </p>
                    <div className="mt-4 space-y-2">
                      {navItems.slice(0, 4).map((item, index) => (
                        <Button
                          key={item}
                          variant={index === 1 ? "default" : "ghost"}
                          size="sm"
                          className="w-full justify-start"
                        >
                          {item}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <StudioCodePanel />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </section>
    </main>
  );
}
