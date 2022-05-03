<template>
  <div ref="header" class="header flex items-start justify-center" v-bind="$attrs">
    <Image
      class="header__background pointer-events-none w-full"
      :src="image"
      v-lazy="lazy"
      title="Background event cover"
      alt="Background event cover"
    />
    <div
      class="header__content items-space-betwen container flex flex-col justify-start px-8 pb-8 sm:px-0 md:justify-between md:pb-0"
    >
      <div class="header__content__menu flex flex-col items-center justify-center pt-6 md:pt-8">
        <slot name="menu" />
      </div>
      <div class="header__content__body py-8">
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
import { computed, ref } from 'vue'
import { useScroll, useViewport } from '@/hooks'
import { LazyOptions } from '@/types'

import { IconArrow } from '@/assets/icons'
import { Image } from '@/components/common'

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
  position: relative;
  z-index: 1;
  height: auto;
  min-height: v-bind('height');

  &__background {
    position: absolute;
    @include fullsize;
    height: 100%;
    min-height: 100%;
    z-index: 1;
    opacity: 0.5;

    :deep(img) {
      object-fit: cover;
      object-position: center bottom;
    }
  }

  &__content {
    height: 100%;
    min-height: v-bind('height');

    &__body,
    &__action {
      z-index: 3;
    }

    &__action {
      margin: 48px auto;

      &,
      svg {
        height: 48px;
        width: 48px;
      }
    }
  }
}
</style>
