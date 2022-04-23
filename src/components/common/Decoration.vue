<template>
  <div
    class="decoration"
    :class="{
      [`decoration--size--${size}`]: true,
      'decoration--inverted': inverted,
    }"
  >
    <IconDecoration />
  </div>
</template>

<script setup lang="ts">
import { IconDecoration } from '@/assets/icons'

// PROPS
const props = defineProps({
  size: { type: String, default: 'medium' },
  color: { type: String, default: 'white' },
  inverted: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
$sm-w: 40px;
$md-w: 80px;
$lg-w: 120px;

.decoration {
  position: relative;

  &--inverted {
    transform: scaleY(-1);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 0.5px;
    width: 160%;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 2;
  }

  svg path {
    height: auto;
    stroke: white;
  }

  &--size {
    &--small {
      svg {
        width: $sm-w;
      }

      &:before,
      &:after {
        top: calc(#{$sm-w * 0.055});
      }

      &:before {
        left: calc(-100% + #{$sm-w * 2} - 1px);
      }

      &:after {
        right: calc(-100% + #{$sm-w * 2} - 1px);
      }
    }

    &--medium {
      svg {
        width: $md-w;
      }

      &:before,
      &:after {
        top: calc(#{$md-w * 0.055});
      }

      &:before {
        left: calc(-100% + #{$md-w * 2} - 1px);
      }

      &:after {
        right: calc(-100% + #{$md-w * 2} - 1px);
      }
    }

    &--large {
      svg {
        width: $lg-w;
      }

      &:before,
      &:after {
        top: calc(#{$lg-w * 0.055});
      }

      &:before {
        left: calc(-100% + #{$lg-w * 2} - 1px);
      }

      &:after {
        right: calc(-100% + #{$lg-w * 2} - 1px);
      }
    }
  }
}
</style>
