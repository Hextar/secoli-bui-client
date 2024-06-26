<script setup lang="ts">
import { getCurrentInstance, PropType, ref } from 'vue'

import { IconArrow } from '~/assets/icons'

import { useBoundingRect, useScroll, useViewport } from '~/composables'

const { emit } = getCurrentInstance() as NonNullable<ReturnType<typeof getCurrentInstance>>

// PROPS
const props = defineProps({
  height: { type: [String, Number], default: '100vh' },
  image: { type: [String, Array] as PropType<string | any[]>, required: false },
  lazyImage: {
    type: [String, Array] as PropType<string | any[]>,
    required: false,
  },
  showArrow: { type: Boolean, default: false },
  darkest: { type: Boolean, default: false },
})

// VARIABLES
const header = ref<HTMLDivElement>()
const scrolled = ref(false)

// COMPUTED
const { isMobile } = useViewport()
const { scrollToBottomOfRef } = useScroll()

// METHODS
const onScroll = (): void => {
  scrollToBottomOfRef(header, () => (scrolled.value = true))
}

const { height: headerHeight } = useBoundingRect(header)

watch(headerHeight, ((val: number) => {
  emit('resize:height', val)
}), { immediate: true, deep: true })
</script>

<template>
  <section ref="header" class="header flex items-start justify-center" v-bind="$attrs">
    <Image class="header__background pointer-events-none w-full" :class="{ 'header__background--darkest': darkest }"
      :src="image" title="Background event cover" alt="Background event cover" above-the-fold />
    <div class="header__content container flex flex-col justify-start pb-8 md:justify-center md:pb-0">
      <div class="header__content__menu flex flex-col items-center justify-center pt-6 md:pt-8">
        <slot name="menu" />
      </div>
      <div class="header__content__body py-8">
        <slot name="content" />
      </div>
      <div v-if="props.showArrow && !isMobile"
        class="header__content__action flex flex-col items-center justify-center">
        <IconArrow v-if="!scrolled" class="text-white-100 header__content__action__icon animate__bounce cursor-pointer"
          @click="onScroll" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 1;
  height: auto;
  min-height: v-bind('height');
  @apply bg-black-700;

  &__background {
    position: absolute;
    @include fullsize;
    height: 100%;
    min-height: 100%;
    z-index: 1;
    opacity: 0.5;

    &--darkest {
      opacity: 0.25;
    }

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
