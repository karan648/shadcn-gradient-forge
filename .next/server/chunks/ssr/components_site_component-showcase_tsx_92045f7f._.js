module.exports=[39646,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(54161),e=a.i(40695),f=a.i(3130),g=a.i(97895);function h({className:a,...c}){return(0,b.jsx)("input",{className:(0,g.cn)("h-11 w-full rounded-2xl border border-border/60 bg-background/40 px-4 text-sm text-foreground shadow-inner shadow-black/5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",a),...c})}var i=a.i(80281);let j=[{id:"analytics-grid",name:"Analytics Grid",category:"Dashboard",description:"Hero dashboard block with KPIs, growth badges, and action row.",tags:["kpi","stats","dashboard"],preview:(0,b.jsxs)(f.Card,{className:"border-border/40 bg-card/70",children:[(0,b.jsx)(f.CardHeader,{className:"pb-2",children:(0,b.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,b.jsx)(f.CardTitle,{className:"text-base",children:"Revenue Snapshot"}),(0,b.jsx)(d.Badge,{variant:"glass",children:"Live"})]})}),(0,b.jsxs)(f.CardContent,{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"grid grid-cols-3 gap-3",children:[(0,b.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"MRR"}),(0,b.jsx)("p",{className:"text-lg font-semibold",children:"$92k"})]}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Growth"}),(0,b.jsx)("p",{className:"text-lg font-semibold",children:"+18%"})]}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Churn"}),(0,b.jsx)("p",{className:"text-lg font-semibold",children:"1.4%"})]})]}),(0,b.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,b.jsx)(e.Button,{size:"sm",children:"Open Report"}),(0,b.jsx)(e.Button,{size:"sm",variant:"outline",children:"Export CSV"})]})]})]}),files:[{path:"components/analytics-grid.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"checkout-pricing",name:"Checkout Pricing",category:"Commerce",description:"Pricing card with highlighted plan and conversion-focused CTA.",tags:["pricing","billing","checkout"],preview:(0,b.jsxs)(f.Card,{className:"border-border/40 bg-card/70",children:[(0,b.jsxs)(f.CardHeader,{className:"pb-2",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)(f.CardTitle,{className:"text-base",children:"Scale Plan"}),(0,b.jsx)(d.Badge,{children:"Popular"})]}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Best for teams shipping weekly."})]}),(0,b.jsxs)(f.CardContent,{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"flex items-end gap-2",children:[(0,b.jsx)("p",{className:"text-3xl font-semibold",children:"$49"}),(0,b.jsx)("p",{className:"pb-1 text-xs text-muted-foreground",children:"/month"})]}),(0,b.jsxs)("div",{className:"space-y-2 text-xs text-muted-foreground",children:[(0,b.jsx)("p",{children:"Unlimited palettes"}),(0,b.jsx)("p",{children:"Advanced export presets"}),(0,b.jsx)("p",{children:"Theme audit tools"})]}),(0,b.jsx)(e.Button,{className:"w-full",children:"Start 14-day trial"})]})]}),files:[{path:"components/checkout-pricing.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"auth-split",name:"Auth Split",category:"Auth",description:"Modern sign-in panel with alternate auth actions.",tags:["auth","login","form"],preview:(0,b.jsxs)(f.Card,{className:"border-border/40 bg-card/70",children:[(0,b.jsxs)(f.CardHeader,{className:"pb-2",children:[(0,b.jsx)(f.CardTitle,{className:"text-base",children:"Welcome back"}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Sign in to continue to Gradient Forge."})]}),(0,b.jsxs)(f.CardContent,{className:"space-y-3",children:[(0,b.jsx)(h,{placeholder:"name@company.com",type:"email"}),(0,b.jsx)(h,{placeholder:"Password",type:"password"}),(0,b.jsx)(e.Button,{className:"w-full",children:"Continue"}),(0,b.jsx)(e.Button,{variant:"ghost",className:"w-full",children:"Sign in with GitHub"})]})]}),files:[{path:"components/auth-split.tsx",code:`import { Button } from "@/components/ui/button";
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
}`}]},{id:"security-settings",name:"Security Settings",category:"Settings",description:"Security preferences card with switch controls and device policy.",tags:["settings","security","switch"],preview:(0,b.jsxs)(f.Card,{className:"border-border/40 bg-card/70",children:[(0,b.jsxs)(f.CardHeader,{className:"pb-2",children:[(0,b.jsx)(f.CardTitle,{className:"text-base",children:"Security"}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Harden your workspace defaults."})]}),(0,b.jsxs)(f.CardContent,{className:"space-y-3",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm font-semibold",children:"Two-factor auth"}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Require 2FA for all members"})]}),(0,b.jsx)(i.Switch,{checked:!0,onCheckedChange:()=>{}})]}),(0,b.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm font-semibold",children:"Unknown device alerts"}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Notify on suspicious sign-ins"})]}),(0,b.jsx)(i.Switch,{checked:!1,onCheckedChange:()=>{}})]})]})]}),files:[{path:"components/security-settings.tsx",code:`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
}`}]},{id:"team-invites",name:"Team Invites",category:"Settings",description:"Role assignment block with email invite flow and seat usage.",tags:["team","invite","admin"],preview:(0,b.jsxs)(f.Card,{className:"border-border/40 bg-card/70",children:[(0,b.jsxs)(f.CardHeader,{className:"pb-2",children:[(0,b.jsx)(f.CardTitle,{className:"text-base",children:"Invite Team"}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"8 / 15 seats in use"})]}),(0,b.jsxs)(f.CardContent,{className:"space-y-3",children:[(0,b.jsx)(h,{placeholder:"designer@company.com",type:"email"}),(0,b.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,b.jsx)(d.Badge,{variant:"outline",children:"Admin"}),(0,b.jsx)(d.Badge,{variant:"glass",children:"Editor"}),(0,b.jsx)(d.Badge,{variant:"outline",children:"Viewer"})]}),(0,b.jsx)(e.Button,{className:"w-full",children:"Send invite"})]})]}),files:[{path:"components/team-invites.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"activity-timeline",name:"Activity Timeline",category:"Dashboard",description:"Readable timeline panel for system events and deploy actions.",tags:["timeline","activity","logs"],preview:(0,b.jsxs)(f.Card,{className:"border-border/40 bg-card/70",children:[(0,b.jsx)(f.CardHeader,{className:"pb-2",children:(0,b.jsx)(f.CardTitle,{className:"text-base",children:"Recent Activity"})}),(0,b.jsxs)(f.CardContent,{className:"space-y-3 text-xs text-muted-foreground",children:[(0,b.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Theme changed to Aurora - 2m ago"}),(0,b.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Tokens exported to app/web - 10m ago"}),(0,b.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Studio published on preview - 31m ago"})]})]}),files:[{path:"components/activity-timeline.tsx",code:`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
}`}]},{id:"notification-center",name:"Notification Center",category:"Messaging",description:"Compact inbox list for updates, mentions, and warnings.",tags:["notifications","inbox","alerts"],preview:(0,b.jsxs)(f.Card,{className:"border-border/40 bg-card/70",children:[(0,b.jsx)(f.CardHeader,{className:"pb-2",children:(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)(f.CardTitle,{className:"text-base",children:"Inbox"}),(0,b.jsx)(d.Badge,{variant:"outline",children:"3 unread"})]})}),(0,b.jsxs)(f.CardContent,{className:"space-y-2 text-xs",children:[(0,b.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Build passed on main branch"}),(0,b.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"New comment on docs install guide"}),(0,b.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Palette pack v2.1 available"})]})]}),files:[{path:"components/notification-center.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]}],k=["All",...new Set(j.map(a=>a.category))];function l(){let[a,g]=(0,c.useState)(j[0].id),[i,l]=(0,c.useState)("preview"),[m,n]=(0,c.useState)(0),[o,p]=(0,c.useState)("All"),[q,r]=(0,c.useState)(""),[s,t]=(0,c.useState)("idle"),u=(0,c.useMemo)(()=>{let a=q.trim().toLowerCase();return j.filter(b=>{let c="All"===o||b.category===o;if(!a)return c;let d=[b.name,b.description,...b.tags].join(" ").toLowerCase();return c&&d.includes(a)})},[o,q]);(0,c.useEffect)(()=>{0===u.length||u.some(b=>b.id===a)||(g(u[0].id),l("preview"),n(0))},[u,a]);let v=(0,c.useMemo)(()=>u.find(b=>b.id===a)??u[0]??j[0],[u,a]),w=v.files,x=w[m]??w[0],y=async a=>{try{await navigator.clipboard.writeText(a),t("copied"),window.setTimeout(()=>t("idle"),1500)}catch{t("error"),window.setTimeout(()=>t("idle"),1500)}};return(0,b.jsxs)("section",{className:"grid gap-6 xl:grid-cols-[300px_1fr]",children:[(0,b.jsxs)(f.Card,{className:"border-border/50 bg-background/60",children:[(0,b.jsxs)(f.CardHeader,{children:[(0,b.jsx)(f.CardTitle,{children:"Component Packs"}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground",children:"Filter by category, preview instantly, and copy full source files."})]}),(0,b.jsxs)(f.CardContent,{className:"space-y-4",children:[(0,b.jsx)(h,{placeholder:"Search components...",value:q,onChange:a=>r(a.target.value)}),(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:k.map(a=>(0,b.jsx)(e.Button,{size:"sm",variant:a===o?"default":"ghost",onClick:()=>p(a),children:a},a))}),(0,b.jsxs)("div",{className:"space-y-2",children:[u.map(c=>(0,b.jsxs)("button",{type:"button",className:`w-full rounded-2xl border px-3 py-3 text-left transition-all ${c.id===a?"border-primary/50 bg-primary/10":"border-border/40 bg-background/50 hover:bg-background/70"}`,onClick:()=>{g(c.id),l("preview"),n(0)},children:[(0,b.jsx)("p",{className:"text-sm font-semibold",children:c.name}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:c.category})]},c.id)),0===u.length&&(0,b.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground",children:"No components match your filter. Clear the search and try again."})]})]})]}),(0,b.jsxs)(f.Card,{className:"border-border/50 bg-background/60",children:[(0,b.jsxs)(f.CardHeader,{className:"space-y-3",children:[(0,b.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(f.CardTitle,{children:v.name}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground",children:v.description})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)(e.Button,{size:"sm",variant:"preview"===i?"default":"ghost",onClick:()=>l("preview"),children:"Preview"}),(0,b.jsx)(e.Button,{size:"sm",variant:"code"===i?"default":"ghost",onClick:()=>l("code"),children:"Code"})]})]}),(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:v.tags.map(a=>(0,b.jsx)(d.Badge,{variant:"outline",children:a},a))})]}),(0,b.jsx)(f.CardContent,{children:"preview"===i?(0,b.jsx)("div",{className:"rounded-3xl border border-border/40 bg-background/50 p-6",children:(0,b.jsx)("div",{className:"mx-auto max-w-2xl",children:v.preview})}):(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[w.map((a,c)=>(0,b.jsx)(e.Button,{size:"sm",variant:c===m?"default":"ghost",onClick:()=>n(c),children:a.path},a.path)),(0,b.jsx)(e.Button,{size:"sm",variant:"outline",onClick:()=>y(x.code),children:"copied"===s?"Copied":"error"===s?"Copy failed":"Copy file"}),(0,b.jsx)(e.Button,{size:"sm",variant:"outline",onClick:()=>y(w.map(a=>`// ${a.path}
${a.code}`).join("\n\n")),children:"Copy all files"})]}),(0,b.jsx)("pre",{className:"max-h-[520px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90",children:(0,b.jsx)("code",{children:x.code})})]})})]})]})}a.s(["ComponentShowcase",()=>l],39646)}];

//# sourceMappingURL=components_site_component-showcase_tsx_92045f7f._.js.map