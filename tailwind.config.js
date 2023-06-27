/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
      lowBlack: '#313131'
  },
  fontFamily: {
    poppins: [ 'Poppins', "sans-serif"]
  }},
  },
  plugins: [],
}

