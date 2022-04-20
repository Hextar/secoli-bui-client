<template>
  <div class="header relative flex items-start justify-center">
    <img
      class="header__background pointer-events-none"
      :src="image"
      v-lazy="lazyImage"
      alt="Background event cover"
    />
    <div class="header__content items-space-betwen container flex flex-col justify-center px-8">
      <div class="header__content__menu flex flex-col items-center justify-center pt-8">
        <slot name="menu" />
      </div>
      <Spacer />
      <div class="header__content__body container flex flex-col items-center justify-center">
        <slot name="content" />
      </div>
      <Spacer />
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
import { IconArrow } from '@/assets/icons'

const props = defineProps({
  image: { type: String, required: true },
  lazyImage: { type: String, required: true },
  height: { type: [Number, String], default: 420 },
})

let scrolled = ref(false)

const lazy = computed(() => ({
  src: props.image,
  loading: props.lazyImage,
  error: props.image,
}))

const style = computed((): string => {
  const { height } = props
  const px = `${height}`.includes('px')
  const percent = `${height}`.includes('%')
  const vh = `${height}`.includes('vh')
  return `
    height: ${height}${!px && !percent && !vh ? 'px' : ''};
    min-height: ${height}${!px && !percent && !vh ? 'px' : ''};
  `
})

const onScroll = (): void => {
  console.warn('TRIGGED SCROLL')
  scrolled.value = true
}
</script>

<style lang="scss" scoped>
.header {
  height: 100vh;
  max-height: 720px;
  overflow: hidden;

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

    &__menu,
    &__body,
    &__action {
      position: relative;
      z-index: 3;
    }

    &__action {
      height: 96px;

      &__icon {
        transform: scale(0.33);
        animation: bounce 1s infinite alternate;
        -webkit-animation: bounce 1s infinite alternate;
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
