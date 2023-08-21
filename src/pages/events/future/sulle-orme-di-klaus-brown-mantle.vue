<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useMeta } from '~/composables'
import type { MenuItemType } from '~/types'
import {
  backgroundLazyHd,
  backgroundHd,
} from '~/assets/images/events/sulle_orme_di_klaus_brown_mantle'

const title = 'Sulle Orme di Klaus Brownmantle'
const path = 'sulle-orme-di-klaus-brown-mantle'
const bookingExpiration = '03/09/2023'

// USE
const { t } = useI18n()
useMeta({
  title: 'Prossimo evento - L\'Ultimo Regno',
  description: 'Sulle Orme di Klaus Brownmantle - evento LARP, 29 Ottobre Marzo alla Cantina Ferraris',
  keywords: ['larp', 'villacidro', 'cantina', 'ferraris', 'rievocazione storica'],
})

// VARIABLES
const scrollThreshold = ref(200)
const facebookEventUrl = 'https://www.facebook.com/events/265777596238501'
const googleFormUrl = 'https://tinyurl.com/iscrizionelive2023'
const googleMapsUrl = "https://www.google.com/maps/place/39%C2%B007'32.1%22N+8%C2%B026'27.4%22E/@39.1256265,8.438438,2283m/data=!3m1!1e3!4m6!3m5!1s0!7e2!8m2!3d39.1255724!4d8.440949"
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: `/events/future/${path}`, hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: `/events/future/${path}`, hash: '#incipit' },
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
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" :back-title="title">
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
              {{ title }}
            </h1>
            <h2 class="mb-4 w-full font-display text-2xl uppercase text-white-100 text-center" :class="'sm:text-left'">
              Secoli bui: L'Ultimo Regno
            </h2>
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <InfoWhere class="w-full sm:w-auto" meta="indicazioni matzaccara" :google-maps-url="googleMapsUrl"
              label="Matzaccara - San Giovanni Suergiu" />
            <InfoWhen class="w-full sm:w-auto" first-date="29/10/2023 11:00 - 17:00" />
            <InfoPriceSale class="w-full sm:w-auto" :price="{ sale: 35.00, full: 50.00 }"
              :price-under-25="{ sale: 20.00, full: 25.00, label: 'Giocatori under 25' }" />
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
            Dopo mesi trascorsi a fuggire, una sola cosa è chiara: tanto le forze del Sacro Baluardo, quanto quelle della
            Fiamma Bianca vogliono la vostra testa su una picca. Solo la rete dei Cercatori di Verità può proteggervi e
            così
            ha cercato di fare fino a ora.
          </p>
          <p class="text-justify">
            Dopo lunghi viaggi e infiniti pericoli, è finalmente arrivato il momento di reagire. Braara è sull'orlo della
            rovina. La guerra civile infuria e ovunque si vedono i segni dell'inesorabile declino della Magia.
          </p>
          <p class="text-justify">
            Grazie al vostro operato, ora i cercatori hanno una risorsa estremamente preziosa: Sir Yegor Stahl, ex giurato
            servitore della famiglia De Coulaivre, ha preso coscienza all'insaputa della sua creatrice, la Dama Pallida in
            persona. A seguito di questo inspiegabile avvenimento è entrato in contatto con la Dama, con i suoi pensieri,
            desideri e comandi. All'insaputa dell'oscura signora, ora i Cercatori possono prevedere alcune delle sue
            mosse,
            ma soprattuto cogliere frammenti dei suoi pensieri.
          </p>
          <p class="text-justify">
            Una notte, dopo uno stato di trance durato diverse ore, Sir
            Yegor ha affermato di aver vissuto un vero e proprio sogno, nel quale apparivano vivide le lussureggianti
            coste
            di Velantes, assieme a una manciata di punti di riferimento e a un nome: Klaus Brownmantle, il primo
            necromante,
            creatore della Dama e secondo la leggenda sua prima vittima.
          </p>
          <p class="text-justify">
            Se davvero c'è un modo per opporsi alla bianca signora, se mai è esistito qualcuno che conosce la sua storia e
            la sua natura, quello è il perduto Klaus Brownmantle. Qualsiasi traccia lasciata dall'uomo deve essere trovata
            e
            seguita fino alla sua fonte, nella speranza di riportare ai Cercatori informazioni utili e preziose.
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
          <p class="text-justify">

            Ricorda che fino alla mezzanotte del <strong>{{ bookingExpiration }}</strong> potrai iscriverti ad un prezzo
            scontato e che inoltre
            a tutti i giocatori al di sotto dei 25
            è riservata una quota ulteriormente ridotta.
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
