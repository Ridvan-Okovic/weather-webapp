/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '400px',
      md: '960px',
      lg: '1440px',
    },
    fontFamily: {
      mono: ['Helvetica'],
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat'],
      segoe: ['Segoe UI'],
    },
    extend: {},
  },
  plugins: [],
};
