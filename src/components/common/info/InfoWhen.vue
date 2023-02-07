<template>
  <Info label="Quando">
    <template #icon>
      <IconClock />
    </template>
    <br />
    <time v-if="firstDate" class="pl-2" itemprop="startDate" datetime="2022-11-12T18:00:00Z">
      • {{ firstDate }}
    </time>
    <br />
    <time v-if="secondDate" class="pl-2" itemprop="endDate" datetime="2022-11-13T17:00:00Z">
      • {{ secondDate }}
    </time>
    <br />
  </Info>
</template>

<script setup lang="ts">
import { IconClock } from '~/assets/icons'

defineProps({
  firstDate: { default: '', type: String },
  secondDate: { default: '', type: String },
})
</script>