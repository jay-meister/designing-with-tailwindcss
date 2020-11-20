module.exports = {
  theme: {
    extend: {
      // override blue-100 and add green-success
      colors: { 'blue-100': '#1992d4', 'green-success': '#48bb71', 'indigo-hover': '#48bb71' },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
    },
  },
  variants: {
    // add 'active' attribute for background-color classes
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}