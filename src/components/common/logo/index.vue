<template>
  <router-link
    v-if="homepage"
    class="menu-event__back flex cursor-pointer items-center justify-start text-white-100"
    to="/"
    exact
    v-bind="$attrs"
  >
    <Image :src="secoliBuiLogo" :width="width" alt="Secoli Bui logo" title="Secoli Bui logo" />
  </router-link>
  <Image v-else :src="secoliBuiLogo" :width="width" alt="Secoli Bui logo" title="Secoli Bui logo" />
</template>

<script lang="ts">
export default {
  name: 'Logo',
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Image, sizeValidator } from '@/components/common'

import secoliBuiLogo from '@images/secoli_bui_logo_dark.png?preset=hd'

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
