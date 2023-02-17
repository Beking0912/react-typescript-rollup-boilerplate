import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  external: ['react'],
  plugins: [
    typescript(),
    commonjs(),
    resolve()
  ],
  output: [
    {
      file: "lib/bundle.cjs.js",
      format: 'cjs',
    },
    {
      file: "lib/bundle.esm.js",
      format: 'esm',
    },
    {
      file: "lib/bundle.browser.js",
      format: 'umd',
      name: 'Dry',
    },
  ],
};
