<script setup lang="ts">
import { PropType, ref } from 'vue'

import { Popper } from 'vue-use-popperjs'

import { TooltipDelay } from '~/types'

export type TooltipPosition =
  | 'top-start' | 'top' | 'top-end'
  | 'right-start' | 'right' | 'right-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'
  | 'left-start' | 'left' | 'left-end'

export type TooltipTrigger =
  | 'hover'
  | 'focus'
  | 'click-to-open';
  
// PROPS
const props = defineProps({
  trigger: { type: String as PropType<TooltipTrigger>, default: 'hover'},
  placement: { type: String as PropType<TooltipPosition>, default: 'bottom' },
  delay: { type: Object as PropType<TooltipDelay>, default: { show: 150, hide: 150 } },
  disabled: { type: Boolean, default: false },
  forceShow: { Boolean, default: false },
})

// VARIABLES
const teleportToBody = ref(false);
const useTransition = ref(true);
const modifiers = [
  {
    name: "offset",
    options: {
      offset: [0, 8],
    },
  },
];
</script>

<template>
  <div id="root">
    <Popper
      :reference-props="{ id: 'trigger' }"
      :popper-props="{ id: 'tooltip' }"
      :trigger="props.trigger || 'hover'"
      :disabled="disabled"
      :teleport-props="teleportToBody ? { to: 'body' } : undefined"
      :transition-props="useTransition ? { name: 'fade' } : undefined"
      :placement="placement"
      :modifiers="modifiers"
      :delay-on-mouseover="delay.show"
      :delay-on-mouseout="delay.hide"
      :force-show="forceShow"
    >
      <template #reference>
        <slot name="trigger"></slot>
      </template>
      <span
        class="tooltip__content pa-2 bg-black-700 text-base rounded"
      >
        <slot />
        <div id="arrow" data-popper-arrow />
      </span>
    </Popper>
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

