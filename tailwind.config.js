/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      serif: [
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
    },
    extend: {
      colors: {
        flint: {
          400: "#2a2f3c",
          500: "#333948",
        },
      },
    },
  },
  content: ["./build/**/*.html"],
  plugins: [require("@tailwindcss/typography")],
};
