import { computed, onMounted, onUnmounted, ref, Ref, } from 'vue';

export const useScroll = () => {
  // VARIABLES
  const scrollY = ref(0);
  const scrollX = ref(0);

  // COMPTUED
  const hasScrolledY = computed(() => (scrollY.value || 0) > 100)
  const hasScrolledX = computed(() => (scrollX.value || 0) > 100)

  // METHODS
  const onScroll = (): void => {
    scrollY.value = window?.scrollY
    scrollX.value = window?.scrollX
  }

  const scrollToRef = (ref: Ref, callback: () => {}): void => {
    const { offsetTop: top, offsetHeight: height } = ref.value
    window.scrollTo({ top: top + height, behavior: 'smooth' })
    callback()
  }

  // ON MOUNTED
  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
  });

  // ON UNMOUNTED
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    scrollY,
    scrollX,
    hasScrolledY,
    hasScrolledX,
    scrollToRef
  }  
}