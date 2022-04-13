<template>
  <DefaultLayout>
    <ImageWrapper
      height="100vh"
      image="/images/background.jpg"
      lazy-image="/images/background-lazy.jpg"
    >
      <Header class="pt-8" />
    </ImageWrapper>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { bg: 'primary', text: 'white' },
  { bg: 'secondary', text: 'white' },
  { bg: 'action', text: 'white' },
  { bg: 'black', text: 'white' },
  { bg: 'white', text: 'white' },
  { bg: 'grey', text: 'white' },
])

const getColor = (
  type: 'bg' | 'text' = 'bg',
  value: string,
  weight: string | number = 500
): string => {
  return `${type}-${value}-${weight}`
}
</script>

<style lang="scss" scoped>
.square {
  position: relative;
  height: 100px;
  margin: 16px auto;
}
</style>
