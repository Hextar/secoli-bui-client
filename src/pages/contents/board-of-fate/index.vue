<script setup lang="ts">
import { ref, Ref } from 'vue'

import { useMeta } from '~/composables'

import { IconRandom } from '~/assets/icons'
import {
  fatoHd
} from '~/assets/images'

import { shuffleArray } from '~/utils/array'

type FateItem = {
  label: string,
  disabled: boolean
}

// USE
useMeta({
  title: 'Manuali',
  description: 'scopri il regolamento ufficiale di Secoli Bui',
})

const { t } = useI18n()

// VARIABLES
const scrollThreshold = ref(200)
const loading = ref(false)
const ITEMS: FateItem[] = [
  { label: 'Agire prima di pensare', disabled: true },
  { label: 'Amore Perduto', disabled: false },
  { label: 'Canto dell\'oro', disabled: true },
  { label: 'Condotto dal Fato', disabled: true },
  { label: 'Dalla Regia Accademia', disabled: false },
  { label: 'Dalle stelle alle stalle', disabled: false },
  { label: 'Debito di morte', disabled: false },
  { label: 'Eterno Secondo', disabled: false },
  { label: 'Fede che vacilla', disabled: false },
  { label: 'Fortuna sospetta', disabled: true },
  { label: 'Il buio', disabled: false },
  { label: 'Il cinico perduto', disabled: false },
  { label: 'Il Desiderato', disabled: false },
  { label: 'Il giorno', disabled: false },
  { label: 'Il girasole', disabled: false },
  { label: 'Il glicine', disabled: false },
  { label: 'Il mare', disabled: false },
  { label: 'Il prato', disabled: false },
  { label: 'Il risvegliato', disabled: false },
  { label: 'Il Samaritano', disabled: false },
  { label: 'Il sangue', disabled: false },
  { label: 'Il segugio', disabled: true },
  { label: 'Il sogno dello sconfitto', disabled: true },
  { label: 'Il sole', disabled: false },
  { label: 'Il sussurro inaccolto', disabled: false },
  { label: 'Il timore del fuoco', disabled: false },
  { label: 'Il Vil denaro', disabled: true },
  { label: 'In Carriera', disabled: false },
  { label: 'L\'affranco si paga', disabled: false },
  { label: 'L\'ala dell\'usignolo', disabled: true },
  { label: 'L\'ambizione sbagliata', disabled: true },
  { label: 'L\'Avidità', disabled: false },
  { label: 'L\'avventuriero senza sole', disabled: true },
  { label: 'L\'impiccato', disabled: true },
  { label: 'L\'ira delle catene', disabled: false },
  { label: 'L\'ombra che vegliava', disabled: true },
  { label: 'L\'oro non ha odore', disabled: true },
  { label: 'L\'uomo/donna delle offerte', disabled: true },
  { label: 'L\'Urlo Iniquo', disabled: false },
  { label: 'La bottiglia incendiaria', disabled: false },
  { label: 'La Creatività ci piace', disabled: true },
  { label: 'La curiosità che non uccide', disabled: true },
  { label: 'La fine della freccia', disabled: false },
  { label: 'La Giustizia', disabled: true },
  { label: 'La Linfa', disabled: true },
  { label: 'La mia fetta', disabled: true },
  { label: 'La Perfidia', disabled: false },
  { label: 'La Sapienza su tutto', disabled: false },
  { label: 'La Sete di Potere', disabled: false },
  { label: 'La spalla', disabled: true },
  { label: 'La torre che arde', disabled: true },
  { label: 'La Vendetta', disabled: true },
  { label: 'La virtù dei forti', disabled: false },
  { label: 'Lama al guinzaglio', disabled: true },
  { label: 'Liberi nella morte', disabled: false },
  { label: 'Mani in pasta', disabled: false },
  { label: 'Nel posto giusto', disabled: true },
  { label: 'Nel vivo del gelo', disabled: true },
  { label: 'Nuovo Sceriffo', disabled: false },
  { label: 'Ode al Sangue Blu', disabled: true },
  { label: 'Omertà', disabled: true },
  { label: 'Pugni insanguinati', disabled: true },
  { label: 'Scimmia a Tre Teste', disabled: true },
  { label: 'Segugio dello stato', disabled: true },
  { label: 'Sogno di Fama', disabled: true },
  { label: 'Un\'altra vita', disabled: true },
  { label: 'Uno per tutti', disabled: true },
  { label: 'Verso la Vetta', disabled: true },
]
const items: Ref<FateItem[]> = ref(ITEMS)

