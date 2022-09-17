<script setup lang="ts">
// USE
const slots = useSlots()

// PROPS
defineProps({
  label: { required: false, type: String },
  to: { required: false, type: String },
  selected: { default: false, type: Boolean },
  active: { default: false, type: Boolean },
  disabled: { default: false, type: Boolean },
})

// COMPUTED
const hasPrefix = computed((): boolean => !!slots['prefix-icon'])

const hasSuffix = computed((): boolean => !!slots['suffix-icon'])
</script>

<template>
  <button class="list-element flex w-[fit-content] h-[fit-content]" :data-selected="selected" :data-active="active"
    :disabled="disabled" tabindex="0" v-bind="$attrs">
    <div class="list-element__content">
      <div v-if="hasPrefix" class="list-element__prefix-icon">
        <slot name="prefix" />
      </div>
      <slot>
        <span class="list-element__content__label text-ellipsis overflow-hidden"
          :class="{'list-element__label--disabled': disabled}">
          {{ label }}
        </span>
      </slot>
    </div>
    <div v-if="hasSuffix" class="list-element-icon__suffix-icon">
      <slot name="suffix" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.list-element {
  // @include row--distributed;
  // align-items: center;
  // justify-content: space-between;
  // width: 100%;
  // height: 30px;
  // background: transparent;
  // border-radius: 8px;
  // padding: 6px;
  // margin: 0;
  // outline: none;
  // transition: background 125ms ease;

  // &:disabled {
  //   cursor: not-allowed;

  //   .list-element__label {
  //     color: $colorNeutralsLight300;
  //   }
  // }

  // &:hover:not(:disabled) {
  //   background: $colorNeutralsLight100;
  // }

  // &:active:not(:disabled) {
  //   background: $colorNeutralsLight200;
  // }

  // &[data-selected='true'] {
  //   background: $colorSemanticLightAction100;

  //   &.list-element__label {
  //     color: $colorSemanticLightAction500;
  //   }
  // }

  // &[data-active='true'] {
  //   background-color: $colorOverlayInteractive;

  //   &.list-element__label {
  //     color: $colorSemanticLightAction500;
  //   }
  // }

  // &__content {
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-start;
  //   width: 100%;

  //   &__label {
  //     text-align: left;
  //     color: #111;

  //     width: fit-content;
  //   }
  // }

  // &__prefix-icon,
  // &__suffix-icon {
  //   display: block;
  //   height: 20px;
  //   width: 20px;
  //   margin-right: 4px;
  // }
}
</style>
