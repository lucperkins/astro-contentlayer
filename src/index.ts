import {
  Config,
  generateDotpkg,
  getConfig,
  logGenerateInfo,
  runMain,
} from "@contentlayer/core";
import { T, pipe } from "@contentlayer/utils/effect";
import { AstroIntegration } from "astro";

type Options = {
  contentlayerConfigPath?: string;
  verbose?: boolean;
};

const run = runMain({
  tracingServiceName: "astro-contentlayer",
  verbose: true,
});

const astroContentlayer = (options: Options): AstroIntegration => {
  let { contentlayerConfigPath, verbose } = options;
  const configPathSetting =
    contentlayerConfigPath ?? "./contentlayer.config.js";
  const verboseSetting = verbose ?? false;

  return {
    name: "astro-contentlayer",
    hooks: {
      "astro:build:start": async () => {
        await pipe(
          getConfig({ configPath: configPathSetting }),
          T.chain((config: Config) =>
            generateDotpkg({ config, verbose: verboseSetting })
          ),
          T.tap(logGenerateInfo),
          run
        );
      },
    },
  };
};

export { astroContentlayer };
