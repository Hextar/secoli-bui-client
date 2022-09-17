<script setup lang="ts">
import { MenuItems } from '~/pages/items'
import { computed } from 'vue'

import { useScroll, useViewport } from '~/composables'

// PROPS
const props = defineProps({
  scrollThreshold: { type: Number, default: 200 },
})

// VARIABLES
const items = MenuItems

// COMPUTED
const { belowTablet, isMobile } = useViewport()
const parsedScrollThreshold = computed(() => props.scrollThreshold - 54)

// METHODS
const { hasScrolledY } = useScroll()
</script>

<template>
  <section class="menu" :class="{
    'menu-event--scrolled': hasScrolledY(parsedScrollThreshold),
    'backdrop-blur': hasScrolledY(parsedScrollThreshold),
  }" v-bind="$attrs">
    <div class="menu__logo animate__slide-from-above mb-6 flex flex-col items-center justify-center">
      <Logo :size="isMobile ? 'small' : 'medium'" homepage />
    </div>
    <template class="menu__content hidden flex-wrap items-center justify-center gap-8 sm:flex">
      <div v-for="(item, idx) in items" :key="`${item.label}-${idx}`">
        <MenuNormalItem :item="item" />
      </div>
    </template>
  </section>
  <MenuMobile v-if="belowTablet" :items="items" />
</template>

<style lang="scss" scoped>
.menu {
  position: relative;
  // overflow: auto;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: all 0.255s ease-in-out;
  @include firefox;

  &--scrolled {
    padding: 4px 0;
  }

  &__logo {
    overflow: hidden;
  }
}
</style>
