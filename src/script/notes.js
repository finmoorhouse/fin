/*
 * Hovering a margin note (or its marker) highlights the sentence the note
 * hangs off.
 *
 * Uses the CSS Custom Highlight API, so the DOM is never touched: ranges are
 * handed to the browser and painted, which means no reflow, no risk of
 * splitting inline markup, and nothing to undo. Where the API is missing this
 * file is inert.
 */
(function () {
  if (typeof Highlight === "undefined" || !CSS.highlights) return;

  const highlight = new Highlight();
  CSS.highlights.set("fn-sentence", highlight);

  /*
   * Notes are rendered inline, inside the paragraph holding their marker, and
   * floated out to the gutter. So in document order a note's text sits between
   * the prose's own words, and a naive walk reads the previous note as part of
   * the sentence. These subtrees are skipped; the marker itself is not, since
   * a {% note %} label is real prose and a footnote numeral is one character.
   */
  const NOTES = ".fn-margin, .sidenote__content";
  const BLOCKS = "p, li, blockquote, figcaption, dd, h2, h3, h4";

  // A full stop (with any closing quote or bracket), then space, then
  // something that can open a sentence.
  const BOUNDARY = /[.!?]["'”’)\]]*\s+/g;
  const OPENER = /[A-Z“‘"'(\d]/;
  // Abbreviations and initials that end in a stop without ending a sentence.
  const ABBREV =
    /(?:\b(?:e\.g|i\.e|etc|vs|cf|Dr|Mr|Mrs|Ms|Prof|St|approx|Fig|No|pp|ed|al|Jr|Sr|Inc|Ltd)\.|\b[A-Z]\.)$/;

  /** The block's text, a map back to the nodes, and where the marker falls. */
  function readBlock(block, marker) {
    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.parentElement.closest(NOTES)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT,
    });

    const parts = [];
    let text = "";
    let markerAt = -1;
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (markerAt < 0 && marker.contains(node)) markerAt = text.length;
      // Footnote numerals are left out of the text entirely. A marker sitting
      // after the full stop would otherwise read as `…sentence.1 Next…`, where
      // the digit hides the sentence end and the highlight runs on into the
      // following sentence. Dropping them also keeps the raised numeral out of
      // the painted band, where it showed as a small box floating above it.
      // A {% note %} label is left in — that text is prose.
      if (node.parentElement.closest(".footnote-ref")) continue;
      parts.push({ node, start: text.length });
      text += node.data;
    }
    return { text, parts, markerAt };
  }

  /** Sentence ends, as [end of the stop, start of the next sentence]. */
  function boundaries(text) {
    const found = [];
    BOUNDARY.lastIndex = 0;
    for (let m; (m = BOUNDARY.exec(text)); ) {
      const next = m.index + m[0].length;
      if (!OPENER.test(text.charAt(next))) continue;
      if (ABBREV.test(text.slice(0, m.index + 1))) continue;
      found.push([next - (m[0].length - m[0].trimEnd().length), next]);
    }
    return found;
  }

  function sentenceAround(text, markerAt) {
    let start = 0;
    let end = text.length;
    for (const [stop, next] of boundaries(text)) {
      if (next <= markerAt) start = next;
      else {
        end = stop;
        break;
      }
    }
    while (start < end && /\s/.test(text.charAt(start))) start++;
    return [start, end];
  }

  function paint(block, marker) {
    const { text, parts, markerAt } = readBlock(block, marker);
    if (markerAt < 0) return;
    const [start, end] = sentenceAround(text, markerAt);

    highlight.clear();
    for (const { node, start: at } of parts) {
      const from = Math.max(start, at);
      const to = Math.min(end, at + node.data.length);
      if (from >= to) continue;
      const range = document.createRange();
      range.setStart(node, from - at);
      range.setEnd(node, to - at);
      highlight.add(range);
    }
  }

  /** A footnote's marker is its previous sibling; a sidenote's is its label. */
  function markerFor(note) {
    if (note.classList.contains("fn-margin")) {
      const prev = note.previousElementSibling;
      return prev && prev.classList.contains("footnote-ref") ? prev : null;
    }
    const sidenote = note.closest(".sidenote");
    return sidenote ? sidenote.querySelector(".sidenote__button") : null;
  }

  const clear = () => highlight.clear();

  for (const note of document.querySelectorAll(NOTES)) {
    const marker = markerFor(note);
    if (!marker) continue;
    const block = marker.closest(BLOCKS) || note.parentElement;
    const show = () => paint(block, marker);
    for (const el of [note, marker]) {
      el.addEventListener("mouseenter", show);
      el.addEventListener("mouseleave", clear);
    }
  }
})();
