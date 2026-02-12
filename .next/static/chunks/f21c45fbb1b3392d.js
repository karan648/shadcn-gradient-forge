(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19036,e=>{"use strict";var r=e.i(43476),a=e.i(47163);function t({checked:e,onCheckedChange:t,label:s}){return(0,r.jsx)("button",{type:"button",role:"switch","aria-checked":e,"aria-label":s,onClick:()=>t(!e),className:(0,a.cn)("relative inline-flex h-7 w-12 items-center rounded-full border border-border/60 bg-background/40 transition-all",e&&"bg-primary/30 border-primary/50"),children:(0,r.jsx)("span",{className:(0,a.cn)("h-5 w-5 translate-x-1 rounded-full bg-foreground/80 shadow transition-all",e&&"translate-x-6 bg-primary")})})}e.s(["Switch",()=>t])},74946,e=>{"use strict";var r=e.i(43476),a=e.i(71645),t=e.i(94179),s=e.i(67881),d=e.i(70065),n=e.i(47163);function o({className:e,...a}){return(0,r.jsx)("input",{className:(0,n.cn)("h-11 w-full rounded-2xl border border-border/60 bg-background/40 px-4 text-sm text-foreground shadow-inner shadow-black/5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e),...a})}var i=e.i(19036);let l=[{id:"analytics-grid",name:"Analytics Grid",category:"Dashboard",description:"Hero dashboard block with KPIs, growth badges, and action row.",tags:["kpi","stats","dashboard"],preview:(0,r.jsxs)(d.Card,{className:"border-border/40 bg-card/70",children:[(0,r.jsx)(d.CardHeader,{className:"pb-2",children:(0,r.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,r.jsx)(d.CardTitle,{className:"text-base",children:"Revenue Snapshot"}),(0,r.jsx)(t.Badge,{variant:"glass",children:"Live"})]})}),(0,r.jsxs)(d.CardContent,{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-3",children:[(0,r.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"MRR"}),(0,r.jsx)("p",{className:"text-lg font-semibold",children:"$92k"})]}),(0,r.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"Growth"}),(0,r.jsx)("p",{className:"text-lg font-semibold",children:"+18%"})]}),(0,r.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"Churn"}),(0,r.jsx)("p",{className:"text-lg font-semibold",children:"1.4%"})]})]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(s.Button,{size:"sm",children:"Open Report"}),(0,r.jsx)(s.Button,{size:"sm",variant:"outline",children:"Export CSV"})]})]})]}),files:[{path:"components/analytics-grid.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"checkout-pricing",name:"Checkout Pricing",category:"Commerce",description:"Pricing card with highlighted plan and conversion-focused CTA.",tags:["pricing","billing","checkout"],preview:(0,r.jsxs)(d.Card,{className:"border-border/40 bg-card/70",children:[(0,r.jsxs)(d.CardHeader,{className:"pb-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(d.CardTitle,{className:"text-base",children:"Scale Plan"}),(0,r.jsx)(t.Badge,{children:"Popular"})]}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"Best for teams shipping weekly."})]}),(0,r.jsxs)(d.CardContent,{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-end gap-2",children:[(0,r.jsx)("p",{className:"text-3xl font-semibold",children:"$49"}),(0,r.jsx)("p",{className:"pb-1 text-xs text-muted-foreground",children:"/month"})]}),(0,r.jsxs)("div",{className:"space-y-2 text-xs text-muted-foreground",children:[(0,r.jsx)("p",{children:"Unlimited palettes"}),(0,r.jsx)("p",{children:"Advanced export presets"}),(0,r.jsx)("p",{children:"Theme audit tools"})]}),(0,r.jsx)(s.Button,{className:"w-full",children:"Start 14-day trial"})]})]}),files:[{path:"components/checkout-pricing.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"auth-split",name:"Auth Split",category:"Auth",description:"Modern sign-in panel with alternate auth actions.",tags:["auth","login","form"],preview:(0,r.jsxs)(d.Card,{className:"border-border/40 bg-card/70",children:[(0,r.jsxs)(d.CardHeader,{className:"pb-2",children:[(0,r.jsx)(d.CardTitle,{className:"text-base",children:"Welcome back"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"Sign in to continue to Gradient Forge."})]}),(0,r.jsxs)(d.CardContent,{className:"space-y-3",children:[(0,r.jsx)(o,{placeholder:"name@company.com",type:"email"}),(0,r.jsx)(o,{placeholder:"Password",type:"password"}),(0,r.jsx)(s.Button,{className:"w-full",children:"Continue"}),(0,r.jsx)(s.Button,{variant:"ghost",className:"w-full",children:"Sign in with GitHub"})]})]}),files:[{path:"components/auth-split.tsx",code:`import { Button } from "@/components/ui/button";
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
}`}]},{id:"security-settings",name:"Security Settings",category:"Settings",description:"Security preferences card with switch controls and device policy.",tags:["settings","security","switch"],preview:(0,r.jsxs)(d.Card,{className:"border-border/40 bg-card/70",children:[(0,r.jsxs)(d.CardHeader,{className:"pb-2",children:[(0,r.jsx)(d.CardTitle,{className:"text-base",children:"Security"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"Harden your workspace defaults."})]}),(0,r.jsxs)(d.CardContent,{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-sm font-semibold",children:"Two-factor auth"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"Require 2FA for all members"})]}),(0,r.jsx)(i.Switch,{checked:!0,onCheckedChange:()=>{}})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-sm font-semibold",children:"Unknown device alerts"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"Notify on suspicious sign-ins"})]}),(0,r.jsx)(i.Switch,{checked:!1,onCheckedChange:()=>{}})]})]})]}),files:[{path:"components/security-settings.tsx",code:`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
}`}]},{id:"team-invites",name:"Team Invites",category:"Settings",description:"Role assignment block with email invite flow and seat usage.",tags:["team","invite","admin"],preview:(0,r.jsxs)(d.Card,{className:"border-border/40 bg-card/70",children:[(0,r.jsxs)(d.CardHeader,{className:"pb-2",children:[(0,r.jsx)(d.CardTitle,{className:"text-base",children:"Invite Team"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"8 / 15 seats in use"})]}),(0,r.jsxs)(d.CardContent,{className:"space-y-3",children:[(0,r.jsx)(o,{placeholder:"designer@company.com",type:"email"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(t.Badge,{variant:"outline",children:"Admin"}),(0,r.jsx)(t.Badge,{variant:"glass",children:"Editor"}),(0,r.jsx)(t.Badge,{variant:"outline",children:"Viewer"})]}),(0,r.jsx)(s.Button,{className:"w-full",children:"Send invite"})]})]}),files:[{path:"components/team-invites.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"activity-timeline",name:"Activity Timeline",category:"Dashboard",description:"Readable timeline panel for system events and deploy actions.",tags:["timeline","activity","logs"],preview:(0,r.jsxs)(d.Card,{className:"border-border/40 bg-card/70",children:[(0,r.jsx)(d.CardHeader,{className:"pb-2",children:(0,r.jsx)(d.CardTitle,{className:"text-base",children:"Recent Activity"})}),(0,r.jsxs)(d.CardContent,{className:"space-y-3 text-xs text-muted-foreground",children:[(0,r.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Theme changed to Aurora - 2m ago"}),(0,r.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Tokens exported to app/web - 10m ago"}),(0,r.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Studio published on preview - 31m ago"})]})]}),files:[{path:"components/activity-timeline.tsx",code:`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
}`}]},{id:"notification-center",name:"Notification Center",category:"Messaging",description:"Compact inbox list for updates, mentions, and warnings.",tags:["notifications","inbox","alerts"],preview:(0,r.jsxs)(d.Card,{className:"border-border/40 bg-card/70",children:[(0,r.jsx)(d.CardHeader,{className:"pb-2",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(d.CardTitle,{className:"text-base",children:"Inbox"}),(0,r.jsx)(t.Badge,{variant:"outline",children:"3 unread"})]})}),(0,r.jsxs)(d.CardContent,{className:"space-y-2 text-xs",children:[(0,r.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Build passed on main branch"}),(0,r.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"New comment on docs install guide"}),(0,r.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Palette pack v2.1 available"})]})]}),files:[{path:"components/notification-center.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]}],c=["All",...new Set(l.map(e=>e.category))];function m(){let[e,n]=(0,a.useState)(l[0].id),[i,m]=(0,a.useState)("preview"),[p,u]=(0,a.useState)(0),[x,b]=(0,a.useState)("All"),[g,h]=(0,a.useState)(""),[C,f]=(0,a.useState)("idle"),N=(0,a.useMemo)(()=>{let e=g.trim().toLowerCase();return l.filter(r=>{let a="All"===x||r.category===x;if(!e)return a;let t=[r.name,r.description,...r.tags].join(" ").toLowerCase();return a&&t.includes(e)})},[x,g]);(0,a.useEffect)(()=>{0===N.length||N.some(r=>r.id===e)||(n(N[0].id),m("preview"),u(0))},[N,e]);let v=(0,a.useMemo)(()=>N.find(r=>r.id===e)??N[0]??l[0],[N,e]),j=v.files,w=j[p]??j[0],y=async e=>{try{await navigator.clipboard.writeText(e),f("copied"),window.setTimeout(()=>f("idle"),1500)}catch{f("error"),window.setTimeout(()=>f("idle"),1500)}};return(0,r.jsxs)("section",{className:"grid gap-6 xl:grid-cols-[300px_1fr]",children:[(0,r.jsxs)(d.Card,{className:"border-border/50 bg-background/60",children:[(0,r.jsxs)(d.CardHeader,{children:[(0,r.jsx)(d.CardTitle,{children:"Component Packs"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Filter by category, preview instantly, and copy full source files."})]}),(0,r.jsxs)(d.CardContent,{className:"space-y-4",children:[(0,r.jsx)(o,{placeholder:"Search components...",value:g,onChange:e=>h(e.target.value)}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:c.map(e=>(0,r.jsx)(s.Button,{size:"sm",variant:e===x?"default":"ghost",onClick:()=>b(e),children:e},e))}),(0,r.jsxs)("div",{className:"space-y-2",children:[N.map(a=>(0,r.jsxs)("button",{type:"button",className:`w-full rounded-2xl border px-3 py-3 text-left transition-all ${a.id===e?"border-primary/50 bg-primary/10":"border-border/40 bg-background/50 hover:bg-background/70"}`,onClick:()=>{n(a.id),m("preview"),u(0)},children:[(0,r.jsx)("p",{className:"text-sm font-semibold",children:a.name}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:a.category})]},a.id)),0===N.length&&(0,r.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground",children:"No components match your filter. Clear the search and try again."})]})]})]}),(0,r.jsxs)(d.Card,{className:"border-border/50 bg-background/60",children:[(0,r.jsxs)(d.CardHeader,{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(d.CardTitle,{children:v.name}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:v.description})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(s.Button,{size:"sm",variant:"preview"===i?"default":"ghost",onClick:()=>m("preview"),children:"Preview"}),(0,r.jsx)(s.Button,{size:"sm",variant:"code"===i?"default":"ghost",onClick:()=>m("code"),children:"Code"})]})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:v.tags.map(e=>(0,r.jsx)(t.Badge,{variant:"outline",children:e},e))})]}),(0,r.jsx)(d.CardContent,{children:"preview"===i?(0,r.jsx)("div",{className:"rounded-3xl border border-border/40 bg-background/50 p-6",children:(0,r.jsx)("div",{className:"mx-auto max-w-2xl",children:v.preview})}):(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[j.map((e,a)=>(0,r.jsx)(s.Button,{size:"sm",variant:a===p?"default":"ghost",onClick:()=>u(a),children:e.path},e.path)),(0,r.jsx)(s.Button,{size:"sm",variant:"outline",onClick:()=>y(w.code),children:"copied"===C?"Copied":"error"===C?"Copy failed":"Copy file"}),(0,r.jsx)(s.Button,{size:"sm",variant:"outline",onClick:()=>y(j.map(e=>`// ${e.path}
${e.code}`).join("\n\n")),children:"Copy all files"})]}),(0,r.jsx)("pre",{className:"max-h-[520px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90",children:(0,r.jsx)("code",{children:w.code})})]})})]})]})}e.s(["ComponentShowcase",()=>m],74946)}]);