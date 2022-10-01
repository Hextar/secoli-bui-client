<script setup lang="ts">
defineProps({
  label: { required: true, type: String },
  tooltip: { default: '', type: String }
})
</script>

<template>
  <div class="scroll-card w-full h-[128px]">
    <Tooltip :disabled="!tooltip" placement="top">
      <template #trigger style="width: 100%">
        <div class="scroll-card__content flex justify-center items-center h-full w-full">
          <div class="scroll-card__content__label w-[80%] text-primary-500 text-center text-xl text-ellipsis">
            {{ label }}
          </div>
        </div>
      </template>
      {{ tooltip }}
    </Tooltip>
  </div>
</template>

<style scoped lang="scss">
.scroll-card {
  :deep(#trigger) {

    &,
    span {
      height: 100%;
      width: 100%;
      max-height: 100%;
      max-width: 100%;
    }
  }

  &__content {
    background-image: url('~/assets/images/scroll.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
}
</style>
  