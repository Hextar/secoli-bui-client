<template>
  <router-link
    v-if="homepage"
    class="menu-event__back flex cursor-pointer items-center justify-start text-white-100"
    to="/"
    exact
    v-bind="$attrs"
  >
    <img src="/images/secoli_bui_logo_dark.png" :width="width" alt="Secoli Bui logo" />
  </router-link>
  <img v-else src="/images/secoli_bui_logo_dark.png" :width="width" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { sizeValidator } from '@/components/common'

// PROPS
const props = defineProps({
  size: { type: String, default: 'medium', validator: sizeValidator },
  homepage: { type: Boolean, default: false },
})

// VARIABLES
const SIZE: { [key: string]: number } = {
  small: 180,
  medium: 320,
  large: 460,
}

// COMPUTED
const width = computed((): number => SIZE[props.size])
</script>
