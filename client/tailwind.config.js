module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Raleway', 'sans-serif'],
      general: ['Open Sans', 'sans-serif'],
    },
    backgroundColor: () => ({
      'main-bg': 'hsl(218, 28%, 13%)',
      'footer-bg': 'hsl(216, 53%, 9%)',
      'form-bg': 'hsl(217, 28%, 15%)',
      'primary-btn-bg': 'hsl(176, 68%, 64%)',
      'secondary-btn-bg': 'hsl(198, 60%, 50%)',
      'error-color': 'hsl(0, 100%, 63%)',
      'warning-color': '#EED202',
      'primary-bg': '#fff',
    }),
    textColor: {
      'link-hover': 'hsl(198, 60%, 50%)',
      'primary': '#fff',
      'secondary': 'hsl(216, 53%, 9%)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
