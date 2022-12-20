const pluginTOC = require("eleventy-plugin-toc");

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt) {
  let sizes = '100vw';

  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg"],
    outputDir: "build/img/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

module.exports = function (config) {
  config.addNunjucksAsyncShortcode("image", imageShortcode);
  config.addLiquidShortcode("image", imageShortcode);
  config.addJavaScriptFunction("image", imageShortcode);
  config.addPairedShortcode("aside", function (content) {
    return `<aside class="bg-flint-400 rounded-md px-8 py-2">${content}</aside>`;
  });
  config.addPairedShortcode("note", function (content, label) {
    return `<span class="sidenote"><input
        aria-label="Show sidenote"
        type="checkbox"
        id="sidenote__checkbox--${label}.replaceAll(' ', '-')"
        class="sidenote__checkbox"><label
        tabindex="0"
        title=""
        aria-describedby="sidenote-${label}.replaceAll(' ', '-')"
        for="sidenote__checkbox--${label}.replaceAll(' ', '-')"
        class="sidenote__button"
        >${label}</label><small
        id="sidenote-${label}.replaceAll(' ', '-')"
        class="sidenote__content"><span class="sidenote__content-parenthesis"
        >(sidenote: </span>${content}<span class="sidenote__content-parenthesis">)</span></small></span>`;
  });
  config.addShortcode("backLink", function (link, title) {
    return `<div class="mb-6">
    <a
      href="/${link}"
      class="flex items-center gap-1.5 bg-slate-600 text-sm font-semibold text-white px-2.5 py-0.5 rounded-full max-w-max no-underline font-medium"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="white"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="160 208 80 128 160 48"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></polyline>
      </svg>
      <span>Back to ${title}</span>
    </a>
  </div>`;
  });
  config.addShortcode("year", function (date) {
    return date.toLocaleDateString("en-GB", { year: "numeric", month: "short" });
  });
  let markdownIt = require("markdown-it");
  let markdownItKatex = require("@iktakahiro/markdown-it-katex");
  let markdownItFootnote = require("markdown-it-footnote");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownItAttrs = require("markdown-it-attrs");

  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  let markdownItAnchorOptions = {
    level: 2, // minimum level header -- anchors will only be applied to h2 level headers and below but not h1
    permalink: markdownItAnchor.permalink.headerLink({
      safariReaderFix: false,
      class: "header-anchor",
    }),
  };

  let markdownLib = markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItKatex)
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(markdownItAttrs);

  config.setLibrary("md", markdownLib);

  config.addPlugin(pluginTOC);

  config.addPassthroughCopy("src/style/*.css");

  return {
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};
