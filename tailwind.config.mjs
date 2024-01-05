/** @type {import('tailwindcss').Config} */
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
        DEFAULT: '-0.6rem 0.6rem 0 0',
        hover: '-0.3rem 0.3rem 0 0',
      },
      boxShadowColor: {
        DEFAULT: 'var(--s-pink)',
      },
      fontFamily: {
        galindo: 'Galindo, system-ui, sans-serif',
        thickedy: 'Thickedy, system-ui, sans-serif',
        montserrat: 'montserrat, system-ui, sans-serif',
      },
    },
  },
  plugins: [],
}
