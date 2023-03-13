import { defineConfig } from "tsup";

export default defineConfig({
  minify: true,
  target: "es2021",
  clean: true,
  external: ["react"],
  sourcemap: false,
  dts: true,
  format: ["esm", "cjs"],
  entry: ["index.ts"],
  treeshake: true,
});
