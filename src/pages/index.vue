<script setup lang="ts">
import { computed, ref } from 'vue'

import { backgroundLazyLogoHd, backgroundLogoHd } from '~/assets/images'

import { useViewport } from '~/composables'

const { t } = useI18n()

// VARIABLES
const counter = ref(0)

// COMPUTED
const showPeach = computed((): boolean => counter.value >= 13)

const { isMobile, belowTablet } = useViewport()
</script>

<template>
  <Header
    class="text-white-100"
    :image="backgroundLogoHd"
    :lazy-image="backgroundLazyLogoHd"
    show-arrow
    :height="belowTablet ? '100%' : '90vh'"
  >
    <template #menu>
      <MenuNormal />
    </template>
    <template #content>
      <div class="flex w-full flex-col items-center justify-center">
        <h2
          class="my-4 text-center font-display text-xl uppercase text-white-100"
          :class="{ 'mb-12': isMobile }"
          exact
        >
          {{ t('homepage.next_event') }}
        </h2>
        <h1
          class="event-title mb-4 flex-inline text-center font-display text-6xl text-white-100"
          to="/"
          exact
        >
          La
          <Tooltip :disabled="!showPeach">
            <template #trigger>
              <span v-if="showPeach" class="peach mx-2 cursor-pointer">🍑</span>
              <span v-else class="mx-2 cursor-pointer" @click="counter++">Pesca</span>
            </template>
            <span>Charme</span>
          </Tooltip>
          dei Burattini
        </h1>
        <h2
          class="mb-4 text-center font-display text-2xl uppercase text-white-100"
          :class="{ 'mb-12': isMobile }"
          exact
        >
          Di perdita e riscatto
        </h2>
        <Decoration v-if="!isMobile" class="mb-8" size="medium" />
        <p
          class="mb-8 w-screen px-8 text-center font-body text-sm text-white-100 sm:w-screen md:w-4/5 lg:w-2/3"
        >
          <i>
            "Si mormora che tra queste valli si celi qualcosa di silenzioso,
            mai sopito e che solo i temerari o i disperati calcano questi
            terreni, alla ricerca di qualcosa o qualcuno…
            <br>
            <br>
            Chi abita queste terre sa che non è possibile uscirne, chi le
            cerca invece vi entra per brama e riscatto…"
          </i>
        </p>
        <Button
          class="w-[160px]"
          tag="router-link"
          to="/events/future/la-pesca-dei-burattini"
        >
          {{ t('homepage.more') }}
        </Button>
      </div>
    </template>
  </Header>
</template>

<style lang="scss" scoped>
.event-title {
  @media (max-width: '640px') {
    display: inline;
    white-space: pre;

    .peach {
      font-size: 54px;
    }
  }
}
</style>