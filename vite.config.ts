import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";
import svgLoader from 'vite-svg-loader'
import viteCompression from 'vite-plugin-compression';
import ViteFonts from 'vite-plugin-fonts'
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
    svgLoader({
      defaultImport: 'component',
      svgoConfig: { multipass: true }
    }),
    viteCompression({ algorithm: 'brotliCompress' }),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-BSLHKEHKH0',
      },
    }),
    ViteFonts({
      google: {
        preconnect: true,
        display: 'swap',
        families: [
          {
            name: 'Alegreya',
            styles: 'wght@400;500;700',
            defer: true
          },
          {
            name: 'Marcellus',
            styles: 'wght@400;500;700',
            defer: true
          }
        ]
      }
    })
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
