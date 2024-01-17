/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/templates.mjs'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

