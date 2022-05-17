declare interface Window {
  // extend the window
}

// with vite-plugin-md, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
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

declare module '*?preset=logo' {
  const src: import('vite-plugin-image-presets').ImageAttrs[]
  export default src
}

declare module '*?preset=article' {
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