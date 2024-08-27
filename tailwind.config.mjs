/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
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
        noto: '"Noto Sans Mono", monospace',
        josefin: '"Josefin Sans", sans-serif',
      },
      screens: {
        tall: { raw: '(min-height: 800px)' },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

