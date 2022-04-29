<template>
  <router-view class="h-100 w-100 bg-priamry-500 flex flex-1 justify-center" />
</template>

<script setup lang="ts"></script>

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
