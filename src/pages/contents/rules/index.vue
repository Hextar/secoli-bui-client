<script setup lang="ts">
import axios from 'axios'
import pkg from 'file-saver'

import { ref, Ref } from 'vue'

import { useMeta } from '~/composables'

import {
  manualiHd
} from '~/assets/images'

import type { MenuItemType } from '~/types'

// USE
const { saveAs } = pkg
const { t } = useI18n()

// META
useMeta({
  title: 'Manuali',
  description: 'scopri il regolamento ufficiale di Secoli Bui',
})

// VARIABLES
const scrollThreshold = ref(200)
const loading: Ref<Boolean> = ref(false)
const items: MenuItemType[] = [
  {
    label: 'Ambientazione',
    to: { path: '/rules', hash: '#ambientazione' },
    tooltip: {
      content: 'Scrolla al paragrafo "Ambientazione"',
      placement: 'bottom',
    },
  },
  {
    label: 'Base',
    to: { path: '/rules', hash: '#base' },
    tooltip: {
      content: 'Scrolla al paragrafo "Manuale base"',
      placement: 'bottom',
    },
  },
  {
    label: 'Magia',
    to: { path: '/rules', hash: '#magia' },
    tooltip: {
      content: 'Scrolla al paragrafo "Magia"',
      placement: 'bottom',
    },
  },
  {
    label: 'Preghiera',
    to: { path: '/rules', hash: '#preghiera' },
    tooltip: {
      content: 'Scrolla al paragrafo "Preghiera"',
      placement: 'bottom',
    },
  },
  {
    label: 'Alchimia',
    to: { path: '/rules', hash: '#alchimia' },
    tooltip: {
      content: 'Scrolla al paragrafo "Alchimia"',
      placement: 'bottom',
    },
  },
  {
    label: 'Arte runica',
    to: { path: '/rules', hash: '#arte-runica' },
    tooltip: {
      content: 'Scrolla al paragrafo "Arte runica"',
      placement: 'bottom',
    },
  },
  {
    label: 'Avanzamento e OSP',
    to: { path: '/rules', hash: '#avanzamento-e-osp' },
    tooltip: {
      content: 'Scrolla al paragrafo "Avanzamento e osp',
      placement: 'bottom',
    },
  },
]

const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height - (86 / 2)
}

const downloadAttachment = async (val: string): Promise<void> => {
  loading.value = true
  axios
    .get(`/files/rules/${val}.pdf`, { responseType: 'blob' })
    .then(response => saveAs(response.data, `${val}.pdf`))
    .catch((err: unknown) => console.error(err))
    .finally(() => (loading.value = false))
}
</script>
  
