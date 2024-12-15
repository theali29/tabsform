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
      backgroundImage: {
        'google-button':
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAq9JREFUOBGlVU1IVFEUPue8azPOKOqoUUkGIUISmpCmoCmYE5a5shGDFrWqXRQm/a0CyxZug9lEYYtxQioJpsmYoo1/UZmtKzfVjGKRDjrOvNN9A+/NnUnN6sLjfuec7/vunbn3nYewxmBmjLjr2lDXu2W5HBDLGNgGDF8RYFLGI0W79/nR613NlMt6+oi01nWArt+QBhXplYwI8SMRnC8KTjxUK2mG4UO1V5D5OgOk5VVBJtaQTheOjt8x88IEkZbafvlTL0qzTQ9EeOmivCFVQEYQaa1vAuAetSDJuvyv7gnSGrJynQVb7DYXkmgGwrsGzzArooKjGAwupek41CwWvHPT8XD2nlQBF0HAka1PJ16lcikUdtccLIaC15lmBgPjIVs7r/DIUmAnxN67kipNI3dhcPxZymLzSIDOJ0AwONtnQZREITZV/Mblm/4nM2NZwQx7zfVt1XNgr57vB5+ZSc0tfYvvUtG6aEAgcKl6spoGH9aiy4Ur18qrOUSqSJ6ymvw/rNuJAWdVk4VEVpUa/w1mxDDJ+zRjih4t74KO+cMnzVidC/OduZmP1E6rHAT6lLw2Kwl4fOtnJT5ZKU3WNSL3uMe/4Um7+6IH4qyPWYaILLIc20iD+sDZHw2fTTODkGAervV3NlrkDNDSt1yeAB5OT3Mo2IPhZBOoGTrexKyHZHtSmgLKVw8GBZA3B3mG8uzx7wuxMsCEB2Mlp7K/nNtOq8WWJwmqH+11jFkG+32d/SCbg8X4A0DdAdnfzoCIVhnv9cDzyzkXDIl1baa6HvQS0VW5K/VarmvLFIXojgFezQ8MNl5yWo3F2qGprPF5jgHoN2Ur27DByl3NA9K1SY//tqk15t8MjaTxCagb6mrTQe+W2y2XJOMTYEeGMCO8JcaAg/D+C49/0eCr4xdWP+SQWHT2AwAAAABJRU5ErkJggg==')",
        'microsoft-button':
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsSAAALEgHS3X78AAAAVElEQVQ4jWP8//8/A7UBC8i8z4HKBE3mXX+XsWE3I0F1Da7/GZmo7kwGBoZRQ0cNpTKgXY5iXPqBoMn/owUYGXYRzlEMbqM5atTQoWEo9XMUAwMDAGSOGCOVddy/AAAAAElFTkSuQmCC')",
      },
      backgroundPosition: {
        'custom-pos': '10px 50%, 0px 0px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.custom-grid': {
          gridTemplateColumns: '[first] 0px [second] auto',
        },
        '.custom-grid-1': {
          gridTemplateRows: '[first] 52px [second] auto [third] 52px',
        },
      })
    }),
  ],
}
