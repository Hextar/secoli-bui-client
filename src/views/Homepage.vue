<template>
  <DefaultLayout>
    <Header height="100vh" image="/images/background.jpg" lazy-image="/images/background-lazy.jpg">
      <template #menu>
        <Menu />
      </template>
      <template #content>
        <h2
          class="mb-4 text-center font-display text-6xl text-white-100 bg-blend-multiply mix-blend-multiply"
          to="/"
          exact
        >
          La
          <span v-if="showPeach" v-tooltip="tooltip" class="cursor-pointer">🍑</span>
          <span v-else class="cursor-pointer" @click="onClick">Pesca</span>
          dei Burattini
        </h2>
        <h3 class="mb-4 text-center font-display text-2xl uppercase text-white-100" to="/" exact>
          Di perdita e riscatto
        </h3>
        <Decoration class="mb-8" size="medium" />
        <p
          class="container mb-8 w-screen px-8 text-center font-body text-sm text-white-100 sm:w-screen md:w-4/5 lg:w-2/3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tellus nibh, non
          faucibus mauris imperdiet eu. Curabitur euismod nulla eget leo ornare, in viverra ipsum
          finibus.
        </p>
        <Button class="px-16" disabled> Scopri di piu </Button>
      </template>
    </Header>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { TooltipOptions } from '@/types'

let counter = ref(0)

const showPeach = computed((): boolean => counter.value > 33)
const tooltip = computed(
  (): TooltipOptions => ({
    content: 'Charm',
    placement: 'top',
    theme: 'secoli-bui',
  })
)

const onClick = () => {
  counter.value += 1
}
</script>
