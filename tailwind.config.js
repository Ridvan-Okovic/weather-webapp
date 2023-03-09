/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '520px',
      lg: '960px',
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
