<template>
  <DefaultLayout>
    <Header
      class="text-white-100"
      image="/images/background.jpg"
      lazy-image="/images/background-lazy.jpg"
    >
      <template #menu>
        <MenuEvent />
      </template>
      <template #content>
        <h3
          v-if="showNextEvent"
          class="text-md my-4 text-center font-display uppercase text-white-100"
          to="/"
          exact
        >
          Prossimo evento
        </h3>
        <Decoration v-if="showNextEvent" class="mb-4" size="medium" inverted />
        <h2 class="mb-4 text-center font-display text-6xl text-white-100" to="/" exact>
          La
          <span v-if="showPeach" v-tooltip="tooltip" class="cursor-pointer">🍑</span>
          <span v-else class="cursor-pointer" @click="onClick">Pesca</span>
          dei Burattini
        </h2>
        <h3 class="mb-4 text-center font-display text-2xl uppercase text-white-100" to="/" exact>
          Di perdita e riscatto
        </h3>
        <Decoration class="mb-8" size="medium" />
      </template>
    </Header>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { TooltipOptions } from '@/types'

let counter = ref(0)
let showNextEvent = ref(false)

const showPeach = computed((): boolean => counter.value > 33)
const tooltip = computed(
  (): TooltipOptions => ({
    content: 'Charme',
    placement: 'top',
    theme: 'secoli-bui',
  })
)

const onClick = () => {
  counter.value += 1
}
</script>
