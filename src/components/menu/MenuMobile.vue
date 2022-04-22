<template>
  <div
    class="menu-mobile__hamburgher visible flex flex-wrap items-center justify-start gap-8 sm:invisible"
  >
    <InputHamburgher @click="open = !open" />
  </div>
  <div
    v-if="open"
    class="menu-mobile__overlay flex flex-col items-center justify-start gap-12 pt-48"
  >
    <div
      v-for="({ label, to, tooltip, disabled }, idx) in items"
      :key="`${label}-${idx}`"
      v-tooltip="tooltip"
    >
      <router-link
        class="menu-mobile__overlay__item cursor-pointer font-display text-lg font-bold text-white-100"
        :to="to"
        :disabled="disabled"
        exact
        @click="open = !open"
      >
        {{ label }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { MenuItems } from '@/router/items'
import { InputHamburgher } from '@/assets/icons'

const items = MenuItems

let open = ref(false)

watch(open, (val) => {
  document.documentElement.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<style lang="scss" scoped>
.menu-mobile {
  &__hamburgher {
    position: fixed;
    top: 0;
    left: -8px;
    transform: scale(0.5);
    z-index: 98;
  }

  &__overlay {
    position: fixed;
    @include fullsize;
    background-color: theme('colors.black.700');
    opacity: 0.95;
    overflow-y: scroll;
    z-index: 99;
  }
}
</style>
