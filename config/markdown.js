const markdownIt = require("markdown-it");
const mathDelimiters = require("@vscode/markdown-it-katex").default;
const temml = require("temml");
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
  .use(mathDelimiters)
  .use(temmlRenderer)
  .use(markdownItAnchor, markdownItAnchorOptions)
  .use(markdownItAttrs)
  .use(footnoteMarginNotes);

/**
 * Maths is rendered to MathML by Temml, not to styled spans by KaTeX.
 *
 * MathML is what makes an equation selectable and copyable as real Unicode,
 * and it needs ~9KB of CSS and one webfont rather than KaTeX's 24KB and
 * twenty. Temml is by KaTeX's own author and takes the identical LaTeX, so
 * every existing post renders unchanged.
 *
 * The `$…$` / `$$…$$` scanning still comes from @vscode/markdown-it-katex:
 * that part is well tested against the awkward cases (escaped dollars, prices
 * like "$5", `$` inside code spans) and is stricter than the plugin it
 * replaced, so only the four *render* rules are swapped. KaTeX is never
 * called — that package is here purely as a tokeniser.
 */
function temmlRenderer(md) {
  const render = (latex, displayMode) => {
    try {
      return temml.renderToString(latex, { displayMode, throwOnError: false });
    } catch (error) {
      return `<span class="math-error" title="${md.utils.escapeHtml(
        String(error)
      )}">${md.utils.escapeHtml(latex)}</span>`;
    }
  };

  // `$$…$$` written in the middle of a sentence still arrives as a math_block
  // token, indistinguishable from a real display block by its own flags — the
  // only difference is that markdown-it reaches it through renderInline. A few
  // posts do write it that way (research.md has "($$\\approx$$ liberal
  // democracy)"), and wrapping that in a <p> puts a block inside a paragraph,
  // which browsers fix up by splitting the sentence into three. So track the
  // render path and treat mid-sentence maths as inline, which is what it
  // plainly means.
  let inInline = false;
  const baseRenderInline = md.renderer.renderInline;
  md.renderer.renderInline = function (tokens, opts, env) {
    const outer = inInline;
    inInline = true;
    try {
      // .call, not .bind: the margin-note renderer below is an object whose
      // prototype is this renderer but whose `rules` differ, and it has to keep
      // rendering through its own rules.
      return baseRenderInline.call(this, tokens, opts, env);
    } finally {
      inInline = outer;
    }
  };

  const inline = (tokens, idx) => render(tokens[idx].content, false);

  // Display maths keeps a <p class="math-block"> wrapper, which the margin-note
  // renderer rewrites into a <span> (a block element cannot nest inside the
  // paragraph a margin note lives in).
  const block = (tokens, idx) =>
    inInline
      ? render(tokens[idx].content, false)
      : `<p class="math-block">${render(tokens[idx].content, true)}</p>`;

  md.renderer.rules.math_inline = inline;
  md.renderer.rules.math_block = block;
  md.renderer.rules.math_inline_block = block;
  md.renderer.rules.math_inline_bare_block = block;
}

/**
 * Footnotes double as margin notes.
 *
 * Alongside the usual numbered link into the list at the foot of the post, each
 * footnote also emits a copy of itself that floats into the right gutter on
 * wide screens, the way `{% note %}` sidenotes do (styling lives in
 * src/style/writing.css). The list at the bottom is left untouched and stays
 * canonical: it is what narrow viewports, print and screen readers get, which
 * is why the margin copy is `aria-hidden`.
 *
 * Because the copy is spliced into the paragraph containing the reference, it
 * cannot contain block-level elements — a `<p>` or `<ul>` inside a `<p>` ends
 * the paragraph early and wrecks the float. So the copy is rendered through a
 * second renderer whose block rules emit `display: block` spans instead. That
 * keeps multi-paragraph and list footnotes working; it just makes the margin
 * copy presentational, which it already is.
 */
