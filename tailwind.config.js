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

        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
      },
      fontFamily: {
        // ubuntu: ["Ubuntu", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: '576px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