// COMPUTED
const filteredItems = computed((): FateItem[] => {
  return items.value
})

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height - (86 / 2)
}

const onRandom = () => {
  setTimeout(() => loading.value = false, 1200)
  setTimeout(() => items.value = shuffleArray(ITEMS.filter(({ disabled }) => !disabled), 3), 600)
  loading.value = true
}
</script>
    
<template>
  <div class="board-of-fate pb-16 bg-white-100">
    <Header ref="header" class="board-of-fate__header text-white-100" :image="fatoHd" height="420px" darkest
      @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" />
      </template>
      <template #content>
        <div id="title" class="flex flex-col items-center justify-center">
          <div class="flex h-[336px] items-center" itemprop="title">
            <h1 class="event-title font-display text-6xl text-white-100 text-center">Bacheca del fato</h1>
          </div>
        </div>
      </template>
    </Header>
    <div class="board-of-fate__content cbg-white-100" itemprop="description">
      <Article full-width>
        <span class="flex justify-between items-end">
          <Paragraph>
            <h2 id="incipit" class="anchor">🧵 Scegli un Filo del fato!</h2>
          </Paragraph>
          <Tooltip class="cursor-item" placement="top">
            <template #trigger>
              <span class="animate_spin">
                <IconRandom class="h-[48px] w-[48px] mb-2 mr-4 cursor-pointer"
                  :class="{ 'animate__shake': !loading, 'animate__spin': loading }" @click="onRandom" />
              </span>
            </template>
            {{ t('random.label') }}
          </Tooltip>
        </span>
        <Paragraph>
          <p class="text-justify">
            <strong>DI COSA SI TRATTA?</strong>
            <br />
            Le pergamene che troverai qui sotto daranno inizio a legami e conflitti, aggiungendo tratti di
            background e creando più gioco per i vostri personaggi.
            <br /><br />
            <strong>COME FUNZIONA?</strong>
            <br />
            Avete la possibilità di scegliere <strong>3 fili</strong> dalla bacheca, che ci potrete comunicare quando
            compilerete il modulo d’iscrizione.
            Lo staff vi assegnerà, cercando di accontentare tutti, uno solo dei 3 fili scelti entro pochi giorni e
            assieme
            ad esso le informazioni complete di questo piccolo frammento di background che dovrete integrare a vostro
            piacere nella storia personale del vostro personaggio.
            <br /><br />
            <strong>SCELTE E SCADENZA</strong>
            <br />
            Il <strong>1 ottobre 2022</strong> verrà assegnato il primo round di fili del fato a chi ha già inviato la
            scheda ed espresso le proprie preferenze.

            Da tale data in poi <strong>ogni settimana</strong> i fili a disposizione diminuiranno. Non temete: terremo
            traccia sul sito di quelli non più disponibli.
            <br /><br />
            Scegliete com saggezza o, se siete indecisi, fatevi consigliare dal fato cliccando il dado qui sopra!
          </p>
        </Paragraph>
        <div class="flex flex-wrap justify-center sm:justify-start items-center w-full my-8">
          <ScrollCard v-for="(item, idx) in filteredItems" :key="`${item.label}-${idx}`"
            class="board-of-fate__content__item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 pr-0 sm:px-4 mb-8"
            :class="{ 'board-of-fate__content__item--disabled': item.disabled }" :label="item.label"
            :tooltip="item.disabled ? 'Filo del fato assegnato ad un\'altro giocatore' : ''" />
        </div>
      </Article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board-of-fate {
  &__content {
    &__item {
      &--disabled {
        :deep(.scroll-card__content) {
          opacity: .3;

          .scroll-card__content__label {
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>