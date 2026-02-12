module.exports=[70106,a=>{"use strict";var b=a.i(72131);let c=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},d=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,b.forwardRef)(({color:a="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:g,className:h="",children:i,iconNode:j,...k},l)=>(0,b.createElement)("svg",{ref:l,...e,width:c,height:c,stroke:a,strokeWidth:g?24*Number(f)/Number(c):f,className:d("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,c])=>(0,b.createElement)(a,c)),...Array.isArray(i)?i:[i]])),g=(a,e)=>{let g=(0,b.forwardRef)(({className:g,...h},i)=>(0,b.createElement)(f,{ref:i,iconNode:e,className:d(`lucide-${c(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,g),...h}));return g.displayName=c(a),g};a.s(["default",()=>g],70106)},65601,a=>{"use strict";var b=a.i(87924),c=a.i(72511),d=a.i(37924),e=a.i(54161),f=a.i(40695),g=a.i(3130),h=a.i(80281),i=a.i(97895),j=a.i(70106);let k=(0,j.default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),l=(0,j.default)("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),m=(0,j.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function n(){let{themeId:a,colorMode:j,availableThemes:n,memoryLaneUnlocked:o,remainingForUnlock:p,setThemeId:q,setColorMode:r}=(0,c.useThemeContext)(),s="light"===j,t=d.NITRO_PUBLIC_THEMES.length,u=t-p,v=Math.round(u/t*100);return(0,b.jsxs)(g.Card,{className:"border-border/50 bg-background/60",children:[(0,b.jsx)(g.CardHeader,{children:(0,b.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(g.CardTitle,{children:"Gradient Studio"}),(0,b.jsx)(g.CardDescription,{children:"Preview every theme to unlock the secret Memory Lane palette."})]}),(0,b.jsx)(e.Badge,{variant:"glass",children:"Shadcn Ready"})]})}),(0,b.jsxs)(g.CardContent,{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 px-4 py-3",children:[(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("p",{className:"text-sm font-semibold",children:"Color Mode"}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Switch between light and dark surfaces."})]}),(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)(m,{className:(0,i.cn)("h-4 w-4",s?"text-foreground":"text-muted-foreground")}),(0,b.jsx)(h.Switch,{checked:!s,onCheckedChange:a=>r(a?"dark":"light"),label:"Toggle dark mode"}),(0,b.jsx)(l,{className:(0,i.cn)("h-4 w-4",s?"text-muted-foreground":"text-foreground")})]})]}),(0,b.jsxs)("div",{className:"space-y-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm font-semibold",children:"Secret Theme Unlock"}),(0,b.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Preview all ",t," public themes to reveal Memory Lane."]})]}),(0,b.jsx)(e.Badge,{variant:o?"default":"outline",children:o?"Unlocked":`${p} remaining`})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between text-xs text-muted-foreground",children:[(0,b.jsxs)("span",{children:[u," of ",t," previewed"]}),(0,b.jsxs)("span",{children:[v,"%"]})]}),(0,b.jsx)("div",{className:"h-2 rounded-full bg-border/60",children:(0,b.jsx)("div",{className:"h-full rounded-full bg-primary/80 transition-all",style:{width:`${v}%`},"aria-hidden":!0})})]})]}),(0,b.jsx)("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-3",children:n.map(c=>{let e=a===c.id,g=c.id===d.MEMORY_LANE_THEME.id&&!o;return(0,b.jsxs)("div",{role:"button",tabIndex:g?-1:0,onClick:()=>!g&&q(c.id),onKeyDown:a=>{g||("Enter"===a.key||" "===a.key)&&(a.preventDefault(),q(c.id))},className:(0,i.cn)("group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/40 text-left transition-all",e&&"border-primary/60 shadow-[0_0_25px_hsl(var(--primary)_/_0.35)]",g&&"cursor-not-allowed opacity-70"),children:[(0,b.jsxs)("div",{className:"relative h-24 w-full",style:{backgroundImage:c.preview},children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-black/10"}),g&&(0,b.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/40 text-white",children:(0,b.jsx)(k,{className:"h-5 w-5"})})]}),(0,b.jsxs)("div",{className:"flex items-center justify-between gap-2 px-3 py-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm font-semibold",children:c.label}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:e?"Active":"Preview"})]}),(0,b.jsx)(f.Button,{variant:e?"glow":"ghost",size:"sm",className:"h-7 px-3",children:e?"Live":"Set"})]})]},c.id)})})]})]})}a.s(["ThemePanel",()=>n],65601)},9698,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(54161),e=a.i(40695),f=a.i(3130),g=a.i(70106);let h=(0,g.default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),i=(0,g.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),j=(0,g.default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),k=(0,g.default)("file-code-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]),l=(0,g.default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),m=[{id:"root-layout",label:"Root Layout",path:"app/layout.tsx",description:"Set default theme and wrap app with ThemeProvider.",code:`import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-context";

export const metadata: Metadata = {
  title: "Gradient Forge",
  description: "A production-ready gradient theming system for shadcn components.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark theme-nitro-midnight-blurple"
      data-theme="theme-nitro-midnight-blurple"
      data-color-mode="dark"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}`},{id:"theme-engine",label:"Theme Engine",path:"components/theme/theme-engine.ts",description:"Add and manage your theme presets.",code:`export const NITRO_PUBLIC_THEMES = [
  {
    id: "theme-nitro-midnight-blurple",
    label: "Midnight Blurple",
    preview: "radial-gradient(...), linear-gradient(...)",
  },
] as const;

export const MEMORY_LANE_THEME = {
  id: "theme-nitro-memory-lane",
  label: "Memory Lane",
  preview: "radial-gradient(...), linear-gradient(...)",
} as const;`},{id:"globals",label:"Global Tokens",path:"app/globals.css",description:"Define surface and app gradient tokens for all components.",code:`.theme-nitro-midnight-blurple {
  --background: 235 26% 11%;
  --card: 235 22% 12%;
  --primary: 241 92% 70%;
  --accent: 210 92% 65%;
  --ring: 241 92% 70%;
  --app-gradient:
    radial-gradient(1050px 560px at -10% -20%, hsl(246 92% 66% / 0.3), transparent 60%),
    radial-gradient(920px 520px at 112% 2%, hsl(201 92% 63% / 0.22), transparent 58%),
    linear-gradient(160deg, hsl(232 29% 12%) 0%, hsl(231 24% 12%) 50%, hsl(228 22% 10%) 100%);
  --app-surface-tint: hsl(241 92% 70% / 0.1);
}`},{id:"theme-context",label:"Theme Context",path:"components/theme/theme-context.tsx",description:"Client provider that applies theme and color mode state.",code:`"use client";

import { createContext, useContext, useState } from "react";
import { applyTheme } from "@/components/theme/theme-engine";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState("theme-nitro-midnight-blurple");
  const [colorMode, setColorMode] = useState<"dark" | "light">("dark");

  const updateTheme = (nextTheme: string) => {
    setThemeId(nextTheme);
    applyTheme(nextTheme, colorMode);
  };

  const updateMode = (nextMode: "dark" | "light") => {
    setColorMode(nextMode);
    applyTheme(themeId, nextMode);
  };

  return (
    <ThemeContext.Provider value={{ themeId, colorMode, setThemeId: updateTheme, setColorMode: updateMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};`}],n=["root-layout","theme-engine","theme-context","globals"],o=()=>n.map(a=>m.find(b=>b.id===a)).filter(a=>!!a).map(a=>`// ${a.path}
${a.code}`).join("\n\n"),p=a=>"copying"===a?"Copying...":"copied"===a?"Copied":"error"===a?"Copy failed":"Copy code";function q(){let[a,g]=(0,c.useState)("preview"),[q,r]=(0,c.useState)(m[0].id),[s,t]=(0,c.useState)({}),u=(0,c.useMemo)(()=>m.find(a=>a.id===q)??m[0],[q]),v=async(a,b)=>{t(b=>({...b,[a]:"copying"}));try{await navigator.clipboard.writeText(b),t(b=>({...b,[a]:"copied"})),window.setTimeout(()=>{t(b=>({...b,[a]:"idle"}))},1400)}catch{t(b=>({...b,[a]:"error"})),window.setTimeout(()=>{t(b=>({...b,[a]:"idle"}))},2e3)}},w=s["setup-pack"]??"idle",x=s[u.id]??"idle";return(0,b.jsxs)(f.Card,{className:"border-border/50 bg-background/60",children:[(0,b.jsxs)(f.CardHeader,{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(f.CardTitle,{children:"Token Export"}),(0,b.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:"Preview install guidance or open full code snippets with copy actions."})]}),(0,b.jsxs)(d.Badge,{variant:"glass",className:"gap-1",children:[(0,b.jsx)(k,{className:"h-3 w-3"})," Dev Ready"]})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)(e.Button,{variant:"preview"===a?"default":"ghost",size:"sm",onClick:()=>g("preview"),children:"Preview"}),(0,b.jsx)(e.Button,{variant:"code"===a?"default":"ghost",size:"sm",onClick:()=>g("code"),children:"Code"})]})]}),(0,b.jsx)(f.CardContent,{children:"preview"===a?(0,b.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-5",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold",children:"Copy-ready setup"}),(0,b.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:"Add data-theme attributes to your app root, import global tokens, and use ThemeProvider to keep theme state synced across shadcn components."}),(0,b.jsx)("div",{className:"mt-3 flex flex-wrap gap-2",children:n.map(a=>{let c=m.find(b=>b.id===a);return c?(0,b.jsx)(d.Badge,{variant:"outline",children:c.path},a):null})}),(0,b.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,b.jsx)(e.Button,{variant:"outline",size:"sm",asChild:!0,children:(0,b.jsx)("a",{href:"/docs",children:"Open docs"})}),(0,b.jsxs)(e.Button,{variant:"secondary",size:"sm",onClick:()=>v("setup-pack",o()),disabled:"copying"===w,children:["copying"===w?(0,b.jsx)(l,{className:"h-4 w-4 animate-spin"}):"copied"===w?(0,b.jsx)(i,{className:"h-4 w-4"}):"error"===w?(0,b.jsx)(h,{className:"h-4 w-4"}):(0,b.jsx)(j,{className:"h-4 w-4"}),p(w)]}),(0,b.jsx)(e.Button,{variant:"ghost",size:"sm",onClick:()=>g("code"),children:"Open code snippets"})]})]}):(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:m.map(a=>(0,b.jsx)(e.Button,{size:"sm",variant:q===a.id?"default":"ghost",onClick:()=>r(a.id),children:a.label},a.id))}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-4",children:[(0,b.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm font-semibold",children:u.path}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:u.description})]}),(0,b.jsxs)(e.Button,{variant:"outline",size:"sm",onClick:()=>v(u.id,u.code),disabled:"copying"===x,children:["copying"===x?(0,b.jsx)(l,{className:"h-4 w-4 animate-spin"}):"copied"===x?(0,b.jsx)(i,{className:"h-4 w-4"}):"error"===x?(0,b.jsx)(h,{className:"h-4 w-4"}):(0,b.jsx)(j,{className:"h-4 w-4"}),p(x)]}),(0,b.jsxs)(e.Button,{variant:"secondary",size:"sm",onClick:()=>v("setup-pack",o()),disabled:"copying"===w,children:["copying"===w?(0,b.jsx)(l,{className:"h-4 w-4 animate-spin"}):"copied"===w?(0,b.jsx)(i,{className:"h-4 w-4"}):"error"===w?(0,b.jsx)(h,{className:"h-4 w-4"}):(0,b.jsx)(j,{className:"h-4 w-4"}),p(w)]})]}),(0,b.jsx)("pre",{className:"mt-4 max-h-[360px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90",children:(0,b.jsx)("code",{children:u.code})})]})]})})]})}a.s(["StudioCodePanel",()=>q],9698)}];

//# sourceMappingURL=_cba484ee._.js.map