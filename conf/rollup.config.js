import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import css from "rollup-plugin-css-only";
import packageJson from "../package.json";

const baseDir = path.resolve(__dirname, "..");

export const src = (file) => path.resolve(baseDir, "src", file);
export const doc = (file) => path.resolve(baseDir, "doc", file);
export const dist = (file) => path.resolve(baseDir, "dist", file);

export default [
    {
        input: src("index.ts"),
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            typescript(),
            dts(),
            css({ output: dist("index.css") }),
        ]
    },
    {
        input: src("index.ts"),
        output: [
            {
                file: packageJson.types,
                format: "esm",
                sourcemap: true
            },
        ],
        plugins: [
            dts(),
        ]
    }
];
