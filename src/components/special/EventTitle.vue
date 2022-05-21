<script setup lang="ts">
import { computed, ref } from 'vue'

// PROPS
const props = defineProps({
  align: { default: 'center', type: String as PropType<'start' | 'center' | 'end'> }
})

// VARIABLES
const counter = ref(0)

// COMPUTED
const showPeach = computed((): boolean => counter.value >= 13)
</script>

<template>
  <section class="event-title w-full flex flex-col justify-center items-center" :class="`sm:items-${props.align}`">
    <h1 class="event-title mb-4 font-display text-6xl text-white-100">
      <template v-if="showPeach">
        <div class="inline-flex">
          La
          <Tooltip>
            <template #trigger>
              <span class="peach mx-2 cursor-pointer">🍑</span><br />
            </template>
            Charme
          </Tooltip>
          dei
        </div>
        Burattini
      </template>
      <template v-else>
        La <span @click="counter++">Pesca</span> dei Burattini
      </template>
    </h1>
    <h2 class="mb-4 text-center font-display text-2xl uppercase text-white-100 sm:text-left">
      Di perdita e riscatto
    </h2>
  </section>
</template>

<style lang="scss" scoped>
.event-title {
  @media (max-width: '640px') {
    .peach {
      font-size: 54px;
      align-items: center;
    }
  }
}
</style>