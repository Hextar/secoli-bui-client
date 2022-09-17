<script setup lang="ts">
import { useForceOpenInBrowser, useMeta } from '~/composables'

// USE
useMeta({
  title: 'Secoli bui',
  description: 'scopri i prossimi eventi LARP italiani',
})

useForceOpenInBrowser()
</script>

<template>
  <SplashScreen />
  <router-view class="h-100 w-100 flex flex-1 justify-center font-body" />
</template>
