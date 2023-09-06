/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        darkBlue:'#3f4650',
        darkGray:'#87959e',
        lighGray:'#bcc1c5',
        paleSilver:'#d1c4bb',
        timberWolf:'#ddd6cf',
        brightGray:'#eaebe7'
      }
    },
  },
  plugins: [],
}

