/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#E9E4DC',      /* Alabaster - cream/off-white */
          second: '#BAC6B8',     /* Ash gray - light sage */
          third: '#8BA794',      /* Cambridge blue - medium green */
          fourth: '#5D6E75',     /* Payne's gray - dark blue-gray */
          fifth: '#2F3456',      /* Space cadet - deep navy */
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