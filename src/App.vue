<template>
  <router-view class="h-100 w-100 bg-priamry-500 flex flex-1 justify-center" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

const { commit } = useStore()

const onResize = (): void => {
  const isMobile = (window?.innerWidth || 0) <= 760
  commit('setIsMobile', isMobile)
}

const onScroll = (): void => {
  const hasScrolled = (window?.scrollY || 0) > 100
  commit('setHasScrolled', hasScrolled)
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss">
body {
  background-color: theme('colors.primary.500');
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include scrollbar;
}
</style>
