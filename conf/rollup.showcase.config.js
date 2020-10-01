import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import url from "@rollup/plugin-url";
import htmlTemplate from "rollup-plugin-generate-html-template";
import { doc, dist } from "./rollup.config"

export const showcase = (file) => path.resolve(dist("showcase"), file);

export default {
    input: doc("showcase.tsx"),
    output: [
        {
            file: showcase("index.js"),
            format: "es",
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        typescript(),
        css({ output: showcase("index.css") }),
        url(),
        htmlTemplate({
            template: doc("showcase.template.html"),
            target: showcase("index.html")
        }),
    ]
};
