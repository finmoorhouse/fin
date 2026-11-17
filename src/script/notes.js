/*
 * Two independent things, both about notes in the margin: highlighting the
 * sentence a hovered note belongs to, and keeping an opened note in the
 * window. They share nothing but the file and the one <script> tag.
 */

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

/*
 * Keeps an opened margin note in the window.
 *
 * 'Read in full' is a mode: every other note goes, and the gutter is given
 * over to the one that's open. The way back out is that note's own Close
 * control — so if scrolling carries the note off the top or the bottom of the
 * window, the reader is left in the mode with nothing to click. The note
 * therefore rides with the page as far as the edge of the window and then
 * holds there, releasing when the page scrolls back far enough for it to sit
 * where it belongs.
 *
 * `position: sticky` is the obvious way to say that and can't be used: a note
 * lives inside the paragraph carrying its reference, and that paragraph is the
 * box sticky would confine it to — a few lines of travel.
 *
 * So there are two states, and the note is simply handed between them. Loose,
 * it is left alone entirely and rides with the page because it is part of it.
 * Held, it is `position: fixed` at the edge it reached. The point of the split
 * is that neither state has anything for script to do while the page moves —
 * an earlier version offset the note by a transform recomputed on every scroll
 * event, and visibly shivered, because the compositor had already moved the
 * page by the time the compensating offset landed a frame later. A race like
 * that can't be won by computing faster; it has to not be entered.
 *
 * Going fixed takes the note out of flow, which costs nothing here: it is a
 * float whose negative margin puts it wholly outside the text column, so it
 * shortens no line box, and neither <p> nor <main> is a block formatting
 * context, so it contributes to no height either.
 */
(function () {
  // Clearance kept at the top and bottom of the window. Twice this is the
  // max-height on an open note in writing.css, which is what guarantees a
  // position with both of the note's edges on screen exists to be found.
  const PIN_PAD = 24;
  // The breakpoint the margin notes themselves appear at.
  const wide = window.matchMedia("(min-width: 1220px)");

  let note = null; // the open note, if any
  let held = null; // the window offset it's held at, or null if it's loose
  let homeTop = 0; // where it sits when loose, in document coordinates
  let height = 0;
  let left = 0;
  let width = 0;

  /*
   * A held note is out of flow, so the position it would return to isn't
   * readable off it — hence the cached geometry, refreshed on every frame it
   * spends loose. That leaves one gap: if the page above the note reflows
   * while it's held, it lets go a little early or late, and comes right on the
   * first frame after. Height is readable in either state, and has to be, as
   * the ResizeObserver below exists to catch it changing.
   */
  function measure() {
    const box = note.getBoundingClientRect();
    height = box.height;
    if (held !== null) return;
    homeTop = box.top + window.scrollY;
    left = box.left;
    width = box.width;
  }

  function hold(top) {
    if (held === top) return; // the common case: nothing to write
    held = top;
    const s = note.style;
    s.position = "fixed";
    s.top = `${top}px`;
    s.left = `${left}px`;
    s.width = `${width}px`;
    // The float's own margins place it in the gutter; left and width are doing
    // that job now, and leaving them in only invites an over-constrained box.
    s.marginLeft = "0";
    s.marginRight = "0";
  }

  function release() {
    if (held === null) return;
    held = null;
    const s = note.style;
    s.position = s.top = s.left = s.width = s.marginLeft = s.marginRight = "";
  }

  function place() {
    if (!note) return;
    if (!wide.matches) return release();

    measure();
    const top = homeTop - window.scrollY;
    // The lowest the note's top can sit with its bottom still clear of the
    // window. Under the cap this is at or below PIN_PAD; the guard covers a
    // window shorter than a note's own minimum height, where the note is held
    // at the top and its end simply hangs off the bottom.
    const lowest = Math.max(window.innerHeight - PIN_PAD - height, PIN_PAD);
    if (top < PIN_PAD) hold(PIN_PAD);
    else if (top > lowest) hold(lowest);
    else release();
  }

  // A note's height isn't final when it opens — images inside it land later,
  // and the cap depends on the window. Observing it covers both, and fires
  // once on observe, which is what places the note in the first place.
  const watch = new ResizeObserver(place);

  function open(el) {
    close();
    note = el;
    watch.observe(note);
  }

  function close() {
    if (!note) return;
    release();
    watch.unobserve(note);
    // Unchecking is redundant when the change event is what got us here, and
    // is the actual close when Escape is; setting it in script fires no event,
    // so there's no loop back into the handler below.
    const toggle = note.querySelector(".fn-margin__toggle");
    if (toggle) toggle.checked = false;
    note = null;
  }

  document.addEventListener("change", (e) => {
    if (!e.target.matches || !e.target.matches(".fn-margin__toggle")) return;
    if (e.target.checked) open(e.target.closest(".fn-margin"));
    else close();
  });

  // Worth having even though Close can no longer scroll away: an open note has
  // taken the whole gutter, and a mode should have a keyboard way out.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // place() returns immediately while no note is open, which is the common
  // case — cheaper than attaching and detaching this around one. It runs
  // straight off the event rather than inside a requestAnimationFrame: scroll
  // is already dispatched at most once a frame, and the frame a rAF adds is
  // the one frame in which the hand-over between loose and held is visible.
  window.addEventListener("scroll", place, { passive: true });

  // A resize moves the gutter under a held note, and the cached geometry can
  // only be re-read with the note back in flow — so let go first, and let the
  // measurement that follows decide whether to take hold again.
  function remeasure() {
    if (!note) return;
    release();
    place();
  }
  window.addEventListener("resize", remeasure);
  wide.addEventListener("change", remeasure);

  // A reload can restore a checkbox's state, so a note may already be open
  // before any event fires. (The bfcache restores the inline styles along with
  // it, and the state below with them, so that case needs nothing.)
  const restored = document.querySelector(".fn-margin__toggle:checked");
  if (restored) open(restored.closest(".fn-margin"));
})();
