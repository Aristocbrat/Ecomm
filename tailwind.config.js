/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        "sm" : "350px",
        "md" :"568px",
        "lg" : "8024px",
        "xl" : "1080px",
        "2xl" :"1536px",
      }
    },
  },
  plugins: [require('daisyui'),],
}

