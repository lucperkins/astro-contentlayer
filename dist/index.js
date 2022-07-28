import { getConfig, generateDotpkg, runMain, logGenerateInfo, } from "@contentlayer/core";
import { pipe, T } from "@contentlayer/utils/effect";
const astroContentlayer = (options) => {
    const configPath = options?.contentlayerConfigPath ?? ".";
    return {
        name: "astro-contentlayer",
        hooks: {
            "astro:build:start": async () => {
                await pipe(getConfig({ configPath }), T.chain((config) => generateDotpkg({ config, verbose: false })), T.tap(logGenerateInfo), run);
            },
        },
    };
};
const run = runMain({
    tracingServiceName: "astro-contentlayer",
    verbose: process.env.CL_DEBUG !== undefined,
});
export { astroContentlayer };
//# sourceMappingURL=index.js.map