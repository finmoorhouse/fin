const markdownIt = require("markdown-it");
const markdownItKatex = require("@iktakahiro/markdown-it-katex");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");

const options = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
};

const markdownItAnchorOptions = {
  level: 2,
  permalink: markdownItAnchor.permalink.headerLink({
    safariReaderFix: false,
    class: "header-anchor",
  }),
};

const markdownLib = markdownIt(options)
  .use(markdownItFootnote)
  .use(markdownItKatex)
  .use(markdownItAnchor, markdownItAnchorOptions)
  .use(markdownItAttrs);

module.exports = {
  markdownLib,
};
