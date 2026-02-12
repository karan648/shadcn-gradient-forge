(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/theme/theme-engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MEMORY_LANE_THEME",
    ()=>MEMORY_LANE_THEME,
    "NITRO_ALL_THEMES",
    ()=>NITRO_ALL_THEMES,
    "NITRO_PUBLIC_THEMES",
    ()=>NITRO_PUBLIC_THEMES,
    "applyTheme",
    ()=>applyTheme,
    "defaultColorMode",
    ()=>defaultColorMode,
    "defaultTheme",
    ()=>defaultTheme,
    "getStoredColorMode",
    ()=>getStoredColorMode,
    "getStoredTheme",
    ()=>getStoredTheme,
    "normalizeColorMode",
    ()=>normalizeColorMode,
    "normalizeTheme",
    ()=>normalizeTheme,
    "persistTourProgress",
    ()=>persistTourProgress,
    "publicThemeIdSet",
    ()=>publicThemeIdSet,
    "publicThemeIds",
    ()=>publicThemeIds,
    "readTourProgress",
    ()=>readTourProgress
]);
const NITRO_PUBLIC_THEMES = [
    {
        id: "theme-nitro-mint-apple",
        label: "Mint Apple",
        preview: "radial-gradient(circle at 12% 10%, #b2ffe1 0%, transparent 42%), linear-gradient(145deg, #2d8e74 0%, #70c76a 46%, #d5ef91 100%)"
    },
    {
        id: "theme-nitro-citrus-sherbert",
        label: "Citrus Sherbert",
        preview: "radial-gradient(circle at 10% 10%, #ffd37d 0%, transparent 42%), linear-gradient(145deg, #e67d35 0%, #f7bb54 46%, #fff0a3 100%)"
    },
    {
        id: "theme-nitro-retro-raincloud",
        label: "Retro Raincloud",
        preview: "radial-gradient(circle at 12% 10%, #b3c6dc 0%, transparent 42%), linear-gradient(145deg, #4e6077 0%, #6f86a0 46%, #98aec3 100%)"
    },
    {
        id: "theme-nitro-hanami",
        label: "Hanami",
        preview: "radial-gradient(circle at 12% 10%, #ffd5e7 0%, transparent 42%), linear-gradient(145deg, #995382 0%, #c77ca9 46%, #f0b7ce 100%)"
    },
    {
        id: "theme-nitro-sunrise",
        label: "Sunrise",
        preview: "radial-gradient(circle at 12% 10%, #ffb596 0%, transparent 42%), linear-gradient(145deg, #e25263 0%, #ef8a57 46%, #ffd07a 100%)"
    },
    {
        id: "theme-nitro-cotton-candy",
        label: "Cotton Candy",
        preview: "radial-gradient(circle at 12% 10%, #c8e9ff 0%, transparent 42%), linear-gradient(145deg, #5aa2ff 0%, #9b78f0 46%, #f39bca 100%)"
    },
    {
        id: "theme-nitro-lofi-vibes",
        label: "Lofi Vibes",
        preview: "radial-gradient(circle at 10% 10%, #8e97c6 0%, transparent 42%), linear-gradient(145deg, #3f476c 0%, #59608f 46%, #7a6f9f 100%)"
    },
    {
        id: "theme-nitro-desert-khaki",
        label: "Desert Khaki",
        preview: "radial-gradient(circle at 10% 10%, #d5bf92 0%, transparent 42%), linear-gradient(145deg, #6d5c49 0%, #8f7a5d 46%, #b49f76 100%)"
    },
    {
        id: "theme-nitro-sunset",
        label: "Sunset",
        preview: "radial-gradient(circle at 10% 10%, #d66a82 0%, transparent 42%), linear-gradient(145deg, #3f1b4d 0%, #8c335f 46%, #f4874f 100%)"
    },
    {
        id: "theme-nitro-chroma-glow",
        label: "Chroma Glow",
        preview: "radial-gradient(circle at 10% 10%, #7f8dff 0%, transparent 42%), linear-gradient(145deg, #2d3eff 0%, #a726fa 46%, #00c7ff 100%)"
    },
    {
        id: "theme-nitro-forest",
        label: "Forest",
        preview: "radial-gradient(circle at 10% 10%, #56be87 0%, transparent 42%), linear-gradient(145deg, #163f2e 0%, #246b49 46%, #59a86c 100%)"
    },
    {
        id: "theme-nitro-crimson",
        label: "Crimson",
        preview: "radial-gradient(circle at 10% 10%, #c23956 0%, transparent 42%), linear-gradient(145deg, #2d050f 0%, #681126 46%, #a82435 100%)"
    },
    {
        id: "theme-nitro-midnight-blurple",
        label: "Midnight Blurple",
        preview: "radial-gradient(circle at 10% 10%, #6d6eff 0%, transparent 42%), linear-gradient(145deg, #0f1232 0%, #25366f 46%, #5757dc 100%)"
    },
    {
        id: "theme-nitro-mars",
        label: "Mars",
        preview: "radial-gradient(circle at 10% 10%, #cc654c 0%, transparent 42%), linear-gradient(145deg, #2e140f 0%, #5e261d 46%, #9c422f 100%)"
    },
    {
        id: "theme-nitro-dusk",
        label: "Dusk",
        preview: "radial-gradient(circle at 10% 10%, #9475c1 0%, transparent 42%), linear-gradient(145deg, #1b1632 0%, #3b2d5b 46%, #745495 100%)"
    },
    {
        id: "theme-nitro-under-the-sea",
        label: "Under The Sea",
        preview: "radial-gradient(circle at 10% 10%, #3ea6b7 0%, transparent 42%), linear-gradient(145deg, #0b2242 0%, #0d4f69 46%, #2b848e 100%)"
    },
    {
        id: "theme-nitro-retro-storm",
        label: "Retro Storm",
        preview: "radial-gradient(circle at 10% 10%, #7e95ab 0%, transparent 42%), linear-gradient(145deg, #1d2b3a 0%, #354657 46%, #55667a 100%)"
    },
    {
        id: "theme-nitro-neon-nights",
        label: "Neon Nights",
        preview: "radial-gradient(circle at 10% 10%, #d13eff 0%, transparent 42%), linear-gradient(145deg, #05061a 0%, #180f52 46%, #00bde6 100%)"
    },
    {
        id: "theme-nitro-strawberry-lemonade",
        label: "Strawberry Lemonade",
        preview: "radial-gradient(circle at 10% 10%, #ff8aa8 0%, transparent 42%), linear-gradient(145deg, #8f1847 0%, #cc3f5e 46%, #efc141 100%)"
    },
    {
        id: "theme-nitro-aurora",
        label: "Aurora",
        preview: "radial-gradient(circle at 10% 10%, #41cbb1 0%, transparent 42%), linear-gradient(145deg, #083142 0%, #1b7e74 46%, #5fbf75 100%)"
    },
    {
        id: "theme-nitro-sepia",
        label: "Sepia",
        preview: "radial-gradient(circle at 10% 10%, #b99672 0%, transparent 42%), linear-gradient(145deg, #35261d 0%, #5d4636 46%, #927454 100%)"
    }
];
const MEMORY_LANE_THEME = {
    id: "theme-nitro-memory-lane",
    label: "Memory Lane",
    preview: "radial-gradient(circle at 10% 10%, #ba8fd4 0%, transparent 42%), linear-gradient(145deg, #462d42 0%, #684b75 35%, #4a7199 68%, #77ad9f 100%)"
};
const NITRO_ALL_THEMES = [
    ...NITRO_PUBLIC_THEMES,
    MEMORY_LANE_THEME
];
const DEFAULT_THEME = "theme-nitro-midnight-blurple";
const DEFAULT_COLOR_MODE = "dark";
const THEME_STORAGE_KEY = "shadcn-gradient.theme";
const COLOR_MODE_STORAGE_KEY = "shadcn-gradient.color-mode";
const THEME_TOUR_STORAGE_KEY = "shadcn-gradient.theme-tour.v1";
const NITRO_THEME_IDS = new Set(NITRO_ALL_THEMES.map((theme)=>theme.id));
const normalizeTheme = (theme)=>{
    if (!theme || !NITRO_THEME_IDS.has(theme)) {
        return DEFAULT_THEME;
    }
    return theme;
};
const normalizeColorMode = (mode)=>{
    if (mode === "light") return "light";
    return DEFAULT_COLOR_MODE;
};
const getStoredTheme = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
};
const getStoredColorMode = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return normalizeColorMode(localStorage.getItem(COLOR_MODE_STORAGE_KEY));
};
const readTourProgress = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = localStorage.getItem(THEME_TOUR_STORAGE_KEY);
    if (!raw) {
        return {
            viewedThemeIds: [],
            memoryLaneUnlocked: false
        };
    }
    try {
        const parsed = JSON.parse(raw);
        return {
            viewedThemeIds: Array.isArray(parsed.viewedThemeIds) ? parsed.viewedThemeIds.filter((id)=>NITRO_THEME_IDS.has(id)) : [],
            memoryLaneUnlocked: Boolean(parsed.memoryLaneUnlocked)
        };
    } catch  {
        return {
            viewedThemeIds: [],
            memoryLaneUnlocked: false
        };
    }
};
const persistTourProgress = (progress)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(THEME_TOUR_STORAGE_KEY, JSON.stringify(progress));
};
const applyTheme = (theme, mode)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const normalizedTheme = normalizeTheme(theme);
    const normalizedMode = normalizeColorMode(mode ?? getStoredColorMode());
    const root = document.documentElement;
    Array.from(root.classList).forEach((className)=>{
        if (className === "dark" || className === "light" || className.startsWith("theme-nitro-")) {
            root.classList.remove(className);
        }
    });
    root.classList.add(normalizedMode, normalizedTheme);
    root.setAttribute("data-theme", normalizedTheme);
    root.setAttribute("data-color-mode", normalizedMode);
    localStorage.setItem(THEME_STORAGE_KEY, normalizedTheme);
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, normalizedMode);
};
const defaultTheme = DEFAULT_THEME;
const defaultColorMode = DEFAULT_COLOR_MODE;
const publicThemeIds = NITRO_PUBLIC_THEMES.map((theme)=>theme.id);
const publicThemeIdSet = new Set(publicThemeIds);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme/theme-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useThemeContext",
    ()=>useThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/theme-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const ThemeProvider = ({ children })=>{
    _s();
    const [themeId, setThemeIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTheme"]);
    const [colorMode, setColorModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultColorMode"]);
    const [viewedThemeIds, setViewedThemeIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [memoryLaneUnlocked, setMemoryLaneUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const storedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredTheme"])();
            const storedMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredColorMode"])();
            const tour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readTourProgress"])();
            setThemeIdState(storedTheme);
            setColorModeState(storedMode);
            setViewedThemeIds(tour.viewedThemeIds);
            setMemoryLaneUnlocked(tour.memoryLaneUnlocked);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTheme"])(storedTheme, storedMode);
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTheme"])(themeId, colorMode);
        }
    }["ThemeProvider.useEffect"], [
        themeId,
        colorMode
    ]);
    const setThemeId = (nextTheme)=>{
        const isPublic = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicThemeIdSet"].has(nextTheme);
        const nextViewedThemeIds = isPublic ? Array.from(new Set([
            ...viewedThemeIds,
            nextTheme
        ])) : viewedThemeIds;
        const hasCompletedTour = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicThemeIds"].every((id)=>nextViewedThemeIds.includes(id));
        const nextMemoryLaneUnlocked = memoryLaneUnlocked || hasCompletedTour;
        setThemeIdState(nextTheme);
        setViewedThemeIds(nextViewedThemeIds);
        setMemoryLaneUnlocked(nextMemoryLaneUnlocked);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistTourProgress"])({
            viewedThemeIds: nextViewedThemeIds,
            memoryLaneUnlocked: nextMemoryLaneUnlocked
        });
    };
    const setColorMode = (mode)=>{
        setColorModeState(mode);
    };
    const availableThemes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[availableThemes]": ()=>memoryLaneUnlocked ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NITRO_ALL_THEMES"] : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NITRO_PUBLIC_THEMES"]
    }["ThemeProvider.useMemo[availableThemes]"], [
        memoryLaneUnlocked
    ]);
    const remainingForUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[remainingForUnlock]": ()=>{
            const remaining = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicThemeIds"].length - viewedThemeIds.length;
            return Math.max(0, remaining);
        }
    }["ThemeProvider.useMemo[remainingForUnlock]"], [
        viewedThemeIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (themeId === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEMORY_LANE_THEME"].id && !memoryLaneUnlocked) {
                setMemoryLaneUnlocked(true);
            }
        }
    }["ThemeProvider.useEffect"], [
        themeId,
        memoryLaneUnlocked
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            themeId,
            colorMode,
            availableThemes: availableThemes,
            viewedThemeIds,
            memoryLaneUnlocked,
            remainingForUnlock,
            setThemeId,
            setColorMode
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/theme/theme-context.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "xq65xtZMTs3ArdZLZ/swEePTPHg=");
_c = ThemeProvider;
const useThemeContext = ()=>{
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!ctx) {
        throw new Error("useThemeContext must be used within ThemeProvider");
    }
    return ctx;
};
_s1(useThemeContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_fa4d749d._.js.map