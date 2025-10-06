/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raana-black': '#000000',
        'raana-gold': '#D4AF37',
        'raana-red': '#C41E3A',
        'raana-green': '#006400',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Arial', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}