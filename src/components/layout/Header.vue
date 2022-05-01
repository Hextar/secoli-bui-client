<template>
  <div ref="header" class="header flex items-start justify-center">
    <div
      class="header__content items-space-betwen flex flex-col justify-start px-8 pb-8 md:justify-between md:pb-0"
    >
      <img
        class="header__background pointer-events-none w-full"
        :src="image"
        v-lazy="lazy"
        alt="Background event cover"
      />
      <div class="header__content__menu flex flex-col items-center justify-center pt-6 md:pt-8">
        <slot name="menu" />
      </div>
      <div class="header__content__body container-xl py-8">
        <slot name="content" />
      </div>
      <div
        v-if="showArrow && !isMobile"
        class="header__content__action flex flex-col items-center justify-center"
      >
        <IconArrow
          v-if="!scrolled"
          class="header__content__action__icon animate__bounce cursor-pointer"
          @click="onScroll"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { useScroll, useViewport } from '@/hooks'
import { LazyOptions } from '@/types'

import { IconArrow } from '@/assets/icons'

// VARIABLES
const header = ref<HTMLDivElement>()

// PROPS
const props = defineProps({
  height: { type: [String, Number], default: '100vh' },
  image: { type: String, required: false },
  lazyImage: { type: String, required: false },
  showArrow: { type: Boolean, default: false },
})

// VARIABLES
let scrolled = ref(false)

// COMPUTED
const { isMobile } = useViewport()
const { scrollToRef } = useScroll()

const lazy = computed(
  (): LazyOptions => ({
    src: props.image,
    loading: props.lazyImage,
    error: props.image,
  })
)

// METHODS
const onScroll = (): void => {
  scrollToRef(header, () => (scrolled.value = true))
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 1;
  height: v-bind('height');
  max-height: v-bind('height');

  &,
  &__background {
    position: relative;
    height: v-bind('height');
    max-height: 100%;

    &:after {
      content: '';
      position: absolute;
      @include fullsize;
      background-color: theme('colors.black.700');
      opacity: 0.5;
      z-index: 2;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    object-fit: cover;
    object-position: center bottom;
    z-index: 1;
  }

  &__content {
    height: 100%;

    &__body,
    &__action {
      z-index: 3;
    }

    &__action {
      height: 48px;
      margin-bottom: 48px;
    }
  }
}
</style>