function footnoteMarginNotes(md) {
  // Anything genuinely un-nestable falls back to bottom-of-post only.
  const UNSAFE = /<(div|table|pre|h[1-6])[\s>]/i;
  // Longer than this (plain-text characters) and the margin copy is clamped to
  // a fixed height and given a link down to the full note. Roughly tuned to the
  // `max-height` in writing.css — a 23rem column fits ~41 characters a line.
  const CLAMP_ABOVE = 450;

  const block = (open, close = "</span>") => [() => open, () => close];
  const [pOpen, pClose] = block('<span class="fn-margin__p">');
  const [ulOpen, ulClose] = block('<span class="fn-margin__list">');
  const [olOpen, olClose] = block('<span class="fn-margin__list">');
  const [liOpen, liClose] = block('<span class="fn-margin__li">');
  const [bqOpen, bqClose] = block('<span class="fn-margin__quote">');

  const baseMath = md.renderer.rules.math_block;

  const unwrapFlow = (html) =>
    html
      .replace(/<figure\b[^>]*>/gi, '<span class="fn-margin__figure">')
      .replace(/<\/figure\s*>/gi, "</span>")
      .replace(/<figcaption\b[^>]*>/gi, '<span class="fn-margin__caption">')
      .replace(/<\/figcaption\s*>/gi, "</span>");

  // The marker is a bare numeral rather than markdown-it-footnote's `[n]`.
  // Set before marginRenderer copies the rules, so both renderers agree.
  md.renderer.rules.footnote_caption = (tokens, idx) =>
    String(Number(tokens[idx].meta.id) + 1);

  // A renderer that shares every inline rule with the real one, but rewrites
  // the block-level wrappers as spans.
  const marginRenderer = Object.create(md.renderer);
  marginRenderer.rules = Object.assign({}, md.renderer.rules, {
    paragraph_open: pOpen,
    paragraph_close: pClose,
    bullet_list_open: ulOpen,
    bullet_list_close: ulClose,
    ordered_list_open: olOpen,
    ordered_list_close: olClose,
    list_item_open: liOpen,
    list_item_close: liClose,
    blockquote_open: bqOpen,
    blockquote_close: bqClose,
    hr: () => '<span class="fn-margin__hr"></span>',
    // Raw HTML in a footnote — in practice the {% img %} shortcode, which
    // wraps its image in <figure>/<figcaption>. Those are flow content and
    // would close the paragraph the margin copy sits in. <picture>, <source>
    // and <img> are phrasing content, so they pass through untouched and the
    // Cloudinary srcset survives.
    html_block: (tokens, idx) => unwrapFlow(tokens[idx].content),
    html_inline: (tokens, idx) => unwrapFlow(tokens[idx].content),
    // Display maths is wrapped in <p class="math-block"> (see temmlRenderer).
    // MathML's <math> is phrasing content, so the element itself nests inside
    // a paragraph happily — only the <p> wrapper has to become a <span>.
    math_block: (...args) =>
      baseMath(...args)
        .replace(/^<p class=('|")math-block/, "<span class=$1math-block")
        .replace(/<\/p>\s*$/, "</span>"),
    // The backref arrow belongs to the list at the bottom, and a footnote cited
    // inside another footnote gets its number only.
    footnote_anchor: () => "",
    footnote_ref: renderFootnoteSup,
  });

  /** The marker itself. `font-sans` so the stack stays defined in one place —
      the Tailwind config — since writing.css is copied through unprocessed. */
  function renderFootnoteSup(tokens, idx, opts, env, slf) {
    const id = slf.rules.footnote_anchor_name(tokens, idx, opts, env, slf);
    const refid =
      tokens[idx].meta.subId > 0 ? `${id}:${tokens[idx].meta.subId}` : id;
    const caption = slf.rules.footnote_caption(tokens, idx, opts, env, slf);
    return `<sup class="footnote-ref font-sans"><a href="#fn${id}" id="fnref${refid}">${caption}</a></sup>`;
  }

  // markdown-it-footnote moves footnote bodies to the end of the token stream
  // in `footnote_tail`, so by the time this runs every body is sitting between
  // a footnote_open/footnote_close pair and can be rendered ahead of time.
  md.core.ruler.after("footnote_tail", "footnote_margins", (state) => {
    const list = state.env.footnotes && state.env.footnotes.list;
    if (!list) return;

    const margins = (state.env.footnoteMargins = {});
    const tokens = state.tokens;

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== "footnote_open") continue;
      const { id } = tokens[i].meta;

      let end = i + 1;
      while (end < tokens.length && tokens[end].type !== "footnote_close") end++;
      const body = tokens.slice(i + 1, end);
      i = end;

      const html = marginRenderer.render(body, md.options, state.env).trim();
      if (!html || UNSAFE.test(html)) continue;

      // KaTeX's markup is mostly duplicated glyphs, so stripped-tag length
      // badly under-counts it — and display maths doesn't fit an 18rem column
      // at any length, so it's clamped on sight.
      const text = html.replace(/<[^>]*>/g, "");
      margins[id] = {
        html,
        clamped: text.length > CLAMP_ABOVE || /math-block/.test(html),
      };
    }
  });

  // A footnote can cite another footnote. Inside the list at the foot of the
  // post that reference is just a number — the margin copy belongs to the
  // reference in the body text.
  let inFootnoteList = false;
  const baseOpen = md.renderer.rules.footnote_open;
  const baseClose = md.renderer.rules.footnote_close;
  md.renderer.rules.footnote_open = (...args) => {
    inFootnoteList = true;
    return baseOpen(...args);
  };
  md.renderer.rules.footnote_close = (...args) => {
    inFootnoteList = false;
    return baseClose(...args);
  };

  md.renderer.rules.footnote_ref = (tokens, idx, opts, env, slf) => {
    const sup = renderFootnoteSup(tokens, idx, opts, env, slf);
    if (inFootnoteList) return sup;
    const margin = (env.footnoteMargins || {})[tokens[idx].meta.id];
    if (!margin) return sup;

    const number = Number(tokens[idx].meta.id) + 1;
    const bodyClass = margin.clamped
      ? "fn-margin__body fn-margin__body--clamped"
      : "fn-margin__body";

    // Clamped notes get a checkbox to expand in place. It has to come first so
    // the `:checked ~` rules in writing.css can reach the body and the labels,
    // and it's tabindex="-1" for the same reason the copy is aria-hidden:
    // focusable content outside the accessibility tree is worse than none, and
    // the list at the foot of the post is the path that's actually navigable.
    let toggle = "";
    let controls = "";
    if (margin.clamped) {
      const id = slf.rules.footnote_anchor_name(tokens, idx, opts, env, slf);
      const focusId = `fn-focus-${id}-${tokens[idx].meta.subId || 0}`;
      toggle = `<input type="checkbox" id="${focusId}" class="fn-margin__toggle" tabindex="-1">`;
      controls =
        `<label class="fn-margin__more" for="${focusId}">Read in full ↓</label>` +
        `<label class="fn-margin__close" for="${focusId}">✕ Close</label>`;
    }

    return `${sup}<small class="fn-margin" aria-hidden="true">${toggle}<span class="fn-margin__num">${number}</span><span class="${bodyClass}">${margin.html}</span>${controls}</small>`;
  };
}

// Assets for the maths, resolved from the installed packages rather than
// hardcoded under node_modules/ so they always match the renderer above.
// Eleventy copies them into build/style/temml/ (see .eleventy.js).
//
// Temml-STIX2.css asks for the font as url("./STIXTwoMath.woff2"), relative to
// itself, so the two must land in the same output directory under exactly that
// filename. It tries local('STIXTwoMath') first, which means readers on macOS
// (where STIX Two Math ships with the OS) never download it at all.
const path = require("path");
const temmlDist = path.dirname(require.resolve("temml/package.json"));
const stixPkg = path.dirname(
  require.resolve("@fontsource/stix-two-math/package.json")
);

module.exports = {
  markdownLib,
  temmlCssPath: path.join(temmlDist, "dist/Temml-STIX2.css"),
  stixFontPath: path.join(
    stixPkg,
    "files/stix-two-math-latin-400-normal.woff2"
  ),
};
