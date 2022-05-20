<script setup lang="ts">
import { PropType, ref, Ref } from 'vue'

import { usePopperjs, Trigger } from 'vue-use-popperjs'

import { TooltipDelay } from '~/types'

export type TooltipPosition =
  | 'top-start' | 'top' | 'top-end'
  | 'right-start' | 'right' | 'right-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'
  | 'left-start' | 'left' | 'left-end'

// PROPS
const props = defineProps({
  trigger: { type: String as PropType<Trigger>, default: 'hover' },
  placement: { type: String as PropType<TooltipPosition>, default: 'bottom' },
  forceShow: { Boolean, default: false },
  delay: { type: Object as PropType<TooltipDelay>, default: { show: 150, hide: 150 } },
  delayOnMouseout: { type: Boolean, default: false },
})

// VARIABLES
const trigger: Ref<Element> = ref<any>()
const tooltip: Ref<HTMLElement> = ref<any>()

const { visible } = usePopperjs(trigger, tooltip, {
  trigger: props.trigger,
  forceShow: props.forceShow,
  delayOnMouseover: props.delay.show ? props.delay.show : 0,
  delayOnMouseout: props.delay.hide ? props.delay.hide : 0,
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, -8],
      },
    },
  ],
})
</script>

<template>
  <div id="root">
    <div
      :tabindex="props.trigger === 'focus' ? 0 : undefined"
      ref="trigger"
      class="tooltip__trigger"
      aria-describedby="tooltip"
      v-bind="$attrs"
    >
      <slot name="trigger"/>
    </div>
    <div
      ref="tooltip"
      id="tooltip"
      role="tooltip"
    >
      <span
        v-if="visible"
        class="tooltip__content pa-2 bg-black-700 text-base rounded"
        :class="`tooltip__content--${position}`"
      >
        <slot />
      </span>
      <div id="arrow" data-popper-arrow />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$arrowSize: 5px;

.tooltip {
  &__content {
    position: relative;

    // &::after {
    //   content: '';
    //   position: absolute;
    //   z-index: inherit;
    // }

    // &--top::after {
    //   top: -#{$arrowSize};
    //   left: calc(50% - #{$arrowSize / 1.25});
    //   width: 0; 
    //   height: 0; 
    //   border-left: $arrowSize solid transparent;
    //   border-right: $arrowSize solid transparent;
    //   border-bottom: $arrowSize solid #0F0F0F;
    // }

    // &--down::after {
    //   top: -#{$arrowSize};
    //   left: calc(50% - #{$arrowSize / 2});
    //   width: 0; 
    //   height: 0; 
    //   border-left: $arrowSize solid transparent;
    //   border-right: $arrowSize solid transparent;
    //   border-top: $arrowSize solid #0F0F0F;
    // }

    // &--right::after {
    //   width: 0; 
    //   height: 0; 
    //   border-top: $arrowSize solid transparent;
    //   border-bottom: $arrowSize solid transparent;
    //   border-left: $arrowSize solid 0F0F0F;
    // }

    // &--left::after {
    //   width: 0; 
    //   height: 0; 
    //   border-top: $arrowSize solid transparent;
    //   border-bottom: $arrowSize solid transparent; 
    //   border-right: $arrowSize solid 0F0F0F; 
    // }    
  }
}
</style>

