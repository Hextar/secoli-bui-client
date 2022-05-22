<script setup lang="ts">
import { useMeta } from '~/composables'

import { economiaHd } from '~/assets/images'
import StoriaAnticaDiBraara from './storia_antica_di_braara.md'
import LaGuerraDeiCaduti from './la_guerra_dei_caduti.md'
import BraaraOggi from './braara_oggi.md'
import Geografia from './geografia.md'
import Regioni from './regioni.md'
import RazzeEPopoli from './razze_e_popoli.md'
import Religioni from './religioni.md'
import type { MenuItemType } from '~/types'

// META
useMeta({
  title: 'Ambientazione',
  description: 'Scopri Braara, l\'ambientazione dark fantasy di Secoli Bui'
})

// VARIABLES
const scrollThreshold = ref(200)
const items: MenuItemType[] = [
  {
    label: 'Storia',
    to: { path: '/world-system', hash: '#StoriaAnticaDiBraara' },
    tooltip: {
      content: 'Scrolla al paragrafo "Storia Antica Di Braara"',
      placement: 'bottom',
    },
  },
  {
    label: 'Guerra',
    to: { path: '/world-system', hash: '#LaGuerraDeiCaduti' },
    tooltip: {
      content: 'Scrolla al paragrafo "La Guerra dei Caduti"',
      placement: 'bottom',
    },
  },
  {
    label: 'Braara oggi',
    to: { path: '/world-system', hash: '#BraaraOggi' },
    tooltip: {
      content: 'Scrolla al paragrafo "Braara oggi"',
      placement: 'bottom',
    },
  },
  {
    label: 'Geografia',
    to: { path: '/world-system', hash: '#Geografia' },
    tooltip: {
      content: 'Scrolla al paragrafo "Geografia"',
      placement: 'bottom',
    },
  },
  {
    label: 'Regioni',
    to: { path: '/world-system', hash: '#Regioni' },
    tooltip: {
      content: 'Scrolla al paragrafo "Regioni"',
      placement: 'bottom',
    },
  },
  {
    label: 'Razze e popoli',
    to: { path: '/world-system', hash: '#RazzeEPopoli' },
    tooltip: {
      content: 'Scrolla al paragrafo "Razze e popoli"',
      placement: 'bottom',
    },
  },
  {
    label: 'Religioni',
    to: { path: '/world-system', hash: '#Religioni' },
    tooltip: {
      content: 'Scrolla al paragrafo "Religioni"',
      placement: 'bottom',
    },
  }
]

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height - (86 / 2)
}
</script>

<template>
  <section class="world-system" itemscope itemtype="https://schema.org/Article">
    <Header ref="header" class="text-white-100" :image="economiaHd" height="420px" darkest
      @resize:height="onHeaderHeightResize">
      <template #menu>
        <MenuDetail :scroll-threshold="scrollThreshold" :items="items" />
      </template>
      <template #content>
        <div id="title" class="flex flex-col items-center justify-center">
          <div class="flex h-[336px] items-center" itemprop="title">
            <h1 class="event-title font-display text-6xl text-white-100 text-center">Ambientazione</h1>
          </div>
        </div>
      </template>
    </Header>
    <div class="bg-white-100 pb-16" itemprop="description">
      <Article>
        <Paragraph class="mb-4">
          <StoriaAnticaDiBraara />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <LaGuerraDeiCaduti />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <BraaraOggi />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <Geografia />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <Regioni />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <RazzeEPopoli />
        </Paragraph>
      </Article>
      <Article>
        <Paragraph class="mb-4">
          <Religioni />
        </Paragraph>
      </Article>
    </div>
  </section>
</template>
