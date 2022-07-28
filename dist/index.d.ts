import { AstroIntegration } from "astro";
declare type Options = {
    contentlayerConfigPath: string;
};
declare const astroContentlayer: (options: Options) => AstroIntegration;
export { astroContentlayer };
