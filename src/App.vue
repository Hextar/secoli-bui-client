<script setup lang="ts">
import { useMeta } from '~/composables'

// META
useMeta({
  title: 'Secoli bui',
  description: 'scopri i prossimi eventi LARP italiani',
})
</script>

<template>
  <SplashScreen />
  <router-view class="h-100 w-100 flex flex-1 justify-center font-body" />
</template>
