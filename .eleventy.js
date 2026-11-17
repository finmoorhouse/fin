// v3 of the RSS plugin is an ES module; require() hands back its namespace.
const pluginRss = require("@11ty/eleventy-plugin-rss").default;
const htmlShortcodes = require("./config/shortcodes.js");
const imageShortcodes = require("./config/images.js");
const filters = require("./config/filters.js");
const markdown = require("./config/markdown.js");

module.exports = function (config) {
  // Images
  config.addLiquidShortcode("img", imageShortcodes.cloudImageShortcode);
  config.addLiquidShortcode("image", imageShortcodes.cloudImageShortcode);
  config.addLiquidShortcode("shareImage", imageShortcodes.shareImageShortcode);
  config.addNunjucksShortcode("shareImage", imageShortcodes.shareImageShortcode);

  // HTML Shortcodes
  config.addPairedShortcode("aside", htmlShortcodes.aside);
  config.addPairedShortcode("note", htmlShortcodes.note);
  config.addShortcode("backLink", htmlShortcodes.backLink);
  config.addShortcode("year", htmlShortcodes.year);
  config.addPairedShortcode("toggle", htmlShortcodes.toggle);
  config.addPairedShortcode("drop", htmlShortcodes.drop);
  config.addPairedShortcode("chart", htmlShortcodes.chart);

  // Chart modules are bundled by esbuild (scripts/build-charts.mjs) into
  // build/charts/ — Eleventy should ignore the sources but the dev server
  // should reload when a bundle changes.
  config.watchIgnores.add("src/charts/**");
  config.setServerOptions({ watch: ["build/charts/**/*.js"] });

  // Several drafts are symlinks to files in ~/Documents/Writing. Eleventy 3's
  // default macOS watcher (one FSEvents stream over src/) reports changes at
  // the real path, so edits to those drafts never trigger a rebuild. The
  // standard watcher follows symlinks.
  config.setChokidarConfig({ useFsEvents: false });

  // Markdown
  config.setLibrary("md", markdown.markdownLib);

  // Plugins
  config.addPlugin(pluginRss);

  // Passthrough
  config.addPassthroughCopy("src/style/*.css");

  // Maths assets: Temml's stylesheet and the STIX Two Math webfont, both
  // resolved from the installed packages by config/markdown.js so they always
  // match the renderer. They must land in the SAME directory: Temml-STIX2.css
  // references the font as url("./STIXTwoMath.woff2"), relative to itself.
  config.addPassthroughCopy({
    [markdown.temmlCssPath]: "style/temml/Temml.css",
    [markdown.stixFontPath]: "style/temml/STIXTwoMath.woff2",
  });
  // Spectral webfonts (see the @font-face block at the top of src/global.css).
  config.addPassthroughCopy({
    "node_modules/@fontsource/spectral/files/spectral-latin*-{400,600}-*.woff2":
      "fonts",
  });
  config.addPassthroughCopy("src/script/*.js");
  config.addPassthroughCopy({ "src/favicon": "/" });

  // Filters
  config.addFilter("excerpt", filters.excerpt);
  config.addFilter("toc", filters.toc);
  config.addFilter("wordStats", filters.wordStats);

  return {
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};
