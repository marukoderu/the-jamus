/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        neue: ["Neue Alte Grotesk"],
      },
      colors: {
        primary: "#776B5D",
      }
    },
  },
  plugins: [],
}