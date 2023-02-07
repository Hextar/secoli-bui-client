<script setup lang="ts">
import { ref, Ref } from 'vue'

import { useMeta, useViewport } from '~/composables'

import {
  SignatureThumbnail,
} from '~/assets/images/events/cercatori_di_verita'

import type { MenuItemType } from '~/types'

import {
  backgroundLazyHd,
  backgroundHd,
} from '~/assets/images/events/cercatori_di_verita'

// USE
const { t } = useI18n()

const { isMobile } = useViewport()

useMeta({
  title: 'Prossimo evento - L\'ultimo Regno',
  description: 'Cercatori di verità - evento LARP, 12/13 Novembre al Castrum Romano',
  keywords: ['larp', 'sassari', 'castrum', 'romano', 'rievocazione storica'],
})

// VARIABLES
const scrollThreshold = ref(200)
const facebookEventUrl = 'https://www.facebook.com/events/467948275242751?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D%2C%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22edit_dialog%22%7D]%2C%22ref_notif_type%22%3Anull%7D'
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeAwrZF8Y_L7qOdKXX7ui1PyyVEMNPpBjto83uU5VNv1kx-mg/viewform'
const googleMapsUrl = 'https://www.google.com/maps?q=sassari+castrum+romano&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiR1PbogJT6AhXUO-wKHfDfBpIQ_AUoAnoECAEQBA'
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/cercatori-di-verita', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Incipit',
    to: { path: '/events/future/cercatori-di-verita', hash: '#incipit' },
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
    <Header ref="header" class="text-white-100" :image="backgroundHd" :lazy-image="backgroundLazyHd" height="400px"
      @resize:height="onHeaderHeightResize">
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
              Cercatori di Verità
            </h1>
            <h2 class="mb-4 w-full font-display text-2xl uppercase text-white-100 text-center" :class="'sm:text-left'">
              Secoli bui: L'ultimo Regno
            </h2>
          </div>
          <div class="flex w-full flex-wrap items-start justify-start gap-8">
            <InfoWhere class="w-full sm:w-auto" meta="indicazioni castrum romano" :google-maps-url="googleMapsUrl"
              label="Sassari - Castrum Romano" />
            <InfoWhen class="w-full sm:w-auto" first-date="12/11/2022 18:00 - 24:00"
              second-date="13/11/2022 11:00 - 17:00" />
            <InfoPrice class="w-full sm:w-auto" :price="30.00" :price-discounted="10.00" />
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
            Sono trascorsi 359 giorni dall’ultimatum che la Dama Pallida ha imposto al Regno di Braara. La notte
            del 12 di Ashantis ogni suddito del regno dovrà in cuor suo scegliere se stare dalla parte della Corona
            e della Chiesa dell’Unico, unendosi alle schiere del Sacro Baluardo, o se accettare il dominio della
            Dama e rivolgere la propria fede alla Fiamma Bianca e agli antichi dei.
            <br /><br />
            Nelle bacheche di ogni città del regno nelle ultime settimane sono apparsi inviti rivolti a tutta la
            popolazione che recitano:
          </p>
        </Paragraph>
        <Parchment>
          <template #content>
            <Paragraph>
              <p class="text-justify">
                <i>
                  Il Tempo dell’oscurità è terminato.
                </i>
              </p>
            </Paragraph>
            <Paragraph>
              <p class="text-justify">
                <i>
                  Il nostro regno brancola nel buio dell’ignoranza da troppo tempo, spesso guidato da signori
                  accecati dal potere e ottenebrati dal denaro, quando il bene più grande che le genti libere
                  possiedano è quello della Verità.
                </i>
              </p>
            </Paragraph>
            <Paragraph>
              <p class="text-justify">
                <i>
                  In data 12 e 13 Ashantis, presso Forte Oath, nei territori di Rocca d’Avorio, il Magnate,
                  studioso ed eccelso cittadino Rodrigo de Leon di Velantes, sarà lieto di accogliere tutti coloro
                  che sono assetati di verità e che non temono di intraprendere un viaggio in questo periodo di
                  incertezze. Per l’occasione, numerosi eroi della Spedizione oltre il Re Bianco, salvatori di Braara
                  e di tutte le genti, saranno presenti per testimoniare ciò che hanno visto nei loro lunghi viaggi.
                </i>
              </p>
            </Paragraph>
            <Paragraph>
              <p class="text-justify">
                <i>
                  Se l’illuminazione è la vostra meta e se siete stanchi di vivere nella menzogna, recatevi presso
                  Forte Oath e i vostri occhi verranno spalancati dalla più pura e grande verità che sia mai
                  fuoriuscita dalle labbra di un uomo.
                </i>
              </p>
            </Paragraph>
          </template>
          <template #signature>
            <Image :src="getAssetPath('signature.png')" :width="imageWidth" title="Rodrigo de Leon"
              alt="Rodrigo de Leon" />
          </template>
        </Parchment>
        <Paragraph>
          <p class="text-justify">
            La fama di Rodrigo de Leon, conosciuto ai più per le sue idee controverse e i suoi comportamenti
            fuori dall’ordinario, ha tenuto i più lontani dal suo invito, ma alcuni hanno intravisto nelle sue parole
            la possibilità di essere protagonisti di un evento fuori dall’ordinario, qualcosa che plasmerà il futuro
            delle genti e così hanno deciso di mettersi in viaggio, alla volta del famoso forte avoriano.
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
            se sei interessato alle convenzioni hotel potrai selezionarle all'interno del modulo al
            paragrafo <strong>Pernotto</strong>.
            <br /><br />
            Nella seconda pagina del modulo potrai inserire le informazioni riguardanti il tuo personaggio, che sia
            importato dal
            precedente capitolo o un personaggio interamente nuovo.
            <br /><br />
            Potrai inoltre scegliere i <strong>Fili del fato</strong> visionabili alla <a
              class="pa-0 ma-0 decoration-none" href="/contents/board-of-fate" target="_blank">
              <span class=" font-display text-lg font-bold text-primary-500">
                pagina dedicata
              </span>
            </a>.
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
