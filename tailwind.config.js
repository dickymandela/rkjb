/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      padding: '2rem',
    },
    fontFamily : {
     aa : ["Montserrat", "sans-serif"],
     bb : ["Roboto", "sans-serif"],
     pop : ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
