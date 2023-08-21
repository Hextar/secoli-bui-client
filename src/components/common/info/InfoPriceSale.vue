<template>
  <Info label="Quota">
    <template #icon>
      <IconMoney />
    </template>
    <br />
    <span itemprop="priceSpecification" itemscope itemtype="PriceSpecification">
      •
      <span class="pl-2 uppercase">
        <span itemprop="price" :content="price.sale">{{ price.sale }}</span>
        <span itemprop="priceCurrency" content="EUR">€</span>
        <span itemprop="validThrough" :content="saleExpire" />
      </span>
      <span class="uppercase flex-inline scale-75 -translate-y-1 line-through">
        <span itemprop="price" :content="price.full">{{ price.full }}</span>
        <span itemprop="priceCurrency" content="EUR">€</span>
        <span itemprop="validThrough" :content="saleExpire" />
      </span>
      <span v-if="price.label" class="text-sm">
        ({{ price.label }})
      </span>
      <br />
      •
      <span class="pl-2 uppercase">
        <span itemprop="price" :content="priceUnder25.sale">{{ priceUnder25.sale }}</span>
        <span itemprop="priceCurrency" content="EUR">€</span>
        <span itemprop="validThrough" :content="saleExpire" />
      </span>
      <span class="uppercase flex-inline scale-75 -translate-y-1 line-through">
        <span itemprop="price" :content="priceUnder25.full">{{ priceUnder25.full }}</span>
        <span itemprop="priceCurrency" content="EUR">€</span>
        <span itemprop="validThrough" :content="saleExpire" />
      </span>
      <span v-if="priceUnder25.label" class="text-sm">
        ({{ priceUnder25.label }})
      </span>
      <br />
      <span class="pl-2 text-sm">
        <span>Offerta valida fino al {{ saleExpire }}</span>
      </span>
    </span>
    <br />
  </Info>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { IconMoney } from '~/assets/icons'
import { PriceType } from '~/types';

defineProps({
  price: { default: { sale: 35.00, full: 50.00 }, type: Object as PropType<PriceType> },
  priceUnder25: { default: { sale: 20.00, full: 25.00, label: 'Under 25' }, type: Object as PropType<PriceType> },
  saleExpire: { default: '03/09/2023', type: String },

})
</script>