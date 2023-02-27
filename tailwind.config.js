/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors:{
        'main':'rgb(190 166 130)',
        'secondary':'rgb(100 75 43)',
        'header':'rgb(40, 28, 16)',
        'button':'rgb(100, 75, 43)',
      }
    },
  },
  plugins: [],
}
