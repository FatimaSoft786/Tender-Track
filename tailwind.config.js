/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",     
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { md: {max: '1050px'}, sm: {max: '550px'}},
      colors: {
        primary: "#007BFF",
        gray: "#878787",
        gray1: "#EAEAEA"
      },
        fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}