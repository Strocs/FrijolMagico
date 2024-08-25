/** @type {import('tailwindcss').Config} */

import animations from 'tailwindcss-animated'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#033220',
        'light-green': '#097333',
        yellow: '#f9bd21',
        orange: '#ef5026',
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
