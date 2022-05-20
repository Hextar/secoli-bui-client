import { computed, onMounted, onUnmounted, readonly, ref } from 'vue'

export enum VIEWPORT {
  MOBILE = 640,
  TABLET = 768,
  DESKTOP = 1024,
  LARGE_DESKTOP = 1440,
}

export const useViewport = () => {
  // VARIABLES
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  // COMPUTED
  const isMobile = computed(() => width.value <= VIEWPORT.MOBILE)
  const isTablet = computed(() => width.value > VIEWPORT.MOBILE && width.value <= VIEWPORT.TABLET)
  const isDesktop = computed(() => width.value > VIEWPORT.TABLET && width.value <= VIEWPORT.DESKTOP)
  const isLargeDesktop = computed(() => width.value > VIEWPORT.DESKTOP)

  const aboveMobile = computed(() => width.value > VIEWPORT.MOBILE)
  const aboveTablet = computed(() => width.value > VIEWPORT.TABLET)
  const aboveDesktop = computed(() => width.value > VIEWPORT.DESKTOP)

  const belowTablet = computed(() => width.value <= VIEWPORT.TABLET)
  const belowDesktop = computed(() => width.value <= VIEWPORT.DESKTOP)
  const belowLargeDesktop = computed(() => width.value <= VIEWPORT.LARGE_DESKTOP)

  // METHODS
  const handleResize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  // ON MOUNTED
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  // ON UNMOUNTED
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width: readonly(width),
    height: readonly(height),
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    aboveMobile,
    aboveTablet,
    aboveDesktop,
    belowTablet,
    belowDesktop,
    belowLargeDesktop,
  }
}
