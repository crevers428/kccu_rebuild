/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
