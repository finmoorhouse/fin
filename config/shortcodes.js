function backLink(link, title) {
  return `
    <a
      href="/${link}"
      class="inline-flex items-center gap-1.5 bg-slate-600 text-sm font-semibold text-white px-2.5 py-0.5 rounded-full max-w-max no-underline font-medium font-sans"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="white"
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
    <details class="toggle bg-flint-400 pt-2 pb-2 open:pb-4 px-4 rounded-md font-sans mb-4 ring-slate-600 hover:ring-1 open:ring-1 border-white font-normal"
    ><summary class="cursor-pointer open:border-b border-white">${summary}</summary><hr class="!my-4 !mx-4"/>${content}</details>
`;
}

function aside(content) {
  return `
    <div class="relative"><span class="absolute left-4 top-0 border border-slate-600 rounded-tl-0 rounded-tr-0 rounded-bl-md rounded-br-md font-sans px-2 text-base opacity-70 md:inline-block hover:opacity-100 transition-opacity">Note</span><aside class="bg-flint-400 rounded-md px-6 border border-slate-600  [&>p]:my-1"><div class="space-y-2 first:mt-8 last:mb-3">${content}</div></aside></div>`;
}

module.exports = {
  backLink,
  year,
  note,
  toggle,
  aside,
};
