<script setup lang="ts">

import { useMeta } from '~/composables'

// META
useMeta({
  title: 'Pagina non trovata',
  description: 'scopri i prossimi eventi LARP italiani',
})

// VARIABLES
const { t } = useI18n()
</script>

<route lang="yaml">
meta:
  layout: 404
</route>

<template>
  <Header class="text-white-100" :height="'600px'">
    <template #menu>
      <MenuNormal />
    </template>
    <template #content>
      <div class="flex flex-col items-center justify-center" style="padding-bottom: 96px">
        <h1 class="mb-8 p-8 text-center font-display text-5xl text-white-100">
          {{ t('not_found') }}: [{{ t('common.no_effect') }}]
        </h1>
        <Button size="medium" tag="router-link" to="/" :alt="t('common.go_home')">
          {{ t('common.go_home') }}
        </Button>
      </div>
    </template>
  </Header>
</template>
