<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue'

// VARIABLES
const visible: Ref<Boolean> = ref(true)
const hide: Ref<Boolean> = ref(false)

// METHODS
onMounted(() => {
  setTimeout(() => (hide.value = true), 255)
  setTimeout(() => (visible.value = false), 510)
})
</script>

<template>
  <div
    v-if="visible"
    class="splash-screen firefor-bg flex items-center justify-center backdrop-blur"
    :class="{ 'splash-screen--hide': hide }"
  >
    <span class="font-display text-2xl text-white-100"> CASTANDO... </span>
  </div>
</template>

<style lang="scss" scoped>
.splash-screen {
  position: absolute;
  @include fullsize;
  z-index: 999;
  opacity: 1;
  transition: opacity 0.255s ease-in-out;

  &--hide {
    opacity: 0;
  }
}
</style>
