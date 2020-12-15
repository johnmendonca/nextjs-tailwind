const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '4px',
        md: '8px',
      },
    },
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    padding: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
