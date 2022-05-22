<script setup lang="ts">
import { useMeta } from '~/composables'

import { larpHd } from '~/assets/images'
import Premessa from './premessa.md'
import IlGiocoDiRuoloDalVivo from './il_gioco_di_ruolo_dal_vivo.md'
import LeTrameOneshotECampagna from './le_trame_oneshot_e_campagna.md'
import LaCampagna from './la_campagna.md'
import LeMeccanicheDiGioco from './le_meccaniche_di_gioco.md'
import type { MenuItemType } from '~/types'

// META
useMeta({
  title: 'Che cosa è il larp',
  description: 'Scopri che cosa è il gioco di ruolo dal vivo'
})

// VARIABLES
const scrollThreshold = ref(200)
const items: MenuItemType[] = [
  {
    label: 'Premessa',
    to: { path: '/play-with-us', hash: '#Premessa' },
    tooltip: {
      content: 'Scrolla al paragrafo "Premessa"',
      placement: 'bottom',
    },
  },
  {
    label: 'Il GRV',
    to: { path: '/play-with-us', hash: '#IlGiocoDiRuoloDalVivo' },
    tooltip: {
      content: 'Scrolla al paragrafo "Il Gioco Di Ruolo Dal Vivo"',
      placement: 'bottom',
    },
  },
  {
    label: 'Le Trame',
    to: { path: '/play-with-us', hash: '#LeTrameOneshotECampagna' },
    tooltip: {
      content: 'Scrolla al paragrafo "Le Trame Oneshot E Campagna"',
      placement: 'bottom',
    },
  },
  {
    label: 'La Campagna',
    to: { path: '/play-with-us', hash: '#LaCampagna' },
    tooltip: {
      content: 'Scrolla al paragrafo "La Campagna"',
      placement: 'bottom',
    },
  },
  {
    label: 'Le Meccaniche',
    to: { path: '/play-with-us', hash: '#LeMeccanicheDiGioco' },
    tooltip: {
      content: 'Scrolla al paragrafo "Le Meccaniche Di Gioco"',
      placement: 'bottom',
    },
  },
]

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height - (86 / 2)
}
</script>

<template>
  <section class="world-system" itemscope itemtype="https://schema.org/Article">
    <Header ref="header" class="text-white-100" :image="larpHd" height="420px" darkest
      @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" />
      </template>
      <template #content>
        <div id="title" class="anchor h-full flex flex-col items-center justify-center">
          <div class="flex h-[336px] items-center" itemprop="title">
            <h1 class="event-title font-display text-6xl text-white-100 text-center">Gioca con noi</h1>
          </div>
        </div>
      </template>
    </Header>
    <div class="bg-white-100 pb-16" itemprop="description">
      <Article>
        <Paragraph class="mb-4">
          <Premessa />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <IlGiocoDiRuoloDalVivo />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <LeTrameOneshotECampagna />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <LaCampagna />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <LeMeccanicheDiGioco />
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
