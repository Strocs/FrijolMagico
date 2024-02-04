/** @type {import('tailwindcss').Config} */

import animations from 'tailwindcss-animated'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'p-blue': '#0d2a66',
        's-blue': '#0070b9',
        's-pink': '#fa2678',
        's-yellow': '#ffcd69',
      },
      boxShadow: {
        DEFAULT: '-0.5rem 0.5rem 0 0',
        hover: '-0.3rem 0.3rem 0 0',
      },
      boxShadowColor: {
        DEFAULT: 'var(--s-pink)',
      },
      fontFamily: {
        galindo: 'Galindo, system-ui, sans-serif',
        Sheiron: '"Sheiron Rodina", sans-serif',
        KOCHI: '"KOCHI", sans-serif',
      },
      screens: {
        tall: { raw: '(min-height: 800px)' },
      },
    },
  },
  plugins: [animations],
}
