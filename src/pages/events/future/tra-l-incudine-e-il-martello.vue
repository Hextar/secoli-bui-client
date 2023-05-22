<script setup lang="ts">
import { ref, Ref } from 'vue'

import { useMeta } from '~/composables'

import type { MenuItemType } from '~/types'

import {
  backgroundLazyHd,
  backgroundHd,
} from '~/assets/images/events/tra_l_incudine_e_il_martello'

// USE
const { t } = useI18n()

useMeta({
  title: 'Prossimo evento - L\'ultimo Regno',
  description: "Tra l'incudine e il Martello - evento LARP, 08 Luglio a S'Acqua Frida",
  keywords: ['larp', 'oristano', 'acqua', 'frida', 'rievocazione storica'],
})

// VARIABLES
const scrollThreshold = ref(200)
const facebookEventUrl = ''
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeQ_B-UcpJj_NAAFKiCELUA5xON_Un96V9OEEVmaX_Tnau2MQ/viewform'
const googleMapsUrl = 'https://goo.gl/maps/pKXGhZA8cjUnKsZe9'
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/tra-l-incudine-e-il-martello', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: '/events/past/cercatori-di-verita', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
  }
]

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height + (86 / 2)
}
</script>

<template>
  <section class="event-detail" itemscope itemtype="https://schema.org/Event">
    <Header ref="header" class="text-white-100" :image="backgroundHd" :lazy-image="backgroundLazyHd" height="400px"
      @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" back-title="Tra l'Incudine e il Martello">
          <template #cta>
            <Button class="w-[112px] animate__shake" variant="filled" color="primary" size="small" tag="a"
              :href="googleFormUrl" target="_blank" :disabled="!!loading" tooltip="Vai al Google form di iscrizione">
              <span class="font-display text-lg font-bold">
                {{ loading ? t('common.loading') : t('common.subscribe') }}
              </span>
            </Button>
          </template>
        </MenuDetail>
      </template>
      <template #content>
        <div id="info" class="anchor flex flex-col items-start justify-center pb-0 sm:pb-8 pt-16">
          <div class="mb-8 flex flex-col" itemprop="name">
            <h1 class="event-title mb-4 font-display text-6xl text-white-100 text-center">
              Tra l'Incudine e il Martello
            </h1>
            <h2 class="mb-4 w-full font-display text-2xl uppercase text-white-100 text-center" :class="'sm:text-left'">
              Secoli bui: L'ultimo Regno
            </h2>
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <InfoWhere class="w-full sm:w-auto" meta="indicazioni castrum romano" :google-maps-url="googleMapsUrl"
              label="Oristano - Area picnic S'Acqua Frida, Ales" />
            <InfoWhen class="w-full sm:w-auto" first-date="08/07/2023 18:00 - 24:00" />
            <InfoPrice class="w-full sm:w-auto" :price="40.00" :price-discounted="10.00"
              label="Standard + cena in ruolo" />
            <InfoEvent class="w-full sm:w-auto" :facebook-event-url="facebookEventUrl" />
          </div>
        </div>
      </template>
    </Header>
    <div class="bg-white-100 pb-16" itemprop="description">
      <Article>
        <Paragraph>
          <h2 id="incipit" class="anchor">📖 Incipit</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <p class="text-justify">
            Dopo essere fuggiti dalla prigionie e aver abbandonato le terre di <strong>Dorsten</strong>, i Cercatori di
            Verità potranno
            finalmente trovare un posto sicuro da considerare casa?
          </p>
          <p class="text-justify">
            Sono molte le risorse e i contatti di cui i Cercatori dispongono, ma in tempi come questi è difficile
            discernere tra coloro che sono degni di fiducia e coloro che hanno ceduto alle allettanti offerte di potere e
            denaro che la Fiamma Bianca e il Sacro Balurdo offrono ai loro sudditi.
          </p>
          <p class="text-justify">
            Nelle remote terre della <strong>Baronia di Daggerford</strong>, <strong>Sir Markus de Coulevre</strong>,
            feudatario del Barone D'Ongràn e membro dei Cercatori, offre le sue terre come porto sicuro per coloro che
            fuggono dalla persecuzione della Chiesa dell'Unico.
            È il momento per riorganizzarsi, il momento per smettere di scappare e dare nuovamente uno
            scopo alla vostra vita.
          </p>

          <p class="text-justify">
            Riuscerete a capire cosa significa di preciso essere un Cercatore di Verità?
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="incipit" class="anchor">✒️ Iscriversi al live</h2>
        </Paragraph>
        <Paragraph class="pb-4 sm:pb-8 md:pb-8">
          <p class="text-justify">
            Ora non ti resta che iscriverti all'evento cliccando il pulsante
            <a class="pa-0 ma-0 decoration-none" :href="googleFormUrl" target="_blank">
              <span class=" font-display text-lg font-bold">
                {{ t('common.subscribe') }}
              </span>
            </a> qui sotto, che ti porterà al modulo compilabile:
          </p>
        </Paragraph>
        <Paragraph class="flex justify-center w-full">
          <Button class="w-[112px] animate__shake decoration-none w-1/3" variant="filled" color="primary" tag="a"
            :href="googleFormUrl" target="_blank" :disabled="!!loading" full-width
            tooltip="Vai al Google form di iscrizione">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : t('common.subscribe') }}
            </span>
          </Button>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
