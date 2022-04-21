<template>
  <div class="header">
    <div class="header__logo mb-6 flex flex-col items-center justify-center">
      <Logo />
    </div>
    <template class="header__content flex flex-wrap items-center justify-center gap-8">
      <div
        v-for="({ label, to, tooltip, disabled }, idx) in items"
        :key="`${label}-${idx}`"
        v-tooltip="tooltip"
      >
        <router-link
          class="header__content__item cursor-pointer font-display text-lg text-white-100"
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
import { ref } from 'vue'
import { TooltipOptions } from '@/types'

const items = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Eventi',
    to: '/events',
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    disabled: true,
  },
  {
    label: 'Ambientazione',
    to: '/world-system',
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    disabled: true,
  },
  {
    label: 'Gioca con noi',
    to: '/play-with-us',
    tooltip: { content: 'Coming soon', placement: 'bottom' },
    disabled: true,
  },
])
</script>

<style lang="scss" scoped>
.header {
  &__logo {
    z-index: 2;
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
