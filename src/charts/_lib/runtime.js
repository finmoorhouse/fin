// Shared helpers for chart modules. Everything is opt-in:
//   import { theme, plotDefaults, mount, sliders } from "../_lib/runtime.js";

// Colour tokens, read live from the CSS custom properties in src/global.css so
// they follow the theme. Chart modules read theme.* inside their draw callback,
// so they pick up the current theme without needing to know it changed.
// Cached because some modules index theme.series[i] per datum; the cache is
// dropped on "themechange" (dispatched by the toggle in base.njk).
let tokenCache = null;
function tokens() {
  if (tokenCache) return tokenCache;
  const s = getComputedStyle(document.documentElement);
  const c = (name) => `rgb(${s.getPropertyValue(name).trim()})`;
  return (tokenCache = {
    text: c("--c-ink"),
    muted: c("--c-muted"),
    grid: c("--c-rule"),
    panel: c("--c-panel"),
    series: [1, 2, 3, 4, 5].map((i) => c(`--chart-${i}`)),
  });
}

export const theme = {
  get text() { return tokens().text; },
  get muted() { return tokens().muted; },
  get grid() { return tokens().grid; },
  get panel() { return tokens().panel; },
  get series() { return tokens().series; },
};

// Every mounted chart redraws itself when the theme flips.
const mounted = new Set();
window.addEventListener("themechange", () => {
  tokenCache = null;
  for (const redraw of mounted) redraw();
});

// Options to spread into Plot.plot({...plotDefaults(width, height), ...}).
export function plotDefaults(width, height) {
  return {
    width,
    height,
    style: {
      background: theme.panel, // matches the container's bg-panel
      color: theme.text,
      fontSize: "13px",
    },
    marginLeft: 55,
    marginRight: 25,
  };
}

// Splits the container into a plot area that redraws on resize (plus whatever
// else, e.g. a slider strip, gets appended to the container). draw(width,
// height) must return a DOM node. Returns { plotArea, redraw } — call redraw()
// from control callbacks. The initial draw happens via the ResizeObserver's
// first callback.
export function mount(el, draw) {
  el.classList.add("flex", "flex-col");
  const plotArea = document.createElement("div");
  plotArea.className = "grow min-h-0 flex items-center justify-center overflow-hidden";
  el.prepend(plotArea);
  let node = null;
  let lastWidth = 0;
  const redraw = () => {
    const width = plotArea.clientWidth;
    const height = plotArea.clientHeight;
    if (!width || !height) return;
    const next = draw(width, height);
    // Plot's tip mark fills with var(--plot-background), which Plot's own
    // stylesheet hardcodes to white (and its style option silently drops
    // custom properties) — set it inline on each svg so tips stay legible.
    const svgs = next.matches?.("svg") ? [next] : [...(next.querySelectorAll?.("svg") ?? [])];
    for (const svg of svgs) svg.style.setProperty("--plot-background", theme.panel);
    if (node) node.replaceWith(next);
    else plotArea.append(next);
    node = next;
  };
  new ResizeObserver(() => {
    if (plotArea.clientWidth !== lastWidth) {
      lastWidth = plotArea.clientWidth;
      redraw();
    }
  }).observe(plotArea);
  mounted.add(redraw);
  return { plotArea, redraw };
}

// Builds a strip of labelled range inputs at the bottom of the container.
// defs: { paramName: { label, min, max, value, step?, format? } }
// Returns a live params object ({ paramName: currentValue }); onChange(params)
// fires on every input event — typically () => redraw().
export function sliders(el, defs, onChange) {
  const strip = document.createElement("div");
  strip.className =
    "shrink-0 flex flex-wrap gap-x-6 gap-y-1 px-4 py-2 border-t border-rule font-sans text-sm text-soft";
  const params = {};
  for (const [key, def] of Object.entries(defs)) {
    params[key] = def.value;
    const fmt = def.format ?? ((v) => v);
    const label = document.createElement("label");
    label.className = "flex items-center gap-2 grow basis-52 min-w-0";
    label.innerHTML = `<span class="whitespace-nowrap">${def.label}</span><input type="range" class="grow min-w-0 accent-link cursor-pointer" min="${def.min}" max="${def.max}" step="${def.step ?? "any"}" value="${def.value}"><output class="tabular-nums text-muted min-w-[4ch] text-right">${fmt(def.value)}</output>`;
    const input = label.querySelector("input");
    const output = label.querySelector("output");
    input.addEventListener("input", () => {
      params[key] = input.valueAsNumber;
      output.value = fmt(params[key]);
      onChange(params);
    });
    strip.append(label);
  }
  el.append(strip);
  return params;
}
