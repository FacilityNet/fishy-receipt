import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import showcaseConfig, { showcase } from "./rollup.showcase.config";

export default {
    input: showcaseConfig.input,
    output: showcaseConfig.output,
    watch: {
        chokidar: {
            usePolling: true
        }
    },
    plugins: [
        ...showcaseConfig.plugins,
        serve({
            open: true,
            contentBase: showcase(".")
        }),
        livereload({
            watch: showcase(".")
        })
    ]
}
