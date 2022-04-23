<template>
  <div ref="header" class="header flex items-start justify-center">
    <img
      class="header__background pointer-events-none"
      :src="image"
      v-lazy="lazy"
      alt="Background event cover"
    />
    <div
      class="header__content items-space-betwen container flex flex-col justify-start px-8 pb-16 md:justify-between md:pb-0"
    >
      <div class="header__content__menu flex flex-col items-center justify-center pt-8">
        <slot name="menu" />
      </div>
      <div class="header__content__body container flex flex-col items-center justify-center py-8">
        <slot name="content" />
      </div>
      <div
        v-if="!isMobile"
        class="header__content__action container flex flex-col items-center justify-center"
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
import { useStore } from 'vuex'
import { LazyOptions } from '@/types'
import { IconArrow } from '@/assets/icons'

const { state } = useStore()

const header = ref<HTMLDivElement>()

const props = defineProps({
  image: { type: String, required: false },
  lazyImage: { type: String, required: false },
})

let scrolled = ref(false)

const isMobile = computed((): boolean => {
  return state.isMobile
})

const lazy = computed(
  (): LazyOptions => ({
    src: props.image,
    loading: props.lazyImage,
    error: props.image,
  })
)

const onScroll = (): void => {
  const el = header.value as Element
  const { height } = el.getBoundingClientRect()
  window.scrollTo({ top: height, behavior: 'smooth' })
  scrolled.value = true
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 0;
  height: 90vh;

  &,
  &__background {
    height: 100%;
    width: 100%;
    max-height: 700px;

    @screen sm {
      max-height: 800px;
      height: 100vh;
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
      height: 96px;

      &__icon {
        transform: scale(0.33);
      }
    }

    &:after {
      content: '';
      position: absolute;
      @include fullsize;
      background-color: theme('colors.black.700');
      opacity: 0.5;
      z-index: 2;
    }
  }
}
</style>
