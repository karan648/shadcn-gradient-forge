module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/theme/theme-engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_THEME;
    //TURBOPACK unreachable
    ;
};
const getStoredColorMode = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return DEFAULT_COLOR_MODE;
    //TURBOPACK unreachable
    ;
};
const readTourProgress = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            viewedThemeIds: [],
            memoryLaneUnlocked: false
        };
    }
    //TURBOPACK unreachable
    ;
    const raw = undefined;
};
const persistTourProgress = (progress)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const applyTheme = (theme, mode)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const normalizedTheme = undefined;
    const normalizedMode = undefined;
    const root = undefined;
};
const defaultTheme = DEFAULT_THEME;
const defaultColorMode = DEFAULT_COLOR_MODE;
const publicThemeIds = NITRO_PUBLIC_THEMES.map((theme)=>theme.id);
const publicThemeIdSet = new Set(publicThemeIds);
}),
"[project]/components/theme/theme-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useThemeContext",
    ()=>useThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/theme-engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const ThemeProvider = ({ children })=>{
    const [themeId, setThemeIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTheme"]);
    const [colorMode, setColorModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultColorMode"]);
    const [viewedThemeIds, setViewedThemeIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [memoryLaneUnlocked, setMemoryLaneUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredTheme"])();
        const storedMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredColorMode"])();
        const tour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readTourProgress"])();
        setThemeIdState(storedTheme);
        setColorModeState(storedMode);
        setViewedThemeIds(tour.viewedThemeIds);
        setMemoryLaneUnlocked(tour.memoryLaneUnlocked);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTheme"])(storedTheme, storedMode);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTheme"])(themeId, colorMode);
    }, [
        themeId,
        colorMode
    ]);
    const setThemeId = (nextTheme)=>{
        const isPublic = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicThemeIdSet"].has(nextTheme);
        const nextViewedThemeIds = isPublic ? Array.from(new Set([
            ...viewedThemeIds,
            nextTheme
        ])) : viewedThemeIds;
        const hasCompletedTour = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicThemeIds"].every((id)=>nextViewedThemeIds.includes(id));
        const nextMemoryLaneUnlocked = memoryLaneUnlocked || hasCompletedTour;
        setThemeIdState(nextTheme);
        setViewedThemeIds(nextViewedThemeIds);
        setMemoryLaneUnlocked(nextMemoryLaneUnlocked);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistTourProgress"])({
            viewedThemeIds: nextViewedThemeIds,
            memoryLaneUnlocked: nextMemoryLaneUnlocked
        });
    };
    const setColorMode = (mode)=>{
        setColorModeState(mode);
    };
    const availableThemes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>memoryLaneUnlocked ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NITRO_ALL_THEMES"] : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NITRO_PUBLIC_THEMES"], [
        memoryLaneUnlocked
    ]);
    const remainingForUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const remaining = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicThemeIds"].length - viewedThemeIds.length;
        return Math.max(0, remaining);
    }, [
        viewedThemeIds
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (themeId === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$theme$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MEMORY_LANE_THEME"].id && !memoryLaneUnlocked) {
            setMemoryLaneUnlocked(true);
        }
    }, [
        themeId,
        memoryLaneUnlocked
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
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
const useThemeContext = ()=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!ctx) {
        throw new Error("useThemeContext must be used within ThemeProvider");
    }
    return ctx;
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a80fedd4._.js.map