<template>
  <router-view class="h-100 w-100 flex flex-1 justify-center font-body" />
</template>

<script setup lang="ts"></script>

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
