<template>
  <img :src="src" :height="height" :width="width" :alt="alt" v-bind="$attrs" />
</template>

<script setup lang="ts">
// PROPS
const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  height: { type: Number, default: undefined },
  width: { type: Number, default: undefined },
})
</script>
