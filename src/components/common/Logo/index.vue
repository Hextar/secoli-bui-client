<template>
  <img src="/images/secoli_bui_logo_dark.png" :width="width" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { sizeValidator } from './'

const SIZE: { [key: string]: number } = {
  small: 240,
  medium: 320,
  large: 480,
}

const props = defineProps({
  size: { type: String, default: 'medium', validator: sizeValidator },
})

const width = computed((): number => SIZE[props.size])
</script>
