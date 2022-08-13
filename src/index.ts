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
  contentlayerConfigPath: string;
  verbose: boolean;
};

const run = runMain({
  tracingServiceName: "astro-contentlayer",
  verbose: true,
});

const astroContentlayer = (options: Options): AstroIntegration => {
  const { contentlayerConfigPath, verbose } = options;

  return {
    name: "astro-contentlayer",
    hooks: {
      "astro:build:start": async () => {
        await pipe(
          getConfig({ configPath: contentlayerConfigPath }),
          T.chain((config: Config) => generateDotpkg({ config, verbose })),
          T.tap(logGenerateInfo),
          run
        );
      },
    },
  };
};

export { astroContentlayer };
