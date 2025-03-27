<script setup lang="ts">
import { ref, Ref } from 'vue'

import { useMeta } from '~/composables'

import type { MenuItemType } from '~/types'

import {
  backgroundLazyHd,
  backgroundHd,
} from '~/assets/images/events/il_simposio_di_lauriel_rose'

// USE
const { t } = useI18n()

// VARIABLES
const eventTitle = 'Il Simposio di Lauriel Rose'
const eventVenue = 'Edificio del XVIII secolo - Mandas'
const facebookEventUrl = 'https://www.facebook.com/events/605751015955934'
const subscriptionFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSebt3N9svXWk52lCWG8n79Pd09-GbsgpB2TfxeY7qM6NeiNxA/viewform'
const googleMapsUrl = "https://www.google.it/maps/place/39%C2%B039'14.2%22N+9%C2%B007'36.5%22E/@39.6539444,9.1242307,17z/data=!3m1!4b1!4m4!3m3!8m2!3d39.6539444!4d9.1268056?entry=tts&g_ep=EgoyMDI1MDMxMi4wIPu8ASoASAFQAw%3D%3D"
const subscriptionOpened = true
const subscriptionOpenDate = `17 Maggio 2025 14:00 - 23:00`
const subscriptionFormTooltip = subscriptionOpened
  ? 'Vai al form di iscrizione'
  : `Le iscrizioni apriranno a partire dal ${subscriptionOpenDate}`
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/il-simposio-di-lauriel-rose', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: '/events/future/il-simposio-di-lauriel-rose', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
  },
  {
    label: 'Altre info',
    to: { path: '/events/future/il-simposio-di-lauriel-rose', hash: '#altre-info' },
    tooltip: { content: 'Scrolla al paragrafo "Altre info"', placement: 'bottom' },
  },
  {
    label: 'Iscriviti al live',
    to: { path: '/events/future/il-simposio-di-lauriel-rose', hash: '#iscriviti-al-live' },
    tooltip: { content: 'Scrolla al paragrafo "Iscriviti al live"', placement: 'bottom' },
  },
]
const scrollThreshold = ref(200)

useMeta({
  title: 'Prossimo evento - L\'ultimo Regno',
  description: `${eventTitle} - evento LARP, 17 Maggio, ${eventVenue}`,
  keywords: ['larp', 'edificio', 'XVIII secolo', 'monte granatico', 'rievocazione storica'],
})

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height + (86 / 2)
}
</script>

<template>
  <section class="event-detail" itemscope itemtype="https://schema.org/Event">
    <Header ref="header" class="text-white-100" :image="backgroundHd" :lazy-image="backgroundLazyHd" height="400px"
      @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" :back-title="eventTitle">
          <template #cta>
            <Button class="w-[112px]" :class="{ ['animate__shake']: subscriptionOpened }" variant="filled"
              color="primary" size="small" tag="a" :href="subscriptionFormUrl" target="_blank"
              :disabled="!!loading || !subscriptionOpened" :tooltip="subscriptionFormTooltip">
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
              {{ eventTitle }}
            </h1>
            <h2 class="mb-4 w-full font-display text-2xl uppercase text-white-100 text-center" :class="'sm:text-left'">
              Secoli bui: L'ultimo Regno
            </h2>
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <InfoWhere class="w-full sm:w-auto" meta="indicazioni edificio mandas" :google-maps-url="googleMapsUrl"
              :label="eventVenue" />
            <InfoWhen class="w-full sm:w-auto" first-date="17/05/2025 14:00 - 23:00" />
            <InfoPrice class="w-full sm:w-auto">
              <InfoPriceItem :price="45.00">STANDARD</InfoPriceItem>
            </InfoPrice>
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
            Il momento è giunto! Squillino le trombe per “Il Simposio dei Lauriel Rose” il prossimo larp della
            campagna
            Secoli Bui: L'Ultimo Regno
            <br />
            La nobile famiglia dei Lauriel Rose ha il piacere di invitarvi al simposio che si terrà presso l'antica
            magione nelle terre di Louren. Il banchetto sarà seguito dall'elegante ballo in maschera. Sarà l'occasione
            per discutere di importanti questioni politiche che riguardano il futuro dei Cercatori di Verità e di tutta
            Braara!
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="altre-info" class="anchor">📖 Altre info</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <ul class="text-justify">
            <li>
              Per partecipare a questo evento devi essere sociə Mad2Factory. La quota associativa annuale è di € 5 -
              inclusi nel costo del live - e comprende l'assicurazione annuale 2025.
            </li>
            <li>
              Chiusura iscrizioni: 5 maggio o fino a esaurimento posti
            </li>
            <li>
              Parcheggio: la location è nella zona storica di Mandas, con vie strette. Sarà necessario parcheggiare a
              una certa distanza, dove trovate posto, e venire a piedi.
            </li>
            <li>
              Pg oneshot: disponibili 5 posti;
            </li>
            <li>
              🍴 Cena:
              • Nel costo dell'iscrizione è compresa la cena servita al tavolo.
              • Porta le tue posate. Lo staff fornirà piatti e bicchieri.
              • Segnalaci intolleranze o allergie alimentari nel gestionale al momento dell'iscrizione, faremo il
              possibile
              per venirti incontro.
            </li>
            <li>
              🕯 Luci: non occorrono, le zone di gioco sono illuminate.
            </li>
            <li>
              🛡 Armi: i personaggi non dovranno avere con sé nessuno scudo e non dovranno avere armi a vista, da corpo
              a corpo o a distanza.
            </li>
            <li>
              Noleggio attrezzature disponibile in <strong>Via col del rosso 36</strong>, le data di affitto verranno
              comunicate nell'<a :href="facebookEventUrl" target="_blank" alt="event facebook"
                title="event facebook">evento
                Facebook</a>
            </li>
          </ul>
        </Paragraph>
      </Article>
      <Article v-if="subscriptionOpened">
        <Paragraph>
          <h2 id="iscriviti-al-live" class="anchor">✒️ Iscriversi al live</h2>
        </Paragraph>
        <Paragraph class="pb-4 sm:pb-8 md:pb-8">
          <p class="text-justify">
            Ora non ti resta che iscriverti all'evento cliccando il pulsante
            <a class="pa-0 ma-0 decoration-none" :href="subscriptionFormUrl" target="_blank">
              <span class=" font-display text-lg font-bold">
                {{ t('common.subscribe') }}
              </span>
            </a> qui sotto, che ti porterà al modulo compilabile;
          </p>
        </Paragraph>
        <Paragraph class="flex justify-center w-full">
          <Button class="w-[112px] animate__shake decoration-none w-1/3" variant="filled" color="primary" tag="a"
            :href="subscriptionFormUrl" target="_blank" :disabled="!!loading" full-width
            :tooltip="subscriptionFormTooltip">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : t('common.subscribe') }}
            </span>
          </Button>
        </Paragraph>
      </Article>
      <Article v-else>
        <Paragraph>
          <h2 id="incipit" class="anchor">✒️ Iscriversi al live</h2>
        </Paragraph>
        <Paragraph class="pb-4 sm:pb-8 md:pb-8">
          <p class="text-justify">
            Le iscrizioni apriranno il <strong>{{ subscriptionOpenDate }}</strong>.
          </p>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
