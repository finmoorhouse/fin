const markdownIt = require('markdown-it')();

function backLink(link, title) {
  return `
    <a
      href="/${link}"
      class="inline-flex items-center gap-1.5 border border-rule hover:border-rule-soft text-sm text-ink px-2.5 py-0.5 rounded-full max-w-max no-underline font-medium font-sans"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
        class="inline"
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
    `;
}

function year(date) {
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}

function note(content, label) {
  return `<span class="sidenote"><input
        aria-label="Show sidenote"
        type="checkbox"
        id="sidenote__checkbox--${label.replaceAll(" ", "-")}"
        class="sidenote__checkbox"><label
        tabindex="0"
        title=""
        aria-describedby="sidenote-${label.replaceAll(" ", "-")}"
        for="sidenote__checkbox--${label.replaceAll(" ", "-")}"
        class="sidenote__button"
        >${label}</label><small
        id="sidenote-${label.replaceAll(" ", "-")}"
        class="sidenote__content"><span class="sidenote__content-parenthesis"
        >(sidenote: </span>${content}<span class="sidenote__content-parenthesis">)</span></small></span>`;
}

function toggle(content, summary) {
  return `
    <details class="toggle bg-panel pt-2 pb-2 open:pb-4 px-4 rounded-md font-sans mb-4 ring-rule hover:ring-1 open:ring-1 border-ink font-normal"
    ><summary class="cursor-pointer open:border-b border-ink">${summary}</summary><hr class="!my-4 !mx-4"/>${content}</details>
`;
}

function aside(content) {
  return `
    <div class="relative"><span class="absolute left-4 top-0 border border-rule rounded-tl-0 rounded-tr-0 rounded-bl-md rounded-br-md font-sans px-2 text-base opacity-70 md:inline-block hover:opacity-100 transition-opacity">Note</span><aside class="bg-panel rounded-md px-6 border border-rule  [&>p]:my-1"><div class="space-y-2 first:mt-8 last:mb-3">${content}</div></aside></div>`;
}

function drop(content, summary = "Show notes →") {
  return `</ul>
  <details class="group relative mt-[-10px] mb-[-8px]">
    <summary class="drop-summary ml-8 pt-2 inline text-muted text-base hover:underline hover:decoration-dotted border-t border-rule-soft">
      <span class="group-open:hidden">${summary}</span><span class="hidden group-open:inline">✕ Close notes</span>
    </summary>
    <div class="left-0 z-10 mt-2 mb-3 text-soft border border-rule-soft px-4 rounded-md [&>p]:mt-3 [&>p]:mb-3">
      ${markdownIt.render(content)}
    </div>
  </details>`;
}

let chartCount = 0;
function chart(content, src, aspect = "aspect-[3/2]") {
  const id = `chart-${src.replace(/[^a-zA-Z0-9-]/g, "-")}-${chartCount++}`;
  const caption =
    content && content.trim()
      ? `<figcaption class="text-sm text-muted font-sans mt-2 px-1">${markdownIt.renderInline(content.trim())}</figcaption>`
      : "";
  return `<figure class="my-8">
<div id="${id}" class="not-prose relative w-full ${aspect} bg-panel border border-rule rounded-md overflow-hidden">
<div class="chart-placeholder absolute inset-0 flex flex-col items-center justify-center gap-1 text-muted text-sm font-sans select-none">
<span>Interactive chart</span>
<noscript><span>(requires JavaScript to display)</span></noscript>
</div>
</div>${caption}
<script type="module">
const el = document.getElementById("${id}");
const load = () => import("/charts/${src}.js").then((m) => {
el.querySelector(".chart-placeholder")?.remove();
return m.default(el);
}).catch((err) => {
const label = el.querySelector(".chart-placeholder span");
if (label) label.textContent = "Chart failed to load.";
console.error("chart ${src}:", err);
});
if ("IntersectionObserver" in window) {
const io = new IntersectionObserver((entries) => {
if (entries.some((e) => e.isIntersecting)) { io.disconnect(); load(); }
}, { rootMargin: "400px" });
io.observe(el);
} else { load(); }
</script>
</figure>`;
}

module.exports = {
  backLink,
  year,
  note,
  toggle,
  aside,
  drop,
  chart,
};
