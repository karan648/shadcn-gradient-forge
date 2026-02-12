export const navItems = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Docs", href: "/docs" },
];

export const featureCards = [
  {
    title: "Theme Engine",
    description:
      "Persisted theme + color mode with data attributes ready for shadcn component tokens.",
  },
  {
    title: "Surface-aware Layers",
    description:
      "Cards, sidebars, and overlays inherit subtle tints for depth without losing contrast.",
  },
  {
    title: "Memory Lane Unlock",
    description:
      "Preview all public palettes to unlock the secret theme for your portfolio or product demo.",
  },
  {
    title: "Copy-ready Exports",
    description:
      "Grab the exact CSS + Tailwind aliases used here and drop them into any app.",
  },
];

export const workflowSteps = [
  {
    title: "1. Pick a palette",
    description: "Preview all Nitro gradients and lock in the vibe for your app.",
  },
  {
    title: "2. Map tokens",
    description: "Use the CSS variables and Tailwind aliases to wire in colors.",
  },
  {
    title: "3. Apply surfaces",
    description: "Drop in the surface tint layer for cards, sheets, and sidebars.",
  },
  {
    title: "4. Ship the theme",
    description: "Export snippets and ship a consistent theme across components.",
  },
];

export const useCases = [
  "SaaS dashboards with polished gradient theming",
  "Portfolio demos for UI engineering roles",
  "Design system spikes for shadcn component suites",
  "Startup landing pages with cinematic brand color",
];

export const roadmapItems = [
  {
    title: "CLI theme exporter",
    detail: "Generate theme CSS, JSON, and Tailwind config from the terminal.",
  },
  {
    title: "Preset editor",
    detail: "Fine-tune gradient stops and export a new palette.",
  },
  {
    title: "Component playground",
    detail: "Preview more shadcn components with real token mapping.",
  },
];

export const faqItems = [
  {
    question: "Does the theme engine work outside Next.js?",
    answer:
      "Yes. The engine is plain CSS variables plus a small React context for state. You can reuse the CSS and write your own theme toggle in any framework.",
  },
  {
    question: "How do I add my own palettes?",
    answer:
      "Add a new entry in the theme list and a matching CSS class in globals. The gallery and picker update automatically.",
  },
  {
    question: "Is this compatible with shadcn/ui defaults?",
    answer:
      "Yes. The tokens map directly to shadcn defaults and the surface overlay keeps contrast predictable.",
  },
  {
    question: "Can I use this as a design system starter?",
    answer:
      "Absolutely. The token layer is stable and the demo shows cards, nav, inputs, and forms for guidance.",
  },
];