<template>
  <Header ref="header" class="text-white-100" :image="manualiHd" height="420px" darkest
    @resize:height="onHeaderHeightResize">
    <template #menu>
      <MenuDetail :scroll-threshold="scrollThreshold" :items="items" />
    </template>
    <template #content>
      <div id="title" class="flex flex-col items-center justify-center">
        <div class="flex h-[336px] items-center" itemprop="title">
          <h1 class="event-title font-display text-6xl text-white-100 text-center">Regolamento</h1>
        </div>
      </div>
    </template>
  </Header>
  <div class="bg-white-100 pb-16" itemprop="description">
    <Article>
      <Paragraph>
        <h2 id="fazioni" class="anchor">📕 Manuali</h2>
      </Paragraph>
      <div class="flex flex-wrap justify-center sm:justify-start items-stretch">
        <Paragraph class="w-full sm:w-1/2 mb-8 pr-0 sm:pr-8" horizontal>
          <template #title>
            <h3 id="ambientazione" class="anchor">Ambientazione</h3>
          </template>
          <p class="text-justify">
            Ogni cosa inizia da qui.
            <br />
            Nel manuale di ambientazione troverai tutto ciò che c'è da sapere su <strong>Braara</strong>, i popoli che
            la abitano e la
            sua storia. Affronta questo viaggio armandoti di coraggio e spirito d'avventura: ti attendono grandi
            avventure!
          </p>
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('ambientazione')">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : 'Scarica ambientazione' }}
            </span>
          </Button>
        </Paragraph>
        <Paragraph class="w-full sm:w-1/2 mb-8 pl-0 sm:pl-8" horizontal reverse>
          <template #title>
            <h3 id="base" class="anchor">Manuale base</h3>
          </template>
          <p class="text-justify">
            Nel regolamento base troverai tutto il necessario per imparare a giocare in un live di Secoli Bui.
            <br />
            Dalle <strong>regole</strong> di comportamento a quelle per costruire il tuo personaggio da zero o
            importarlo dal Primo
            Capitolo della Campagna.
          </p>
          <div class="flex flex-grow flex-1" />
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('base')">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : 'Scarica manuale base' }}
            </span>
          </Button>
        </Paragraph>
        <Paragraph class="w-full sm:w-1/2 mb-8 pr-0 sm:pr-8" horizontal>
          <template #title>
            <h3 id="magia" class="anchor">Manuale di magia</h3>
          </template>
          <p class="text-justify">
            Quella della magia è una delle strade che un Incantatore di Braara può scegliere di percorrere.
            <br />
            Ti appellerai alle forze della natura o a quelle arcane per tenere testa ai tuoi nemici.
            <br />
            Certo: prima dovrai imparare tutto ciò che riguarda i vari tipi di <strong>incantesimi</strong>,
            di Magie, Circoli e così
            via.
          </p>
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('magia')">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : 'Scarica manuale di magia' }}
            </span>
          </Button>
        </Paragraph>
        <Paragraph class="w-full sm:w-1/2 mb-8 pl-0 sm:pl-8" horizontal reverse>
          <template #title>
            <h3 id="preghiera" class="anchor">Manuale di preghiera</h3>
          </template>
          <p class="text-justify">
            Un incantatore che scelga di appellarsi alla fede può percorrere la via della Preghiera.
            <br />
            Inizierai come adepto e, grazie alla forza del <strong>tuo dio - o i tuoi dei -</strong> farai grandi cose.
            <br />
            Grazie a questo manuale conoscerai le tipologie di culti esistenti a Braara, le numerose preghiere esistenti
            e tutti i loro effetti.
          </p>
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('preghiera')">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : 'Scarica manuale di preghiera' }}
            </span>
          </Button>
        </Paragraph>
        <Paragraph class="w-full sm:w-1/2 mb-8 pr-0 sm:pr-8" horizontal>
          <template #title>
            <h3 id="alchimia" class="anchor">Manuale di alchimia</h3>
          </template>
          <p class="text-justify">
            Hai deciso di affidarti alle tue mani e al tuo intelletto, alla tua astuzia e alla conoscenza di chi ha
            trascorso decenni a riempire pagine e pagine di <strong>formule e ricerche</strong>.
            <br />
            Tu sei un alchimista. Questo manuale,
            invece, è la tua chiave per conoscere tutti i segreti alchemici di Braara.
          </p>
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('alchimia')">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : 'Scarica manuale di alchimia' }}
            </span>
          </Button>
        </Paragraph>
        <Paragraph class="w-full sm:w-1/2 mb-8 pl-0 sm:pl-8" horizontal reverse>
          <template #title>
            <h3 id="arte-runica" class="anchor">Arte runica</h3>
          </template>
          <p class="text-justify">
            E così stai pensando di intraprendere la strada del Forgiarune?
            <br />
            Allora il manuale dell'Arte Runica è proprio
            ciò che fa al caso tuo per comprendere al meglio questa nobile arte. Troverai informazioni sulle regole, le
            <strong>rune</strong> esistenti, i <strong>metalli</strong> di Braara e molto altro.
          </p>
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('arte_runica')">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : 'Scarica manuale di arte runica' }}
            </span>
          </Button>
        </Paragraph>
        <Paragraph class="w-full mb-8 pr-0 sm:pr-8" horizontal reverse>
          <template #title>
            <h3 id="avanzamento-e-osp" class="anchor">Manuale di Avanzamento e OSP</h3>
          </template>
          <p class="text-justify">
            Nel corso della Campagna tu e il tuo personaggio crescerete, scoprirete nuovi intrecci e affronterete nuove
            sfide.
            Con questi passi in avanti arriveranno anche i <strong>punti esperienza</strong> chiamati in Secoli Bui
            <strong>OSP</strong>.
            <br />
            Gli OSP ti permetteranno di acquisire nuove e formidabili abilità a seconda dei gruppi
            di combattenti a cui ti unirai.
            Puoi trovare ogni informazione necessaria in questo manuale.
          </p>
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('avanzamento_e_osp')">
            <span class="font-display text-lg font-bold">
              {{ loading ? t('common.loading') : 'Scarica manuale di Avanzamento e OSP' }}
            </span>
          </Button>
        </Paragraph>
      </div>
    </Article>
  </div>
</template>