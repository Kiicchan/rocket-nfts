/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url(/assets/images/background.png)"
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
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
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '2rem',
      },
      screens: {
        '2xl': '1535px',
        'xl': '1279px',
        'lg': '1023px',
        'md': '767px',
        'sm': '639px',
      },
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
