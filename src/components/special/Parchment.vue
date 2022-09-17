<script setup lang="ts">
// PROPS
const props = defineProps({
  timeout: { default: 0, type: Number },
})

// USE
const slots = useSlots()

// VARIABLES
const broken = ref<boolean>(false)
const open = ref<boolean>(false)

// COMPUTED
const hasSignature = computed((): boolean => !!slots['signature'])

// METHODS
const onOpen = () => {
  broken.value = true
  setTimeout(() => open.value = true, 600);
}

// ON MOUNTED
onMounted(() => {
  if (props.timeout) {
    setTimeout(() => {
      if (!open.value) { open.value = true }
    }, props.timeout)
  }
})
</script>

<template>
  <section ref="parchment" class="parchment relative flex flex-col items-start justify-center"
    :class="`parchment--${ open ? 'open' : 'closed'}`" v-bind="$attrs">
    <div class="parchment__header" />
    <div v-if="!open" class=" parchment__sigil absolute flex" :class="{ 'parchment__sigil--broken': broken }"
      @click="onOpen">
      <span class="parchment__sigil__fragment parchment__sigil__fragment--left" />
      <span class="parchment__sigil__fragment parchment__sigil__fragment--right" />
    </div>
    <div class="parchment__body" :class="{ 'parchment__body--with-signature': hasSignature }" @click="onOpen">
      <div class="parchment__body__content">
        <slot name="content" />
        <div v-if="hasSignature" class="parchment__body__content__signature">
          <slot name="signature" />
        </div>
      </div>
    </div>
    <div class="parchment__footer" />
  </section>
</template>
  
<style lang="scss" scoped>
.parchment {
  background-size: 100%;
  max-width: 100%;

  @media (max-width: '640px') {
    max-width: calc(100% + 64px);
    width: calc(100% + 64px);
    margin-left: -32px;
    overflow: hidden;
  }

  &--closed {
    $foldMargin: 108px;

    .parchment__header {
      margin-bottom: -#{$foldMargin};
    }

    .parchment__body {
      max-height: 32px;
      overflow: hidden;

      &__content {
        visibility: hidden;
      }
    }

    .parchment__footer {
      margin-top: -#{$foldMargin};
    }

    @media (max-width: '640px') {
      .parchment__header {
        @media (max-width: '640px') {
          margin: 0 0 -144px -48px;
        }
      }

      .parchment__body {
        padding: 48px 0;
      }

      .parchment__sigil {
        left: calc(50% - 90px);
        top: calc(50% - 90px);
        transform: scale(.75);
      }

      .parchment__footer {
        height: 96px;
        margin: -48px 0 0 -48px;
      }
    }
  }

  &__header,
  &__body,
  &__footer {
    max-width: 100%;
    width: 100%;
    background-size: 100%;
  }

  &__header,
  &__body,
  &__footer {
    height: 160px;
  }

  &__header {
    margin-bottom: -96px;
    background-image: url('~/assets/images/parchment_header.png');
    background-repeat: no-repeat;
    z-index: 2;

    @media (max-width: '640px') {
      max-width: calc(100% + 80px);
      width: calc(100% + 80px);
      margin: 0 0 -128px -48px;
    }
  }

  &__body {
    height: fit-content;
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0 32px 160px 32px;
    background-image: url('~/assets/images/parchment_body.png');
    background-repeat: repeat-y;

    @media (max-width: '640px') {
      padding: 16px 64px 144px 64px;
      background-size: calc(100% + 32px);
      background-position-x: -16px;
    }

    &--with-signature {
      padding-bottom: 128px;
    }

    &__content {
      padding: 96px 96px 144px 96px;
      overflow: hidden;

      @media (max-width: '640px') {
        padding: 48px 0 96px;
      }

      &__signature {
        position: absolute;
        right: 144px;
        bottom: 224px;
        transform: rotate(2deg);
        width: 112px;

        @media (max-width: '640px') {
          right: calc(50% + 16px);
          bottom: 128px;
        }
      }
    }
  }

  &__footer {
    margin-top: -96px;
    background-image: url('~/assets/images/parchment_footer.png');
    background-repeat: no-repeat;
    z-index: 3;

    @media (max-width: '640px') {
      max-width: calc(100% + 80px);
      width: calc(100% + 80px);
      margin: -48px 0 -60px -48px;
    }
  }

  &__sigil {
    $fragmentSize: 90px;

    height: 160px;
    width: calc(#{$fragmentSize * 2} + 40px);
    top: calc(50% - 108px);
    left: calc(50% - 80px);
    cursor: pointer;
    z-index: 5;
    overflow: visible;
    transform: rotate(-25deg);
    transition: opacity 0.255s ease-in-out;
    transition-delay: 0.075s;

    &::before {
      content: '';
      position: absolute;
      height: 144px;
      width: 144px;
      top: 8px;
      left: 12px;
      border-radius: 50%;
      opacity: .75;
      z-index: -1;
      animation: glow 3.6s infinite;
    }

    &__fragment {
      position: relative;
      display: block;
      height: 160px;
      width: $fragmentSize;
      background-image: url('~/assets/images/parchment_sigil.png');
      background-repeat: no-repeat;
      background-size: cover;
      transition: all 0.255s ease-in-out;

      &--left {
        width: $fragmentSize;
        margin: 0 -1px;
      }

      &--right {
        width: $fragmentSize;
        background-position-x: -#{$fragmentSize};
      }
    }

    &--broken {
      $move: 8px;
      opacity: 0;

      .parchment__sigil__fragment {
        &--left {
          margin: 0 #{$move * 2} 0 -#{$move};
        }
      }
    }
  }
}
</style>
  