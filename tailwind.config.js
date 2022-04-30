const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Alegreya', ...defaultTheme.fontFamily.sans],
        'body': ['Marcellus', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'primary': {
          '100': '#ED6767',
          '500': '#AF1D1D',
          '700': '#630000'
        },
        'secondary': {
          '100': '#FFD459',
          '500': '#FFCA34',
          '700': '#E8AD07'
        },
        'action': {
          '100': '#57A7DB',
          '500': '#3493CF',
          '700': '#117EC4'
        },
        'black': {
          '100': '#626262',
          '500': '#282828',
          '700': '#0F0F0F'
        },
        'white': {
          '100': '#FFFFFF',
          '500': '#F1F1F1',
          '700': '#E6E6E6'
        },
        'grey': {
          '100': '#E1E1E1',
          '500': '#D0D0D0',
          '700': '#A5A4A4'
        },
        'gray': {
          '100': '#E1E1E1',
          '500': '#D0D0D0',
          '700': '#A5A4A4'
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
