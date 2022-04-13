<template>
  <div class="image-wrapper relative flex flex-1" :style="style">
    <img
      class="image-wrapper__background pointer-events-none"
      :src="image"
      v-lazy="lazyImage"
    />
    <div
      class="image-wrapper__content flex flex-col items-center justify-start"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
  lazyImage: { type: String, required: true },
  height: { type: [Number, String], default: 420 },
})

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
</script>

<style lang="scss" scoped>
.image-wrapper {
  &__background {
    position: absolute;
    @include fullsize;
  }

  &__content {
    position: absolute;
    @include fullsize;
    z-index: 1;
  }
}
</style>
