import esbuild from "rollup-plugin-esbuild";
import pkg from "./package.json" assert { type: "json" };
export default {
  input: "src/index.js", // 진입 경로
  output: [
    {
      file: pkg.exports["."].import,
      format: "esm",
    },
    {
      file: pkg.exports["."].require,
      format: "cjs",
    },
  ],
  plugins: [
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      minify: process.env.NODE_ENV === "production",
      jsx: "automatic",
    }),
  ],
  external: ["react", "react-dom", "styled-components"],
};
