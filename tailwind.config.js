/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      'serif': ["Crimson Text","ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
    }
  },
  content: ["./build/**/*.html"],
  plugins: [
    require("@tailwindcss/typography"),
  ]
};
