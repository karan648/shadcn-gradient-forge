"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const components = [
  {
    id: "pricing-card",
    name: "Pricing Card",
    description: "Tiered pricing card with CTA and feature highlights.",
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Pro Tier</CardTitle>
          <p className="text-xs text-muted-foreground">For design teams shipping fast.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold">$39</span>
            <span className="text-xs text-muted-foreground">per month</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Theme Sync</Badge>
            <Badge variant="outline">Token Export</Badge>
          </div>
          <Button className="w-full">Start Pro Trial</Button>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/pricing-card.tsx",
        code: `import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingCard() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Pro Tier</CardTitle>
        <p className="text-xs text-muted-foreground">For design teams shipping fast.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">$39</span>
          <span className="text-xs text-muted-foreground">per month</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="glass">Theme Sync</Badge>
          <Badge variant="outline">Token Export</Badge>
        </div>
        <Button className="w-full">Start Pro Trial</Button>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "auth-panel",
    name: "Auth Panel",
    description: "Compact sign-in panel with subtle surface tint.",
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Sign in</CardTitle>
          <p className="text-xs text-muted-foreground">Access the Gradient Forge workspace.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="you@studio.com" type="email" />
          <Input placeholder="Password" type="password" />
          <Button variant="secondary" className="w-full">
            Continue
          </Button>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/auth-panel.tsx",
        code: `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AuthPanel() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Sign in</CardTitle>
        <p className="text-xs text-muted-foreground">Access the Gradient Forge workspace.</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="you@studio.com" type="email" />
        <Input placeholder="Password" type="password" />
        <Button variant="secondary" className="w-full">
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "status-stack",
    name: "Status Stack",
    description: "Multi-metric status stack with gradient tint layers.",
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Release Status</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
            <p className="text-xs text-muted-foreground">Themes</p>
            <p className="text-lg font-semibold">23</p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
            <p className="text-xs text-muted-foreground">Surfaces</p>
            <p className="text-lg font-semibold">5</p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
            <p className="text-xs text-muted-foreground">Exports</p>
            <p className="text-lg font-semibold">4</p>
          </div>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/status-stack.tsx",
        code: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StatusStack() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Release Status</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
          <p className="text-xs text-muted-foreground">Themes</p>
          <p className="text-lg font-semibold">23</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
          <p className="text-xs text-muted-foreground">Surfaces</p>
          <p className="text-lg font-semibold">5</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
          <p className="text-xs text-muted-foreground">Exports</p>
          <p className="text-lg font-semibold">4</p>
        </div>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
];

const getAllFilesContent = (files) =>
  files
    .map((file) => `// ${file.path}\n${file.code}`)
    .join("\n\n");

export function ComponentShowcase() {
  const [activeId, setActiveId] = useState(components[0].id);
  const [tab, setTab] = useState("preview");
  const [fileIndex, setFileIndex] = useState(0);
  const [copyState, setCopyState] = useState("idle");

  const activeComponent = useMemo(
    () => components.find((component) => component.id === activeId) ?? components[0],
    [activeId],
  );

  const files = activeComponent.files;
  const activeFile = files[fileIndex] ?? files[0];

  const handleCopy = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1400);
    } catch {
      setCopyState("error");
    }
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <Card className="border-border/50 bg-background/60">
        <CardHeader>
          <CardTitle>Components</CardTitle>
          <p className="text-sm text-muted-foreground">Choose a component to preview and copy.</p>
        </CardHeader>
        <CardContent className="space-y-2">
          {components.map((component) => (
            <Button
              key={component.id}
              variant={component.id === activeId ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveId(component.id);
                setTab("preview");
                setFileIndex(0);
              }}
            >
              {component.name}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-background/60">
        <CardHeader className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle>{activeComponent.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{activeComponent.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant={tab === "preview" ? "default" : "ghost"}
                onClick={() => setTab("preview")}
              >
                Preview
              </Button>
              <Button
                size="sm"
                variant={tab === "code" ? "default" : "ghost"}
                onClick={() => setTab("code")}
              >
                Code
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {tab === "preview" ? (
            <div className="rounded-2xl border border-border/40 bg-background/50 p-6">
              {activeComponent.preview}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {files.map((file, index) => (
                  <Button
                    key={file.path}
                    size="sm"
                    variant={index === fileIndex ? "default" : "ghost"}
                    onClick={() => setFileIndex(index)}
                  >
                    {file.path}
                  </Button>
                ))}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(getAllFilesContent(files))}
                >
                  Copy all files
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleCopy(activeFile.code)}>
                  {copyState === "copied" ? "Copied" : copyState === "error" ? "Copy failed" : "Copy file"}
                </Button>
              </div>
              <pre className="max-h-[420px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90">
                <code>{activeFile.code}</code>
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
