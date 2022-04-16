import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import { fileURLToPath, URL } from "url";
import svgLoader from 'vite-svg-loader'

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
    ViteComponents({
      globalComponentsDeclaration: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/mixins/index.scss";`
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
