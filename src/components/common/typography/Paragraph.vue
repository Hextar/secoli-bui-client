<script setup lang="ts">
// PROPS
const props = defineProps({
  reverse: { default: false, type: Boolean }
})
</script>

<template>
  <div class="paragraph inline-block flex-col" v-bind="$attrs">
    <slot name="title" />
    <div class="flex gap-8 flex-col items-center sm:items-start"
      :class="{ 'sm:flex-row': !props.reverse, 'sm:flex-row-reverse': props.reverse }">
      <slot />
    </div>
  </div>
</template>
Scarica immagine