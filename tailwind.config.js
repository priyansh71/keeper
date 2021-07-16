module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'xsm' : {'min' : '280px' , 'max': ' 639px' },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
