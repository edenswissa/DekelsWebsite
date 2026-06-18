/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /*
         * The primary palette is driven by CSS custom properties (see
         * src/styles/colors.css) so the whole scale can be remapped for dark
         * mode in one place. Values are space-separated RGB channels, wrapped
         * with <alpha-value> so Tailwind opacity modifiers (e.g.
         * `bg-primary-fifth/5`) keep working.
         */
        primary: {
          main: 'rgb(var(--color-main) / <alpha-value>)',    /* lightest surface (page/cards) */
          second: 'rgb(var(--color-second) / <alpha-value>)', /* subtle surface / borders */
          third: 'rgb(var(--color-third) / <alpha-value>)',   /* green accent */
          fourth: 'rgb(var(--color-fourth) / <alpha-value>)', /* secondary text */
          fifth: 'rgb(var(--color-fifth) / <alpha-value>)',   /* primary text (darkest) */
        },
        neutral: {
          white: '#FFFFFF',
          black: '#000000',
          gray: '#6B7280',
        }
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      direction: {
        'rtl': 'rtl',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
} 