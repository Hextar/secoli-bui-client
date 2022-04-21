<template>
  <div class="menu">
    <div class="menu__logo mb-6 flex flex-col items-center justify-center">
      <Logo />
    </div>
    <template class="menu__content flex flex-wrap items-center justify-center gap-8">
      <div
        v-for="({ label, to, tooltip, disabled }, idx) in items"
        :key="`${label}-${idx}`"
        v-tooltip="tooltip"
      >
        <router-link
          class="menu__content__item cursor-pointer font-display text-lg font-bold text-white-100"
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
import { MenuItems } from './items'

const items = MenuItems
</script>

<style lang="scss" scoped>
.menu {
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
