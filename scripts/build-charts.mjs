import esbuild from "esbuild";
import { existsSync, readdirSync } from "node:fs";
import { join, sep } from "node:path";

const minify = process.argv.includes("--minify");
const watch = process.argv.includes("--watch");

const chartsDir = "src/charts";

// Every .js file under src/charts/ is a chart entry point, except files in
// underscore-prefixed directories (_lib etc.), which are shared code.
const entryPoints = existsSync(chartsDir)
  ? readdirSync(chartsDir, { recursive: true, withFileTypes: true })
      .filter(
        (d) =>
          d.isFile() &&
          d.name.endsWith(".js") &&
          !d.parentPath.split(sep).some((part) => part.startsWith("_"))
      )
      .map((d) => join(d.parentPath, d.name))
  : [];

if (entryPoints.length === 0) {
  console.log("charts: no chart modules found, nothing to build");
  process.exit(0);
}

const ctx = await esbuild.context({
  entryPoints,
  outbase: chartsDir,
  outdir: "build/charts",
  bundle: true,
  format: "esm",
  splitting: true,
  chunkNames: "chunks/[name]-[hash]",
  minify,
  sourcemap: !minify,
  target: "es2020",
  logLevel: "info",
});

if (watch) {
  await ctx.watch();
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
