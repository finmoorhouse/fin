/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      serif: [
        "Spectral",
        "Source Serif Pro",
        "Apple Garamond",
        "Baskerville",
        "Libre Baskerville",
        "Droid Serif",
        "Times New Roman",
        "Times",
        "serif",
        "ui-serif",
        "Noto Emoji",
        "Quivira",
      ],
      sans: [
        "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    screens: {
      desktop: "1400px",
      tablet: "600px",
    },
    extend: {
      colors: {
        flint: {
          400: "#2a2f3c",
          500: "#333948",
        },
        // Semantic tokens, defined in src/global.css and swapped by
        // data-theme="light" on <html>. One class set, two themes.
        page: "rgb(var(--c-page) / <alpha-value>)",
        panel: "rgb(var(--c-panel) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        soft: "rgb(var(--c-soft) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        rule: "rgb(var(--c-rule) / <alpha-value>)",
        "rule-soft": "rgb(var(--c-rule-soft) / <alpha-value>)",
        link: "rgb(var(--c-link) / <alpha-value>)",
      },
    },
  },
  content: ["./build/**/*.html", "./src/charts/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
};
