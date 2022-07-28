import { AstroIntegration } from "astro";
declare type Options = {
    contentlayerConfigPath?: string;
} | undefined;
declare const astroContentlayer: (options?: Options) => AstroIntegration;
export { astroContentlayer };
