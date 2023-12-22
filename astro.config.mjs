import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://elfrijolmagico.cl',
  integrations: [sitemap(), tailwind()],
  output: "server",
  adapter: vercel()
});