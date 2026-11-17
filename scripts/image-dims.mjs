// Records the pixel dimensions of every Cloudinary image used by the {% img %}
// / {% image %} shortcodes, so the shortcode can emit width/height and the
// browser can reserve the space before the image arrives (no layout shift).
//
// Dimensions come from Cloudinary's `fl_getinfo` flag, which needs no API key,
// and are cached in config/image-dims.json — commit that file alongside posts.
// Only images missing from it are fetched, so a normal build makes no network
// requests. A failed lookup just leaves that image without dimensions (as
// before); it never fails the build.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import images from "../config/images.js";

const MANIFEST = "config/image-dims.json";
const SHORTCODE = /\{%-?\s*(?:img|image)\s+(["'])(.+?)\1/g;

const manifest = existsSync(MANIFEST)
  ? JSON.parse(readFileSync(MANIFEST, "utf8"))
  : {};

const paths = new Set();
for (const f of readdirSync("src", { recursive: true })) {
  if (!/\.(md|njk|html|liquid)$/.test(f)) continue;
  for (const [, , raw] of readFileSync(join("src", f), "utf8").matchAll(SHORTCODE)) {
    const id = images.cloudinaryId(raw);
    if (id) paths.add(id);
  }
}

const missing = [...paths].filter((p) => !(p in manifest));
let fetched = 0;
const failed = [];

async function lookup(id) {
  try {
    const res = await fetch(`${images.cloudinaryPrefix}fl_getinfo/${id}`, {
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { input } = await res.json();
    manifest[id] = [input.width, input.height];
    fetched++;
  } catch (err) {
    failed.push(`${id} (${err.message})`);
  }
}

// A handful at a time: polite to Cloudinary, and fast enough for a first run.
for (let i = 0; i < missing.length; i += 8) {
  await Promise.all(missing.slice(i, i + 8).map(lookup));
}

if (fetched) {
  // One image per line, sorted, so additions read cleanly in a diff.
  const lines = Object.keys(manifest)
    .sort()
    .map((k) => `  ${JSON.stringify(k)}: [${manifest[k].join(", ")}]`);
  writeFileSync(MANIFEST, `{\n${lines.join(",\n")}\n}\n`);
}
console.log(
  `image-dims: ${paths.size} images, ${fetched} newly measured` +
    (failed.length ? `, ${failed.length} failed:\n  ${failed.join("\n  ")}` : "")
);
