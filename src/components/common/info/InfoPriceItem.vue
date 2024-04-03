<template>
  <span class="flex h-fit justify-between items-center gap-4">
    <span>• <span itemprop="price" :content="price">{{ price }}</span><span v-if="Number.isInteger(price)"
        itemprop="priceCurrency" content="EUR">€</span></span>
    <slot name="default" />
  </span>
</template>

<script setup lang="ts">
defineProps({
  price: { default: 30, type: [Number, String] },
})
</script>