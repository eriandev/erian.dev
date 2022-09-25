/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js}"],
  darkMode: 'media',
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    },

    colors: {
      primary: '#02ABB2',
      secondary: '#2D7C83',
      'very-light-green': '#F4FBFB',

      white: '#FFF',
      black: '#2A2A2A',
      transparent: 'transparent'
    },

    extend: {
      fontSize: {
        heading1: ['clamp(2.25rem, 5vw, 4rem)', '1.2'],
        heading2: ['clamp(0.875rem, 2vw, 1.5rem)', '1.2']
      },

      borderRadius: {
        '2.5xl': '1.25rem'
      }
    }
  },
  plugins: [],
};
