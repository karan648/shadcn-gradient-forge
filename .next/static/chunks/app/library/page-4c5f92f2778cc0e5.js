(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{466:(e,r,a)=>{"use strict";a.d(r,{d:()=>d});var s=a(5155);a(2115);var t=a(1337);function d({checked:e,onCheckedChange:r,label:a}){return(0,s.jsx)("button",{type:"button",role:"switch","aria-checked":e,"aria-label":a,onClick:()=>r(!e),className:(0,t.cn)("relative inline-flex h-7 w-12 items-center rounded-full border border-border/60 bg-background/40 transition-all",e&&"bg-primary/30 border-primary/50"),children:(0,s.jsx)("span",{className:(0,t.cn)("h-5 w-5 translate-x-1 rounded-full bg-foreground/80 shadow transition-all",e&&"translate-x-6 bg-primary")})})}},1337:(e,r,a)=>{"use strict";a.d(r,{cn:()=>d});var s=a(9722),t=a(622);function d(...e){return(0,t.QP)((0,s.$)(e))}},3855:(e,r,a)=>{"use strict";a.d(r,{ComponentShowcase:()=>u});var s=a(5155),t=a(2115),d=a(8291),n=a(4474),o=a(9984),i=a(1337);function l({className:e,...r}){return(0,s.jsx)("input",{className:(0,i.cn)("h-11 w-full rounded-2xl border border-border/60 bg-background/40 px-4 text-sm text-foreground shadow-inner shadow-black/5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",e),...r})}var c=a(466);let m=[{id:"analytics-grid",name:"Analytics Grid",category:"Dashboard",description:"Hero dashboard block with KPIs, growth badges, and action row.",tags:["kpi","stats","dashboard"],preview:(0,s.jsxs)(o.Zp,{className:"border-border/40 bg-card/70",children:[(0,s.jsx)(o.aR,{className:"pb-2",children:(0,s.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,s.jsx)(o.ZB,{className:"text-base",children:"Revenue Snapshot"}),(0,s.jsx)(d.E,{variant:"glass",children:"Live"})]})}),(0,s.jsxs)(o.Wu,{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-3",children:[(0,s.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"MRR"}),(0,s.jsx)("p",{className:"text-lg font-semibold",children:"$92k"})]}),(0,s.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Growth"}),(0,s.jsx)("p",{className:"text-lg font-semibold",children:"+18%"})]}),(0,s.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Churn"}),(0,s.jsx)("p",{className:"text-lg font-semibold",children:"1.4%"})]})]}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(n.$,{size:"sm",children:"Open Report"}),(0,s.jsx)(n.$,{size:"sm",variant:"outline",children:"Export CSV"})]})]})]}),files:[{path:"components/analytics-grid.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"checkout-pricing",name:"Checkout Pricing",category:"Commerce",description:"Pricing card with highlighted plan and conversion-focused CTA.",tags:["pricing","billing","checkout"],preview:(0,s.jsxs)(o.Zp,{className:"border-border/40 bg-card/70",children:[(0,s.jsxs)(o.aR,{className:"pb-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(o.ZB,{className:"text-base",children:"Scale Plan"}),(0,s.jsx)(d.E,{children:"Popular"})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Best for teams shipping weekly."})]}),(0,s.jsxs)(o.Wu,{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-end gap-2",children:[(0,s.jsx)("p",{className:"text-3xl font-semibold",children:"$49"}),(0,s.jsx)("p",{className:"pb-1 text-xs text-muted-foreground",children:"/month"})]}),(0,s.jsxs)("div",{className:"space-y-2 text-xs text-muted-foreground",children:[(0,s.jsx)("p",{children:"Unlimited palettes"}),(0,s.jsx)("p",{children:"Advanced export presets"}),(0,s.jsx)("p",{children:"Theme audit tools"})]}),(0,s.jsx)(n.$,{className:"w-full",children:"Start 14-day trial"})]})]}),files:[{path:"components/checkout-pricing.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"auth-split",name:"Auth Split",category:"Auth",description:"Modern sign-in panel with alternate auth actions.",tags:["auth","login","form"],preview:(0,s.jsxs)(o.Zp,{className:"border-border/40 bg-card/70",children:[(0,s.jsxs)(o.aR,{className:"pb-2",children:[(0,s.jsx)(o.ZB,{className:"text-base",children:"Welcome back"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Sign in to continue to Gradient Forge."})]}),(0,s.jsxs)(o.Wu,{className:"space-y-3",children:[(0,s.jsx)(l,{placeholder:"name@company.com",type:"email"}),(0,s.jsx)(l,{placeholder:"Password",type:"password"}),(0,s.jsx)(n.$,{className:"w-full",children:"Continue"}),(0,s.jsx)(n.$,{variant:"ghost",className:"w-full",children:"Sign in with GitHub"})]})]}),files:[{path:"components/auth-split.tsx",code:`import { Button } from "@/components/ui/button";
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
}`}]},{id:"security-settings",name:"Security Settings",category:"Settings",description:"Security preferences card with switch controls and device policy.",tags:["settings","security","switch"],preview:(0,s.jsxs)(o.Zp,{className:"border-border/40 bg-card/70",children:[(0,s.jsxs)(o.aR,{className:"pb-2",children:[(0,s.jsx)(o.ZB,{className:"text-base",children:"Security"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Harden your workspace defaults."})]}),(0,s.jsxs)(o.Wu,{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm font-semibold",children:"Two-factor auth"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Require 2FA for all members"})]}),(0,s.jsx)(c.d,{checked:!0,onCheckedChange:()=>{}})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 p-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm font-semibold",children:"Unknown device alerts"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"Notify on suspicious sign-ins"})]}),(0,s.jsx)(c.d,{checked:!1,onCheckedChange:()=>{}})]})]})]}),files:[{path:"components/security-settings.tsx",code:`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
}`}]},{id:"team-invites",name:"Team Invites",category:"Settings",description:"Role assignment block with email invite flow and seat usage.",tags:["team","invite","admin"],preview:(0,s.jsxs)(o.Zp,{className:"border-border/40 bg-card/70",children:[(0,s.jsxs)(o.aR,{className:"pb-2",children:[(0,s.jsx)(o.ZB,{className:"text-base",children:"Invite Team"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"8 / 15 seats in use"})]}),(0,s.jsxs)(o.Wu,{className:"space-y-3",children:[(0,s.jsx)(l,{placeholder:"designer@company.com",type:"email"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,s.jsx)(d.E,{variant:"outline",children:"Admin"}),(0,s.jsx)(d.E,{variant:"glass",children:"Editor"}),(0,s.jsx)(d.E,{variant:"outline",children:"Viewer"})]}),(0,s.jsx)(n.$,{className:"w-full",children:"Send invite"})]})]}),files:[{path:"components/team-invites.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]},{id:"activity-timeline",name:"Activity Timeline",category:"Dashboard",description:"Readable timeline panel for system events and deploy actions.",tags:["timeline","activity","logs"],preview:(0,s.jsxs)(o.Zp,{className:"border-border/40 bg-card/70",children:[(0,s.jsx)(o.aR,{className:"pb-2",children:(0,s.jsx)(o.ZB,{className:"text-base",children:"Recent Activity"})}),(0,s.jsxs)(o.Wu,{className:"space-y-3 text-xs text-muted-foreground",children:[(0,s.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Theme changed to Aurora - 2m ago"}),(0,s.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Tokens exported to app/web - 10m ago"}),(0,s.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Studio published on preview - 31m ago"})]})]}),files:[{path:"components/activity-timeline.tsx",code:`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
}`}]},{id:"notification-center",name:"Notification Center",category:"Messaging",description:"Compact inbox list for updates, mentions, and warnings.",tags:["notifications","inbox","alerts"],preview:(0,s.jsxs)(o.Zp,{className:"border-border/40 bg-card/70",children:[(0,s.jsx)(o.aR,{className:"pb-2",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(o.ZB,{className:"text-base",children:"Inbox"}),(0,s.jsx)(d.E,{variant:"outline",children:"3 unread"})]})}),(0,s.jsxs)(o.Wu,{className:"space-y-2 text-xs",children:[(0,s.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Build passed on main branch"}),(0,s.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"New comment on docs install guide"}),(0,s.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-3",children:"Palette pack v2.1 available"})]})]}),files:[{path:"components/notification-center.tsx",code:`import { Badge } from "@/components/ui/badge";
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
}`}]}],p=["All",...new Set(m.map(e=>e.category))];function u(){let[e,r]=(0,t.useState)(m[0].id),[a,i]=(0,t.useState)("preview"),[c,u]=(0,t.useState)(0),[x,b]=(0,t.useState)("All"),[g,h]=(0,t.useState)(""),[f,v]=(0,t.useState)("idle"),N=(0,t.useMemo)(()=>{let e=g.trim().toLowerCase();return m.filter(r=>{let a="All"===x||r.category===x;if(!e)return a;let s=[r.name,r.description,...r.tags].join(" ").toLowerCase();return a&&s.includes(e)})},[x,g]);(0,t.useEffect)(()=>{0===N.length||N.some(r=>r.id===e)||(r(N[0].id),i("preview"),u(0))},[N,e]);let C=(0,t.useMemo)(()=>N.find(r=>r.id===e)??N[0]??m[0],[N,e]),j=C.files,y=j[c]??j[0],w=async e=>{try{await navigator.clipboard.writeText(e),v("copied"),window.setTimeout(()=>v("idle"),1500)}catch{v("error"),window.setTimeout(()=>v("idle"),1500)}};return(0,s.jsxs)("section",{className:"grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]",children:[(0,s.jsxs)(o.Zp,{className:"border-border/50 bg-background/60",children:[(0,s.jsxs)(o.aR,{children:[(0,s.jsx)(o.ZB,{children:"Component Packs"}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:"Filter by category, preview instantly, and copy full source files."})]}),(0,s.jsxs)(o.Wu,{className:"space-y-4",children:[(0,s.jsx)(l,{placeholder:"Search components...",value:g,onChange:e=>h(e.target.value)}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:p.map(e=>(0,s.jsx)(n.$,{size:"sm",variant:e===x?"default":"ghost",onClick:()=>b(e),children:e},e))}),(0,s.jsxs)("div",{className:"space-y-2",children:[N.map(a=>(0,s.jsxs)("button",{type:"button",className:`w-full rounded-2xl border px-3 py-3 text-left transition-all ${a.id===e?"border-primary/50 bg-primary/10":"border-border/40 bg-background/50 hover:bg-background/70"}`,onClick:()=>{r(a.id),i("preview"),u(0)},children:[(0,s.jsx)("p",{className:"text-sm font-semibold",children:a.name}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:a.category})]},a.id)),0===N.length&&(0,s.jsx)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-4 text-sm text-muted-foreground",children:"No components match your filter. Clear the search and try again."})]})]})]}),(0,s.jsxs)(o.Zp,{className:"min-w-0 border-border/50 bg-background/60",children:[(0,s.jsxs)(o.aR,{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(o.ZB,{children:C.name}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:C.description})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(n.$,{size:"sm",variant:"preview"===a?"default":"ghost",onClick:()=>i("preview"),children:"Preview"}),(0,s.jsx)(n.$,{size:"sm",variant:"code"===a?"default":"ghost",onClick:()=>i("code"),children:"Code"})]})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:C.tags.map(e=>(0,s.jsx)(d.E,{variant:"outline",children:e},e))})]}),(0,s.jsx)(o.Wu,{children:"preview"===a?(0,s.jsx)("div",{className:"rounded-3xl border border-border/40 bg-background/50 p-4 sm:p-6",children:(0,s.jsx)("div",{className:"mx-auto max-w-2xl",children:C.preview})}):(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[j.map((e,r)=>(0,s.jsx)(n.$,{size:"sm",variant:r===c?"default":"ghost",className:"max-w-full truncate",title:e.path,onClick:()=>u(r),children:e.path.split("/").pop()??e.path},e.path)),(0,s.jsx)(n.$,{size:"sm",variant:"outline",onClick:()=>w(y.code),children:"copied"===f?"Copied":"error"===f?"Copy failed":"Copy file"}),(0,s.jsx)(n.$,{size:"sm",variant:"outline",onClick:()=>w(j.map(e=>`// ${e.path}
${e.code}`).join("\n\n")),children:"Copy all files"})]}),(0,s.jsx)("pre",{className:"max-h-[520px] overflow-x-auto overflow-y-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90",children:(0,s.jsx)("code",{children:y.code})})]})})]})]})}},4474:(e,r,a)=>{"use strict";a.d(r,{$:()=>i});var s=a(5155),t=a(2115),d=a(1337);let n={default:"bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:translate-y-[-1px]",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"bg-transparent hover:bg-muted/70",outline:"border border-border/70 bg-transparent hover:bg-muted/70 text-foreground",glow:"bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)_/_0.35)] hover:shadow-[0_0_35px_hsl(var(--primary)_/_0.55)]"},o={sm:"h-8 px-3 text-xs",md:"h-10 px-4 text-sm",lg:"h-12 px-5 text-base"};function i({className:e,variant:r="default",size:a="md",asChild:i=!1,children:l,...c}){let m=(0,d.cn)("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",n[r],o[a],e);return i&&t.isValidElement(l)?t.cloneElement(l,{className:(0,d.cn)(m,l.props.className),...c}):(0,s.jsx)("button",{className:m,...c,children:l})}},7665:(e,r,a)=>{Promise.resolve().then(a.bind(a,3855))},8291:(e,r,a)=>{"use strict";a.d(r,{E:()=>n});var s=a(5155);a(2115);var t=a(1337);let d={default:"bg-primary/15 text-primary border border-primary/30",outline:"border border-border/60 text-foreground",glass:"bg-background/30 border border-border/30 backdrop-blur text-foreground"};function n({className:e,variant:r="default",...a}){return(0,s.jsx)("div",{className:(0,t.cn)("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",d[r],e),...a})}},9984:(e,r,a)=>{"use strict";a.d(r,{BT:()=>i,Wu:()=>l,ZB:()=>o,Zp:()=>d,aR:()=>n});var s=a(5155);a(2115);var t=a(1337);function d({className:e,...r}){return(0,s.jsx)("div",{className:(0,t.cn)("rounded-3xl border border-border/40 bg-card/70 text-card-foreground shadow-[0_20px_80px_-60px_rgba(0,0,0,0.5)]",e),...r})}function n({className:e,...r}){return(0,s.jsx)("div",{className:(0,t.cn)("p-6 pb-3",e),...r})}function o({className:e,...r}){return(0,s.jsx)("h3",{className:(0,t.cn)("text-lg font-semibold tracking-tight",e),...r})}function i({className:e,...r}){return(0,s.jsx)("p",{className:(0,t.cn)("text-sm text-muted-foreground",e),...r})}function l({className:e,...r}){return(0,s.jsx)("div",{className:(0,t.cn)("p-6 pt-0",e),...r})}}},e=>{e.O(0,[409,441,794,358],()=>e(e.s=7665)),_N_E=e.O()}]);