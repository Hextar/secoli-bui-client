import { nextTick, onMounted, onBeforeUnmount, readonly, ref, Ref } from 'vue'

type UseBoundingRectReturnType = {
  width: Readonly<Ref<number>>,
  height: Readonly<Ref<number>>,
  top: Readonly<Ref<number>>,
  right: Readonly<Ref<number>>,
  bottom: Readonly<Ref<number>>,
  left: Readonly<Ref<number>>
}
/**
 * Provide a getBoundingClientRect composable
 */
export const useBoundingRect = (target: Ref<HTMLElement | undefined>): UseBoundingRectReturnType => {
  // VARIABLES
  const width: Ref<number> = ref(0)
  const height: Ref<number> = ref(0)
  const top: Ref<number> = ref(0)
  const right: Ref<number> = ref(0)
  const bottom: Ref<number> = ref(0)
  const left: Ref<number> = ref(0)

  if (!target) { return { width, height, top, right, bottom, left } }

  // METHODS
  const handleResize = () => {
    if (!target) { return }
    const { height: h, width: w, top: t, right: r, bottom: b, left: l } = (target.value as Element).getBoundingClientRect()
    height.value = h
    width.value = w
    top.value = t
    right.value = r
    bottom.value = b
    left.value = l
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width: readonly(width),
    height: readonly(height),
    top: readonly(top),
    right: readonly(right),
    bottom: readonly(bottom),
    left: readonly(left),
  }
}
