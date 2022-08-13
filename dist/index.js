import { generateDotpkg, getConfig, logGenerateInfo, runMain, } from "@contentlayer/core";
import { T, pipe } from "@contentlayer/utils/effect";
const run = runMain({
    tracingServiceName: "astro-contentlayer",
    verbose: true,
});
const astroContentlayer = (options) => {
    const { contentlayerConfigPath, verbose } = options;
    return {
        name: "astro-contentlayer",
        hooks: {
            "astro:build:start": async () => {
                await pipe(getConfig({ configPath: contentlayerConfigPath }), T.chain((config) => generateDotpkg({ config, verbose })), T.tap(logGenerateInfo), run);
            },
        },
    };
};
export { astroContentlayer };
//# sourceMappingURL=index.js.map