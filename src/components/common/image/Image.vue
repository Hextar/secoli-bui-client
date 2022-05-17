<script setup lang="ts">
import { PropType, computed, useAttrs } from 'vue'

// VARIABLES
const attrs = useAttrs()

// PROPS
const props = defineProps({
  src: { type: [String, Array] as PropType<String | any[]>, default: '' },
  height: { type: Number, default: undefined },
  width: { type: Number, default: undefined },
  aboveTheFold: { type: Boolean, default: false },
})

// COMPUTED
const style = computed(
  (): Record<string, string | undefined> => ({
    height: props.height ? `${props.height}px` : undefined,
    width: props.width ? `${props.width}px` : undefined,
  }),
)

const pictureAttrs = computed(() => {
  const allowed = ['class']
  return Object.keys(attrs)
    .filter((key: string) => allowed.includes(key))
    .reduce((obj: any, key: string) => {
      obj[key] = attrs[key]
      return obj
    }, {})
})

const imgAttrs = computed(() => {
  const allowed = ['alt', 'src', 'title']
  return Object.keys(attrs)
    .filter((key: string) => allowed.includes(key))
    .reduce((obj: any, key: string) => {
      obj[key] = attrs[key]
      return obj
    }, {})
})

const allSources = computed((): string | any[] =>
  Array.isArray(props.src) ? props.src : [{ srcset: props.src }],
)

const sources = computed((): any[] => allSources.value.slice(0, -1) as any[])

const lastSource = computed((): string | any[] => {
  const last = allSources.value[allSources.value.length - 1]
  if (typeof last === 'object') {
    return { ...last, loading: props.aboveTheFold ? 'eager' : last.loading }
  }
  return last
})
</script>

<template>
  <picture
    class="picture flex h-full w-full items-center justify-center"
    :style="style"
    v-bind="{ ...pictureAttrs }"
  >
    <source v-for="(attrs, index) in sources" :key="index" v-bind="attrs" />
    <img
      class="picture__image h-full w-full"
      v-bind="{
        ...(typeof lastSource === 'object'
          ? lastSource
          : { srcset: lastSource }),
        ...imgAttrs,
      }"
      itemprop="image"
    />
  </picture>
</template>
