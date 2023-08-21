<template>
  <Info label="Quota">
    <template #icon>
      <IconMoney />
    </template>
    <br />
    <span><span class="pl-2 uppercase">
        • <span itemprop="price" :content="price">{{ price }}</span><span itemprop="priceCurrency" content="EUR">€</span>
        (STANDARD) </span><br /></span>

    <span v-if="priceDiscounted"><span class="pl-2 uppercase">
        • <span itemprop="price" :content="priceDiscounted">{{ priceDiscounted }}</span><span itemprop="priceCurrency"
          content="EUR">€</span>
        ({{ labelDiscounted }}) </span><br /></span>
    <br />
  </Info>
</template>

<script setup lang="ts">
import { IconMoney } from '~/assets/icons'

defineProps({
  price: { default: 30, type: Number },
  priceDiscounted: { required: false, type: Number },
  priceLate: { required: false, type: Number },
  label: { default: 'Standard', type: String },
  labelDiscounted: { default: 'Pago col Sangue', type: String },
})
</script>