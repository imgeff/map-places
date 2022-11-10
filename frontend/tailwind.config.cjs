/** @type {import('tailwindcss').Config} */
const daisy = require('daisyui');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },

      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },
    },
    extend: {
      colors: {
        ocean: {
          800: '#0D0D0D',
          600: '#012030',
          400: '#13678A',
          300: '#159A9C',
          200: '#45C4B0',
          100: '#9BF2EA',
        },
        lemon: {
          700: '#025940',
          500: '#04BF8A',
          300: '#9AEBA3',
          100: '#DAFDBA',
        },
        neutral: {
          700: '#202022',
          500: '#878787',
          400: '#A5A692',
          300: '#B4BEC9',
          250: '#CACACA',
          200: '#F2E7DC',
          50: '#DEEFE7',
        },
      },
    },
  },
  plugins: [daisy],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'daisy-',
    darkTheme: 'dark',
  },
};
