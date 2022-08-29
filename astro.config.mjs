import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // Enable Solid to support Solid JSX components.
  integrations: [solid(), tailwind()],
});
