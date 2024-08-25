import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://elfrijolmagico.cl',
  integrations: [sitemap(), tailwind(), react()],
  output: 'static',
  adapter: vercel()
});