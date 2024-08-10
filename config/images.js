const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, caption, source) {
  let sizes = "100vw";

  let metadata = await Image(src, {
    widths: [800, 1600, 2000],
    formats: ["avif", "jpeg"],
    outputDir: "build/img/",
    cacheOptions: {
      // if a remote image URL, this is the amount of time before it fetches a fresh copy
      duration: "1y",
      // project-relative path to the cache directory
      directory: ".cache",
      removeUrlQueryParams: true,
    },
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  let imageHtml = Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });

  if (caption) {
    if (source) {
      return `<figure class="!p-0 !m-0 group">${imageHtml}${`<figcaption class="!pt-0 !my-2 !pb-4 font-sans opacity-60 group-hover:opacity-100 transition-opacity">${caption} • <a target="_blank" href="${source}">Source</a></figcaption>`}</figure>`;
    } else {
      return `<figure class="!p-0 !m-0 group">${imageHtml}${`<figcaption class="!pt-0 !my-2 !pb-4 font-sans opacity-60 group-hover:opacity-100 transition-opacity">${caption}</figcaption>`}</figure>`;
    }
  } else {
    return imageHtml;
  }
}

// Cloudinary image shortcode
// https://console.cloudinary.com/console/
function cloudImageShortcode(path="writing/go-east/seattle-map", alt="An image.", caption, source) {
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
  const style = "max-width: 100%; max-height: 600px; height: auto; margin-left: auto; margin-right: auto;"; // I need to do something fancy to prevent portrait orient images filling up the screen
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

module.exports = {
  imageShortcode,
  cloudImageShortcode,
};
