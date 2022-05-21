import { VueInstance } from '@vueuse/core'
import { onBeforeUnmount, onMounted, ref, Ref } from 'vue'

type UseFocusType = {
  /**
   * Hold if the item is currently focused
   */
  focused: Ref<Boolean>,
  /**
   * Check if the focus has changed
   */
  onFocusChange: (evt: FocusEvent) => void
}

type UseSetFocusType = {
  /**
   * manually focus/blur a DOM element based on its ref
   * optionally passing click: true also click the element,
   * as it's useful in some cases
   */
  setFocus: (ref: HTMLElement | null, value: boolean, click?: boolean) => void
}

/**
 * Attempt to provide a global hotkey hook.
 * The general idea is, only one handler per key can be mapped.
 * If more then one gets mapped, an error is thrown
 */
export const useFocus = (targetClassName: string, handler: () => UseFocusType) => {
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

/**
 * Provide a way to easily focus/blur an element by its ref
 */
export const useSetFocus = (): UseSetFocusType => {
  const setFocus = (
    ref: HTMLElement | null | VueInstance,
    value: boolean,
    performClick: boolean = false
  ): void => {
    try {
      if (ref) {
        const el = '$el' in ref ? ref.$el as HTMLElement : ref
        if (value) {
          if ('focus' in el) { el.focus() }
          if (performClick && 'click' in el) { el.click() }
        } else {
          if ('blur' in el) { el.blur() }
        }
      } else {
        console.warn('useSetFocus, specified ref is undefined')
      }
    } catch (err: unknown) {
      console.warn(`useSetFocus, ${err}`)
    }
  }

  return {
    setFocus
  }
}