<script setup lang="ts">
import { backgroundLazyHd, backgroundHd } from '~/assets/images/events/il_simposio_di_lauriel_rose'

import { useMeta, useViewport } from '~/composables'

// META
useMeta({
  title: 'Homepage',
  description: 'scopri i prossimi eventi LARP italiani',
})

// VARIABLES
const { t } = useI18n()

// COMPUTED
const { isMobile, belowTablet } = useViewport()
</script>

<template>
  <Header class="text-whitesecoli bui100" :image="backgroundHd" :lazy-image="backgroundLazyHd" show-arrow
    :height="belowTablet ? '100%' : '60vh'">
    <template #menu>
      <MenuNormal />
    </template>
    <template #content>
      <div class="flex w-full flex-col items-center justify-center sm:pt-32">
        <h2 class="my-4 text-center font-display text-xl uppercase text-white-100" :class="{ 'mb-12': isMobile }" exact>
          {{ t('homepage.next_event') }}
        </h2>
        <h1 class="event-title mb-4 font-display text-6xl text-white-100 text-center">
          Il Simposio di Lauriel Rose
        </h1>
        <Decoration v-if="!isMobile" class="mb-8" size="medium" />
        <p class="mb-8 w-screen px-8 text-center font-body text-lg text-white-100 sm:w-screen md:w-4/5 lg:w-2/3">
          <i>
            Secoli bui: L'ultimo Regno
          </i>
        </p>
        <Button class="w-[160px]" tag="router-link" to="/events/future">
          {{ t('homepage.more') }}
        </Button>
      </div>
    </template>
  </Header>
</template>
