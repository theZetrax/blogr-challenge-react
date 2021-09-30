module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // Adding Font Face
    fontFamily: {
      Overpass: ['Overpass', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif']
    },
    // Border Radius
    borderRadius: {
      'large': '70px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
