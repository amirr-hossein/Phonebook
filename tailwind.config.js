/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        med:["iranSansMed"],
        bol:["iranSansBold"],
        reg:["iranSansReg"],
      }
    },
  },
  plugins: [],
}