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
  description: 'I cercatori di verità - evento LARP, 12/13 Novembre al Castrum Romano',
  keywords: ['larp', 'sassari', 'castrum', 'romano', 'rievocazione storica'],
})

// VARIABLES
const scrollThreshold = ref(200)
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Info',
    to: { path: '/events/future/i-cercatori-di-verita', hash: '#info' },
    tooltip: {
      content: 'Scrolla al paragrafo "Informazioni"',
      placement: 'bottom',
    },
    homepage: true,
  },
  {
    label: 'Incipit',
    to: { path: '/events/future/i-cercatori-di-verita', hash: '#incipit' },
    tooltip: { content: 'Scrolla al paragrafo "Incipit"', placement: 'bottom' },
    homepage: true,
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
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" back-title="La Pesca dei Burattini">
          <template #cta>
            <Tooltip placement="bottom">
              <template #trigger>
                <CustomButton class="w-[112px]" variant="filled" color="primary" size="small" tag="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeAwrZF8Y_L7qOdKXX7ui1PyyVEMNPpBjto83uU5VNv1kx-mg/viewform"
                  target="_blank" :disabled="!!loading">
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
            <h1 class="event-title mb-4 font-display text-6xl text-white-100 text-center">
              I Cercatori di Verità
            </h1>
            <h2 class="mb-4 w-full font-display text-2xl uppercase text-white-100 text-center" :class="'sm:text-left'">
              Campagna: L'ultimo Regno
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
                <CustomButton class="text-action-500 hover:underline" variant="filled" color="transparent" size="small"
                  tag="a" href="" target="_blank" :disabled="true">iscrivendoti all’evento!</CustomButton>
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
            Nelle bachece di ogni città del regno nelle ultime settimane sono apparsi inviti rivolti a tutta la
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
            <CustomImage :src="getAssetPath('signature.png')" :width="imageWidth" title="Rodrigo de Leon"
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
    </div>
  </section>
</template>
