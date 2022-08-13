import { AstroIntegration } from "astro";
declare type Options = {
    contentlayerConfigPath: string;
    verbose: boolean;
};
declare const astroContentlayer: (options: Options) => AstroIntegration;
export { astroContentlayer };
