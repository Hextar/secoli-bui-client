<template>
  <h1>Home Page</h1>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center">
      <div
        v-for="({ bg, text }, idx) in items"
        :key="`${bg}-${text}-${idx}`"
        class="flex flex-row"
      > 
        <div
          class="square flex flex-1 justify-center items-center w-33"
          :class="getColor('bg', bg, 700)"
        >
          <p :class="getColor('text', text, 500)">
            {{ typeof bg }} {{ bg }}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div
          class="square flex flex-1 justify-center items-center w-33 "
          :class="getColor('bg', bg)"
        >
          <p :class="getColor('text', text, 500)">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div
          class="square flex flex-1 justify-center items-center w-33"
          :class="getColor('bg', bg, 100)"
        >
          <p :class="getColor('text', text, 500)">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { bg: 'primary', text: 'white' },
  { bg: 'secondary', text: 'white' },
  { bg: 'action', text: 'white' },
  { bg: 'black', text: 'white' },
  { bg: 'white', text: 'white' },
  { bg: 'grey', text: 'white' }
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