import { AstroIntegration } from "astro";
import {
  getConfig,
  generateDotpkg,
  Config,
  runMain,
  logGenerateInfo,
} from "@contentlayer/core";
import { pipe, T } from "@contentlayer/utils/effect";

type Options =
  | {
      contentlayerConfigPath?: string;
    }
  | undefined;

const astroContentlayer = (options?: Options): AstroIntegration => {
  const configPath = options?.contentlayerConfigPath ?? ".";

  return {
    name: "astro-contentlayer",
    hooks: {
      "astro:build:start": async () => {
        await pipe(
          getConfig({ configPath }),
          T.chain((config: Config) =>
            generateDotpkg({ config, verbose: false })
          ),
          T.tap(logGenerateInfo),
          run
        );
      },
    },
  };
};

const run = runMain({
  tracingServiceName: "astro-contentlayer",
  verbose: process.env.CL_DEBUG !== undefined,
});

export { astroContentlayer };
