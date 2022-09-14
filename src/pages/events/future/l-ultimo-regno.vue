<script setup lang="ts">
import axios from 'axios'
import pkg from 'file-saver'

import { ref, Ref } from 'vue'

import { useMeta, useViewport } from '~/composables'

import { IconClock, IconFacebook, IconMoney, IconPin } from '~/assets/icons'
import type { MenuItemType } from '~/types'

import {
  backgroundLazyLogoHd,
  backgroundLogoHd,
} from '~/assets/images'

// META
useMeta({
  title: 'Prossimo evento - L\'ultimo Regno',
  description: 'L\'ultimo Regno - evento LARP, 12/13 Novembre al Castrum Romano',
  keywords: ['sassari', 'castrum', 'romano', 'rievocazione storica'],
})

// VARIABLES
const scrollThreshold = ref(200)
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/l-ultimo-regno', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
    homepage: true,
  },
  {
    label: 'Incipit',
    to: { path: '/events/future/l-ultimo-regno', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
    homepage: true,
  }
]
const { saveAs } = pkg
const { t } = useI18n()

// COMPUTED
// const { isMobile } = useViewport()

// const imageWidth = computed((): number => {
//   return isMobile.value ? 240 : 160
// })

// // METHODS
// const getAssetPath = (value: string): string => {
//   const assets = new Map<string, any>([
//     [
//       'i_portatori_della_fiamma_bianca.svg',
//       IPortatoriDellaFiammaBiancaThumbnail,
//     ],
//     ['le_code_mozzate.svg', LeCodeMozzateThumbnail],
//     ['l_ineluttabile_domani.svg', LIneluttabileDomainThumbnail],
//     [
//       'i_cercatori_del_sentiero_dorato.svg',
//       ICercatoriDelSentieroDoratoThumbnail,
//     ],
//     ['le_fauci_grondanti.svg', LeFauciGrondantiThumbnail],
//     ['la_loghia_del_gufo.svg', LaLoghiaDelGufoThumbnail],
//   ])
//   return assets.get(value)
// }

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height + (86 / 2)
}

const downloadAttachment = async (): Promise<void> => {
  loading.value = true
  axios
    .get('/files/iscrizione.pdf', { responseType: 'blob' })
    .then(response => saveAs(response.data, 'secoli-bui-iscrizione.pdf'))
    .catch((err: unknown) => console.error(err))
    .finally(() => (loading.value = false))
}

// const downloadImage = async (url: string): Promise<void> => {
//   axios
//     .get(`/images/events/la_pesca_dei_burattini/${url}`, { responseType: 'blob' })
//     .then((response) => saveAs(response.data, url))
//     .catch((err: unknown) => console.error(err))
// }
</script>

<template>
  <section class="event-detail" itemscope itemtype="https://schema.org/Event">
    <Header ref="header" class="text-white-100" :image="backgroundLogoHd" :lazy-image="backgroundLazyLogoHd"
      height="400px" @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" back-title="La Pesca dei Burattini">
          <template #cta>
            <Tooltip placement="bottom">
              <template #trigger>
                <CustomButton class="w-[112px]" variant="filled" color="primary" size="small" :disabled="!!loading"
                  @click.prevent.stop="downloadAttachment">
                  <span class="font-display text-lg font-bold">
                    {{ loading ? t('common.loading') : t('common.subscribe') }}
                  </span>
                </CustomButton>
              </template>
              Scarica il documento di iscrizione
            </Tooltip>
          </template>
        </MenuDetail>
      </template>
      <template #content>
        <div id="info" class="anchor flex flex-col items-start justify-center pb-0 sm:pb-8 pt-16">
          <div class="mb-8 flex flex-col" itemprop="name">
            <p class="event-title mb-4 font-display text-6xl text-white-100 text-center">
              L'ultimo Regno
            </p>
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <Info class="w-full sm:w-auto" label="Dove">
              <template #icon>
                <IconPin />
              </template>
              <br />
              <span class="pl-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
                •
                <a class="text-action-500 hover:underline"
                  href="https://www.google.com/maps?q=sassari+castrum+romano&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiR1PbogJT6AhXUO-wKHfDfBpIQ_AUoAnoECAEQBA"
                  rel="noopener noreferrer" title="indicazioni castrum romano" alt="indicazioni castrum romano"
                  target="_blank">
                  <span itemprop="name address">Sassari - Castrum Romano</span>
                </a>
              </span>
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quando">
              <template #icon>
                <IconClock />
              </template>
              <br />
              <time class="pl-2" itemprop="startDate" datetime="2022-11-12T18:00:00Z">
                • 12/11/2022 18:00 - 24:00
              </time>
              <br />
              <time class="pl-2" itemprop="endDate" datetime="2022-01-13T17:00:00Z">
                • 18/06/2022 11:00 - 17:00
              </time>
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quota" itemprop="offers" itemscope
              itemtype="https://schema.org/Offer">
              <template #icon>
                <IconMoney />
              </template>
              <br />
              <span class="pl-2">
                • <span itemprop="price" content="25.00">30</span><span itemprop="priceCurrency" content="EUR">€</span>
                AL GIORNO (STANDARD) </span><br />
              <span class="pl-2">
                • <span itemprop="price" content="10.00">10</span><span itemprop="priceCurrency" content="EUR">€</span>
                AL GIORNO (AIUTANTI SUL CAMPO) </span><br />
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Evento FB">
              <template #icon>
                <IconFacebook />
              </template>
              <br />
              <span class="pl-2">
                • Rimani aggiornato
                <a class="text-action-500 hover:underline" href="https://www.facebook.com/events/353854243429800/"
                  rel="noopener noreferrer" title="evento facebook l'ultimo regno" alt="evento facebook l'ultimo regno"
                  target="_blank">
                  iscrivendoti all’evento!
                </a>
              </span>
              <br />
            </Info>
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
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta metus nibh, in rhoncus lacus
              fringilla in. Cras venenatis ullamcorper dui quis varius. Nulla condimentum, tortor vel convallis
              hendrerit, urna ligula venenatis sem, suscipit elementum sapien dui a lorem. Donec vitae lectus quis dolor
              sollicitudin cursus.
              <br />
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis sem ut
              nulla porta facilisis in sit amet elit. Fusce et aliquam orci, nec rhoncus leo. Praesent neque turpis,
              elementum nec massa ut, semper euismod ante. Duis laoreet imperdiet justo, nec hendrerit massa mollis non.
            </i>
          </p>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
