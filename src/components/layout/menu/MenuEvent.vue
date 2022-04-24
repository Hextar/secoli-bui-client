<template>
  <div
    class="menu-event flex w-full items-center justify-between py-4 px-8"
    :class="{
      'menu-event--scrolled': hasScrolled,
      'bg-white-100': hasScrolled,
    }"
  >
    <div class="flex h-full items-center gap-4">
      <router-link
        class="menu-event__back flex items-center justify-start text-white-100"
        style="fill: red"
        :class="{
          'text-black-700': hasScrolled,
        }"
        to="/"
        exact
      >
        <IconArrow class="menu-event__back__arrow cursor-pointer fill-current" />
        <!-- <Logo size="small" /> -->
      </router-link>
      <h2
        class="font-display text-2xl text-white-100"
        :class="{
          'text-black-700': hasScrolled,
        }"
      >
        La Pesca dei Burattini
      </h2>
    </div>
    <template
      class="menu-event__content hidden flex-wrap items-center justify-center gap-8 sm:flex"
    >
      <div
        v-for="({ label, to, tooltip, disabled }, idx) in items"
        :key="`${label}-${idx}`"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu-event__content__item cursor-pointer font-display text-lg font-bold text-white-100"
          :class="{
            'text-black-700': hasScrolled,
          }"
          :to="to"
          :disabled="disabled"
          exact
        >
          {{ label }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { MenuItems } from '@/router/items'
import { IconArrow } from '@/assets/icons'
import { TooltipOptions } from '@/types'

// USE
const { state } = useStore()

// VARIABLES
const items = MenuItems

// COMPUTED
const isMobile = computed((): boolean => {
  return state.isMobile
})

const hasScrolled = computed((): boolean => {
  return state.hasScrolled
})

const tooltip = computed(
  (): TooltipOptions => ({
    content: 'Torna alla tenda master',
    placement: 'top',
    theme: 'secoli-bui',
  })
)
</script>

<style lang="scss" scoped>
.menu-event {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  &__back {
    &__arrow {
      transform: rotate(90deg);

      &:deep {
        path {
          // fill: theme('colors.black.700');
        }
      }
    }
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
        background-color: theme('colors.black.700');
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
