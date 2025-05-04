/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom:"#E83F25"
      }
    },
  },
  plugins:[
    require('tailwind-scrollbar-hide'),
  ],
}