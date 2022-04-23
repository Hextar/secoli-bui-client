<template>
  <div class="menu-mobile__toggle flex flex-wrap items-center justify-start gap-8 sm:hidden">
    <InputHamburgher
      v-if="!open"
      class="menu-mobile__toggle__hamburgher animate__bloody-slash"
      :class="{ 'menu-mobile__toggle__hamburgher--not-loaded': !loaded }"
      @click="open = true"
    />
    <InputClose
      v-else
      class="menu-mobile__toggle__close animate__bloody-slash"
      @click="open = false"
    />
  </div>
  <div
    v-if="open"
    class="menu-mobile__overlay flex flex-col items-center justify-start gap-12 pt-48"
  >
    <div
      v-for="({ label, to, tooltip, disabled }, idx) in items"
      :key="`${label}-${idx}`"
      class="menu-mobile__overlay__item animate__slide-from-above cursor-pointer font-display text-lg font-bold text-white-100"
      v-tooltip="tooltip"
    >
      <router-link :to="to" :disabled="disabled" exact @click="open = !open">
        {{ label }}
      </router-link>
    </div>
  </div>
  ransform-origin: center left; a
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

import { MenuItems } from '@/router/items'
import { InputHamburgher } from '@/assets/icons'
import { InputClose } from '@/assets/icons'

const items = MenuItems
const open = ref(false)
const loaded = ref(false)

watch(open, (val) => {
  document.documentElement.style.overflow = val ? 'hidden' : 'auto'
})

onMounted(() => (loaded.value = true))
</script>

<style lang="scss" scoped>
$hamburgherSize: 48px;
$overlayIndex: 99;

.menu-mobile {
  &__toggle {
    position: fixed;
    top: calc(#{$hamburgherSize} / 2);
    left: calc(#{$hamburgherSize} / 2);
    z-index: $overlayIndex + 1;
    height: $hamburgherSize;
    width: $hamburgherSize;

    &__hamburgher,
    &__close {
      &:hover,
      &:focus {
        fill: theme('colors.primary.500');
      }
    }

    &__hamburgher {
      &--not-loaded {
        // on page load, avoid happening at the
        // same time as the animated logo
        animation-delay: 0.51s;
      }
    }
  }

  &__overlay {
    position: fixed;
    @include fullsize;
    background-color: theme('colors.black.700');
    opacity: 0.95;
    overflow-y: scroll;
    z-index: $overlayIndex;
  }
}
</style>
