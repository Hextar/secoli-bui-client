<template>
  <metainfo>
    <template #title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <router-view class="h-100 w-100 flex flex-1 justify-center font-body" />
</template>

<script setup lang="ts">
import { useMeta } from 'vue-meta'

// META
useMeta({
  title: '',
  description: 'Secoli bui - larp sardo',
  htmlAttrs: { lang: 'it', amp: true },
  canonical: 'https://www.grvsecolibui.it',
})
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
