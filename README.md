# Shadcn Gradient Forge

Custom shadcn theming studio with Nitro-inspired gradient palettes, surface-aware layers, and export-ready tokens. Built as a portfolio-grade repo to showcase production UI polish and a reusable theme engine.

## Highlights

- 20+ curated gradient themes with a secret Memory Lane unlock.
- Light/dark mode with persisted state.
- Surface overlays tuned for cards, sidebars, and popovers.
- Export snippets for CSS + Tailwind token mapping.
- Gallery-ready previews for each theme preset.

## Demo

The landing page is the demo. Open the app and explore the studio, gallery, and export panel.

## Quick Start

```bash
npm install
npm run dev
```

## What You Get

- Theme engine with `data-theme` and `data-color-mode` attributes.
- Gradient tokens and surface layers in `app/globals.css`.
- A full preview dashboard showing shadcn-style components.
- Copy-ready export snippets for your own repos.

## Architecture

- `app/page.tsx` - Studio layout, gallery, tokens, and export experience.
- `app/globals.css` - Gradient tokens, theme classes, and surface overlays.
- `components/theme/theme-engine.ts` - Theme catalog + persistence helpers.
- `components/theme/theme-context.tsx` - Client state + unlock logic.
- `components/theme/theme-panel.tsx` - UI for theme selection and mode toggle.
- `components/theme/theme-exporter.tsx` - Copy-ready export blocks.

## Add A New Theme

1. Add a new entry in `components/theme/theme-engine.ts`.
2. Create the matching CSS class in `app/globals.css`.
3. The gallery and theme picker update automatically.

## Export Snippets

Open the Export section in the app to copy snippets for:

- Root theme attributes
- Surface tint styling
- Tailwind color token aliases

## Scripts

- `npm run dev` - Start the dev server.
- `npm run build` - Build for production.
- `npm run start` - Run the production build.
- `npm run lint` - Lint the codebase.

## CLI

The CLI scaffolds the theming system into another project.

```bash
node ./cli/index.mjs init --path /path/to/project
```

Optional flags:

- `--inject` - Append theme CSS into `app/globals.css` if it exists.
- `--force` - Overwrite existing generated files.

What it generates:

- `shadcn-gradient/theme-engine.ts`
- `shadcn-gradient/theme-context.tsx`
- `shadcn-gradient/themes.css`

Integration steps:

1. Import the CSS file in your global stylesheet.
2. Wrap your app with `ThemeProvider`.
3. Add theme classes to your root element.

## Portfolio Notes

This repo is designed to read well for recruiters:

- Clear theming architecture
- A visual demo with multiple UI surfaces
- Copy-ready snippets to prove reusability

## License

Add your preferred license before publishing.
