const fs = require("fs");
const path = require("path");

// Cloudinary image shortcode
// https://console.cloudinary.com/console/
const cloudinaryPrefix = "https://res.cloudinary.com/finmoorhouse/image/upload/";

// Paths are Cloudinary public IDs like "writing/go-east/seattle-map". Older
// posts also pass a leading slash, or a full images.finmoorhouse.com URL (the
// old image host, whose paths mirror Cloudinary's) — both are normalised here.
// Anything else that's a full URL is an external image: returns null.
function cloudinaryId(src) {
  const id = String(src)
    .replace(/^https?:\/\/(www\.)?images\.finmoorhouse\.com\//, "")
    .replace(/^\/+/, "");
  return /^https?:\/\//.test(id) ? null : id;
}

// Pixel dimensions, recorded by scripts/image-dims.mjs. Re-read whenever the
// file changes, so `npm run images:dims` during dev is picked up on the next
// rebuild without a restart.
const dimsFile = path.join(__dirname, "image-dims.json");
let dims = {};
let dimsMtime = 0;
function dimensionsOf(id) {
  try {
    const mtime = fs.statSync(dimsFile).mtimeMs;
    if (mtime !== dimsMtime) {
      dims = JSON.parse(fs.readFileSync(dimsFile, "utf8"));
      dimsMtime = mtime;
    }
  } catch (e) {
    return null;
  }
  return dims[id] || null;
}

// Images render at most 600px wide (the `sizes` slot) and 600px tall (the
// max-height below). Width/height attributes are given at that rendered size
// rather than the original's, so the max-height never has to squash one axis:
// the attributes already respect it, and on narrow screens max-width plus
// height:auto scale both down together from the same aspect ratio.
const MAX = 600;
function sizeAttrs(id) {
  const d = id && dimensionsOf(id);
  if (!d) return "";
  const [w, h] = d;
  const width = Math.round(Math.min(MAX, (MAX * w) / h));
  const height = Math.round((width * h) / w);
  return ` width="${width}" height="${height}"`;
}

function cloudImageShortcode(
  src = "writing/go-east/seattle-map",
  alt = "An image.",
  caption,
  source
) {
  const id = cloudinaryId(src);
  const style =
    "max-width: 100%; max-height: 600px; height: auto; margin-left: auto; margin-right: auto;"; // I need to do something fancy to prevent portrait orient images filling up the screen
  const classes = "!mb-0 !mt-3 font-sans text-sm bg-panel";

  let imageHtml;
  if (id) {
    // Create a link to the original size image
    const originalSizeUrl = `${cloudinaryPrefix}${id}`;
    const widths = [500, 800, 1200];
    const srcset = widths
      .map(
        (width) =>
          `${cloudinaryPrefix}w_${width},c_fill,g_auto,q_auto:good/f_auto/${id} ${width}w`
      )
      .join(", ");
    const sizes = "(max-width: 600px) 100vw, 600px";
    imageHtml = `<a class="!m-0" href="${originalSizeUrl}" target="_blank"><img
  loading="lazy"
  decoding="async"
  src="${cloudinaryPrefix}w_800,c_fill,g_auto,q_auto:good/f_auto/${id}"
  srcset="${srcset}"
  sizes="${sizes}"${sizeAttrs(id)}
  style="${style}"
  class="${classes}"
  alt="(Image) ${alt}"></a>`;
  } else {
    // An external image, served as-is. These should really be uploaded to
    // Cloudinary: other sites move and delete their images.
    imageHtml = `<a class="!m-0" href="${src}" target="_blank"><img
  loading="lazy"
  decoding="async"
  src="${src}"
  style="${style}"
  class="${classes}"
  alt="(Image) ${alt}"></a>`;
  }

  if (caption) {
    const sourceElement = source
      ? ` • <a target="_blank" href="${source}">Source</a>`
      : "";
    return `
      <figure class="!p-0 !m-0 group">
        ${imageHtml}<figcaption class="!pt-0 !my-2 !pb-4 font-sans opacity-60 group-hover:opacity-100 transition-opacity">${caption}${sourceElement}</figcaption>
      </figure>
    `;
  } else {
    return imageHtml;
  }
}
function shareImageShortcode(path) {
  // This shortcode generates share images
  // It takes in a path relative to the base folder of the Cloudinary bucket, with no initial / (i.e. 'writing/page-folder/image.png')
  // If no path is provided, it defaults to a generic share image
  const id = (path && cloudinaryId(path)) || "share-images/share-4.png";
  const url = `${cloudinaryPrefix}w_1600,h_900,c_fill,g_auto,q_auto:good/f_auto/${id}`;
  return `
<meta name="twitter:image" content="${url}">
<meta property="og:image" content="${url}">
<meta name="image" content="${url}">
 `;
}

module.exports = {
  cloudImageShortcode,
  shareImageShortcode,
  cloudinaryId,
  cloudinaryPrefix,
};
