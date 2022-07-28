import { AstroConfig, AstroIntegration } from "astro";
import { getConfig, generateDotpkg, Config, runMain } from "@contentlayer/core";
import { pipe, T } from "@contentlayer/utils/effect";

const astroContentlayer = ({
  config,
}: {
  config: AstroConfig;
}): AstroIntegration => {
  return {
    name: "astro-contentlayer",
    hooks: {
      "astro:build:start": async () => {
        const configPath = config.base;

        await pipe(
          getConfig({ configPath }),
          T.chain((config: Config) =>
            generateDotpkg({ config, verbose: false })
          ),
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

export default astroContentlayer;
