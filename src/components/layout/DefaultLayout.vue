<template>
  <div
    class="default-layout flex flex-1 flex-col bg-black-700"
    :class="{ 'h-100': fullHeight }"
    v-bind="$attrs"
  >
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Footer } from '@/components/layout'

// PROPS
const props = defineProps({
  fullHeight: { type: Boolean, default: false },
})
</script>
