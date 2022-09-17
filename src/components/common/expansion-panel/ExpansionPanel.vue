<script setup lang="ts">
// PROPS
const props = defineProps({
  value: { default: false, type: Boolean }
})

// USE
const { emit } = getCurrentInstance() as NonNullable<ReturnType<typeof getCurrentInstance>>

// METHODS
const onToggle = (): void => {
  emit('update:value', !props.value)
}
</script>

<template>
  <div class="expansion-panel">
    <div class="expansion-pane__trigger relative flex justify-center items-center" @click="onToggle">
      <slot name="trigger" />
    </div>
    <div v-if="value" class="expansion-pane__content relative flex justify-start items-start">
      <slot name="content" />
    </div>
  </div>
</template>