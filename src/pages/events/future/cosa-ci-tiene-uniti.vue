<script setup lang="ts">
import { ref, Ref } from 'vue'

import { useMeta, useViewport } from '~/composables'

import {
  SignatureThumbnail,
} from '~/assets/images/events/cercatori_di_verita'

import { IconClock, IconFacebook, IconMoney, IconPin } from '~/assets/icons'
import type { MenuItemType } from '~/types'

import {
  backgroundLazyLogoHd,
  backgroundLogoHd,
} from '~/assets/images'

// USE
const { t } = useI18n()

const { isMobile } = useViewport()

useMeta({
  title: 'Prossimo evento - L\'ultimo Regno',
  description: 'Cosa ci tiene uniti - evento LARP, 12 Marzo alla Cantina Ferraris',
  keywords: ['larp', 'villacidro', 'cantina', 'ferraris', 'rievocazione storica'],
})

// VARIABLES
const scrollThreshold = ref(200)
const facebookEventUrl = 'https://www.facebook.com/events/730379748409247'
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfzTKwWEoszHbfKSwuQEMfYHiBR1Ea_xJmvu6joFyEZh2yKBg/viewform?fbclid=IwAR1cfL78C1utJIydqi5wh9jo9IuOrg0wBkoxIH7ULFTgPTIkTMbD2GbIYWk'
const googleMapsUrl = 'https://www.google.com/maps/place/Cantina+Ferraris/@39.4010464,8.648073,300m/data=!3m1!1e3!4m5!3m4!1s0x12e7721017853c5f:0x5d1708cdaeadb6b9!8m2!3d39.4011832!4d8.6483298'
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/cosa-ci-tiene-uniti', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: '/events/future/cosa-ci-tiene-uniti', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
  }
]

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height + (86 / 2)
}
</script>

<template>
  <section class="event-detail" itemscope itemtype="https://schema.org/Event">
    <Header ref="header" class="text-white-100" :image="backgroundLogoHd" :lazy-image="backgroundLazyLogoHd"
      height="400px" @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" back-title="Cercatori di Verità">
          <template #cta>
            <Button class="w-[112px] animate__shake" variant="filled" color="primary" size="small" tag="a"
              :href="googleFormUrl" target="_blank" :disabled="!!loading" tooltip="Vai al Google form di iscrizione">
              <span class="font-display text-lg font-bold">
                {{ loading? t('common.loading'): t('common.subscribe') }}
              </span>
            </Button>
          </template>
        </MenuDetail>
      </template>
      <template #content>
        <div id="info" class="anchor flex flex-col items-start justify-center pb-0 sm:pb-8 pt-16">
          <div class="mb-8 flex flex-col" itemprop="name">
            <h1 class="event-title mb-4 font-display text-6xl text-white-100 text-center">
              Cosa ci tiene uniti
            </h1>
            <h2 class="mb-4 w-full font-display text-2xl uppercase text-white-100 text-center" :class="'sm:text-left'">
              Secoli bui: L'ultimo Regno
            </h2>
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <Info class="w-full sm:w-auto" label="Dove">
              <template #icon>
                <IconPin />
              </template>
              <br />
              <span class="pl-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
                •
                <a class="text-action-500 hover:underline" :href="googleMapsUrl" rel="noopener noreferrer"
                  title="indicazioni castrum romano" alt="indicazioni castrum romano" target="_blank">
                  <span itemprop="name address">Villacidro - Cantina Ferraris</span>
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
                • 12/03/2023 11:00 - 17:00
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
                STANDARD </span><br />
              <span class="pl-2">
                • <span itemprop="price" content="10.00">10</span><span itemprop="priceCurrency" content="EUR">€</span>
                PAGO COL SANGUE </span><br />
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Evento FB">
              <template #icon>
                <IconFacebook />
              </template>
              <br />
              <span class="pl-2">
                • Rimani aggiornato
                <Button class="text-action-500 hover:underline" variant="filled" color="transparent" size="small"
                  tag="a" :href="facebookEventUrl" target="_blank">iscrivendoti
                  all’evento!</Button>
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
            L’illusione della ragione si è scontrata contro un muro insormontabile. Ciò che avete visto, ciò che avete
            sentito, non è argomento a cui chiunque, dotato di buon senso voglia approcciarsi.
            Ma voi, volenti o nolenti, ci avete fatto i conti.
            <br /><br />
            Le conseguenze di quanto accaduto a forte Oath non hanno tardato ad arrivare. La scomparsa di un prosecutore
            della Sacra Torre, la comparsa della Dama Pallida, le parole di Rodrigo de Leon. Tramite racconti,
            testimonianze e interrogatori dei superstiti, le indagini sull’accaduto hanno preso forma e in breve siete
            diventati il principale bersaglio dei segugi dell’inquisizione.
            <br /><br />
            Alcuni di voi, consci dell’essere nel giusto, si sono consegnati spontaneamente, altri sono stati traditi da
            coloro che reputavano amici e a cui avevano fatto scomode confidenze, i più pericolosi sono stati raggiunti
            in forze e costretti alla resa a pena della propria vita.
            <br /><br />
            Catene sono state messe ai vostri polsi e nell’arco del lungo viaggio i vostri aguzzini si sono incontrati
            con altri gruppi, che avevano con se altri prigionieri.
            <br /><br />
            Nei giorni sempre più volti, già visti a Forte Oath, si aggiungevano alle vostre fila, in una lunga marcia
            verso una destinazione ignota.
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
            </a> qui sotto, che
            ti porterà al modulo compilabile;
          </p>
        </Paragraph>
        <Paragraph class="flex justify-center w-full">
          <Button class="w-[112px] animate__shake decoration-none w-1/3" variant="filled" color="primary" tag="a"
            :href="googleFormUrl" target="_blank" :disabled="!!loading" full-width
            tooltip="Vai al Google form di iscrizione">
            <span class="font-display text-lg font-bold">
              {{ loading? t('common.loading'): t('common.subscribe') }}
            </span>
          </Button>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
