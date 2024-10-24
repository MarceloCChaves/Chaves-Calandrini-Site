/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-light': '#e4d496',
      'primary-dark': '#451a03',
      'white': '#ffffff'
    },
  },
  plugins: [],
}