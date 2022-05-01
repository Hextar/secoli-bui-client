<template>
  <metainfo>
    <template #title="{ content }">{{ content ? `${content} | ${siteName}` : siteName }}</template>
  </metainfo>
  <router-view class="h-100 w-100 flex flex-1 justify-center font-body" />
</template>

<script setup lang="ts">
import { useMeta } from 'vue-meta'

// META
const title = 'Secoli bui'
const description = 'scopri i prossimi eventi LARP italiani'
const url = 'https://www.grvsecolibui.it'
const image = `${url}/images/social.jpg`
useMeta({
  title: '',
  description,
  htmlAttrs: { lang: 'it', amp: true },
  meta: [
    // OpenGraph data (Most widely used)
    { property: 'og:title', content: title },
    { property: 'og:site_name', content: title },
    // The list of types is available here: http://ogp.me/#types
    { property: 'og:type', content: 'website' },
    // Should the the same as your canonical link, see below.
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    // Often the same as your meta description, but not always.
    { property: 'og:description', content: description },

    // Twitter card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: url },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    // {name: 'twitter:creator', content: '@alligatorio'},
    { name: 'twitter:image:src', content: image },

    // Google / Schema.org markup:
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: image },
  ],
  link: [{ rel: 'canonical', href: url }],
})

// VARIABLES
const siteName = 'Secoli bui'
</script>

<style lang="scss">
body {
  background-color: theme('colors.primary.500');
  @include scrollbar;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
