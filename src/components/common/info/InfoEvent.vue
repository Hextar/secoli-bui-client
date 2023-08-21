<template>
  <Info label="Evento FB">
    <template #icon>
      <IconFacebook />
    </template>
    <br />
    <span class="pl-2 inline-block">
      • Rimani aggiornato <Button class="text-action-500 hover:underline" variant="filled" color="transparent"
        size="small" tag="a" :href="facebookEventUrl" target="_blank">iscrivendoti all’evento!</Button>
    </span>
    <br />
  </Info>
</template>

<script setup lang="ts">
import { IconFacebook } from '~/assets/icons'

defineProps({
  facebookEventUrl: { default: '', type: String },
})
</script>