/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors:{
        primary:" #00732F",
        secondary:" #EB7150",
        success:" #E7770D",
        habot:"#271555",
        box:"#072F57"

      }
    },
  },
  plugins: [],
}

