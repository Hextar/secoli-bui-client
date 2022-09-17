<script setup lang="ts">
import { ref } from 'vue'

import { useMeta } from '~/composables'

import {
  fatoHd
} from '~/assets/images'

type FateItem = {
  label: string,
  disabled: boolean
}

// USE
// META
useMeta({
  title: 'Manuali',
  description: 'scopri il regolamento ufficiale di Secoli Bui',
})

// VARIABLES
const scrollThreshold = ref(200)
const items: FateItem[] = [
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

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height - (86 / 2)
}
</script>
    
<template>
  <Header ref="header" class="text-white-100" :image="fatoHd" height="420px" darkest
    @resize:height="onHeaderHeightResize">
    <template #menu>
      <MenuDetail :scroll-threshold="scrollThreshold" :items="items" />
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
    <Article>
      <Paragraph>
        <h2 id="incipit" class="anchor">🧵 Fili del fato</h2>
      </Paragraph>
      <div class="flex flex-wrap justify-center sm:justify-start items-center my-8">
        <ScrollCard class="h-[128px] w-full sm:w-1/2 md:w-1/3 lg:w-1/3 pr-0 sm:pr-4 mb-8" v-for="(item, idx) in items"
          :key="`${item.label}-${idx}`" :label="item.label" />
      </div>
    </Article>
  </div>
</template>