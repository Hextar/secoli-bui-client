<template>
  <Info label="Quota">
    <template #icon>
      <IconMoney />
    </template>
    <span class="pl-2 uppercase flex-col h-full items-start justify-start gap-4">
      <slot name="default" />
    </span>
  </Info>
</template>

<script setup lang="ts">
import { IconMoney } from '~/assets/icons'
</script>