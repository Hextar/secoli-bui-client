<template>
  <picture class="picture" :style="style" v-bind="{ ...pictureAttrs }">
    <source v-for="(attrs, index) in sources" :key="index" v-bind="attrs" />
    <img
      class="picture__image"
      :alt="alt"
      :title="alt"
      v-bind="{
        ...(typeof lastSource === 'object' ? lastSource : { srcset: lastSource }),
        ...imgAttrs,
      }"
    />
  </picture>
</template>

<script setup lang="ts">
import { type } from 'os'
import { computed, useAttrs, PropType } from 'vue'

type SourceSet = {
  class?: string
  loading?: string
  sizes?: string
  src?: string
  srcset?: string
  type?: string
}
const attrs = useAttrs()

// PROPS
const props = defineProps({
  src: { default: '' },
  // src: { type: String, default: '' },
  presets: { type: Array as PropType<String[]>, default: () => ['hd'] },
  alt: { type: String, default: '' },
  height: { type: Number, default: undefined },
  width: { type: Number, default: undefined },
})

// COMPUTED
const style = computed(
  (): Record<string, string | undefined> => ({
    height: props.height ? `${props.height}px` : undefined,
    width: props.width ? `${props.width}px` : undefined,
  })
)

const pictureAttrs = computed(() =>
  Object.keys(attrs)
    .filter((key: string) => key === 'class')
    .reduce((obj: any, key: string) => {
      obj[key] = attrs[key]
      return obj
    }, {})
)

const imgAttrs = computed(() =>
  Object.keys(attrs)
    .filter((key: string) => key !== 'class')
    .reduce((obj: any, key: string) => {
      obj[key] = attrs[key]
      return obj
    }, {})
)

const allSources = computed((): string | any[] =>
  Array.isArray(props.src) ? props.src : [{ srcset: props.src }]
)

const sources = computed((): any[] => allSources.value.slice(0, -1) as any[])

const lastSource = computed((): string | any[] => {
  const last = allSources.value[allSources.value.length - 1]
  if (typeof last === 'object') {
    return { ...last }
  }
  return last
})
</script>

<style lang="scss" scoped>
.picture {
  &__image {
    height: 100%;
    width: 100%;
  }
}
</style>
