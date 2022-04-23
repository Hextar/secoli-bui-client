<template>
  <div ref="header" class="header flex items-start justify-center">
    <img
      class="header__background pointer-events-none"
      :src="image"
      v-lazy="lazy"
      alt="Background event cover"
    />
    <div class="header__content items-space-betwen container flex flex-col justify-between px-8">
      <div class="header__content__menu flex flex-col items-center justify-center pt-8">
        <slot name="menu" />
      </div>
      <div class="header__content__body container flex flex-col items-center justify-center">
        <slot name="content" />
      </div>
      <div class="header__content__action container flex flex-col items-center justify-center">
        <IconArrow
          v-show="!scrolled"
          class="header__content__action__icon cursor-pointer"
          @click="onScroll"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { LazyOptions } from '@/types'
import { IconArrow } from '@/assets/icons'

const header = ref<HTMLDivElement>()

const props = defineProps({
  image: { type: String, required: false },
  lazyImage: { type: String, required: false },
})

let scrolled = ref(false)

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
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  z-index: 0;

  &__background {
    position: absolute;
    @include fullsize;
    object-fit: cover;
    z-index: 1;
    height: 100%;
    width: 100%;
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

        @screen md {
          animation: bounce 1s infinite alternate;
          -webkit-animation: bounce 1s infinite alternate;
        }
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

@keyframes bounce {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -15px;
  }
}
</style>
