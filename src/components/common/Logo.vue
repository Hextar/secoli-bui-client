<template>
  <img src="/images/secoli_bui_logo_dark.png" :width="width" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const SIZE: { [key: string]: number } = {
  small: 240,
  normal: 280,
  large: 480,
}

const props = defineProps({
  size: { type: String, default: 'normal' },
})

const width = computed((): number => SIZE[props.size])
</script>
