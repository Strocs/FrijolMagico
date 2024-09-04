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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--green)',
          foreground: 'var(--green-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--orange)',
          foreground: 'var(--orange-foreground)',
        },
        accent: {
          DEFAULT: 'var(--yellow)',
          foreground: 'var(--yellow-foreground)',
        },
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
        'card-slides': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc((-128px - 8px) * 4))' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'card-slides': 'card-slides 12s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
