<template>
  <div
    class="menu-event animate_bg-fade flex w-full items-center justify-between py-4 px-8"
    :class="{
      'menu-event--scrolled': hasScrolledY,
    }"
  >
    <div class="flex h-full items-center gap-4">
      <router-link
        class="menu-event__back flex items-center justify-start text-white-100"
        style="fill: red"
        :class="{
          'text-black-700': hasScrolledY,
        }"
        to="/"
        exact
      >
        <IconArrow
          v-if="hasScrolledY"
          class="menu-event__back__arrow cursor-pointer fill-current"
        />
        <Logo v-else size="small" />
      </router-link>
      <h2
        v-if="hasScrolledY"
        class="font-display text-2xl text-white-100"
        :class="{
          'text-black-700': hasScrolledY,
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
            'text-black-700': hasScrolledY,
          }"
          :to="to"
          :disabled="disabled"
        >
          {{ label }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useViewport, useScroll } from '@/hooks'
import { MenuItemType } from '@/types'
import { IconArrow } from '@/assets/icons'
import { TooltipOptions } from '@/types'

// VARIABLES
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: '#header',
    tooltip: { content: 'Informazioni', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Fazioni',
    to: '#header',
    tooltip: { content: 'Informazioni', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Programma',
    to: '#header',
    tooltip: { content: 'Informazioni', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Consigli',
    to: '#header',
    tooltip: { content: 'Informazioni', placement: 'bottom' },
    homepage: true,
  },
  {
    label: 'Sicurezza',
    to: '#header',
    tooltip: { content: 'Informazioni', placement: 'bottom' },
    homepage: true,
  },
]

// COMPUTED
const { isMobile } = useViewport()
const { hasScrolledY, scrollY } = useScroll()

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
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.255s ease-in-out;

  &--scrolled {
    background-color: rgba(255, 255, 255, 0.95);
  }

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
