module.exports = {
  purge: [
      './storage/framework/views/*.php',
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              'ct-black': '#111312',
              'ct-white': '#FFFFFF',
              'ct-orange': '#CE9354'
          }
      },
      fontFamily: {
          'serif': ['"Bebas Neue"', 'cursive'],
          'sans': ['"Roboto Slab"', 'sans-serif'],
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}