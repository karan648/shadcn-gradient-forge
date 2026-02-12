"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

type ComponentFile = {
  path: string;
  code: string;
};

type ShowcaseComponent = {
  id: string;
  name: string;
  category: "Dashboard" | "Auth" | "Commerce" | "Settings" | "Messaging";
  description: string;
  tags: string[];
  preview: ReactNode;
  files: ComponentFile[];
};

const showcaseComponents: ShowcaseComponent[] = [
  {
    id: "analytics-grid",
    name: "Analytics Grid",
    category: "Dashboard",
    description: "Hero dashboard block with KPIs, growth badges, and action row.",
    tags: ["kpi", "stats", "dashboard"],
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-base">Revenue Snapshot</CardTitle>
            <Badge variant="glass">Live</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
              <p className="text-xs text-muted-foreground">MRR</p>
              <p className="text-lg font-semibold">$92k</p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
              <p className="text-xs text-muted-foreground">Growth</p>
              <p className="text-lg font-semibold">+18%</p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
              <p className="text-xs text-muted-foreground">Churn</p>
              <p className="text-lg font-semibold">1.4%</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Open Report</Button>
            <Button size="sm" variant="outline">Export CSV</Button>
          </div>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/analytics-grid.tsx",
        code: `import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AnalyticsGrid() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base">Revenue Snapshot</CardTitle>
          <Badge variant="glass">Live</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
            <p className="text-xs text-muted-foreground">MRR</p>
            <p className="text-lg font-semibold">$92k</p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
            <p className="text-xs text-muted-foreground">Growth</p>
            <p className="text-lg font-semibold">+18%</p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
            <p className="text-xs text-muted-foreground">Churn</p>
            <p className="text-lg font-semibold">1.4%</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Open Report</Button>
          <Button size="sm" variant="outline">Export CSV</Button>
        </div>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "checkout-pricing",
    name: "Checkout Pricing",
    category: "Commerce",
    description: "Pricing card with highlighted plan and conversion-focused CTA.",
    tags: ["pricing", "billing", "checkout"],
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Scale Plan</CardTitle>
            <Badge>Popular</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Best for teams shipping weekly.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-end gap-2">
            <p className="text-3xl font-semibold">$49</p>
            <p className="pb-1 text-xs text-muted-foreground">/month</p>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>Unlimited palettes</p>
            <p>Advanced export presets</p>
            <p>Theme audit tools</p>
          </div>
          <Button className="w-full">Start 14-day trial</Button>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/checkout-pricing.tsx",
        code: `import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CheckoutPricing() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Scale Plan</CardTitle>
          <Badge>Popular</Badge>
        </div>
        <p className="text-xs text-muted-foreground">Best for teams shipping weekly.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end gap-2">
          <p className="text-3xl font-semibold">$49</p>
          <p className="pb-1 text-xs text-muted-foreground">/month</p>
        </div>
        <div className="space-y-2 text-xs text-muted-foreground">
          <p>Unlimited palettes</p>
          <p>Advanced export presets</p>
          <p>Theme audit tools</p>
        </div>
        <Button className="w-full">Start 14-day trial</Button>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "auth-split",
    name: "Auth Split",
    category: "Auth",
    description: "Modern sign-in panel with alternate auth actions.",
    tags: ["auth", "login", "form"],
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Welcome back</CardTitle>
          <p className="text-xs text-muted-foreground">Sign in to continue to Gradient Forge.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="name@company.com" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Continue</Button>
          <Button variant="ghost" className="w-full">Sign in with GitHub</Button>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/auth-split.tsx",
        code: `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AuthSplit() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Welcome back</CardTitle>
        <p className="text-xs text-muted-foreground">Sign in to continue to Gradient Forge.</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="name@company.com" type="email" />
        <Input placeholder="Password" type="password" />
        <Button className="w-full">Continue</Button>
        <Button variant="ghost" className="w-full">Sign in with GitHub</Button>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "security-settings",
    name: "Security Settings",
    category: "Settings",
    description: "Security preferences card with switch controls and device policy.",
    tags: ["settings", "security", "switch"],
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Security</CardTitle>
          <p className="text-xs text-muted-foreground">Harden your workspace defaults.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3">
            <div>
              <p className="text-sm font-semibold">Two-factor auth</p>
              <p className="text-xs text-muted-foreground">Require 2FA for all members</p>
            </div>
            <Switch checked onCheckedChange={() => {}} />
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3">
            <div>
              <p className="text-sm font-semibold">Unknown device alerts</p>
              <p className="text-xs text-muted-foreground">Notify on suspicious sign-ins</p>
            </div>
            <Switch checked={false} onCheckedChange={() => {}} />
          </div>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/security-settings.tsx",
        code: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function SecuritySettings() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Security</CardTitle>
        <p className="text-xs text-muted-foreground">Harden your workspace defaults.</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3">
          <div>
            <p className="text-sm font-semibold">Two-factor auth</p>
            <p className="text-xs text-muted-foreground">Require 2FA for all members</p>
          </div>
          <Switch checked onCheckedChange={() => {}} />
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3">
          <div>
            <p className="text-sm font-semibold">Unknown device alerts</p>
            <p className="text-xs text-muted-foreground">Notify on suspicious sign-ins</p>
          </div>
          <Switch checked={false} onCheckedChange={() => {}} />
        </div>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "team-invites",
    name: "Team Invites",
    category: "Settings",
    description: "Role assignment block with email invite flow and seat usage.",
    tags: ["team", "invite", "admin"],
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Invite Team</CardTitle>
          <p className="text-xs text-muted-foreground">8 / 15 seats in use</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="designer@company.com" type="email" />
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Admin</Badge>
            <Badge variant="glass">Editor</Badge>
            <Badge variant="outline">Viewer</Badge>
          </div>
          <Button className="w-full">Send invite</Button>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/team-invites.tsx",
        code: `import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function TeamInvites() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Invite Team</CardTitle>
        <p className="text-xs text-muted-foreground">8 / 15 seats in use</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="designer@company.com" type="email" />
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Admin</Badge>
          <Badge variant="glass">Editor</Badge>
          <Badge variant="outline">Viewer</Badge>
        </div>
        <Button className="w-full">Send invite</Button>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "activity-timeline",
    name: "Activity Timeline",
    category: "Dashboard",
    description: "Readable timeline panel for system events and deploy actions.",
    tags: ["timeline", "activity", "logs"],
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-muted-foreground">
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Theme changed to Aurora - 2m ago</div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Tokens exported to app/web - 10m ago</div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Studio published on preview - 31m ago</div>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/activity-timeline.tsx",
        code: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ActivityTimeline() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-xs text-muted-foreground">
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Theme changed to Aurora - 2m ago</div>
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Tokens exported to app/web - 10m ago</div>
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Studio published on preview - 31m ago</div>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
  {
    id: "notification-center",
    name: "Notification Center",
    category: "Messaging",
    description: "Compact inbox list for updates, mentions, and warnings.",
    tags: ["notifications", "inbox", "alerts"],
    preview: (
      <Card className="border-border/40 bg-card/70">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Inbox</CardTitle>
            <Badge variant="outline">3 unread</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-xs">
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Build passed on main branch</div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">New comment on docs install guide</div>
          <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Palette pack v2.1 available</div>
        </CardContent>
      </Card>
    ),
    files: [
      {
        path: "components/notification-center.tsx",
        code: `import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NotificationCenter() {
  return (
    <Card className="border-border/40 bg-card/70">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Inbox</CardTitle>
          <Badge variant="outline">3 unread</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-xs">
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Build passed on main branch</div>
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">New comment on docs install guide</div>
        <div className="rounded-2xl border border-border/40 bg-background/50 p-3">Palette pack v2.1 available</div>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },
];

const getAllFilesContent = (files: ComponentFile[]) => {
  return files.map((file) => `// ${file.path}\n${file.code}`).join("\n\n");
};

const categories = [
  "All",
  ...new Set(showcaseComponents.map((component) => component.category)),
] as const;

type CategoryFilter = (typeof categories)[number];

export function ComponentShowcase() {
  const [activeId, setActiveId] = useState<string>(showcaseComponents[0].id);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [query, setQuery] = useState<string>("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const filteredComponents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return showcaseComponents.filter((component) => {
      const categoryMatch =
        activeCategory === "All" || component.category === activeCategory;

      if (!normalizedQuery) return categoryMatch;

      const searchBase = [component.name, component.description, ...component.tags]
        .join(" ")
        .toLowerCase();

      return categoryMatch && searchBase.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  useEffect(() => {
    if (filteredComponents.length === 0) return;

    const stillVisible = filteredComponents.some(
      (component) => component.id === activeId,
    );

    if (!stillVisible) {
      setActiveId(filteredComponents[0].id);
      setActiveTab("preview");
      setActiveFileIndex(0);
    }
  }, [filteredComponents, activeId]);

  const activeComponent = useMemo(() => {
    return (
      filteredComponents.find((component) => component.id === activeId) ??
      filteredComponents[0] ??
      showcaseComponents[0]
    );
  }, [filteredComponents, activeId]);

  const activeFiles = activeComponent.files;
  const activeFile = activeFiles[activeFileIndex] ?? activeFiles[0];

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 1500);
    }
  };

  return (
    <section className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
      <Card className="border-border/50 bg-background/60">
        <CardHeader>
          <CardTitle>Component Packs</CardTitle>
          <p className="text-sm text-muted-foreground">
            Filter by category, preview instantly, and copy full source files.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Search components..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                variant={category === activeCategory ? "default" : "ghost"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="space-y-2">
            {filteredComponents.map((component) => (
              <button
                key={component.id}
                type="button"
                className={`w-full rounded-2xl border px-3 py-3 text-left transition-all ${
                  component.id === activeId
                    ? "border-primary/50 bg-primary/10"
                    : "border-border/40 bg-background/50 hover:bg-background/70"
                }`}
                onClick={() => {
                  setActiveId(component.id);
                  setActiveTab("preview");
                  setActiveFileIndex(0);
                }}
              >
                <p className="text-sm font-semibold">{component.name}</p>
                <p className="text-xs text-muted-foreground">{component.category}</p>
              </button>
            ))}
            {filteredComponents.length === 0 && (
              <div className="rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground">
                No components match your filter. Clear the search and try again.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="min-w-0 border-border/50 bg-background/60">
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle>{activeComponent.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{activeComponent.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant={activeTab === "preview" ? "default" : "ghost"}
                onClick={() => setActiveTab("preview")}
              >
                Preview
              </Button>
              <Button
                size="sm"
                variant={activeTab === "code" ? "default" : "ghost"}
                onClick={() => setActiveTab("code")}
              >
                Code
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeComponent.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === "preview" ? (
            <div className="rounded-3xl border border-border/40 bg-background/50 p-4 sm:p-6">
              <div className="mx-auto max-w-2xl">{activeComponent.preview}</div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {activeFiles.map((file, index) => (
                  <Button
                    key={file.path}
                    size="sm"
                    variant={index === activeFileIndex ? "default" : "ghost"}
                    className="max-w-full truncate"
                    title={file.path}
                    onClick={() => setActiveFileIndex(index)}
                  >
                    {file.path.split("/").pop() ?? file.path}
                  </Button>
                ))}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(activeFile.code)}
                >
                  {copyState === "copied" ? "Copied" : copyState === "error" ? "Copy failed" : "Copy file"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(getAllFilesContent(activeFiles))}
                >
                  Copy all files
                </Button>
              </div>
              <pre className="max-h-[520px] overflow-x-auto overflow-y-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90">
                <code>{activeFile.code}</code>
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
