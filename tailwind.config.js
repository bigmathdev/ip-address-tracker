/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        'very-dark-gray': '#2b2b2b',  
        'dark-gray': '#969696',
      },
    },
  },
  plugins: [],
}

