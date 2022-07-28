import { AstroConfig, AstroIntegration } from "astro";
import * as core from "@contentlayer/core";
import { E, OT, pipe, S, T } from "@contentlayer/utils/effect";

type Input = {
  config: AstroConfig;
};

const createPlugin = ({ config }: Input): AstroIntegration => {
  return {
    name: "astro-contentlayer",
    hooks: {
      "astro:build:start": async () => {
        const configPath = config.base;
        const getConfig = core.getConfig({ configPath });
        const generate = T.chain((config: core.Config) =>
          core.generateDotpkg({ config, verbose: false })
        );
        const log = T.tap(core.logGenerateInfo);

        await pipe(getConfig, generate, log, runMain);
      },
    },
  };
};

const runMain = core.runMain({
  tracingServiceName: "astro-contentlayer",
  verbose: process.env.CL_DEBUG !== undefined,
});

export default createPlugin;
