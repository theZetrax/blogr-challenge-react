module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blg-red-light': '#ff8f70', // Red
        'blg-red': 'hsl(353, 100%, 62%)',
        'blg-dark-gray': 'hsl(237, 17%, 21%)', // Blue
        'blg-dark-gray-light': 'hsl(237, 23%, 32%)',
        'white': 'hsl(0, 0%, 100%)', // Regular
        'blg-gray-blue': 'hsl(240, 2%, 79%)',
        'blg-gray-blue-dark': 'hsl(207, 13%, 34%)',
        'blg-black-blue': 'hsl(240, 10%, 16%)',
      },
    },
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
