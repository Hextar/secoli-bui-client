<script setup lang="ts">
import { backgroundLazyLogoHd, backgroundLogoHd } from '~/assets/images'

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
  <Header class="text-whitesecoli bui100" :image="backgroundLogoHd" :lazy-image="backgroundLazyLogoHd" show-arrow
    :height="belowTablet ? '100%' : '60vh'">
    <template #menu>
      <MenuNormal />
    </template>
    <template #content>
      <div class="flex w-full flex-col items-center justify-center sm:pt-32">
        <h2 class="my-4 text-center font-display text-xl uppercase text-white-100" :class="{ 'mb-12': isMobile }" exact>
          {{ t('homepage.next_event') }}
        </h2>
        <EventTitle />
        <Decoration v-if="!isMobile" class="mb-8" size="medium" />
        <p class="mb-8 w-screen px-8 text-center font-body text-sm text-white-100 sm:w-screen md:w-4/5 lg:w-2/3">
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
        <CustomButton class="w-[160px]" tag="router-link" to="/events/future/la-pesca-dei-burattini">
          {{ t('homepage.more') }}
        </CustomButton>
      </div>
    </template>
  </Header>
</template>
