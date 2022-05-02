<template>
  <DefaultLayout v-once>
    <Header
      class="text-white-100"
      image="/images/background.jpg"
      lazy-image="/images/background-lazy.jpg"
      :height="'600px'"
    >
      <template #menu>
        <MenuNormal />
      </template>
      <template #content>
        <div class="flex flex-col items-center justify-center" style="padding-bottom: 96px">
          <h1 class="mb-8 p-8 text-center font-display text-5xl text-white-100">
            Pagina non trovata: [No Effect]
          </h1>
          <Button class="w-[140px]" size="medium" tag="router-link" to="/" alt="go to homepage">
            Torna alla tenda master
          </Button>
        </div>
      </template>
    </Header>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { Button, Spacer } from '@/components/common'
import { DefaultLayout, Header, MenuNormal } from '@/components/layout'
</script>
