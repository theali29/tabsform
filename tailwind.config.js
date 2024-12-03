/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
