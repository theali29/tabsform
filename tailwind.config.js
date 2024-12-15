/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This includes all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        apercupro: [
          'apercu-pro',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        libre: ['Libre Baskerville', 'serif'],
      },
      animation: {
        slide: 'slide 5s linear  infinte',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-40)' },
          '25%': { transform: 'translateX(-46.6666%)' },
          '50%': { transform: 'translateX(-53.3333%)' },
          '75%': { transform: 'translateX(-59.3333%)' },
          '100%': { transform: 'translateX(-66.6666%)' },
        },
      },
      gridColumn: {
        '3-span-2': '3 / span 2', // Custom utility
        '6-span-2': ' 6 / span 2',
        '9-span-2': ' 9 / span 2',
      },
      screens: {
        xxs: '430px',
        xl: '1280px', // Customize your screen size breakpoint
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.custom-grid': {
          display: 'grid',
          gridTemplateColumns: '[first] 0px [second] auto',
        },
      })
    }),
  ],
}
