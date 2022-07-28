# astro-contentlayer

In your [Astro] project:

```shell
npm install astro-contentlayer
```

In your Astro configuration:

```js
import { defineConfig } from "astro/config";
import { astroContentlayer } from "astro-contentlayer";

export default defineConfig({
  integrations: [
    astroContentlayer({
      contentlayerConfigPath: "./contentlayer.config.ts", // You must specify this
    }),
  ],
});
```

[astro]: https://astro.build
