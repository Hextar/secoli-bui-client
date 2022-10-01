<script setup lang="ts">
defineProps({
  label: { required: true, type: String }
})
</script>

<template>
  <div class="scroll-card w-full">
    <div class="scroll-card__content flex justify-center items-center h-full w-full">
      <span class="scroll-card__content__label w-[80%] text-primary-500 text-center text-xl text-ellipsis">
        {{ label }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-card {
  &__content {
    background-image: url('~/assets/images/scroll.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
}
</style>
  