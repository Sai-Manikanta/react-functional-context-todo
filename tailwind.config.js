module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#432543',
          secondary: '#6E3C6E',
          tertiary: '#4C2A4D'
        }
      },
      fontFamily: {
        'main': ['Hind Siliguri'],
        'secondary': ['Dancing Script']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
