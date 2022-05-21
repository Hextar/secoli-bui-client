<script setup lang="ts">
// PROPS
const props = defineProps({
  reverse: { default: false, type: Boolean },
  horizontal: { default: false, type: Boolean }
})

// COMPUTED
const flexDirection = computed(() => props.horizontal ? 'row' : 'col')
</script>

<template>
  <div class="paragraph inline-block flex-col" :class="{}" v-bind="$attrs">
    <slot name="title" />
    <div class="flex gap-8 items-center sm:items-start flex-col"
      :class="{ [`sm:flex-${flexDirection}`]: !props.reverse, [`sm:flex-${flexDirection}-reverse`]: props.reverse }">
      <slot />
    </div>
  </div>
</template>
Scarica immagine