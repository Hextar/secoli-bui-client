import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url"
import svgLoader from 'vite-svg-loader'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import viteCompression from 'vite-plugin-compression'
import ViteFonts from 'vite-plugin-fonts'
import imagePresets, { hdPreset, formatPreset, widthPreset, densityPreset } from 'vite-plugin-image-presets'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'
import ViteRadar from 'vite-plugin-radar'

import type { Image } from 'vite-plugin-image-presets'

const rectFor = (width: number, height: number = width) => new Buffer(
  `<svg><rect x="0" y="0" width="${width}" height="${height}" rx="${width / 4}" ry="${height / 4}"/></svg>`
)

const withRoundBorders = (image: Image) => {
  const { width, height } = image.options
  return image
    .resize({ width, height: width, fit: 'cover' })
    .composite([{ input: rectFor(width), blend: 'dest-in' }])
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@images": fileURLToPath(new URL('./public/images', import.meta.url)),
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
      template: {
        transformAssetUrls: {
          tags: { source: ['src', 'srcset'], img: ['src', 'srcset'] }
        },
        compilerOptions: {
          isCustomElement: tag => /^x-/.test(tag)
        }
      }
    }),
    chunkSplitPlugin(),
    imagePresets({
      hd: hdPreset({
        class: 'img hd',
        widths: [440, 700],
        sizes: '(min-width: 700px) 700px, 100vw',
        formats: {
          avif: { quality: 44 },
          webp: { quality: 44 },
          jpg: { quality: 50 },
        },
      }),
      full: formatPreset({
        class: 'img full-width',
        formats: {
          avif: { quality: 80 },
          webp: { quality: 80 },
          original: {},
        },
      }),
      thumbnail: densityPreset({
        baseHeight: 48,
        density: [1, 1.5, 2],
        formats: {
          png: { quality: 44 },
        },
      }),
      round: densityPreset({
        class: 'img density',
        height: 150, // avoid layout shift
        baseWidth: 150,
        density: [1, 1.5, 2],
        resizeOptions: {
          fit: 'cover',
        },
        withImage: withRoundBorders,
        formats: {
          webp: { quality: 40 },
          png: { quality: 40 },
        },
      }),
    },
    {
      // The node modules Netlify will cache are in the top dir.
      // cacheDir: resolve(__dirname, '../node_modules/.images'),
      cacheDir: fileURLToPath(new URL('../node_modules/.images', import.meta.url))
    }),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    svgLoader({ defaultImport: 'component' }),
    viteCompression({ algorithm: 'brotliCompress' }),
    ViteFonts({
      custom: {
        families: [
          {
            name: 'Alegreya',
            local: 'Alegreya',
            src: '~/src/assets/fonts/alegreya/**/*.ttf',
          },
          {
            name: 'Marcellus',
            local: 'Marcellus',
            src: '~/src/assets/fonts/marcellus/**/*.ttf',
          }
        ],
        display: 'swap',
        preload: true
      }
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.8, 0.9], speed: 4, strip: true },
      svgo: {
        plugins: [{ name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ]
      }
    }),
    VitePWA(),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-BSLHKEHKH0',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/mixins/index.scss";`,
        charset: false,
      }
    }
  },
})
