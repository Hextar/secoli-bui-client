import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  // shortcuts: [
  //   ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  //   ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  // ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        display: 'Alegreya',
        body: 'Marcellus',
      },
    }),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        100: '#ED6767',
        500: '#AF1D1D',
        700: '#630000',
      },
      secondary: {
        100: '#FFD459',
        500: '#FFCA34',
        700: '#E8AD07',
      },
      action: {
        100: '#57A7DB',
        500: '#3493CF',
        700: '#117EC4',
      },
      black: {
        100: '#626262',
        500: '#282828',
        700: '#0F0F0F',
      },
      white: {
        100: '#FFFFFF',
        500: '#F1F1F1',
        700: '#E6E6E6',
      },
      grey: {
        100: '#E1E1E1',
        500: '#D0D0D0',
        700: '#A5A4A4',
      },
      gray: {
        100: '#E1E1E1',
        500: '#D0D0D0',
        700: '#A5A4A4',
      },
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left w-full h-full'.split(' '),
})
