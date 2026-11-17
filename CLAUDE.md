# CLAUDE.md

Fin's personal website and blog — [finmoorhouse.com](https://finmoorhouse.com). A static site built with **Eleventy 2.x**, styled with **Tailwind CSS 3** (+ `@tailwindcss/typography`), deployed on **Netlify** (which builds from git — so anything committed and pushed to `main` goes live).

## Commands

- `npm run dev` — local dev server (Eleventy serve + Tailwind/PostCSS watcher, via concurrently)
- `npm run build` — production build into `build/`
- This project uses **npm** (not pnpm), per the existing lockfile.

## Layout

- `.eleventy.js` — main config; delegates to `config/`:
  - `config/shortcodes.js` — HTML shortcodes (`aside`, `note`, `toggle`, `drop`, `backLink`, `year`)
  - `config/images.js` — Cloudinary image shortcodes (`img`/`image`, `shareImage`)
  - `config/markdown.js` — markdown-it setup (footnotes, anchors, attrs, KaTeX)
  - `config/filters.js` — `excerpt`, `toUTCDate`, `wordStats`
- `src/writing/` — blog posts (markdown, one file per post)
- `src/projects/` — project pages; `projects.json` sets layout/permalinks (`/project/<slug>/`)
- `src/pages/` — top-level pages (`writing.njk`, `projects.njk`); `pages.json` sets permalinks
- `src/_includes/` — Nunjucks layouts (`base.njk`, `page.njk`, `writing.njk`, `projects.njk`)
- `src/_data/` — site metadata and nav
- `src/style/` — extra per-page CSS (e.g. `writing.css` for sidenotes), passthrough-copied
- Output goes to `build/` (gitignored territory — never edit it)

## Writing posts

Post frontmatter convention (see any file in `src/writing/`):

```yaml
---
title: Post title
permalink: /writing/slug/
tags:
 - writing
date: 2026-06-29
shareImage: writing/some-post/image-name   # Cloudinary path, optional
links:
 Substack: https://finmoorhouse.substack.com/p/...   # optional
---
```

- The `writing` tag is what puts a post in the `collections.writing` list on `/writing`.
- **Drafts are just uncommitted files.** There is no `draft:` flag — posts in progress sit untracked in `src/writing/` and only publish when committed and pushed (Netlify builds from git). Don't commit files in `src/writing/` unless Fin asks to publish them; `git status` will typically show several in-progress drafts.

### Shortcodes used in post bodies

- `{% note "label text" %}sidenote content{% endnote %}` — Gwern-style sidenotes (margin notes on wide screens, tap-to-expand on mobile)
- `{% aside %}...{% endaside %}` — intro/context asides
- `{% toggle 'Summary text' %}...{% endtoggle %}` — collapsible `<details>` block
- `{% drop %}...{% enddrop %}` — expandable "Show notes →" section attached to a list item (used heavily in the media-highlights posts); optional second-style summary arg
- `{% img "path/on/cloudinary", "alt text", "caption", "source" %}` — images. **All images are served from Cloudinary** (account `finmoorhouse`); nothing is processed at build time, and image paths are relative Cloudinary public IDs like `writing/go-east/seattle-map`. There are no local image assets to add — new images must be uploaded to Cloudinary first.
- Footnotes use standard markdown-it-footnote syntax (`[^1]`).
- Heading anchors can be set explicitly with `{#custom-id}` (markdown-it-attrs).
- `{% chart "post-slug/chart-name" %}optional caption{% endchart %}` — interactive charts (see below).

## Interactive charts

Charts are plain ES modules in `src/charts/<post-slug>/<chart-name>.js`, bundled by esbuild (`scripts/build-charts.mjs`) into `build/charts/` with code splitting, and embedded in posts with the `chart` paired shortcode. The shortcode emits a placeholder box plus a small inline loader that lazy-imports the chart module when it scrolls within 400px of the viewport — posts without charts ship zero chart JS.

**These charts are usually written by Claude, not by hand** — when asked to add a chart to a post, follow this spec end to end.

### Adding a chart

1. Create `src/charts/<post-slug>/<chart-name>.js` (match the post's slug). The module contract is:
   ```js
   export default function (el) { /* el = the container div; do anything to it */ }
   ```
2. Embed it in the post: `{% chart "<post-slug>/<chart-name>" %}Caption text.{% endchart %}`
   - Caption is optional and rendered with a plain markdown-it instance (inline only — emphasis/links work; footnotes and KaTeX do **not**).
   - Optional second arg overrides the box's aspect ratio (default `"aspect-[3/2]"`), e.g. `{% chart "slug/name", "aspect-[2/1]" %}`.
3. Restart `npm run dev` if the chart file is **new** — esbuild watch fixes its entry list at startup. Edits to existing chart files hot-reload.

### Conventions

- Default library is **Observable Plot** (`@observablehq/plot`); raw D3 (`d3` is available transitively) or hand-rolled SVG are fine for bespoke charts. Shared dependencies dedupe into cached chunks automatically.
- Use the shared runtime `src/charts/_lib/runtime.js` (underscore dirs are excluded from bundling as entry points):
  - `theme` — colour tokens legible on the dark flint background (`theme.series` for data colours).
  - `plotDefaults(width, height)` — spread into `Plot.plot({...})` for site-consistent styling.
  - `mount(el, draw)` — responsive redraw; `draw(width, height)` returns a DOM node; returns `{ redraw }`. The first draw fires via ResizeObserver.
  - `sliders(el, defs, onChange)` — Tailwind-styled parameter sliders below the plot; returns a live params object. Typical pattern: call `sliders` first with `() => redraw()`, then `const { redraw } = mount(el, (w, h) => Plot.plot({...}))` reading `params` inside the draw function.
- Tooltips: use Plot's `tip: true` mark option.
- Small datasets live next to the module (`src/charts/<slug>/data.json`) and are imported directly — esbuild inlines them. Don't inline datasets bigger than ~100KB.
- Tailwind scans `src/charts/**/*.js`, so utility classes used in chart JS work; stick to classes, no new CSS files.
- Chart source files follow the same draft rule as posts: only commit them alongside the post they belong to.
- Reference implementations in `src/charts/demo/` (paired with the untracked draft post `src/writing/chart-demo.md`): `power-law.js` (minimal Plot + slider), `fourier.js` (Plot with custom ticks/domain), `unit-circle.js` (no library — hand-rolled SVG with pointer-event dragging; charts that skip Plot don't load its chunk).

## Style / conventions

- British English throughout the prose.
- Tailwind utility classes are used directly in layouts and even inside shortcode template strings; there's no component system. Match the existing utility-class style rather than adding new CSS files, except for genuinely page-specific styles (which go in `src/style/` and are referenced via `extraStyle` frontmatter).
- The site favours minimal dependencies and fast builds (moving images to Cloudinary cut builds from ~5 min to ~2 s) — avoid adding build-time image processing or heavyweight plugins.
- RSS feed is generated by `src/feed.njk` via the Eleventy RSS plugin.
