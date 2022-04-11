<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>

<style lang="scss">
.storybook-button {
  display: inline-block;
  font-family: 'Marcellus', Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0;
  line-height: 1;
  cursor: pointer;

  &--primary {
    color: white;
    background-color: var(--primary-500);
  }

  &--secondary {
    color: white;
    background-color: var(--secondary-500);
  }

  &--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &--large {
    font-size: 16px;
    padding: 12px 24px;
  }
}

</style>