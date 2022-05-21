<script setup lang="ts">
import { backgroundLazyLogoHd, backgroundLogoHd } from '~/assets/images'

const { t } = useI18n()
</script>

<route lang="yaml">
meta:
  layout: 404
</route>

<template>
  <Header class="text-white-100" :image="backgroundLogoHd" :lazy-image="backgroundLazyLogoHd" :height="'600px'">
    <template #menu>
      <MenuNormal />
    </template>
    <template #content>
      <div class="flex flex-col items-center justify-center" style="padding-bottom: 96px">
        <h1 class="mb-8 p-8 text-center font-display text-5xl text-white-100">
          {{ t('not_found') }}: [{{ t('common.no_effect') }}]
        </h1>
        <CustomButton size="medium" tag="router-link" to="/" :alt="t('common.go_home')">
          {{ t('common.go_home') }}
        </CustomButton>
      </div>
    </template>
  </Header>
</template>
