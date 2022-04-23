<template>
  <router-view class="h-100 w-100 bg-priamry-500 flex flex-1 justify-center" />
</template>

<script setup lang="ts">
import { onMounted, reactive, onUnmounted } from 'vue'
import { useStore } from 'vuex'

const { commit } = useStore()

const onResize = (): void => {
  const isMobile = (window?.innerWidth || 0) <= 760
  commit('setIsMobile', isMobile)
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
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
