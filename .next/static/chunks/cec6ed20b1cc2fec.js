(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,19036,e=>{"use strict";var t=e.i(43476),r=e.i(47163);function a({checked:e,onCheckedChange:a,label:s}){return(0,t.jsx)("button",{type:"button",role:"switch","aria-checked":e,"aria-label":s,onClick:()=>a(!e),className:(0,r.cn)("relative inline-flex h-7 w-12 items-center rounded-full border border-border/60 bg-background/40 transition-all",e&&"bg-primary/30 border-primary/50"),children:(0,t.jsx)("span",{className:(0,r.cn)("h-5 w-5 translate-x-1 rounded-full bg-foreground/80 shadow transition-all",e&&"translate-x-6 bg-primary")})})}e.s(["Switch",()=>a])},75254,e=>{"use strict";var t=e.i(71645);let r=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},a=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:d,className:n="",children:l,iconNode:o,...c},h)=>(0,t.createElement)("svg",{ref:h,...s,width:r,height:r,stroke:e,strokeWidth:d?24*Number(i)/Number(r):i,className:a("lucide",n),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(c)&&{"aria-hidden":"true"},...c},[...o.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),d=(e,s)=>{let d=(0,t.forwardRef)(({className:d,...n},l)=>(0,t.createElement)(i,{ref:l,iconNode:s,className:a(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,d),...n}));return d.displayName=r(e),d};e.s(["default",()=>d],75254)},23843,e=>{"use strict";var t=e.i(43476),r=e.i(32881),a=e.i(12440),s=e.i(94179),i=e.i(67881),d=e.i(70065),n=e.i(19036),l=e.i(47163),o=e.i(75254);let c=(0,o.default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),h=(0,o.default)("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),m=(0,o.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function p(){let{themeId:e,colorMode:o,availableThemes:p,memoryLaneUnlocked:x,remainingForUnlock:u,setThemeId:g,setColorMode:b}=(0,r.useThemeContext)(),y="light"===o,f=a.NITRO_PUBLIC_THEMES.length,j=f-u,v=Math.round(j/f*100);return(0,t.jsxs)(d.Card,{className:"border-border/50 bg-background/60",children:[(0,t.jsx)(d.CardHeader,{children:(0,t.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(d.CardTitle,{children:"Gradient Studio"}),(0,t.jsx)(d.CardDescription,{children:"Preview every theme to unlock the secret Memory Lane palette."})]}),(0,t.jsx)(s.Badge,{variant:"glass",children:"Shadcn Ready"})]})}),(0,t.jsxs)(d.CardContent,{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between rounded-2xl border border-border/40 bg-background/50 px-4 py-3",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("p",{className:"text-sm font-semibold",children:"Color Mode"}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"Switch between light and dark surfaces."})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(m,{className:(0,l.cn)("h-4 w-4",y?"text-foreground":"text-muted-foreground")}),(0,t.jsx)(n.Switch,{checked:!y,onCheckedChange:e=>b(e?"dark":"light"),label:"Toggle dark mode"}),(0,t.jsx)(h,{className:(0,l.cn)("h-4 w-4",y?"text-muted-foreground":"text-foreground")})]})]}),(0,t.jsxs)("div",{className:"space-y-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-semibold",children:"Secret Theme Unlock"}),(0,t.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Preview all ",f," public themes to reveal Memory Lane."]})]}),(0,t.jsx)(s.Badge,{variant:x?"default":"outline",children:x?"Unlocked":`${u} remaining`})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between text-xs text-muted-foreground",children:[(0,t.jsxs)("span",{children:[j," of ",f," previewed"]}),(0,t.jsxs)("span",{children:[v,"%"]})]}),(0,t.jsx)("div",{className:"h-2 rounded-full bg-border/60",children:(0,t.jsx)("div",{className:"h-full rounded-full bg-primary/80 transition-all",style:{width:`${v}%`},"aria-hidden":!0})})]})]}),(0,t.jsx)("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-3",children:p.map(r=>{let s=e===r.id,d=r.id===a.MEMORY_LANE_THEME.id&&!x;return(0,t.jsxs)("div",{role:"button",tabIndex:d?-1:0,onClick:()=>!d&&g(r.id),onKeyDown:e=>{d||("Enter"===e.key||" "===e.key)&&(e.preventDefault(),g(r.id))},className:(0,l.cn)("group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/40 text-left transition-all",s&&"border-primary/60 shadow-[0_0_25px_hsl(var(--primary)_/_0.35)]",d&&"cursor-not-allowed opacity-70"),children:[(0,t.jsxs)("div",{className:"relative h-24 w-full",style:{backgroundImage:r.preview},children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-black/10"}),d&&(0,t.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/40 text-white",children:(0,t.jsx)(c,{className:"h-5 w-5"})})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between gap-2 px-3 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-semibold",children:r.label}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:s?"Active":"Preview"})]}),(0,t.jsx)(i.Button,{variant:s?"glow":"ghost",size:"sm",className:"h-7 px-3",children:s?"Live":"Set"})]})]},r.id)})})]})]})}e.s(["ThemePanel",()=>p],23843)},57870,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(94179),s=e.i(67881),i=e.i(70065),d=e.i(75254);let n=(0,d.default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),l=(0,d.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),o=(0,d.default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),c=(0,d.default)("file-code-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]),h=(0,d.default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),m=[{id:"root-layout",label:"Root Layout",path:"app/layout.tsx",description:"Set default theme and wrap app with ThemeProvider.",code:`import type { Metadata } from "next";
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
};`}],p=["root-layout","theme-engine","theme-context","globals"],x=()=>p.map(e=>m.find(t=>t.id===e)).filter(e=>!!e).map(e=>`// ${e.path}
${e.code}`).join("\n\n"),u=e=>"copying"===e?"Copying...":"copied"===e?"Copied":"error"===e?"Copy failed":"Copy code";function g(){let[e,d]=(0,r.useState)("preview"),[g,b]=(0,r.useState)(m[0].id),[y,f]=(0,r.useState)({}),j=(0,r.useMemo)(()=>m.find(e=>e.id===g)??m[0],[g]),v=async(e,t)=>{f(t=>({...t,[e]:"copying"}));try{await navigator.clipboard.writeText(t),f(t=>({...t,[e]:"copied"})),window.setTimeout(()=>{f(t=>({...t,[e]:"idle"}))},1400)}catch{f(t=>({...t,[e]:"error"})),window.setTimeout(()=>{f(t=>({...t,[e]:"idle"}))},2e3)}},w=y["setup-pack"]??"idle",k=y[j.id]??"idle";return(0,t.jsxs)(i.Card,{className:"border-border/50 bg-background/60",children:[(0,t.jsxs)(i.CardHeader,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(i.CardTitle,{children:"Token Export"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:"Preview install guidance or open full code snippets with copy actions."})]}),(0,t.jsxs)(a.Badge,{variant:"glass",className:"gap-1",children:[(0,t.jsx)(c,{className:"h-3 w-3"})," Dev Ready"]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(s.Button,{variant:"preview"===e?"default":"ghost",size:"sm",onClick:()=>d("preview"),children:"Preview"}),(0,t.jsx)(s.Button,{variant:"code"===e?"default":"ghost",size:"sm",onClick:()=>d("code"),children:"Code"})]})]}),(0,t.jsx)(i.CardContent,{children:"preview"===e?(0,t.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-5",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:"Copy-ready setup"}),(0,t.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:"Add data-theme attributes to your app root, import global tokens, and use ThemeProvider to keep theme state synced across shadcn components."}),(0,t.jsx)("div",{className:"mt-3 flex flex-wrap gap-2",children:p.map(e=>{let r=m.find(t=>t.id===e);return r?(0,t.jsx)(a.Badge,{variant:"outline",children:r.path},e):null})}),(0,t.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[(0,t.jsx)(s.Button,{variant:"outline",size:"sm",asChild:!0,children:(0,t.jsx)("a",{href:"/docs",children:"Open docs"})}),(0,t.jsxs)(s.Button,{variant:"secondary",size:"sm",onClick:()=>v("setup-pack",x()),disabled:"copying"===w,children:["copying"===w?(0,t.jsx)(h,{className:"h-4 w-4 animate-spin"}):"copied"===w?(0,t.jsx)(l,{className:"h-4 w-4"}):"error"===w?(0,t.jsx)(n,{className:"h-4 w-4"}):(0,t.jsx)(o,{className:"h-4 w-4"}),u(w)]}),(0,t.jsx)(s.Button,{variant:"ghost",size:"sm",onClick:()=>d("code"),children:"Open code snippets"})]})]}):(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:m.map(e=>(0,t.jsx)(s.Button,{size:"sm",variant:g===e.id?"default":"ghost",onClick:()=>b(e.id),children:e.label},e.id))}),(0,t.jsxs)("div",{className:"rounded-2xl border border-border/40 bg-background/50 p-4",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-semibold",children:j.path}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:j.description})]}),(0,t.jsxs)(s.Button,{variant:"outline",size:"sm",onClick:()=>v(j.id,j.code),disabled:"copying"===k,children:["copying"===k?(0,t.jsx)(h,{className:"h-4 w-4 animate-spin"}):"copied"===k?(0,t.jsx)(l,{className:"h-4 w-4"}):"error"===k?(0,t.jsx)(n,{className:"h-4 w-4"}):(0,t.jsx)(o,{className:"h-4 w-4"}),u(k)]}),(0,t.jsxs)(s.Button,{variant:"secondary",size:"sm",onClick:()=>v("setup-pack",x()),disabled:"copying"===w,children:["copying"===w?(0,t.jsx)(h,{className:"h-4 w-4 animate-spin"}):"copied"===w?(0,t.jsx)(l,{className:"h-4 w-4"}):"error"===w?(0,t.jsx)(n,{className:"h-4 w-4"}):(0,t.jsx)(o,{className:"h-4 w-4"}),u(w)]})]}),(0,t.jsx)("pre",{className:"mt-4 max-h-[360px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90",children:(0,t.jsx)("code",{children:j.code})})]})]})})]})}e.s(["StudioCodePanel",()=>g],57870)}]);