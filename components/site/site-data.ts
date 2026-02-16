export const navItems = [
  { label: "Home", href: "/" },
  { label: "Themes", href: "/gallery" },
  { label: "Showcase", href: "/showcase" },
  { label: "Studio", href: "/studio" },
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
    title: "1. Run the CLI",
    description: "npx gradient-forge init in your project root.",
  },
  {
    title: "2. Pick a theme",
    description: "Use the interactive selector to choose from 21 gradients.",
  },
  {
    title: "3. Done!",
    description: "ThemeProvider auto-wraps your app. Start the dev server!",
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
    title: "Theme Studio",
    detail: "Interactive theme preview with live component showcase.",
    status: "done",
  },
  {
    title: "Theme Gallery",
    detail: "Browse all 21 gradient themes with one-click copy.",
    status: "done",
  },
  {
    title: "Export Formats",
    detail: "CSS, SCSS, JSON, Tailwind, W3C tokens, Figma tokens.",
    status: "done",
  },
  {
    title: "CLI Tool",
    detail: "npx gradient-forge init for automatic setup with interactive theme picker.",
    status: "done",
  },
  {
    title: "Preset Editor",
    detail: "Fine-tune gradient stops and export a new palette.",
    status: "coming-soon",
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
