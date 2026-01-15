/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is the important one
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
      plugins: [],
    }
  },
}