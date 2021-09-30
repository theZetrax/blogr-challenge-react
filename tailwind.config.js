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
      'none': '0',
      'sm': '0.125rem',
      'DEFAULT': '0.25rem',
      'large': '70px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
