<template>
  <div class="default-layout flex flex-1 flex-col bg-black-700">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.default-layout {
  position: relative;
  @include scrollbar;
}
</style>
