module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Minify only for production builds (`npm run build` sets NODE_ENV);
    // skipping it keeps the dev watcher's rebuilds fast.
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
