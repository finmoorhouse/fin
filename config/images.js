// Cloudinary image shortcode
// https://console.cloudinary.com/console/
function cloudImageShortcode(
  path = "writing/go-east/seattle-map",
  alt = "An image.",
  caption,
  source
) {
  const cloudinaryPrefix =
    "https://res.cloudinary.com/finmoorhouse/image/upload/";
  // Create a link to the original size image
  const originalSizeUrl = `${cloudinaryPrefix}${path}`;
  const widths = [500, 800, 1200];
  const srcset = widths
    .map(
      (width) =>
        `${cloudinaryPrefix}w_${width},c_fill,g_auto,q_auto:good/f_auto/${path} ${width}w`
    )
    .join(", ");
  const sizes = "(max-width: 600px) 100vw, 600px";
  const style =
    "max-width: 100%; max-height: 600px; height: auto; margin-left: auto; margin-right: auto;"; // I need to do something fancy to prevent portrait orient images filling up the screen
  const imageHtml = `<a class="!m-0" href="${originalSizeUrl}" target="_blank"><img
  loading="lazy"
  decoding="async"
  src="${cloudinaryPrefix}w_800,c_fill,g_auto,q_auto:good/f_auto/${path}"
  srcset="${srcset}"
  sizes="${sizes}"
  style="${style}" 
  class="!mb-0 !mt-3 font-sans text-sm bg-flint-400"
  alt="(Image) ${alt}"></a>`;
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

  const leadingUrl = "https://images.finmoorhouse.com/";

  // Remove the leading URL if present
  const cleanPath =
    path && path.startsWith(leadingUrl)
      ? path.substring(leadingUrl.length)
      : path;

  const cloudinaryPrefix =
    "https://res.cloudinary.com/finmoorhouse/image/upload/";
  const url = path
    ? `${cloudinaryPrefix}w_1600,h_900,c_fill,g_auto,q_auto:good/f_auto/${cleanPath}`
    : "https://images.finmoorhouse.com/share-images/share-4.png";
  return `
<meta name="twitter:image" content="${url}">
<meta property="og:image" content="${url}">
<meta name="image" content="${url}">
 `;
}

module.exports = {
  cloudImageShortcode,
  shareImageShortcode,
};
