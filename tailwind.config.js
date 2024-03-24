/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      indie:['Indie Flower', "cursive"],
      silk:["Silkscreen", "cursive"],
      playfair:['Playfair Display', 'serif'],
      poppins:["Poppins", "sans-serif"],
      barlow:["Barlow Semi Condensed", "sans-serif"],
      raleway:["Raleway", "sans-serif"],
      peralta:["Peralta","serif"]

    },
  },
  plugins: [],
}