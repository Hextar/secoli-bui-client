<template>
  <Info label="Quota">
    <template #icon>
      <IconMoney />
    </template>
    <br />
    <span class="pl-2">
      • <span itemprop="price" :content="price">{{ price }}</span><span itemprop="priceCurrency" content="EUR">€</span>
      AL GIORNO (STANDARD) </span><br />
    <span class="pl-2">
      • <span itemprop="price" :content="priceDiscounted">{{ priceDiscounted }}</span><span itemprop="priceCurrency"
        content="EUR">€</span>
      AL GIORNO (PAGO COL SANGUE) </span><br />
    <br />
  </Info>
</template>

<script setup lang="ts">
import { IconMoney } from '~/assets/icons'

defineProps({
  price: { default: 30, type: Number },
  priceDiscounted: { default: 10, type: Number },
})
</script>