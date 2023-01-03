/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        optima: ['OPTIMA', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
