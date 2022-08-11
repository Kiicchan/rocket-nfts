/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url(/assets/images/background.png)"
      }
    },
    colors: {
      'background': '#0e0e0e',
      'logo': '#ff5b50',
      'card': '#252525',
      'white': '#fff',
      'subtitle': '#5a5757',
      'black': '#000',
      'input': '#0D0D0D',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}
