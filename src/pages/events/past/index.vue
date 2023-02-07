<script setup lang="ts">
import {
  pastEventsHd
} from '~/assets/images'

// VARIABLES
const scrollThreshold = ref(200)

// METHODS
const onHeaderHeightResize = (height: number): void => {
  scrollThreshold.value = height - (86 / 2)
}
</script>

<template>
  <Header ref="header" class="text-white-100" :image="pastEventsHd" height="420px" darkest
    @resize:height="onHeaderHeightResize">
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
        <h2 id="fazioni" class="anchor">📕 Eventi passati</h2>
      </Paragraph>
      <div class="flex flex-wrap justify-center sm:justify-start items-stretch">
        <Paragraph class="w-full sm:w-1/2 mb-8 pr-0 sm:pr-8" horizontal>
          <template #title>
            <h3 id="ambientazione" class="anchor">Cercatori di verità</h3>
          </template>
          <p class="text-justify">
            12/11/2022
            <br />
            Nel manuale di ambientazione troverai tutto ciò che c'è da sapere su <strong>Braara</strong>, i popoli che
            la abitano e la
            sua storia. Affronta questo viaggio armandoti di coraggio e spirito d'avventura: ti attendono grandi
            avventure!
          </p>
          <Button class="px-4" variant="filled" color="primary" size="small" :disabled="!!loading"
            @click.prevent.stop="downloadAttachment('ambientazione')">
            <span class="font-display text-lg font-bold">
              {{ loading? t('common.loading'): 'Scarica ambientazione' }}
            </span>
          </Button>
        </Paragraph>
      </div>
    </Article>
  </div>
</template>
