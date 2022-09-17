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
  { label: 'Agire prima di pensare', disabled: false },
  { label: 'Amore Perduto', disabled: false },
  { label: 'Canto dell\'oro', disabled: false },
  { label: 'Condotto dal Fato', disabled: false },
  { label: 'Dalla Regia Accademia', disabled: false },
  { label: 'Dalle stelle alle stalle', disabled: false },
  { label: 'Debito di morte', disabled: false },
  { label: 'Eterno Secondo', disabled: false },
  { label: 'Fede che vacilla', disabled: false },
  { label: 'Fortuna sospetta', disabled: false },
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
  { label: 'Il segugio', disabled: false },
  { label: 'Il sogno dello sconfitto', disabled: false },
  { label: 'Il sole', disabled: false },
  { label: 'Il sussurro inaccolto', disabled: false },
  { label: 'Il timore del fuoco', disabled: false },
  { label: 'Il Vil denaro', disabled: false },
  { label: 'In Carriera', disabled: false },
  { label: 'L\'affranco si paga', disabled: false },
  { label: 'L\'ala dell\'usignolo', disabled: false },
  { label: 'L\'ambizione sbagliata', disabled: false },
  { label: 'L\'Avidità', disabled: false },
  { label: 'L\'avventuriero senza sole', disabled: false },
  { label: 'L\'impiccato', disabled: false },
  { label: 'L\'ira delle catene', disabled: false },
  { label: 'L\'ombra che vegliava', disabled: false },
  { label: 'L\'oro non ha odore', disabled: false },
  { label: 'L\'uomo/donna delle offerte', disabled: false },
  { label: 'L\'Urlo Iniquo', disabled: false },
  { label: 'La bottiglia incendiaria', disabled: false },
  { label: 'La Creatività ci piace', disabled: false },
  { label: 'La curiosità che non uccide', disabled: false },
  { label: 'La fine della freccia', disabled: false },
  { label: 'La Giustizia', disabled: false },
  { label: 'La Linfa', disabled: false },
  { label: 'La mia fetta', disabled: false },
  { label: 'La Perfidia', disabled: false },
  { label: 'La Sapienza su tutto', disabled: false },
  { label: 'La Sete di Potere', disabled: false },
  { label: 'La spalla', disabled: false },
  { label: 'La torre che arde', disabled: false },
  { label: 'La Vendetta', disabled: false },
  { label: 'La virtù dei forti', disabled: false },
  { label: 'Lama al guinzaglio', disabled: false },
  { label: 'Liberi nella morte', disabled: false },
  { label: 'Mani in pasta', disabled: false },
  { label: 'Nel posto giusto', disabled: false },
  { label: 'Nel vivo del gelo', disabled: false },
  { label: 'Nuovo Sceriffo', disabled: false },
  { label: 'Ode al Sangue Blu', disabled: false },
  { label: 'Omertà', disabled: false },
  { label: 'Pugni insanguinati', disabled: false },
  { label: 'Scimmia a Tre Teste', disabled: false },
  { label: 'Segugio dello stato', disabled: false },
  { label: 'Sogno di Fama', disabled: false },
  { label: 'Un\'altra vita', disabled: false },
  { label: 'Uno per tutti', disabled: false },
  { label: 'Verso la Vetta', disabled: false },
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
  setTimeout(() => items.value = shuffleArray(ITEMS, 3), 600)
  loading.value = true
}
</script>
    
<template>
  <Header ref="header" class="text-white-100" :image="fatoHd" height="420px" darkest
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
  <div class="bg-white-100 pb-16" itemprop="description">
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
          Lo staff vi assegnerà, cercando di accontentare tutti, uno solo dei 3 fili scelti entro pochi giorni e assieme
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
        <ScrollCard class="h-[128px] w-full sm:w-1/2 md:w-1/3 lg:w-1/3 pr-0 sm:px-4 mb-8"
          v-for="(item, idx) in filteredItems" :key="`${item.label}-${idx}`" :label="item.label" />
      </div>
    </Article>
  </div>
</template>