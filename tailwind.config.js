/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#050A12', // Dark Background
          800: '#07111F', // Deep Navy
        },
        silver: {
          400: '#9CA7B5', // Muted Text
          200: '#D7DCE2', // Silver
        },
        gold: '#D9B86C',  // Light Gold
        paper: '#F7F8FA', // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
