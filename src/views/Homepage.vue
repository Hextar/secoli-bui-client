<template>
  <DefaultLayout v-once>
    <Header
      class="text-white-100"
      :image="backgroundLogo"
      show-arrow
      :height="belowTablet ? '100%' : '90vh'"
    >
      <template #menu>
        <MenuNormal />
      </template>
      <template #content>
        <div class="flex w-full flex-col items-center justify-center">
          <h2
            class="mb-4 text-center font-display text-xl uppercase text-white-100"
            :class="{ 'mb-12': isMobile }"
            exact
          >
            Prossimo evento
          </h2>
          <h1 class="mb-4 text-center font-display text-6xl text-white-100" to="/" exact>
            La
            <span v-if="showPeach" v-tooltip="tooltip" class="cursor-pointer">🍑</span>
            <span v-else class="cursor-pointer" @click="counter++">Pesca</span>
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
              "Si mormora che tra queste valli si celi qualcosa di silenzioso, mai sopito e che solo
              i temerari o i disperati calcano questi terreni, alla ricerca di qualcosa o qualcuno…
              <br />
              <br />
              Chi abita queste terre sa che non è possibile uscirne, chi le cerca invece vi entra
              per brama e riscatto…"
            </i>
          </p>
          <Button class="w-[160px]" tag="router-link" to="/events/future/la-pesca-dei-burattini">
            Scopri di piú
          </Button>
        </div>
      </template>
    </Header>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMeta } from 'vue-meta'
import { useViewport } from '@/hooks'
import { TooltipOptions } from '@/types'

import { Button, Decoration } from '@/components/common'
import { DefaultLayout, Header, MenuNormal } from '@/components/layout'

import backgroundLogo from '@images/background.jpg?preset=full'

// META
const title = 'Homepage'
const description = 'scopri i prossimi eventi LARP italiani'
const url = 'https://www.grvsecolibui.it'
const image = `${url}/images/social.jpg`
useMeta({
  title,
  description,
  htmlAttrs: { lang: 'it', amp: true },
  meta: [
    // OpenGraph data (Most widely used)
    { property: 'og:title', content: title },
    { property: 'og:site_name', content: title },
    // The list of types is available here: http://ogp.me/#types
    { property: 'og:type', content: 'website' },
    // Should the the same as your canonical link, see below.
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    // Often the same as your meta description, but not always.
    { property: 'og:description', content: description },

    // Twitter card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: url },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    // {name: 'twitter:creator', content: '@alligatorio'},
    { name: 'twitter:image:src', content: image },

    // Google / Schema.org markup:
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: image },
  ],
  link: [{ rel: 'canonical', href: url }],
})

// VARIABLES
let counter = ref(0)

// COMPTUED
const showPeach = computed((): boolean => counter.value >= 13)
const tooltip = computed(
  (): TooltipOptions => ({
    content: 'Charm',
    placement: 'top',
    theme: 'secoli-bui',
  })
)
const { isMobile, belowTablet } = useViewport()
</script>
