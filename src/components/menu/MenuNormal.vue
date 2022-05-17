<template>
  <div
    class="menu"
    :class="{
      'menu-event--scrolled': hasScrolledY(parsedScrollThreshold),
      'backdrop-blur': hasScrolledY(parsedScrollThreshold),
    }"
    v-bind="$attrs"
  >
    <div
      class="menu__logo animate__slide-from-above mb-6 flex flex-col items-center justify-center"
    >
      <Logo :size="isMobile ? 'small' : 'medium'" homepage />
    </div>
    <template
      class="menu__content hidden flex-wrap items-center justify-center gap-8 sm:flex"
    >
      <div
        v-for="({ label, to, tooltip, disabled }, idx) in items"
        :key="`${label}-${idx}`"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu__content__item cursor-pointer font-display text-lg font-bold text-white-100 grayscale"
          :class="{ 'menu__content__item--active': isActive(to) }"
          :disabled="disabled"
          :aria-label="label"
          :to="to"
          exact
        >
          {{ label }}
        </router-link>
      </div>
    </template>
  </div>
  <MenuMobile v-if="belowTablet" :items="items" />
</template>

<script setup lang="ts">
import { MenuItems } from '~/pages/items'
import { computed } from 'vue'

import { useMenuItem, useScroll, useViewport } from '~/composables'

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
const { isActive } = useMenuItem()
const { hasScrolledY } = useScroll()
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  overflow: auto;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: all 0.255s ease-in-out;
  @include firefox;

  &--scrolled {
    padding: 4px 0;
  }

  &__content {
    @include menuItem;
  }
}
</style>
