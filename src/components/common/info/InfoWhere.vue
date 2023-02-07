<template>
  <Info label="Dove">
    <template #icon>
      <IconPin />
    </template>
    <br />
    <span class="pl-2" itemprop="location" itemscope itemtype="https://schema.org/Place">
      •
      <a class="text-action-500 hover:underline" :href="googleMapsUrl" rel="noopener noreferrer" :title="meta"
        alt="meta" target="_blank">
        <span itemprop="name address">
          {{ label }}
        </span>
      </a>
    </span>
    <br />
  </Info>
</template>

<script setup lang="ts">
import { IconPin } from '~/assets/icons'

defineProps({
  label: { default: '', type: String },
  meta: { default: '', type: String },
  googleMapsUrl: { default: '', type: String },
})
</script>