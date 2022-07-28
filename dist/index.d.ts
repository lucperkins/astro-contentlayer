import { AstroConfig, AstroIntegration } from "astro";
declare const astroContentlayer: ({ config, }: {
    config: AstroConfig;
}) => AstroIntegration;
export default astroContentlayer;
