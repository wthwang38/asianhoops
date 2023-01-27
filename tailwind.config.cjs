/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      backgroundColor: 'red',
    },
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem'
    },
  },
  plugins: [],
}
