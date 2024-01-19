/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {},
  },
  plugins: [
      function ({ addUtilities }) {
      const newUtilities = {
        '.list-small': {
          '--tw-marker-size': '0.5em',
        },
        '.list-large': {
          '--tw-marker-size': '1em',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

