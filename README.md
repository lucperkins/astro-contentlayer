# astro-contentlayer

This repo provides a [Contentlayer] integration for the [Astro] static site builder.

## What the integration does

This integration sets up Astro to run `contentlayer build` in the background every time you run `astro build`. This is indeed a limited feature set that I hope to expand if Astro or Contentlayer users are interested.

## Installation

First, install the integration in your Astro project. This package is *not* published to npm, so you'll need to use a reference to this repository.

## Configuration

You need to provide a configuration for `astro-contentlayer` in your `astro.config.mjs` configuration file:

```js
import { defineConfig } from "astro/config";
import { astroContentlayer } from "astro-contentlayer";

export default defineConfig({
  integrations: [
    astroContentlayer({
      contentlayerConfigPath: "./contentlayer.config.ts",
      verbose: true,
    }),
    // Other integration
  ],
});
```

### Configuration options

| Option                   | Description                                                                                                                  | Default |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :-------- |
| `contentLayerConfigPath` | The path to your Contentlayer configuration. This should typically be `./contentlayer.config.js` (or `.ts` for [TypeScript]) | `./contentlayer.config.js` |
| `verbose`                | Toggle verbose output.                                                                                                       | `false`                 |

[astro]: https://astro.build
[contentlayer]: https://contentlayer.dev
[typescript]: https://typescriptlang.org
