<script setup lang="ts">
import { ref, Ref } from 'vue'

import { useMeta } from '~/composables'

import type { MenuItemType } from '~/types'

import {
  backgroundLazyHd,
  backgroundHd,
} from '~/assets/images/events/il_circolo_di_conoscenza'

// USE
const { t } = useI18n()

// VARIABLES
const eventTitle = 'Il Circolo di Conoscenza'
const facebookEventUrl = 'https://www.facebook.com/events/437299868859522?locale=it_IT'
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSexfG7V7H4itkhab0QZ98gnwTd8MgPGpHOxNT6qCp76fC-TpA/viewform'
const googleMapsUrl = 'https://www.google.com/maps/place/Cantina+Ferraris/@39.4010464,8.648073,300m/data=!3m1!1e3!4m5!3m4!1s0x12e7721017853c5f:0x5d1708cdaeadb6b9!8m2!3d39.4011832!4d8.6483298'
const subscriptionOpened = true
const subscriptionOpenDate = `06 Aprile 2024`
const subscriptionEarlyDate = `21 Aprile 2024`
const googleFormTooltip = subscriptionOpened
  ? 'Vai al Google form di iscrizione'
  : `Le iscrizioni apriranno a partire dal ${subscriptionOpenDate}`
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/il-circolo-di-conoscenza', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: '/events/future/il-circolo-di-conoscenza', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
  }
]
const scrollThreshold = ref(200)

useMeta({
  title: 'Prossimo evento - L\'ultimo Regno',
  description: `${eventTitle} - evento LARP, 19 Maggio alle Cantina Ferraris`,
  keywords: ['larp', 'villacidro', 'cantina', 'ferraris', 'rievocazione storica'],
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
            <Button class="w-[112px] animate__shake" variant="filled" color="primary" size="small" tag="a"
              :href="googleFormUrl" target="_blank" :disabled="!!loading || !subscriptionOpened"
              :tooltip="googleFormTooltip">
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
              label="Villacidro - Cantina Ferraris" />
            <InfoWhen class="w-full sm:w-auto" first-date="19/05/2024 9:30 - 17:30" />
            <InfoPrice class="w-full sm:w-auto">
              <InfoPriceItem :price="50.00">STANDARD</InfoPriceItem>
              <InfoPriceItem :price="40.00">Iscrizione entro il {{ subscriptionEarlyDate }}</InfoPriceItem>
              <InfoPriceItem price="GRATIS">Pago col sangue (posti limitati)</InfoPriceItem>
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
            Da quando i Cercatori di Verità sono usciti allo scoperto, una caccia spietata si è scatenata nei
            confronti dei loro affiliati. Le conoscenze da essi diffuse a Braara sono in grado di far crollare
            l’ordine costituito e né il Sacro Baluardo né la Fiamma Bianca possono permettersi che ciò
            che garantisce loro potere sia messo in discussione.
            <br />
            Dopo mesi trascorsi in una fuga costante, in molti sono stati fatti prigionieri, torturati e
            giustiziati in quanto colpevoli unicamente di conoscere la verità. Ma questa secolare
            organizzazione ha radici profonde ed è pronta a difendersi, o addirittura a contrattaccare.
            <br />
            Il principio su cui si basano i Cercatori è la conoscenza. Senza di essa ogni scopo è vano e
            ogni tentativo destinato a fallire. Per questo alcuni dei più illustri esponenti del gruppo hanno
            deciso che ogni nuovo cercatore dovrà essere istruito sulle verità riguardanti la storia, la
            politica e le numerose arti che rendono Braara così potente e meravigliosa.
            <br />
            Nelle terre di Dorsten, presso la neonata sede dell'agenzia di investigazione e sterminio di
            mostri esotici “Sullivan e Amici”, i Cercatori hanno deciso di portare avanti questo compito
            fondamentale. In altri luoghi di Braara posti simili vengono attrezzati per divenire delle vere
            e proprie accademie, dove illustri maestri di tutte le gilde affiliati ai Cercatori elargiscono la
            propria esperienza a coloro che dovranno presto lottare per la loro sopravvivenza, se non per
            quella di tutto il regno.
            <br />
            Le ultime cerche hanno portato informazioni importanti, che rendono necessario pianificare
            con accortezza le prossime mosse.
            Conoscere, Decidere, Agire, in questo preciso ordine. il rinvenimento dei resti di Klaus
            Brownmantle e la scoperta del luogo in cui ha portato avanti i suoi studi sulla necromanzia
            sono quanto di più importante i Cercatori abbiano tra le mani al momento, ma per percorrere
            questa via dovranno avere la certezza che ognuno sia preparato a ciò che lo attende.
          </p>
          <hr />
          <p>
            Il Circolo della Conoscenza è un evento pensato per tutti coloro che amano il gioco delle
            Gilde, vere protagoniste del prossimo capitolo della campagna. Addestramenti, lezioni e
            nuove verità verranno diffuse dai più esperti Cercatori di Verità e ogni Gilda invierà
            reclutatori, valutatori e istruttori per garantirsi che solo i migliori possano proseguire negli
            studi che condurranno a svelare la vera storia di Braara.
            <br />
            Questo evento è stato pensato per essere facilmente fruibile tanto dai nuovi giocatori, quanto
            da quelli più esperti. Se da un lato i primi avranno modo di affacciarsi all'ambientazione e
            impratichirsi nella professione scelta, dall'altro i secondi rivestiranno il ruolo di istruttori,
            diventando talvolta anch/essi allievi al cospetto di grandi maestri delle gilde e siederanno al
            tavolo delle decisioni per pianificare le prossime mosse che li condurranno a seguire ancora
            una volta le orme di Klaus Brownmantle.
          </p>
        </Paragraph>
      </Article>
      <Article v-if="subscriptionOpened">
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
            :href="googleFormUrl" target="_blank" :disabled="!!loading" full-width :tooltip="googleFormTooltip">
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
            Le iscrizioni apriranno il <strong>{{ subscriptionOpenDate }}</strong>, in concomitanza con il primo giorno
            del Giocomix.
          </p>
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
