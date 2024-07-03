const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'gorse': {
        '50': '#fefee8',
        '100': '#fdfdc4',
        '200': '#fdf88b',
        '300': '#fbeb3c',
        '400': '#f8dc17',
        '500': '#e8c30a',
        '600': '#c89806',
        '700': '#a06d08',
        '800': '#84560f',
        '900': '#704613',
        '950': '#412407',
      },
      transparent: 'transparent',
              current: 'currentColor',
                black: colors.black,
                white: colors.white,
                emerald: colors.emerald,
                indigo: colors.indigo,
                yellow: colors.yellow,
                stone: colors.warmGray,
                sky: colors.lightBlue,
                neutral: colors.trueGray,
                gray: colors.coolGray,
                slate: colors.blueGray,
                lime: colors.lime,
                rose: colors.rose,
    },
  },
  plugins: [],
}
