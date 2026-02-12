(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
const variantClasses = {
    default: "bg-primary/15 text-primary border border-primary/30",
    outline: "border border-border/60 text-foreground",
    glass: "bg-background/30 border border-border/30 backdrop-blur text-foreground"
};
function Badge({ className, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]", variantClasses[variant], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const variantClasses = {
    default: "bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:translate-y-[-1px]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "bg-transparent hover:bg-muted/70",
    outline: "border border-border/70 bg-transparent hover:bg-muted/70 text-foreground",
    glow: "bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)_/_0.35)] hover:shadow-[0_0_35px_hsl(var(--primary)_/_0.55)]"
};
const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base"
};
function Button({ className, variant = "default", size = "md", asChild = false, children, ...props }) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50", variantClasses[variant], sizeClasses[size], className);
    if (asChild && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const child = children;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(classes, child.props.className),
            ...props
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-3xl border border-border/40 bg-card/70 text-card-foreground shadow-[0_20px_80px_-60px_rgba(0,0,0,0.5)]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c4 = CardContent;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Switch({ checked, onCheckedChange, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        "aria-label": label,
        onClick: ()=>onCheckedChange(!checked),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex h-7 w-12 items-center rounded-full border border-border/60 bg-background/40 transition-all", checked && "bg-primary/30 border-primary/50"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 translate-x-1 rounded-full bg-foreground/80 shadow transition-all", checked && "translate-x-6 bg-primary")
        }, void 0, false, {
            fileName: "[project]/components/ui/switch.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/switch.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Switch;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme/theme-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemePanel",
    ()=>ThemePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/theme-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ThemePanel() {
    _s();
    const { themeId, colorMode, availableThemes, memoryLaneUnlocked, remainingForUnlock, setThemeId, setColorMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"])();
    const isLight = colorMode === "light";
    const totalThemes = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NITRO_PUBLIC_THEMES"].length;
    const seenThemes = totalThemes - remainingForUnlock;
    const progress = Math.round(seenThemes / totalThemes * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-border/50 bg-background/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Gradient Studio"
                                }, void 0, false, {
                                    fileName: "[project]/components/theme/theme-panel.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Preview every theme to unlock the secret Memory Lane palette."
                                }, void 0, false, {
                                    fileName: "[project]/components/theme/theme-panel.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/theme/theme-panel.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "glass",
                            children: "Shadcn Ready"
                        }, void 0, false, {
                            fileName: "[project]/components/theme/theme-panel.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/theme/theme-panel.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme/theme-panel.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        children: "Color Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Switch between light and dark surfaces."
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/theme-panel.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 sm:justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isLight ? "text-foreground" : "text-muted-foreground")
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        checked: !isLight,
                                        onCheckedChange: (checked)=>setColorMode(checked ? "dark" : "light"),
                                        label: "Toggle dark mode"
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", !isLight ? "text-foreground" : "text-muted-foreground")
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/theme-panel.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/theme/theme-panel.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 rounded-2xl border border-border/40 bg-background/50 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Secret Theme Unlock"
                                            }, void 0, false, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    "Preview all ",
                                                    totalThemes,
                                                    " public themes to reveal Memory Lane."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: memoryLaneUnlocked ? "default" : "outline",
                                        children: memoryLaneUnlocked ? "Unlocked" : `${remainingForUnlock} remaining`
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/theme-panel.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    seenThemes,
                                                    " of ",
                                                    totalThemes,
                                                    " previewed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 rounded-full bg-border/60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full bg-primary/80 transition-all",
                                            style: {
                                                width: `${progress}%`
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/components/theme/theme-panel.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/theme-panel.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/theme/theme-panel.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: availableThemes.map((theme)=>{
                            const isActive = themeId === theme.id;
                            const isSecret = theme.id === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEMORY_LANE_THEME"].id;
                            const isLocked = isSecret && !memoryLaneUnlocked;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "button",
                                tabIndex: isLocked ? -1 : 0,
                                onClick: ()=>!isLocked && setThemeId(theme.id),
                                onKeyDown: (event)=>{
                                    if (isLocked) return;
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        setThemeId(theme.id);
                                    }
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/40 text-left transition-all", isActive && "border-primary/60 shadow-[0_0_25px_hsl(var(--primary)_/_0.35)]", isLocked && "cursor-not-allowed opacity-70"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-24 w-full",
                                        style: {
                                            backgroundImage: theme.preview
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this),
                                            isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center bg-black/40 text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/theme/theme-panel.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-2 px-3 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: theme.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: isActive ? "Active" : "Preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: isActive ? "glow" : "ghost",
                                                size: "sm",
                                                className: "h-7 px-3",
                                                children: isActive ? "Live" : "Set"
                                            }, void 0, false, {
                                                fileName: "[project]/components/theme/theme-panel.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/theme-panel.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, theme.id, true, {
                                fileName: "[project]/components/theme/theme-panel.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/theme/theme-panel.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/theme/theme-panel.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme/theme-panel.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ThemePanel, "2br2NASt8IJuWzYwPB6rKpOIvEY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"]
    ];
});
_c = ThemePanel;
var _c;
__turbopack_context__.k.register(_c, "ThemePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme/token-export-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyToClipboard",
    ()=>copyToClipboard,
    "downloadFile",
    ()=>downloadFile,
    "exportFormats",
    ()=>exportFormats,
    "exportTokens",
    ()=>exportTokens,
    "generateAllThemesCSS",
    ()=>generateAllThemesCSS,
    "generateCSSExport",
    ()=>generateCSSExport,
    "generateCSSVariablesExport",
    ()=>generateCSSVariablesExport,
    "generateFigmaTokensExport",
    ()=>generateFigmaTokensExport,
    "generateHTMLRootExport",
    ()=>generateHTMLRootExport,
    "generateJSONExport",
    ()=>generateJSONExport,
    "generateSCSSExport",
    ()=>generateSCSSExport,
    "generateTailwindExport",
    ()=>generateTailwindExport,
    "generateW3CTokensExport",
    ()=>generateW3CTokensExport,
    "getThemeTokens",
    ()=>getThemeTokens
]);
// Token Export Utilities - Comprehensive export format generators
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/theme-engine.ts [app-client] (ecmascript)");
;
// Token definitions for each theme
const themeTokens = {
    "theme-nitro-mint-apple": {
        "--background": "160 45% 18%",
        "--foreground": "150 40% 95%",
        "--card": "160 40% 20%",
        "--card-foreground": "150 40% 95%",
        "--popover": "160 40% 20%",
        "--popover-foreground": "150 40% 95%",
        "--primary": "145 50% 55%",
        "--primary-foreground": "160 40% 10%",
        "--secondary": "100 45% 68%",
        "--secondary-foreground": "160 40% 10%",
        "--muted": "160 35% 25%",
        "--muted-foreground": "150 30% 70%",
        "--accent": "100 45% 68%",
        "--accent-foreground": "160 40% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "160 30% 30%",
        "--input": "160 30% 30%",
        "--ring": "145 50% 55%",
        "--chart-1": "145 50% 55%",
        "--chart-2": "100 45% 68%",
        "--chart-3": "75 60% 80%",
        "--chart-4": "120 50% 60%",
        "--chart-5": "160 40% 40%",
        "--sidebar-background": "160 45% 16%",
        "--sidebar-foreground": "150 40% 95%",
        "--sidebar-primary": "145 50% 55%",
        "--sidebar-primary-foreground": "160 40% 10%",
        "--sidebar-accent": "160 35% 25%",
        "--sidebar-accent-foreground": "150 40% 95%",
        "--sidebar-border": "160 30% 30%",
        "--sidebar-ring": "145 50% 55%",
        "--app-surface-tint": "hsl(145 50% 55% / 0.1)"
    },
    "theme-nitro-citrus-sherbert": {
        "--background": "25 70% 15%",
        "--foreground": "35 60% 95%",
        "--card": "25 65% 18%",
        "--card-foreground": "35 60% 95%",
        "--popover": "25 65% 18%",
        "--popover-foreground": "35 60% 95%",
        "--primary": "25 80% 55%",
        "--primary-foreground": "25 70% 10%",
        "--secondary": "45 85% 65%",
        "--secondary-foreground": "25 70% 10%",
        "--muted": "25 50% 25%",
        "--muted-foreground": "35 40% 70%",
        "--accent": "55 90% 75%",
        "--accent-foreground": "25 70% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "25 45% 30%",
        "--input": "25 45% 30%",
        "--ring": "25 80% 55%",
        "--chart-1": "25 80% 55%",
        "--chart-2": "45 85% 65%",
        "--chart-3": "55 90% 75%",
        "--chart-4": "15 70% 50%",
        "--chart-5": "35 75% 60%",
        "--sidebar-background": "25 70% 13%",
        "--sidebar-foreground": "35 60% 95%",
        "--sidebar-primary": "25 80% 55%",
        "--sidebar-primary-foreground": "25 70% 10%",
        "--sidebar-accent": "25 50% 25%",
        "--sidebar-accent-foreground": "35 60% 95%",
        "--sidebar-border": "25 45% 30%",
        "--sidebar-ring": "25 80% 55%",
        "--app-surface-tint": "hsl(25 80% 55% / 0.1)"
    },
    "theme-nitro-retro-raincloud": {
        "--background": "215 25% 20%",
        "--foreground": "210 30% 95%",
        "--card": "215 22% 23%",
        "--card-foreground": "210 30% 95%",
        "--popover": "215 22% 23%",
        "--popover-foreground": "210 30% 95%",
        "--primary": "210 25% 55%",
        "--primary-foreground": "215 25% 15%",
        "--secondary": "210 20% 65%",
        "--secondary-foreground": "215 25% 15%",
        "--muted": "215 20% 30%",
        "--muted-foreground": "210 20% 70%",
        "--accent": "210 20% 65%",
        "--accent-foreground": "215 25% 15%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "215 20% 35%",
        "--input": "215 20% 35%",
        "--ring": "210 25% 55%",
        "--chart-1": "210 25% 55%",
        "--chart-2": "210 20% 65%",
        "--chart-3": "210 15% 75%",
        "--chart-4": "215 20% 45%",
        "--chart-5": "215 25% 35%",
        "--sidebar-background": "215 25% 18%",
        "--sidebar-foreground": "210 30% 95%",
        "--sidebar-primary": "210 25% 55%",
        "--sidebar-primary-foreground": "215 25% 15%",
        "--sidebar-accent": "215 20% 30%",
        "--sidebar-accent-foreground": "210 30% 95%",
        "--sidebar-border": "215 20% 35%",
        "--sidebar-ring": "210 25% 55%",
        "--app-surface-tint": "hsl(210 25% 55% / 0.1)"
    },
    "theme-nitro-hanami": {
        "--background": "330 30% 20%",
        "--foreground": "330 30% 95%",
        "--card": "330 25% 23%",
        "--card-foreground": "330 30% 95%",
        "--popover": "330 25% 23%",
        "--popover-foreground": "330 30% 95%",
        "--primary": "330 40% 55%",
        "--primary-foreground": "330 30% 10%",
        "--secondary": "340 45% 65%",
        "--secondary-foreground": "330 30% 10%",
        "--muted": "330 20% 30%",
        "--muted-foreground": "330 25% 70%",
        "--accent": "350 50% 75%",
        "--accent-foreground": "330 30% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "330 20% 35%",
        "--input": "330 20% 35%",
        "--ring": "330 40% 55%",
        "--chart-1": "330 40% 55%",
        "--chart-2": "340 45% 65%",
        "--chart-3": "350 50% 75%",
        "--chart-4": "320 35% 45%",
        "--chart-5": "340 30% 35%",
        "--sidebar-background": "330 30% 18%",
        "--sidebar-foreground": "330 30% 95%",
        "--sidebar-primary": "330 40% 55%",
        "--sidebar-primary-foreground": "330 30% 10%",
        "--sidebar-accent": "330 20% 30%",
        "--sidebar-accent-foreground": "330 30% 95%",
        "--sidebar-border": "330 20% 35%",
        "--sidebar-ring": "330 40% 55%",
        "--app-surface-tint": "hsl(330 40% 55% / 0.1)"
    },
    "theme-nitro-sunrise": {
        "--background": "350 50% 18%",
        "--foreground": "30 60% 95%",
        "--card": "350 45% 21%",
        "--card-foreground": "30 60% 95%",
        "--popover": "350 45% 21%",
        "--popover-foreground": "30 60% 95%",
        "--primary": "355 75% 60%",
        "--primary-foreground": "350 50% 10%",
        "--secondary": "25 85% 65%",
        "--secondary-foreground": "350 50% 10%",
        "--muted": "350 30% 28%",
        "--muted-foreground": "30 40% 75%",
        "--accent": "45 90% 73%",
        "--accent-foreground": "350 50% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "350 25% 35%",
        "--input": "350 25% 35%",
        "--ring": "355 75% 60%",
        "--chart-1": "355 75% 60%",
        "--chart-2": "25 85% 65%",
        "--chart-3": "45 90% 73%",
        "--chart-4": "340 60% 50%",
        "--chart-5": "15 70% 58%",
        "--sidebar-background": "350 50% 16%",
        "--sidebar-foreground": "30 60% 95%",
        "--sidebar-primary": "355 75% 60%",
        "--sidebar-primary-foreground": "350 50% 10%",
        "--sidebar-accent": "350 30% 28%",
        "--sidebar-accent-foreground": "30 60% 95%",
        "--sidebar-border": "350 25% 35%",
        "--sidebar-ring": "355 75% 60%",
        "--app-surface-tint": "hsl(355 75% 60% / 0.1)"
    },
    "theme-nitro-cotton-candy": {
        "--background": "220 50% 20%",
        "--foreground": "220 40% 95%",
        "--card": "220 45% 23%",
        "--card-foreground": "220 40% 95%",
        "--popover": "220 45% 23%",
        "--popover-foreground": "220 40% 95%",
        "--primary": "220 70% 65%",
        "--primary-foreground": "220 50% 10%",
        "--secondary": "270 60% 70%",
        "--secondary-foreground": "220 50% 10%",
        "--muted": "220 30% 30%",
        "--muted-foreground": "220 30% 75%",
        "--accent": "330 65% 75%",
        "--accent-foreground": "220 50% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "220 25% 35%",
        "--input": "220 25% 35%",
        "--ring": "220 70% 65%",
        "--chart-1": "220 70% 65%",
        "--chart-2": "270 60% 70%",
        "--chart-3": "330 65% 75%",
        "--chart-4": "200 60% 55%",
        "--chart-5": "280 50% 45%",
        "--sidebar-background": "220 50% 18%",
        "--sidebar-foreground": "220 40% 95%",
        "--sidebar-primary": "220 70% 65%",
        "--sidebar-primary-foreground": "220 50% 10%",
        "--sidebar-accent": "220 30% 30%",
        "--sidebar-accent-foreground": "220 40% 95%",
        "--sidebar-border": "220 25% 35%",
        "--sidebar-ring": "220 70% 65%",
        "--app-surface-tint": "hsl(220 70% 65% / 0.1)"
    },
    "theme-nitro-lofi-vibes": {
        "--background": "230 25% 18%",
        "--foreground": "230 20% 95%",
        "--card": "230 22% 21%",
        "--card-foreground": "230 20% 95%",
        "--popover": "230 22% 21%",
        "--popover-foreground": "230 20% 95%",
        "--primary": "230 25% 55%",
        "--primary-foreground": "230 25% 10%",
        "--secondary": "260 20% 60%",
        "--secondary-foreground": "230 25% 10%",
        "--muted": "230 15% 28%",
        "--muted-foreground": "230 15% 70%",
        "--accent": "280 20% 55%",
        "--accent-foreground": "230 25% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "230 15% 33%",
        "--input": "230 15% 33%",
        "--ring": "230 25% 55%",
        "--chart-1": "230 25% 55%",
        "--chart-2": "260 20% 60%",
        "--chart-3": "280 20% 55%",
        "--chart-4": "240 20% 45%",
        "--chart-5": "250 20% 35%",
        "--sidebar-background": "230 25% 16%",
        "--sidebar-foreground": "230 20% 95%",
        "--sidebar-primary": "230 25% 55%",
        "--sidebar-primary-foreground": "230 25% 10%",
        "--sidebar-accent": "230 15% 28%",
        "--sidebar-accent-foreground": "230 20% 95%",
        "--sidebar-border": "230 15% 33%",
        "--sidebar-ring": "230 25% 55%",
        "--app-surface-tint": "hsl(230 25% 55% / 0.1)"
    },
    "theme-nitro-desert-khaki": {
        "--background": "35 25% 18%",
        "--foreground": "35 30% 95%",
        "--card": "35 22% 21%",
        "--card-foreground": "35 30% 95%",
        "--popover": "35 22% 21%",
        "--popover-foreground": "35 30% 95%",
        "--primary": "35 25% 50%",
        "--primary-foreground": "35 25% 10%",
        "--secondary": "40 20% 58%",
        "--secondary-foreground": "35 25% 10%",
        "--muted": "35 15% 28%",
        "--muted-foreground": "35 20% 70%",
        "--accent": "45 25% 60%",
        "--accent-foreground": "35 25% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "35 15% 33%",
        "--input": "35 15% 33%",
        "--ring": "35 25% 50%",
        "--chart-1": "35 25% 50%",
        "--chart-2": "40 20% 58%",
        "--chart-3": "45 25% 60%",
        "--chart-4": "30 20% 42%",
        "--chart-5": "38 18% 32%",
        "--sidebar-background": "35 25% 16%",
        "--sidebar-foreground": "35 30% 95%",
        "--sidebar-primary": "35 25% 50%",
        "--sidebar-primary-foreground": "35 25% 10%",
        "--sidebar-accent": "35 15% 28%",
        "--sidebar-accent-foreground": "35 30% 95%",
        "--sidebar-border": "35 15% 33%",
        "--sidebar-ring": "35 25% 50%",
        "--app-surface-tint": "hsl(35 25% 50% / 0.1)"
    },
    "theme-nitro-sunset": {
        "--background": "320 40% 15%",
        "--foreground": "25 60% 95%",
        "--card": "320 35% 18%",
        "--card-foreground": "25 60% 95%",
        "--popover": "320 35% 18%",
        "--popover-foreground": "25 60% 95%",
        "--primary": "335 60% 50%",
        "--primary-foreground": "320 40% 10%",
        "--secondary": "20 70% 55%",
        "--secondary-foreground": "320 40% 10%",
        "--muted": "320 25% 25%",
        "--muted-foreground": "25 40% 75%",
        "--accent": "25 85% 62%",
        "--accent-foreground": "320 40% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "320 20% 32%",
        "--input": "320 20% 32%",
        "--ring": "335 60% 50%",
        "--chart-1": "335 60% 50%",
        "--chart-2": "20 70% 55%",
        "--chart-3": "25 85% 62%",
        "--chart-4": "340 50% 45%",
        "--chart-5": "10 60% 50%",
        "--sidebar-background": "320 40% 13%",
        "--sidebar-foreground": "25 60% 95%",
        "--sidebar-primary": "335 60% 50%",
        "--sidebar-primary-foreground": "320 40% 10%",
        "--sidebar-accent": "320 25% 25%",
        "--sidebar-accent-foreground": "25 60% 95%",
        "--sidebar-border": "320 20% 32%",
        "--sidebar-ring": "335 60% 50%",
        "--app-surface-tint": "hsl(335 60% 50% / 0.1)"
    },
    "theme-nitro-chroma-glow": {
        "--background": "240 60% 15%",
        "--foreground": "240 40% 95%",
        "--card": "240 55% 18%",
        "--card-foreground": "240 40% 95%",
        "--popover": "240 55% 18%",
        "--popover-foreground": "240 40% 95%",
        "--primary": "235 100% 60%",
        "--primary-foreground": "240 60% 10%",
        "--secondary": "280 95% 55%",
        "--secondary-foreground": "240 60% 10%",
        "--muted": "240 30% 25%",
        "--muted-foreground": "240 25% 75%",
        "--accent": "195 100% 50%",
        "--accent-foreground": "240 60% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 25% 32%",
        "--input": "240 25% 32%",
        "--ring": "235 100% 60%",
        "--chart-1": "235 100% 60%",
        "--chart-2": "280 95% 55%",
        "--chart-3": "195 100% 50%",
        "--chart-4": "260 80% 50%",
        "--chart-5": "220 70% 45%",
        "--sidebar-background": "240 60% 13%",
        "--sidebar-foreground": "240 40% 95%",
        "--sidebar-primary": "235 100% 60%",
        "--sidebar-primary-foreground": "240 60% 10%",
        "--sidebar-accent": "240 30% 25%",
        "--sidebar-accent-foreground": "240 40% 95%",
        "--sidebar-border": "240 25% 32%",
        "--sidebar-ring": "235 100% 60%",
        "--app-surface-tint": "hsl(235 100% 60% / 0.1)"
    },
    "theme-nitro-forest": {
        "--background": "150 40% 12%",
        "--foreground": "140 30% 95%",
        "--card": "150 35% 15%",
        "--card-foreground": "140 30% 95%",
        "--popover": "150 35% 15%",
        "--popover-foreground": "140 30% 95%",
        "--primary": "150 45% 45%",
        "--primary-foreground": "150 40% 10%",
        "--secondary": "100 40% 55%",
        "--secondary-foreground": "150 40% 10%",
        "--muted": "150 25% 22%",
        "--muted-foreground": "140 20% 70%",
        "--accent": "85 45% 52%",
        "--accent-foreground": "150 40% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "150 20% 28%",
        "--input": "150 20% 28%",
        "--ring": "150 45% 45%",
        "--chart-1": "150 45% 45%",
        "--chart-2": "100 40% 55%",
        "--chart-3": "85 45% 52%",
        "--chart-4": "120 40% 40%",
        "--chart-5": "160 35% 30%",
        "--sidebar-background": "150 40% 10%",
        "--sidebar-foreground": "140 30% 95%",
        "--sidebar-primary": "150 45% 45%",
        "--sidebar-primary-foreground": "150 40% 10%",
        "--sidebar-accent": "150 25% 22%",
        "--sidebar-accent-foreground": "140 30% 95%",
        "--sidebar-border": "150 20% 28%",
        "--sidebar-ring": "150 45% 45%",
        "--app-surface-tint": "hsl(150 45% 45% / 0.1)"
    },
    "theme-nitro-crimson": {
        "--background": "345 60% 8%",
        "--foreground": "345 40% 95%",
        "--card": "345 55% 11%",
        "--card-foreground": "345 40% 95%",
        "--popover": "345 55% 11%",
        "--popover-foreground": "345 40% 95%",
        "--primary": "350 65% 45%",
        "--primary-foreground": "345 60% 98%",
        "--secondary": "350 50% 55%",
        "--secondary-foreground": "345 60% 98%",
        "--muted": "345 30% 18%",
        "--muted-foreground": "345 25% 70%",
        "--accent": "355 55% 60%",
        "--accent-foreground": "345 60% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "345 25% 25%",
        "--input": "345 25% 25%",
        "--ring": "350 65% 45%",
        "--chart-1": "350 65% 45%",
        "--chart-2": "350 50% 55%",
        "--chart-3": "355 55% 60%",
        "--chart-4": "340 55% 40%",
        "--chart-5": "0 50% 30%",
        "--sidebar-background": "345 60% 6%",
        "--sidebar-foreground": "345 40% 95%",
        "--sidebar-primary": "350 65% 45%",
        "--sidebar-primary-foreground": "345 60% 98%",
        "--sidebar-accent": "345 30% 18%",
        "--sidebar-accent-foreground": "345 40% 95%",
        "--sidebar-border": "345 25% 25%",
        "--sidebar-ring": "350 65% 45%",
        "--app-surface-tint": "hsl(350 65% 45% / 0.1)"
    },
    "theme-nitro-midnight-blurple": {
        "--background": "235 26% 11%",
        "--foreground": "235 30% 95%",
        "--card": "235 22% 12%",
        "--card-foreground": "235 30% 95%",
        "--popover": "235 22% 12%",
        "--popover-foreground": "235 30% 95%",
        "--primary": "241 92% 70%",
        "--primary-foreground": "235 26% 98%",
        "--secondary": "210 92% 65%",
        "--secondary-foreground": "235 26% 98%",
        "--muted": "235 20% 20%",
        "--muted-foreground": "235 20% 72%",
        "--accent": "210 92% 65%",
        "--accent-foreground": "235 26% 98%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "235 18% 25%",
        "--input": "235 18% 25%",
        "--ring": "241 92% 70%",
        "--chart-1": "241 92% 70%",
        "--chart-2": "210 92% 65%",
        "--chart-3": "251 92% 62%",
        "--chart-4": "220 80% 55%",
        "--chart-5": "260 70% 45%",
        "--sidebar-background": "235 26% 9%",
        "--sidebar-foreground": "235 30% 95%",
        "--sidebar-primary": "241 92% 70%",
        "--sidebar-primary-foreground": "235 26% 98%",
        "--sidebar-accent": "235 20% 20%",
        "--sidebar-accent-foreground": "235 30% 95%",
        "--sidebar-border": "235 18% 25%",
        "--sidebar-ring": "241 92% 70%",
        "--app-surface-tint": "hsl(241 92% 70% / 0.1)"
    },
    "theme-nitro-mars": {
        "--background": "10 45% 12%",
        "--foreground": "20 40% 95%",
        "--card": "10 40% 15%",
        "--card-foreground": "20 40% 95%",
        "--popover": "10 40% 15%",
        "--popover-foreground": "20 40% 95%",
        "--primary": "12 55% 55%",
        "--primary-foreground": "10 45% 10%",
        "--secondary": "20 50% 45%",
        "--secondary-foreground": "10 45% 10%",
        "--muted": "10 25% 22%",
        "--muted-foreground": "20 25% 72%",
        "--accent": "25 55% 50%",
        "--accent-foreground": "10 45% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "10 20% 28%",
        "--input": "10 20% 28%",
        "--ring": "12 55% 55%",
        "--chart-1": "12 55% 55%",
        "--chart-2": "20 50% 45%",
        "--chart-3": "25 55% 50%",
        "--chart-4": "5 50% 40%",
        "--chart-5": "15 45% 32%",
        "--sidebar-background": "10 45% 10%",
        "--sidebar-foreground": "20 40% 95%",
        "--sidebar-primary": "12 55% 55%",
        "--sidebar-primary-foreground": "10 45% 10%",
        "--sidebar-accent": "10 25% 22%",
        "--sidebar-accent-foreground": "20 40% 95%",
        "--sidebar-border": "10 20% 28%",
        "--sidebar-ring": "12 55% 55%",
        "--app-surface-tint": "hsl(12 55% 55% / 0.1)"
    },
    "theme-nitro-dusk": {
        "--background": "260 30% 15%",
        "--foreground": "260 30% 95%",
        "--card": "260 25% 18%",
        "--card-foreground": "260 30% 95%",
        "--popover": "260 25% 18%",
        "--popover-foreground": "260 30% 95%",
        "--primary": "270 35% 60%",
        "--primary-foreground": "260 30% 10%",
        "--secondary": "280 30% 50%",
        "--secondary-foreground": "260 30% 10%",
        "--muted": "260 20% 25%",
        "--muted-foreground": "260 20% 72%",
        "--accent": "290 35% 55%",
        "--accent-foreground": "260 30% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "260 18% 32%",
        "--input": "260 18% 32%",
        "--ring": "270 35% 60%",
        "--chart-1": "270 35% 60%",
        "--chart-2": "280 30% 50%",
        "--chart-3": "290 35% 55%",
        "--chart-4": "260 30% 45%",
        "--chart-5": "250 25% 35%",
        "--sidebar-background": "260 30% 13%",
        "--sidebar-foreground": "260 30% 95%",
        "--sidebar-primary": "270 35% 60%",
        "--sidebar-primary-foreground": "260 30% 10%",
        "--sidebar-accent": "260 20% 25%",
        "--sidebar-accent-foreground": "260 30% 95%",
        "--sidebar-border": "260 18% 32%",
        "--sidebar-ring": "270 35% 60%",
        "--app-surface-tint": "hsl(270 35% 60% / 0.1)"
    },
    "theme-nitro-under-the-sea": {
        "--background": "200 50% 12%",
        "--foreground": "190 40% 95%",
        "--card": "200 45% 15%",
        "--card-foreground": "190 40% 95%",
        "--popover": "200 45% 15%",
        "--popover-foreground": "190 40% 95%",
        "--primary": "190 50% 48%",
        "--primary-foreground": "200 50% 10%",
        "--secondary": "180 45% 40%",
        "--secondary-foreground": "200 50% 10%",
        "--muted": "200 30% 22%",
        "--muted-foreground": "190 25% 72%",
        "--accent": "175 50% 35%",
        "--accent-foreground": "200 50% 98%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "200 25% 28%",
        "--input": "200 25% 28%",
        "--ring": "190 50% 48%",
        "--chart-1": "190 50% 48%",
        "--chart-2": "180 45% 40%",
        "--chart-3": "175 50% 35%",
        "--chart-4": "210 45% 42%",
        "--chart-5": "195 40% 32%",
        "--sidebar-background": "200 50% 10%",
        "--sidebar-foreground": "190 40% 95%",
        "--sidebar-primary": "190 50% 48%",
        "--sidebar-primary-foreground": "200 50% 10%",
        "--sidebar-accent": "200 30% 22%",
        "--sidebar-accent-foreground": "190 40% 95%",
        "--sidebar-border": "200 25% 28%",
        "--sidebar-ring": "190 50% 48%",
        "--app-surface-tint": "hsl(190 50% 48% / 0.1)"
    },
    "theme-nitro-retro-storm": {
        "--background": "210 25% 18%",
        "--foreground": "210 20% 95%",
        "--card": "210 22% 21%",
        "--card-foreground": "210 20% 95%",
        "--popover": "210 22% 21%",
        "--popover-foreground": "210 20% 95%",
        "--primary": "210 20% 55%",
        "--primary-foreground": "210 25% 10%",
        "--secondary": "210 15% 60%",
        "--secondary-foreground": "210 25% 10%",
        "--muted": "210 15% 28%",
        "--muted-foreground": "210 15% 70%",
        "--accent": "210 15% 50%",
        "--accent-foreground": "210 25% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "210 15% 33%",
        "--input": "210 15% 33%",
        "--ring": "210 20% 55%",
        "--chart-1": "210 20% 55%",
        "--chart-2": "210 15% 60%",
        "--chart-3": "210 15% 50%",
        "--chart-4": "200 15% 45%",
        "--chart-5": "220 15% 35%",
        "--sidebar-background": "210 25% 16%",
        "--sidebar-foreground": "210 20% 95%",
        "--sidebar-primary": "210 20% 55%",
        "--sidebar-primary-foreground": "210 25% 10%",
        "--sidebar-accent": "210 15% 28%",
        "--sidebar-accent-foreground": "210 20% 95%",
        "--sidebar-border": "210 15% 33%",
        "--sidebar-ring": "210 20% 55%",
        "--app-surface-tint": "hsl(210 20% 55% / 0.1)"
    },
    "theme-nitro-neon-nights": {
        "--background": "245 60% 8%",
        "--foreground": "260 40% 95%",
        "--card": "245 55% 11%",
        "--card-foreground": "260 40% 95%",
        "--popover": "245 55% 11%",
        "--popover-foreground": "260 40% 95%",
        "--primary": "290 90% 55%",
        "--primary-foreground": "245 60% 98%",
        "--secondary": "195 100% 45%",
        "--secondary-foreground": "245 60% 98%",
        "--muted": "245 30% 18%",
        "--muted-foreground": "260 25% 72%",
        "--accent": "195 100% 45%",
        "--accent-foreground": "245 60% 98%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "245 25% 25%",
        "--input": "245 25% 25%",
        "--ring": "290 90% 55%",
        "--chart-1": "290 90% 55%",
        "--chart-2": "195 100% 45%",
        "--chart-3": "260 80% 50%",
        "--chart-4": "320 80% 55%",
        "--chart-5": "180 80% 45%",
        "--sidebar-background": "245 60% 6%",
        "--sidebar-foreground": "260 40% 95%",
        "--sidebar-primary": "290 90% 55%",
        "--sidebar-primary-foreground": "245 60% 98%",
        "--sidebar-accent": "245 30% 18%",
        "--sidebar-accent-foreground": "260 40% 95%",
        "--sidebar-border": "245 25% 25%",
        "--sidebar-ring": "290 90% 55%",
        "--app-surface-tint": "hsl(290 90% 55% / 0.1)"
    },
    "theme-nitro-strawberry-lemonade": {
        "--background": "340 55% 18%",
        "--foreground": "40 70% 95%",
        "--card": "340 50% 21%",
        "--card-foreground": "40 70% 95%",
        "--popover": "340 50% 21%",
        "--popover-foreground": "40 70% 95%",
        "--primary": "345 70% 50%",
        "--primary-foreground": "340 55% 98%",
        "--secondary": "45 80% 58%",
        "--secondary-foreground": "340 55% 10%",
        "--muted": "340 30% 28%",
        "--muted-foreground": "40 40% 75%",
        "--accent": "45 80% 58%",
        "--accent-foreground": "340 55% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "340 25% 35%",
        "--input": "340 25% 35%",
        "--ring": "345 70% 50%",
        "--chart-1": "345 70% 50%",
        "--chart-2": "45 80% 58%",
        "--chart-3": "340 55% 45%",
        "--chart-4": "20 70% 50%",
        "--chart-5": "55 75% 55%",
        "--sidebar-background": "340 55% 16%",
        "--sidebar-foreground": "40 70% 95%",
        "--sidebar-primary": "345 70% 50%",
        "--sidebar-primary-foreground": "340 55% 98%",
        "--sidebar-accent": "340 30% 28%",
        "--sidebar-accent-foreground": "40 70% 95%",
        "--sidebar-border": "340 25% 35%",
        "--sidebar-ring": "345 70% 50%",
        "--app-surface-tint": "hsl(345 70% 50% / 0.1)"
    },
    "theme-nitro-aurora": {
        "--background": "190 50% 12%",
        "--foreground": "160 50% 95%",
        "--card": "190 45% 15%",
        "--card-foreground": "160 50% 95%",
        "--popover": "190 45% 15%",
        "--popover-foreground": "160 50% 95%",
        "--primary": "175 60% 52%",
        "--primary-foreground": "190 50% 10%",
        "--secondary": "145 45% 55%",
        "--secondary-foreground": "190 50% 10%",
        "--muted": "190 30% 22%",
        "--muted-foreground": "160 30% 72%",
        "--accent": "100 45% 55%",
        "--accent-foreground": "190 50% 98%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "190 25% 28%",
        "--input": "190 25% 28%",
        "--ring": "175 60% 52%",
        "--chart-1": "175 60% 52%",
        "--chart-2": "145 45% 55%",
        "--chart-3": "100 45% 55%",
        "--chart-4": "160 50% 42%",
        "--chart-5": "200 45% 35%",
        "--sidebar-background": "190 50% 10%",
        "--sidebar-foreground": "160 50% 95%",
        "--sidebar-primary": "175 60% 52%",
        "--sidebar-primary-foreground": "190 50% 10%",
        "--sidebar-accent": "190 30% 22%",
        "--sidebar-accent-foreground": "160 50% 95%",
        "--sidebar-border": "190 25% 28%",
        "--sidebar-ring": "175 60% 52%",
        "--app-surface-tint": "hsl(175 60% 52% / 0.1)"
    },
    "theme-nitro-sepia": {
        "--background": "30 25% 12%",
        "--foreground": "35 30% 95%",
        "--card": "30 22% 15%",
        "--card-foreground": "35 30% 95%",
        "--popover": "30 22% 15%",
        "--popover-foreground": "35 30% 95%",
        "--primary": "30 25% 52%",
        "--primary-foreground": "30 25% 10%",
        "--secondary": "35 25% 58%",
        "--secondary-foreground": "30 25% 10%",
        "--muted": "30 15% 22%",
        "--muted-foreground": "35 20% 70%",
        "--accent": "40 30% 55%",
        "--accent-foreground": "30 25% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "30 15% 28%",
        "--input": "30 15% 28%",
        "--ring": "30 25% 52%",
        "--chart-1": "30 25% 52%",
        "--chart-2": "35 25% 58%",
        "--chart-3": "40 30% 55%",
        "--chart-4": "25 20% 42%",
        "--chart-5": "35 20% 32%",
        "--sidebar-background": "30 25% 10%",
        "--sidebar-foreground": "35 30% 95%",
        "--sidebar-primary": "30 25% 52%",
        "--sidebar-primary-foreground": "30 25% 10%",
        "--sidebar-accent": "30 15% 22%",
        "--sidebar-accent-foreground": "35 30% 95%",
        "--sidebar-border": "30 15% 28%",
        "--sidebar-ring": "30 25% 52%",
        "--app-surface-tint": "hsl(30 25% 52% / 0.1)"
    },
    "theme-nitro-memory-lane": {
        "--background": "320 20% 18%",
        "--foreground": "210 20% 90%",
        "--card": "320 18% 21%",
        "--card-foreground": "210 20% 90%",
        "--popover": "320 18% 21%",
        "--popover-foreground": "210 20% 90%",
        "--primary": "280 30% 62%",
        "--primary-foreground": "320 20% 10%",
        "--secondary": "200 25% 55%",
        "--secondary-foreground": "320 20% 10%",
        "--muted": "320 15% 28%",
        "--muted-foreground": "210 15% 68%",
        "--accent": "165 25% 58%",
        "--accent-foreground": "320 20% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "320 12% 32%",
        "--input": "320 12% 32%",
        "--ring": "280 30% 62%",
        "--chart-1": "280 30% 62%",
        "--chart-2": "200 25% 55%",
        "--chart-3": "165 25% 58%",
        "--chart-4": "300 25% 48%",
        "--chart-5": "180 20% 42%",
        "--sidebar-background": "320 20% 16%",
        "--sidebar-foreground": "210 20% 90%",
        "--sidebar-primary": "280 30% 62%",
        "--sidebar-primary-foreground": "320 20% 10%",
        "--sidebar-accent": "320 15% 28%",
        "--sidebar-accent-foreground": "210 20% 90%",
        "--sidebar-border": "320 12% 32%",
        "--sidebar-ring": "280 30% 62%",
        "--app-surface-tint": "hsl(280 30% 62% / 0.1)"
    }
};
const getThemeTokens = (themeId)=>{
    return themeTokens[themeId] ?? themeTokens["theme-nitro-midnight-blurple"];
};
const getThemeInfo = (themeId)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NITRO_ALL_THEMES"].find((t)=>t.id === themeId);
};
const generateAppGradient = (themeId)=>{
    const theme = getThemeInfo(themeId);
    if (!theme) return "";
    const tokens = getThemeTokens(themeId);
    const primaryHsl = tokens["--primary"].split(" ").join(", ");
    const accentHsl = tokens["--accent"].split(" ").join(", ");
    const primary = `hsl(${primaryHsl})`;
    const accent = `hsl(${accentHsl})`;
    return `radial-gradient(1050px 560px at -10% -20%, ${primary.replace(")", " / 0.3)")}, transparent 60%),
    radial-gradient(920px 520px at 112% 2%, ${accent.replace(")", " / 0.22)")}, transparent 58%),
    linear-gradient(160deg, hsl(${tokens["--background"]}) 0%, hsl(${tokens["--background"]}) 50%, hsl(${tokens["--background"]}) 100%)`;
};
const generateCSSExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const tokens = getThemeTokens(themeId);
    const theme = getThemeInfo(themeId);
    const tokenEntries = Object.entries(tokens);
    const cssVariables = tokenEntries.filter(([key])=>key !== "--app-surface-tint").map(([key, value])=>`  ${key}: ${value};`).join("\n");
    const appGradient = generateAppGradient(themeId);
    const content = `/* Gradient Forge Theme: ${theme?.label ?? themeId} */
/* Color Mode: ${colorMode} */

.${themeId} {
${cssVariables}
  --app-gradient: ${appGradient};
  ${tokens["--app-surface-tint"] ? `--app-surface-tint: ${tokens["--app-surface-tint"]};` : ""}
}

/* Surface Layer Styles */
.bg-card,
.bg-popover,
.bg-sidebar {
  background-color: hsl(var(--background) / 0.34);
  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));
  backdrop-filter: blur(16px);
}`;
    return {
        content,
        filename: `${themeId}-theme.css`,
        mimeType: "text/css"
    };
};
const generateSCSSExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const tokens = getThemeTokens(themeId);
    const theme = getThemeInfo(themeId);
    const tokenEntries = Object.entries(tokens);
    const scssVariables = tokenEntries.filter(([key])=>key !== "--app-surface-tint").map(([key, value])=>`$${key.replace("--", "")}: ${value};`).join("\n");
    const appGradient = generateAppGradient(themeId);
    const content = `// Gradient Forge Theme: ${theme?.label ?? themeId}
// Color Mode: ${colorMode}

${scssVariables}
$app-gradient: ${appGradient};
$app-surface-tint: ${tokens["--app-surface-tint"] ?? "transparent"};

// SCSS Mixins
@mixin surface-layer {
  background-color: hsl($background / 0.34);
  background-image: linear-gradient($app-surface-tint, $app-surface-tint);
  backdrop-filter: blur(16px);
}

// Usage
// .my-card {
//   @include surface-layer;
// }`;
    return {
        content,
        filename: `${themeId}-theme.scss`,
        mimeType: "text/x-scss"
    };
};
const generateJSONExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const tokens = getThemeTokens(themeId);
    const theme = getThemeInfo(themeId);
    const tokenEntries = Object.entries(tokens);
    const colorTokens = {};
    tokenEntries.forEach(([key, value])=>{
        const tokenName = key.replace("--", "");
        if (key === "--app-surface-tint") {
            colorTokens[tokenName] = value;
        } else {
            colorTokens[tokenName] = `hsl(${value})`;
        }
    });
    const exportData = {
        name: theme?.label ?? themeId,
        id: themeId,
        colorMode,
        version: "1.0.0",
        generatedAt: new Date().toISOString(),
        colors: colorTokens,
        gradients: {
            app: generateAppGradient(themeId)
        }
    };
    return {
        content: JSON.stringify(exportData, null, 2),
        filename: `${themeId}-tokens.json`,
        mimeType: "application/json"
    };
};
const generateTailwindExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const tokens = getThemeTokens(themeId);
    const theme = getThemeInfo(themeId);
    const colorEntries = Object.entries(tokens).filter(([key])=>key !== "--app-surface-tint").map(([key, value])=>{
        const name = key.replace("--", "");
        return `      ${name}: "hsl(var(${key}))"`;
    }).join(",\n");
    const content = `// Gradient Forge Theme: ${theme?.label ?? themeId}
// Color Mode: ${colorMode}

// Add to your tailwind.config.ts or tailwind.config.js:

import type { Config } from "tailwindcss";

const config: Config = {
  // ... other config
  theme: {
    extend: {
      colors: {
${colorEntries}
      },
      backgroundImage: {
        "app-gradient": "var(--app-gradient)",
      },
    },
  },
};

export default config;

// Don't forget to add the CSS variables to your globals.css!`;
    return {
        content,
        filename: `${themeId}-tailwind.ts`,
        mimeType: "text/typescript"
    };
};
const generateW3CTokensExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const tokens = getThemeTokens(themeId);
    const theme = getThemeInfo(themeId);
    const tokenEntries = Object.entries(tokens);
    const w3cTokens = {
        $schema: "https://design-tokens.github.io/schema/format.json",
        name: theme?.label ?? themeId,
        id: themeId,
        colorMode,
        version: "1.0.0",
        generatedAt: new Date().toISOString()
    };
    const colorTokens = {};
    tokenEntries.forEach(([key, value])=>{
        const tokenName = key.replace("--", "").replace(/-/g, ".");
        if (key === "--app-surface-tint") {
            colorTokens[tokenName] = {
                $type: "color",
                $value: value,
                $description: "Surface tint color for glassmorphism effects"
            };
        } else {
            colorTokens[tokenName] = {
                $type: "color",
                $value: `hsl(${value})`
            };
        }
    });
    w3cTokens.colors = colorTokens;
    w3cTokens.gradients = {
        app: {
            $type: "gradient",
            $value: generateAppGradient(themeId)
        }
    };
    return {
        content: JSON.stringify(w3cTokens, null, 2),
        filename: `${themeId}-w3c-tokens.json`,
        mimeType: "application/json"
    };
};
const generateFigmaTokensExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const tokens = getThemeTokens(themeId);
    const theme = getThemeInfo(themeId);
    const tokenEntries = Object.entries(tokens);
    const figmaTokens = {};
    const colorTokens = {};
    tokenEntries.forEach(([key, value])=>{
        const tokenName = key.replace("--", "");
        if (key === "--app-surface-tint") {
            colorTokens[tokenName] = {
                value: value,
                type: "color"
            };
        } else {
            colorTokens[tokenName] = {
                value: `hsl(${value})`,
                type: "color"
            };
        }
    });
    figmaTokens.colors = colorTokens;
    const fullExport = {
        GradientForge: {
            [theme?.label ?? themeId]: figmaTokens
        }
    };
    return {
        content: JSON.stringify(fullExport, null, 2),
        filename: `${themeId}-figma-tokens.json`,
        mimeType: "application/json"
    };
};
const generateCSSVariablesExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const tokens = getThemeTokens(themeId);
    const theme = getThemeInfo(themeId);
    const tokenEntries = Object.entries(tokens);
    const cssVariables = tokenEntries.filter(([key])=>key !== "--app-surface-tint").map(([key, value])=>`${key}: ${value};`).join("\n");
    const content = `/* Gradient Forge Theme: ${theme?.label ?? themeId} */
/* Color Mode: ${colorMode} */
/* Paste these into your :root or theme class */

${cssVariables}
--app-gradient: ${generateAppGradient(themeId)};
${tokens["--app-surface-tint"] ? `--app-surface-tint: ${tokens["--app-surface-tint"]};` : ""}`;
    return {
        content,
        filename: `${themeId}-variables.css`,
        mimeType: "text/css"
    };
};
const generateHTMLRootExport = (options)=>{
    const { themeId, colorMode = "dark" } = options;
    const theme = getThemeInfo(themeId);
    const content = `<!-- Gradient Forge Theme: ${theme?.label ?? themeId} -->
<!-- Add these attributes to your <html> element -->

<html 
  lang="en"
  class="${colorMode} ${themeId}"
  data-theme="${themeId}"
  data-color-mode="${colorMode}"
  suppressHydrationWarning
>
  <!-- Your app content -->
</html>`;
    return {
        content,
        filename: `${themeId}-html-root.html`,
        mimeType: "text/html"
    };
};
const generateAllThemesCSS = ()=>{
    const allThemes = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NITRO_ALL_THEMES"].map((theme)=>{
        const tokens = getThemeTokens(theme.id);
        const tokenEntries = Object.entries(tokens);
        const cssVariables = tokenEntries.filter(([key])=>key !== "--app-surface-tint").map(([key, value])=>`  ${key}: ${value};`).join("\n");
        return `/* ${theme.label} */
.${theme.id} {
${cssVariables}
  --app-surface-tint: ${tokens["--app-surface-tint"] ?? "transparent"};
}`;
    }).join("\n\n");
    return {
        content: `/* Gradient Forge - All Themes CSS */
/* Generated on ${new Date().toISOString()} */

${allThemes}

/* Surface Layer Styles */
.bg-card,
.bg-popover,
.bg-sidebar {
  background-color: hsl(var(--background) / 0.34);
  background-image: linear-gradient(var(--app-surface-tint), var(--app-surface-tint));
  backdrop-filter: blur(16px);
}`,
        filename: "gradient-forge-all-themes.css",
        mimeType: "text/css"
    };
};
const exportTokens = (options)=>{
    switch(options.format){
        case "css":
            return generateCSSExport(options);
        case "scss":
            return generateSCSSExport(options);
        case "json":
            return generateJSONExport(options);
        case "tailwind":
            return generateTailwindExport(options);
        case "w3c-tokens":
            return generateW3CTokensExport(options);
        case "figma-tokens":
            return generateFigmaTokensExport(options);
        case "css-variables":
            return generateCSSVariablesExport(options);
        case "html-root":
            return generateHTMLRootExport(options);
        default:
            return generateCSSExport(options);
    }
};
const downloadFile = (result)=>{
    const blob = new Blob([
        result.content
    ], {
        type: result.mimeType
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = result.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const copyToClipboard = async (content)=>{
    try {
        await navigator.clipboard.writeText(content);
        return true;
    } catch  {
        return false;
    }
};
const exportFormats = [
    {
        value: "css",
        label: "CSS Theme",
        description: "Complete CSS theme file with all variables",
        extension: "css"
    },
    {
        value: "scss",
        label: "SCSS",
        description: "SCSS variables with mixins",
        extension: "scss"
    },
    {
        value: "json",
        label: "JSON Tokens",
        description: "Structured JSON with all theme data",
        extension: "json"
    },
    {
        value: "tailwind",
        label: "Tailwind Config",
        description: "Ready-to-use Tailwind configuration",
        extension: "ts"
    },
    {
        value: "w3c-tokens",
        label: "W3C Design Tokens",
        description: "W3C standard design tokens format",
        extension: "json"
    },
    {
        value: "figma-tokens",
        label: "Figma Tokens",
        description: "Figma Tokens plugin compatible format",
        extension: "json"
    },
    {
        value: "css-variables",
        label: "CSS Variables",
        description: "Raw CSS variables for :root",
        extension: "css"
    },
    {
        value: "html-root",
        label: "HTML Root",
        description: "HTML root element attributes",
        extension: "html"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme/studio-code-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioCodePanel",
    ()=>StudioCodePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code-2.js [app-client] (ecmascript) <export default as FileCode2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/theme-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$token$2d$export$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/token-export-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function StudioCodePanel({ themeId = "theme-nitro-midnight-blurple", colorMode = "dark" }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("preview");
    const [copyState, setCopyState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedFormat, setSelectedFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("css");
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudioCodePanel.useMemo[theme]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NITRO_ALL_THEMES"].find({
                "StudioCodePanel.useMemo[theme]": (t)=>t.id === themeId
            }["StudioCodePanel.useMemo[theme]"])
    }["StudioCodePanel.useMemo[theme]"], [
        themeId
    ]);
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudioCodePanel.useMemo[tokens]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$token$2d$export$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(themeId)
    }["StudioCodePanel.useMemo[tokens]"], [
        themeId
    ]);
    const exportResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudioCodePanel.useMemo[exportResult]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$token$2d$export$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportTokens"])({
                format: selectedFormat,
                themeId,
                colorMode
            });
        }
    }["StudioCodePanel.useMemo[exportResult]"], [
        selectedFormat,
        themeId,
        colorMode
    ]);
    const allThemesExport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudioCodePanel.useMemo[allThemesExport]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$token$2d$export$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAllThemesCSS"])()
    }["StudioCodePanel.useMemo[allThemesExport]"], []);
    const snippets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudioCodePanel.useMemo[snippets]": ()=>{
            return [
                {
                    id: "root-layout",
                    label: "Root Layout",
                    path: "app/layout.tsx",
                    description: "Set default theme and wrap app with ThemeProvider.",
                    code: `import type { Metadata } from "next";
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
      className="${colorMode} ${themeId}"
      data-theme="${themeId}"
      data-color-mode="${colorMode}"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider defaultTheme="${themeId}" defaultColorMode="${colorMode}">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`
                },
                {
                    id: "theme-engine",
                    label: "Theme Engine",
                    path: "components/theme/theme-engine.ts",
                    description: "Add and manage your theme presets.",
                    code: `export const NITRO_PUBLIC_THEMES = [
  {
    id: "${themeId}",
    label: "${theme?.label ?? "Theme"}",
    preview: "${theme?.preview ?? ""}",
  },
] as const;

export type ThemeId = (typeof NITRO_PUBLIC_THEMES)[number]["id"];`
                },
                {
                    id: "globals",
                    label: "Global Tokens",
                    path: "app/globals.css",
                    description: "Define surface and app gradient tokens for all components.",
                    code: generateThemeCSS(themeId, tokens)
                },
                {
                    id: "theme-context",
                    label: "Theme Context",
                    path: "components/theme/theme-context.tsx",
                    description: "Client provider that applies theme and color mode state.",
                    code: generateThemeContextCode(themeId, colorMode)
                }
            ];
        }
    }["StudioCodePanel.useMemo[snippets]"], [
        themeId,
        colorMode,
        theme,
        tokens
    ]);
    const [activeSnippetId, setActiveSnippetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(snippets[0].id);
    const activeSnippet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudioCodePanel.useMemo[activeSnippet]": ()=>snippets.find({
                "StudioCodePanel.useMemo[activeSnippet]": (snippet)=>snippet.id === activeSnippetId
            }["StudioCodePanel.useMemo[activeSnippet]"]) ?? snippets[0]
    }["StudioCodePanel.useMemo[activeSnippet]"], [
        activeSnippetId,
        snippets
    ]);
    const handleCopy = async (id, content)=>{
        setCopyState((prev)=>({
                ...prev,
                [id]: "copying"
            }));
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$token$2d$export$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(content);
        setCopyState((prev)=>({
                ...prev,
                [id]: success ? "copied" : "error"
            }));
        window.setTimeout(()=>{
            setCopyState((prev)=>({
                    ...prev,
                    [id]: "idle"
                }));
        }, 1400);
    };
    const handleDownload = (result)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$token$2d$export$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFile"])(result);
    };
    const copyLabel = (status)=>{
        if (status === "copying") return "Copying...";
        if (status === "copied") return "Copied";
        if (status === "error") return "Copy failed";
        return "Copy code";
    };
    const setupPackState = copyState["setup-pack"] ?? "idle";
    const activeSnippetState = copyState[activeSnippet.id] ?? "idle";
    const tokensState = copyState["tokens"] ?? "idle";
    const allThemesState = copyState["all-themes"] ?? "idle";
    const requiredSnippetIds = [
        "root-layout",
        "theme-engine",
        "theme-context",
        "globals"
    ];
    const getSetupPack = ()=>{
        return requiredSnippetIds.map((id)=>snippets.find((snippet)=>snippet.id === id)).filter((snippet)=>Boolean(snippet)).map((snippet)=>`// ${snippet.path}\n${snippet.code}`).join("\n\n");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-border/50 bg-background/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Token Export"
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-muted-foreground",
                                        children: [
                                            "Preview install guidance or open full code snippets with copy actions.",
                                            theme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block mt-1 font-medium text-foreground",
                                                children: [
                                                    "Current theme: ",
                                                    theme.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "glass",
                                className: "gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__["FileCode2"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    " Dev Ready"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: tab === "preview" ? "default" : "ghost",
                                size: "sm",
                                onClick: ()=>setTab("preview"),
                                children: "Preview"
                            }, void 0, false, {
                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: tab === "code" ? "default" : "ghost",
                                size: "sm",
                                onClick: ()=>setTab("code"),
                                children: "Code"
                            }, void 0, false, {
                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: tab === "tokens" ? "default" : "ghost",
                                size: "sm",
                                onClick: ()=>setTab("tokens"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                        className: "h-3.5 w-3.5 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    "Tokens"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/theme/studio-code-panel.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: tab === "preview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-border/40 bg-background/50 p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "Copy-ready setup"
                        }, void 0, false, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-muted-foreground",
                            children: "Add data-theme attributes to your app root, import global tokens, and use ThemeProvider to keep theme state synced across shadcn components."
                        }, void 0, false, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        theme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-4 rounded-xl bg-background/70 border border-border/40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-xl shadow-lg",
                                        style: {
                                            background: theme.preview
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: theme.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground font-mono",
                                                children: theme.id
                                            }, void 0, false, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-1 capitalize",
                                                children: [
                                                    colorMode,
                                                    " mode"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 209,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                lineNumber: 204,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: requiredSnippetIds.map((id)=>{
                                const snippet = snippets.find((item)=>item.id === id);
                                if (!snippet) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    children: snippet.path
                                }, id, false, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 223,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/docs",
                                        children: "Open docs"
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: ()=>handleCopy("setup-pack", getSetupPack()),
                                    disabled: setupPackState === "copying",
                                    children: [
                                        setupPackState === "copying" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this) : setupPackState === "copied" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this) : setupPackState === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this),
                                        copyLabel(setupPackState)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setTab("code"),
                                    children: "Open code snippets"
                                }, void 0, false, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this) : tab === "code" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: snippets.map((snippet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: activeSnippetId === snippet.id ? "default" : "ghost",
                                    onClick: ()=>setActiveSnippetId(snippet.id),
                                    children: snippet.label
                                }, snippet.id, false, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border/40 bg-background/50 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "break-all text-sm font-semibold",
                                                    children: activeSnippet.path
                                                }, void 0, false, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: activeSnippet.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>handleCopy(activeSnippet.id, activeSnippet.code),
                                                    disabled: activeSnippetState === "copying",
                                                    children: [
                                                        activeSnippetState === "copying" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 23
                                                        }, this) : activeSnippetState === "copied" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 23
                                                        }, this) : activeSnippetState === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 23
                                                        }, this),
                                                        copyLabel(activeSnippetState)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    onClick: ()=>handleCopy("setup-pack", getSetupPack()),
                                                    disabled: setupPackState === "copying",
                                                    children: [
                                                        setupPackState === "copying" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 23
                                                        }, this) : setupPackState === "copied" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 23
                                                        }, this) : setupPackState === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Copy All"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-4 max-h-[360px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: activeSnippet.code
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                {
                                    value: "css",
                                    label: "CSS"
                                },
                                {
                                    value: "json",
                                    label: "JSON"
                                },
                                {
                                    value: "tailwind",
                                    label: "Tailwind"
                                },
                                {
                                    value: "w3c-tokens",
                                    label: "W3C"
                                }
                            ].map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: selectedFormat === format.value ? "default" : "ghost",
                                    onClick: ()=>setSelectedFormat(format.value),
                                    children: format.label
                                }, format.value, false, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border/40 bg-background/50 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold",
                                                    children: exportResult.filename
                                                }, void 0, false, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: [
                                                        theme?.label,
                                                        " theme in ",
                                                        selectedFormat.toUpperCase(),
                                                        " format"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>handleCopy("tokens", exportResult.content),
                                                    disabled: tokensState === "copying",
                                                    children: [
                                                        tokensState === "copying" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 23
                                                        }, this) : tokensState === "copied" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 23
                                                        }, this) : tokensState === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 23
                                                        }, this),
                                                        copyLabel(tokensState)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "default",
                                                    size: "sm",
                                                    onClick: ()=>handleDownload(exportResult),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Download"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "max-h-[300px] overflow-auto rounded-2xl border border-border/40 bg-black/80 p-4 text-xs text-white/90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: exportResult.content
                                    }, void 0, false, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 377,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border/40 bg-background/50 p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "All Themes"
                                            }, void 0, false, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 385,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    "Export all ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NITRO_ALL_THEMES"].length,
                                                    " themes at once"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 386,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 384,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>handleCopy("all-themes", allThemesExport.content),
                                                disabled: allThemesState === "copying",
                                                children: [
                                                    allThemesState === "copying" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 23
                                                    }, this) : allThemesState === "copied" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this) : allThemesState === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this),
                                                    copyLabel(allThemesState)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                size: "sm",
                                                onClick: ()=>handleDownload(allThemesExport),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "h-4 w-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Download All"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/theme/studio-code-panel.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/theme/studio-code-panel.tsx",
                                lineNumber: 383,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/theme/studio-code-panel.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/theme/studio-code-panel.tsx",
                    lineNumber: 319,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme/studio-code-panel.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme/studio-code-panel.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(StudioCodePanel, "xSWPKj4OQBypqoY9FHqooigS29M=");
