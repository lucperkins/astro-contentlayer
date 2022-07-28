import { getConfig, generateDotpkg, runMain } from "@contentlayer/core";
import { pipe, T } from "@contentlayer/utils/effect";
const astroContentlayer = ({ config, }) => {
    return {
        name: "astro-contentlayer",
        hooks: {
            "astro:build:start": async () => {
                const configPath = config.base;
                await pipe(getConfig({ configPath }), T.chain((config) => generateDotpkg({ config, verbose: false })), run);
            },
        },
    };
};
const run = runMain({
    tracingServiceName: "astro-contentlayer",
    verbose: process.env.CL_DEBUG !== undefined,
});
export default astroContentlayer;
//# sourceMappingURL=index.js.map