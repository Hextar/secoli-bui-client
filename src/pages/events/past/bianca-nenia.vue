<script setup lang="ts">
import { ref, Ref } from 'vue'

import { useMeta } from '~/composables'

import type { MenuItemType } from '~/types'

import {
  backgroundLazyHd,
  backgroundHd,
} from '~/assets/images/events/bianca_nenia'

// USE
const { t } = useI18n()

// VARIABLES
const eventTitle = 'Bianca Nenia'
const eventVenue = 'Fortificazioni monte Doglia - Alghero'
const facebookEventUrl = 'https://www.facebook.com/events/1651984295378718?ref=newsfeed'
const subscriptionFormUrl = 'http://www.mondoditenebra.com/mad2factory/index.php?PaginaHome=SecoliBui%2Flogin&SezioneSito=SecoliBui&fbclid=IwY2xjawEhp0dleHRuA2FlbQIxMAABHc-Jv8FXTw8NIskSUFaS7I0iNdVOfKfdscN175XEeaKTCy5JO1lorhjhOg_aem_4FCm4F_ZmuuvxKNiN5CK2Q'
const googleMapsUrl = 'https://maps.app.goo.gl/HqXWr434j9Pu6HJT8'
const subscriptionOpened = true
const subscriptionOpenDate = `19 Agosto 2024`
const subscriptionEarlyDate = `31 Agosto 2024`
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
  }
]
const scrollThreshold = ref(200)

useMeta({
  title: 'Prossimo evento - L\'ultimo Regno',
  description: `${eventTitle} - evento LARP, 126/27 Ottobre, ${eventVenue}`,
  keywords: ['larp', 'fortificazione', 'monte', 'doglia', 'rievocazione storica'],
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
            <InfoWhere class="w-full sm:w-auto" meta="indicazioni cantina ferraris" :google-maps-url="googleMapsUrl"
              :label="eventVenue" />
            <InfoWhen class="w-full sm:w-auto" first-date="26/10/2024 16:00 - 23:00"
              second-date="27/10/2024 10:00 - 17:00" />
            <InfoPrice class="w-full sm:w-auto">
              <InfoPriceItem :price="90.00">STANDARD</InfoPriceItem>
              <InfoPriceItem :price="70.00">Iscrizione entro il {{ subscriptionEarlyDate }}</InfoPriceItem>
              <InfoPriceItem :price="20.00">Pago col sangue (10 posti al giorno)</InfoPriceItem>
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
            Con l'oscurità che avanza su Braara e l'antima che pervade il mondo, i Cercatori di Verità hanno fatto una
            scoperta straordinaria: il luogo leggendario dove Klaus Brownmantle, il primo necromante della storia, aveva
            la sua dimora
            <br />
            È qui che Klaus trasformò sua moglie, Katrina, nel primo vampiro ed è qui che la donna, al suo
            risveglio dalla non-morte, uccise il suo creatore.
            <br />
            Ora, i Cercatori si dirigono verso questo luogo con la
            speranza di ritrovare il Libro Nero di Klaus per acquisire nuove conoscenze e indizi che possano aiutarli a
            sconfiggere la temibile Dama Pallida.
          </p>
        </Paragraph>
      </Article>
      <Article>
        <Paragraph>
          <h2 id="incipit" class="anchor">📖 Altre info</h2>
        </Paragraph>
        <Paragraph class="mb-4">
          <ul class="text-justify">
            <li>
              L'iscrizione include i pasti per la cena di sabato e pranzo di domenica;
            </li>
            <li>
              Pago col sangue: iscrizione promo a €20 per max 10 persone al giorno. Staff per un giorno compreso
              montaggio o smontaggio in base al giorno scelto;
            </li>
            <li>
              Pg oneshot: disponibili 6 posti;
            </li>
            <li>
              Noleggio attrezzature disponibile in <strong>Via col del rosso 36</strong>, le data di affitto verranno
              comunicate nell'<a :href="facebookEventUrl" target="_blank" alt="event facebook"
                title="event facebook">evento
                Facebook</a>
            </li>
            <li>
              Pernottamento: in fase di valutazione;
            </li>
          </ul>
        </Paragraph>
      </Article>
      <Article v-if="subscriptionOpened">
        <Paragraph>
          <h2 id="incipit" class="anchor">✒️ Iscriversi al live</h2>
        </Paragraph>
        <Paragraph class="pb-4 sm:pb-8 md:pb-8">
          <p class="text-justify">
            Ora non ti resta che iscriverti all'evento cliccando il pulsante
            <a class="pa-0 ma-0 decoration-none" :href="subscriptionFormUrl" target="_blank">
              <span class=" font-display text-lg font-bold">
                {{ t('common.subscribe') }}
              </span>
            </a> qui sotto, che
            ti porterà al modulo compilabile;
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
