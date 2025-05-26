import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.frijolmagico.cl',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  output: 'static',
  adapter: vercel(),
})
