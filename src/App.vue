<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { isDark } from '~/composables'

useHead({
  title: 'Secoli bui',
  meta: [
    { name: 'description', content: 'Scopri i prossimi eventi LARP italiani' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'ico',
      href: computed(() => '/favicon.ico'),
    },
  ],
})
</script>

<template>
  <SplashScreen />
  <router-view class="h-100 w-100 flex flex-1 justify-center font-body" />
</template>
