<template>
  <Info label="Quota">
    <template #icon>
      <IconMoney />
    </template>
    <br />
    <span class="pl-2 uppercase">
      • <span itemprop="price" :content="price">{{ price }}</span><span itemprop="priceCurrency" content="EUR">€</span>
      AL GIORNO ({{ label }}) </span><br />
    <span class="pl-2 uppercase">
      • <span itemprop="price" :content="priceDiscounted">{{ priceDiscounted }}</span><span itemprop="priceCurrency"
        content="EUR">€</span>
      AL GIORNO ({{ labelDiscounted }}) </span><br />
    <br />
  </Info>
</template>

<script setup lang="ts">
import { IconMoney } from '~/assets/icons'

defineProps({
  price: { default: 30, type: Number },
  priceDiscounted: { default: 10, type: Number },
  label: { default: 'Standard', type: String },
  labelDiscounted: { default: 'Pago col Sangue', type: String },
})
</script>