<template>
  <div v-tooltip="tooltip">
    <component
      class="button flex items-center justify-center"
      :is="tag"
      :class="{
        [`px-${padding}`]: padding > 0,
        [`button--size--${size}`]: true,
        [`button--color--${color}`]: true,
        [`button--variant--${variant}`]: true,
        [`button--icon--${iconPosition}`]: true,
      }"
      :disabled="!!disabled || undefined"
      v-bind="$attrs"
    >
      <span v-if="hasPrefix" class="button__slot">
        <slot name="prefix-icon" />
      </span>
      <span
        class="button__label font-body"
        :class="`button__label--icon--${iconPosition} ${fontSize}`"
      >
        <slot />
      </span>
      <span v-if="hasSuffix" class="button__slot">
        <slot name="suffix-icon" />
      </span>
    </component>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CustomButton',
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { getIconPosition } from '@/utils'

import {
  colorValidator,
  variantValidator,
  sizeValidator,
  flairValidator,
  tagValidator,
  UiSize,
} from '@/components/common'
import { TooltipOptions } from '@/types'

// USE
const attrs = useAttrs()
const slots = useSlots()

// PROPS
const props = defineProps({
  primary: { type: Boolean, default: false },
  color: { type: String, default: 'white', validator: colorValidator },
  variant: { type: String, default: 'outline', validator: variantValidator },
  size: { type: String, default: 'medium', validator: sizeValidator },
  flair: { type: String, default: 'squared', validator: flairValidator },
  tag: { type: String, default: 'button', validator: tagValidator },
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  tooltip: { type: String, default: undefined },
})

// COMPUTED
const tooltip = computed(
  (): TooltipOptions => ({
    content: props.disabled ? 'Poison Fatal' : undefined,
    placement: 'top',
    theme: 'secoli-bui',
  })
)

const padding = computed((): number => {
  const { class: className } = attrs
  const c = `${className}`
  if (c.includes('pa-') || c.includes('px-')) {
    return -1
  } else if (props.size === UiSize.SMALL) {
    return 4
  }
  return 8
})

const fontSize = computed((): string => {
  if (props.size === UiSize.SMALL) {
    return 'text-sm'
  } else if (props.size === UiSize.MEDIUM) {
    return 'text-md'
  }
  return 'text-xl'
})

const hasPrefix = computed((): boolean => !!slots['prefix-icon'])

const hasSuffix = computed((): boolean => !!slots['suffix-icon'])

const iconPosition = computed((): string => getIconPosition(hasPrefix.value, hasSuffix.value))
</script>

<style lang="scss" scoped>
@import './assets/style/index.scss';

.button {
  position: relative;
  transition: background-color 250ms ease;

  &.button--size {
    @each $key in map-keys($sizes) {
      $size: map-get($sizes, $key);
      $height: map-get($size, 'height');

      &--#{'' + $key} {
        &.button {
          $height: map-get($size, 'height');
          $icon: map-get($size, 'slot-icon');
          $shortcut: map-get($size, 'slot-shortcut');
          $m: map-get($size, 'margin');

          &--icon {
            .button__label {
              @include row--center;
              height: $height;
              text-align: center;

              &--left {
                margin-left: $m;
              }
              &--right {
                margin-right: $m;
              }
              &--both {
                margin: 0 $m;
              }
              &--none {
                margin: 0;
              }
            }
          }

          .button__slot {
            @include row--center;

            // used to override a svg/shortcut size
            :deep(svg) {
              height: $icon;
              width: $icon;
            }
          }
        }
      }
    }
  }
}
</style>
