/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// images
declare module '*&srcset' {
  const src: string
  export default src
}

declare module '*?preset=hd' {
  const src: import('vite-plugin-image-presets').ImageAttrs[]
  export default src
}

declare module '*?preset=full' {
  const src: import('vite-plugin-image-presets').ImageAttrs[]
  export default src
}

declare module '*?preset=thumbnail' {
  const src: import('vite-plugin-image-presets').ImageAttrs[]
  export default src
}

declare module 'sharp' {
  export interface Sharp {
    options: any
  }
}