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
  description: "Tra l'incudine e il martello - evento LARP, 8 Luglio",
  keywords: ['larp', 'ales', 'acqua', 'fresca', 'rievocazione storica'],
})

// VARIABLES
const scrollThreshold = ref(200)
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/tra-incudine-martello', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: '/events/future/tra-incudine-martello', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
  }
]

// COMPUTED
const imageWidth = computed((): number => {
  return isMobile.value ? 240 : 160
})

// METHODS
const getAssetPath = (value: string): string => {
  const assets = new Map<string, any>([
    ['signature.png', SignatureThumbnail],
  ])
  return assets.get(value)
}

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
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAwrZF8Y_L7qOdKXX7ui1PyyVEMNPpBjto83uU5VNv1kx-mg/viewform"
              target="_blank" :disabled="!!loading" tooltip="Vai al Google form di iscrizione">
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
              Tra l'incudine e il Martello
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
                <a class="text-action-500 hover:underline"
                  href="https://www.google.com/maps?q=sassari+castrum+romano&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiR1PbogJT6AhXUO-wKHfDfBpIQ_AUoAnoECAEQBA"
                  rel="noopener noreferrer" title="indicazioni castrum romano" alt="indicazioni castrum romano"
                  target="_blank">
                  <span itemprop="name address">Ales - S'Aqua Frida</span>
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
                • 08/07/2023 18:00 - 24:00
              </time>
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Quota" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
              <template #icon>
                <IconMoney />
              </template>
              <br />
              <span class="pl-2">
                • <span itemprop="price" content="40.00">50</span><span itemprop="priceCurrency" content="EUR">€</span>
                AL GIORNO (STANDARD+CENA IN RUOLO) </span><br />
              <span class="pl-2">
                • <span itemprop="price" content="10.00">10</span><span itemprop="priceCurrency" content="EUR">€</span>
                AL GIORNO (PAGO COL SANGUE) </span><br />
              <br />
            </Info>
            <Info class="w-full sm:w-auto" label="Evento FB">
              <template #icon>
                <IconFacebook />
              </template>
              <br />
              <span class="pl-2">
                • Rimani aggiornato
                <Button class="text-action-500 hover:underline" variant="filled" color="transparent" size="small" tag="a"
                  href="https://www.facebook.com/events/467948275242751?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D%2C%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22edit_dialog%22%7D]%2C%22ref_notif_type%22%3Anull%7D"
                  target="_blank">iscrivendoti all’evento!</Button>
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
            Sono trascorsi 359 giorni dall’ultimatum che la Dama Pallida ha imposto al Regno di Braara. La notte
            del 12 di Ashantis ogni suddito del regno dovrà in cuor suo scegliere se stare dalla parte della Corona
            e della Chiesa dell’Unico, unendosi alle schiere del Sacro Baluardo, o se accettare il dominio della
            Dama e rivolgere la propria fede alla Fiamma Bianca e agli antichi dei.
            <br /><br />
            Nelle bacheche di ogni città del regno nelle ultime settimane sono apparsi inviti rivolti a tutta la
            popolazione che recitano:
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
            <a class="pa-0 ma-0 decoration-none"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQ_B-UcpJj_NAAFKiCELUA5xON_Un96V9OEEVmaX_Tnau2MQ/viewform"
              target="_blank">
              <span class=" font-display text-lg font-bold">
                {{ t('common.subscribe') }}
              </span>
            </a> qui sotto, che ti porterà al modulo compilabile;
          </p>
        </Paragraph>
        <Paragraph class="flex justify-center w-full">
          <Button class="w-[112px] animate__shake decoration-none w-1/3" variant="filled" color="primary" tag="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeQ_B-UcpJj_NAAFKiCELUA5xON_Un96V9OEEVmaX_Tnau2MQ/viewform"
            target="_blank" :disabled="!!loading" full-width="" tooltip="Vai al Google form di iscrizione">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : t('common.subscribe') }}
            </span>
          </Button>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
