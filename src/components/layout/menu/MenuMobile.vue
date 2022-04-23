<template>
  <div
    class="menu-mobile__toggle flex cursor-pointer select-none flex-wrap items-center justify-start gap-8 sm:hidden"
  >
    <InputHamburgher
      class="menu-mobile__toggle__hamburgher select-none"
      :class="{
        'animate__bloody-slash': loaded,
        'menu-mobile__toggle__hamburgher--close': open,
      }"
      @click="open = !open"
    />
  </div>
  <div
    v-if="open"
    class="menu-mobile__overlay flex flex-col items-center justify-start gap-12 pt-48"
  >
    <div
      v-for="({ label, to, tooltip, disabled }, idx) in items"
      :key="`${label}-${idx}`"
      class="menu-mobile__overlay__item animate__gentle-slide-from-above cursor-pointer font-display text-lg font-bold text-white-100"
      v-tooltip="tooltip"
    >
      <router-link :to="to" :disabled="disabled" exact @click="open = !open">
        {{ label }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

import { MenuItems } from '@/router/items'
import { InputHamburgher } from '@/assets/icons'

// VARIABLES
const items = MenuItems
const open = ref(false)
const loaded = ref(false)

// WATCH
watch(open, (val) => {
  document.documentElement.style.overflow = val ? 'hidden' : 'auto'
})

// MOUTNED
onMounted(() => setTimeout(() => (loaded.value = true), 510))
</script>

<style lang="scss" scoped>
$hamburgherSize: 48px;
$overlayIndex: 99;

.menu-mobile {
  &__toggle {
    position: fixed;
    top: calc(#{$hamburgherSize} / 3);
    left: calc(#{$hamburgherSize} / 3);
    z-index: $overlayIndex + 1;
    height: $hamburgherSize;
    width: $hamburgherSize;

    &__hamburgher,
    &__close {
      &:hover,
      &:focus {
        fill: theme('colors.primary.500');
        outline: none;
      }

      &::v-deep {
        .claw-mark {
          transition: all 0.255s ease-in-out;
        }
      }
    }

    &__hamburgher {
      // transform the claw mark signs
      // into an x
      &--close {
        &::v-deep {
          .claw-mark {
            &.first {
              transform: translateX(16px) rotate(40deg);
            }

            &.second {
              opacity: 0;
            }

            &.third {
              transform: translateY(28px) translateX(-42px) rotate(-40deg);
            }
          }
        }
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
