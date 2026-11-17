// Footnotes are rendered twice: once as the margin copy spliced in beside the
// reference, once in the list at the foot of the post (see config/markdown.js).
// Anything counting or sampling the prose should see each footnote once.
function stripMarginNotes(content) {
  return content.replace(/<small class="fn-margin"[\s\S]*?<\/small>/g, "");
}

function excerpt(post) {
  const content = stripMarginNotes(post).replace(/(<([^>]+)>)/gi, "");
  return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
}

function wordStats(content) {
  const wordCount = stripMarginNotes(content).trim().split(/\s+/).length;
  const wordCountWithCommas = wordCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // More efficient than toLocaleString()
  const wordsPerMinute = 200; // Average reading speed
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return `${wordCountWithCommas} words • ${readingTimeMinutes} min read`;
}

// Table of contents from the rendered post: every h2–h4 carrying an id (which
// markdown-it-anchor gives them all), nested by level, as
// <nav class="toc"><ol>…</ol></nav>. Returns "" when there are no headings, so
// `{% if toc %}` works. Replaces eleventy-plugin-toc, which parsed every page
// with cheerio to do the same thing.
const HEADING = /<h([2-4])\b[^>]*?\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/gi;
const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

function headingText(html) {
  return stripMarginNotes(html)
    .replace(/<[^>]*>/g, "")
    .replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) =>
      e[0] !== "#"
        ? ENTITIES[e.toLowerCase()] ?? m
        : String.fromCodePoint(
            e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : +e.slice(1)
          )
    )
    .trim();
}

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function toc(content) {
  const root = { level: 1, children: [] };
  const stack = [root];
  for (const [, level, id, inner] of String(content).matchAll(HEADING)) {
    const text = headingText(inner);
    if (!text) continue;
    const node = { level: +level, id, text, children: [] };
    while (stack[stack.length - 1].level >= node.level) stack.pop();
    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }
  const list = (nodes) =>
    `<ol>${nodes
      .map(
        (n) =>
          `<li><a href="#${n.id}">${escapeHtml(n.text)}</a>${
            n.children.length ? list(n.children) : ""
          }</li>`
      )
      .join("")}</ol>`;
  return root.children.length ? `<nav class="toc">${list(root.children)}</nav>` : "";
}

module.exports = {
  excerpt,
  wordStats,
  toc,
};
