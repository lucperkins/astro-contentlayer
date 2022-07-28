import { getConfig, generateDotpkg, runMain, logGenerateInfo, } from "@contentlayer/core";
import { pipe, T } from "@contentlayer/utils/effect";
const run = runMain({
    tracingServiceName: "astro-contentlayer",
    verbose: true,
});
const astroContentlayer = (options) => {
    const configPath = options.contentlayerConfigPath;
    return {
        name: "astro-contentlayer",
        hooks: {
            "astro:build:start": async () => {
                await pipe(getConfig({ configPath }), T.chain((config) => generateDotpkg({ config, verbose: false })), T.tap(logGenerateInfo), run);
            },
        },
    };
};
export { astroContentlayer };
//# sourceMappingURL=index.js.map