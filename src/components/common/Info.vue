<script setup lang="ts">
// PROPS
const props = defineProps({
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="info firefor-bg flex p-4 backdrop-blur">
    <div class="info__icon">
      <slot name="icon" />
    </div>
    <div class="info__content ml-2">
      <span class="info__content__label uppercase"> {{ props.label }}: </span>
      <span class="info__content__value">
        <slot />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  @include firefox;

  &__icon {
    &,
    svg {
      height: 24px;
      width: 24px;
    }
  }
}
</style>
