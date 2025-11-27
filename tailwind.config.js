/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        cream: '#FFF8F0',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E6C567',
          dark: '#B8860B',
        },
        green: {
          DEFAULT: '#228B22',
          light: '#32CD32',
          dark: '#006400',
        },
        peach: {
          DEFAULT: '#FFDAB9',
          light: '#FFE5B4',
          dark: '#E9967A',
        },
      },
    },
  },
  plugins: [],
}