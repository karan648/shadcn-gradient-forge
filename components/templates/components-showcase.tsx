"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Bell, 
  Check, 
  ChevronRight,
  Copy,
  Moon,
  Search,
  Settings,
  Sun,
  User,
  Mail,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentsTemplateProps {
  preview?: boolean;
}

export function ComponentsTemplate({ preview }: ComponentsTemplateProps) {
  return (
    <div className="min-h-full bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <h1 className="font-semibold text-base sm:text-lg">Component Library</h1>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search components..."
                className="pl-9 pr-4 py-2 rounded-full border border-border/50 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-56"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <Copy className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Copy All</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Tabs defaultValue="buttons" className="space-y-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="buttons" className="text-xs">Buttons</TabsTrigger>
            {!preview && (
              <>
                <TabsTrigger value="badges" className="text-xs">Badges</TabsTrigger>
                <TabsTrigger value="inputs" className="text-xs">Inputs</TabsTrigger>
                <TabsTrigger value="cards" className="text-xs">Cards</TabsTrigger>
                <TabsTrigger value="feedback" className="text-xs">Feedback</TabsTrigger>
              </>
            )}
          </TabsList>

          {/* Buttons Section */}
          <TabsContent value="buttons" className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Button Variants</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default" size="sm">Default</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                    <Button variant="ghost" size="sm">Ghost</Button>
                    <Button variant="glow" size="sm">Glow</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {!preview && (
              <>
                <div>
                  <h2 className="text-lg font-semibold mb-4">Button Sizes</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <Button size="sm" variant="glow">Small</Button>
                        <Button size="md" variant="glow">Medium</Button>
                        <Button size="lg" variant="glow">Large</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-4">Button States</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-3">
                        <Button variant="glow" size="sm">
                          <Check className="h-4 w-4 mr-2" />
                          With Icon
                        </Button>
                        <Button variant="glow" size="sm" disabled>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Loading
                        </Button>
                        <Button variant="outline" size="sm" disabled>
                          Disabled
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </TabsContent>

          {/* Badges Section */}
          <TabsContent value="badges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Badge Variants</CardTitle>
                <CardDescription>Different badge styles for various use cases.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="glass">Glass</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="gap-1">
                    <Check className="h-3 w-3" />
                    Success
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Bell className="h-3 w-3" />
                    Notification
                  </Badge>
                  <Badge variant="glass" className="gap-1">
                    <Settings className="h-3 w-3" />
                    Settings
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inputs Section */}
          <TabsContent value="inputs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Input Fields</CardTitle>
                <CardDescription>Text inputs with various states and icons.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Default Input</label>
                    <Input placeholder="Enter text..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">With Icon</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Email address" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Disabled</label>
                    <Input placeholder="Disabled input" disabled />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">With Button</label>
                    <div className="flex gap-2">
                      <Input placeholder="Search..." className="flex-1" />
                      <Button size="sm" variant="glow">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Switches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between max-w-sm">
                  <div className="flex items-center gap-3">
                    <Sun className="h-5 w-5" />
                    <span className="text-sm">Light Mode</span>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between max-w-sm mt-4">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5" />
                    <span className="text-sm">Notifications</span>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cards Section */}
          <TabsContent value="cards" className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Simple Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    A basic card with header and content.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Featured Card
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Card with highlighted border and background.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Card with Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-muted-foreground">
                    Card containing interactive elements.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs flex-1">
                      Cancel
                    </Button>
                    <Button size="sm" variant="glow" className="text-xs flex-1">
                      Confirm
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Section */}
          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Loading States</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading content...
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary rounded-full animate-pulse" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Empty States</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-1">No messages yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start a conversation to see messages here.
                </p>
                <Button size="sm" variant="outline">
                  Start Conversation
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
