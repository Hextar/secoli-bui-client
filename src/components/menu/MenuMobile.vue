<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, onMounted, ref, watch } from 'vue'

import { InputHamburgher, InputHamburgherSymmetric } from '~/assets/icons'

import { useMenuItem } from '~/composables'

import type { MenuItemType } from '~/types'

// PROPS
const props = defineProps({
  items: { required: true, type: Array as PropType<MenuItemType[]> },
  scrolled: { default: false, type: Boolean },
  matchHash: { default: false, type: Boolean },
})

// VARIABLES
const open = ref(false)
const loaded = ref(false)

// WATCH
watch(open, (val) => {
  document.documentElement.style.overflow = val ? 'hidden' : 'auto'
})

// COMPUTED
const randSlash = computed((): number => {
  return Math.floor(Math.random() * 3) + 1
})

// METHODS
const { isActive } = useMenuItem()

// ON MOUNTED
onMounted(() => setTimeout(() => (loaded.value = true), 510))
</script>

<template>
  <div
    class="menu-mobile flex cursor-pointer select-none flex-wrap items-center justify-start gap-8"
    :class="{
      'menu-mobile--scrolled': props.scrolled,
    }"
    v-bind="$attrs"
  >
    <InputHamburgherSymmetric
      v-if="randSlash === 1"
      class="menu-mobile__toggle__hamburgher hamburgher--symmetric select-none"
      :class="{
        'animate__bloody-slash': loaded,
        'menu-mobile__toggle__hamburgher--close': open,
        'menu-mobile__toggle__hamburgher--scrolled': props.scrolled,
      }"
      @click="open = !open"
    />
    <InputHamburgher
      v-else
      class="menu-mobile__toggle__hamburgher hamburgher--normal select-none"
      :class="{
        'hamburgher--reversed': randSlash === 3,
        'animate__bloody-slash': loaded,
        'menu-mobile__toggle__hamburgher--close': open,
        'menu-mobile__toggle__hamburgher--scrolled': props.scrolled,
      }"
      @click="open = !open"
    />
  </div>
  <div
    v-if="open"
    class="menu-mobile__overlay flex flex-col items-center justify-center gap-12"
  >
    <div
      v-for="({ label, to, tooltip, disabled }, idx) in props.items"
      :key="`${label}-${idx}`"
      class="menu-mobile__overlay__item animate__gentle-slide-from-above cursor-pointer font-display text-lg font-bold text-white-100"
    >
      <router-link
        class="menu-mobile__overlay__item"
        :class="{
          'menu-mobile__overlay__item--active': isActive(to, props.matchHash),
        }"
        :disabled="disabled"
        :aria-label="label"
        :to="to"
        exact
        @click="open = !open"
      >
        {{ label }}
      </router-link>
    </div>
    <div
      class="mobile__overlay__item mobile__overlay__action animate__gentle-slide-from-above cursor-pointer"
    >
      <slot name="action" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$hamburgherSize: 48px;
$overlayIndex: 99;

.menu-mobile {
  position: fixed;
  top: calc(#{$hamburgherSize} / 3);
  left: calc(#{$hamburgherSize} / 3);
  z-index: 9999;

  &__toggle {
    position: fixed;
    top: calc(#{$hamburgherSize} / 3);
    left: calc(#{$hamburgherSize} / 3);
    height: $hamburgherSize;
    width: $hamburgherSize;
    z-index: 100;

    &__hamburgher,
    &__hamburgher--close {
      &:hover,
      &:focus {
        fill: #AF1D1D;
        outline: none;
      }

      &:deep(.claw-mark) {
        transition: all 0.255s ease-in-out;
      }

      &,
      svg {
        height: 48px;
        width: 48px;
      }
    }

    &__hamburgher {
      &.hamburgher--reversed {
        transform: scaleY(-1);
      }

      &--scrolled {
        fill: #0F0F0F !important;
      }

      // transform the claw mark signs
      // into an x
      &--close.hamburgher {
        &--normal,
        &--reversed {
          &:deep(.claw-mark) {
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

        &--symmetric {
          &:deep(.claw-mark) {
            &.first {
              transform: translateX(16px) rotate(40deg);
            }

            &.second {
              opacity: 0;
            }

            &.third {
              transform: translateY(28px) translateX(-48px) rotate(-40deg);
            }
          }
        }
      }

      &--close {
        &:deep(.claw-mark) {
          fill: #FFF;
        }
      }
    }
  }

  &__overlay {
    position: fixed;
    @include fullsize;
    @apply bg-black-700;
    opacity: 0.95;
    overflow-y: scroll;
    z-index: $overlayIndex;
    @include menuItem;
  }
}
</style>
