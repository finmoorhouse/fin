// The "learning how to learn" variant of narrow-broad.js: the same four-node
// graph, plus the one edge that section argues for — C₁ → C₂.
//
// In the first figure broad capabilities hang off A alone: whatever RSI does
// for C₂, it does by making compute go further. The claim here is that the
// research skill which blows up (C₁ — finding ways to improve A) is itself the
// kind of skill that transfers to finding ways to improve how C₂ scales. So C₂
// acquires a second parent, and the interesting one: it now sits downstream of
// a quantity that is exploding, not just downstream of a stock that is growing.
//
// What has *not* changed is the top row. C₂ still has no outgoing edge, so it
// still appears nowhere in the acceleration condition — the footer of the
// first figure survives intact, which is the point of drawing the two the
// same way. The difference is entirely in what C₂ inherits, so that is what
// this figure's footer states.
//
// Layout is deliberately identical to narrow-broad.js so the two read as one
// diagram with an edge added; the shared primitives live in _lib/graph.js.

import { mount } from "../_lib/runtime.js";
import { edge, elbow, fontFor, frame, node, svgEl } from "./_lib/graph.js";

const COL = { A: 0.12, C: 0.49, R: 0.88 };
const ROW = { top: 0.2, mid: 0.52, bot: 0.84 };

const NODES = {
  A: { sym: "A", sub: "efficiency", x: COL.A, y: ROW.mid },
  D: { sym: "Ȧ", sub: "progress", x: COL.R, y: ROW.mid, flow: true },
  C1: { sym: "C₁", sub: "narrow", x: COL.C, y: ROW.top },
  C2: { sym: "C₂", sub: "broad", x: COL.C, y: ROW.bot },
};

const SPEC = {
  title: "Narrow research skill transfers to broad capabilities",
  short: "Narrow → broad",
  footer: [
    [
      { text: "E(C₂,A) = " },
      { text: "ε(C₂,A)", tone: 2 },
      { text: " + " },
      { text: "ε(C₂,C₁)·ε(C₁,A)", tone: 3 },
    ],
    [{ text: "the condition on Ȧ is unchanged" }],
  ],
};

export default function (el) {
  mount(el, (width, height) => {
    const svg = svgEl("svg", { width, height, viewBox: `0 0 ${width} ${height}` });
    svg.append(graphPanel({ x: 0, y: 0, w: width, h: height }));
    return svg;
  });
}

function graphPanel(box) {
  const g = svgEl("g");
  const fs = fontFor(box.w);
  const { gx, gy, gw, gh } = frame(g, box, SPEC, fs);

  const nw = Math.min(0.22 * gw, 150);
  const nh = fs * 2.8;
  const longest = Math.max(...Object.values(NODES).map((n) => n.sub.length));
  const subFs = Math.min(fs * 0.82, (nw - 8) / (longest * 0.5));

  const X = (n) => gx + n * gw;
  const Y = (n) => gy + n * gh;
  const at = (k) => ({ x: X(NODES[k].x), y: Y(NODES[k].y) });
  const a = at("A");
  const d = at("D");
  const c1 = at("C1");
  const c2 = at("C2");

  const inner = nw * 0.26;
  const yTop = a.y - nh / 2;
  const apex = gy + fs * 1.3;
  const cy = (apex - 0.25 * yTop) / 0.75;

  const edges = [
    // C₁ → C₂ goes first so that the halo on ε(Ȧ,A) sits over it: the new edge
    // has to cross the A → Ȧ line, and the crossing is pushed off-centre (to
    // C₁'s left quarter point) so it doesn't happen underneath that label.
    {
      d: `M${c1.x - inner},${c1.y + nh / 2} L${c2.x - inner},${c2.y - nh / 2}`,
      tone: 3,
      label: { x: c1.x - inner, y: Y(0.68), s: "ε(C₂,C₁)" },
    },
    // A → Ȧ: fishing out, the same self-loop as the previous figure.
    {
      d: `M${a.x + nw / 2},${a.y} L${d.x - nw / 2},${d.y}`,
      tone: 0,
      label: { x: (a.x + d.x) / 2, y: a.y - fs * 1.15, s: "ε(Ȧ,A)" },
    },
    // A → C₁ → Ȧ: the narrow loop.
    {
      d: elbow(a.x + inner, yTop, c1.x - nw / 2, c1.y, "v"),
      tone: 1,
      label: { x: X(0.28), y: Y(0.33), s: "ε(C₁,A)" },
    },
    {
      d: elbow(c1.x + nw / 2, c1.y, d.x - inner, d.y - nh / 2, "h"),
      tone: 1,
      label: { x: X(0.72), y: Y(0.33), s: "ε(Ȧ,C₁)" },
    },
    // A → C₂: the direct effective-compute edge from the previous figure,
    // which is now only half the story.
    {
      d: elbow(a.x + inner, a.y + nh / 2, c2.x - nw / 2, c2.y, "v"),
      tone: 2,
      label: { x: X(0.26), y: Y(0.73), s: "ε(C₂,A)" },
    },
    // Ȧ ⇢ A over the top. C₂ still has nothing leaving it, so the top row is
    // still the only loop in the picture.
    {
      d: `M${d.x + inner},${yTop} C${d.x + inner},${cy} ${a.x - inner},${cy} ${a.x - inner},${yTop}`,
      tone: "muted",
      dash: "5 4",
      label: { x: (a.x + d.x) / 2, y: apex, s: "accumulates" },
    },
  ];

  for (const e of edges) edge(g, e, fs);
  for (const key of Object.keys(NODES)) {
    node(g, { ...NODES[key], ...at(key), w: nw, h: nh, subFs }, fs);
  }
  return g;
}
