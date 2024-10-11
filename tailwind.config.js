/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FB5200',
        secondary: '#2C2B2A',

        body: '#EAEAEA',
        lemon_chiffon: '#FEF3C7',
      },
      fontFamily: {
        // ubuntu: ["Ubuntu", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
