const pluginTOC = require("eleventy-plugin-toc");
const pluginRss = require("@11ty/eleventy-plugin-rss");
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

  // Markdown
  config.setLibrary("md", markdown.markdownLib);

  // Plugins
  config.addPlugin(pluginTOC);
  config.addPlugin(pluginRss);

  // Passthrough
  config.addPassthroughCopy("src/style/*.css");
  config.addPassthroughCopy({ "src/favicon": "/" });

  // Filters
  config.addFilter("excerpt", filters.excerpt);
  config.addFilter("toUTCDate", filters.toUTCDate);
  config.addFilter("wordStats", filters.wordStats);

  return {
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};
