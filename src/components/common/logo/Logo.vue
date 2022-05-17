<script setup lang="ts">
import { computed } from 'vue'

import { secoliBuiLogo } from '~/assets/images'

import { sizeValidator } from '~/components/common'

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

<template>
  <router-link
    v-if="props.homepage"
    class="menu-event__back flex cursor-pointer items-center justify-start text-white-100"
    to="/"
    aria-label="secolid bui logo"
    exact
    v-bind="$attrs"
  >
    <Image
      :src="secoliBuiLogo"
      :width="width"
      alt="Secoli Bui logo"
      title="Secoli Bui logo"
      above-the-fold
    />
  </router-link>
  <Image
    v-else
    :src="secoliBuiLogo"
    :width="width"
    alt="Secoli Bui logo"
    title="Secoli Bui logo"
    above-the-fold
  />
</template>