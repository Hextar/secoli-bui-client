<template>
  <div class="info flex p-4 backdrop-blur">
    <div class="info__icon">
      <slot name="icon" />
    </div>
    <div class="info__content ml-2">
      <span class="info__content__label uppercase"> {{ label }}: </span>
      <span class="info__content__value">
        <slot />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'

// PROPS
const props = defineProps({
  label: { type: String, default: '' },
  items: { type: Array as PropType<String[]>, default: [] },
})
</script>

<style lang="scss" scoped>
.info {
  &__icon {
    &,
    svg {
      height: 24px;
      width: 24px;
    }
  }
}
</style>
