<template>
  <div class="menu">
    <div
      class="menu__logo animate__slide-from-above mb-6 flex flex-col items-center justify-center"
    >
      <Logo :size="isMobile ? 'small' : 'medium'" />
    </div>
    <template class="menu__content hidden flex-wrap items-center justify-center gap-8 sm:flex">
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
import { computed, onMounted, reactive, onUnmounted } from 'vue'
import { MenuItems } from '@/router/items'

const items = MenuItems
const state = reactive({
  windowWidth: 0,
})
const isMobile = computed((): boolean => {
  return state.windowWidth <= 760
})

const onResize = (): number => (state.windowWidth = window?.innerWidth || 0)

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style lang="scss" scoped>
.menu {
  z-index: 10;

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
