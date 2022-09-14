<script setup lang="ts">
// VARIABLES
const open = ref<boolean>(false)

const onOpen = () => open.value = true
</script>

<template>
  <section ref="parchment" class="parchment relative flex flex-col items-start justify-center"
    :class="`parchment--${ open ? 'open' : 'closed'}`" v-bind="$attrs">
    <div class="parchment__header" />
    <div v-if="!open" class="parchment__sigil absolute" @click="onOpen" />
    <div class="parchment__body">
      <div v-if="open" class="parchment__body__content">
        <slot />
      </div>
    </div>
    <div class="parchment__footer" />
  </section>
</template>
  
<style lang="scss" scoped>
.parchment {
  background-size: 100%;
  margin: 32px -64px;

  &__header,
  &__body,
  &__footer {
    max-width: 100%;
    width: 100%;
    background-size: contain;
  }

  &__header {
    height: 224px;
    margin-bottom: -160px;
    background-image: url('~/assets/images/parchment_header.png');
    background-repeat: no-repeat;
    z-index: 2;
  }

  &__body {
    min-height: 100px;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    height: fit-content;
    background-image: url('~/assets/images/parchment_body.png');
    background-repeat: repeat-y;
    transition: all 0.255s ease-in-out;

    &__content {
      padding: 128px;
    }
  }

  &__footer {
    height: 160px;
    margin-top: -128px;
    background-image: url('~/assets/images/parchment_footer.png');
    background-repeat: no-repeat;
    z-index: 3;
  }

  &__sigil {
    height: 160px;
    width: 160px;
    top: calc(50% - 90px);
    left: calc(50% - 70px);
    background-image: url('~/assets/images/parchment_sigil.png');
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    z-index: 5;
  }

  &--closed {
    .parchment__header {
      margin-bottom: -96px;
    }

    .parchment__body {
      height: 32px;
    }

    .parchment__footer {
      margin-top: -144px;
    }
  }
}
</style>
  