_c = StudioCodePanel;
// Helper functions
function generateThemeCSS(themeId, tokens) {
    const cssVars = Object.entries(tokens).filter(([key])=>key !== "--app-surface-tint").map(([key, value])=>`  ${key}: ${value};`).join("\n");
    return `.${themeId} {
${cssVars}
  --app-surface-tint: ${tokens["--app-surface-tint"] ?? "transparent"};
  --app-gradient:
    radial-gradient(1050px 560px at -10% -20%, hsl(var(--primary) / 0.3), transparent 60%),
    radial-gradient(920px 520px at 112% 2%, hsl(var(--accent) / 0.22), transparent 58%),
    linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--background)) 50%, hsl(var(--background)) 100%);
}`;
}
function generateThemeContextCode(themeId, colorMode) {
    return `"use client";

import { createContext, useContext, useState } from "react";
import { applyTheme } from "@/components/theme/theme-engine";

const ThemeContext = createContext(null);

export function ThemeProvider({ 
  children, 
  defaultTheme = "${themeId}",
  defaultColorMode = "${colorMode}"
}: { 
  children: React.ReactNode;
  defaultTheme?: string;
  defaultColorMode?: "dark" | "light";
}) {
  const [themeId, setThemeId] = useState(defaultTheme);
  const [colorMode, setColorMode] = useState<"dark" | "light">(defaultColorMode);

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
};`;
}
var _c;
__turbopack_context__.k.register(_c, "StudioCodePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_edefa409._.js.map