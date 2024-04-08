/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bege: {
          100: '#FFEBB2',
          200: '#FFCAD4',
          300: '#bf8f98',
          400: '#78535a'
        },
        'rosa': '#E59BE9',
        roxo: {
          100: '#6420AA',
          200: '#401F71',
        }
      }
    },
  },
  plugins: [],
}