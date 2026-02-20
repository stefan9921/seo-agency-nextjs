/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF9F4',
        teal: {
          DEFAULT: '#295C51',
          dark: '#232527',
        },
        gold: {
          DEFAULT: '#E9BB71',
          bright: '#EAB211',
        },
        body: {
          DEFAULT: 'rgba(36, 38, 40, 0.75)',
          dark: '#232527',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
