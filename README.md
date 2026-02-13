<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C5CFF,100:2ED1C4&height=220&section=header&text=Gradient%20Forge&fontSize=48&fontAlignY=38&desc=Custom%20Shadcn%20Theming%20System&descAlignY=62" alt="Gradient Forge" />
</p>

<p align="center">
  <a href="https://buymeacoffee.com/your-username">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-orange?style=for-the-badge&logo=buymeacoffee&logoColor=white" alt="Buy Me a Coffee" />
  </a>
</p>

<div align="center">
  <strong>Gradient Forge</strong>
  <div>Production-ready theming system with Nitro-inspired gradients, surface-aware layers, and export-ready tokens.</div>
</div>

---

## Highlights

- 20+ curated gradient themes with a secret Memory Lane unlock.
- Light/dark mode with persisted state.
- Surface overlays tuned for cards, sidebars, and popovers.
- Export snippets for CSS + Tailwind token mapping.
- Gallery-ready previews for each theme preset.

## Demo

The app is fully multi-page. Explore:

- `/` Home
- `/studio` Interactive theme studio
- `/gallery` Theme gallery
- `/showcase` Template showcase with live previews
- `/docs` Installation and CLI documentation

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

- `app/page.tsx` - Home experience and component previews.
- `app/studio/page.tsx` - Interactive theme studio.
- `app/gallery/page.tsx` - Gradient gallery.
- `app/showcase/page.tsx` - Template showcase with live theme previews.
- `app/docs/page.tsx` - Installation and CLI documentation.
- `app/globals.css` - Gradient tokens, theme classes, and surface overlays.
- `components/theme/theme-engine.ts` - Theme catalog + persistence helpers.
- `components/theme/theme-context.tsx` - Client state + unlock logic.
- `components/theme/theme-panel.tsx` - UI for theme selection and mode toggle.
- `components/theme/theme-exporter.tsx` - Copy-ready export blocks.

## CLI

Published CLI (recommended):

```bash
npx gradient-forge@latest init --inject
```

Local repo CLI (works before publishing to npm):

```bash
node ./cli/index.mjs init --inject
```

CLI options:

- `--inject` adds the theme CSS to `app/globals.css` automatically.
- `--no-inject` skips modifying `app/globals.css`.
- `--path` targets a custom project root.
- `--force` overwrites existing generated files.
- `--yes` skips prompts and applies defaults.
- `--tui` enables arrow-key selector mode.

What it generates:

- `gradient-forge/theme-engine.ts`
- `gradient-forge/theme-context.tsx`
- `gradient-forge/themes.css`

Integration steps:

1. Import the CSS file in your global stylesheet.
2. Wrap your app with `ThemeProvider`.
3. Add theme classes to your root element.

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

## Support

If Gradient Forge helps your project, you can support development here:

- `https://buymeacoffee.com/your-username`

## License

Add your preferred license before publishing.
