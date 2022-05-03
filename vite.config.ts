import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";
import svgLoader from 'vite-svg-loader'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteCompression from 'vite-plugin-compression';
import ViteFonts from 'vite-plugin-fonts'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePWA } from 'vite-plugin-pwa'
import ViteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => /^x-/.test(tag)
        }
      }
    }),
    chunkSplitPlugin(),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    svgLoader({ defaultImport: 'component' }),
    viteCompression({ algorithm: 'brotliCompress' }),
    ViteFonts({
      custom: {
        families: [
          {
            name: 'Alegreya',
            local: 'Alegreya',
            src: './src/assets/fonts/alegreya/**/*.ttf',
          },
          {
            name: 'Marcellus',
            local: 'Marcellus',
            src: './src/assets/fonts/marcellus/**/*.ttf',
          }
        ],
        display: 'auto',
        preload: true
      }
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
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
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
