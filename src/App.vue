<template>
  <router-view class="h-100 w-100 bg-priamry-500 flex flex-1 justify-center" />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
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
