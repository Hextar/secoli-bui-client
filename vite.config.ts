import path from 'path'
import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
import svgLoader from 'vite-svg-loader'
import imagePresets, { densityPreset, formatPreset, hdPreset } from 'vite-plugin-image-presets'
import viteImagemin from 'vite-plugin-imagemin'
import ViteRadar from 'vite-plugin-radar'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
      template: {
        transformAssetUrls: {
          tags: {
            source: ['src', 'srcset'],
            img: ['src', 'srcset'],
          }
        }
      }
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
      extendRoute: (route) => {
        if (route.path === '/events' || route.path === '/events/future') {
          return { ...route, redirect: '/events/future/il-circolo-di-conoscenza' }
        }
        else if (route.path === '/play-with-us') {
          return { ...route, redirect: '/play-with-us/what-is-larp' }
        }
        else if (route.path === '/qrcode') {
          return { ...route, redirect: '/events/future' }
        }
        return route
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-md
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/ElMassimo/vite-plugin-image-presets
    imagePresets({
      hd: hdPreset({
        class: 'img hd',
        widths: [440, 700],
        sizes: '(min-width: 700px) 700px, 100vw',
        formats: {
          avif: { quality: 77 },
          webp: { quality: 77 },
          jpg: { quality: 50 },
          png: { quality: 44 },
        },
      }),
      full: formatPreset({
        class: 'img full',
        loading: 'lazy',
        formats: {
          avif: { quality: 77 },
          webp: { quality: 77 },
          original: {},
        },
      }),
      logo: densityPreset({
        class: 'img logo',
        baseHeight: 96,
        density: [1, 1.5, 2],
        loading: 'lazy',
        formats: {
          png: { quality: 33 },
        },
      }),
      article: densityPreset({
        class: 'img article',
        baseHeight: 200,
        density: [1, 1.5, 2],
        loading: 'lazy',
        formats: {
          png: { quality: 44 },
        },
      }),
      thumbnail: densityPreset({
        baseHeight: 48,
        density: [1, 1.5, 2],
        formats: {
          png: { quality: 44 },
        },
      }),
    },
      {
        // The node modules Netlify will cache are in the top dir.
        cacheDir: fileURLToPath(new URL('../node_modules/.images', import.meta.url)),
      }),

    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader({ defaultImport: 'component' }),

    // https://github.com/vbenjs/vite-plugin-imagemin
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.8, 0.9], speed: 4, strip: true },
      svgo: {
        plugins: [{ name: 'removeViewBox' },
        { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),

    // https://github.com/stafyniaksacha/vite-plugin-radar
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-BSLHKEHKH0',
      },
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    format: 'cjs',
    mock: true,
    onFinished() { generateSitemap() },
  },

  optimizeDeps: { exclude: ['prettier'] },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/mixins/index.scss";',
        charset: false,
      },
    },
  },

  server: {
    hmr: {
      overlay: false
    }
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
})
