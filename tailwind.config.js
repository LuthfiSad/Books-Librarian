/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ["Shrikhand", "serif"],
      },
      colors: {
        'default': '#37B2F8',
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
}

