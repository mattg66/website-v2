/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        'xs': '312px',
      },
      colors: {
        lockupBlue: '#002378',
        lightBlue: '#0025ab',
        darkBlue: '#00155f',
        otherBlue: '#003db6',
      }
    },
  },
  plugins: [],
}
