<template>
  <div
    class="menu"
    :class="{
      'menu-event--scrolled': hasScrolledY(parsedScrollThreshold),
      'backdrop-blur': hasScrolledY(parsedScrollThreshold),
    }"
  >
    <div
      class="menu__logo animate__slide-from-above mb-6 flex flex-col items-center justify-center"
    >
      <Logo :size="isMobile ? 'small' : 'medium'" homepage />
    </div>
    <template class="menu__content hidden flex-wrap items-center justify-center gap-8 sm:flex">
      <div
        v-for="({ label, to, tooltip, disabled }, idx) in items"
        :key="`${label}-${idx}`"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu__content__item cursor-pointer font-display text-lg font-bold text-white-100 grayscale"
          :to="to"
          :disabled="disabled"
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
import { computed, defineProps } from 'vue'
import { useScroll, useViewport } from '@/hooks'
import { MenuItems } from '@/router/items'

import { Logo } from '@/components/common'
import { MenuMobile } from '@/components/layout/menu'

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

<style lang="scss" scoped>
.menu {
  position: relative;
  overflow: auto;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: all 0.255s ease-in-out;

  &--scrolled {
    padding: 4px 0;
  }

  &__content {
    &__item {
      position: relative;
      z-index: 1;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        height: 1px;
        width: 0px;
        background-color: theme('colors.white.100');
        transition: width 0.255s ease-in-out;
        z-index: 2;
      }

      &.router-link-exact-active:after,
      &:hover:after {
        width: 100%;
      }

      &[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
}
</style>
