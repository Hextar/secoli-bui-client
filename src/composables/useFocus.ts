import { onBeforeUnmount, onMounted, ref, Ref } from 'vue'

/**
 * Attempt to provide a global hotkey hook.
 * The general idea is, only one handler per key can be mapped.
 * If more then one gets mapped, an error is thrown
 */
export const useFocus = (targetClassName: string, handler: () => void) => {
  const focused: Ref<Boolean> = ref(false)

  const onFocusChange = (event: FocusEvent): void => {
    const path = event.composedPath()
    try {
      const oldVal = focused.value
      const newVal = (path as HTMLDivElement[]).some(({ className }) =>
        className === targetClassName)
      focused.value = newVal
      if (newVal !== oldVal) { handler() }
    } catch (err: unknown) {
      focused.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', onFocusChange)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', onFocusChange)
  })

  return {
    onFocusChange,
    focused
  }
}
